create table trade_users (
    user_id serial primary key,
    username varchar(50),
    password varchar(250)
);

create table trade_item (
    my_item serial primary key,
    item_id int,
    name varchar(100) not null,
    description varchar(5000) not null,
    img text,
    cost varchar(75),
    user_id int,
    FOREIGN key(user_id) references trade_users(user_id)
);
-- todo my user_id and item_id is bringing up null?????? need help.
-- todo also assuming that my other id's are null.
create table item (
    id serial primary key,
    item_id int UNIQUE,
    name varchar(100) not null,
    description varchar(5000) not null,
    img text,
    cost varchar(75),
    foreign key(item_id) references trade_item (item_id)
);


create table rooms (
    id serial PRIMARY KEY
);

create table messages (
    msg_id serial primary key,
    name text,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    id int,
    foreign key(id) references rooms(id)
);


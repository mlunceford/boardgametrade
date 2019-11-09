-- insert into trade_item (
--     name,
--     description,
--     img,
--     cost
-- )
-- values (
--     $1,
--     $2,
--     $3,
--     $4
-- );
-- select * 
-- from trade_item
-- order by my_item;

insert into trade_item (
    name,
    description,
    img,
    cost,
    user_id
)
values (
    $1,
    $2,
    $3,
    $4,
    $5
);
select * 
from trade_item
order by my_item;

insert into trade_item (
    name,
    description,
    img,
    cost
)
values (
    $1,
    $2,
    $3,
    $4
);
select * 
from trade_item
order by my_item;

update trade_item   
set 
name = $1,
description = $2,
img = $3,
cost = $4
where item_id = $5;

select *
from trade_item
order by item_id;
-- todo maybe order by user_id???????

-- testing postman
-- {
--     "name": "edit",
--     "description": "edit desc",
--     "img": "edit",
--     "cost": 100
-- }
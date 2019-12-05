delete from trade_item
where item_id = $1;

select *
from trade_item
order by item_id;
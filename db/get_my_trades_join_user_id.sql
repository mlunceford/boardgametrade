select * from trade_users
join trade_item
on trade_users.user_id = trade_item.user_id
where trade_item.user_id = $1;s
select * from orders as o
join users as u on u.id = o.userid
where o.userid = $1
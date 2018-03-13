select * from cart as c
--107D
join users as u on u.id = c.userid
where userid = 23
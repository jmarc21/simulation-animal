insert into cart(
    animal, userid
)
values(
    $1, $2
)
returning *;
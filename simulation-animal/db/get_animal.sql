select a.animal, d.detail, f.feedtime from animal as a
join details as d on d.detailid = a.detailid
join feed as f on f.feedid = a.feedid
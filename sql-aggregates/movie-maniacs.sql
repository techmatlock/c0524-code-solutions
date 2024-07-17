select "c"."firstName",
       sum("payments"."amount") as "rentalAmount"
from "customers" as "c"
join "payments" using ("customerId")
group by "c"."firstName"
order by "rentalAmount" desc

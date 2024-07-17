select "payments"."customerId",
       "customers"."customerId",
       "customers"."firstName",
       "customers"."lastName"
from "payments"
join "customers" using ("customerId")
order by "payments"."amount" desc
limit 10;

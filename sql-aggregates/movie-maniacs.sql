select "firstName",
       "lastName",
       sum("payments"."amount") as "rentalAmount"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "rentalAmount" desc

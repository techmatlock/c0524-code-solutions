select "c"."name" as "country",
      count(*) as "totalCities"
  from "countries" as "c"
  join "cities" using ("countryId")
  group by "c"."name";

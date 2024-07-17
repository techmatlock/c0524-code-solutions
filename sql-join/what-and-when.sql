select "f"."releaseYear",
       "genres"."name"
from "filmGenre"
join "genres" using ("genreId")
join "films" as "f" using ("filmId")
where "f"."title" = 'Boogie Amelie'

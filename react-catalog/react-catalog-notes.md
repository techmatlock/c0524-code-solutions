# react-catalog-notes

## Notes

1) Create a components folder in src and a pages folder in my-app
  - The pages folder needs a catalog component, link card component, about, details, and not found
  - The src folder should contain the header component
2) Add a BrowserRouter in main.tsx and implement the routes in App.
  - You will need a header route with the path set to "/"
  - The header route will contain (don't forget to include <Outlet /> component in the header component):
    - catalog route with the index prop
    - details route with "/details/:productId"
    - about route with "/about"
    - not found route with "*"
3) Import the read.ts into your catalog route and details route.

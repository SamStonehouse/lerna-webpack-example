# lerna-webpack-test

## Setup

- `npm install` - install dependencies

- `npm run bootstrap` - runs lerna bootstrap which hoists and links dependencies

- `npm run dev`- runs webpack-dev-server

## Next steps

- Update webpack to remove final issues regarding upgrade to webpack 4
- Change webpack builds to be for each main module
- Create a main module which is both built on it's own and required as part of a package
- Consider moving webpack builds into their own package folders
- Update webpack builds to use Jest
- Create an example with react-router to test nested routes in projects
  - It would be useful to know if a nested component <ComponentA> with a route, when nested inside a separate component <ComponentB> from a different package, whether the path /componentb/componenta can be achieved easily without extra setup/config
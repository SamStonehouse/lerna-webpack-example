# lerna-webpack-test

## Setup

- `npm install` - install dependencies

- `npm run bootstrap && run bootstrap-hoist` - runs lerna bootstrap which installs dependencies and then hoists them so common modules are shared


## Next steps

- Create react component with tests as one of the modules
- Add react-storybook (?)
- Create local package for eslint config
- Create local package for postcss.config.js (?)
- Update webpack to remove final issues regarding upgrade to webpack 4
- Create a main module which is both built on it's own and required as part of a package
- Create an example with react-router to test nested routes in projects
  - It would be useful to know if a nested component <ComponentA> with a route, when nested inside a separate component <ComponentB> from a different package, whether the path /componentb/componenta can be achieved easily without extra setup/config

  ## Done
- Change webpack builds to be for each main module
- Consider moving webpack builds into their own package folders
- Add eslint to Webpack directory
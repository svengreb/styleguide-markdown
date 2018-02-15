> Please make sure to complete the [requirement][requirements] steps first in order to build the project!

Run `npm install` from within the project root to bootstrap the project and install all dependencies.

Continuous integration builds are running at [Circle CI][ci-circle].

## Documentations

This documentation can be build by running

```sh
npm run docs:build
```

from within the project root to bootstrap the build toolchain and install all dependencies. The output will be placed in `build/docs`.

To start the local hot reload server with browser live reload, using the default port `4000`, run

```sh
npm run docs:dev
```

[requirements]: requirements.md

[ci-circle]: https://circleci.com/gh/arcticicestudio/styleguide-markdown

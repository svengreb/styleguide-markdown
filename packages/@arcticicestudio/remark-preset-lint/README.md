<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/main/assets/images/packages/@arcticicestudio/remark-preset-lint/repository-hero.svg?sanitize=true"/></p>

<p align="center">The <a href="https://github.com/arcticicestudio/styleguide-markdown" target="_blank" rel="noreferrer">Arctic Ice Studio Markdown code style guide</a> rules as an extensible <a href="https://github.com/remarkjs/remark-lint" target="_blank" rel="noreferrer">remark-lint</a> rule preset.</p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/releases/latest" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://arcticicestudio.github.io/styleguide-markdown" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Docs&logo=read-the-docs&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://github.com/arcticicestudio/styleguide-markdown/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Changelog&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/@arcticicestudio/remark-preset-lint" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@arcticicestudio/remark-preset-lint.svg?style=flat-square&label=npm&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a> <a href="https://www.npmjs.com/package/@arcticicestudio/remark-preset-lint" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/dt/@arcticicestudio/remark-preset-lint.svg?style=flat-square&label=Downloads&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/releases/latest" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Markdown%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=markdown"/></a> <a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=JavaScript%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=javascript"/></a> <a href="https://github.com/arcticicestudio/styleguide-git/releases/latest" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-git.svg?style=flat-square&label=Git%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=git"/></a></p>

This package implements the rules of the [Arctic Ice Studio Markdown style guide][gh-arcticicestudio/styleguide-markdown] as an extensible [remark-lint][gh-remarkjs/remark-lint] rule preset. It supports all [official core rules][gh-remarkjs/remark-lint-blob-docs-rules] and [various plugins][gh-remarkjs/remark-blob-docs-plugins] like the [“frontmatter” Markdown extension][gh-remarkjs/remark-frontmatter] for [YAML][] and [TOML][gh-toml-lang/toml] and [“GitHub Flavoured” Markdown][gh-remarkjs/remark-gfm].

## Getting Started

Note that this package uses [npm version 7.7.0 or higher][gh-blog-npm_v7] as the main package manager, but the documentations also include instructions to work with [Yarn][yarn-classic] (classic / `v1`).

### Installation

Add the package as development dependency to your project:

```sh
# With npm...
npm install --save-dev @arcticicestudio/remark-preset-lint

# or Yarn.
yarn add --dev @arcticicestudio/remark-preset-lint
```

Note that [peer dependencies][node-blog-peer_deps], like the [remark-lint][gh-remarkjs/remark-lint] package itself, are **only installed automatically when using a npm version equal or higher than `7.0.0`**, otherwise they must be installed separately like described in the [peer dependencies](#peer-dependencies) section below.
See the [Node distribution index][node-dist-index] for more information about which npm version is bundled with which Node version.

#### Peer Dependencies

This package depends on [various remark-lint rule packages][gh-remarkjs/remark-lint-tree-pkgs] that are defined as [peer dependencies][node-blog-peer_deps].

##### npm versions `>=7.0.0`

As of **npm version `7.0.0`, peer dependencies are** [**installed automatically**][gh-npm/rfcs-blob-install_peer_deps] and does not require any additional steps.

##### npm versions `>=5.0.0 <7.0.0`

For **npm version equal to or higher than `5.0.0` (pre-bundled with [Node.js 8][node-dist-v8-latest]) but less than `7.0.0`**, all peer dependencies can be auto-installed using the pre-bundled [`npx`][npm-npx] package:

```sh
npx install-peerdeps --dev @arcticicestudio/remark-preset-lint
```

##### npm versions `<5.0.0`

If you’re using a **npm version less than `5.0.0`**, the `npx` package is not pre-bundled, but users can either simply install the [`npx`][npm-npx] package globally to run the above command or use the [install-peerdeps][npm-install-peerdeps] helper package locally/globally to let it handle the installation of all peer dependencies:

```sh
# Install and use the "install-peerdeps" helper package locally...
npm install install-peerdeps
./node_modules/.bin/install-peerdeps --dev @arcticicestudio/remark-preset-lint

# ...or globally.
npm install --global install-peerdeps
install-peerdeps --dev @arcticicestudio/remark-preset-lint
```

To install all peer dependencies manually without `npx` or any helper package, the npm `info` command can be used to get a list of all packages and their versions:

```sh
# List the names and versions of all peer dependencies...
npm info "@arcticicestudio/remark-preset-lint" peerDependencies

# ...and install each listed package manually.
npm install PACKAGE@VERSION
```

##### Using Yarn instead of npm

If you’re not using npm but Yarn, peer dependencies can be installed by either adding them manually or using the [install-peerdeps][npm-install-peerdeps] helper package:

```sh
# Either add all packages manually by listing all required names and their versions and install them manually...
yarn info @arcticicestudio/remark-preset-lint peerDependencies
yarn add --dev remark-lint #...

# ...or use the "install-peerdeps" helper package.
yarn add --dev install-peerdeps
yarn run install-peerdeps --dev @arcticicestudio/remark-preset-lint
```

## Usage

The package can be used as rule preset by adding it to the plugins within your `.remarkrc.js` or `.remarkrc` [configuration file][remark-lint-doc-conf]:

```js
module.exports = {
  plugins: ["@arcticicestudio/remark-preset-lint"],
};
```

## Contributing

Please read the [contribution guidelines][ghio-arcticicestudio/styleguide-markdown-dev-contributing] of the [Arctic Ice Studio Markdown style guide][gh-arcticicestudio/styleguide-markdown] for more details.

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/images/nord/repository-footer-separator.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present <a href="https://www.arcticicestudio.com" target="_blank" rel="noreferrer">Arctic Ice Studio</a> and <a href="https://www.svengreb.de" target="_blank" rel="noreferrer">Sven Greb</a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/blob/main/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&logo=github&colorA=4c566a&colorB=88c0d0"/></a></p>

[gh-arcticicestudio/styleguide-markdown]: https://github.com/arcticicestudio/styleguide-markdown
[gh-blog-npm_v7]: https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli
[gh-npm/rfcs-blob-install_peer_deps]: https://github.com/npm/rfcs/blob/latest/implemented/0025-install-peer-deps.md
[gh-remarkjs/remark-blob-docs-plugins]: https://github.com/remarkjs/remark/blob/main/doc/plugins.md
[gh-remarkjs/remark-frontmatter]: https://github.com/remarkjs/remark-frontmatter
[gh-remarkjs/remark-gfm]: https://github.com/remarkjs/remark-gfm
[gh-remarkjs/remark-lint-blob-docs-rules]: https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
[gh-remarkjs/remark-lint-tree-pkgs]: https://github.com/remarkjs/remark-lint/tree/main/packages
[gh-remarkjs/remark-lint]: https://github.com/remarkjs/remark-lint
[gh-toml-lang/toml]: https://github.com/toml-lang/toml
[ghio-arcticicestudio/styleguide-markdown-dev-contributing]: https://arcticicestudio.github.io/remark-preset-lint-arcticicestudio/development/contributing.html
[node-blog-peer_deps]: https://nodejs.org/en/blog/npm/peer-dependencies
[node-dist-index]: https://nodejs.org/dist/index.json
[node-dist-v8-latest]: https://nodejs.org/dist/latest-v8.x
[npm-install-peerdeps]: https://www.npmjs.com/package/install-peerdeps
[npm-npx]: https://www.npmjs.com/package/npx
[remark-lint-doc-conf]: https://github.com/remarkjs/remark-lint#configuring-remark-lint
[yaml]: http://yaml.org
[yarn-classic]: https://classic.yarnpkg.com

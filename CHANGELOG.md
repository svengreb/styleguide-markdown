<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/main/assets/images/repository-hero.svg?sanitize=true"/></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/releases/latest" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://arcticicestudio.github.io/styleguide-markdown" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Docs&logo=read-the-docs&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/@arcticicestudio/remark-preset-lint" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@arcticicestudio/remark-preset-lint.svg?style=flat-square&label=@arcticicestudio/remark-preset-lint&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a></p>

<p align="center">Changelog for the official <a href="https://github.com/arcticicestudio/styleguide-markdown" target="_blank" rel="noreferrer">Arctic Ice Studio Markdown code style</a>.</p>

<!--lint disable no-duplicate-headings no-duplicate-headings-in-section-->

# 0.4.0

![Release Date: 2021-04-06](https://img.shields.io/static/v1?style=flat-square&label=Release%20Date&message=2021-04-06&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1?style=flat-square&label=Project%20Board&message=0.4.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/styleguide-markdown/projects/5) [![Milestone](https://img.shields.io/static/v1?style=flat-square&label=Milestone&message=0.4.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/styleguide-markdown/milestone/3)

⇅ [Show all commits][gh-compare-tag-v0.2.0_v0.4.0]

> Detailed information can be found in the [project documentation][docs].

This version changes this repository into a [monorepo][trbdev-monorepo], deprecates the [remark-preset-lint-arcticicestudio][gh-arcticicestudio/remark-preset-lint-arcticicestudio] package in favour of the new [@arcticicestudio/remark-preset-lint][gh-tree-pkgs-@ais-remark-preset-lint] package and adds support for [remark `13.0.0`][gh-remarkjs/remark-rel-v13.0.0].

## Feature

<details>
<summary><strong>Monorepo with remark packages</strong> — #10 ⇄ #12 (⊶ 0c21fabc)</summary>

↠ Before this change this repository only contained the actual style guide documentation while specific projects that implement the guidelines for linters and code style analyzer lived in separate repositories. This was the best approach for modularity and a small and clear code base, but it increased the maintenance overhead by `1(n)` since changes to the development workflow or toolbox, general project documentations as well as dependency management required changes in every repository with dedicated tickets/issues and PRs. In particular, Node packages require frequent dependency management due to their fast development cycles to keep up-to-date with the latest package changes like (security) bug fixes.

This style guide was implemented by the [remark-preset-lint-arcticicestudio][gh-arcticicestudio/remark-preset-lint-arcticicestudio] Node package that lived in its own repository. The development workflow was clean using most of GitHub's awesome features like project boards, _codeowner_ assignments, issue & PR automation and so on, but changes often required multiple actions when packages depend on each other or they use the same development tooling and documentation standards.

### Monorepo Comparison

[Monorepos][trbdev-monorepo] are a fantastic way to manage such a project structure, but there are also some points that must be taken into account:

- **No more scoped code** — the developer experience with Git is slightly worse because commits can contains changes to multiple scopes of the code. Since there is only a “transparent separation” of code, that was previously located in a dedicated repository but is not aggregated into a parent (e.g. `packages`) with other modules, commits can now contain changes to multiple code scopes spread over the entire code base.
- **No more assignment of commits to single modules** — like described in the bullet point above, commit can contain changes to multiple modules, it is harder to detect which commit targeted a specific module.
- **Steeper learning curve for new contributors** — in a dedicated repository that only hosts a specific module it is easier for new developers to contribute to the project, but in a monorepo they might need to change code in multiple places within other modules or the root code/documentation of the entire project.
- **Uniform version number** — in order to keep conform to [SemVer][], the entire project must use a uniform version number. This means that a module that has not been changed since the last version must also be incremented in order to keep compatible with the other modules.
  Using different version numbers prefixed/suffixed with an individual version number **is a not an option**, **increases the maintenance overhead** and **and drastically reduces the project overview and quality**! This would result in multiple Git tags on the `main` branch as well as “empty” changelogs and release notes with placeholder logs that only refer to changes of other modules.

### Project Future

Even though a _monorepo_ required some special thoughts, it also comes with a lot of benefits and makes sense **for specific project modules that are slightly coupled** and where using dedicated repositories only increases the maintenance overhead **when changes must be reflected in multiple modules anyway**.

In order to reduce the maintenance overhead, the [remark-preset-lint-arcticicestudio][gh-arcticicestudio/remark-preset-lint-arcticicestudio] Node package has been migrated into this repository by adapting to [Yarn workspaces][yarn-docs-ws]. This simplifies the development tooling setup and allows to use a unified documentation base as well as a smoother development and testing workflow.

This change also implies that the root of the repository is the main package for the entire project setup including shared development dependencies, tools and documentations while the packages only contain specific configurations and (dev)dependencies.

### Scoped Packages

Before [remark-preset-lint-arcticicestudio][gh-arcticicestudio/remark-preset-lint-arcticicestudio] was not a [scoped package][npm-docs-scopes] but suffixed with `-arcticicestudio`. To simplify the naming and improving the usage of user/organization specific packages, it is now scoped to `@arcticicestudio` resulting in the new name `@arcticicestudio/remark-preset-lint`.
The currently released public version has been deprecated using the [`npm deprecate` command][npm-docs-cli-depr] where the provided message points out to migrate to the new scoped packages.

### Versioning

The style guide itself and all packages use a shared/fixed/locked version. This helps all packages to keep in sync and ensure the compatibility with the latest style guide version.

</details>

<details>
<summary><strong>Update to remark <code>13.0.0</code> (micromark)</strong> — #28 ⇄ #29 (⊶ 9ff968f6)</summary>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/113579731-fd719300-9624-11eb-886e-871189e61eb5.png" width="75%" /></p>
<!-- Source: https://raw.githubusercontent.com/remarkjs/remark/1f338e72/logo.svg?sanitize=true-->

↠ [remark 13.0.0][gh-remarkjs/remark-rel-v13.0.0] is a giant change for remark that replaced the 5+ year old internals with a new low-level parser called [micromark][gh-micromark/micromark]. It comes with 100% CommonMark (and GFM as an extension) compliance and is a good base for the future of remark and Markdown.

### Migration

This projects uses remark through the [remark-lint][gh-remarkjs/remark-lint] plugin, which introduced support for remark `13.0.0` in its [package version `8.0.0`][gh-remarkjs/remark-lint-rel-v8.0.0], and the [remark-cli][gh-remarkjs/remark] package, which comes with support for remark `13.0.0` in its [package version `9.0.0`][gh-remarkjs/remark-rel-remark-cli@9.0.0].

- **Updated `remark-cli`** — bumped minimum version from [`5.0.0` to `9.0.0`][gh-remarkjs/remark-comp-remark-cli@5.0.0_remark-cli@9.0.0]
- **Updated `remark-lint`** — bumped minimum version from [`6.0.1` to `8.0.0`][gh-remarkjs/remark-lint-comp-6.0.0_8.0.0]
- **Updated all `remark-lint-*` packages** — the [`@arcticicestudio/remark-preset-lint`][gh-tree-pkgs-@ais-remark-preset-lint] packages supports all `remark-lint-*` core rule packages whose minimum versions are now bumped to the major version that introduced support for remark `13.0.0`.
- **Added [`remark-gfm` plugin][gh-remarkjs/remark-gfm]** — the support for [GitHub Flavored Markdown][gfm] has been moved into the `remark-gfm` plugin.
- **Added [`remark-footnotes` plugin][gh-remarkjs/remark-footnotes]** — adds support for [Pandoc][] footnotes.
- **Validated the code base with new linter rules** — Run checks with updated packages afterwards to fix and improve results found by linters.

### Features

Because most package versions that are currently used were not up-to-date before, support for new features like core rules has also been added:

- **Support for [`remark-lint-no-duplicate-defined-urls`][gh-remarkjs/remark-lint-tree-pkgs-remark-lint-no-duplicate-defined-urls]** — the core rule warns when definitions define the same URL.
- **Support for [`remark-lint-no-unneeded-full-reference-image`][gh-remarkjs/remark-lint-tree-pkgs-remark-lint-no-unneeded-full-reference-image]** — the core rule warns when full reference images are used that could be collapsed.
- **Support for [`remark-lint-no-unneeded-full-reference-link`][gh-remarkjs/remark-lint-tree-pkgs-remark-lint-no-unneeded-full-reference-link]** — the core rule warns when full reference links are used that could be collapsed.

</details>

## Improvements

<details>
<summary><strong>Plain text format for license file</strong> — #6 (⊶ a6f53c13) by <a href="https://github.com/amayer5125" target="_blank" rel="noreferrer">@amayer5125</a></summary>

↠ Refactored the `LICENSE.md` file to use plain text instead of Markdown syntax and removed the `.md` file extension leaving the file named as `LICENSE`.
Therefore the linting ignore statements have also been removed as well as adjusting the actual text to match exactly the one of the [MIT license][choselic-mit].
This allows GitHub to display “MIT“ as the license instead of just showing a “View license“ placeholder text.

</details>

<details>
<summary><strong>“tmpl“ template repository migration</strong> — #11 ⇄ #13 (⊶ 47660393)</summary>

<p align="center"><img src="https://github.com/svengreb/tmpl/blob/main/assets/images/repository-hero.svg?raw=true"/></p>

↠ Migrated the project setup, structure and development workflow [from version 0.9.0][svengreb/tmpl-rl-v0.9.0] of the [“tmpl“ template repository][svengreb/tmpl].
Additionally specific assets like the repository hero image have been replaced and documentations like the _README_ and GitHub issue/PR templates adjusted.

</details>

## Bug Fixes

<details>
<summary><strong>Invalid list entry character in documentation summary</strong> — #5 (⊶ 2fe4ad65) by <a href="https://github.com/amayer5125" target="_blank" rel="noreferrer">@amayer5125</a></summary>

↠ Changed the invalid list entry character from `*` to `-` in the summary of the documentation to adhere to the style guide and fix failing CI builds.

</details>

## Tasks

<details>
<summary><strong>Update remark URLs to reflect <code>master</code> → <code>main</code> branch renaming</strong> — #7 (⊶ 23130286) by <a href="https://github.com/outloudvi" target="_blank" rel="noreferrer">@outloudvi</a></summary>

↠ Updated the default branch name from `master` to `main` which is a global change due to recent humanity movements. Also see #21 (or the entry in this version changelog) for more details about how this projects also adapted this change.

</details>

<details>
<summary><strong>GitHub Flow migration</strong> — #19 ⇄ #20 (⊶ cf6f3fa2)</summary>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/78555431-4e318e80-780d-11ea-8ff4-52f9a9a27682.png" /></p>

> Subtask of arcticicestudio/styleguide-git#9

↠ Adapted to [GitHub Flow][gh-guides-flow] like documented in detail in the main task issue arcticicestudio/styleguide-git#9.

</details>

<details>
<summary><strong>From <code>master</code> to <code>main</code></strong> — #21 ⇄ #22 (⊶ c7946f2e)</summary>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/113505556-d8572480-953f-11eb-8e72-2a7ba7387765.png" /></p>

> Subtask of arcticicestudio/styleguide-git#11

↠ Adapted to the [default branch renaming from `master` to `main`][gh-github/renaming] like documented in detail in the main task issue arcticicestudio/styleguide-git#11.

</details>

# 0.2.0

![Release Date: 2018-11-15](https://img.shields.io/static/v1?style=flat-square&label=Release%20Date&message=2018-11-15&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1?style=flat-square&label=Project%20Board&message=0.2.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/styleguide-markdown/projects/3) [![Milestone](https://img.shields.io/static/v1?style=flat-square&label=Milestone&message=0.2.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/styleguide-markdown/milestone/2)

⇅ [Show all commits][gh-compare-tag-v0.1.0_v0.2.0]

> Detailed information can be found in the [project documentation][docs].

## Improvements

### Rules

<details>
<summary><strong>Change unordered marker from asterisk to dash</strong> — #3 ⇄ #4 (⊶ fea20a63)</summary>

↠ Changed [unordered list marker][docs-unordered-marker] from asterisk `*` to dash `-` because asterisks can be confused for bold/italic markers. This also aligns with the default format of Prettier.

</details>

# 0.1.0

![Release Date: 2018-02-15](https://img.shields.io/static/v1?style=flat-square&label=Release%20Date&message=2018-02-15&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1?style=flat-square&label=Project%20Board&message=0.1.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/styleguide-markdown/projects/2) [![Milestone](https://img.shields.io/static/v1?style=flat-square&label=Milestone&message=0.1.0&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0)](https://github.com/arcticicestudio/styleguide-markdown/milestone/1)

⇅ [Show all commits][gh-compare-tag-init_v0.1.0]

> Detailed information can be found in the [project documentation][docs].

## Features

### Rules

<details>
<summary><strong>Change unordered marker from asterisk to dash</strong> — #1 ⇄ #2 (⊶ 261fe4cb)</summary>

↠ Added the initial style guide with the [comprehensive base rule set][docs-rules] with support for [GitHub Flavored Markdown][gfm] which is based on the [CommonMark][] specification.

</details>

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/images/nord/repository-footer-separator.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present <a href="https://www.arcticicestudio.com" target="_blank" rel="noreferrer">Arctic Ice Studio</a> and <a href="https://www.svengreb.de" target="_blank" rel="noreferrer">Sven Greb</a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/blob/main/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&logo=github&colorA=4c566a&colorB=88c0d0"/></a></p>

<!--
+------------------+
+ Formatting Notes +
+------------------+

The `<summary />` tag must be separated with a blank line from the actual item content paragraph,
otherwise Markdown elements are not parsed and rendered!

+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
⇅ (U+21C5): Icon prefix for the link of the Git commit history comparison on GitHub
-->

<!--lint disable final-definition-->

<!-- Shared -->

[docs]: https://arcticicestudio.github.io/styleguide-markdown
[gfm]: https://github.github.com/gfm

<!-- v0.1.0 -->

[commonmark]: http://commonmark.org
[docs-rules]: https://arcticicestudio.github.io/styleguide-markdown/rules/index.html
[gh-compare-tag-init_v0.1.0]: https://github.com/arcticicestudio/styleguide-markdown/compare/e894a349...v0.1.0

<!-- v0.2.0 -->

[docs-unordered-marker]: https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#unordered-marker
[gh-compare-tag-v0.1.0_v0.2.0]: https://github.com/arcticicestudio/styleguide-markdown/compare/v0.1.0...v0.2.0

<!-- v0.4.0 -->

[choselic-mit]: https://choosealicense.com/licenses/mit
[gh-arcticicestudio/remark-preset-lint-arcticicestudio]: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
[gh-compare-tag-v0.2.0_v0.4.0]: https://github.com/arcticicestudio/styleguide-markdown/compare/v0.2.0...v0.4.0
[gh-github/renaming]: https://github.com/github/renaming
[gh-guides-flow]: https://guides.github.com/introduction/flow
[gh-micromark/micromark]: https://github.com/micromark/micromark
[gh-remarkjs/remark-comp-remark-cli@5.0.0_remark-cli@9.0.0]: https://github.com/remarkjs/remark/compare/remark-cli@5.0.0...remark-cli@9.0.0
[gh-remarkjs/remark-footnotes]: https://github.com/remarkjs/remark-footnotes
[gh-remarkjs/remark-gfm]: https://github.com/remarkjs/remark-gfm
[gh-remarkjs/remark-lint-comp-6.0.0_8.0.0]: https://github.com/remarkjs/remark-lint/compare/6.0.0...8.0.0
[gh-remarkjs/remark-lint-rel-v8.0.0]: https://github.com/remarkjs/remark-lint/releases/tag/8.0.0
[gh-remarkjs/remark-lint-tree-pkgs-remark-lint-no-duplicate-defined-urls]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-defined-urls
[gh-remarkjs/remark-lint-tree-pkgs-remark-lint-no-unneeded-full-reference-image]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-image
[gh-remarkjs/remark-lint-tree-pkgs-remark-lint-no-unneeded-full-reference-link]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-link
[gh-remarkjs/remark-lint]: https://github.com/remarkjs/remark-lint
[gh-remarkjs/remark-rel-remark-cli@9.0.0]: https://github.com/remarkjs/remark/releases/tag/remark-cli%409.0.0
[gh-remarkjs/remark-rel-v13.0.0]: https://github.com/remarkjs/remark/releases/tag/13.0.0
[gh-remarkjs/remark]: https://github.com/remarkjs/remark
[gh-tree-pkgs-@ais-remark-preset-lint]: https://github.com/arcticicestudio/styleguide-markdown/tree/main/packages/%40arcticicestudio/remark-preset-lint
[npm-docs-cli-depr]: https://docs.npmjs.com/cli/deprecate
[npm-docs-scopes]: https://docs.npmjs.com/about-scopes
[pandoc]: https://pandoc.org
[semver]: https://semver.org
[svengreb/tmpl-rl-v0.9.0]: https://github.com/svengreb/tmpl/releases/tag/v0.9.0
[svengreb/tmpl]: https://github.com/svengreb/tmpl
[trbdev-monorepo]: https://trunkbaseddevelopment.com/monorepos
[yarn-docs-ws]: https://yarnpkg.com/en/docs/workspaces

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/master/assets/images/repository-hero.svg?sanitize=true"/></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/releases/latest" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a> <a href="https://arcticicestudio.github.io/styleguide-markdown" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/release/arcticicestudio/styleguide-markdown.svg?style=flat-square&label=Docs&logo=read-the-docs&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/></a></p>

<p align="center"><a href="https://www.npmjs.com/package/@arcticicestudio/remark-preset-lint" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@arcticicestudio/remark-preset-lint.svg?style=flat-square&label=@arcticicestudio/remark-preset-lint&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K"/></a></p>

<p align="center">Changelog for the official <a href="https://github.com/arcticicestudio/styleguide-markdown" target="_blank" rel="noreferrer">Arctic Ice Studio Markdown code style</a>.</p>

<!--lint disable no-duplicate-headings no-duplicate-headings-in-section-->

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

↠ Added the initial style guide with the [comprehensive base rule set][docs-rules] with support for [GitHub Flavored Markdown][gfm] which is based on the [CommonMark][commonmark] specification.

</details>

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-docs/develop/assets/images/nord/repository-footer-separator.svg?sanitize=true" /></p>

<p align="center">Copyright &copy; 2018-present <a href="https://www.arcticicestudio.com" target="_blank" rel="noreferrer">Arctic Ice Studio</a> and <a href="https://www.svengreb.de" target="_blank" rel="noreferrer">Sven Greb</a></p>

<p align="center"><a href="https://github.com/arcticicestudio/styleguide-markdown/blob/master/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&logo=github&colorA=4c566a&colorB=88c0d0"/></a></p>

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

<!-- v0.1.0 -->

[commonmark]: http://commonmark.org
[docs-rules]: https://arcticicestudio.github.io/styleguide-markdown/rules/index.html
[gfm]: https://github.github.com/gfm
[gh-compare-tag-init_v0.1.0]: https://github.com/arcticicestudio/styleguide-markdown/compare/e894a349...v0.1.0

<!-- v0.2.0 -->

[docs-unordered-marker]: https://arcticicestudio.github.io/styleguide-markdown/rules/lists.html#unordered-marker
[gh-compare-tag-v0.1.0_v0.2.0]: https://github.com/arcticicestudio/styleguide-markdown/compare/v0.1.0...v0.2.0

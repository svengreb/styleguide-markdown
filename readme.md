<p align="center">
  <picture>
    <source srcset="https://raw.githubusercontent.com/svengreb/assets/main/static/images/logos/projects/styleguides/markdown/heroes/dark.svg?sanitize=true" width="100%" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
    <source srcset="https://raw.githubusercontent.com/svengreb/assets/main/static/images/logos/projects/styleguides/markdown/heroes/light.svg?sanitize=true" width="100%" media="(prefers-color-scheme: dark)" />
    <img src="https://raw.githubusercontent.com/svengreb/assets/main/static/images/logos/projects/styleguides/markdown/heroes/dark.svg?sanitize=true" width="100%" />
  </picture>
</p>

<p align="center">An opinionated, yet universally applicable Markdown code style guide.</p>

<p align="center">
  <a href="https://github.com/svengreb/styleguide-markdown/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/release/svengreb/styleguide-markdown.svg?style=flat-square&label=Release&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0" />
  </a>
  <a href="https://github.com/svengreb/styleguide-markdown/tree/main/rules" target="_blank">
    <img src="https://img.shields.io/github/release/svengreb/styleguide-markdown.svg?style=flat-square&label=Docs&colorA=4c566a&colorB=88c0d0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI%2BCiAgICA8cGF0aCBmaWxsPSIjZDhkZWU5IiBkPSJNMTMuNzQ2IDIuODEzYS42Ny42NyAwIDAgMC0uNTU5LS4xMzNMOCAzLjg0OGwtNS4xODgtMS4xOGEuNjY5LjY2OSAwIDAgMC0uNTcuMTMzLjY3Ny42NzcgMCAwIDAtLjI0Mi41MzF2OC4xMzNjLS4wMDguMzIuMjEuNTk4LjUyLjY2OGw1LjMzMiAxLjE5OWguMjk2bDUuMzMyLTEuMmEuNjY4LjY2OCAwIDAgMCAuNTItLjY2N1YzLjMzMmEuNjU5LjY1OSAwIDAgMC0uMjU0LS41MnpNMy4zMzIgNC4xNjhsNCAuODk4djYuNzY2bC00LS44OTh6bTkuMzM2IDYuNzY2bC00IC44OThWNS4wNjZsNC0uODk4em0wIDAiLz4KPC9zdmc%2BCg%3D%3D" />
  </a>
  <a href="https://github.com/svengreb/styleguide-markdown/blob/main/changelog.md" target="_blank">
    <img src="https://img.shields.io/github/release/svengreb/styleguide-markdown.svg?style=flat-square&label=Changelog&logo=github&logoColor=eceff4&colorA=4c566a&colorB=88c0d0" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@svengreb/remark-preset-lint" target="_blank">
    <img src="https://img.shields.io/npm/v/@svengreb/remark-preset-lint.svg?style=flat-square&label=@svengreb/remark-preset-lint&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTEyIDE0SDRhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnpNNCAzLjMzMkEuNjcuNjcgMCAwIDAgMy4zMzIgNHY4YzAgLjM2Ny4zLjY2OC42NjguNjY4aDhhLjY3LjY3IDAgMCAwIC42NjgtLjY2OFY0QS42Ny42NyAwIDAgMCAxMiAzLjMzMnptMCAwIi8+PHBhdGggZmlsbD0iI2Q4ZGVlOSIgZD0iTTggNmgyLjY2OHY2LjY2OEg4em0wIDAiLz48L3N2Zz4K" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/svengreb/styleguide-markdown/actions/workflows/ci-node.yaml" target="_blank">
    <img src="https://img.shields.io/github/actions/workflow/status/svengreb/styleguide-markdown/ci-node.yaml?branch=main&style=flat-square&label=CI%20Node&logoColor=eceff4&colorA=4c566a&logo=github-actions" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/arcticicestudio/styleguide-javascript/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/release/arcticicestudio/styleguide-javascript.svg?style=flat-square&label=JavaScript%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=javascript" />
  </a>
  <a href="https://github.com/svengreb/styleguide-git/releases/latest" target="_blank">
    <img src="https://img.shields.io/github/release/svengreb/styleguide-git.svg?style=flat-square&label=Git%20Style%20Guide&logoColor=eceff4&colorA=4c566a&colorB=88c0d0&logo=git" />
  </a>
</p>

Every major open source project has its own style guide, a set of standards and conventions for the writing and design of code, documentations and assets. It is much easier to understand a large codebase when all the code in it is in a consistent style.

A style guide establishes and enforces style to improve the intelligibility and communication within the project community. It ensures consistency and enforces best practice in usage and language composition.

### Getting Started

Learn about the [comprehensive base rule set][9] with support for [GitHub Flavored Markdown][10] which is based on the [CommonMark][1] specification. It includes rules for all document elements like e.g. [code blocks][2], [headings][4] or [lists][5], defines [naming conventions][6] and best practices for [Raw HTML][7], [emphasizing][3] and [strings][8].

### Remark Configurations

To follow the rules in a project and ensure that your code matches this style guide use the official extensible code linter rule preset [@svengreb/remark-preset-lint][12] for [remark-lint][11], a plugin for [remark][13].

<p align="center">
  <picture>
    <source srcset="https://raw.githubusercontent.com/svengreb/assets/main/static/images/elements/separators/logo/footer/dark/spaced.svg?sanitize=true" width="100%" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
    <source srcset="https://raw.githubusercontent.com/svengreb/assets/main/static/images/elements/separators/logo/footer/light/spaced.svg?sanitize=true" width="100%" media="(prefers-color-scheme: dark)" />
    <img src="https://raw.githubusercontent.com/svengreb/assets/main/static/images/elements/separators/logo/footer/dark/spaced.svg?sanitize=true" width="100%" />
  </picture>
</p>

<p align="center">
  Copyright &copy; 2016-present <a href="https://www.svengreb.de" target="_blank">Sven Greb</a>
</p>

<p align="center">
  <a href="https://github.com/svengreb/styleguide-markdown/blob/main/license" target="_blank">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&colorA=4c566a&colorB=88c0d0" />
  </a>
  <a href="https://www.svengreb.de">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABMklEQVQ4jcWQvUoDQRRGz52s5IfVIiDWPkGKFFaCIVaGdIagjcFAwICFb7DvIK6QQlNpY2UQLMQVBbEQ0SewFkGbKCQmOzaTJay7/lR+zTAf9xwuF/47Mv45rdezqWEq72v/RWZnHgqOMwDwHMfSj085JSqb6Pu38we7r18E3nqzhmYbsE11rxKsAvhDfQiSM30XYbOw57YDwfnaRl6U3ABWaMNn806H+oGPzBX3d+4UgChZiYBHYBgGsBLoKoAyhR0x9G20Zmpc4P1ZoMQDcwMNclFrdhBKv6M5WWi7ZQGtjEUn35IV4OwnVjSX/WGmKqCDDUa5rmyle3bvGFiMg3WGUsF1u0EXHoqTRMGRgkAy2eugKZrqijRLYThWANBpNDL2h3UE0J0YLJdbrfe42f/NJ0wqY7/KcXKPAAAAAElFTkSuQmCC&label=lovely%20crafted%20in&message=Germany&colorA=4c566a&colorB=88c0d0" />
  </a>
</p>

[1]: http://commonmark.org
[2]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md
[3]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md
[4]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md
[5]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md
[6]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/naming-conventions.md
[7]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/raw-html.md
[8]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/strings.md
[9]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/index.md
[10]: https://github.github.com/gfm
[11]: https://github.com/remarkjs/remark-lint
[12]: https://github.com/svengreb/styleguide-markdown/tree/main/packages/@svengreb/remark-preset-lint
[13]: https://remark.js.org

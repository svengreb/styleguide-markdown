## Absolute URLs

Prefer absolute URLs instead of relative ones to improve the portability of the document.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
![snowflake icon][snowflake] snowflakes falling down in the winter!

[snowflake]: ../assets/snowflake.png
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
![snowflake icon][snowflake] snowflakes falling down in the winter!

[snowflake]: https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png
```

## Badges

Use badges to represent simple information like latest version number and URL to its docs, the status of CI builds or fetched information of external systems like e.g. the latest version and total download amount from the [NPM registry][npm] or [Rust crates][crates.io].

###### Examples

⇡ **Correct** code for this rule:

```markdown
[![Nord GitHub Shield Latest Release][shields-gh-releases-nord]][nord-gh-releases] [![Nord NPM Registry Shield Latest Release Version Number][shields-npm-version-nord]][npm-nord]

[nord-gh-releases]: https://github.com/arcticicestudio/nord/releases/latest
[npm-nord]: https://www.npmjs.com/package/nord
[shields-npm-version-nord]: https://img.shields.io/npm/v/nord.svg?style=flat-square
[shields-gh-releases-nord]: https://img.shields.io/github/release/arcticicestudio/nord.svg?style=flat-square
```

[crates.io]: https://crates.io
[npm]: https://npmjs.com

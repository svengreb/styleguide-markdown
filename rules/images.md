## Absolute URLs

Prefer absolute URLs instead of relative ones to improve the portability of the document.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
![snowflake icon][snowflake] snowflakes falling down in the winter!

[snowflake]: ../snowflake.svg
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
![falling snowflakes][snowflakes] snowflakes falling down in the winter!

[snowflakes]: https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true
```

## Collapsed Reference Links

Full references (such as `[Winter][winter]`) can also be written as a collapsed reference (`[Winter][]`) if normalizing the reference text yields the label.

> remark-lint: [no-unneeded-full-reference-image][remark-lint-no-unneeded-full-reference-image]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
![arctic][arctic]
![snowflakes][snowflakes]
![winter][winter]

[arctic]: https://arctic-is-beautiful.io/north-pole.png
[snowflakes]: https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true
[winter]: https://the-winter-is-sparkling-and-frozen.io/winter.png
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
![arctic][north-pole]
![snowflakes][]
![winter][]

[north-pole]: https://arctic-is-beautiful.io/north-pole.png
[snowflakes]: https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true
[winter]: https://the-winter-is-sparkling-and-frozen.io/winter.png
```

## Badges

Use badges to represent simple information like latest version number and URL to its docs, the status of CI builds or fetched information of external systems like e.g. the latest version and total download amount from the [NPM registry][npm] or [Rust crates][crates.io].

###### Examples

⇡ **Correct** code for this rule:

```markdown
[![GitHub Shield Latest Release][shields-gh-releases]][gh-releases] [![NPM Registry Shield Latest Release Version Number][shields-npm-version]][npm]

[gh-releases]: https://github.com/svengreb/styleguide-markdown/releases/latest
[npm]: https://www.npmjs.com/package/@svengreb/remark-preset-lint
[shields-npm-version]: https://img.shields.io/npm/v/@svengreb/remark-preset-lint.svg?style=flat-square
[shields-gh-releases]: https://img.shields.io/github/release/svengreb/styleguide-markdown.svg?style=flat-square
```

[crates.io]: https://crates.io
[npm]: https://npmjs.com
[remark-lint-no-unneeded-full-reference-image]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-no-unneeded-full-reference-image

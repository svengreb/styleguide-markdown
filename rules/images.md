<!--lint disable no-duplicate-headings-->

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

> remark-lint: [no-unneeded-full-reference-image][3]

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

Use badges to represent simple information like latest version number and URL to its docs, the status of CI builds or fetched information of external systems like e.g. the latest version and total download amount from the [NPM registry][2] or [Rust crates][1].

###### Examples

⇡ **Correct** code for this rule:

```markdown
[![GitHub Shield Latest Release][4]][1] [![NPM Registry Shield Latest Release Version Number][3]][2]

[1]: https://github.com/svengreb/styleguide-markdown/releases/latest
[2]: https://www.npmjs.com/package/@svengreb/remark-preset-lint
[3]: https://img.shields.io/npm/v/@svengreb/remark-preset-lint.svg?style=flat-square
[4]: https://img.shields.io/github/release/svengreb/styleguide-markdown.svg?style=flat-square
```

[1]: https://crates.io
[2]: https://www.npmjs.com
[3]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-image

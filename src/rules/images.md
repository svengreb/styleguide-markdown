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

[snowflake]: https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/main/src/assets/snowflake.png
```

## Collapsed Reference Links

Full references (such as `[Winter][winter]`) can also be written as a collapsed reference (`[Winter][]`) if normalizing the reference text yields the label.

> remark-lint: [no-unneeded-full-reference-image][remark-lint-no-unneeded-full-reference-image]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
![arctic][arctic]
![snowflake][snowflake]
![winter][winter]

[arctic]: https://arctic-is-beautiful.io/north-pole.png
[snowflake]: https://snow-is-falling-down.io/snowflake.png
[winter]: https://the-winter-is-sparkling-and-frozen.io/winter.png
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
![arctic][north-pole]
![snowflake][]
![winter][]

[north-pole]: https://arctic-is-beautiful.io/north-pole.png
[snowflake]: https://snow-is-falling-down.io/snowflake.png
[winter]: https://the-winter-is-sparkling-and-frozen.io/winter.png
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
[remark-lint-no-unneeded-full-reference-image]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-no-unneeded-full-reference-image

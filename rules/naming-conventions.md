## File Extension

Always use `.md` file extension also for files with [GFM syntax][gfm].

> remark-lint: [file-extension][remark-lint-file-extension]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```raw
ice.gfm
snow.mdk
frost.markdown
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
ice.md
snow.md
frost.md
```

## File Naming

Always prefer [spinal-case][wiki-letter_case-special_styles] (also named [_kebab-case_ or _hyphen-separated_][stof-11273282-c-12273101]) for file names and use [snake_case][wiki-snake_case] only if it contributes to a better understanding of the content.

> remark-lint: [no-file-name-mixed-case][remark-lint-no-file-name-mixed-case]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```raw
winterSeason.md
IceCold.md
snow fall.md
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```raw
winter_season.md
ice_cold.md
snow_fall.md
```

⇢ **Recommended** code for this rule:

```raw
winter-season.md
ice-cold.md
snow-fall.md
```

[gfm]: https://github.github.com/gfm
[remark-lint-file-extension]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-file-extension
[remark-lint-no-file-name-mixed-case]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-mixed-case
[stof-11273282-c-12273101]: https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case/12273101
[wiki-letter_case-special_styles]: https://en.wikipedia.org/wiki/Letter_case#Special_case_styles
[wiki-snake_case]: https://en.wikipedia.org/wiki/Snake_case

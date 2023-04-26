<!--lint disable no-duplicate-headings-->

## File Extension

Always use `.md` file extension also for files with [GFM syntax][1].

> remark-lint: [file-extension][2]

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

Always prefer [spinal-case][5] (also named [_kebab-case_ or _hyphen-separated_][4]) for file names and use [snake_case][6] only if it contributes to a better understanding of the content.

> remark-lint: [no-file-name-mixed-case][3]

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

[1]: https://github.github.com/gfm
[2]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-file-extension
[3]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-mixed-case
[4]: https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case/12273101
[5]: https://en.wikipedia.org/wiki/Letter_case#Special_case_styles
[6]: https://en.wikipedia.org/wiki/Snake_case

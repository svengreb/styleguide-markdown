## File Extension

Always use `.md` file extension also for files with [GFM syntax][gfm].

> remark-lint: [file-extension][remark-lint-file-extension]

###### Examples

⇣ **Incorrect** code for this rule:

```raw
ice.gfm
snow.mdk
frost.markdown
````

⇡ **Correct** code for this rule:

```markdown
ice.md
snow.md
frost.md
````

## File Naming

Always prefer [spinal-case][wikipedia-letter_case-special_styles] (also named [*kebab-case* or *hyphen-separated*][stackoverflow-11273282]) for file names and use [snake_case][wikipedia-snake_case] only if it contributes to a better understanding of the content.

> remark-lint: [no-file-name-mixed-case][remark-lint-no-file-name-mixed-case]

###### Examples

⇣ **Incorrect** code for this rule:

```raw
winterSeason.md
IceCold.md
snow fall.md
````

⇡ **Correct** code for this rule:

```raw
winter_season.md
ice_cold.md
snow_fall.md
````

⇢ **Recommended** code for this rule:

```raw
winter-season.md
ice-cold.md
snow-fall.md
````

[gfm]: https://github.github.com/gfm
[remark-lint-file-extension]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-file-extension
[remark-lint-no-file-name-mixed-case]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-mixed-case
[stackoverflow-11273282]: https://stackoverflow.com/questions/11273282/whats-the-name-for-hyphen-separated-case/12273101
[wikipedia-letter_case-special_styles]: https://en.wikipedia.org/wiki/Letter_case#Special_case_styles
[wikipedia-snake_case]: https://en.wikipedia.org/wiki/Snake_case

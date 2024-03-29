<!--lint disable no-duplicate-headings-->

## Prefer Reference Links

Always use [reference links][6] instead of [inline](#inline) links except for inner anchor links ([fragment identifiers][19]).

There are three kinds of reference links: full, collapsed, and shortcut.
This can be one of the three reference link types:

- [full][4]
- [collapsed][3]
- [short][5]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
[Winter](https://the-winter-is-sparkling-and-frozen.io)
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
[Winter](#winter)

## Winter
```

```markdown
[Winter][winter-info]

[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Inline

If it is necessary to use inline links instead of the preferred [reference links](prefer-reference-links) try to use shortened URLs wherever possible to keep the line length overhead as small as possible.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
[Winter](https://the-winter-is-sparkling-and-frozen-and-snow-falls-down.io)
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
[Winter](https://sho.rt/l1n-k)
```

## Definition Placement

Always place reference links at the bottom of the document. This keeps the focus of the reader on the content and increases the maintainability.

> remark-lint: [final-definition][9]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter-info] is sparkling and frozen!

[winter-info]: https://the-winter-is-sparkling-and-frozen.io

Many snowflakes are falling down.
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

Many snowflakes are falling down.

[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Empty Line Before

Always add a single empty line before the first reference link.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.
[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Letter Case

Only use lower case letters for reference link IDs. This increases the readability and prevents errors since links are [case-insensitive][2].

> remark-lint: [definition-case][7]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][WinterInfo] is sparkling and frozen! [Snowflakes][snowFlakes-Info] are falling.

[snowFlakes-Info]: https://in-the-winter-many-snowflakes-are-falling.io
[WinterInfo]: https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## No ID Inner Spacing

Don't use inner spaces within link IDs.

> remark-lint: [no-inline-padding][14]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][ winter-info ] is sparkling and frozen!

[Snowflakes][       snowflakes-info  ] are falling.

[       snowflakes-info  ]: https://in-the-winter-many-snowflakes-are-falling.io
[ winter-info ]: https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## No Trailing Or Leading Title Spaces

Don't use trailing or leading spaces in link titles. Add necessary spaces before or after the brackets/braces (`[]`, `()`) to format links within flowing text.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The[ Winter ][winter-info]is sparkling and frozen![ Snowflakes ][snowflakes-info]are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Spacing After Colon

Only use a single space after the colon of [reference links](#prefer-reference-links). Don't add multiple spaces to e.g. align the URLs of reference links vertically.

> remark-lint: [definition-spacing][8]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]:   https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]:       https://the-winter-is-sparkling-and-frozen.io
```

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]:https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]:https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Sorting

Always sort reference links alphabetically by their IDs. Each [reference link group](#reference-link-groups) must be sorted independent of others!

It is home for many beautiful animals like snowy owls, arctic foxes, and grizzly bears

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
[Snowflakes][snowflakes-info] are falling.

The [Winter][winter-info] is sparkling and frozen!

The [Arctic][arctic-animals] is home for many beautiful animals.

Snowballs are made of [1000s of snowflakes][1000-snowball_flakes].

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
[arctic-animals]: https://arctic-home-for.animals
[1000-snowball_flakes]: https://1000-snowball.flakes
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
[Snowflakes][snowflakes-info] are falling.

The [Winter][winter-info] is sparkling and frozen!

The [Arctic][arctic-animals] is home for many beautiful animals.

Snowballs are made of [1000s of snowflakes][1000-snowball_flakes].

[1000-snowball_flakes]: https://1000-snowball.flakes
[arctic-animals]: https://arctic-home-for.animals
[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Reference Link Groups

Use one block for internal and external reference links.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[winter-info]: winter/info.md

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
```

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[winter-info]: winter/info.md




[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[winter-info]: winter/info.md
[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
```

## Reference Link Group Ordering

It is more convenient to always follow the same organization for reference link order to easier find internal and external targets.

1. Internal links group
   1.1 [full reference links][4]
   1.2 [collapsed reference links][3]
   1.2 [short reference links][5]
2. External links group

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter-info] is sparkling and frozen!

[Snowflakes][] are falling.

The [Arctic][arctic-animals] is home for many beautiful animals.

[snowflakes]: https://in-the-winter-many-snowflakes-are-falling.io
[arctic-animals]: arctic-animals.md
[winter-info]: winter/info.md
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[Snowflakes][] are falling.

The [Arctic][arctic-animals] is home for many beautiful animals.

[arctic-animals]: arctic-animals.md
[winter-info]: winter/info.md
[snowflakes]: https://in-the-winter-many-snowflakes-are-falling.io
```

## No Unused

Remove unused reference links to improve the overview and maintainability.

> remark-lint: [no-unused-definitions][18]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter-info] is sparkling and frozen!

[arctic-animals]: arctic-animals.md
[snowflakes]: snow/flakes.md
[winter-info]: winter/info.md
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[winter-info]: winter/info.md
```

## No Undefined

Never use references that are not defined.

> remark-lint: [no-undefined-references][16]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [Winter][winter] is sparkling and frozen!
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter] is sparkling and frozen!

[winter]: https://the-winter-is-sparkling-and-frozen.io
```

## No Duplicates

Prevent definitions that use the same URL.

> remark-lint: [no-duplicate-defined-urls][11]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
[arctic][]
[north-pole][]

[arctic]: https://arctic-is-beautiful.io
[north-pole]: https://arctic-is-beautiful.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
[arctic][]
[north-pole][]

[arctic]: https://arctic-is-beautiful.io
[north-pole]: https://frozen-nordic-arctic.io
```

## Collapsed References

Full references (such as `[Winter][winter]`) can also be written as a collapsed reference (`[Winter][]`) if normalizing the reference text yields the label.

> remark-lint: [no-unneeded-full-reference-link][17]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
[arctic][arctic]
[snowflake][snowflake]
[Winter][winter]

[arctic]: https://arctic-is-beautiful.io
[snowflake]: https://snow-is-falling-down.io
[winter]: https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
[arctic][north-pole]
[snowflake][]
[Winter][]

[north-pole]: https://arctic-is-beautiful.io
[snowflake]: https://snow-is-falling-down.io
[winter]: https://the-winter-is-sparkling-and-frozen.io
```

## Autolink Protocol

Always add a valid protocol when using [autolinks][1].

> remark-lint: [no-auto-link-without-protocol][10]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
www.svengreb.de

svengreb.de
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
https://svengreb.de

https://www.svengreb.de

http://svengreb.de

http://www.svengreb.de
```

```markdown
mailto:development@svengreb.de
```

## Unique IDs

Reference link IDs must be unique within a document file.

> remark-lint: [no-duplicate-definitions][12]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
[snow]: snow/flakes.md
[snow]: snow/index.md
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
[snow]: snow/index.md
[snowflakes]: snow/flakes.md
```

## No Empty URL

Don't use links or images with empty URLs.

> remark-lint: [no-empty-url][13]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [winter][winter] is sparkling and frozen!

![snowflake image][snowflake]

[snowflake]:
[winter]:
```

```markdown
The [winter]() is sparkling and frozen!

![snowflake image]()
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [winter][winter] is sparkling and frozen!

![falling snowflakes][snowflakes]

[snowflakes]: https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true
[winter]: https://the-winter-is-sparkling-and-frozen.io
```

```markdown
The [winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

![falling snowflakes](https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true)
```

## No Reference Like URL

Never use URLs that are also defined reference link identifiers.

> remark-lint: [no-reference-like-url][15]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The [winter](winter) is sparkling and frozen!

[winter]: https://the-winter-is-sparkling-and-frozen.io
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The [winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

[winter]: https://the-winter-is-sparkling-and-frozen.io
```

[1]: https://github.github.com/gfm/#autolinks
[2]: https://github.github.com/gfm/#example-170
[3]: https://github.github.com/gfm/#collapsed-reference-link
[4]: https://github.github.com/gfm/#full-reference-link
[5]: https://github.github.com/gfm/#shortcut-reference-link
[6]: https://github.github.com/gfm/#reference-link
[7]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-case
[8]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-spacing
[9]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-definition
[10]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-auto-link-without-protocol
[11]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-defined-urls
[12]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-definitions
[13]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-empty-url
[14]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-inline-padding
[15]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-reference-like-url
[16]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-undefined-references
[17]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-link
[18]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unused-definitions
[19]: https://html.spec.whatwg.org/multipage/browsers.html#navigating-to-a-fragment-identifier

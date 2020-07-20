## Prefer Reference Links

Always use [reference links][gfm-spec-links-ref] instead of [inline](#inline) links except for inner anchor links ([fragment identifiers][w3-html5-spec-navigate_fragment_identifier]).

There are three kinds of reference links: full, collapsed, and shortcut.
This can be one of the three reference link types:

- [full][gfm-spec-links-ref_full]
- [collapsed][gfm-spec-links-ref_collapsed]
- [short][gfm-spec-links-ref_short]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
[Winter](https://the-winter-is-sparkling-and-frozen.io)
```

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

```markdown
[Winter](https://the-winter-is-sparkling-and-frozen-and-snow-falls-down.io)
```

⇡ **Correct** code for this rule:

```markdown
[Winter](https://sho.rt/l1n-k)
```

## Definition Placement

Always place reference links at the bottom of the document. This keeps the focus of the reader on the content and increases the maintainability.

> remark-lint: [final-definition][remark-lint-final-definition]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[winter-info]: https://the-winter-is-sparkling-and-frozen.io

Many snowflakes are falling down.
```

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

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.
[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Letter Case

Only use lower case letters for reference link IDs. This increases the readability and prevents errors since links are [case-insensitive][gfm-spec-links-case_insensitive].

> remark-lint: [definition-case][remark-lint-definition-case]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [Winter][WinterInfo] is sparkling and frozen! [Snowflakes][snowFlakes-Info] are falling.

[snowFlakes-Info]: https://in-the-winter-many-snowflakes-are-falling.io
[WinterInfo]: https://the-winter-is-sparkling-and-frozen.io
```

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## No ID Inner Spacing

Don't use inner spaces within link IDs.

> remark-lint: [no-inline-padding][remark-lint-no-inline-padding]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [Winter][ winter-info ] is sparkling and frozen!

[Snowflakes][       snowflakes-info  ] are falling.

[       snowflakes-info  ]: https://in-the-winter-many-snowflakes-are-falling.io
[ winter-info ]: https://the-winter-is-sparkling-and-frozen.io
```

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

```markdown
The[ Winter ][winter-info]is sparkling and frozen![ Snowflakes ][snowflakes-info]are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
[winter-info]: https://the-winter-is-sparkling-and-frozen.io
```

## Spacing After Colon

Only use a single space after the colon of [reference links](#prefer-reference-links). Don't add multiple spaces to e.g. align the URLs of reference links vertically.

> remark-lint: [definition-spacing][remark-lint-definition-spacing]

###### Examples

⇣ **Incorrect** code for this rule:

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

Use blocks for internal and external reference links separated by one (1) empty line.

###### Examples

⇣ **Incorrect** code for this rule:

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

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen! [Snowflakes][snowflakes-info] are falling.

[winter-info]: winter/info.md

[snowflakes-info]: https://in-the-winter-many-snowflakes-are-falling.io
```

## Reference Link Group Ordering

It is more convenient to always follow the same organization for reference link order to easier find internal and external targets.

1. Internal links group
  1.1 [full reference links][gfm-spec-links-ref_full]
  1.2 [collapsed reference links][gfm-spec-links-ref_collapsed]
  1.2 [short reference links][gfm-spec-links-ref_short]
2. External links group

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[Snowflakes][] are falling.

The [Arctic][arctic-animals] is home for many beautiful animals.

[snowflakes]: https://in-the-winter-many-snowflakes-are-falling.io

[arctic-animals]: arctic-animals.md
[winter-info]: winter/info.md
```

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

> remark-lint: [no-unused-definitions][remark-lint-no-unused-definitions]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[arctic-animals]: arctic-animals.md
[snowflakes]: snow/flakes.md
[winter-info]: winter/info.md
```

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter-info] is sparkling and frozen!

[winter-info]: winter/info.md
```

## No Undefined

Never use references that are not defined.

> remark-lint: [no-undefined-references][remark-lint-no-undefined-references]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [Winter][winter] is sparkling and frozen!
```

⇡ **Correct** code for this rule:

```markdown
The [Winter][winter] is sparkling and frozen!

[winter]: https://the-winter-is-sparkling-and-frozen.io
```

## Autolink Protocol

Always add a valid protocol when using [autolinks][gfm-spec-links-autolinks].

> remark-lint: [no-auto-link-without-protocol][remark-lint-no-auto-link-without-protocol]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
www.arcticicestudio.com

arcticicestudio.com
```

⇡ **Correct** code for this rule:

```markdown
https://arcticicestudio.com

https://www.arcticicestudio.com

http://arcticicestudio.com

http://www.arcticicestudio.com
```

```markdown
mailto:code@arcticicestudio.com
```

## Unique IDs

Reference link IDs must be unique within a document file.

> remark-lint: [no-duplicate-definitions][remark-lint-no-duplicate-definitions]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
[snow]: snow/flakes.md
[snow]: snow/index.md
```

⇡ **Correct** code for this rule:

```markdown
[snow]: snow/index.md
[snowflakes]: snow/flakes.md
```

## No Empty URL

Don't use links or images with empty URLs.

> remark-lint: [no-empty-url][remark-lint-no-empty-url]

###### Examples

⇣ **Incorrect** code for this rule:

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

⇡ **Correct** code for this rule:

```markdown
The [winter][winter] is sparkling and frozen!

![snowflake image][snowflake]

[snowflake]: https://snow-is-falling-down.io/snowflake.png
[winter]: https://the-winter-is-sparkling-and-frozen.io
```

```markdown
The [winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

![snowflake image](https://snow-is-falling-down.io/snowflake.png)
```

## No Reference Like URL

Never use URLs that are also defined reference link identifiers.

> remark-lint: [no-reference-like-url][remark-lint-no-reference-like-url]

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
The [winter](winter) is sparkling and frozen!

[winter]: https://the-winter-is-sparkling-and-frozen.io
```

⇡ **Correct** code for this rule:

```markdown
The [winter](https://the-winter-is-sparkling-and-frozen.io) is sparkling and frozen!

[winter]: https://the-winter-is-sparkling-and-frozen.io
```

[gfm-spec-links-autolinks]: https://github.github.com/gfm/#autolinks
[gfm-spec-links-case_insensitive]: https://github.github.com/gfm/#example-170
[gfm-spec-links-ref]: https://github.github.com/gfm/#reference-link
[gfm-spec-links-ref_collapsed]: https://github.github.com/gfm/#collapsed-reference-link
[gfm-spec-links-ref_full]: https://github.github.com/gfm/#full-reference-link
[gfm-spec-links-ref_short]: https://github.github.com/gfm/#shortcut-reference-link
[remark-lint-definition-case]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-case
[remark-lint-definition-spacing]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-spacing
[remark-lint-final-definition]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-definition
[remark-lint-no-auto-link-without-protocol]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-auto-link-without-protocol
[remark-lint-no-duplicate-definitions]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-definitions
[remark-lint-no-empty-url]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-empty-url
[remark-lint-no-inline-padding]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-inline-padding
[remark-lint-no-reference-like-url]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-reference-like-url
[remark-lint-no-undefined-references]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-undefined-references
[remark-lint-no-unused-definitions]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unused-definitions
[w3-html5-spec-navigate_fragment_identifier]: https://www.w3.org/TR/html52/browsers.html#navigating-to-a-fragment-identifier

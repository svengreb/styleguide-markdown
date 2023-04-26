<!--lint disable no-duplicate-headings-->

## Italic

Use one (1) underscore `_` marker to generate spans for italic formatted text.

> remark-lint: [emphasis-marker][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
*Winter*
```

```markdown
___Snow___
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
_Winter_
_Snow_
```

## Bold

Use two (2) asterisk `*` marker to generate spans for bold formatted text.

> remark-lint: [emphasis-marker][2] and [strong-marker][5]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
*Winter*
```

```markdown
***Snow***
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
**Winter**
**Snow**
```

## Strikethrough

> Note that [strikethrough][1] is an **extension of GFM** and not implemented by all parsers!

Use two (2) tilde `~` marker to generate spans for strikethrough text.

> remark-lint: [emphasis-marker][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
~Winter~
```

```markdown
~~~Snow~~~
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
~~Winter~~
~~Snow~~
```

## No Header Replacement

Don't use emphasis elements (bold or italics) to introduce a multi line named section. Use headers instead which is exactly the semantic meaning of headers. As a consequence, many implementations add useful behaviors to headers and not to emphasis elements, such as automatic ID generation (anchor) to make it easier to refer to the header later on. Use a level 6 header if the meaning of the header section should not stand out great.

> remark-lint: [no-emphasis-as-heading][3]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
**Winter**

The winter has sparkling and frozen elements!

__Snow__

Snow is falling down!
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
## Winter

The winter has sparkling and frozen elements!

## Snow

Snow is falling down!
```

```markdown
###### Winter

The winter has sparkling and frozen elements!

###### Snow

Snow is falling down!
```

## No Inner Spacing

Don't use inner spaces for any markers.

> remark-lint: [no-inline-padding][4]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
** Winter **
__ Snow __
```

```markdown
**      Winter **
__ Snow            __
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
**Winter**
**Snow**
```

[1]: https://github.github.com/gfm/#strikethrough-extension-
[2]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-emphasis-marker
[3]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-emphasis-as-heading
[4]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-inline-padding
[5]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-strong-marker

## ATX Style

Always use [atx-style][atx] headings (not closed) instead of [Setext][setex]. The level can be easily seen and the number of characters must not match in both lines. ATX also works for all levels, while Setex only goes up to level 2.

> remark-lint: [heading-style][remark-lint-heading-style]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
Winter
======

Frost
-----
```

No closed ATX styled headings:

```markdown
# Winter #

## Frost ##

### Snow ###
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter

## Frost

### Snow
```

## Empty Lines Before And After

Always surround headers by a single empty line except at the beginning of the file.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
... snowflakes are falling.
# Winter
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


# Winter


Sparkling and frozen...
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
... snowflakes are falling.

# Winter

Sparkling and frozen...
```

## Content Spacing

Always separate the marker character `#` from the actual header content using a single whitespace.

> remark-lint: [no-heading-content-indent][remark-lint-no-heading-content-indent]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
#Winter
```

```markdown
#  Winter
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter
```

## No Content Before

Make sure that there are no other characters (including whitespaces) in front of headings.

> remark-lint: [no-heading-indent][remark-lint-no-heading-indent]

###### Examples

Note: The `·` character represents a whitespace character.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
.# Winter
```

```markdown
·# Winter
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter
```

## No Duplicate

Avoid using two or more headers with the same content in the same markdown file. many Markdown renderer generate IDs for headers based on the header content.

> remark-lint: [no-duplicate-headings][remark-lint-no-duplicate-headings] and [no-duplicate-headings-in-section][remark-lint-no-duplicate-headings-in-section]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
# Winter

## Snow

# Arctic

## Snow
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter

## Winter Snow

# Arctic

## Arctic Snow
```

## Letter Case

Use an upper case letter as the first letter of a header, unless it is a word that always starts with lowercase letters, e.g. proper names or code snippets. The other letters have the same case they would have in the middle of a sentence.

As an exception, [title case][wiki-title_case] can be optionally used for the top-level header. Use this exception sparingly, in cases where typographical perfection is important. Using title case all the time would require too much effort to decide if edge-case words should be upper case or not.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
# winter is sparkling and frozen
```

Proper names or code snippets:

```markdown
# react

# `String`

# Init
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter is sparkling and frozen
```

Proper names or code snippets:

```markdown
# React

# `string`

# init main
```

## Length

Prefer using short header with a maximum length of 80 character (without markers). Instead of using a huge sentence, make the header a summary and write the huge sentence as the first paragraph beneath the header. This makes it is easier to refer to the header later, specially if automatic IDs or a TOC are created.

> remark-lint: [maximum-heading-length][remark-lint-maximum-heading-length]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
# The winter is sparkling and frozen and soft snowflakes are falling down on the world!
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter

The winter is sparkling and frozen and soft snowflakes are falling down on the world!
```

## Punctuation After Content

Don't use any punctuation at the end of a header e.g. a trailing (semi)colon `;:`, period `.`, closing marker `#` or any "sentence amplifier" (`!?`). Every header is an introduction to what is about to come next, which is exactly the function of a colon. Also the header is not a sentence, or at least only a short sentence, so there is not need to add a sentence separator to it.

> remark-lint: [no-heading-punctuation][remark-lint-no-heading-punctuation]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
# Winter: Sparkling
```

```markdown
# Winter. Frozen.
```

```markdown
# Winter #
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
# Winter

Sparkling and frozen.
```

[atx]: http://www.aaronsw.com/2002/atx/intro
[remark-lint-heading-style]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-heading-style
[remark-lint-maximum-heading-length]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-heading-length
[remark-lint-no-duplicate-headings-in-section]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-headings-in-section
[remark-lint-no-duplicate-headings]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-headings
[remark-lint-no-heading-content-indent]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-content-indent
[remark-lint-no-heading-indent]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-indent
[remark-lint-no-heading-punctuation]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-punctuation
[setex]: http://docutils.sourceforge.net/mirror/setext.html
[wiki-title_case]: https://en.wikipedia.org/wiki/Letter_case#Title_case

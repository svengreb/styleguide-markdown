<!--lint disable no-duplicate-headings-->

## Indentation Character

Always use spaces characters where two (2) spaces are used for indentation. **The usage of tab characters is disallowed**. A tab could be a different number of columns depending on the environment, but a space is always one column. Adhering to this rule increases the code readability and maintainability significantly.

> remark-lint: [no-tabs][10]

###### Examples

Note: The `»` character represents a tab.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The winter has sparkling and frozen elements!
 » This line contains a tab character.
}
```

```markdown
The winter has sparkling and frozen elements!
    This line contains 4 space characters.
}
```

```markdown
The winter has sparkling and frozen elements!
 This line contains only 1 space character.
}
```

⇡ **Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
  This line contains 2 space characters.
}
```

<!-- prettier-ignore-end -->

## Newline

End files with a single [newline][16] character. Always use unix-style _LF_ linebreaks (`\n`, denoted as `␊`) and avoid the usage of Microsoft Windows _CRLF_ characters (`\r\n`, denoted as `␍␊`).

> remark-lint: [final-newline][4] and [linebreak-style][6]

###### Examples

Note: The `¬` character represents a line break.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.
```

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.¬
¬

```

⇡ **Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.¬

```

<!-- prettier-ignore-end -->

###### References

- [Wikipedia: _Control Character_][14]

## Before Blocks

Always add one (1) blank line before blocks except the first line of the file.

> remark-lint: [no-consecutive-blank-lines][8] and [no-missing-blank-lines][9]

###### Examples

Note: The `¬` character represents a line break.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
¬
Many snowflakes are falling down.
```

## After Sentences

Use a single space after sentences.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
Many snowflakes are falling down.  The winter has sparkling and frozen elements!
```

```markdown
Many snowflakes are falling down.The winter has sparkling and frozen elements!
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
Many snowflakes are falling down. The winter has sparkling and frozen elements!
```

## Maximum Line Length

In contrast to source code, where lines contain statements that can be almost always be broken up or indented, this rule can not be applied to flowing text. The author should be able to write sentences and text blocks without worrying about the line length.

Other style guides suggest to use line breaks after the character limit has been reached, but this will lead to deformed rendered output since GFM supports [soft line breaks][2]. Therefore, this guide advices to **avoid using a character limit per line for flowing text**, but try to use a maximum line length of 160 characters (including whitespaces) for all other document elements.

Instead of enforcing a maximum line length, users should use [soft line wrapping][15]:

- **Soft wrapping allows line lengths to visually adjust automatically with adjustments to the width of the user's window** or margin settings - This is a standard feature of all modern text editors like [VSCode][13] or [Atom][1], IDEs like [JetBrains IntelliJ IDEA][3], word processors, and email clients like [Thunderbird][12].
- **Using hard wrap inserts actual line breaks in the text at wrap points causing the Markdown to not look like the rendered output** - With soft wrapping the actual text is still on the same line but will be rendered by the application like it's divided into several lines. This **increases the readability** significantly and leads to the same visual result as if a maximum line length with hard line breaks for flowing text would have been used.
- **Less writer effort** - The author can focus on the content instead of formatting.

Note that the [rule for long strings][11] is related to this rule, and should not be broken up.

> remark-lint: [maximum-line-length][7]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
> The winter and all of its fascinating, sparkling and
frozen elements and lively, diverse and beautiful wildlife.

Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
for many beautiful animals like snowy owls,
arctic foxes, and grizzly bears.

```js
const season = winter && winter.elements && winter.elements.snow && winter.elements.snow.state && winter.elements.snow.state.temperature && winter.elements.snow.state.temperature.celsius;
```
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
> The winter and all of its fascinating, sparkling and frozen elements and lively, diverse and beautiful wildlife.

Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home for many beautiful animals like snowy owls, arctic foxes, and grizzly bears.

```js
const season =
  winter &&
  winter.elements &&
  winter.elements.snow &&
  winter.elements.snow.state &&
  winter.elements.snow.state.temperature &&
  winter.elements.snow.state.temperature.celsius;
```
````

## Trailing

Don't use trailing whitespace to generate a line break, use flowing text style or a blank line to create a new paragraph.

> remark-lint: [hard-break-spaces][5]

###### Examples

Note: The `·` character represents a whitespace and the `¬` character represents a line break.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The winter has sparkling and frozen elements!··¬
Many snowflakes are falling down.
```

```markdown
The winter has sparkling and frozen elements!¬
Many snowflakes are falling down.
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements! Many snowflakes are falling down.
```

```markdown
The winter has sparkling and frozen elements!¬

Many snowflakes are falling down.
```

[1]: http://flight-manual.atom.io/getting-started/sections/atom-basics/#soft-wrap
[2]: https://github.github.com/gfm/#soft-line-breaks
[3]: https://www.jetbrains.com/help/idea/using-code-editor.html#13ac7976
[4]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-newline
[5]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-hard-break-spaces
[6]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-linebreak-style
[7]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-line-length
[8]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-consecutive-blank-lines
[9]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-missing-blank-lines
[10]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-tabs
[11]: https://github.com/svengreb/styleguide-markdown/blob/main/rules/strings.md#line-length
[12]: https://www.thunderbird.net
[13]: https://code.visualstudio.com/docs/editor/codebasics#_common-questions
[14]: https://en.wikipedia.org/wiki/Control_character
[15]: https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap
[16]: https://en.wikipedia.org/wiki/Newline

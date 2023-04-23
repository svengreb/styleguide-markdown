## No Indentation

Never indent the content of paragraphs.

> remark-lint: [no-paragraph-content-indent][1]

###### Examples

Note: The `·` character represents a whitespace.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
·The winter has sparkling and frozen elements!
·Many snowflakes are falling down.
```

```markdown
······The winter has sparkling and frozen elements!
········Many snowflakes are falling down.
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.
```

[1]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-paragraph-content-indent

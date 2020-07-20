## No Indentation

Never indent the content of paragraphs.

> remark-lint: [no-paragraph-content-indent][remark-lint-no-paragraph-content-indent]

###### Examples

Note: The `·` character represents a whitespace.

⇣ **Incorrect** code for this rule:

```markdown
·The winter has sparkling and frozen elements!
·Many snowflakes are falling down.
```

```markdown
······The winter has sparkling and frozen elements!
········Many snowflakes are falling down.
```

⇡ **Correct** code for this rule:

```markdown
The winter has sparkling and frozen elements!
Many snowflakes are falling down.
```

[remark-lint-no-paragraph-content-indent]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-paragraph-content-indent

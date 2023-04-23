## Indentation

Always separate the marker `>` from the actual content using a single whitespace.

> remark-lint: [blockquote-indentation][1]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
>Winter
```

```markdown
>  Winter
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
> Winter
```

## Multi Line

Use a `greater than` sign for every line, including wrapped.

> remark-lint: [no-blockquote-without-marker][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
> Winter
Snow
```

```markdown
> Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
for many beautiful animals like snowy owls,
arctic foxes, and grizzly bears.
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
> Winter
> Snow
```

```markdown
> Many snowflakes are falling down. The winter has sparkling and frozen elements! It is home
> for many beautiful animals like snowy owls,
> arctic foxes, and grizzly bears.
```

[1]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-blockquote-indentation
[2]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-blockquote-without-marker

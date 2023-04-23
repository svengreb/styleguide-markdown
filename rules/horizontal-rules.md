## Marker Character Style

A horizontal rule must consist of three (3) hyphens (`-`) without spaces.

> remark-lint: [rule-style][1]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
-
```

```markdown
--

- -
```

```markdown
-- -

- --
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
---
```

## No Prepended Or Appended Content

Make sure that there are no other prepended or appended characters (including whitespaces).

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
.---
```

```markdown
 ---
```

```markdown
---x
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
---
```

## Empty Lines Before And After

Always surround lines by a single empty line except at the beginning of the file.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
... snowflakes are falling.
---
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


---


Sparkling and frozen...
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
... snowflakes are falling.

---

Sparkling and frozen...
```

## Use Cases

Horizontal rules can be used to separate sections when headers are not applicable or to separate base document elements like a header, body and footer.

[1]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-rule-style

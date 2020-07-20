## Marker Character Style

A horizontal rule must consist of three (3) hyphens (`-`) without spaces.

> remark-lint: [rule-style][remark-lint-rule-style]

###### Examples

⇣ **Incorrect** code for this rule:

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

⇡ **Correct** code for this rule:

```markdown
---
```

## No Prepended Or Appended Content

Make sure that there are no other prepended or appended characters (including whitespaces).

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
.---
```

```markdown
 ---
```

```markdown
---x
```

```markdown
---  
```

⇡ **Correct** code for this rule:

```markdown
---
```

## Empty Lines Before And After

Always surround lines by a single empty line except at the beginning of the file.

###### Examples

⇣ **Incorrect** code for this rule:

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

⇡ **Correct** code for this rule:

```markdown
... snowflakes are falling.

---

Sparkling and frozen...
```

## Use Cases

Horizontal rules can be used to separate sections when headers are not applicable or to separate base document elements like a header, body and footer.

[remark-lint-rule-style]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-rule-style

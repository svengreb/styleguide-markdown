## Quotes

Use double quotes `""` for strings:

- **Double quotes can be used for inline HTML**.
- **Consistency to other style guides**. Double quotes are used by many code styles like [JavaScript][styleguide-javascript-ghio].
- **Parallelism to the natural language**. Double quotes are used to identify a passage of quoted text. When using single quotes, the reader may misinterpret it as a contraction. The other meaning of a passage of text surrounded by the `'` indicates the _colloquial_ meaning. It makes sense to stay consistent with pre-existing languages, and this may likely ease the learning and interpretation of code.

> remark-lint: [link-title-style][remark-lint-link-title-style]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
'The winter is sparkling and frozen!'
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
"The winter is sparkling and frozen!"
```

## Line Length

Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation. Broken strings are painful to work with and make code less searchable.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant \
muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream \
cake dessert icing donut."
```

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant" +
"muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream " +
"cake dessert icing donut."
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
"Cupcake ipsum candy pudding soufflé chocolate. Croissant muffin biscuit brownie caramels pudding toffee pie. Tiramisu cookie ice cream cake dessert icing donut."
```

[remark-lint-link-title-style]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-link-title-style
[styleguide-javascript-ghio]: https://arcticicestudio.github.io/styleguide-javascript

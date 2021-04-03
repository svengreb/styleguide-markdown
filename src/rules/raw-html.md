> Please prefer standard Markdown syntax wherever possible and only use HTML if you can't accomplish the goal with the Markdown syntax! Raw HTML reduces the readability and portability, but can improve the design, layout and overview of rendered documents.
> Anyway, consider to **use raw HTML sparingly and only if necessary**!

## Aligned Content

Use a [HTML paragraph `<p>`][mdn-html-element-p] tag with the `align` attribute. Although if the [HTML 5 specification][w3-html5-spec-element-p] states that the `align` attribute is obsolete it is the only possible solution because the [`style` tag is disallowed raw HTML][gfm-spec-disallowed_raw_html] within Markdown so the CSS [`text-align`][mdn-css-text-align] property can not be used.

Aligning content can improve the design and layout e.g. images and project logos by either using `center`, `left` or `right` as value for the `align` attribute.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
<p style="text-align:center">The winter is winter is sparkling and frozen!</p>
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
<p align="center">The winter is winter is sparkling and frozen!</p>
```

## Inline Content

Use a [HTML `<img>`][mdn-html-element-img] to add inline content like images or icons for better visualization. This allows to use e.g. a favicon of a website and define its size with the `width` and `height` attributes using either a pixel or percentage (withdouble quotes for the `%` character) value.

Although MDN states that the `width` and `height` attributes are deprecated and [advises to replace them with the corresponding CSS attributes][mdn-html-attributes], but it is the only possible solution because the [`style` tag is disallowed raw HTML][gfm-spec-disallowed_raw_html] within Markdown so the CSS [`width`][mdn-css-width] and [`height`][mdn-css-height] property can not be used.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
Sparkling <img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png" style="text-align:center;width:16;height:16"/> snowflakes falling down in the winter!
```

No way to define the size:

```markdown
Sparkling ![snowflake icon](https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png) snowflakes falling down in the winter!
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
Sparkling <img src="https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png" width=16 height=16 align="center"/> snowflakes falling down in the winter!
```

## Collapsed Content

Use the HTML [`<details>`][mdn-html-element-details] tag to add collapsible content. It creates a disclosure widget in which information is visible only when the widget is toggled into an _open_ state. A summary or label can be provided using the [`<summary>`][mdn-html-element-summary] element.

This can be useful to e.g. hide large table of contents or code blocks that might disturb the focus or force the reader to scroll long sites.

###### Examples

⇡ **Correct** code for this rule:

```markdown
<details>
  <summary>Winter</summary>
  <p>Sparkling and frozen!</p>
</details>
```

[gfm-spec-disallowed_raw_html]: https://github.github.com/gfm/#disallowed-raw-html-extension-
[mdn-css-height]: https://developer.mozilla.org/en-US/docs/Web/CSS/height
[mdn-css-text-align]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
[mdn-css-width]: https://developer.mozilla.org/en-US/docs/Web/CSS/width
[mdn-html-attributes]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[mdn-html-element-details]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
[mdn-html-element-img]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
[mdn-html-element-p]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
[mdn-html-element-summary]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
[w3-html5-spec-element-p]: https://www.w3.org/TR/html5/grouping-content.html#the-p-element

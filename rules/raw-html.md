<!--lint disable no-duplicate-headings-->

> Please prefer standard Markdown syntax wherever possible and only use HTML if you can't accomplish the goal with the Markdown syntax! Raw HTML reduces the readability and portability, but can improve the design, layout and overview of rendered documents.
> Anyway, consider to **use raw HTML sparingly and only if necessary**!

## Aligned Content

Use a [HTML paragraph `<p>`][8] tag with the `align` attribute. Although if the [HTML 5 specification][10] states that the `align` attribute is obsolete it is the only possible solution because the [`style` tag is disallowed raw HTML][1] within Markdown so the CSS [`text-align`][3] property can not be used.

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

Use a [HTML `<img>`][7] to add inline content like images or icons for better visualization. This allows to use e.g. a favicon of a website and define its size with the `width` and `height` attributes using either a pixel or percentage (withdouble quotes for the `%` character) value.

Although MDN states that the `width` and `height` attributes are deprecated and [advises to replace them with the corresponding CSS attributes][5], but it is the only possible solution because the [`style` tag is disallowed raw HTML][1] within Markdown so the CSS [`width`][4] and [`height`][2] property can not be used.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
Sparkling <img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true" style="text-align:center;width:16;height:16" /> snowflakes falling down in the winter!
```

No way to define the size:

```markdown
Sparkling ![falling snowflakes](https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true) snowflakes falling down in the winter!
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
Sparkling <img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true" width=16 height=16 align="center" /> snowflakes falling down in the winter!
```

## Collapsed Content

Use the HTML [`<details>`][6] tag to add collapsible content. It creates a disclosure widget in which information is visible only when the widget is toggled into an _open_ state. A summary or label can be provided using the [`<summary>`][9] element.

This can be useful to e.g. hide large table of contents or code blocks that might disturb the focus or force the reader to scroll long sites.

###### Examples

⇡ **Correct** code for this rule:

```markdown
<details>
  <summary>Winter</summary>
  <p>Sparkling and frozen!</p>
</details>
```

[1]: https://github.github.com/gfm/#disallowed-raw-html-extension-
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/height
[3]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-align
[4]: https://developer.mozilla.org/en-US/docs/Web/CSS/width
[5]: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
[6]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
[7]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
[8]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
[9]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
[10]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-p-element

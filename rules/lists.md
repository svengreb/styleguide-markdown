<!--lint disable no-duplicate-headings-->

## Unordered Marker

Use dashes `-` as marker.

> remark-lint: [unordered-list-marker-style][9]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
* Winter
* Snow
* Frost
```

```markdown
+ Winter
+ Snow
+ Frost
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
- Winter
- Snow
- Frost
```

## Ordered Marker

Use continuous numerating marker for ordered list items. This increases the readability and overview and allows to refer to items by their number in the same markdown file or externally. It also allows to create sub-items which is not possible if the same number will be used for all top-level items. The marker character must be a dot (`.`), characters like a closing brace (`)`) are not allowed since they are only supported in [CommonMark][1].

The only disadvantage is that references break when a new list item is added. This problem can be reduced by

- using an unordered list until the final structure and layout has been determined.
- keeping references close to the list so authors are less likely to forget to update them.
- always specify an specific version of the markdown file when referring from an external document.

> remark-lint: [ordered-list-marker-style][7] and [ordered-list-marker-value][8]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
1. Winter
1. Snow
  1.1 Snowflakes
1. Frost
```

```markdown
1) Winter
1) Snow
  1.1) Snowflakes
1) Frost
```

```markdown
1) Winter
2) Snow
  2.1) Snowflakes
3) Frost
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
1. Winter
2. Snow
   2.1 Snowflakes
3. Frost
```

## No Content Before

Make sure that there are no other characters (including whitespaces) in front of each list item.

> remark-lint: [list-item-bullet-indent][3]

###### Examples

Note: The `·` character represents a whitespace character.

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
x- Winter
 - Snow
  .- Snowflakes
"- Frost
·- Frost
```

```markdown
x1. Winter
 2. Snow
  .2.1 Snowflakes
"3. Frost
·3. Frost
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
- Winter
- Snow
  - Snowflakes
- Frost
```

```markdown
1. Winter
2. Snow
   2.1 Snowflakes
3. Frost
```

## Continuous Indentation

Use two (2) whitespaces for continuous indentation of nested items and their content.

> remark-lint: [list-item-content-indent][4] and [list-item-indent][5]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
- Winter
    - Snow
- Snowflakes
 - Frost
- Arctic
   - Sparkling
           - Frozen
```

```markdown
- Winter
    Sparkling and frozen!
- Snowflakes
 Made of snow!
- Snow
   Falls down!
       Arctic beauty
```

````markdown
- Winter
        ```js
        import React, { PureComponent } from "react";
        class Frost extends PureComponent {
          // ...
        }
        export default Frost;
        ```
   - Snow
    ```java
    import static winter.Snow;
    String[] flakes = Snow.getFlakes();
    ```
 - Frost
  > Sparkling and frozen!
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
- Winter
  - Snow
- Snowflakes
  - Frost
- Arctic
  - Sparkling
    - Frozen
```

```markdown
- Winter
  Sparkling and frozen!
- Snowflakes
  Made of snow!
- Snow
  Falls down!
  Arctic beauty
```

````markdown
- Winter
  ```js
  import React, { PureComponent } from "react";
  class Frost extends PureComponent {
    // ...
  }
  export default Frost;
  ```
  - Snow
    ```java
    import winter.Snow;
    String[] flakes = Snow.getFlakes();
    ```
    - Frost
      > Sparkling and frozen!
````

## Empty Lines

A list must not contain blank lines between each list item.

> remark-lint: [list-item-spacing][6]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
- Winter

- Snow

  - Snowflakes

- Frost
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
- Winter
- Snow
  - Snowflakes
- Frost
```

## Empty Lines Before And After

Always surround lists by a single empty line except at the beginning of the file.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
... snowflakes are falling.
- Winter
- Snow
  - Snowflakes
- Frost
Sparkling and frozen...
```

```markdown
... snowflakes are falling.


- Winter
- Snow
  - Snowflakes
- Frost


Sparkling and frozen...
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
... snowflakes are falling.

- Winter
- Snow
  - Snowflakes
- Frost

Sparkling and frozen...
```

## Letter Case

The case depends on the part of speech and syntax a list item contains. In general use upper cases for enumerations because most of the time the content is a noun, proper name, code snippet or standalone sentence.

When the list items are meant to be imaginary concatenated with the sentence that comes before the list, adapt to the same case as the context.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
The winter has

- Many snowflakes that are falling down.
- Sparkling and frozen elements!
- A lot of beautiful animals like snowy owls, arctic foxes, and grizzly bears.
```

Enumerations or context-dependent:

```markdown
The winter has

- **snowflakes** - They are falling down.
- **elements** - They are sparkling and frozen!
- **beautiful animals** - Like e.g a lot of snowy owls, arctic foxes, and grizzly bears.
```

Proper names or code snippets:

```markdown
A list for

- react
- `string`
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The winter has

- many snowflakes that are falling down.
- sparkling and frozen elements!
- a lot of beautiful animals like snowy owls, arctic foxes, and grizzly bears.
```

Enumerations or context-dependent:

```markdown
The winter has

- **Snowflakes** - They are falling down.
- **Elements** - They are sparkling and frozen!
- **Beautiful animals** - e.g a lot of snowy owls, arctic foxes, and grizzly bears.
```

Proper names or code snippets:

```markdown
A list for

- React
- `String`
```

## Punctuation After Items

Use punctuation at the end of a list item when it contains a sentence that starts with an upper case letter or multiple sentences or paragraphs. Omit the punctuation for single words.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
- Winter.
- Snow.
- Frost.
```

```markdown
The Winter is

- sparkling and frozen
- cold and snowy
- bright and enlightened
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
- Winter
- Snow
- Frost
```

```markdown
The Winter is

- sparkling and frozen.
- cold and snowy.
- bright and enlightened.
```

## Checkbox Character Style

Use `x` for ticked checkboxes and a single space ` ` for non ticked checkboxes.

> remark-lint: [checkbox-character-style][2]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
- [!] Winter
- [~] Snow
- [»] Frost
```

```markdown
- [] Winter
- [  ] Snow
- [     ] Frost
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
- [x] Winter
- [ ] Snow
- [x] Frost
```

[1]: https://commonmark.org
[2]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-checkbox-character-style
[3]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-bullet-indent
[4]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-content-indent
[5]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-indent
[6]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-spacing
[7]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-style
[8]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-value
[9]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-unordered-list-marker-style

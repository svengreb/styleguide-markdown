## Blocks

Avoid indentation based code blocks, use [fenced code blocks][4] for multi line code. This prevents malformed rendered output due to wrong indentation errors, increases the readability and allows the usage of [language syntax highlighting][5].

> remark-lint: [code-block-style][14]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
    import React, { PureComponent } from "react";

    class Frost extends PureComponent {
      // ...
    }

    export default Frost;
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
```js
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
````

## Syntax Highlighting

Explicitly declare the language for blocks containing code snippets, so that neither the syntax highlighter nor the next editor must guess.

> remark-lint: [fenced-code-flag][15]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
```
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
```js
import React, { PureComponent } from "react";

class Frost extends PureComponent {
  // ...
}

export default Frost;
```
````

## Escape Newlines In Terminal Commands

Many command snippets are intended to be copied and pasted directly into e.g. a terminal. To protect the user to unintentional execute the copied code due to a newline (interpreted by the terminal as <kbd>Enter</kbd>) use a single backslash at the end of the line.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
```sh
npx run docs:generate -- --template=winter --description="Sparkling and frozen" --elements="snow,frost,ice" --snowflakes=20
```
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
```sh
npx run docs:generate -- --template=winter --description="Sparkling and frozen" \
  --elements="snow,frost,ice" --snowflakes=20
```
````

## No Shell Code Dollar Sign

Avoid to use dollar sign (`$`) in shell code. It improves the readability and prevents error when users copy and paste the code. To clarify the output of a command use e.g. a comment on the next line or optionally append it to the command on the same line, separated by a whitespace.

> remark-lint: [no-shell-dollars][17]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
```sh
$ echo "The winter is sparkling and frozen!"
```
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
```sh
echo "The winter is sparkling and frozen!"
```
````

````markdown
```sh
winter="The winter is sparkling and frozen!"
echo $winter # The winter is sparkling and frozen!
```
````

## Within Lists

When using code blocks within lists make sure to use the correct indention to not break the list.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
* Winter
```jsx
const Snow = <Snowflake amount=20 />;
```
* Frost
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
- Winter
  ```jsx
  const Snow = <Snowflake amount=20 />;
  ```
- Frost
````

## Inline

Use one (1) backtick character `` ` `` to create a `inline code` span which will render all wrapped content literally.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
The winter has ```sparkling``` and frozen ```elements```!
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
The winter has `sparkling` and frozen `elements`!
```

To learn what content should be wrapped please read the [use cases](#use-cases) chapter.

## Marker Character Style

Use backtick characters `` ` `` for both blocks and inline code.

> remark-lint: [fenced-code-marker][16]

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

````markdown
~~~js
import React, { PureComponent } from "react";
class Snow extends PureComponent {
  // ...
}
export default Snow;
~~~
````

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

````markdown
```js
import React, { PureComponent } from "react";
class Snow extends PureComponent {
  // ...
}
export default Snow;
```
````

## Use Cases

[Code Blocks](#blocks) should be used for code snippets longer than a single line or terminal command quotations that contain sample output when the being executed.

[Inline code spans](#inline) on the other hand should be used to highlight e.g.

- **executables** - `go`, `npm`, `gcc`
- **paths** - `pkg/internal/transport/http/http.go`, `/etc/hosts`
- **version numbers** - `0.2.0`, `1.8.6-beta.2`
- **code e.g. reserved keywords, builtins and operators** - `this`, `true`/`false`, `String`, `=>`

Don't use it for

- **project or proper names** - e.g [React][13], [Go][8], [Rust][18] [Node.js][10] or [GCC][3].
- **libraries** - e.g. [libgit2][9], [libc][2] (Rust Bindings), [glibc][7] or [glib2][6].
- **packages and modules** - e.g. [react-dom][11], [snowsaw][12] or [archlinux-keyring][1].

[1]: https://archlinux.org/packages/core/any/archlinux-keyring
[2]: https://crates.io/crates/libc
[3]: https://gcc.gnu.org
[4]: https://github.github.com/gfm/#fenced-code-blocks
[5]: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks#syntax-highlighting
[6]: https://wiki.gnome.org/Projects/GLib
[7]: https://www.gnu.org/software/libc
[8]: https://go.dev
[9]: https://libgit2.org
[10]: https://nodejs.org
[11]: https://www.npmjs.com/package/react-dom
[12]: https://github.com/svengreb/snowsaw
[13]: https://react.dev
[14]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
[15]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-flag
[16]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-marker
[17]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shell-dollars
[18]: https://www.rust-lang.org

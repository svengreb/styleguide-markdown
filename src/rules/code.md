## Blocks

Avoid indentation based code blocks, use [fenced code blocks][gfm-spec-fenced_code_blocks] for multi line code. This prevents malformed rendered output due to wrong indentation errors, increases the readability and allows the usage of [language syntax highlighting][gh-help-gfm_code_syntax_highlighting].

> remark-lint: [code-block-style][remark-lint-code-block-style]

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

> remark-lint: [fenced-code-flag][remark-lint-fenced-code-flag]

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

> remark-lint: [no-shell-dollars][remark-lint-no-shell-dollars]

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

> remark-lint: [fenced-code-marker][remark-lint-fenced-code-marker]

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

- **executables** - `gcc`, `npm`, `go`, `python`
- **paths** - `/etc/hosts`, `src/main/java/com/arcticicestudio/icecore/hashids/Hashids.java`
- **version numbers** - `0.2.0`, `1.8.6-frost.2`
- **code e.g. reserved keywords, builtins and operators** - `this`, `true`/`false`, `String`, `=>`

Don't use it for

- **project or proper names** - e.g [React][react], [GCC][gcc], [Node.js][nodejs], [Golang][golang] or [Rust][rustlang]
- **libraries** - e.g. [libgit2][], [libc][crates-libc] (Rust Bindings), [glibc][], [glib2][] or [jackson-databind][bintray-jackson-databind] (Java)
- **packages and modules** - e.g. [react-dom][npm-react-dom], [snowsaw][pypi-snowsaw] or [archlinux-keyring][archlinux-keyring]

[archlinux-keyring]: https://www.archlinux.org/packages/core/any/archlinux-keyring
[bintray-jackson-databind]: https://bintray.com/bintray/jcenter/com.fasterxml.jackson.core%3Ajackson-databind
[crates-libc]: https://crates.io/crates/libc
[gcc]: https://gcc.gnu.org
[gfm-spec-fenced_code_blocks]: https://github.github.com/gfm/#fenced-code-blocks
[gh-help-gfm_code_syntax_highlighting]: https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting
[glib2]: https://wiki.gnome.org/Projects/GLib
[glibc]: https://www.gnu.org/software/libc
[golang]: https://golang.org
[libgit2]: https://libgit2.github.com
[nodejs]: https://nodejs.org
[npm-react-dom]: https://www.npmjs.com/package/react-dom
[pypi-snowsaw]: https://pypi.python.org/pypi/snowsaw
[react]: https://reactjs.org
[remark-lint-code-block-style]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
[remark-lint-fenced-code-flag]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-flag
[remark-lint-fenced-code-marker]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-marker
[remark-lint-no-shell-dollars]: https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shell-dollars
[rustlang]: https://www.rust-lang.org

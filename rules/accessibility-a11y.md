This chapter provides rules to improve the accessibility as documented by the [A11Y][] project.

## Alternative Text

Add an alternative text for images.

###### Examples

⇣ **Incorrect** code for this rule:

<!-- prettier-ignore-start -->

```markdown
![][snowflakes]

[snowflakes]: https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true
```

<!-- prettier-ignore-end -->

⇡ **Correct** code for this rule:

```markdown
![falling snowflakes][snowflakes]

[snowflakes]: https://raw.githubusercontent.com/nordtheme/assets/main/static/images/artworks/arctic/nature/dark/snowfall.svg?sanitize=true
```

[a11y]: https://a11yproject.com

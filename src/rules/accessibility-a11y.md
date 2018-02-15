This chapter provides rules to improve the accessibility as documented by the [A11Y][a11y] project.

## Alternative Text

Add an alternative text for images.

###### Examples

⇣ **Incorrect** code for this rule:

```markdown
![][snowflake]

[snowflake]: https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png
````

⇡ **Correct** code for this rule:

```markdown
![snowflake icon][snowflake]

[snowflake]: https://raw.githubusercontent.com/arcticicestudio/styleguide-markdown/develop/src/assets/snowflake.png
````

[a11y]: https://a11yproject.com

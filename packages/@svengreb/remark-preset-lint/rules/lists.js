/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import checkboxCharacterStyle from "remark-lint-checkbox-character-style";
import checkboxContentIndent from "remark-lint-checkbox-content-indent";
import listItemBulletIndent from "remark-lint-list-item-bullet-indent";
import listItemContentIndent from "remark-lint-list-item-content-indent";
import listItemIndent from "remark-lint-list-item-indent";
import listItemSpacing from "remark-lint-list-item-spacing";
import orderedListMarkerStyle from "remark-lint-ordered-list-marker-style";
import orderedListMarkerValue from "remark-lint-ordered-list-marker-value";
import unorderedListMarkerStyle from "remark-lint-unordered-list-marker-style";

/**
 * Official remark-lint core rules for list document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const lists = {
  plugins: [
    /**
     * Enforce a valid character style for ticked list item checkboxes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-checkbox-character-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#checkbox-character-style
     */
    [
      checkboxCharacterStyle,
      [
        "error",
        {
          checked: "x",
          unchecked: " ",
        },
      ],
    ],
    /**
     * Allow only one whitespace after list item checkboxes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-checkbox-content-indent
     */
    [checkboxContentIndent, ["error"]],
    /**
     * Disallow that list item bullets are indented.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-bullet-indent
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#no-content-before
     */
    [listItemBulletIndent, ["error"]],
    /**
     * Enforce two (2) whitespaces for continuous content indentation of nested items.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-content-indent
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#continuous-indentation
     */
    [listItemContentIndent, ["error"]],
    /**
     * Enforce two (2) whitespaces for continuous indentation of nested items.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-indent
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#continuous-indentation
     */
    [listItemIndent, ["error", "space"]],
    /**
     * Disallow blank lines between list items.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-spacing
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#empty-lines
     */
    [listItemSpacing, false],
    /**
     * Enforce the dot (".") marker character style for ordered list items.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#ordered-marker
     */
    [orderedListMarkerStyle, ["error", "."]],
    /**
     * Enforce continuous numerating for markers of ordered list items.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-value
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#ordered-marker
     */
    [orderedListMarkerValue, ["error", "ordered"]],
    /**
     * Enforce dash (`-`) marker character style for unordered list items.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-unordered-list-marker-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#unordered-marker
     */
    [unorderedListMarkerStyle, ["error", "-"]],
  ],
};

export default lists;

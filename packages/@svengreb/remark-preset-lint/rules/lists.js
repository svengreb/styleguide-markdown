/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce a valid character style for ticked list item checkboxes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-checkbox-character-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#checkbox-character-style
 */
const checkboxCharacterStyle = require("remark-lint-checkbox-character-style");
/**
 * Allow only one whitespace after list item checkboxes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-checkbox-content-indent
 */
const checkboxContentIndent = require("remark-lint-checkbox-content-indent");
/**
 * Disallow that list item bullets are indented.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-bullet-indent
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#no-content-before
 */
const listItemBulletIndent = require("remark-lint-list-item-bullet-indent");
/**
 * Enforce two (2) whitespaces for continuous content indentation of nested items.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-content-indent
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#continuous-indentation
 */
const listItemContentIndent = require("remark-lint-list-item-content-indent");
/**
 * Enforce two (2) whitespaces for continuous indentation of nested items.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-indent
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#continuous-indentation
 */
const listItemIndent = require("remark-lint-list-item-indent");
/**
 * Disallow blank lines between list items.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-list-item-spacing
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#empty-lines
 */
const listItemSpacing = require("remark-lint-list-item-spacing");
/**
 * Enforce the dot (".") marker character style for ordered list items.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#ordered-marker
 */
const orderedListMarkerStyle = require("remark-lint-ordered-list-marker-style");
/**
 * Enforce continuous numerating for markers of ordered list items.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-ordered-list-marker-value
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#ordered-marker
 */
const orderedListMarkerValue = require("remark-lint-ordered-list-marker-value");
/**
 * Enforce dash (`-`) marker character style for unordered list items.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-unordered-list-marker-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/lists.md#unordered-marker
 */
const unorderedListMarkerStyle = require("remark-lint-unordered-list-marker-style");

/**
 * Official remark-lint core rules for list document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
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
    [checkboxContentIndent, ["error"]],
    [listItemBulletIndent, ["error"]],
    [listItemContentIndent, ["error"]],
    [listItemIndent, ["error", "space"]],
    [listItemSpacing, false],
    [orderedListMarkerStyle, ["error", "."]],
    [orderedListMarkerValue, ["error", "ordered"]],
    [unorderedListMarkerStyle, ["error", "-"]],
  ],
};

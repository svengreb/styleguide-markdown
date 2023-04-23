/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce a consistent character style for emphasis marker.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#italic
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#bold
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#strikethrough
 */
const emphasisMarker = require("remark-lint-emphasis-marker");
/**
 * Warn when using emphasis elements (bold or italics) as replacement for headings.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-emphasis-as-heading
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#no-header-replacement
 */
const noEmphasisAsHeading = require("remark-lint-no-emphasis-as-heading");
/**
 * Disallow inner padding within emphasis marker, code marker and link IDs.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-inline-padding
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#no-inner-spacing
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-id-inner-spacing
 */
const noInlinePadding = require("remark-lint-no-inline-padding");
/**
 * Enforce the character style for strong (bold) emphasis markers.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-strong-marker
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#bold
 */
const strongMarker = require("remark-lint-strong-marker");

/**
 * Official remark-lint core rules for emphasis document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [emphasisMarker, ["warn", "consistent"]],
    [noEmphasisAsHeading, ["warn"]],
    [noInlinePadding, ["error"]],
    [strongMarker, ["error", "*"]],
  ],
};

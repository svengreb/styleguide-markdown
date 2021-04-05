/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce a consistent character style for emphasis marker.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#italic
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#bold
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#strikethrough
 */
const emphasisMarker = require("remark-lint-emphasis-marker");
/**
 * Warn when using emphasis elements (bold or italics) as replacement for headings.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-emphasis-as-heading
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#no-header-replacement
 */
const noEmphasisAsHeading = require("remark-lint-no-emphasis-as-heading");
/**
 * Disallow inner padding within emphasis marker, code marker and link IDs.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-inline-padding
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#no-inner-spacing
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/links.html#no-id-inner-spacing
 */
const noInlinePadding = require("remark-lint-no-inline-padding");
/**
 * Enforce the character style for strong (bold) emphasis markers.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-strong-marker
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/emphasis.html#bold
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

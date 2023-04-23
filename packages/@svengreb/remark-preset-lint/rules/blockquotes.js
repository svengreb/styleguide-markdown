/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce correct indentation for blockquotes.
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-blockquote-indentation
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/blockquotes.md#indentation
 */
const blockquoteIndentation = require("remark-lint-blockquote-indentation");
/**
 * Disallow blank lines without markers ('>') in blockquotes.
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-blockquote-without-marker
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/blockquotes.md#multi-line
 */
const noBlockquoteWithoutMarker = require("remark-lint-no-blockquote-without-marker");

/**
 * Official remark-lint core rules for blockquote document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [blockquoteIndentation, ["error", 2]],
    [noBlockquoteWithoutMarker, ["warn"]],
  ],
};

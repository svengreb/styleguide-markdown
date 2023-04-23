/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce fenced code blocks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#blocks
 */
const codeBlockStyle = require("remark-lint-code-block-style");
/**
 * Enforce language syntax flags for fenced code blocks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-flag
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#syntax-highlighting
 */
const fencedCodeFlag = require("remark-lint-fenced-code-flag");
/**
 * Enforce language syntax flags for fenced code blocks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-marker
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#marker-character-style
 */
const fencedCodeMarker = require("remark-lint-fenced-code-marker");
/**
 * Warn when using a dollar sign ("$") in shell code.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shell-dollars
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#no-shell-code-dollar-sign
 */
const noShellDollars = require("remark-lint-no-shell-dollars");

/**
 * Official remark-lint core rules for code document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [codeBlockStyle, ["error", "fenced"]],
    [fencedCodeFlag, ["error", { allowEmpty: false }]],
    [fencedCodeMarker, ["error", "`"]],
    [noShellDollars, ["warn"]],
  ],
};

/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce fenced code blocks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#blocks
 */
const codeBlockStyle = require("remark-lint-code-block-style");
/**
 * Enforce language syntax flags for fenced code blocks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-flag
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#syntax-highlighting
 */
const fencedCodeFlag = require("remark-lint-fenced-code-flag");
/**
 * Enforce language syntax flags for fenced code blocks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-marker
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#marker-character-style
 */
const fencedCodeMarker = require("remark-lint-fenced-code-marker");
/**
 * Warn when using a dollar sign ("$") in shell code.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shell-dollars
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/code.html#no-shell-code-dollar-sign
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

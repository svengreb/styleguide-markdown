/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce a newline at the end of a file. Empty files are allowed.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-newline
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#newline
 */
const finalNewline = require("remark-lint-final-newline");
/**
 * Enforce a consistent number of trailing whitespaces for line breaks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-hard-break-spaces
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#trailing
 */
const hardBreakSpaces = require("remark-lint-hard-break-spaces");
/**
 * Enforce unix-style linebreaks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-linebreak-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#newline
 */
const linebreakStyle = require("remark-lint-linebreak-style");
/**
 * Enforce a maximum line length.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-line-length
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#maximum-line-length
 */
const maximumLineLength = require("remark-lint-maximum-line-length");
/**
 * Disallow more than one (1) blank line after and before each block.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-consecutive-blank-lines
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#after-blocks
 */
const noConsecutiveBlankLines = require("remark-lint-no-consecutive-blank-lines");
/**
 * Warn when missing blank line before a block node.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-missing-blank-lines
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#before-blocks
 */
const noMissingBlankLines = require("remark-lint-no-missing-blank-lines");
/**
 * Disallow tabs and enforce to use whitespaces.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-tabs
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#indentation-character
 */
const noTabs = require("remark-lint-no-tabs");

/**
 * Official remark-lint core rules for whitespaces.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [finalNewline, ["error"]],
    [hardBreakSpaces, ["error"]],
    [linebreakStyle, ["error", "unix"]],
    [maximumLineLength, false],
    [noConsecutiveBlankLines, ["warn"]],
    [noMissingBlankLines, ["warn", { exceptTightLists: true }]],
    [noTabs, ["error"]],
  ],
};

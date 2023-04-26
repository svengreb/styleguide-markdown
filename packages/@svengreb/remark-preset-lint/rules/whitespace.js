/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import finalNewline from "remark-lint-final-newline";
import hardBreakSpaces from "remark-lint-hard-break-spaces";
import linebreakStyle from "remark-lint-linebreak-style";
import maximumLineLength from "remark-lint-maximum-line-length";
import noConsecutiveBlankLines from "remark-lint-no-consecutive-blank-lines";
import noMissingBlankLines from "remark-lint-no-missing-blank-lines";
import noTabs from "remark-lint-no-tabs";

/**
 * Official remark-lint core rules for whitespaces.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const whitespace = {
  plugins: [
    /**
     * Enforce a newline at the end of a file. Empty files are allowed.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-newline
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#newline
     */
    [finalNewline, ["error"]],
    /**
     * Enforce a consistent number of trailing whitespaces for line breaks.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-hard-break-spaces
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#trailing
     */
    [hardBreakSpaces, ["error"]],
    /**
     * Enforce unix-style linebreaks.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-linebreak-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#newline
     */
    [linebreakStyle, ["error", "unix"]],
    /**
     * Enforce a maximum line length.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-line-length
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#maximum-line-length
     */
    [maximumLineLength, false],
    /**
     * Disallow more than one (1) blank line after and before each block.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-consecutive-blank-lines
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#after-blocks
     */
    [noConsecutiveBlankLines, ["warn"]],
    /**
     * Warn when missing blank line before a block node.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-missing-blank-lines
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#before-blocks
     */
    [noMissingBlankLines, ["warn", { exceptTightLists: true }]],
    /**
     * Disallow tabs and enforce to use whitespaces.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-tabs
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/whitespace.md#indentation-character
     */
    [noTabs, ["error"]],
  ],
};

export default whitespace;

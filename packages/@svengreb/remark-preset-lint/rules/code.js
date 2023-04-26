/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import codeBlockStyle from "remark-lint-code-block-style";
import fencedCodeFlag from "remark-lint-fenced-code-flag";
import fencedCodeMarker from "remark-lint-fenced-code-marker";
import noShellDollars from "remark-lint-no-shell-dollars";

/**
 * Official remark-lint core rules for code document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const code = {
  plugins: [
    /**
     * Enforce fenced code blocks.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#blocks
     */
    [codeBlockStyle, ["error", "fenced"]],
    /**
     * Enforce language syntax flags for fenced code blocks.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-flag
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#syntax-highlighting
     */
    [fencedCodeFlag, ["error", { allowEmpty: false }]],
    /**
     * Enforce language syntax flags for fenced code blocks.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-fenced-code-marker
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#marker-character-style
     */
    [fencedCodeMarker, ["error", "`"]],
    /**
     * Warn when using a dollar sign ("$") in shell code.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shell-dollars
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/code.md#no-shell-code-dollar-sign
     */
    [noShellDollars, ["warn"]],
  ],
};

export default code;

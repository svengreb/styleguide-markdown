/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import blockquoteIndentation from "remark-lint-blockquote-indentation";
import noBlockquoteWithoutMarker from "remark-lint-no-blockquote-without-marker";

/**
 * Official remark-lint core rules for blockquote document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const blockquotes = {
  plugins: [
    /**
     * Enforce correct indentation for blockquotes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-blockquote-indentation
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/blockquotes.md#indentation
     */
    [blockquoteIndentation, ["error", 2]],
    /**
     * Disallow blank lines without markers ('>') in blockquotes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-blockquote-without-marker
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/blockquotes.md#multi-line
     */
    [noBlockquoteWithoutMarker, ["warn"]],
  ],
};

export default blockquotes;

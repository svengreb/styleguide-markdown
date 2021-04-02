/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce correct indentation for blockquotes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-blockquote-indentation
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/blockquotes.html#indentation
 */
const blockquoteIndentation = require("remark-lint-blockquote-indentation");
/**
 * Disallow blank lines without markers ('>') in blockquotes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-blockquote-without-marker
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/blockquotes.html#multi-line
 */
const noBlockquoteWithoutMarker = require("remark-lint-no-blockquote-without-marker");

/**
 * Official remark-lint core rules for blockquote document nodes.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 * @see https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [blockquoteIndentation, ["error", 2]],
    [noBlockquoteWithoutMarker, ["warn"]]
  ]
};

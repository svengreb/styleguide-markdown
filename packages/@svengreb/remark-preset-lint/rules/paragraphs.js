/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Disallow the content of paragraphs to be indented.
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-paragraph-content-indent
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/paragraphs.md#no-indentation
 */
const noParagraphContentIndent = require("remark-lint-no-paragraph-content-indent");

/**
 * Official remark-lint core rules for paragraph document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [[noParagraphContentIndent, ["error"]]],
};

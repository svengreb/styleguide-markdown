/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Disallow using raw HTML nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-html
 */
const noHtml = require("remark-lint-no-html");

/**
 * Official remark-lint core rules for raw HTML document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [[noHtml, false]],
};

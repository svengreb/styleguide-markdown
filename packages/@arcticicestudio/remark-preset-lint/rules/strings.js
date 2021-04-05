/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce double quotes for link titles.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-link-title-style
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/strings.html#quotes
 */
const linkTitleStyle = require("remark-lint-link-title-style");

/**
 * Official remark-lint core rules for string document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [[linkTitleStyle, ["error", '"']]],
};

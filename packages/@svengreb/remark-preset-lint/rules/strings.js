/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce double quotes for link titles.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-link-title-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/strings.md#quotes
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

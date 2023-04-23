/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce the character style for horizontal rule markers.
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-rule-style
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/horizontal-rules.md#marker-character-style
 */
const ruleStyle = require("remark-lint-rule-style");

/**
 * Official remark-lint core rules for horizontal rule document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [[ruleStyle, ["error", "---"]]],
};

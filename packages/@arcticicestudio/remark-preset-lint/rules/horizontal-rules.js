/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce the character style for horizontal rule markers.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-rule-style
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/horizontal-rules.html#marker-character-style
 */
const ruleStyle = require("remark-lint-rule-style");

/**
 * Official remark-lint core rules for horizontal rule document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [[ruleStyle, ["error", "---"]]],
};

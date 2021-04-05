/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Disallow tables to be indented.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-table-indentation
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#no-indentation
 */
const noTableIndentation = require("remark-lint-no-table-indentation");
/**
 * Enforces table cells to be padded correctly.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-cell-padding
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#header-delimiter-row-spacing
 */
const tableCellPadding = require("remark-lint-table-cell-padding");
/**
 * Enforces table cell header delimiter marker to be correctly aligned.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-pipe-alignment
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#header-delimiter-row-spacing
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#minimum-column-width
 */
const tablePipeAlignment = require("remark-lint-table-pipe-alignment");
/**
 * Enforces table cell header delimiter marker to be correctly aligned.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-pipes
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/tables.html#alignment
 */
const tablePipes = require("remark-lint-table-pipes");

/**
 * Official remark-lint core rules for table document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [noTableIndentation, ["error"]],
    [tableCellPadding, ["error", "padded"]],
    [tablePipeAlignment, ["error"]],
    [tablePipes, ["error"]],
  ],
};

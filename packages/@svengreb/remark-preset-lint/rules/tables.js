/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import noTableIndentation from "remark-lint-no-table-indentation";
import tableCellPadding from "remark-lint-table-cell-padding";
import tablePipeAlignment from "remark-lint-table-pipe-alignment";
import tablePipes from "remark-lint-table-pipes";

/**
 * Official remark-lint core rules for table document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const tables = {
  plugins: [
    /**
     * Disallow tables to be indented.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-table-indentation
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/tables.md#no-indentation
     */
    [noTableIndentation, ["error"]],
    /**
     * Enforces table cells to be padded correctly.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-cell-padding
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/tables.md#header-delimiter-row-spacing
     */
    [tableCellPadding, ["error", "padded"]],
    /**
     * Enforces table cell header delimiter marker to be correctly aligned.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-pipe-alignment
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/tables.md#header-delimiter-row-spacing
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/tables.md#minimum-column-width
     */
    [tablePipeAlignment, ["error"]],
    /**
     * Enforces table cell header delimiter marker to be correctly aligned.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-table-pipes
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/tables.md#alignment
     */
    [tablePipes, ["error"]],
  ],
};

export default tables;

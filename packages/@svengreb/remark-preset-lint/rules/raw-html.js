/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import noHtml from "remark-lint-no-html";

/**
 * Official remark-lint core rules for raw HTML document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const rawHTML = {
  plugins: [
    /**
     * Disallow using raw HTML nodes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-html
     */
    [noHtml, false],
  ],
};

export default rawHTML;

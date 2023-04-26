/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import linkTitleStyle from "remark-lint-link-title-style";

/**
 * Official remark-lint core rules for string document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const strings = {
  plugins: [
    /**
     * Enforce double quotes for link titles.
     *
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-link-title-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/strings.md#quotes
     */
    [linkTitleStyle, ["error", '"']],
  ],
};

export default strings;

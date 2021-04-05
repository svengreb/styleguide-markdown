/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Arctic Ice Studio Markdown Style Guide rules as an extensible remark-lint rule preset.
 *
 * @version 0.4.0
 * @license MIT
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright 2018-present Sven Greb <development@svengreb.de>
 * @see https://github.com/remarkjs/remark-lint
 * @see https://remark.js.org
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 * @see https://github.com/remarkjs/remark-lint#configuring-remark-lint
 */
module.exports = {
  plugins: [
    "remark-lint",
    "./rules/blockquotes",
    "./rules/code",
    "./rules/emphasis",
    "./rules/headings",
    "./rules/horizontal-rules",
    "./rules/links",
    "./rules/lists",
    "./rules/naming-conventions",
    "./rules/paragraphs",
    "./rules/raw-html",
    "./rules/strings",
    "./rules/support",
    "./rules/tables",
    "./rules/whitespace",
  ].map(require.resolve),
};

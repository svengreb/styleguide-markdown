/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import remarkLint from "remark-lint";

/* eslint-disable import/extensions */
import blockquotes from "./rules/blockquotes.js";
import code from "./rules/code.js";
import emphasis from "./rules/emphasis.js";
import headings from "./rules/headings.js";
import horizontalRules from "./rules/horizontal-rules.js";
import links from "./rules/links.js";
import lists from "./rules/lists.js";
import namingConventions from "./rules/naming-conventions.js";
import paragraphs from "./rules/paragraphs.js";
import rawHTML from "./rules/raw-html.js";
import strings from "./rules/strings.js";
import support from "./rules/support.js";
import tables from "./rules/tables.js";
import whitespace from "./rules/whitespace.js";
/* eslint-enable import/extensions */

/**
 * An opinionated, yet universally applicable Markdown code style guide rules as an extensible remark-lint rule preset.
 * @version 0.4.0
 * @license MIT
 * @author Sven Greb <development@svengreb.de>
 * @copyright 2016-present Sven Greb <development@svengreb.de>
 * @see https://remark.js.org
 * @see https://github.com/remarkjs/remark-lint
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 * @see https://github.com/remarkjs/remark-lint#configuring-remark-lint
 */
const preset = {
  plugins: [
    remarkLint,
    blockquotes,
    code,
    emphasis,
    headings,
    horizontalRules,
    links,
    lists,
    namingConventions,
    paragraphs,
    rawHTML,
    strings,
    support,
    tables,
    whitespace,
  ],
};

export default preset;

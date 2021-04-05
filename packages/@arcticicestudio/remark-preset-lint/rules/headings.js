/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce a specific level for the first heading.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-first-heading-level
 */
const firstHeadingLevel = require("remark-lint-first-heading-level");
/**
 * Enforce headings to only increment by one at a time.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-heading-increment
 */
const headingIncrement = require("remark-lint-heading-increment");
/**
 * Enforce ATX style headings.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-heading-style
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#atx-style
 */
const headingStyle = require("remark-lint-heading-style");
/**
 * Warn if a maximum length for headings is exceeded.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-heading-length
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#length
 */
const maximumHeadingLength = require("remark-lint-maximum-heading-length");
/**
 * Warn when using two or more headers with the same content in the same markdown file.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-headings
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#no-duplicate
 */
const noDuplicateHeadings = require("remark-lint-no-duplicate-headings");
/**
 * Warn when using two or more headers with the same content in the same section.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-headings-in-section
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#no-duplicate
 */
const noDuplicateHeadingsInSection = require("remark-lint-no-duplicate-headings-in-section");
/**
 * Disallow invalid indention of headings content.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-content-indent
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#content-spacing
 */
const noHeadingContentIndent = require("remark-lint-no-heading-content-indent");
/**
 * Disallow indention and any content (including whitespaces) before headings.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-indent
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#no-content-before
 */
const noHeadingIndent = require("remark-lint-no-heading-indent");
/**
 * Disallow using level 7+ "headings".
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-like-paragraph
 */
const noHeadingLikeParagraph = require("remark-lint-no-heading-like-paragraph");
/**
 * Warn when ending a heading content with a punctuation character.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-punctuation
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/headings.html#punctuation-after-content
 */
const noHeadingPunctuation = require("remark-lint-no-heading-punctuation");
/**
 * Disallow multiple toplevel headings.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-multiple-toplevel-headings
 */
const noMultipleToplevelHeadings = require("remark-lint-no-multiple-toplevel-headings");

/**
 * Official remark-lint core rules for heading document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [firstHeadingLevel, false],
    [headingIncrement, false],
    [headingStyle, ["error", "atx"]],
    [maximumHeadingLength, ["warn", 80]],
    [noDuplicateHeadings, ["warn"]],
    [noDuplicateHeadingsInSection, ["warn"]],
    [noHeadingContentIndent, ["error"]],
    [noHeadingIndent, ["error"]],
    [noHeadingLikeParagraph, ["error"]],
    [noHeadingPunctuation, ["warn"]],
    [noMultipleToplevelHeadings, false],
  ],
};

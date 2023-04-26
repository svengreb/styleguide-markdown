/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import firstHeadingLevel from "remark-lint-first-heading-level";
import headingIncrement from "remark-lint-heading-increment";
import headingStyle from "remark-lint-heading-style";
import maximumHeadingLength from "remark-lint-maximum-heading-length";
import noDuplicateHeadings from "remark-lint-no-duplicate-headings";
import noDuplicateHeadingsInSection from "remark-lint-no-duplicate-headings-in-section";
import noHeadingContentIndent from "remark-lint-no-heading-content-indent";
import noHeadingIndent from "remark-lint-no-heading-indent";
import noHeadingLikeParagraph from "remark-lint-no-heading-like-paragraph";
import noHeadingPunctuation from "remark-lint-no-heading-punctuation";
import noMultipleToplevelHeadings from "remark-lint-no-multiple-toplevel-headings";

/**
 * Official remark-lint core rules for heading document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const headings = {
  plugins: [
    /**
     * Enforce a specific level for the first heading.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-first-heading-level
     */
    [firstHeadingLevel, false],
    /**
     * Enforce headings to only increment by one at a time.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-heading-increment
     */
    [headingIncrement, false],
    /**
     * Enforce ATX style headings.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-heading-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#atx-style
     */
    [headingStyle, ["error", "atx"]],
    /**
     * Warn if a maximum length for headings is exceeded.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-maximum-heading-length
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#length
     */
    [maximumHeadingLength, ["warn", 80]],
    /**
     * Warn when using two or more headers with the same content in the same markdown file.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-headings
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#no-duplicate
     */
    [noDuplicateHeadings, ["warn"]],
    /**
     * Warn when using two or more headers with the same content in the same section.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-headings-in-section
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#no-duplicate
     */
    [noDuplicateHeadingsInSection, ["warn"]],
    /**
     * Disallow invalid indention of headings content.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-content-indent
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#content-spacing
     */
    [noHeadingContentIndent, ["error"]],
    /**
     * Disallow indention and any content (including whitespaces) before headings.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-indent
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#no-content-before
     */
    [noHeadingIndent, ["error"]],
    /**
     * Disallow using level 7+ "headings".
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-like-paragraph
     */
    [noHeadingLikeParagraph, ["error"]],
    /**
     * Warn when ending a heading content with a punctuation character.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-heading-punctuation
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/headings.md#punctuation-after-content
     */
    [noHeadingPunctuation, ["warn"]],
    /**
     * Disallow multiple toplevel headings.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-multiple-toplevel-headings
     */
    [noMultipleToplevelHeadings, false],
  ],
};

export default headings;

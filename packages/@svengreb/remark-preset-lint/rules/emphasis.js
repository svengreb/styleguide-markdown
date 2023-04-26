/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import emphasisMarker from "remark-lint-emphasis-marker";
import noEmphasisAsHeading from "remark-lint-no-emphasis-as-heading";
import noInlinePadding from "remark-lint-no-inline-padding";
import strongMarker from "remark-lint-strong-marker";

/**
 * Official remark-lint core rules for emphasis document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const emphasis = {
  plugins: [
    /**
     * Enforce a consistent character style for emphasis marker.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-code-block-style
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#italic
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#bold
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#strikethrough
     */
    [emphasisMarker, ["warn", "consistent"]],
    /**
     * Warn when using emphasis elements (bold or italics) as replacement for headings.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-emphasis-as-heading
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#no-header-replacement
     */
    [noEmphasisAsHeading, ["warn"]],
    /**
     * Disallow inner padding within emphasis marker, code marker and link IDs.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-inline-padding
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#no-inner-spacing
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-id-inner-spacing
     */
    [noInlinePadding, ["error"]],
    /**
     * Enforce the character style for strong (bold) emphasis markers.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-strong-marker
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#bold
     */
    [strongMarker, ["error", "*"]],
  ],
};

export default emphasis;

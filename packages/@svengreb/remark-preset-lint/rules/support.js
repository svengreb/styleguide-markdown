/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import footnotes from "remark-footnotes";
import frontmatter from "remark-frontmatter";
import gfm from "remark-gfm";
import strikethroughMarker from "remark-lint-strikethrough-marker";

/**
 * Support for plugins of specification addons and variants.
 */
const support = {
  plugins: [
    /**
     * Adds support for Pandoc footnotes
     * @since 0.4.0
     * @see https://github.com/remarkjs/remark-footnotes
     * @see https://pandoc.org
     */
    [
      footnotes,
      {
        /* Enable support for inline notes like `^[note]`. */
        inlineNotes: true,
      },
    ],
    /**
     * Adds support for YAML and TOML frontmatter.
     * @since 0.3.0
     * @see http://yaml.org
     * @see https://github.com/toml-lang/toml
     */
    [frontmatter, ["toml", "yaml"]],
    /**
     * Adds support for "GitHub Flavored Markdown".
     * @since 0.4.0
     * @see https://github.com/remarkjs/remark-gfm
     * @see https://github.github.com/gfm
     */
    [
      gfm,
      {
        /* Disallow strikethrough with a single tilde. */
        singleTilde: false,
        /* Ensure a space between table cell delimiters (`|`) and and content. */
        tableCellPadding: true,

        /* Align table delimiters (`|`) between cells so that they all align nicely and form a grid. */
        tablePipeAlign: true,
      },
    ],
    /**
     * Warn when the number of strikethrough markers is inconsistent and does not use two strikethrough markers.
     * @since 0.5.0
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-strikethrough-marker
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/emphasis.md#strikethrough
     */
    [strikethroughMarker, "~~"],
  ],
};

export default support;

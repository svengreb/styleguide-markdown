/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Adds support for Pandoc footnotes
 *
 * @since 0.4.0
 * @see https://github.com/remarkjs/remark-footnotes
 * @see https://pandoc.org/
 */
const footnotes = require("remark-footnotes");
/**
 * Adds support for YAML and TOML frontmatter.
 *
 * @since 0.3.0
 * @see http://yaml.org
 * @see https://github.com/toml-lang/toml
 */
const frontmatter = require("remark-frontmatter");
/**
 * Adds support for "GitHub Flavored Markdown".
 *
 * @since 0.4.0
 * @see https://github.com/remarkjs/remark-gfm
 * @see https://github.github.com/gfm
 */
const gfm = require("remark-gfm");

/**
 * Support for plugins of specification addons and variants.
 */
module.exports = {
  plugins: [
    [
      footnotes,
      {
        /* Enable support for inline notes like `^[note]`. */
        inlineNotes: true,
      },
    ],
    [frontmatter, ["toml", "yaml"]],
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
  ],
};

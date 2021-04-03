/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Configurations for remark-lint.
 *
 * @see https://github.com/remarkjs/remark-lint
 */
module.exports = {
  plugins: [
    "./packages/@arcticicestudio/remark-preset-lint/index.js",
    /* Disabled to suppress warnings about duplicate "Example" headings. */
    ["remark-lint-no-duplicate-headings", false],
  ],
};

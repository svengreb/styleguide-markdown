/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for remark-lint.
 * @see https://github.com/remarkjs/remark-lint
 * @see https://remark.js.org
 */
module.exports = {
  plugins: [
    "./packages/@svengreb/remark-preset-lint/index.js",
    /* Disabled to suppress warnings about duplicate "Example" headings. */
    ["remark-lint-no-duplicate-headings", false],
  ],
};

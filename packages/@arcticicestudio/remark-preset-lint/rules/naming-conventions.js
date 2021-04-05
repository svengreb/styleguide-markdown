/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Enforce a consistent file extension.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-file-extension
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/naming-conventions.html#file-extension
 */
const fileExtension = require("remark-lint-file-extension");
/**
 * Warn when file name start with an article.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-articles
 */
const noFileNameArticles = require("remark-lint-no-file-name-articles");
/**
 * Warn when file names contain consecutive dashes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-consecutive-dashes
 */
const noFileNameConsecutiveDashes = require("remark-lint-no-file-name-consecutive-dashes");
/**
 * Warn when file names contain irregular characters other than alpha-numericals, dashes, and dots.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-irregular-characters
 */
const noFileNameIrregularCharacters = require("remark-lint-no-file-name-irregular-characters");
/**
 * Disallow file names with mixed letter case: both upper- and lower case characters.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-mixed-case
 * @see https://arcticicestudio.github.io/styleguide-markdown/rules/naming-conventions.html#file-naming
 */
const noFileNameMixedCase = require("remark-lint-no-file-name-mixed-case");
/**
 * Warn when file names contain initial or final dashes.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-outer-dashes
 */
const noFileNameOuterDashes = require("remark-lint-no-file-name-outer-dashes");

/**
 * Official remark-lint core rules for naming conventions.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [fileExtension, ["error", "md"]],
    [noFileNameArticles, false],
    [noFileNameConsecutiveDashes, ["warn"]],
    [noFileNameIrregularCharacters, false],
    [noFileNameMixedCase, ["error"]],
    [noFileNameOuterDashes, ["warn"]],
  ],
};

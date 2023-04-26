/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import fileExtension from "remark-lint-file-extension";
import noFileNameArticles from "remark-lint-no-file-name-articles";
import noFileNameConsecutiveDashes from "remark-lint-no-file-name-consecutive-dashes";
import noFileNameIrregularCharacters from "remark-lint-no-file-name-irregular-characters";
import noFileNameMixedCase from "remark-lint-no-file-name-mixed-case";
import noFileNameOuterDashes from "remark-lint-no-file-name-outer-dashes";

/**
 * Official remark-lint core rules for naming conventions.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const namingConventions = {
  plugins: [
    /**
     * Enforce a consistent file extension.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-file-extension
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/naming-conventions.md#file-extension
     */
    [fileExtension, ["error", "md"]],
    /**
     * Warn when file name start with an article.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-articles
     */
    [noFileNameArticles, false],
    /**
     * Warn when file names contain consecutive dashes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-consecutive-dashes
     */
    [noFileNameConsecutiveDashes, ["warn"]],
    /**
     * Warn when file names contain irregular characters other than alpha-numericals, dashes, and dots.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-irregular-characters
     */
    [noFileNameIrregularCharacters, false],
    /**
     * Disallow file names with mixed letter case: both upper- and lower case characters.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-mixed-case
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/naming-conventions.md#file-naming
     */
    [noFileNameMixedCase, ["error"]],
    /**
     * Warn when file names contain initial or final dashes.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-file-name-outer-dashes
     */
    [noFileNameOuterDashes, ["warn"]],
  ],
};

export default namingConventions;

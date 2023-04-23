/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Enforce lower case letters for reference link IDs.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-case
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#letter-case
 */
const definitionCase = require("remark-lint-definition-case");
/**
 * Enforce a single space after the colon of reference links.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-spacing
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#spacing-after-colon
 */
const definitionSpacing = require("remark-lint-definition-spacing");
/**
 * Enforce reference links to be placed at the bottom of the document.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-definition
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#definition-placement
 */
const finalDefinition = require("remark-lint-final-definition");
/**
 * Disallow autolinks without a valid protocols.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-auto-link-without-protocol
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#autolink-protocol
 */
const noAutoLinkWithoutProtocol = require("remark-lint-no-auto-link-without-protocol");
/**
 * Disallow duplicate reference link IDs.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-definitions
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#unique-ids
 */
const noDuplicateDefinitions = require("remark-lint-no-duplicate-definitions");
/**
 * Warn when definitions define the same URL.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-defined-urls
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#unique-ids
 */
const noDuplicateDefinedURLs = require("remark-lint-no-duplicate-defined-urls");
/**
 * Disallow empty link and image URLs.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-empty-url
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-empty-url
 */
const noEmptyUrl = require("remark-lint-no-empty-url");
/**
 * Disallow literal URLs and enforce to always use angle-brackets ("<>") for autolinks.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-literal-urls
 */
const noLiteralUrls = require("remark-lint-no-literal-urls");
/**
 * Disallow URLs that are also defined identifiers.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-reference-like-url
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-reference-like-url
 */
const noReferenceLikeUrl = require("remark-lint-no-reference-like-url");
/**
 * Warn when using shortcut reference images.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shortcut-reference-image
 */
const noShortcutReferenceImage = require("remark-lint-no-shortcut-reference-image");
/**
 * Warn when using shortcut reference links.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shortcut-reference-link
 */
const noShortcutReferenceLink = require("remark-lint-no-shortcut-reference-link");
/**
 * Disallow the usage of references that are not defined.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-undefined-references
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-undefined
 */
const noUndefinedReferences = require("remark-lint-no-undefined-references");
/**
 * Warn when unused definitions are found.
 *
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unused-definitions
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-unused
 */
const noUnusedDefinitions = require("remark-lint-no-unused-definitions");
/**
 * Warn when full reference images are used that could be collapsed.
 *
 * @since 0.4.0
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-image
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/images.md#collapsed-reference-links
 */
const noUnneededFullReferenceImage = require("remark-lint-no-unneeded-full-reference-image");
/**
 * Warn when full reference links are used that could be collapsed.
 *
 * @since 0.4.0
 * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-link
 * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#collapsed-references
 */
const noUnneededFullReferenceLink = require("remark-lint-no-unneeded-full-reference-link");

/**
 * Official remark-lint core rules for link document nodes.
 *
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
module.exports = {
  plugins: [
    [definitionCase, ["error"]],
    [definitionSpacing, ["error"]],
    [finalDefinition, ["error"]],
    [noAutoLinkWithoutProtocol, ["warn"]],
    [noDuplicateDefinitions, ["error"]],
    [noDuplicateDefinedURLs, ["warn"]],
    [noEmptyUrl, ["error"]],
    [noLiteralUrls, false],
    [noReferenceLikeUrl, ["error"]],
    [noShortcutReferenceImage, false],
    [noShortcutReferenceLink, false],
    [noUndefinedReferences, ["error"]],
    [noUnusedDefinitions, ["warn"]],
    [noUnneededFullReferenceImage, ["warn"]],
    [noUnneededFullReferenceLink, ["warn"]],
  ],
};

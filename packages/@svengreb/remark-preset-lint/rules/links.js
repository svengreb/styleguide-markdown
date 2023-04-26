/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

import definitionCase from "remark-lint-definition-case";
import definitionSpacing from "remark-lint-definition-spacing";
import finalDefinition from "remark-lint-final-definition";
import noAutoLinkWithoutProtocol from "remark-lint-no-auto-link-without-protocol";
import noDuplicateDefinitions from "remark-lint-no-duplicate-definitions";
import noDuplicateDefinedURLs from "remark-lint-no-duplicate-defined-urls";
import noEmptyUrl from "remark-lint-no-empty-url";
import noLiteralUrls from "remark-lint-no-literal-urls";
import noReferenceLikeUrl from "remark-lint-no-reference-like-url";
import noShortcutReferenceImage from "remark-lint-no-shortcut-reference-image";
import noShortcutReferenceLink from "remark-lint-no-shortcut-reference-link";
import noUndefinedReferences from "remark-lint-no-undefined-references";
import noUnusedDefinitions from "remark-lint-no-unused-definitions";
import noUnneededFullReferenceImage from "remark-lint-no-unneeded-full-reference-image";
import noUnneededFullReferenceLink from "remark-lint-no-unneeded-full-reference-link";

/**
 * Official remark-lint core rules for link document nodes.
 * @see https://github.com/remarkjs/remark-lint/blob/main/doc/rules.md#list-of-rules
 */
const links = {
  plugins: [
    /**
     * Enforce lower case letters for reference link IDs.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-case
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#letter-case
     */
    [definitionCase, ["error"]],
    /**
     * Enforce a single space after the colon of reference links.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-definition-spacing
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#spacing-after-colon
     */
    [definitionSpacing, ["error"]],
    /**
     * Enforce reference links to be placed at the bottom of the document.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-final-definition
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#definition-placement
     */
    [finalDefinition, ["error"]],
    /**
     * Disallow autolinks without a valid protocols.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-auto-link-without-protocol
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#autolink-protocol
     */
    [noAutoLinkWithoutProtocol, ["warn"]],
    /**
     * Disallow duplicate reference link IDs.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-definitions
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#unique-ids
     */
    [noDuplicateDefinitions, ["error"]],
    /**
     * Warn when definitions define the same URL.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-duplicate-defined-urls
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#unique-ids
     */
    [noDuplicateDefinedURLs, ["warn"]],
    /**
     * Disallow empty link and image URLs.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-empty-url
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-empty-url
     */
    [noEmptyUrl, ["error"]],
    /**
     * Disallow literal URLs and enforce to always use angle-brackets ("<>") for autolinks.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-literal-urls
     */
    [noLiteralUrls, false],
    /**
     * Disallow URLs that are also defined identifiers.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-reference-like-url
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-reference-like-url
     */
    [noReferenceLikeUrl, ["error"]],
    /**
     * Warn when using shortcut reference images.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shortcut-reference-image
     */
    [noShortcutReferenceImage, false],
    /**
     * Warn when using shortcut reference links.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-shortcut-reference-link
     */
    [noShortcutReferenceLink, false],
    /**
     * Disallow the usage of references that are not defined.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-undefined-references
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-undefined
     */
    [noUndefinedReferences, ["error"]],
    /**
     * Warn when unused definitions are found.
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unused-definitions
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#no-unused
     */
    [noUnusedDefinitions, ["warn"]],
    /**
     * Warn when full reference images are used that could be collapsed.
     * @since 0.4.0
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-image
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/images.md#collapsed-reference-links
     */
    [noUnneededFullReferenceImage, ["warn"]],
    /**
     * Warn when full reference links are used that could be collapsed.
     * @since 0.4.0
     * @see https://github.com/remarkjs/remark-lint/tree/main/packages/remark-lint-no-unneeded-full-reference-link
     * @see https://github.com/svengreb/styleguide-markdown/blob/main/rules/links.md#collapsed-references
     */
    [noUnneededFullReferenceLink, ["warn"]],
  ],
};
export default links;

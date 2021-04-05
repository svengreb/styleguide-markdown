/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the LICENSE file.
 */

/**
 * Add support for YAML and TOML frontmatter.
 *
 * @since 0.3.0
 * @see http://yaml.org
 * @see https://github.com/toml-lang/toml
 */
const frontmatter = require("remark-frontmatter");

/**
 * Support for rules of specification addons and additions.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.1.0
 */
module.exports = {
  plugins: [[frontmatter, ["yaml", "toml"]]],
};

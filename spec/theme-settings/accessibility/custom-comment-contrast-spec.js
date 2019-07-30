/*
 * Copyright (C) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2016-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Atom Syntax
 * Repository: https://github.com/arcticicestudio/nord-atom-syntax
 * License:    MIT
 */

"use babel";
"use strict";

import { DEFAULT_COMMENT_CONTRAST, MINIMUM_COMMENT_CONTRAST, MAXIMUM_COMMENT_CONTRAST } from "../../../lib/constants";

describe("Nord Atom Syntax accessibility custom comment contrast theme settings", () => {
  beforeEach(() => {
    this.workspace = atom.views.getView(atom.workspace);
    jasmine.attachToDOM(this.workspace);

    waitsForPromise("Theme Activation", () => {
      return atom.packages.activatePackage("nord-atom-syntax");
    });
  });

  it("should be able to set the minimum value", () => {
    atom.config.set("nord-atom-syntax.accessibility.commentContrast", MINIMUM_COMMENT_CONTRAST);
    expect(atom.config.get("nord-atom-syntax.accessibility.commentContrast")).toBe(MINIMUM_COMMENT_CONTRAST);
  });

  it("should be able to set the maximum value", () => {
    atom.config.set("nord-atom-syntax.accessibility.commentContrast", MAXIMUM_COMMENT_CONTRAST);
    expect(atom.config.get("nord-atom-syntax.accessibility.commentContrast")).toBe(MAXIMUM_COMMENT_CONTRAST);
  });

  it("should reset to the default value when setting no value", () => {
    atom.config.set("nord-atom-syntax.accessibility.commentContrast", null);
    expect(atom.config.get("nord-atom-syntax.accessibility.commentContrast")).toBe(DEFAULT_COMMENT_CONTRAST);
  });

  it("should reset to the minimum value when setting a negative value", () => {
    atom.config.set("nord-atom-syntax.accessibility.commentContrast", -1);
    expect(atom.config.get("nord-atom-syntax.accessibility.commentContrast")).toBe(MINIMUM_COMMENT_CONTRAST);
  });

  it("should reset to the maximum value when setting value higher than the maximum value", () => {
    atom.config.set("nord-atom-syntax.accessibility.commentContrast", 30);
    expect(atom.config.get("nord-atom-syntax.accessibility.commentContrast")).toBe(MAXIMUM_COMMENT_CONTRAST);
  });
});

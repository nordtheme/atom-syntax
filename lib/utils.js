"use babel";
"use strict";

/*
 * Copyright (c) 2016-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2016-present Sven Greb <code@svengreb.de>
 *
 * Project:    Nord Atom Syntax
 * Repository: https://github.com/arcticicestudio/nord-atom-syntax
 * License:    MIT
 */

export default {
  toggleClass(boolean, className) {
    let root = document.querySelector("atom-workspace");

    if (boolean) {
      root.classList.add(className);
    } else {
      root.classList.remove(className);
    }
  }
};

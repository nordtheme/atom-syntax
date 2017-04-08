"use babel";
"use strict";
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Main Theme Library                                  +
project    nord-atom-syntax                                    +
repository https://github.com/arcticicestudio/nord-atom-syntax +
author     Arctic Ice Studio                                   +
email      development@arcticicestudio.com                     +
copyright  Copyright (C) 2017                                  +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
*/
import fs from "fs";
import { toggleClass } from "./utils";

export default {
  writeConfig(options) {
    let customCommentContrast = atom.config.get("nord-atom-syntax.accessibility.commentContrast");
    let config = `@theme-setting-custom-comment-contrast: ${customCommentContrast}%;`;

    fs.writeFile(`${__dirname}/../styles/theme-settings-store.less`, config, "utf8", () => {
      if (!options || !options.noReload) {
        let themePack = atom.packages.getLoadedPackage("nord-atom-syntax");
        
        if (themePack) {
          themePack.deactivate();
          setImmediate(() => themePack.activate());
        }
      }
      if (options && options.callback && typeof options.callback === "function") {
        options.callback();
      }
    });
  },

  activate() {
    toggleClass(true, "theme-nord-atom-syntax-accessibility-custom-comment-contrast");
    atom.config.onDidChange("nord-atom-syntax.accessibility.commentContrast", () =>this.writeConfig({ noReload: true }));
  },

  deactivate() {
    toggleClass(false, "theme-nord-atom-syntax-accessibility-custom-comment-contrast");
    this.writeConfig({ noReload: true });
  }
};

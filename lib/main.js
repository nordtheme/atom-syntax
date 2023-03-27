"use babel";
"use strict";

/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

export default {
  handleDeprecatedCustomCommentContrastSetting(options) {
    const customCommentContrast = atom.config.get("nord-atom-syntax.accessibility.commentContrast");
    if (customCommentContrast !== 0) {
      atom.notifications.addWarning(`The "Custom Comment Contrast" theme setting is deprecated and will be removed in version 1.0.0!`, {
        detail:
          "To adapt to the change reset the setting to the default value by deleting the user-defined value from the text field or setting the value to 0.",
        description: `The comment color brightness has been increased by 10% by default!
        As of version 0.4.0, the setting has no effect anymore. Please see [nordtheme/atom-syntax#60](https://github.com/nordtheme/atom-syntax/issues/60) for more details.`,
        dismissable: true,
        icon: "megaphone",
      });

      if (!options || !options.noReload) {
        const themePack = atom.packages.getLoadedPackage("nord-atom-syntax");

        if (themePack) {
          setImmediate(() => themePack.activate());
        }
      }
      if (options && options.callback && typeof options.callback === "function") {
        options.callback();
      }
    }
  },

  activate() {
    atom.config.onDidChange("nord-atom-syntax.accessibility.commentContrast", () => this.handleDeprecatedCustomCommentContrastSetting({ noReload: true }));
  },
};

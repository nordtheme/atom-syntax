"use babel";
"use strict";
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Util Theme Library                                  +
project    nord-atom-syntax                                    +
repository https://github.com/arcticicestudio/nord-atom-syntax +
author     Arctic Ice Studio                                   +
email      development@arcticicestudio.com                     +
copyright  Copyright (C) 2017                                  +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

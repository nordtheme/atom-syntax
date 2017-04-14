"use strict";
/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Project Gulp File                                   +
project    nord-atom-syntax                                    +
repository https://github.com/arcticicestudio/nord-atom-syntax +
author     Arctic Ice Studio                                   +
email      development@arcticicestudio.com                     +
copyright  Copyright (C) 2017                                  +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
Gulp
  (http://gulpjs.com)
npmjs
  (https://www.npmjs.com)
*/
/*+---------+
  + Imports +
  +---------+*/
const gulp = require("gulp-help")(require("gulp"));
const eslint = require("gulp-eslint");
const gulpStylelint = require("gulp-stylelint");

/*+---------------+
  + Configuration +
  +---------------+*/
const javaScriptSources = ["lib/**/*.js"];
const lesscssSources = ["styles/**/*.less"];

/*+-------+
  + Tasks +
  +-------+*/
/**
 * Shows the help.
 *
 * @since 0.8.0
 */
gulp.task("default", ["help"]);

/**
 * Runs all lint tasks.
 *
 * @since 0.8.0
 */
gulp.task("lint", "Runs all lint tasks", ["lint-lesscss", "lint-js"]);

/**
 * Lints all JavaScript sources.
 *
 * @since 0.8.0
 */
gulp.task("lint-js", "Lints all JavaScript sources", () => {
  return gulp.src(javaScriptSources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/**
 * Lints all LESSCSS sources.
 *
 * @since 0.8.0
 */
gulp.task("lint-lesscss", "Lints all LESSCSS sources", () => {
  return gulp.src(lesscssSources)
    .pipe(gulpStylelint({
      failAfterError: true,
      reporters: [
        {formatter: "verbose", console: true}
      ]
    }));
});

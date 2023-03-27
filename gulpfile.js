/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * @file Gulp configurations.
 * @see http://gulpjs.com
 * @see https://www.npmjs.com
 */

const gulp = require("gulp-help")(require("gulp"));
const eslint = require("gulp-eslint");
const gulpStylelint = require("gulp-stylelint");

const javaScriptSources = ["lib/**/*.js", "spec/**/*.js"];
const lesscssSources = ["styles/**/*.less"];

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
gulp.task("lint-js", "Lints all JavaScript sources", () => gulp.src(javaScriptSources).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError()));

/**
 * Lints all LESSCSS sources.
 *
 * @since 0.8.0
 */
gulp.task("lint-lesscss", "Lints all LESSCSS sources", () =>
  gulp.src(lesscssSources).pipe(
    gulpStylelint({
      failAfterError: true,
      reporters: [{ formatter: "verbose", console: true }],
    })
  )
);

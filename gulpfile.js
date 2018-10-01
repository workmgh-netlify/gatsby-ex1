/**
 * Make sure there is a fallback version for all languages to use the default language. 
 * This is done by copying the defaultLanguage version if non language specific is available.
 */
const gulp = require('gulp');
const replace = require('gulp-replace');
const rename = require("gulp-rename");

const siteSettings = require('./settings/siteSettings.json');

const anchor = /^---\n/;
const replaceAnchor = '---\n';
const rootFolder = 'settings/markdown';
const targetFolder = 'src/pages/markdown';
const languages = siteSettings.languages;
const defaultLanguage = siteSettings.defaultLanguage;

gulp.task('generateLanguages', ['fallbackLanguage'], function () {
  // copy files that do have a language code in the filename (overwriting existing files if any) and mark as fallback=false
  return gulp.src([`${rootFolder}/**/*.*.md`])
    .pipe(replace(anchor, replaceAnchor + 'isFallback: false\n'))
    .pipe(gulp.dest(targetFolder));
});

gulp.task('fallbackLanguage', ['baseLanguage'], function () {
  // copy default language as default version to all other languages and mark as fallback=true
  let gulpStream = gulp.src([`${rootFolder}/**/*.md`, `!${rootFolder}/**/*.*.md`])
    .pipe(replace(anchor, replaceAnchor + 'isFallback: true\n'));

  languages.forEach(function (langKey) {
    if (langKey !== defaultLanguage) {
      gulpStream
        .pipe(rename(function (path) {
          path.basename += `.${langKey}`;
        }))
        .pipe(gulp.dest(targetFolder));
    }
  });

  return gulpStream;
});

gulp.task('baseLanguage', function () {
  // copy default language marking it as not a fallback
  return gulp.src([`${rootFolder}/**/*.md`, `!${rootFolder}!/**/*.*.md`])
    .pipe(replace(anchor, replaceAnchor + 'isFallback: false\n'))
    .pipe(gulp.dest(targetFolder));
});
<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-atom-syntax/develop/assets/nord-atom-syntax-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-atom-syntax/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-atom-syntax.svg"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-88C0D0.svg"/></a> <img src="https://atom.io/favicon.ico" width=24 height=24/> <a href="https://github.com/atom/atom/releases/tag/v1.13.0"><img src="https://img.shields.io/badge/Atom->=v1.13.0-green.svg"/></a> <a href="https://atom.io/themes/nord-atom-syntax"><img src="https://img.shields.io/apm/v/nord-atom-syntax.svg"/></a> <a href="https://atom.io/themes/nord-atom-syntax"><img src="https://img.shields.io/apm/dm/nord-atom-syntax.svg"/></a></p>

---

# 0.9.1
*2017-04-14*
## Improvements
### Theme Settings
❯ Removed a unnecessary IO write event when when deactivating the package. Before all theme settings have been written out to the store file `theme-settings-store.less`. The `deactivation()` method has been removed since there is currently no need to handle a package deactivation event. (@arcticicestudio, #49, 892e6735)

## Bug Fixes
### Theme Settings
❯ Fixed a "Undefined variable" exception when deactivating the package. This was caused by the wrongly named `@theme-setting-custom-comment-contrast` variable which must be named `@theme-setting-accessibility-custom-comment-contrast`. (@arcticicestudio, #48, c5af4e3e)

# 0.9.0
*2017-04-14*
## Features
### Theme Settings
❯ Implemented a *Accessibility* theme setting to increase the contrast for comments by percentage.  
The default value is `0` which uses the default Nord color assignment while the maximum value is `20`. (@ascarter, #46 PR #47, 935c2ae9)

<p align="center"><strong>Default Settings</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24830105/80a66cb0-1c7f-11e7-8daa-d6db62b87150.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/24879698/fc288440-1e37-11e7-933d-f2467025417d.png"/></p>

<p align="center"><strong>Increased comment contrast value of <code>15</code> (%)</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24830273/c9584dae-1c82-11e7-8868-9658993e7173.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/24830274/cfb389ca-1c82-11e7-8b3a-d63bfeea4a48.png"/></p>

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/25037295/a8a4379c-20f8-11e7-8119-d8517cb6b76d.gif"/></p>

# 0.8.0
*2017-04-12*
## Features
❯ Implemented optimized styles for [Laravel Blade](https://laravel.com/docs/blade). (@whereisjefe, #44, 861e392d)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24770330/db497b3e-1b09-11e7-958b-6f24641207e9.png"/></p>

# 0.7.0
*2017-04-01*
## Features
### Languages
❯ Implemented optimized [diff](https://en.wikipedia.org/wiki/Diff_utility)/[patch](https://en.wikipedia.org/wiki/Patch_(Unix)) styles for the [milestone backlog][milestone-package-support-backlog] community package <img src="https://avatars2.githubusercontent.com/u/529516" width=16 height=16/>  [`language-diff`](https://atom.io/packages/language-diff). (@arcticicestudio, #34, f05c8bf6)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24577810/6be899c4-16d5-11e7-8487-ce26987fb43b.png"/></p>

❯ Implemented optimized
[reStructuredText](http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html) styles for the [milestone backlog][milestone-package-support-backlog] community package <img src="https://avatars0.githubusercontent.com/u/1382556" width=16 height=16/> [`language-restructuredtext`](https://atom.io/packages/language-restructuredtext). (@adrian5, #37, 099eea88)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24577665/8b803448-16d2-11e7-96a0-abdd207aa08c.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577668/8e0bb71e-16d2-11e7-8a7d-4fd0c115f08c.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577669/8fff0184-16d2-11e7-9198-118fb9e6febd.png"/></p>

## Improvements
### Languages
❯ JavaDoc tags and their values are now colorized with `nord8`. (@arcticicestudio, #39, 72449d36)

<p align="center"><strong>JavaDoc tags</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577698/f30ea6f8-16d2-11e7-96a1-1acebfa7de39.png"/><br><strong>JavaDoc <code>{@link}</code> tag method references</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577703/12d76f1a-16d3-11e7-99dc-16a24fb35ac9.png"/></p>

❯ Adapted the massive grammar overhaul of the Atom Core package <img src="https://avatars0.githubusercontent.com/u/1089146" width=16 height=16/> [language-csharp](https://atom.io/packages/language-csharp) implemented in PR [atom/language-csharp #87](https://github.com/atom/language-csharp/pull/87). (@arcticicestudio, #38, 0420c417)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24577715/3a62c890-16d3-11e7-9fb1-01f6b2636787.png"/></p>

❯ Adjusted the color of Java packages to match `import` packages. (@arcticicestudio, #35, dc6ce037)

❯ Content inside a
```html
<![CDATA[

]]>
```
block is now colorized with the default text color `nord4` and the font style is `italic` to differ from normal text. (@arcticicestudio, #41, d9c41eba)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24577684/c359c9c4-16d2-11e7-8ccf-786b5c5e624f.png"/></p>

❯ Dimmed color of indent guides from `nord3` to `nord2` to be more unobstructive and differ from syntax elements like comments. This also matches the support for the [`indent-guide-improved`](https://atom.io/packages/indent-guide-improved) package implemented in [arcticicestudio/nord-atom-ui #64](https://github.com/arcticicestudio/nord-atom-ui/issues/64). (@smokebacon, #43, ffac4695)

<p align="center"><strong>Before</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577138/9b9addf6-16c8-11e7-9f9e-b044bf6e89b4.png"/><br><strong>After</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577141/a6c329fe-16c8-11e7-810f-ab267d8a0c96.png"/></p>

<p align="center"><strong><a href="https://github.com/arcticicestudio/nord-atom-ui/issues/64">Nord Atom UI #64</a> preview</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/24577073/8a3486da-16c7-11e7-83a7-40cceaa7c87c.gif"/></p>

## Bug Fixes
### Documentation
❯ Fixed a typo in the project description. This is a sub-task of [arcticicestudio/nord #20](https://github.com/arcticicestudio/nord/issues/20). (@arcticicestudio, #42, b67f8b62)
  > **A** arctic ... -> **An** arctic ...


# 0.6.0
*2017-01-24*

**Please note that the minimal version for this theme is now >=1.13.0 due to the Atom theme API change!**

## Improvements
❯ Migrated to the new Atom theme API.  
Starting from Atom version 1.13, the contents of `atom-text-editor` [elements are no longer encapsulated within a shadow DOM boundary](http://blog.atom.io/2016/11/14/removing-shadow-dom-boundary-from-text-editor-elements.html).  
This means the `:host` and `::shadow` pseudo-selectors should be completely removed and all syntax selectors should be prepended with `syntax--`.
To prevent breakage with existing style sheets, Atom will automatically upgrade selectors for versions less or equal to 1.12. (@arcticicestudio, #31, 42d7f7ba)

![](http://blog.atom.io/img/posts/shadow-dom.png)

# 0.5.0
*2017-01-15*
## Features
### Languages
❯ Implemented optimized <img src="http://elixir-lang.org/favicon.ico" width=16 height=16/> [Elixir](http://elixir-lang.org) styles for the [milestone backlog](https://github.com/arcticicestudio/nord-atom-syntax/issues/1) community package <img src="https://avatars0.githubusercontent.com/u/1481354" width=16 height=16/>  [`language-elixir`](https://atom.io/packages/language-elixir). (@skbolton, #33, b141369c)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/21479766/5b5ff102-cb57-11e6-8bcd-b936a31ceeab.png"/></p>

# 0.4.0
*2016-11-22*
## Features
### `language-xml`
❯ The namespace tag entity color now differs from markup/HTML tags which are also now colored correctly.  
*Character Data* blocks tags `<![CDATA[` `]]>` are now formated bold and, including the surrounded text, using the comment color. (@arcticicestudio, #29, a442b356)

<p align="center">CDATA<br><img src="https://cloud.githubusercontent.com/assets/7836623/20519301/ab2eef32-b0a2-11e6-8d67-6a1c09389ef7.png"/><br>Markup/HTML entities<br><img src="https://cloud.githubusercontent.com/assets/7836623/20519310/b48f5bca-b0a2-11e6-9aa3-24b826ae6817.png"/><br>Namespace tags<br><img src="https://cloud.githubusercontent.com/assets/7836623/20519313/bb8ac126-b0a2-11e6-8055-40b49465012e.png"/></p>

# 0.3.0
*2016-09-29*
## Improvements
### `language-c`
❯ Operator keywords are now colored explicitly as discussed in atom/language-c#151 and atom/one-dark-syntax#74 (@arcticicestudio, #34, 529f290057da332977ddcbcba3e14163e772bbc0)

# 0.2.0
*2016-09-20*
## Improvements
### CSS
❯ The hex color hash character `#` now gets colored as keyword (@arcticicestudio, #27, 323f7713333ad50b008c80a677e4abb6596faddb)

## Bugfixes
### Documentation
❯ Fixed all unrendered images in the [atom.io](https://atom.io/themes/nord-atom-syntax) package README by using the `https://raw.githubusercontent.com` domain (@arcticicestudio, #26, 6b72d3a740486d48b9a0d02f4aec3db557241462)

# 0.1.0
*2016-09-20*
**Initial APM package release version!**  
*Closes the [APM Package Release](https://github.com/arcticicestudio/nord-atom-syntax/milestone/1) milestone.*

## Features
A complete list of all implemented features can be found in the [README](https://github.com/arcticicestudio/nord-atom-syntax/blob/develop/README.md#features) section.

### Languages
A complete list of all implemented languages can be found in the milestone backlog ticket #1.

**Community**  
  - <img src="https://avatars1.githubusercontent.com/u/2313237" width=16 height=16/> [`language-babel`](https://atom.io/packages/language-babel) (@arcticicestudio, #8,4ca659bf80a99853f24552e1428dd0d9a8ca7b15)
    Includes support for
      - [ES2016](https://babeljs.io)
      - [ESNext](https://github.com/esnext/esnext)
      - <img src="https://atom.io/favicon.ico" width=16 height=16/> Atom's [Etch](https://github.com/atom/etch)
      - <img src="https://facebook.com/favicon.ico" width=16 height=16/> Facebook's <img src="https://facebook.github.io/react/favicon.ico" width=16 height=16/> [React](https://facebook.github.io/react), <img src="https://flowtype.org/static/favicon.png" width=16 height=16/> [Flow](https://flowtype.org) and <img src="http://graphql.org/img/favicon.png" width=16 height=16/> [GraphQL](http://graphql.org)
  - <img src="https://avatars3.githubusercontent.com/u/569817" width=16 height=16/>  [`language-glsl`](https://atom.io/packages/language-glsl) by [hughsk](https://github.com/hughsk) (@arcticicestudio, #24, bc8268dc53864ad1a259a5a3234b6a935bf41100)
  - <img src="https://avatars0.githubusercontent.com/u/6979737" width=16 height=16/>  [`language-haml`](https://atom.io/packages/language-haml) by [ezekg](https://github.com/ezekg) (@arcticicestudio, #22, 0651543f7a2d17f362079d630656469f382db4c8)
  - <img src="https://avatars3.githubusercontent.com/u/12533767" width=16 height=16/>  [`language-haskell`](https://atom.io/packages/language-haskell) by [atom-haskell](https://github.com/atom-haskell) (@arcticicestudio, #21, 6ce40f2aeba0521f1842a1ab4b40aa02694e2a02)
  - <img src="https://avatars2.githubusercontent.com/u/743164" width=16 height=16/> [`language-julia`](https://atom.io/packages/language-julia) by [JuliaLang](https://github.com/JuliaLang) (@arcticicestudio, #23, 61eec2ca99fa5018d1f9f67980bb24a8e114ba1d)

<img src="https://avatars0.githubusercontent.com/u/1089146" width=16 height=16/> **Core**
  - [`language-c`](https://atom.io/packages/language-c) (@arcticicestudio, #14, 7568bfbf68d1ea6ad06db8389f1f15756718e2b4)
  - [`language-clojure`](https://atom.io/packages/language-clojure) (@arcticicestudio, #20, 42536fdb3181791ed020166ad60c9a607c90e942)
  - [`language-coffee-script`](https://atom.io/packages/language-coffee-script) (@arcticicestudio, #18, 479df6a9be8e5e56c09e5b32a5a7f3374d34cc97)
  - [`language-csharp`](https://atom.io/packages/language-csharp) (@arcticicestudio, #19, e532cf84b4a73c9e00e27ad1b948957c8ff8b438)
  - [`language-css`](https://atom.io/packages/language-css) (@arcticicestudio, #5, a490f00c85b79f807bc26190fe45654fda34f358)
  - [`language-gfm`](https://atom.io/packages/language-gfm) (@arcticicestudio, #6, 0ed29546b5b69059b3f488bee1a13b54d1c129ec)
  - [`language-go`](https://atom.io/packages/language-go) (@arcticicestudio, #9, 8e5c242a544d919557a8fd4e71e484e35864d674)
  - [`language-java`](https://atom.io/packages/language-java) (@arcticicestudio, #7, 513ec446bb0a21c32310bcc4e3874580ecfd441a)
    - Includes the `.source.java-properties` CSS class scope
  - [`language-javascript`](https://atom.io/packages/language-javascript) (@arcticicestudio, #8, 4ca659bf80a99853f24552e1428dd0d9a8ca7b15)
  - [`language-json`](https://atom.io/packages/language-json) (@arcticicestudio, #12, 0fe803a123326f883458ffc8e6e1c5582dc7db34)
  - [`language-less`](https://atom.io/packages/language-less) (@arcticicestudio, #5 / #13, a490f00c85b79f807bc26190fe45654fda34f358 / 3fa1c27c28d056d8ca7babd95b2c2b5fea8045e3)
  - [`language-php`](https://atom.io/packages/language-php) (@arcticicestudio, #17, 5d7d3565944b97b4a824df1f7bac3102f23b31db)
  - [`language-python`](https://atom.io/packages/language-python) (@arcticicestudio, #11, 6b8f87c0f3ce800cada4bf551d59e0ffed834596)
  - [`language-ruby`](https://atom.io/packages/language-ruby) (@arcticicestudio, #10, 972b90c4578c0bf91a3ed1a9de0554f57920191b)
  - [`language-sass`](https://atom.io/packages/language-sass) (@arcticicestudio, #5, a490f00c85b79f807bc26190fe45654fda34f358)
  - [`language-scala`](https://atom.io/packages/language-scala) (@arcticicestudio, #7, 513ec446bb0a21c32310bcc4e3874580ecfd441a)
  - [`language-shellscript`](https://atom.io/packages/language-shellscript) (@arcticicestudio, #16, badfcc2b182211ef21f3e25d9ffd8628e63deb1f)
  - [`language-yaml`](https://atom.io/packages/language-yaml) (@arcticicestudio, #15, 883ab296a249e6b9b93659724b5d2f2a37768854)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-atom-syntax/develop/assets/scrot-top.png"/></p>

[milestone-package-support-backlog]: https://github.com/arcticicestudio/nord-atom-syntax/issues/1

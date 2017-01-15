<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-atom-syntax/develop/assets/nord-atom-syntax-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-atom-syntax/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-atom-syntax.svg"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-blue.svg"/></a> <img src="https://atom.io/favicon.ico" width=24 height=24/> <a href="https://atom.io/themes/nord-atom-syntax"><img src="https://img.shields.io/apm/v/nord-atom-syntax.svg"/></a> <a href="https://atom.io/themes/nord-atom-syntax"><img src="https://img.shields.io/apm/dm/nord-atom-syntax.svg"/></a></p>

---

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

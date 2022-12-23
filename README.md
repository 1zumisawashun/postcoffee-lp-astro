# postcoffee-lp-astro

POST COFFEE の LP クローンのリポジトリです。

## Overview

- 2022 年 12 月

勉強会で Astro の紹介をされたので素振りのため作成。
2021 年 6 月入社時に POST COFFEE の LP クローンを作成していたので書き心地やパフォーマンスを比較するために作成。
クローン作成のためデプロイはしない。
以下本家 URL。

https://postcoffee.co/

結論として Astro が高パフォーマンス出すことがわかった。
React + Astro も作成したがパフォーマンスはイマイチの結果となった（CSS in JS が原因？）
2022 年 8 月にオープンしたばっかりなので今後の動向に注目する。

## 環境

- astro ^1.6.15
- react ^18.2.0
- styled-components ^5.3.6
- swiper ^8.4.5

## Installation

- clone

```bash
$ git clone git@github.com:1zumisawashun/postcoffee-lp-astro.git
$ cd postcoffee-lp-astro
```

- install

```bash
$ npm install
```

- ローカル開発用 URL を開き動作確認をする

```bash
$ npm run dev
```

http://localhost:3000/

- 上記の手順で失敗する場合 [Troubleshoot](#Troubleshoot)を確認してください

## How to

- なし

## Troubleshoot

- なし

## 効果測定

クローム拡張機能によるパフォーマンスの偏りを考慮して全てシークレットモードで測定する。

- 比較先のリポジトリ

https://github.com/1zumisawashun/postcoffee-lp-vue

### Astro

https://googlechrome.github.io/lighthouse/viewer/?gist=fc2cf918c1d531f297250ccd64c788d6

![image](https://user-images.githubusercontent.com/65071534/208611700-93a5bb0a-79f0-41bb-8c04-05ad6a1caabe.png)

### Astro（React）

https://googlechrome.github.io/lighthouse/viewer/?gist=dfc4d5988297f5777a673d0135bd7bd4

![image](https://user-images.githubusercontent.com/65071534/209253726-93bda467-2a84-427f-8896-602fe6c9266e.png)

### Vue.js

https://googlechrome.github.io/lighthouse/viewer/?gist=ec007bf7fa5fc35e03ba5ff4605277a0

![image](https://user-images.githubusercontent.com/65071534/209253846-2ed19040-94dd-4d01-8ef1-753bce263c83.png)

## その他ドキュメント

# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

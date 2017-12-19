# README

## アプリ概要
RailsとReactで睡眠時の夢を記録するアプリを作りました。
https://yumelog.herokuapp.com/


## 内容
- 夢の投稿、編集、削除
- 夢に対するコメントの投稿、編集、削除
- 夢によく現れる言葉をもとにしたワードクラウド（夢の内容をMecabで形態素解析して、D3.jsでワードクラウドを描画）を作成したが、Herokuでmecabをうまく動かせず本番では動きません（おそらくnattoからmecabが見つけれてない？）

## 技術
### バックエンド
- Rails
  - active model serializer
  - devise
  - natto
- Postgresql
- Mecab

### フロントエンド
- React, ES6
- Redux
  - redux-thunk
- [Material UI](http://www.material-ui.com/#/)
- scss
- webpack
- D3.js

## 工夫点
- フルSPAではなく、複数エントリーポイントに分けて不要なJSを一気に読み込まないようにした。
- APIはincludesでeager loadしてN+1を回避。
- 細かなデザインスタイルなどを開発するのをできるだけ我慢して、抽象に徹したことで、後で仕様変更がしやすいように開発した。
- フロントエンドの通信部分などはモジュール化して、DRYで汎用性と柔軟性の高さを意識した。

## 今後の課題、改善、やりたいこと
- infinite scrollがオレオレ実装でやったからうまく動いてないのを修正。
- テストの練習としてenzyme、jestとか使ってみる。
- RailsとReactでパフォーマンス含め、ベストUXな形を探る（今回はwebpackでビルドしたJSをsprocketsに乗せた）
- Mecabで夢の内容を形態素解析して、D3.jsで可視化する。
- Elastic Searchで夢のシンボルや細かい内容の検索をかけれるようにする。

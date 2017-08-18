# React Todo Example

## 主要ライブラリ

- react
- redux
- redux-saga

## セットアップ

```
npm install
npm start
```

open [http://localhost:8080](http://localhost:8080)


## redux-saga 導入のメリット・デメリット

### メリット

- 非同期処理まわりがContainerから切り離され, Containerがシンプルになる
- 複雑な非同期処理も、Promiseのみより簡単に扱える.


### デメリット

- redux-sagaの学習コストはかかるが
    - しかし, Promiseで特殊な順序の非同期処理を扱うにはなどをやっているより遥かに楽だと思われる.
    
- generator構文を使えるようにする必要がある. (stage3のため仕様変更はほぼ無いと思われる)


## TODO

次はImmutable.jsを導入してみます。

[react-redux-saga-immutable-express-todo](https://github.com/suzuki-terminal/react-redux-saga-immutable-express-todo)
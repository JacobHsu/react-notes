# Create React App（CRA）

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`npx create-react-app react-scripts-webpack`

## note

[如何扩展 Create React App 的 Webpack 配置](https://juejin.im/post/5a5d5b815188257327399962) 项目 eject, 使用 react-app-rewired

`yarn eject`

build `config` `scripts`

package.json

```js
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js"
  },
```

```js
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Deploy

`yarn add gh-pages -D`

package.json

```js
"homepage": "https://jacobhsu.github.io/react-scripts-webpack"

"scripts": {
  //...
  "predeploy": "yarn build",
  "deploy": "gh-pages -d build"
}
```

## package.json

[Using environment variables to support CSS Grid prefixes in Create React App](https://github.com/postcss/autoprefixer#environment-variables)

```js
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version",
    "last 1 ie version"
  ]
}
```

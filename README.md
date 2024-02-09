# react-notes

codesandbox url `react.new`  

`npm init react-app firstapp`

[Adding TypeScript](https://create-react-app.dev/docs/adding-typescript/)

```js
npx create-react-app my-app --template typescript
or
yarn create react-app my-app --template typescript
```

[Using Create React App](https://react-redux.js.org/introduction/getting-started)

```js
# Redux + Plain JS template
npx create-react-app my-app --template redux

# Redux + TypeScript template
npx create-react-app my-app --template redux-typescript
```

[Importing a Component](https://pjchender.dev/react/note-create-react-app/)

jsconfig.json

```js
// ./jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

[Docusaurus](https://docusaurus.io/zh-CN/) · Easy to Maintain Open Source Documentation
`$ npx docusaurus-init`

## cra

如果想要無 eject 重寫 CRA 配置

使用 [craco](https://github.com/dilanx/craco) 覆蓋配置  (
Material-UI AntDesign4 官方推薦)
使用 react-app-rewired + customize-cra 組合覆蓋配置




[play.tailwindcss](https://play.tailwindcss.com/M410phgTM3)

[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)


## Tailwind and mui

[Tailwind and Material usage in next.js](https://webkul.com/blog/tailwind-css-material-ui-with-next-js/)

Tailwind 和 mui 可能衝突 把Tailwind 重要設高 `important: true`

tailwind.config
```js
module.exports = {
  ..
  important: true,
  // important: '#__next',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
```

Q: VSCode 噴 `Unknown at rule @tailwind` 解決方式  
A: VSCode 安裝 PostCSS Language Support 套件


bug

`yarn add -D @babel/plugin-proposal-private-property-in-object`

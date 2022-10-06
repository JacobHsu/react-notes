[ResetCSS](https://github.com/pancakeswap/pancake-toolkit/blob/master/packages/pancake-uikit/src/ResetCSS.tsx)  

## Icons

[react-icons](https://react-icons.github.io/react-icons/)  
v4.mui [material-icons](https://v4.mui.com/zh/components/material-icons/)  
[lineicons](https://lineicons.com/)

## animation 

[GSAP](https://greensock.com/gsap/) - GreenSock

## Mui

[installation](https://mui.com/zh/material-ui/getting-started/installation/)

yarn 安装異常 用 npm

```
// 使用 npm 安装
npm install @mui/material @emotion/react @emotion/styled

// 使用 yarn 安装
yarn add @mui/material @emotion/react @emotion/styled
```

```js
// 使用 npm 安装
npm install @mui/icons-material

// 使用 yarn 安装
yarn add @mui/icons-material

```

## No Scrollbar

index.css

```css
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```

public\index.html

```html
  <body class="no-scrollbar">
    <noscript>You need to enable JavaScript to run this app.</noscript>
```



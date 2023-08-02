[Module not found: Can't resolve 'fs' ](https://github.com/vercel/next.js/discussions/39549)

## Tailwind and mui

[Tailwind and Material usage in next.js](https://webkul.com/blog/tailwind-css-material-ui-with-next-js/)

Tailwind 和 mui 可能衝突 把Tailwind 重要設高 `important: true`

```js
module.exports = {
  ..
  important: true,
  // important: '#__next',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
```

## Azure

static-web-apps/[deploy-nextjs-hybrid](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid)

next.config.js
```
const nextConfig = {
  ...
  output:"standalone",
}
```

**reducer** Just like array.reduce(), reducers accumlate ('reduce') actions over time  

[ahooks](https://ahooks.js.org/zh-CN/) 阿里開源的 React Hooks 倉庫，提供了非常多實用的 Hook。


> React Hook "useUpdatePage" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function.

```js
import { useUpdatePage } from 'state/page/hooks'

export const Tabs = () => {
  const updatePage = useUpdatePage()
    return (
          <BottomNavigation
            onChange={(event, newValue) => {
              updatePage(newValue)

        }}
```


`useCallback` 和 `useMemo` 僅僅在後續渲染（也就是重渲染）中起作用，[在初始渲染中它們反而是有害的](https://juejin.cn/post/7251802404877893689?utm_source=gold_browser_extension)

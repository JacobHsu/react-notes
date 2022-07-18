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

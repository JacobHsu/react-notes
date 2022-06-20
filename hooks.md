> React Hook "useUpdatePage" cannot be called inside a callback. React Hooks must be called in a React function component or a custom React Hook function.

```js
import { useUpdatePage } from 'state/page/hooks'

export const Tabs = () => {
  const updatePage = useUpdatePage()
    return (
          <BottomNavigation
            onChange={(event, newValue) => {
              useUpdatePage(newValue)

        }}
```

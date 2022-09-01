layouts\Layout.js

```js
import { Outlet } from 'react-router-dom';
export default function LogoOnlyLayout() {
  return (
    <Box>
      <Bar />
      <Outlet />
    </Box>
  );
}
```

state - [頁面當前的state/route](https://www.reactnavigation.org.cn/docs/screen-navigation-prop)

```js
    <Card sx={{ maxWidth: 200, m:1 }} onClick={() => {
      navigate('/detail', { state:{item:item} });
    }}>
```

```js
import { useLocation } from "react-router";

    const { state } = useLocation();
    {state.item.title}
```


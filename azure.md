Q: 複製URL另貼404

## Azure 

[Single Page Applications often rely on client-side routing.](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration#example-configuration-file)

staticwebapp.config.json

```js
{
    "navigationFallback": {
      "rewrite": "/index.html"
    }
  }
```
React SPA部署到Azure靜態 Web 應用程式的URL問題  
因為託管的伺服器他是用資料夾找.html的概念下去找資源，所以SPA他會無法判斷。


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


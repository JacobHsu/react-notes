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

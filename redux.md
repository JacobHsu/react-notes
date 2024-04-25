# redux

[getting-started](https://react-redux.js.org/introduction/getting-started)  

`yarn add react-redux`  

index.js

```js
import { Provider } from 'react-redux'
import store from './state/store'
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);
```

state/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from './app';
const persistedReducer = {
  app: appReducer,
};

export default configureStore({
  reducer: persistedReducer,
});
```

state/app/index.js

```js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isMenuDialog: false,
}
export const appSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setMenuDialog: (state, action) => {
      state.isMenuDialog = action.payload;
    },
  },
});
// Actions
export const {
  setMenuDialog,
} = appSlice.actions;

export default appSlice.reducer;
```

state/app/hooks.js

```js
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setMenuDialog,
} from ".";
export const useSetMenuDialog = () => {
  const dispatch = useDispatch();
  return useCallback((val) => dispatch(setMenuDialog(val)), [dispatch]);
};
```

components/MenuTabsDialog.js

```js
export const MenuTabsDialog = ({
  const setMenuDialog = useSetMenuDialog();

  useEffect(() => {
      setMenuDialog(true);

```

App.js

```js
  const isMenuDialog = useSelector((state) => state.app.isMenuDialog);

 <MenuTabsDialog {...{ openDialog: isMenuDialog, setOpenDialog }} />
```

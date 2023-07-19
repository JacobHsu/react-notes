[React.Fragment](https://legacy.reactjs.org/docs/fragments.html)


```js
function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>Some content here.</p>
    </>
  );
}
```

`React.Fragment` 是 React 庫中的一個特殊元件，通常簡稱為 `Fragment`。它是為了解決在 React 中，當你需要返回多個子元件或 HTML 元素時所遇到的一些問題。

在 React 中，每個元件只能返回一個根元素。這意味著，如果你在一個元件中需要回傳多個相鄰的子元件，通常你需要將它們包裝在一個外層的 div 或其他元素中。例如：

```jsx
function MyComponent() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Some content here.</p>
    </div>
  );
}
```

上述的 `MyComponent` 中包含了一個外層的 div，只是為了容納 `<h1>` 和 `<p>` 元素。這樣做有時候可能會在樣式上或 HTML 結構上造成不必要的嵌套，導致程式碼不夠乾淨。

為了解決這個問題，React 提供了 `React.Fragment`，讓你可以返回多個子元件或 HTML 元素，而不需要額外包裝在一個外層元素中。使用 `React.Fragment` 後，上述的程式碼可以這樣寫：

```jsx
import React from 'react';

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <p>Some content here.</p>
    </React.Fragment>
  );
}
```

或使用簡短的語法：

```jsx
import React from 'react';

function MyComponent() {
  return (
    <>
      <h1>Hello</h1>
      <p>Some content here.</p>
    </>
  );
}
```

這樣就不需要再多餘的外層 div 或其他元素，使程式碼更加乾淨和簡潔。`React.Fragment` 不會產生額外的 DOM 節點，因此對於性能也是有所幫助的。

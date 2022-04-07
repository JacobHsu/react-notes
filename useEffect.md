useEffect

```js
  const obj = {} //物件
  useEffect(() => {
    console.log('useEffect cb')
    memoFunc1()
  }, [obj]) //物件本身值的判斷 每次宣告都不同 重複渲染
```

[useMemo](https://hiskio.com/courses/629/lectures/134472)

```ts
import React, { useEffect, useState, useMemo, useCallback } from "react"

type Props = {}

const App: React.FC = () => {

  // TODO del
  console.log('render')

  const [value, setValue] = useState(false)

  const aa = 1000

  const memoObj = useMemo(() => {
    return () => {}
  }, [])

  // useCallback 想記憶的與useMemo一樣 差在輸入是function 非物件或陣列
  const memoFunc1 = useCallback(function() {
    // TODO del
    console.log('here')
  }, [])

  // 淺比較
  useEffect(() => {
    console.log('useEffect cb')
    memoFunc1()
  }, [memoFunc1])

  return <>
    <h1>APP</h1>
    <button onClick={() => {setValue(!value)}}>
      重新render
    </button>
  </>
}

export default App
```

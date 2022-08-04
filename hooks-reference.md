##  [useRef / useState 產生變數的適用情境](https://dotblogs.com.tw/wasichris/2020/03/26/181546)

在使用 Function Component 時，直覺性都會使用 useState 來保存內部狀態，若狀態使用於 useEffect 中需被依賴 (資料變動才會更新執行)，此時可以想看看是不是該讓 useRef 上場了。

useRef 建立出來的變數在被改變時並不會觸發 re-render，也就表示當數值變化後並無法即時呈現在畫面中，因此簡單的判斷依據如下：

`是否牽涉畫面顯示  ?  useState  :  useRef`

舉個實際的例子來說明，在比較嚴謹的業務申請流程中一定會有 OTP 單次性密碼出現，此時必定標配一個倒數秒數在畫面中，表示驗證碼效期正在流逝中，而換匯的比率也存在著效期，因此倒數功能其實還滿廣泛的在應用

需要特別注意 setInterval 實體的清除時機，避免不小心 re-render 造成多個實體同時運作的窘境，所以 Hook 上場

思考程式碼中分別使用 useState 及 useRef 建立變數的考量點


```js
function useTimer (callback, delay) {
  // 由於 remainSecond 需要顯示在畫面中，因此使用 useState 處理
  const [remainSecond, setRemainSecond] = useState(0)
  
  // 由於 callback 僅在時間到期時被叫用，不希望 callback 變動時會造成計數器的重新建立，因此不能在產生計數器的 useEffect 中被直接使用依賴，故透過 useRef 建立 savedCallback 來存放
  const savedCallback = useRef()
  
  //  delay 數值需要在組件中不斷遞減，所以需要先被以 savedDelay 暫存起來才能修改，此時若使用 useState 建立狀態，只要在建立計數器的 useEffect 中操作遞減行為時會被依賴，只要遞減就重新建立一個新的計數器，這不是我們要的結果，因此使用 useRef 來建立 savedDelay 變數，這樣就可於建立計數器的 useEffect 中使用 savedDelay.current 遞減秒數且不被依賴
  const savedDelay = useRef()

  // 保存到期回呼方法
  useEffect(() => {
    savedCallback.current = callback
  }, [callback]) // 並利用依賴 callback 的 useEffect 方法更新 callback 方法，這樣就可於建立計數器的 useEffect 中使用 savedCallback.current() 且不被依賴

  // 建立計數器並執行倒數
  useEffect(() => {
    // 刷新延遲秒數
    savedDelay.current = delay
    setRemainSecond(delay)

    // 每秒執行
    const tick = (id) => {
      // 計算剩餘時間
      if (savedDelay.current > 0) {
        savedDelay.current -= 1
      } else {
        savedDelay.current = 0
      }

      // 更新輸出的剩餘秒數
      setRemainSecond(savedDelay.current)

      // 停止條件
      if (savedDelay.current <= 0) {
        savedCallback.current()
        clearInterval(id)
      }
    }

    if (delay !== null) {
      // 產生計數器
      const id = setInterval(() => tick(id), 1000)

      // 清除計數器 (cleanup)
      return () => clearInterval(id)
    }
  }, [delay])

  // 輸出剩餘秒數
  return remainSecond
}
```

```js
import React, { useState, useCallback } from 'react'
import useTimer from '@src/utils/hooks/useTimer'

const Practice = () => {
  const [delay, setDelay] = useState(10)

  // useCallback 會回傳該 callback 的 memoized 版本，它僅在依賴改變時才會更新
  const handleTimeup = useCallback(() => console.log('time up!!'), [])

  // 使用 useTimer 倒數  使用 timer 功能時，只要加上 useTimer Hook 就搞定
  const remainSecond = useTimer(handleTimeup, delay)

  return (

    <>
      請輸入倒數秒數
      <input
        value={delay} type='number'
        onChange={e => setDelay(Number(e.target.value) || 0)}
      />

      {/* 顯示剩餘秒數 */}
      <div className='tp-count-down-timer'>
        <div className='tp-count-down-timer__time'>
          {new Date(remainSecond * 1000).toISOString().substr(11, 8)}
        </div>
      </div>
    </>

  )
}

export default Practice
```

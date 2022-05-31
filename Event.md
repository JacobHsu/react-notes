React 的onclick事件在渲染後自動執行問題

onClick事件如果包含() ，就會變成執行函數，頁面加載後會自動執行， 從而導致這個結果

```js
render() {
    return (
      <li onClick={() => { this.clickShow() }}>
        <span>{this.props.list.title}：</span>
      </li>
    )
  }
  clickShow = () => {
    alert(1)
  }
```

如果事件函数不需要参数，那么去除() 即可；
如果事件函数需要参数，那么使用箭头函数包括即可；

```js
render() {
    return (
      <li onClick={() => { this.clickShow(value) }}>
        <span>{this.props.list.title}：</span>
      </li>
    )
  }
  clickShow = (value) => {
    alert(value)
  }
```

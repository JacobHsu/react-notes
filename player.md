# load swf


[ruffle](https://ruffle.rs/)  
[Using Ruffle](https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web)  
ruffle-core / RufflePlayer / [Class RufflePlayer](https://ruffle.rs/js-docs/master/classes/RufflePlayer.html)  

```
The `loadeddata` event is an event which is triggered when the movie is fully loaded.
```

index.html

```
 <script src="wasm/ruffle.js"></script>
```

punlic/wasm/ruffle.js


[Interface DataLoadOptions](https://ruffle.rs/js-docs/master/interfaces/DataLoadOptions.html)  
[contextMenu](https://ruffle.rs/js-docs/master/enums/ContextMenu.html)  
````
      window.RufflePlayer.config = {
        splashScreen: false,
        preferredRenderer: "canvas",
        backgroundColor: "#6F78A3",
        contextMenu: "off",
      };
````

# swf 溝通 html


```
  <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
  <body>
    <div id="ruffle" class="gameloc"></div>
    <div id="displayText"></div>
    <script type="text/javascript">
      function displayText(text) {
        document.getElementById("displayText").innerHTML = text;
      }

      let ruffle = window.RufflePlayer.newest();
      let player = ruffle.createPlayer();
      document.getElementById("ruffle").appendChild(player);

      player.addEventListener("loadedmetadata", () => {
        console.info(player.metadata.isActionScript3);
        console.info(player.metadata);
      });
      player.load({ url: "test_as2_hello.swf", allowScriptAccess: true });
    </script>
  </body>
```

react
```js
  window.displayText = (text) => {
    fetchWelcomeVoice();
  };
```

flash AS2.0

```js
// 定义要传递的文本
var text:String = "Hello, world!";

// 使用 getURL 函数调用 JavaScript 函数，并将文本作为参数传递
getURL("javascript:displayText('" + text + "');");

```



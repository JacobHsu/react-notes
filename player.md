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

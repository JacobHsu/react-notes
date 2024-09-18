[如何处理 Node 报错 Error: error:0308010c:digital envelope routines::unsupported](https://www.freecodecamp.org/chinese/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/)

> Error: error:0308010C:digital envelope routines::unsupported

[如何升级到 React 18](https://zh-hans.react.dev/blog/2022/03/08/react-18-upgrade-guide)

升級 react-scripts 或 Webpack
如果你使用的是 Create React App 或 Webpack，首先應該確保它們是最新版本，因為新版本通常會解決與 Node.js 的兼容性問題。

```js
yarn add react react-dom
yarn add react-scripts
```

```
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "^5.0.1",
```

> Module not found: Error: Can't resolve 'buffer'

[How to Polyfill node core modules in webpack 5](https://github.com/JacobHsu/hbs-azure-p/issues/3)  

> Error: error:0308010C:digital envelope routines::unsupported

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`

```
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

`touch ~/.bash_profile`  
`open ~/.bash_profile `  

資料根目錄可以找到 .bash_profile，沒看到的話代表未開啟隱藏檔案顯示，可以按下 `Command + Shift+ .` 顯示。

在配置文件中加入以下內容：

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
```

儲存並關閉配置文件。

重新啟動你的終端機或者執行以下命令來更新你的 shell 配置。

`source ~/.bash_profile`  

再次嘗試執行 nvm 命令，

`nvm`

`nvm install 16`  
`nvm use 16`  
`node -v`  

[node version](https://nodejs.org/en/about/previous-releases)

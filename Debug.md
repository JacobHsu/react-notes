無法識別 檢查 Provider 
eg [fix: UserAuthContextProvider App.js](https://github.com/JacobHsu/react-mui-auth-phone/commit/30f34f4a40966744c9b60370b934a42b3c5167d5)

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

`nvm install 18`  
`nvm use 18`  
`node -v`  

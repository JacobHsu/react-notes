# node 

## nvm 

[Install & Update Script](https://github.com/nvm-sh/nvm#troubleshooting-on-macos)
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash`

`Command + Shift+ .`  

`touch ~/..zshrc`  

`nvm ls`  
`nvm install 16`  

[安裝 nvm 環境，Node.js 開發者必學（Windows、Mac 均適用）](https://www.casper.tw/development/2022/01/10/install-nvm/)  
[Mac OS X 安裝 nvm](https://israynotarray.com/nodejs/20200124/3404456418/)  

## 如何在Mac顯示隱藏檔案？

「Shift」+「Command」+「.」 

## 剪下貼上

首先將要剪下的檔案選取起來，再按「command+c」  
接著到要貼上的目錄按「option+command+v」

## NPM

error errno EEXIST

錯誤 EACCES 通常表示正在試圖進行一個需要權限的操作，但是當前用戶沒有這個權限

`sudo chown -R 502:20 "/Users/jacobhsu/.npm"`

將 /Users/jacobhsu/.npm 及其下的所有檔案和子目錄的擁有者更改為指定的用戶和群組，以解決擁有者權限的問題。
502:20: 是指定的用戶和群組 可以根據實際需要更改這些數字，或者使用用戶名和群組名。

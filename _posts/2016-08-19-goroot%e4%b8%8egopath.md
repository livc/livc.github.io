---
title: GOROOT与GOPATH
layout: post
permalink: /165
categories:
  - Go
tags:
  - GOPATH
---
Go中只有两个路径：GOROOT与GOPATH。

## GOROOT

GOROOT是go的安装路径，默认是在 /usr/local/go 。

在/usr/local/go/src 内可以看到常用的一些包比如os、strings，这些都是自带的，可以直接import导入。

## GOPATH
GOPATH可以理解为工作目录，如果想导入自己的包，就要先下载到GOPATH下。

go允许有多个 GOPATH ，但是不能和 GOROOT 一样。$GOPATH内有三个子目录：
 
 - src： 存放源码（比如.go .c .h 等）
 - pkg： 编译后生成的文件（比如.a）
 - bin： 编译后生成的可执行文件（为了方便可以把这个目录添加到 $PATH 变量中）

## 配置GOPATH
我把GOPATH的路径设置为~/go

```
cd ~
mkdir go
vim ~/.zshrc  （如果是bash就是.bashrc)  

最后面添加
export GOPATH=~/go  

source ~/.zshrc  (或 . ~/.zshrc) 重新加载.zshrc

go get github.com/tucnak/telebot （从github上下载代码并编译安装）
这时就可以直接导入下载的包了：

import  "github.com/tucnak/telebot" 
```
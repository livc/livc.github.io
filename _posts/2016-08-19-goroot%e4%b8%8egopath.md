---
title: GOROOT与GOPATH
layout: post
permalink: /165
categories:
  - Go
tags:
  - GOPATH
---
<div id="wmd-preview-section-3758" class="wmd-preview-section preview-content">
  <p>
    Go中只有两个路径：GOROOT与GOPATH。
  </p>
</div>

<div id="wmd-preview-section-3015" class="wmd-preview-section preview-content">
  <h2 id="goroot">
    GOROOT
  </h2>
  
  <p>
    GOROOT是go的安装路径，默认是在 /usr/local/go 。
  </p>
  
  <p>
    在/usr/local/go/src 内可以看到常用的一些包比如os、strings，这些都是自带的，可以直接import导入。
  </p>
</div>

<div id="wmd-preview-section-3386" class="wmd-preview-section preview-content">
  <h2 id="gopath">
    GOPATH
  </h2>
  
  <p>
    GOPATH可以理解为工作目录，如果想导入自己的包，就要先下载到GOPATH下。
  </p>
  
  <p>
    go允许有多个 GOPATH ，但是不能和 GOROOT 一样。<em>$GOPATH</em>内有三个子目录：
  </p>
  
  <ul>
    <li>
      src： 存放源码（比如.go .c .h 等）
    </li>
    <li>
      pkg： 编译后生成的文件（比如.a）
    </li>
    <li>
      bin： 编译后生成的可执行文件（为了方便可以把这个目录添加到 <em>$PATH</em> 变量中）
    </li>
  </ul>
</div>

<div id="wmd-preview-section-3769" class="wmd-preview-section preview-content">
  <h2 id="配置gopath">
    配置GOPATH
  </h2>
  
  <p>
    我把GOPATH的路径设置为~/go.
  </p>
</div>

<div id="wmd-preview-section-5479" class="wmd-preview-section preview-content">
  <pre class="prettyprint"><code class="language-bash hljs ">&lt;span class="hljs-built_in">cd&lt;/span> ~
mkdir go
vim ~/.zshrc  （如果是bash就是.bashrc)  

最后面添加
&lt;span class="hljs-keyword">export&lt;/span> GOPATH=~/go  

&lt;span class="hljs-built_in">source&lt;/span> ~/.zshrc  (或 . ~/.zshrc) 重新加载.zshrc

go get github.com/tucnak/telebot （从github上下载代码并编译安装）
</code></pre>
  
  <p>
    这时就可以直接导入下载的包了：
  </p>
</div>

<div id="wmd-preview-section-5480" class="wmd-preview-section preview-content">
  <pre class="prettyprint"><code class="language-go hljs ">&lt;span class="hljs-keyword">import&lt;/span>  &lt;span class="hljs-string">"github.com/tucnak/telebot"&lt;/span> </code></pre>
</div>
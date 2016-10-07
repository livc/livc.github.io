---
title: Vim中添加Go的语法高亮
layout: post
permalink: /172
categories:
  - Go
tags:
  - vim
---
在一些linux发行版里直接（apt-get、yum）安装go时会在vim中发现语法不会高亮，因为没有 `/usr/local/go/misc/vim/`这个目录，可以通过以下方法解决：

  1. 下载 [go.vim](https://github.com/fatih/vim-go/blob/master/syntax/go.vim) 放到 `~/.vim/syntax`内
  2. 在`~/.vimrc`内添加下面两行： <pre class="prettyprint"><code class=" hljs livecodeserver">filetype &lt;span class="hljs-command">&lt;span class="hljs-keyword">on&lt;/span>&lt;/span>
au BufRead,BufNewFile *.go &lt;span class="hljs-built_in">set&lt;/span> filetype=go</code></pre>
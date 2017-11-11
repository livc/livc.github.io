---
title: linux下升级python
layout: post
permalink: /blog/143
categories:
  - Linux
---
之所以说升级python是因为系统中会有自带的python，不过版本很低，在终端中输入python可以查看，我的是2.7。

获取root：

<pre class="brush: cpp; title: ; notranslate" title="">sudo su</pre>

利用linux自带下载工具wget下载：

<pre class="brush: cpp; title: ; notranslate" title="">wget http://www.python.org/ftp/python/3.5.1/Python-3.5.1.tgz</pre>

解压缩

<pre class="brush: cpp; title: ; notranslate" title="">tar -xzvf Python-3.5.1.tgz</pre>

进入解压缩后的文件夹

<pre class="brush: cpp; title: ; notranslate" title="">cd Python-3.5.1</pre>

在编译前先在/usr/local建一个文件夹python3（作为python的安装路径，以免覆盖老的版本）

<pre class="brush: cpp; title: ; notranslate" title="">mkdir /usr/local/python3</pre>

开始编译安装

<pre class="brush: cpp; title: ; notranslate" title="">./configure --prefix=/usr/local/python3
make
make install</pre>

此时没有覆盖老版本，再将原来/usr/bin/python链接改为别的名字

<pre class="brush: cpp; title: ; notranslate" title="">mv /usr/bin/python /usr/bin/python_old</pre>

再建立新版本python的链接

<pre class="brush: cpp; title: ; notranslate" title="">ln -s /usr/local/python3/bin/python3 /usr/bin/python</pre>

这个时候输入

<pre class="brush: cpp; title: ; notranslate" title="">python</pre>

就会显示出python的新版本信息

<pre class="brush: cpp; title: ; notranslate" title="">Python 3.5.1 (default, Apr 16 2016, 08:23:02) 
[GCC 5.2.1 20151010] on linux
Type "help", "copyright", "credits" or "license" for more information.
</pre>

如果不建立新安装路径python3，而是直接默认安装，则安装后的新python应该会覆盖linux下自带的老版本，也有可能不覆盖，具体看安装过程了，当然如果还想保留原来的版本，那么这种方法最好不过了。

---
title: Ubuntu 14.04（64位）+Python 3.4.3配置TensorFlow（使用CPU）
layout: post
permalink: /blog/146
categories:
  - 机器学习
tags:
  - tensorflow
---
配置了两天，终于配好了。

一开始用的最新版ubuntu16，配到最后说tensorflow不支持当前平台，换了ubunt14。

github上看到有人用的python3.5出错换成3.4就好了，我干脆直接用3.4来配置。

（**4.26 update**：一定不能用3.5，有人又遇到了3.5无法安装的问题，看下面tensorflow的安装路径有个cp34-cp34m，推测目前的tensorflow最高兼容到3.4）

极客学院那个教程早就过时了，也不更新，看官方的比较好，但也有模棱两可的地方，所以很多地方都是自己慢慢摸索。

首先在ubuntu上配置python 3.4.3，参考这篇文章，把版本号换一下就行：<a href="http://livc95.cn/index.php/archives/806" target="_blank">linux下升级python</a>

安装pip

<pre class="brush: cpp; title: ; notranslate" title="">sudo apt-get install python3-pip python3-dev
</pre>

安装tensorflow

<pre class="brush: cpp; title: ; notranslate" title="">sudo pip3 install --upgrade https://storage.googleapis.com/tensorflow/linux/cpu/tensorflow-0.8.0-cp34-cp34m-linux_x86_64.whl
</pre>

然后在终端内输入**python3**进入编辑

输入测试代码：

<pre class="brush: python; title: ; notranslate" title="">&gt;&gt;&gt; import tensorflow as tf
&gt;&gt;&gt; hello = tf.constant('Hello, TensorFlow!')
&gt;&gt;&gt; sess = tf.Session()
&gt;&gt;&gt; print(sess.run(hello))
Hello, TensorFlow!                  //官网给的输出结果，但是我的结果是 b'Hello, TensorFlow!'  还不知道怎么回事
&gt;&gt;&gt; a = tf.constant(10)
&gt;&gt;&gt; b = tf.constant(32)
&gt;&gt;&gt; print(sess.run(a + b))
42
&gt;&gt;&gt;
</pre>

5.1 update: b''表示是字节形式的字符串，可用string.decode(('utf-8'))转换下。
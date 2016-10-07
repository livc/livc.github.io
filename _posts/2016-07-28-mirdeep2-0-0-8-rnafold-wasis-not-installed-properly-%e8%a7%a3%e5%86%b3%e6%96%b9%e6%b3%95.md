---
title: miRDeep2.0.0.8 RNAfold was/is not installed properly 解决方法
layout: post
permalink: /157
categories:
  - 生物信息学
tags:
  - miRDeep
  - miRNA
---
在安装miRDeep2.0.0.8过程中，执行

> perl install.pl

后会发生

> RNAfold was/is not installed properly

的错误，然而实际上在 /essentials/ViennaRNA-1.8.4 内已经安装好了install.pl脚本下载的ViennaRNA。

输入 RNAfold

出现

> Input string (upper or lower case); @ to quit
  
> …,….1….,….2….,….3….,….4….,….5….,….6….,….7….,….8

证明RNAfold确实已经安装上了。

运行 /bin/mapper.pl 测试，此时会提示你未安装，让重新运行install.pl。

**切换到miRDeep目录，运行**

> touch install_successful

然后再运行/bin/mapper.pl测试，证明安装成功！

此外还可以用

> sh tutorial\_dir/run\_tut.sh

来测试是否安装成功。

**！！！**
  
此时再去运行install.pl还是会提示 RNAfold 未安装成功，但其实所有程序都可以使用了。
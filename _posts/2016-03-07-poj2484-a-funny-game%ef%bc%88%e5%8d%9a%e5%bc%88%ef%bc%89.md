---
title: POJ2484 A Funny Game（博弈）
layout: post
permalink: /blog/91
categories:
  - 算法
tags:
  - 博弈
---
<a href="http://poj.org/problem?id=2484" target="_blank">题目链接</a>

题意：n个硬币围成一圈，每人一次可以拿一个或者相邻的两个，最后一个拿的人获胜。

n>3时，后手一定获胜，因为他只要按照先手拿的对称着拿就可以，很经典的博弈题。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
#include&lt;map&gt;
#include&lt;queue&gt;
#include&lt;stack&gt;
#include&lt;string&gt;
using namespace std;

int main() {
    //freopen("a.txt", "r", stdin);
    int n;
    while(cin&gt;&gt;n && n){
        if(n&lt;3) cout &lt;&lt;"Alice"&lt;&lt; endl;
        else cout &lt;&lt; "Bob" &lt;&lt; endl;
    }
    return 0;
}
</pre>
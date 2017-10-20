---
title: POJ1704 Georgia and Bob（尼姆博弈）
layout: post
permalink: /blog/93
categories:
  - 算法
tags:
  - 博弈
  - 尼姆博弈
---
<a href="http://poj.org/problem?id=1704" target="_blank">题目链接</a>

题意：x轴（从1开始）上有n个点，每个人可以将某个点向左移动，不能超过或覆盖左边的点。不能移动的人就输了。给定点的位置输出胜者。

如果n是奇数，在0的位置填一个点构成偶数。把这些点按照顺序两两分成一组，每组间的距离可以看成尼姆博弈中的一堆石子的个数，移动后一个棋子相当于从石头堆中取出若干个石头，移动前一个棋子可以通过移动后一个棋子恢复到原来的状态，接下来就是个裸的尼姆博弈的题了。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int a[10002];
int main(){
    //freopen("a.txt", "r", stdin);
    int t, n;
    cin &gt;&gt; t;
    while(t--){
        cin &gt;&gt; n;
        for(int i = 0; i &lt; n; i++)
            cin &gt;&gt; a[i];
        if(n&1) a[n++] = 0;
        sort(a, a+n);
        int ans = 0;
        for(int i = 0; i &lt; n-1; i+=2){
            ans ^= (a[i+1]-a[i]-1);
        }
        if(ans) cout&lt;&lt;"Georgia will win"&lt;&lt;endl;
        else cout &lt;&lt; "Bob will win" &lt;&lt; endl;
    }
    return 0;
}
</pre>
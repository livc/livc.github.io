---
title: POJ2234 Matches Game（尼姆博弈）
layout: post
permalink: /99
categories:
  - 算法
tags:
  - 博弈
  - 尼姆博弈
---
<a href="http://poj.org/problem?id=2234" target="_blank">题目链接</a>

裸的尼姆博弈。。。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int a[25];
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(cin &gt;&gt; n && n){
        int sum = 0;
        for(int i = 0; i &lt; n; i++){
            scanf("%d", &a[i]);
            sum ^= a[i];
        }
        if(!sum) cout &lt;&lt; "No" &lt;&lt; endl;
        else
            cout &lt;&lt; "Yes" &lt;&lt; endl;
    }

    return 0;
}
</pre>
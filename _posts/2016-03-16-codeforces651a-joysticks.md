---
title: Codeforces651A Joysticks
layout: post
permalink: /blog/115
categories:
  - 算法
---
<a href="http://codeforces.com/contest/651/problem/A" target="_blank">题目链接</a>

题意：给出两个手机的初始电量值，每秒只能给一个手机充电，充电的手机每秒电量+1，另一个就每秒-2，问最多能保持两个手机都有电多少秒。

小的+1，大的-2，由于数据较小直接模拟。
  
需要注意的是要特判下 1 1 的情形，因为不能坚持1s，所以这组数据是0。。。。。

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

int main(){
    //freopen("a.txt", "r", stdin);
    int a1, a2;
    while(~scanf("%d %d", &a1, &a2)){
        int ans = 0;
        if(a1==1 && a2 ==1) cout &lt;&lt; "0" &lt;&lt; endl;
        else{
            while(1){
                if(a1 &gt; a2) swap(a1, a2);
                a1 += 1;
                a2 -= 2;
                ans++;
                if(a1 &lt;= 0 || a2 &lt;= 0)break;
            }
            cout &lt;&lt; ans &lt;&lt; endl;
        }

    }
    return 0;
}
</pre>
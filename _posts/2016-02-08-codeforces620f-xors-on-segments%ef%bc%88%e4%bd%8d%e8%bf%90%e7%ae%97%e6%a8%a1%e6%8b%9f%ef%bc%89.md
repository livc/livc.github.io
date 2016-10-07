---
title: Codeforces620F Xors on Segments（位运算模拟）
layout: post
permalink: /44
categories:
  - 算法
tags:
  - 位运算
---
<a href="http://codeforces.com/problemset/problem/620/F" target="_blank">题目链接</a>

2016年第一题献给CF了！

题意：n个数，m次询问，每次询问给出左右端点，求出区间内任意两个数f(x,y)的最大值。其中f（x,y）=x^(x+1)^…^y. (x<=y).

思路：预处理出1~n的连续异或的结果。用两重循环遍历所有两两组合，内部循环标记右侧端点最大值，内部循环结束后遍历所有询问更新结果。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int y[1000005];
int main(){
    //freopen("a.txt", "r", stdin);
    y[0]=0;
    for(int i = 1; i &lt;= 1000002; i++)   //预处理
        y[i] = y[i-1]^i;
    int n, m;
    while(scanf("%d %d", &n, &m) != EOF){
        int a[50005], l[5005], r[5005];
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &a[i]);
        for(int i = 1; i &lt;= m; i++)
            scanf("%d %d", &l[i], &r[i]);
        int ans[5005];
        memset(ans, 0, sizeof(ans));
        for(int i = 1; i &lt;= n; i++){
            int qq[50005];      //qq[j]代表i到j区间内最大值
            for(int j = i; j &lt;= n; j++){
                int minn = min(a[i], a[j]);
                int maxx = max(a[i], a[j]);
                if(j == i) qq[j] = y[maxx]^y[minn-1];
                else qq[j] = max(qq[j-1], y[maxx]^y[minn-1]);
            }
            for(int k = 1; k &lt;= m; k++){    //更新所有询问的答案
                if(i&gt;=l[k] && i&lt;=r[k]){
                    ans[k] = max(ans[k], qq[r[k]]);
                }
            }
        }
        for(int i = 1; i &lt;= m; i++)
            cout &lt;&lt; ans[i] &lt;&lt; endl;
    }
    return 0;
}
</pre>
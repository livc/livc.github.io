---
title: HDU1069 Monkey and Banana（DP）
layout: post
permalink: /56
categories:
  - 算法
tags:
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1069" target="_blank">题目链接</a>

题意：给定n个型号的砖头，和他们的长宽高，也就是说一种型号有三种摆放方法。要求摆出最高高度的砖头堆，使相邻的两个砖头上面的长和宽分别小于下面的长和宽。

每个型号有三种砖头，3*n种砖头存入结构体（长大于宽），然后按长排序，若相等按宽排序。dp[i]表示以第i种砖头为顶点的最大高度，那么可以写出状态转移方程：dp[j] = max(dp[j], dp[i]+h[j]) ，其中j是i上面的砖头，h[j]代表第j种砖头的高度。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
using namespace std;

int dp[100];

struct node{
    int a, b, h;
}N[100];

bool cmp(node x, node y){
    if(x.a == y.a) return x.b &lt; y.b;
    else return x.a &lt; y.a;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    int cas = 0;
    while(scanf("%d", &n) != EOF && n){
        int num = 0;
        while(n--){
            int a[3];
            scanf("%d %d %d", &a[0], &a[1], &a[2]);
            sort(a, a+3);
            N[num].a = a[0];
            N[num].b = a[1];
            N[num++].h = a[2];

            N[num].a = a[0];
            N[num].b = a[2];
            N[num++].h = a[1];

            N[num].a = a[1];
            N[num].b = a[2];
            N[num++].h = a[0];
        }
        sort(N, N+num, cmp);
        for(int i = 0; i &lt; num; i++)
            dp[i] = N[i].h;
        for(int i = 0; i &lt; num; i++){
            for(int j = i+1; j &lt; num; j++){
                if(N[j].a &gt; N[i].a && N[j].b &gt; N[i].b)
                    dp[j] = max(dp[j], dp[i]+N[j].h);
            }
        }
        int ans = 0;
        for(int i = 0; i &lt; num; i++)
            ans = max(ans, dp[i]);
        printf("Case %d: maximum height = %dn", ++cas, ans);
    }
    return 0;
}

</pre>
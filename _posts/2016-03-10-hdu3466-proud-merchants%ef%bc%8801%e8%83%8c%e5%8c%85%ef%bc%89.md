---
title: HDU3466 Proud Merchants（01背包）
layout: post
permalink: /103
categories:
  - 算法
tags:
  - 01背包
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=3466" target="_blank">题目链接</a>

01背包问题，附加条件是每次购买必须拥有超过q的钱数。
  
将q-p从小大到排序后直接按照背包搞。

关于q-p从小到大排序的原因，我是这么想的：假设q-p无穷小，那么就变成了一个裸的01背包问题，肯定要先处理小的以免影响后面运算。网上看到一个人的想法也不错：假设两个物品A：p1，q1和B：p2，q2，先买A的话则需要p1+q2的钱，先买B的话需要p2+q1的钱，若p1+q2>p2+q1则q1-p1小于q2-p2.

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int dp[5005];
struct node{
    int p, q, v;
}a[1005];
int cmp(node x,node y){
    return x.q-x.p &lt; y.q-y.p;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int n, m;
    while(scanf("%d %d", &n, &m) != EOF){
        memset(dp, 0, sizeof(dp));
        for(int i = 1; i &lt;= n; i++)
            scanf("%d %d %d", &a[i].p, &a[i].q, &a[i].v);
        sort(a+1, a+1+n, cmp);
        for(int i = 1; i &lt;= n; i++){
            for(int j = m; j &gt;= a[i].q; j--){
                dp[j] = max(dp[j], dp[j-a[i].p]+a[i].v);
            }
        }
        cout &lt;&lt; dp[m] &lt;&lt; endl;
    }
    return 0;
}
</pre>
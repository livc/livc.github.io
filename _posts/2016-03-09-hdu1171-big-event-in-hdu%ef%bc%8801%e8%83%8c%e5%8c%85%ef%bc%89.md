---
title: HDU1171 Big Event in HDU（01背包）
layout: post
permalink: /blog/95
categories:
  - 算法
tags:
  - 01背包
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1171" target="_blank">题目链接</a>

题意：n个设备，每个设备一行代表价值和数量，要求把所有设备分给两个学院，各个的价值和尽可能接近。

把总价值sum的一半看作01背包的容量，尽可能的往里放，可以求出较小的那个学院的总价值。

这题注意下数据范围和跳出情况，实际与题目描述不符。

如果sum在01背包前就除以2了，算较大的价值和再用sum\*2算就错了，因为sum/2\*2可能不等于sum。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int dp[255555];
int a[5005];
int main(){
    //freopen("a.txt", "r", stdin);
    int n, m;
    while(~scanf("%d", &n) && n&gt;0){
        memset(dp, 0, sizeof(dp));
        int cnt = 1, sum = 0;
        for(int i = 1; i &lt;= n; i++){
            int x, y;
            scanf("%d %d", &x, &y);
            for(int j = 0; j &lt; y; j++){
                a[cnt++] = x;
                sum += x;
            }
        }
        for(int i = 1; i &lt; cnt; i++){
            for(int j = sum/2; j &gt;= a[i]; j--)
                dp[j] = max(dp[j], dp[j-a[i]]+a[i]);
        }
        cout &lt;&lt; sum-dp[sum/2] &lt;&lt; " " &lt;&lt; dp[sum/2] &lt;&lt;endl;

    }
    return 0;
}
</pre>
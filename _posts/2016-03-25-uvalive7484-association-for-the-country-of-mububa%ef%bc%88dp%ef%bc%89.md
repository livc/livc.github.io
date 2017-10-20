---
title: UVALive7484 Association for the Country of Mububa（DP）
layout: post
permalink: /blog/122
categories:
  - 算法
tags:
  - 动态规划
---
<a href="https://icpcarchive.ecs.baylor.edu/index.php?option=com_onlinejudge&Itemid=8&page=show_problem&problem=5506" target="_blank">题目链接</a>

题意很简单，给出n个数字，要分成最多的区间数，使每个区间内的和大于等于前一个区间和。

思路：sum[]表示前缀和，dp[i]表示前i个数字的最多区间数，presum[i]表示只考虑前i 个数时，最后一个区间的和，这样只要从末端枚举直到和大于等于presum[j]就break。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
long long sum[3010];
long long presum[3010];
int dp[3010];
int main(){
    int n;
    sum[0] = 0;
    while(~scanf("%d", &n)){
        presum[0] = 0;
        dp[0] = 0;
        for(int i = 1; i &lt;= n; i++){
            scanf("%lld", &sum[i]);
            sum[i] += sum[i-1];
        }
        for(int i = 1; i &lt;= n; i++){
            for(int j = i-1; j &gt;= 0; j--){
                long long temp = sum[i]-sum[j];
                if(temp &gt;= presum[j]){
                    presum[i] = temp;
                    dp[i] = dp[j]+1;
                    break;
                }
            }
        }
        cout &lt;&lt; dp[n] &lt;&lt; endl;
    }
    return 0;
}
</pre>
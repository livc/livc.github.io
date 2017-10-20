---
title: Codeforces607B Zuma（区间DP）
layout: post
permalink: /blog/79
categories:
  - 算法
tags:
  - 动态规划
  - 区间DP
---
<a href="http://codeforces.com/problemset/problem/607/B" target="_blank">题目链接</a>

题意：长为n的序列，每次可以删除一个回文子串，删除之后两边合并起来，问最少几次可以将序列删完。

dp\[l\]\[r\] 表示\[l, r]区间内最少次数，s[l] ==s[r]时，dp[l\]\[r\] = dp\[l+1\]\[r-1\]。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int dp[505][505];
int s[505];

int solve(int l, int r){
    if(l == r) return 1;
    if(l &gt; r) return 0;
    if(dp[l][r] &gt; 0) return dp[l][r];
    int ret = 505;
    for(int i = l; i &lt; r; i++){
        ret = min(ret, solve(l, i)+solve(i+1, r));
    }
    if(s[l] == s[r])
        ret = min(ret, max(1, solve(l+1, r-1)));
    dp[l][r] = ret;
    return ret;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(scanf("%d", &n) != EOF){
        memset(dp, 0, sizeof(dp));
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &s[i]);
        cout &lt;&lt; solve(1, n) &lt;&lt; endl;
    }
    return 0;
}
</pre>
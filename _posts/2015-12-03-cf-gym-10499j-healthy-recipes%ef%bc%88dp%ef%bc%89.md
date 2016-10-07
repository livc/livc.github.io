---
title: CF GYM 10499J Healthy Recipes（DP）
layout: post
permalink: /14
categories:
  - 算法
tags:
  - 动态规划
---
<a href="http://codeforces.com/gym/100499/problem/J" target="_blank">题目链接</a>

题意观察样例与提示即可。

挺水的DP题，DP刷的比较少。。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;string&gt;
#include&lt;sstream&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;vector&gt;
#include&lt;cmath&gt;
using namespace std;
long long a[105], dp[10005];

int main(){
    int T;
    scanf("%d", &T);
    while(T--){
        memset(dp, 0, sizeof(dp));
        int n, m, k;
        dp[0] =1;
        scanf("%d %d %d", &n, &m, &k);
        for(int i = 1; i &lt;= n; i++){
            scanf("%I64d", &a[i]);
        }
        for(int i = 1; i &lt;= n; i++){
            for(int j = m; j &gt;= a[i]; j--){
                dp[j] += dp[j-a[i]];
            }
            if(dp[m] &gt;= k)
                break;
        }
        if(dp[m] &gt;= k) cout &lt;&lt; "ENOUGH" &lt;&lt; endl;
        else cout &lt;&lt; dp[m] &lt;&lt; endl;
    }
    return 0;
}
</pre>
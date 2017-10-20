---
title: 'POJ1458 &#038;&#038; HDU1159 Common Subsequence（最长公共子序列 DP）'
layout: post
permalink: /blog/119
categories:
  - 算法
tags:
  - 动态规划
---
<a href="http://poj.org/problem?id=1458" target="_blank">题目链接</a>

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
char s1[1005];
char s2[1005];
int dp[1005][1005];
int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%s %s", s1+1, s2+1)){
        memset(dp, 0, sizeof(dp));
        s1[0] = ' ';s2[0] = ' ';
        int l1 = strlen(s1)-1;
        int l2 = strlen(s2)-1;

        for(int i = 1; i &lt;= l1; i++){
            for(int j = 1; j &lt;= l2; j++){
                if(s1[i]==s2[j])
                    dp[i][j] = dp[i-1][j-1]+1;
                else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
        cout &lt;&lt; dp[l1][l2] &lt;&lt; endl;
    }
    return 0;
}
</pre>
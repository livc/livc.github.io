---
title: HDU2602 Bone Collector（01背包）
layout: post
permalink: /98
categories:
  - 算法
tags:
  - 01背包
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2602" target="_blank">题目链接</a>

01背包裸题

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int dp[1005];
int w[1005];
int c[1005];
int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    while(t--){
        memset(dp, 0, sizeof(dp));
        int n, v;
        scanf("%d %d", &n, &v);
        for(int i = 1; i &lt;= n; i++){
            scanf("%d", &w[i]);
        }
        for(int i = 1; i &lt;= n; i++){
            scanf("%d", &c[i]);
        }
        //01背包
        for(int i = 1; i &lt;= n; i++){
            for(int j = v; j &gt;= c[i]; j--){
                dp[j] = max(dp[j], dp[j-c[i]]+w[i]);
            }
        }

        cout &lt;&lt; dp[v] &lt;&lt; endl;
    }
    return 0;
}
</pre>
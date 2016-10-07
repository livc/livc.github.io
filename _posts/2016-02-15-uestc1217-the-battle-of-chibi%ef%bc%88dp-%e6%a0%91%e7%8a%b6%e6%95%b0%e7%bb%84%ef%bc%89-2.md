---
title: UESTC1217 The Battle of Chibi（DP 树状数组）
layout: post
permalink: /52
categories:
  - 算法
tags:
  - 动态规划
  - 树状数组
---
<a href="http://acm.uestc.edu.cn/#/problem/show/1217" target="_blank">题目链接</a>

题意：从n个数中找出m个数，满足严格递增，问能找出几个序列。

思路：dp\[i\]\[j\]表示以下标i结尾，长度为j的序列个数。
  
可以写出状态转移方程 dp\[i\]\[j\] = Σ(dp\[k\]\[j-1\])，k小于i并且a[k]小于a[i]。本来是O（n^3）的，用树状数组优化为n^2lgn.
  
如果考虑有相同数据的情况，应该先处理后面的，保证前面的不会影响后面的，所以排序时应该把位置大的放前面，但是这题并没有重复的数据。

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
const int mod = 1e9+7;
int n, m;
long long a[1005][1005];
long long dp[1005][1005]; 

struct node{
    int pos;
    int num;
}N[1005];

bool cmp(node x, node y){
    return x.num &lt; y.num;
}

int lowbit(int x){
    return x&(-x);
}

void add2(int x,int y,int num){
    for(int i = x; i &lt;= n; i += lowbit(i)){
        a[i][y] += num;
        a[i][y] %= mod;
    }

}

long long sum2(int x,int y){
    long long res = 0;
    for(int i = x; i &gt; 0; i -= lowbit(i)){
        res += a[i][y];
        res %= mod;
    }

    return res;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int T; cin &gt;&gt; T;
    for(int cas = 1; cas &lt;= T; cas++){
        scanf("%d%d", &n, &m);
        for(int i = 1; i &lt;= n; i++){
            scanf("%d", &N[i].num);
            N[i].pos = i;
        }
        sort(N+1, N+1+n, cmp);
        memset(a, 0, sizeof(a));
        memset(dp, 0, sizeof(dp));
        add2(1, 0, 1);
        for(int i = 1; i &lt;= n; i++){
            for(int j = 1; j &lt;= i; j++){
                dp[i][j] = sum2(N[i].pos, j-1);
                dp[i][j] %= mod;
                add2(N[i].pos+1, j, dp[i][j]);
                if(dp[i][j] == 0)
                    break;
            }
        }
        long long ans = 0;
        for(int i = m; i &lt;= n; i++){
            ans += dp[i][m];
            ans %= mod;
        }
        printf("Case #%d: %lldn", cas, ans);
    }
    return 0;
}
</pre>
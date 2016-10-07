---
title: 2015ACM-ICPC亚洲区域赛EC-Final F：Hungry Game of Ants（DP）
layout: post
permalink: /76
categories:
  - 算法
tags:
  - 2015ecfinal
  - 动态规划
---
<a href="https://icpcarchive.ecs.baylor.edu/external/75/p7505.pdf" target="_blank">题目PDF下载</a>

题意：n只蚂蚁在横轴（长度n+1）上，第i只蚂蚁在坐标i上，重量为i，蚂蚁可以选择向左走或向右走，当两只蚂蚁相遇时大蚂蚁吃掉小蚂蚁，重量增加小蚂蚁的重量，如果重量相同，左边的蚂蚁吃掉右边的蚂蚁。给出n和k，问第K只蚂蚁最后留下的情况数。

i从第k只蚂蚁开始考虑：

i = k 时，也就是说这是我们当作数轴上只有k个蚂蚁，求最后一只存活的情况数。首先我们应该清除：假设 k 是所有蚂蚁中向左走的最右边那一只，那么1~k所有蚂蚁都会变成一个整体，重量为 j*（1+j）/2。 所以我们从 k 往前找到 j，使j，j+1，j+2,……，k的和大于a1[i]（前缀和）的一半，也就是说j~k蚂蚁的重量和大于1~j-1蚂蚁的重量和，此时j~k-1所有蚂蚁方向都是固定的，向右，蚂蚁k的方向可以向左也可以向右，因为他是最后一只蚂蚁。可以用后缀和减去前缀和计算，此时dp[i] = 2^（j+1）.

i > k时，考虑状态转移方程：dp[n] += dp[n-1]/2\*2 ，也就是dp[n] += dp[n-1]，/2是因为n的出现使n-1只能向右走，\*2是因为n两个方向都可以走。这样我们设数组m[j] 表示 j 的后缀和（包括j）大于前缀和（不包括j）的最小坐标，a2[w]表示dp的前缀和。所以i > k 时，dp[n] = dp[n-1]+dp[n-2]+ ……+dp[w] = a2[n-1]-a2[w-1]，其中w = m[i]，由于是从左开始遍历的，整个过程O（n）时间内就可以完成。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
const int mod = 1e9+7;
long long dp[1000005];  //dp[i]表示考虑到第i个蚂蚁
long long poww[1000005]; //2^n
long long a1[1000005];  //蚂蚁重量前缀和
long long a2[1000005];  //dp[]的前缀和
long long m[1000005];

void init(){
    poww[0] = 1;
    a1[0] = 0;
    for(int i = 1; i &lt; 1000005; i++){
        poww[i] = (poww[i-1]&lt;&lt;1)%mod;
        poww[i] %= mod;
    }
    for(int i = 1; i &lt; 1000005; i++){
        a1[i] = a1[i-1]+i;
    }
    m[0] = 0;
    for(long long i = 1; i &lt; 1000005; i++){
        long long tmp = m[i-1];
        long long tmp2 = i*(i+1);
        while(2*tmp*(tmp+1) &lt; tmp2) tmp++;
        m[i] = tmp;
    }
}

int main(){
    //freopen("a.txt", "r", stdin);
    int t;
    scanf("%d", &t);
    init();
    for(int cas = 1; cas &lt;= t; cas++){
        memset(a2, 0, sizeof(a2));
        int n, k;
        scanf("%d%d", &n, &k);
        printf("Case #%d: ", cas);
        if(n == 1 && k == 1){
            cout &lt;&lt; "2" &lt;&lt; endl;
            continue;
        }
        memset(dp, 0, sizeof(dp));
        for(long long i = k; i &lt;= n; i++){
            if(i == k){
                long long sum = k;
                for(int j = k-1; j &gt;= 1; j--){
                    if(sum &gt; a1[j]){
                        dp[k] = poww[j+1];
                        break;
                    }
                    sum += j;
                }
                a2[i] = dp[i];
            }else{
                if(m[i] &gt;= k)
                    dp[i] = ((a2[i-1]-a2[m[i]-1])%mod+mod)%mod;
                else
                    dp[i] = a2[i-1];
                a2[i] = (a2[i-1]+dp[i])%mod;
            }

        }
        printf("%lldn", dp[n]);

    }
    return 0;
}
</pre>
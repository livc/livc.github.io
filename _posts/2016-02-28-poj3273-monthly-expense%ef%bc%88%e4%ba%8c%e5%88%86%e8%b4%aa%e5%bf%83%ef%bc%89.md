---
title: POJ3273 Monthly Expense（二分+贪心）
layout: post
permalink: /74
categories:
  - 算法
tags:
  - 二分
  - 贪心
---
<a href="http://poj.org/problem?id=3273" target="_blank">题目链接</a>

题意：给N个数，划分为M个块（不得打乱数顺序）。找到一个最好的划分方式，使得块中的最大值最小。

二分的l是N个数的最大值，r是N个数的和。
  
对于每个mid贪心遍历，看能否满足条件。

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
int n, m;
int a[100005];

bool judge(int x){
    int pre = 0;
    int cnt = 0;
    for(int i = 1; i &lt;= n; i++){
        if(a[i]-a[pre] &gt; x){
            cnt++;
            pre = i-1;
            i--;
        }else if(i==n){
            cnt++;
        }
    }
    if(cnt &lt;= m)
        return 1;
    else return 0;
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d%d", &n, &m) != EOF){
        int maxx = 0, k;
        a[0] = 0;
        for(int i = 1; i &lt;= n; i++){
            scanf("%d", &k);
            a[i] = a[i-1]+k;
            maxx = max(maxx, k);
        }
        int l = maxx, r = a[n];
        while(l &lt;= r){
            int mid = l+(r-l)/2;
            if(judge(mid))
                r = mid-1;
            else
                l = mid+1;
        }
        cout &lt;&lt; l &lt;&lt; endl;
    }
    return 0;
}
</pre>
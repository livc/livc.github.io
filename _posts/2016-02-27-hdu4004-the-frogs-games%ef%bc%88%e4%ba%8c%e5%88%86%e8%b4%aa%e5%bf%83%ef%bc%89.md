---
title: 'HDU4004 The Frog&#8217;s Games（二分+贪心）'
layout: post
permalink: /blog/72
categories:
  - 算法
tags:
  - 二分
  - 贪心
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=4004" target="_blank">题目链接</a>

题意：青蛙通过河中央的n块石头过河， 所有石头均在与河岸垂直的一条线上，给定每块石头到河岸的距离，河宽L，青蛙跳的次数最大值m，求出青蛙能够过河的最小步长。

当步长为河宽时，青蛙必能跳过，二分步长，求最小步长。

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
int l, n, m;
int len[500005];

bool judge(int x){
    if(x*m &lt; l) return 0;
    int sum = 0;
    int y = x;
    int k = 0;
    int flag = 1;
    for(int i = 0; i &lt;= n; i++){
        int cha = len[i+1]-len[i];
        if(x &gt;= cha){
            x -= cha;
            if(i==n) k++;
            flag = 0;
        }else{
            if(flag) return 0;
            k++;
            x = y;
            i--;
            flag = 1;
        }
    }
    if(k &gt; m) return 0;
    return 1;
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d%d%d", &l, &n, &m) != EOF){
        len[0] = 0;
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &len[i]);
        len[n+1] = l;
        sort(len+1, len+1+n);
        int L = 0, R = l;

        while(L &lt;= R){
            int mid = L+(R-L)/2;
            if(judge(mid))
                R = mid-1;
            else L = mid+1;
        }
        cout &lt;&lt; L &lt;&lt; endl;
    }
    return 0;
}
</pre>
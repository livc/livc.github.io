---
title: Codeforces185A Plant（规律+快速幂）
layout: post
permalink: /64
categories:
  - 算法
tags:
  - 快速幂
  - 数学
---
<a href="http://codeforces.com/problemset/problem/185/A" target="_blank">题目链接</a>

题意：找出第n个图形中向上的三角形个数。

从左上到右下观察每列向上三角形个数的变化就能找到规律：2^n*(2^n+1)/2

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
const int MOD = 1000000007;
long long n, ans;
long long quickmod(long long a, long long n, long long MOD){
    long long r = 1;
    while(n){
        if(n&1){
            r = (a*r)%MOD;
        }
        a = (a*a)%MOD;
        n &gt;&gt;= 1;
    }
    return r;
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%I64d", &n)){
        long long k = quickmod(2, n, MOD);
        ans = k*(k+1)/2%MOD;
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
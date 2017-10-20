---
title: HDU2199 Can you solve this equation?（二分）
layout: post
permalink: /blog/71
categories:
  - 算法
tags:
  - 二分
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2199" target="_blank">题目链接</a>

题意：在0-100的实数范围内找到方程的解。

二分水题

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
long long y;
double f(double x){
    return 8*pow(x,4) + 7*pow(x,3) + 2*pow(x,2) + 3*x - y+6;
}

int main(){
    int t; cin &gt;&gt; t;
    while(t--){
        scanf("%lld", &y);
        if(f(0)*f(100) &gt; 0){
            cout &lt;&lt; "No solution!" &lt;&lt; endl;
            continue;
        }
        double mid, l = 0, r = 100;
        while(r-l &gt; 1e-6){
            mid = l+(r-l)/2;
            if(f(mid) &gt;= 0)
                r = mid;
            else l = mid;
        }
        printf("%.4fn", mid);
    }
    return 0;
}
</pre>
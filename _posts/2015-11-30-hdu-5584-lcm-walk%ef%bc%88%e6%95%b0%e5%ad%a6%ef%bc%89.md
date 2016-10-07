---
title: HDU 5584 LCM Walk（数学）
layout: post
permalink: /9
categories:
  - 算法
tags:
  - 数学
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=5584" target="_blank">题目链接</a>
  
<a href="http://acm.hdu.edu.cn/search.php?field=problem&key=2015ACM%2FICPC%D1%C7%D6%DE%C7%F8%C9%CF%BA%A3%D5%BE-%D6%D8%CF%D6%C8%FC%A3%A8%B8%D0%D0%BB%BB%AA%B6%AB%C0%ED%B9%A4%A3%A9&source=1&searchmode=source" target="_blank">Source：2015ACM/ICPC亚洲区上海站</a>

题意：当前的位置为(x, y)，设l = LCM(x, y)，下一步可以到达(x+l, y)和(x, y+l)。已知终点的位置，问起点有多少种方案。

题解：若x<y，那么上一个点必为(x, y′)，其中y=y'+z, z=LCM(x, y'), z=k∗x .易知GCD(x, y) = GCD(x, y')，由于“两个数的积是这两个数GCD和LCM的积”得出x\*(y-z) = GCD(x, y)\*z，化简得z=xy/(x+GCD(x, y)).

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;iostream&gt;
#include &lt;cstdio&gt;
#include &lt;cmath&gt;
#include &lt;algorithm&gt;
#include &lt;cstring&gt;
using namespace std;
int main(){
    //freopen("a.txt", "r", stdin);
    int T;
    cin &gt;&gt; T;
    for(int k = 1; k &lt;= T; k++){
        long long a, b;
        int ans = 1;
        scanf("%lld %lld", &a, &b);
        if(a &gt; b)
            swap(a, b);
        while(1){
            if(a &lt;= 0) break;
            if( a*b%(a+__gcd(a, b)) != 0)
                break;
            long long z = a*b/(a+__gcd(a, b));
            if(z &gt; b) break;
            b -= z;
            if(z%a != 0 || z%b != 0) break;
            ans++;
            if(a &gt; b)
                swap(a, b);
        }

        printf("Case #%d: %dn", k, ans);
    }
    return 0;
}
</pre>

比赛时这题没做出来，原因是忘了“两个数的积是这两个数GCD和LCM的积”。。。:(
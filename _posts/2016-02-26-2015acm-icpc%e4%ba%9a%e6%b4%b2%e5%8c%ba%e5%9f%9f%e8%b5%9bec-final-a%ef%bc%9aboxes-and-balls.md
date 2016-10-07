---
title: 2015ACM-ICPC亚洲区域赛EC-Final A：Boxes and Balls
layout: post
permalink: /67
categories:
  - 算法
tags:
  - 2015ecfinal
  - 二分
  - 数学
---
<a href="https://icpcarchive.ecs.baylor.edu/external/75/p7500.pdf" target="_blank">题目PDF下载</a>

题意：f(m) = m*(m+1)/2. 找到最大的f(m)，使f(m) <= N. 输出这个f(m)。

直接解方程就可以，需要注意的是开根号过程中会出现精度问题，我们在解出来的m的附近找一小范围就可以。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        long long n;
        scanf("%lld", &n);
        long long m = (long long)((sqrt(1+8.0*n)-1)/2);
        m += 2;
        while(1){
            long long k = m*(m+1)/2;
            if(k&lt;=n){
                printf("Case #%d: %lldn", cas, k);
                break;
            }

            m--;
        }

    }
    return 0;
}
</pre>

还有一种方法，二分，找到最大的m满足f(m) > n. 注意下精度问题即可。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
long long n;
long long f(long long x){
    return x*(x+1)/2;
}

bool judge(long long x){
    if(f(x) &gt; n)
        return 1;
    return 0;
}
int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        scanf("%lld", &n);
        long long l = 1, r = 1e10;

        while(l &lt;= r){
            long long mid = l+(r-l)/2;
            if(judge(mid))
                r = mid-1;
            else l = mid+1;
        }
        //cout &lt;&lt; l &lt;&lt; endl;
        //cout &lt;&lt; r &lt;&lt; endl;
        l = f(--l);
        printf("Case #%d: %lldn", cas, l);
    }
    return 0;
}
</pre>
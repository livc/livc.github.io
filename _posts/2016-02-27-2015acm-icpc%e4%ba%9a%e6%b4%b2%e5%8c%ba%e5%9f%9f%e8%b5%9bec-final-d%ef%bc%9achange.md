---
title: 2015ACM-ICPC亚洲区域赛EC-Final D：Change
layout: post
permalink: /69
categories:
  - 算法
tags:
  - 2015ecfinal
---
<a href="https://icpcarchive.ecs.baylor.edu/external/75/p7503.pdf" target="_blank">题目PDF下载</a>

题意：A, B ∈ {0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 50, 100} ，A > B。假设有A元，用自动售货机花最少的钱使自己的钱能组成B元。

可以换很多次，所以在纸上算算就能找到规律：B为0.01、0.1、1、10时并且A不是0.02、0.2、2、20时，ans=0.02（换两次0.01），否则ans=0.01

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

int main(){
    //freopen("a.txt", "r", stdin);
    int t;
    scanf("%d", &t);
    for(int cas = 1; cas &lt;= t; cas++){
        double a, b, ans = 0.01;
        scanf("%lf%lf", &a, &b);
        double aa = a, bb = b;
        while(b &lt; 1){
            b *= 10;
        }
        while(b &gt;= 10){
            b /= 10;
        }
        //cout &lt;&lt; cnt1 &lt;&lt; endl &lt;&lt; cnt2 &lt;&lt; endl;
        if(b == 1 && bb*2 != a) ans = 0.02;
        printf("Case #%d: %.2fn", cas, ans);

    }
    return 0;
}
</pre>
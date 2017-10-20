---
title: HDU4296 Buildings（贪心）
layout: post
permalink: /blog/25
categories:
  - 算法
tags:
  - 贪心
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=4296" target="_blank">题目链接</a>

题意：给一堆木板堆成楼，每个木板有w，s两个属性。所有摆放方式中，min（每层PDV中的最大值）。（PDV为该木板上面所有木板的w值和减去该木板s值）。

思路：按s+w排序，遍历比较。注意下数据大小要用longlong。（因此wa了一发。。）

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;

struct node{
    int w, s;
}N[100005];

bool cmp(node x, node y){
    return (x.w+x.s) &lt; (y.w+y.s);
}

int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(scanf("%d", &n) != EOF){
        for(int i = 0; i &lt; n; i++)
            scanf("%d %d", &N[i].w, &N[i].s);
        sort(N, N+n, cmp);
        long long f = 0, ans = 0;
        for(int i = 1; i &lt; n; i++){
            f += N[i-1].w;
            ans = max(ans, f-N[i].s);
        }
        if(ans &lt; 0) ans = 0;
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
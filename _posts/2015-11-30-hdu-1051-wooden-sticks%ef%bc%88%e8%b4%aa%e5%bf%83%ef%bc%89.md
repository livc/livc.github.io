---
title: HDU 1051 Wooden Sticks（贪心）
layout: post
permalink: /blog/7
categories:
  - 算法
tags:
  - 贪心
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1051" target="_blank">题目链接</a>

题意：第一行T组数据，每组数据的第一行n代表有n个棍子，接下来n行每行两个数，代表这个棍子的长度和重量。一个机器来加工这些棍子，如果加工的第二根棍子的长和重量都不小于第一根的，那么就不需要机器的启动时间，否则需要1的启动时间。问加工这些棍子需要最小的启动时间。

题解：定义结构体，存储每个棍子的长和重量，还有一个flag变量来存储这个棍子是否被访问过。按照长从小到大排序，长度相等时按照重量从小到大排序。排好之后遍历。

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;iostream&gt;
#include &lt;cstdio&gt;
#include &lt;cmath&gt;
#include &lt;algorithm&gt;
#include &lt;cstring&gt;
using namespace std;

struct node{
    int a, b;
    bool flag;
}N[5005];

int cmp(node x, node y){
    if(x.a == y.a)
        return x.b &lt; y.b;
    else
        return x.a &lt; y.a;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int T, n;
    cin &gt;&gt; T;
    while(T--){
        scanf("%d", &n);
        for(int i = 0; i &lt; n; i++){
            scanf("%d %d", &N[i].a, &N[i].b);
            N[i].flag = 0;
        }
        sort(N, N+n, cmp);
        int ans = n;
        for(int i = 0; i &lt; n; i++){
            if(N[i].flag)
               continue;
            int a1 = N[i].a;
            int b1 = N[i].b;
            for(int j = i+1; j &lt; n; j++){
                if(N[j].a &gt;= a1 && N[j].b &gt;= b1 && !N[j].flag){
                    ans--;
                    N[j].flag = 1;
                    a1 = N[j].a;
                    b1 = N[j].b;
                }
            }
        }
        printf("%dn", ans);
    }
    return 0;
}
</pre>
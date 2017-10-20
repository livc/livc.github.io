---
title: POJ 2524 Ubiquitous Religions（并查集）
layout: post
permalink: /blog/6
categories:
  - 算法
tags:
  - 并查集
---
<a href="http://poj.org/problem?id=2524" target="_blank">题目链接</a>

题意：调查学校的学生宗教信仰情况，第一行输入n（总人数）和m，接下来m行，每行两个数代表这两个人信仰共同的宗教，没人最多信仰一个宗教。问所有人最多信仰多少个宗教。

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;iostream&gt;
#include &lt;cstdio&gt;
#include &lt;cstring&gt;
#include &lt;string&gt;
#include &lt;algorithm&gt;
using namespace std;
int fa[50005];
int n;
int findfa(int x){
    if(fa[x] != x){
        fa[x] = findfa(fa[x]);
    }
    return fa[x];
}

void add(int x, int y){
    if(x &gt; y)
        swap(x, y);
    x = findfa(x);
    y = findfa(y);
    if(x != y){
        fa[y] = x;
        n--;
    }
}

int main()
{
    int m;
    int cas = 1;
    while(scanf("%d %d", &n, &m) != EOF){
        if(n == 0 && m == 0) break;
        for(int i = 1; i &lt;= n; i++)
            fa[i] = i;
        while(m--){
            int a, b;
            scanf("%d %d", &a, &b);
            add(a, b);
        }
        printf("Case %d: %dn", cas++, n);
    }
    return 0;
}

</pre>
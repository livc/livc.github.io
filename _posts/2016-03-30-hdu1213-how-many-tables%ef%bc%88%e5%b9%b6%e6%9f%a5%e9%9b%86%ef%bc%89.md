---
title: HDU1213 How Many Tables（并查集）
layout: post
permalink: /131
categories:
  - 算法
tags:
  - 并查集
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1213" target="_blank">题目链接</a>

题意：n个人，如果a和b认识，b和c认识，那么认为a b c都互相认识，三个人被安排在一张桌子上，问这n个人最少安排多少张桌子。

并查集裸题。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

int fa[1005];
int n, m, t;
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

int main(){
//    freopen("a.txt", "r", stdin);
    cin &gt;&gt; t;
    while(t--){
        scanf("%d %d", &n, &m);
        for(int i = 1; i &lt;= n; i++)
            fa[i] = i;
        while(m--){
            int a, b;
            scanf("%d %d", &a, &b);
            add(a, b);
        }
        cout &lt;&lt; n &lt;&lt; endl;
    }
    return 0;
}

</pre>
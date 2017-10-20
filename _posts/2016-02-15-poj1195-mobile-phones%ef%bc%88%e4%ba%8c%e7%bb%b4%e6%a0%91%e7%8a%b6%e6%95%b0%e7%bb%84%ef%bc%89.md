---
title: POJ1195 Mobile phones（二维树状数组）
layout: post
permalink: /blog/50
categories:
  - 算法
tags:
  - 树状数组
---
<a href="http://poj.org/problem?id=1195" target="_blank">题目链接</a>

题意：给定矩阵，对点更新，询问给两个点，求这两个点构成矩形内元素和。

二维数组可以对点更新，sum求的是（1，1）到（x，y）的和。

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
int n;
int a[1050][1050];
int lowbit(int x){
    return x&(-x);
}
void add2(int x,int y,int num){
    for(int i = x; i &lt;= n; i += lowbit(i))
        for(int j = y; j &lt;= n; j += lowbit(j))
            a[i][j] += num;
}
int sum2(int x,int y){
    int res = 0;
    for(int i = x; i &gt; 0; i -= lowbit(i))
        for(int j = y; j &gt; 0; j -= lowbit(j))
            res += a[i][j];
    return res;
}
int main(){
    //freopen("a.txt", "r", stdin);
    int x,y,w,xx,yy,q;
    scanf("%d%d", &q, &n);
    memset(a, 0, sizeof(a));
    while(scanf("%d", &q) && q&lt;3){
        if(q==1){
            scanf("%d%d%d", &x, &y, &w);
            add2(++x, ++y, w);
        }else if(q==2){
            scanf("%d%d%d%d", &x, &y, &xx, &yy);
            x++;y++;xx++;yy++;
            printf("%dn", sum2(xx,yy)-sum2(x-1,yy)-sum2(xx,y-1)+sum2(x-1,y-1));
        }
    }
    return 0;
}
</pre>
---
title: POJ2299 Ultra-QuickSort（离散化 树状数组）
layout: post
permalink: /blog/47
categories:
  - 算法
tags:
  - 树状数组
  - 离散化
---
<a href="http://poj.org/problem?id=2299" target="_blank">题目链接</a>

题意：求n个数的逆序对数。

思路：首先n只有500000，然而数字范围非常大，将输入离散化成1~500000范围的数，离散化后的数组为li[]，li[1]为第一个进入数，将li[i]对应的树状数组更新为1，判断1~li[i]间有几个数已进入（有为1，无为0，就是sum），i-sum(li[i])就是逆序对数。

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
int a[500005];
int li[500005];
struct node{
    int order;
    int num;
}N[500005];
bool cmp(node x, node y){
    return x.num&lt;y.num;
}
int lowbit(int x){
    return x&(-x);
}
void add(int pos , int num){
    while(pos &lt;= n){
        a[pos] += num;
        pos += lowbit(pos);
    }
}
int sum(int n){
    int sum = 0;
    while(n &gt; 0){
        sum += a[n];
        n -= lowbit(n);
    }
    return sum;
}
int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d", &n) != EOF && n){
        for(int i = 1; i &lt;= n; i++){
            scanf("%d", &N[i].num);
            N[i].order = i;
        }
        sort(N+1, N+n+1, cmp);
        for(int i = 1; i &lt;= n; i++)
            li[N[i].order] = i;
        memset(a, 0, sizeof(a));
        long long ans = 0;

        for(int i = 1; i &lt;= n; i++){
            add(li[i], 1);
            ans += i-sum(li[i]);
        }
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
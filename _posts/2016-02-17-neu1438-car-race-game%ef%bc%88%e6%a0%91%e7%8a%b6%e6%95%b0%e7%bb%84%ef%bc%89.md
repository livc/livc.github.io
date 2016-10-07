---
title: NEU1438 Car race game（树状数组）
layout: post
permalink: /58
categories:
  - 算法
tags:
  - 树状数组
---
<a href="http://acm.neu.edu.cn/hustoj/problem.php?id=1438" target="_blank">题目链接</a>

题意：在一维坐标轴上给出n个人的起点和速度，问一共会出现多少次超越。

首先按照x排序，xi右边速度比xi小的人都会被xi超越，因此可以从x最大的那个人开始，求速度的前缀和，表示这个人右边有多少人速度比他小，然后更新速度。
  
值得一提的是如果x相等，那么要先处理v大的那个，否则会影响结论。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
using namespace std;
int n = 1000005;
int a[1000005];

struct node{
    int x,v;
}N[1000005];

bool cmp(node a, node b){
    if(a.x == b.x) return a.v&gt;b.v;
    else return a.x &lt; b.x;
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
    int n;
    while(scanf("%d", &n) != EOF){
        memset(a, 0, sizeof(a));
        for(int i = 1; i &lt;= n; i++)
            scanf("%d %d", &N[i].x, &N[i].v);
        sort(N+1, N+1+n, cmp);
        long long ans = 0;
        for(int i = n; i &gt;= 1; i--){
            ans += sum(N[i].v-1);
            add(N[i].v, 1);
        }
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
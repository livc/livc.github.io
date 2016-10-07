---
title: POJ2155 Matrix（二维树状数组）
layout: post
permalink: /51
categories:
  - 算法
tags:
  - 树状数组
---
<a href="http://poj.org/problem?id=2155" target="_blank">题目链接</a>

题意：矩阵默认全为0，操作是对输入的两个点构成的矩形内所有元素取反，询问是问某个点是1还是0。

二维树状数组解决此题非常巧妙，更新矩形四个顶点。

如果想不明白的话，可以先考虑一维的情况：对[x, y] 区间内所有数取反，可以看成对树状数组的a[ x ]和a[ y+1 ]加一。

详解建议参考：<a href="http://wenku.baidu.com/view/c5dbcc877c1cfad6195fa7a0.html?from=search" target="_blank">浅谈信息学竞赛中的“0”和“1”</a>

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
int a[1010][1010];
int lowbit(int x){
    return x&(-x);
}
void add2(int x,int y,int num){//二维
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
    int T, x1, y1, x2, y2, m; cin &gt;&gt;T;
    char s[5];
    while(T--){
        memset(a, 0, sizeof(a));
        scanf("%d%d", &n, &m);
        while(m--){
            scanf("%s", s);
            if(s[0] == 'C'){
                scanf("%d%d%d%d", &x1, &y1, &x2, &y2);
                add2(x1, y1, 1);
                add2(x2+1, y2+1, 1);
                add2(x1, y2+1, 1);
                add2(x2+1, y1, 1);
            }else{
                scanf("%d%d", &x1, &y1);
                printf("%dn", sum2(x1,y1)%2);
            }
        }
        cout &lt;&lt;endl;
    }
    return 0;
}
</pre>
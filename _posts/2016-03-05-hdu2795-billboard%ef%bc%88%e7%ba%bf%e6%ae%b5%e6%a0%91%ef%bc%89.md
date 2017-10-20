---
title: HDU2795 Billboard（线段树）
layout: post
permalink: /blog/84
categories:
  - 算法
tags:
  - 线段树
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2795" target="_blank">题目链接</a>

题意：高为h，宽为w的广告板，往上面贴一些宽都是1的广告。要求尽量往上和往左贴，输入能贴在第几行，如果都贴不上输出-1.

首先取min（h，n）作为线段树长度，因为最坏情况是n个广告每个一行，如果h>n的话剩下的肯定贴不了。
  
用线段树来维护1~h中剩余长度的最大值，利用其由上而下搜索和先遍历左子树的特性，找到广告板上最上面符合条件的行数。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
#include&lt;map&gt;
#include&lt;queue&gt;
#include&lt;stack&gt;
#include&lt;string&gt;
using namespace std;
#define lson l,m,rt&lt;&lt;1
#define rson m+1,r,rt&lt;&lt;1|1
const int maxn = 200005;
int tree[maxn&lt;&lt;2];
int h, w, n;

void pushUp(int rt){
    tree[rt] = max(tree[rt&lt;&lt;1], tree[rt&lt;&lt;1|1]);
}

void build(int l, int r, int rt){
    if(l == r){
        tree[rt] = w;
        return;
    }
    int m = l+(r-l)/2;
    build(lson);
    build(rson);
    pushUp(rt);
}

int query(int num, int l, int r, int rt){
    if(l == r){
        tree[rt] -= num;
        return l;
    }
    int ans;
    int m = l+(r-l)/2;
    if(tree[rt&lt;&lt;1] &gt;= num)
        ans = query(num, lson);
    else
        ans = query(num, rson);
    pushUp(rt); //更新
    return ans;
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%d %d %d", &h, &w, &n)){
        h = min(h, n);
        build(1, h, 1);
        for(int i = 0; i &lt; n; i++){
            int a;
            scanf("%d", &a);
            if(tree[1] &lt; a) cout &lt;&lt; "-1" &lt;&lt; endl;
            else{
                cout &lt;&lt; query(a, 1, h, 1) &lt;&lt; endl;
            }
        }
    }
    return 0;
}
</pre>
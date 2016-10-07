---
title: HDU1698 Just a Hook（线段树 区间更新）
layout: post
permalink: /83
categories:
  - 算法
tags:
  - 线段树
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1698" target="_blank">题目链接</a>

样例：
  
1（数据数）
  
10（1个数初始都是1）
  
2（2次操作）
  
1 5 2（将[1, 5]区间内所有数变为2）
  
5 9 3（将[5, 9]区间内所有数变为3）

最后问[1, n]内所有元素的和。

线段树的区间更新。

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
const int maxn = 1e5+10;
int tree[maxn&lt;&lt;2], lazy[maxn&lt;&lt;2];
int n;
void pushDown(int l, int r, int rt){
    int m = l+(r-l)/2;
    tree[rt&lt;&lt;1] = (m-l+1)*lazy[rt];
    tree[rt&lt;&lt;1 | 1] = (r-m)*lazy[rt];

    lazy[rt&lt;&lt;1] = lazy[rt&lt;&lt;1|1] = lazy[rt];
    lazy[rt] = 0;
}

void pushUp(int rt){
    tree[rt] = tree[rt&lt;&lt;1] + tree[rt&lt;&lt;1|1];//区间和
}

void build(int l, int r, int rt){
    lazy[rt] = 0; //lazy初始化
    if(l == r){
        tree[rt] = 1; //线段树初始化
        return;
    }
    int m = l+(r-l)/2;
    build(lson);
    build(rson);
    pushUp(rt);
}

//更新[L,R]内元素为val
void update(int L, int R, int val, int l, int r, int rt){
    if(L == l && R == r){
        tree[rt] = val*(r-l+1);
        lazy[rt] = val;
        return;
    } //include l == r

    if(lazy[rt])
        pushDown(l, r, rt);

    int m = l+(r-l)/2;

    if(R &lt;= m)
        update(L, R, val, lson);
    else if(L &gt; m)
        update(L, R, val, rson);
    else{
        update(L, m, val, lson);
        update(m+1, R, val, rson);
    }
    pushUp(rt);
}

int main() {
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        scanf("%d", &n);
        build(1, n, 1);
        int op;
        scanf("%d", &op);
        while(op--){
            int a, b, c;
            scanf("%d%d%d", &a, &b, &c);
            update(a, b, c, 1, n, 1);
        }
        printf("Case %d: The total value of the hook is %d.\n", cas, tree[1]);
    }
    return 0;
}
</pre>
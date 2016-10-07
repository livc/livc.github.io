---
title: Codeforces620E New Year Tree（dfs序+线段树 区间更新）
layout: post
permalink: /90
categories:
  - 算法
tags:
  - DFS
  - 线段树
---
<a href="http://codeforces.com/problemset/problem/620/E" target="_blank">题目链接</a>

题意：一棵树，每个节点有一个颜色，现在有两种操作，一种是将一棵子树所有节点置为一种颜色，另一种是求一棵子树内的结点颜色数量。

先处理出每个节点的dfs序转化为线性区间上的问题。然后剩下就是一个线段树问题，用每一个二进制位代表一种颜色，然后结点的权值表示当前区间有多少种颜色，区将合并只需要或运算即可。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
#define ll long long
#define lson l,m,rt&lt;&lt;1
#define rson m+1,r,rt&lt;&lt;1|1
const int maxn = 4e5+10;
int n, m, dfs_clock;
int node[maxn], tim[maxn][2];
vector&lt;int&gt; G[maxn];
ll tree[maxn&lt;&lt;2], lazy[maxn&lt;&lt;2];

int cal_col(ll x){
    int cnt = 0;
    for(int i = 0; i &lt; 62; i++){
        if((1ll&lt;&lt;i) & x)
            cnt++;
    }
    return cnt;
}
//dfs序 dfs_clock=0
void dfs(int cur, int fa){
    tim[cur][0] = ++dfs_clock;
    for(int i = 0; i &lt; G[cur].size(); i++) {
        int v = G[cur][i];
        if(v == fa) continue;
        dfs(v, cur);
    }
    tim[cur][1] = dfs_clock;
}

void pushDown(int l, int r, int rt){
    int m = l+(r-l)/2;
    tree[rt&lt;&lt;1] = lazy[rt];
    tree[rt&lt;&lt;1 | 1] = lazy[rt];

    lazy[rt&lt;&lt;1] = lazy[rt&lt;&lt;1|1] = lazy[rt];
    lazy[rt] = 0;
}

void pushUp (int rt){
    tree[rt] = tree[rt&lt;&lt;1] | tree[rt&lt;&lt;1|1];
}

void update(int L, int R, int val, int l, int r, int rt){
    if(L == l && R == r){
        tree[rt] = 1ll&lt;&lt;val;
        lazy[rt] = 1ll&lt;&lt;val;
        return;
    }
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

ll query(int L,int R,int l,int r,int rt){
    if(lazy[rt])    return lazy[rt];
    if(L &lt;= l && R &gt;= r)    return tree[rt];
    int m = l + (r-l)/2;
    ll ans = 0;
    if(L &lt;= m)
        ans |= query(L, R, lson);
    if(R &gt; m)
        ans |= query(L, R, rson);
    return ans;
}

void init(){
    dfs_clock = 0;
    memset(lazy, 0, sizeof(lazy));
    memset(tree, 0, sizeof(tree));
    for(int i = 1; i &lt;= n+10; i++){
        G[i].clear();
    }
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d%d", &n, &m)!=EOF){
        init();
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &node[i]);
        for(int i = 1; i &lt;= n-1; i++){
            int u, v;
            scanf("%d %d", &u, &v);
            G[u].push_back(v);
            G[v].push_back(u);
        }
        dfs(1, -1);
        for(int i = 1; i &lt;= n; i++){
            update(tim[i][0], tim[i][0], node[i], 1, n, 1);
        }
        for(int i = 1; i &lt;= m; i++){
            int op, u, v;
            scanf("%d", &op);
            if(op == 1){
                scanf("%d%d", &u, &v);
                update(tim[u][0], tim[u][1], v, 1, n, 1);
            }else{
                scanf("%d", &u);
                ll ans = query(tim[u][0], tim[u][1], 1, n, 1);
                printf("%d\n", cal_col(ans));
            }
        }
    }
    return 0;
}
</pre>
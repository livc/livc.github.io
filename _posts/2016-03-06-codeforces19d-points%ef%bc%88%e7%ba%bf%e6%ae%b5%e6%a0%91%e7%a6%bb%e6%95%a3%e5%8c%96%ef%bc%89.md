---
title: Codeforces19D Points（线段树+离散化）
layout: post
permalink: /86
categories:
  - 算法
tags:
  - 离散化
  - 线段树
---
<a href="http://codeforces.com/contest/19/problem/D" target="_blank">题目链接</a>

题意：对于一个二维平面，有三种操作：1.add x y 代表x y这里有点 2.remove x y 代表删掉这个点 3. find x y 输出在这个点右上方最靠近这个点的坐标，如果没有输出-1.

数轴长度达到1e9，然而点的个数最多只有2*10^5，所以把点给离散化，然后用线段树维护区间段内点的纵坐标的最大值。插入和删除的时候直接二分找到位置就可以。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stdio.h&gt;
#include&lt;iostream&gt;
#include&lt;string.h&gt;
#include&lt;algorithm&gt;
using namespace std;
#define lson l,m,rt&lt;&lt;1
#define rson m+1,r,rt&lt;&lt;1|1
const int maxn = 2e5+10;

int value[maxn&lt;&lt;3];
int flag[maxn];

struct node{
    int x, y;
    bool operator &lt;(const node&a) const{
        if(x != a.x) return x&lt;a.x;
        else return y&lt;a.y;
    }
}x[maxn], a[maxn], ans;

void PushUp(int rt){
    value[rt] = max(value[rt&lt;&lt;1], value[rt&lt;&lt;1|1]);
}

void update(bool f, int p, int add, int l, int r, int rt){
    if(l==r){
        value[rt] = f?add:-1;
        return;
    }
    int m = l + (r-l)/2;
    if(p &lt;= m) update(f, p, add, lson);
    else update(f, p, add, rson);
    PushUp(rt);
}

void query(node a, int l,int r,int rt){
    if(x[r].x &lt;= a.x || value[rt]&lt;= a.y) return;
    if(l == r) ans = x[l];
    int m = l + (r-l)/2;
    query(a, lson);
    if(ans.x == -1) query(a, rson);
}

int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(~scanf("%d", &n)){
        memset(value, -1, sizeof(value));
        int m = 1;
        for(int i = 1; i &lt;= n; i++){
            char op[10];
            scanf("%s %d %d", op, &a[i].x, &a[i].y);
            if(op[0] == 'a'){
                x[m++] = a[i];
                flag[i] = 1;
            }else if(op[0] == 'f'){
                flag[i] = 2;
            }
            else flag[i] = 0;
        }
        sort(x+1, x+1+m);
        for(int i = 1; i &lt;= n; i++){
            if(flag[i] &lt; 2){
                int now = lower_bound(x+1, x+m+1, a[i])-x;
                update(flag[i], now, a[i].y, 1, m, 1);
            }else{
                ans.x = -1, ans.y = -1;
                query(a[i], 1, m, 1);
                if(ans.x == -1) cout &lt;&lt; "-1" &lt;&lt; endl;
                else cout &lt;&lt; ans.x &lt;&lt; " " &lt;&lt; ans.y &lt;&lt; endl;
            }
        }

    }
    return 0;
}
</pre>
---
title: HDU1102 Constructing Roads（最小生成树）
layout: post
permalink: /133
categories:
  - 算法
tags:
  - 图论
  - 最小生成树
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1102" target="_blank">题目链接</a>

题意：求最小生成树，前提是有些村庄之间的路已经建好了，问再需建的路的最小权值是多少。

读完图后把已经有路的村庄间的距离设为0就可以。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

const int INF = 0x3f3f3f3f;
const int MAXN = 110;
bool vis[MAXN];
int lowc[MAXN];
int cost[MAXN][MAXN];

int Prim(int cost[][MAXN], int n){
    int ans = 0;
    memset(vis, false, sizeof(vis));
    vis[0] = true;
    for(int i = 1; i &lt; n; i++)
        lowc[i] = cost[0][i];
    for(int i = 1; i &lt; n; i++){
        int minc = INF;
        int p = -1;
        for(int j = 0; j &lt; n; j++){
            if(!vis[j] && minc&gt;lowc[j]){
                minc = lowc[j];
                p = j;
            }
        }
        if(minc == INF) return -1;
        ans += minc;
        vis[p] = true;
        for(int j = 0; j &lt; n; j++){
            if(!vis[j] && lowc[j]&gt;cost[p][j])
                lowc[j] = cost[p][j];
        }

    }
    return ans;
}

int main(){
//    freopen("a.txt", "r", stdin);
    int n;
    while(~scanf("%d", &n)){
        memset(cost, 0x3f, sizeof(cost));
        int a, b, c;
        for(int i = 0; i &lt; n; i++){
            for(int j = 0; j &lt; n; j++){
                scanf("%d", &cost[i][j]);
            }
        }
        scanf("%d", &c);
        for(int i = 1; i &lt;= c; i++){
            scanf("%d %d", &a, &b);
            a--; b--;
            cost[a][b] = cost[b][a] = 0;
        }
        cout &lt;&lt; Prim(cost, n) &lt;&lt; endl;
    }
    return 0;
}
</pre>
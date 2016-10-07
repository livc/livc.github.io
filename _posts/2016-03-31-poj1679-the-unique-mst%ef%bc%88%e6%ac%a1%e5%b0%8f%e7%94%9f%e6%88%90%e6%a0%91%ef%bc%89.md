---
title: POJ1679 The Unique MST（次小生成树）
layout: post
permalink: /134
categories:
  - 算法
tags:
  - 图论
  - 次小生成树
---
<a href="http://poj.org/problem?id=1679" target="_blank">题目链接</a>

题意：判断最小生成树是否唯一。

可以通过求次小生成树解决，如果相等则说明不唯一。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
const int MAXN = 110;
const int INF = 0x3f3f3f3f;
int cost[MAXN][MAXN];
bool vis[MAXN];
int lowc[MAXN];
int pre[MAXN];
int Max[MAXN][MAXN];
bool used[MAXN][MAXN];

int Prim(int cost[][MAXN], int n){
    int ans = 0;
    memset(vis, false, sizeof(vis));
    memset(Max, 0, sizeof(Max));
    memset(used, false, sizeof(used));
    vis[0] = true;
    pre[0] = -1;
    for(int i = 1; i &lt; n; i++){
        lowc[i] = cost[0][i];
        pre[i] = 0;
    }
    lowc[0] = 0;
    for(int i = 1; i &lt; n; i++){
        int minc = INF;
        int p = -1;
        for(int j = 0; j &lt; n; j++){
            if(!vis[j] && minc&gt;lowc[j]){
                minc = lowc[j];
                p = j;
            }
        }

        if(minc == INF)return -1;
        ans += minc;
        vis[p] = true;
        used[p][pre[p]] = used[pre[p]][p] = true;
        for(int j = 0; j &lt; n; j++){
            if(vis[j]) Max[j][p] = Max[p][j] = max(Max[j][pre[p]], lowc[p]);
            if(!vis[j] && lowc[j]&gt;cost[p][j]){
                lowc[j] = cost[p][j];
                pre[j] = p;
            }
        }
    }
    return ans;
}
int ans;
int smst(int cost[][MAXN],int n){
    int Min = INF;
    for(int i = 0; i &lt; n; i++)
        for(int j = i+1; j &lt; n; j++)
            if(cost[i][j]!=INF && !used[i][j]){
                Min = min(Min, ans+cost[i][j]-Max[i][j]);
            }
    if(Min == INF) return -1;
    return Min;
}

int main(){
//    freopen("a.txt", "r", stdin);
    int t,m,n;
    cin &gt;&gt; t;
    while(t--){
        scanf("%d%d", &n, &m);
        memset(cost, 0x3f, sizeof(cost));
        int a, b, c;
        for(int i = 0; i &lt; m; i++){
            scanf("%d %d %d", &a, &b, &c);
            a--; b--;
            cost[a][b] = cost[b][a] = c;
        }
        ans = Prim(cost, n);
        int ci = smst(cost, n);
        if(ans != ci) cout &lt;&lt; ans &lt;&lt; endl;
        else cout &lt;&lt; "Not Unique!" &lt;&lt;endl;
    }
    return 0;
}
</pre>
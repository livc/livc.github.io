---
title: HDU2544 最短路（Dijkstra）
layout: post
permalink: /blog/153
categories:
  - 算法
tags:
  - Dijkstra
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2544" target="_blank">题目链接</a>

有重边。

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;iostream&gt;
#include &lt;cstring&gt;
#include &lt;cstdio&gt;
using namespace std;
const int MAXN = 1010;
const int INF = 0x3f3f3f3f;
bool vis[MAXN];
int pre[MAXN];
int n, m;
int cost[MAXN][MAXN];
int lowcost[MAXN];
void Dijkstra(int cost[][MAXN], int lowcost[], int n, int beg){
    for(int i = 0; i &lt; n; i++){
        lowcost[i] = INF;
        vis[i] = false;
        pre[i] = -1;
    }
    lowcost[beg] = 0;
    for(int j = 0; j &lt; n; j++){
        int k = -1;
        int Min = INF;
        for(int i = 0; i &lt; n; i++){
            if(!vis[i] && lowcost[i]&lt;Min){
                Min = lowcost[i];
                k = i;
            }
        }
        if(k == -1) break;
        vis[k] = true;
        for(int i = 0; i &lt; n; i++){
            if(!vis[i] && lowcost[k]+cost[k][i]&lt;lowcost[i]){
                lowcost[i] = lowcost[k]+cost[k][i];
                pre[i] = k;
            }
        }

    }
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d %d", &n, &m) != EOF){
        if(n==0 && m==0) break;
        memset(cost, INF, sizeof(cost));
        for(int i = 0; i &lt; m; i++){
            int a, b, c;
            scanf("%d %d %d", &a, &b, &c);
            a--; b--;
            cost[a][b] = min(cost[a][b], c);
            cost[b][a] = cost[a][b];
        }
        Dijkstra(cost, lowcost, n, 0);
        cout &lt;&lt; lowcost[n-1] &lt;&lt; endl;
    }

    return 0;
}
</pre>
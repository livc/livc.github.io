---
title: POJ3051 Satellite Photographs（DFS水题）
layout: post
permalink: /24
categories:
  - 算法
tags:
  - DFS
---
<a href="http://poj.org/problem?id=3051" target="_blank">题目链接</a>

题意：求图中最大的连通*的个数。

最近期末没刷题，这么水的题竟然跪了两发。。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
char pic[1050][150];
int judge[1050][150];
int n, m;
int ans, num;

void dfs(int a, int b){
    if(pic[a][b] == '.' || judge[a][b] == 1 || a &lt;0 || b&lt;0 || a &gt;=m || b &gt;=n)
        return;
    judge[a][b] = 1;
    num++;
    ans = max(ans, num);
    dfs(a-1, b);
    dfs(a+1, b);
    dfs(a, b+1);
    dfs(a, b-1);
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d %d", &n, &m) != EOF){
        for(int i = 0; i &lt; m; i++)
            scanf("%s", pic[i]);
        ans = 0;
        memset(judge, 0, sizeof(judge));
        for(int i = 0; i &lt; m; i++)
            for(int j = 0; j &lt; n; j++){
                num = 0;
                dfs(i, j);
            }
        cout &lt;&lt; ans &lt;&lt; endl;

    }
    return 0;
}
</pre>
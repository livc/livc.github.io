---
title: HDU1241 Oil Deposits（经典DFS）
layout: post
permalink: /15
categories:
  - 算法
tags:
  - DFS
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1241" target="_blank">题目链接</a>

题意：@是油田，*是空地，问图中的油田构成多少个连通分量。

最经典的DFS，初学者可以好好领悟深度优先搜索的姿势。 🙂

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;bits/stdc++.h&gt;
using namespace std;
char pic[105][105];
int m, n, idx[105][105]; //连通分量编号
void dfs(int r, int c, int id){
    if(r &gt;= m || r &lt; 0 ||c &lt; 0 || c &gt;= n) //出界
        return;
    if(idx[r] != 0 || pic[r] != '@') //不是'@'或已访问的格子
        return;
    idx[r] = id;
    for(int dr = -1; dr &lt;= 1; dr++)
        for(int dc = -1; dc &lt;= 1; dc++)
            if(dr != 0 || dc != 0)
                dfs(r+dr, c+dc, id);
}

int main(){
    while(scanf("%d %d", &m, &n) != EOF && m && n){
        for(int i = 0; i &lt; m; i++)
            scanf("%s", pic[i]);
        memset(idx, 0, sizeof(idx));
        int cnt = 0;
        for(int i = 0;i &lt; m; i++)
            for(int j = 0; j &lt; n; j++)
                if(idx[i][j] == 0 && pic[i][j] == '@')
                    dfs(i, j, ++cnt);
        cout &lt;&lt; cnt &lt;&lt; endl;
    }
    return 0;
}
</pre>
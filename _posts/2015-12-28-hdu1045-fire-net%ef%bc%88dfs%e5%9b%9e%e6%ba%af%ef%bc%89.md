---
title: HDU1045 Fire Net（DFS回溯）
layout: post
permalink: /blog/23
categories:
  - 算法
tags:
  - DFS
  - 八皇后
  - 回溯
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1045" target="_blank">题目链接</a>

题意：给一个图，X代表障碍物，问最多放置多少个item，使每行每列的item间不能相互到达。

思路：八皇后变形题，我的思路是从左到右从上到下的跑点，用k表示第几个点，那么这个点的坐标就能用k来表示。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int n, ans;
int pic[10][10];
bool judge(int x, int y){ //判断该点能否放置
    bool flag1 = 1, flag2 = 1;
    for(int i = x-1; i &gt;= 0; i--){
        if(pic[i][y] == 1)
            flag1 = 0;
        if(pic[i][y] == -1)
            break;
    }
    for(int i = y-1; i &gt;= 0; i--){
        if(pic[x][i] == 1)
            flag2 = 0;
        if(pic[x][i] == -1)
            break;
    }
    return (flag1&&flag2);
}

void dfs(int k, int cnt){ //k是点序号 cnt是已放置的item个数
    if(k == n*n){
        ans = max(ans, cnt);
        return;
    }
    int x = k/n;
    int y = k%n;
    if(judge(x, y) && pic[x][y] != -1){
        pic[x][y] = 1;
        dfs(k+1, cnt+1);
        pic[x][y] = 0;
        dfs(k+1, cnt);
    }else dfs(k+1, cnt);
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%d", &n) && n){
        ans = 0;
        char s[5];
        for(int i = 0; i &lt; n; i++){ //空地是0 障碍物是-1 放置物体是1
            scanf("%s", s);
            for(int j = 0; j &lt; n; j++){
                if(s[j] == '.')
                    pic[i][j] = 0;
                else pic[i][j] = -1;
            }
        }
        dfs(0, 0);
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
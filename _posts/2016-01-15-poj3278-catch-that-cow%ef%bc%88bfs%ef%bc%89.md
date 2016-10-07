---
title: POJ3278 Catch That Cow（BFS）
layout: post
permalink: /28
categories:
  - 算法
tags:
  - BFS
---
<a href="http://poj.org/problem?id=3278" target="_blank">题目链接</a>

题意：起点为n，终点为k。运动有三个方向：n-1，n+1，2*n。最少几步到达k点。

思路：BFS三个方向。额外要注意的是剪枝和n等于k时答案应为0。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
const int maxx = 100005;
int n, k, ans, next;
bool vis[maxx];     //标记是否访问过
struct point{
    int x, n;       //x为坐标，n为布数
};
void bfs(){
    if(n == k){
        ans = 0;
        return;
    }
    queue&lt;point&gt; q;
    point p1;
    p1.x = n;
    p1.n = 0;
    q.push(p1);
    vis[n] = 1;
    while(!q.empty()){
        point p2 = q.front();
        q.pop();
        for(int i = 0; i &lt; 3; i++){
            if(!i)
                next = p2.x + 1;
            else if(i == 1)
                next = p2.x - 1;
            else next = 2*p2.x;
            if(next &lt; 0 || next &gt; maxx) continue;  //剪枝
            if(next == k){
                ans = p2.n+1;
                return;
            }
            if(!vis[next]){
                point p3;
                p3.x = next;
                p3.n = p2.n+1;
                q.push(p3);
                vis[next] = 1;
            }

        }
    }
}
int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d %d", &n, &k) != EOF){
        memset(vis, 0, sizeof(vis));
        bfs();
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
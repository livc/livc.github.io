---
title: POJ2251 Dungeon Master（BFS）
layout: post
permalink: /27
categories:
  - 算法
tags:
  - BFS
---
<a href="http://poj.org/problem?id=2251" target="_blank">题目链接</a>

题意：三维的图，可以上下东南西北的走，所以方向是6个。在同坐标的不同level可以通过上下到达。每步时间是1，问从S到E的最短时间。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;

int dir[6][3]={-1,0,0,
                1,0,0,
                0,-1,0,
                0,1,0,
                0,0,-1,
                0,0,1};
int l, r, c, ans;
char pic[35][35][35];
int flag[35][35][35];
struct point{
    int x, y, z;
    int n;
};
bool judge(int x, int y, int z){
    if(x &gt;= 0 && x &lt;l && y &gt;= 0 && y &lt;r && z &gt;= 0 && z &lt; c)
        return 1;
    else return 0;
}

void bfs(int x, int y, int z){
    queue&lt;point&gt; q;
    point p0, p1, p2;
    p0.x = x; p0.y = y; p0.z = z; p0.n = 0;
    flag[x][y][z] = 1;
    q.push(p0);
    while(!q.empty()){
        p1 = q.front();
        q.pop();
        for(int i = 0; i &lt; 6; i++){
            int x1 = p1.x + dir[i][0];
			int y1 = p1.y + dir[i][1];
			int z1 = p1.z + dir[i][2];
			if(judge(x1, y1, z1) && !flag[x1][y1][z1] && pic[x1][y1][z1] != '#'){
				if(pic[x1][y1][z1] == 'E'){
					ans = p1.n + 1;
					return;
				}
				p2.x = x1;
				p2.y = y1;
				p2.z = z1;
				p2.n = p1.n+1;
				flag[x1][y1][z1] = 1;
				q.push(p2);
			}
        }
    }
}

int main(){
    //freopen("a.txt", "r", stdin);
    int si, sj, sk;
    while(scanf("%d %d %d", &l, &r, &c) != EOF){
        if(!l && !r && !c) break;
        memset(flag, 0, sizeof(flag));
        for(int i = 0; i &lt; l; i++){
            for(int j = 0; j &lt; r; j++){
                scanf("%s", pic[i][j]);
                for(int k = 0; k &lt; c; k++)
                    if(pic[i][j][k] == 'S'){
                        si = i; sj = j; sk = k;
                    }
            }
        }
        ans = -1;
        bfs(si, sj, sk);
        if(ans != -1)
		    printf("Escaped in %d minute(s).n", ans);
		else
		    printf("Trapped!n");
    }
    return 0;
}
</pre>
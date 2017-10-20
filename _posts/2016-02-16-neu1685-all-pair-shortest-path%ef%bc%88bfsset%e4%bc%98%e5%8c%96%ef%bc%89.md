---
title: NEU1685 All Pair Shortest Path（bfs+set优化）
layout: post
permalink: /blog/54
categories:
  - 算法
tags:
  - BFS
  - STL
---
<a href="http://acm.neu.edu.cn/hustoj/problem.php?id=1685" target="_blank">题目链接</a>

题意：输入一个01矩阵表示的有向图，D(i,j)表示i到j的最短路中的长度，求所有D(i,j)*D(i,j)的和。

思路：枚举每个点作为源点，从源点出发bfs，记录到源点的距离。如果用vis[]来记录点是否到达的话，那么将是一个n^3的复杂度。因此可以用set维护源点未到达的点，每次队首点从set中遍历。需要注意的是，遍历到不能马上删除，如果这个点在当前迭代处后面时程序会跪，所以记录下要删除的点，it遍历一遍之后一起删除。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int n;
char pic[1005][1005];
long long dis[1005];

long long bfs(int a){
    memset(dis, -1, sizeof(dis));
    queue&lt;int&gt; q;
    set&lt;int&gt; s;
    set&lt;int&gt;::iterator it;
    dis[a] = 0;
    for(int i = 0; i &lt; n; i++){
        if(i==a) continue;
        if(pic[a][i] == '1'){
            q.push(i);
            dis[i] = 1;
        }else
            s.insert(i);
    }

    int del[1005];
    int cnt = 0;
    while(!q.empty() && !s.empty()){
        int f = q.front();
        q.pop();
        for(it = s.begin(); it != s.end(); it++){
            int p = *it;
            if(pic[f][p] == '1'){
                q.push(p);
                dis[p] = dis[f]+1;
                del[cnt++] = p;
            }
        }
        for(int i = 0; i &lt; cnt; i++)
            s.erase(del[i]);
    }

    long long sum = 0;
    for(int i = 0; i &lt; n; i++){
        if(dis[i] == -1) sum += n*n;
        else sum += dis[i]*dis[i];
    }

    return sum;
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d", &n) != EOF){
        for(int i = 0; i &lt; n; i++)
            scanf("%s", pic[i]);
        long long ans = 0;

        for(int i = 0; i &lt; n; i++){
            ans += bfs(i);
        }
        cout &lt;&lt; ans &lt;&lt; endl;

    }
    return 0;
}
</pre>
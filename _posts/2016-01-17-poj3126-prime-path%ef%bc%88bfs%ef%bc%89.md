---
title: POJ3126 Prime Path（BFS）
layout: post
permalink: /blog/31
categories:
  - 算法
tags:
  - BFS
---
<a href="http://poj.org/problem?id=3126" target="_blank">题目链接</a>

题意：从一个四位质数到另一个四位质数，每次只能改变一位的数字并且改变后的数字也是质数，数字不可以重复，为多少步。

思路：入口为40的BFS，剪枝如下：千位没有0，个位偶数的都不是质数。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int a, b;
bool vis[10005];
struct point{
    int n;
    int cnt;      //步数
};
bool judge(int x){   //是否为质数
    for(int i = 2; i &lt;= sqrt(x); i++)
        if(x%i == 0)
            return 0;
    return 1;
}
void bfs(){
    queue&lt;point&gt; q;
    point p1, p2;
    p1.cnt = 0;
    p1.n = a;
    vis[a] = 1;
    q.push(p1);
    while(!q.empty()){
        p1 = q.front();
        if(p1.n == b){
            cout &lt;&lt; p1.cnt &lt;&lt; endl;
            return;
        }
        q.pop();
        int ge = p1.n%10;          //个位
        int shi = (p1.n/10)%10;     //十位
        int bai = (p1.n/100)%10;     //百位
        int qian = p1.n/1000;     //千位
        for(int i = 1; i &lt; 10; i+=2){
            int w = p1.n-ge+i;
            if(w != p1.n && !vis[w] && judge(w)){
                vis[w] = 1;
                p2.n = w;
                p2.cnt = p1.cnt+1;
                q.push(p2);
            }
        }
        for(int i = 0; i &lt; 10; i++){
            int w = p1.n-shi*10+i*10;
            if(w != p1.n && !vis[w] && judge(w)){
                vis[w] = 1;
                p2.n = w;
                p2.cnt = p1.cnt+1;
                q.push(p2);
            }
        }
        for(int i = 0; i &lt; 10; i++){
            int w = p1.n-bai*100+i*100;
            if(w != p1.n && !vis[w] && judge(w)){
                vis[w] = 1;
                p2.n = w;
                p2.cnt = p1.cnt+1;
                q.push(p2);
            }
        }
        for(int i = 1; i &lt; 10; i++){
            int w = p1.n-qian*1000+i*1000;
            if(w != p1.n && !vis[w] && judge(w)){
                vis[w] = 1;
                p2.n = w;
                p2.cnt = p1.cnt+1;
                q.push(p2);
            }
        }
    }
    cout &lt;&lt; "Impossible" &lt;&lt; endl;
    return;
}
int main(){
    //freopen("a.txt", "r", stdin);
    int num; cin &gt;&gt; num;
    while(num--){
        scanf("%d %d", &a, &b);
        memset(vis, 0, sizeof(vis));
        bfs();
    }
    return 0;
}
</pre>
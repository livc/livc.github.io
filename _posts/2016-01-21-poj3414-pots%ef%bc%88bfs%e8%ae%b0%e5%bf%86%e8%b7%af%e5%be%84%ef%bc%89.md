---
title: POJ3414 Pots（BFS+记忆路径）
layout: post
permalink: /blog/34
categories:
  - 算法
tags:
  - BFS
---
<a href="http://poj.org/problem?id=3414" target="_blank">题目链接</a>

题意：输入a、b、c，a和b分别是两个杯子的容量。根据给的规则倒水，问如何倒水才能让其中一个杯子中水的体积等于c。

思路：BFS+保存路径。用结构体中的二维数组保存路径。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int a, b, c;
bool vis[105][105];
struct node{
    int a, b, step;
    char s[206][15];
};
void bfs(){
    queue&lt;node&gt; q;
    node n1, n2, n3;
    n1.a = 0; n1.b = 0; n1.step = 0;
    vis[0][0] = 1;
    q.push(n1);
    while(!q.empty()){
        n2 = q.front();
        q.pop();
        for(int i = 0; i &lt; 6; i++){
            if(i == 0){
                n3.a = a;
                n3.b = n2.b;
                strcpy(n3.s[n2.step], "FILL(1)");
            }
            if(i == 1){
                n3.a = n2.a;
                n3.b = b;
                strcpy(n3.s[n2.step], "FILL(2)");
            }
            if(i == 2){
                int cha = b-n2.b;
                if(n2.a &lt;= cha){
                    n3.a = 0;
                    n3.b = n2.b+n2.a;
                }else{
                    n3.a = n2.a-cha;
                    n3.b = b;
                }
                strcpy(n3.s[n2.step], "POUR(1,2)");
            }
            if(i == 3){
                int cha = a-n2.a;
                if(n2.b &lt;= cha){
                    n3.b = 0;
                    n3.a = n2.a+n2.b;
                }else{
                    n3.b = n2.b-cha;
                    n3.a = a;
                }
                strcpy(n3.s[n2.step], "POUR(2,1)");
            }
            if(i == 4){
                n3.a = 0;
                n3.b = n2.b;
                strcpy(n3.s[n2.step], "DROP(1)");
            }
            if(i == 5){
                n3.b = 0;
                n3.a = n2.a;
                strcpy(n3.s[n2.step], "DROP(2)");
            }

            for(int i = 0; i &lt; n2.step; i++){
                strcpy(n3.s[i], n2.s[i]);
            }
            n3.step = n2.step+1;
            if(n3.a == c || n3.b == c){
                cout &lt;&lt; n3.step &lt;&lt; endl;
                for(int i = 0; i &lt; n3.step; i++){
                    //cout &lt;&lt; "a: " &lt;&lt;n3.a &lt;&lt; " " &lt;&lt; "b:" &lt;&lt; n3.b &lt;&lt; endl;
                    cout &lt;&lt; n3.s[i] &lt;&lt; endl;
                }
                return;
            }

            if(!vis[n3.a][n3.b]){
                vis[n3.a][n3.b] = 1;
                q.push(n3);
            }

        }
    }
    cout &lt;&lt; "impossible" &lt;&lt; endl;
}
int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d %d %d", &a, &b, &c) != EOF){
        memset(vis, 0, sizeof(vis));
        bfs();
    }
    return 0;
}
</pre>
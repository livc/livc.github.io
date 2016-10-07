---
title: POJ1426 Find The Multiple（BFS）
layout: post
permalink: /30
categories:
  - 算法
tags:
  - BFS
---
<a href="http://poj.org/problem?id=1426" target="_blank">题目链接</a>

题意：输入一个数a，找出一个十进制数b，b由“0”和“1”组成并且b能整除a。

思路：BFS即可，方向只有两个，样例吓唬人，6时1110就可以，其实所有数据在long long范围内就能过。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
long long b;
long long bfs(){
    queue&lt;long long&gt; q;
    q.push(1);
    while(1){       //while(!q.empty()){ 就WA
        long long a = q.front();
        q.pop();
        if(a%b == 0)    return a;
        q.push(a*10);
        q.push(a*10+1);
    }
}
int main(){
    //freopen("a.txt", "r", stdin);
    while(cin &gt;&gt; b && b){
        cout &lt;&lt; bfs() &lt;&lt; endl;
    }
    return 0;
}
</pre>
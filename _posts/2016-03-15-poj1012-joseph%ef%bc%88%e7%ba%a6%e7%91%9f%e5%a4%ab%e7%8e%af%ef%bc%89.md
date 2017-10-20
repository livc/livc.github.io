---
title: POJ1012 Joseph（约瑟夫环）
layout: post
permalink: /blog/113
categories:
  - 算法
tags:
  - 约瑟夫环
---
<a href="http://poj.org/problem?id=1012" target="_blank">题目链接</a>

题意：k个好人k个坏人排成一行，求最小的m（每次杀第m个人）使所有坏人先被杀死。

将所有人编号0~2k-1，模拟每次杀人，杀人后将所有人重新排列（从第一个人编号为0开始），由于要先杀坏人，所以好人的编号应该是不变的。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
#include&lt;map&gt;
#include&lt;queue&gt;
#include&lt;stack&gt;
#include&lt;string&gt;
using namespace std;

int main(){
    //freopen("a.txt", "r", stdin);
    int k;
    int joseph[14];  //记录答案
    memset(joseph, -1, sizeof(joseph));
    while(~scanf("%d", &k) && k){
        if(joseph[k] != -1) cout &lt;&lt; joseph[k] &lt;&lt; endl;
        else{
            int n = 2*k; //总人数
            int ans[35]; //第i轮杀死人的编号
            ans[0] = 0;
            int m = k;  //枚举m，编号k的人是第一个坏人
            for(int i = 1; i &lt;= k; i++){ //i轮
                ans[i] = (ans[i-1]+m-1)%(n-i+1);  //模剩余的人数
                if(ans[i] &lt; k){
                    i = 0;
                    m++;
                }
            }
            joseph[k] = m;
            cout &lt;&lt; m &lt;&lt; endl;
        }
    }
    return 0;
}
</pre>
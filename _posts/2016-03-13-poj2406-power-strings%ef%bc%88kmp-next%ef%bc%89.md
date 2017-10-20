---
title: POJ2406 Power Strings（KMP next）
layout: post
permalink: /blog/110
categories:
  - 算法
tags:
  - KMP
  - 字符串
---
<a href="http://poj.org/problem?id=2406" target="_blank">题目链接</a>

题意：求一个字符串中长度最短的循环节的循环次数。

KMP中的next数组代表前缀与后缀相等的最长长度。

例如： a b a b a b

next:-1 0 0 1 2 3 4

next[n]==4,代表着，前缀与后缀相等的最长长度是4（abab），若 l%(l-next[l]) == 0 则证明存在循环节。

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
char a[1000005];
int nextt[1000005];

void kmp_pre(char x[],int m,int nextt[]){
    int i, j;
    j = nextt[0] = -1;
    i = 0;
    while(i &lt; m){
        while(-1!=j && x[i]!=x[j])
            j = nextt[j];
        nextt[++i] = ++j;
    }
}


int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%s", a) && a[0] != '.'){
        int l = strlen(a);
        kmp_pre(a, l, nextt);
        if(l%(l-nextt[l]) == 0){
            int ans = l/(l-nextt[l]);
            cout &lt;&lt; ans &lt;&lt; endl;
        }

        else cout &lt;&lt; "1" &lt;&lt; endl;
    }
    return 0;
}
</pre>
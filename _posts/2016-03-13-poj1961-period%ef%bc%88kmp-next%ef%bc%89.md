---
title: POJ1961 Period（KMP next）
layout: post
permalink: /109
categories:
  - 算法
tags:
  - KMP
  - 字符串
---
<a href="http://poj.org/problem?id=1961" target="_blank">题目链接</a>

<a href="http://livc95.cn/index.php/archives/670" target="_blank">POJ2406</a>的加强版，2406是求一个字符串中循环节次数，而这道题是输出所有前i个字符构成的字符串的循环节次数，所以在求next数组中，每求出一次就判断一次是否有循环节，如果有就输出。

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
int nextt[1000005], l;

void kmp_pre(char x[],int m,int nextt[]){
    int i, j;
    j = nextt[0] = -1;
    i = 0;
    while(i &lt; m){
        while(-1!=j && x[i]!=x[j])
            j = nextt[j];
        nextt[++i] = ++j;
        if(nextt[i]!=0 && i%(i-nextt[i]) == 0){
            int ans = i/(i-nextt[i]);
            cout &lt;&lt; i &lt;&lt; " " &lt;&lt; ans &lt;&lt; endl;
        }
    }
}


int main(){
    //freopen("a.txt", "r", stdin);
    int n, cas = 1;
    while(~scanf("%d", &n) && n){
        scanf("%s", a);
        printf("Test case #%d\n", cas++);
        kmp_pre(a, n, nextt);
        cout &lt;&lt; endl;
    }
    return 0;
}
</pre>
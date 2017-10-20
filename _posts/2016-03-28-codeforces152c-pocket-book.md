---
title: Codeforces152C Pocket Book
layout: post
permalink: /blog/125
categories:
  - 算法
tags:
  - 字符串
---
<a href="http://codeforces.com/problemset/problem/152/C" target="_blank">题目链接</a>

题意：给出n个字符串，每个长度都是m，可以交换任意两个串的任意长度的前缀，问所有能重新组成新的字符串的个数。

暴力搞

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stdio.h&gt;
#include&lt;string.h&gt;
char s[105][105];
int main(){
    int n, m;
    scanf("%d %d", &n, &m);
    for(int i = 0; i &lt; n; i++){
        scanf("%s", s[i]);
    }
    long long ans = 1, tem = 0;
    char a[30];
    for(int i = 0; i &lt; m; i++){
        memset(a, 0, sizeof(a));
        for(int j = 0; j &lt; n; j++){
            a[s[j][i]-'A']++;
            if(a[s[j][i]-'A'] == 1){
            tem++;
        }
    }
     //printf("%d %d\n", tem, ans);
        ans = ans*tem%1000000007;
        tem = 0;
    }
    printf("%d\n", ans);
    return 0;
}

</pre>
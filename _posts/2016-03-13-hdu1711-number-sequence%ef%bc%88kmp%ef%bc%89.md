---
title: HDU1711 Number Sequence（KMP）
layout: post
permalink: /blog/107
categories:
  - 算法
tags:
  - KMP
  - 字符串
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1711" target="_blank">题目链接</a>

KMP模版题，求子串第一次出现的位置

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
int n, m;
int next[10005];
int a[1000005], b[10005];

void kmp_pre(int x[],int m,int nextt[]){
    int i, j;
    j = nextt[0] = -1;
    i = 0;
    while(i &lt; m){
        while(-1!=j && x[i]!=x[j])
            j = nextt[j];
        nextt[++i] = ++j;
    }
}

int KMP_Index(int x[], int m, int y[], int n){
    int i = 0, j = 0;
    kmp_pre(x, m, nextt);
    while(i &lt; n && j &lt; m){
        if(j == -1 || y[i] == x[j]){
            i++; j++;
        }
        else
            j = nextt[j];
    }
    if(j == m)
        return i-m;
    else
        return -1;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    while(t--){
        int tem;
        scanf("%d %d", &n, &m);
        for(int i = 0; i &lt; n; i++){
            scanf("%d", &a[i]);
        }
        for(int i = 0; i &lt; m; i++){
            scanf("%d", &b[i]);
        }
        int ans = KMP_Index(b, m, a, n);
        if(ans == -1) cout &lt;&lt; "-1" &lt;&lt; endl;
        else cout &lt;&lt; ans+1 &lt;&lt; endl;
    }
    return 0;
}

</pre>
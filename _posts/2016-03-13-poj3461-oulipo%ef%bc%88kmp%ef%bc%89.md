---
title: POJ3461 Oulipo（KMP）
layout: post
permalink: /blog/111
categories:
  - 算法
tags:
  - KMP
  - 字符串
---
<a href="http://poj.org/problem?id=3461" target="_blank">题目链接</a>

KMP模版题，求子串出现次数。

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
int next[10005];
char a[10005], b[1000005];
void kmp_pre(char x[],int m,int next[]){
    int i, j;
    j = next[0] = -1;
    i = 0;
    while(i &lt; m){
        while(-1!=j && x[i]!=x[j])
            j = next[j];
        next[++i] = ++j;
    }
}

int KMP_Count(char x[], int m, char y[], int n){//x是模式串， y是主串
    int i, j;
    int ans = 0;
    //preKMP(x,m,next);
    kmp_pre(x, m, next);
    i = j = 0;
    while(i&lt;n){
        while(-1!=j && y[i]!=x[j])
            j = next[j];
        i++;
        j++;
        if(j&gt;=m){
            ans++;
            j = next[j];
        }
    }
    return ans;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    while(t--){
        scanf("%s %s", a, b);
        cout &lt;&lt; KMP_Count(a, strlen(a), b, strlen(b)) &lt;&lt; endl;
    }
    return 0;
}
</pre>
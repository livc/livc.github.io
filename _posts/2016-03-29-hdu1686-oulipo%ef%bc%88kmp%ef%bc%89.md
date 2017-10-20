---
title: HDU1686 Oulipo（KMP）
layout: post
permalink: /blog/128
categories:
  - 算法
tags:
  - KMP
  - 字符串
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1686" target="_blank">题目链接</a>

KMP裸题，求子串出现的次数。

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

int nextt[10010];

void preKMP(char x[], int m, int kmpNext[]){
    int i, j;
    j = kmpNext[0] = -1;
    i = 0;
    while(i&lt;m){
        while(-1!=j && x[i]!=x[j])
            j = kmpNext[j];
        if(x[++i] == x[++j])
            kmpNext[i] = kmpNext[j];
        else kmpNext[i] = j;
    }
}

int KMP_Count(char x[], int m, char y[], int n){
    int i, j;
    int ans = 0;
    preKMP(x,m,nextt);
    i = j = 0;
    while(i&lt;n){
        while(-1!=j && y[i]!=x[j])
            j = nextt[j];
        i++;
        j++;
        if(j&gt;=m){
            ans++;
            j = nextt[j];
        }
    }
    return ans;
}


int main(){
    //freopen("a.txt", "r", stdin);
    int n; cin &gt;&gt; n;
    while(n--){
        char a[10010], b[1000005];
        scanf("%s %s", a, b);
        cout &lt;&lt; KMP_Count(a, strlen(a), b, strlen(b)) &lt;&lt; endl;
    }
    return 0;
}
</pre>
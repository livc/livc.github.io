---
title: HDU1556 Color the ball（树状数组 区间更新）
layout: post
permalink: /82
categories:
  - 算法
tags:
  - 树状数组
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1556" target="_blank">题目链接</a>

中文题。

对于每次对[a, b]的涂色，做如下更新：add(a, 1)和add(b+1, -1)。前缀和就代表了涂色次数。

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
int n;
int a[100005];
int lowbit(int x){
    return x&(-x);
}
void add(int pos , int num){
    while(pos &lt;= n){
        a[pos] += num;
        pos += lowbit(pos);
    }
}
int sum(int n){
    int sum = 0;
    while(n &gt; 0){
        sum += a[n];
        n -= lowbit(n);
    }
    return sum;
}
int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%d", &n) && n){
        memset(a, 0, sizeof(a));
        for(int j = 0; j &lt; n; j++){
            int x, y;
            scanf("%d %d", &x, &y);
            add(x, 1);
            add(y+1, -1);
        }
        for(int i = 1; i &lt;= n; i++){
            cout &lt;&lt; sum(i);
            if(i != n) cout &lt;&lt; " ";
        }
        cout &lt;&lt;endl;
    }

    return 0;
}

</pre>
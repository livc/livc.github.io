---
title: HDU1029 Ignatius and the Princess IV
layout: post
permalink: /blog/55
categories:
  - 算法
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1029" target="_blank">题目链接</a>

题意：给n（奇数）个数，找到一个数，这个数最少出现（n+1）/ 2次。

sort一下输出中间位置的数就可以了。。看讨论版有map搞的，有DP的。。。根本不需要。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
using namespace std;
int a[1000000];
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(scanf("%d", &n) != EOF){
        for(int i = 0; i &lt; n; i++){
            scanf("%d", &a[i]);
        }
        sort(a, a+n);
        int ans = (n+1)/2;
        cout &lt;&lt; a[ans] &lt;&lt; endl;
    }
    return 0;
}
</pre>
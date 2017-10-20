---
title: 'NEU1403 XL&#8217;s Math Problem II（数学）'
layout: post
permalink: /blog/57
categories:
  - 算法
tags:
  - 数学
---
<img src="https://i1.wp.com/ww4.sinaimg.cn/large/9cd77f2ejw1f12gzubcjyj20k30k7jrr.jpg?resize=723%2C727" class="aligncenter" data-recalc-dims="1" />

<a href="http://acm.neu.edu.cn/hustoj/problem.php?id=1403" target="_blank">题目链接</a>

题意：求[n/1]+[n/2]+[n/3]+..+[n/n]。

直接暴力会超时，我们采用枚举商的做法。

以n=15为例，

i 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
  
n/i 15 7 5 3 3 2 2 1 1 1 1 1 1 1 1

用l和r来代表每次枚举商的两侧端点，不断更新。找找规律就好。

比如说一开始l=r=n，n/2=7，更新l为7，那么r-l这段内是同一个数，这个数是n/(l+1).
  
除以2之后应该除以什么呢？这个地方是关键，经过观察应是这个除数应是n/l+1。因为只有这样才能保证l最后一直更新到1。

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

int main(){
    //freopen("a.txt", "r", stdin);
    int n, t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        scanf("%d", &n);
        long long l = n, r = n, ans = 0, x = 2;
        while(l != 1){
            l = n/x;
            x = n/l+1;
            ans += (n/(l+1))*(r-l);
            r = l;
            //cout &lt;&lt; ans &lt;&lt; endl;
        }

        printf("Case%d: %lldn", cas, ans+n);
    }
    return 0;
}
</pre>
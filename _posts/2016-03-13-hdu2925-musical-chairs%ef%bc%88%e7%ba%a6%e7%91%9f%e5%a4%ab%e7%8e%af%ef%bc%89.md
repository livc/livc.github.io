---
title: HDU2925 Musical Chairs（约瑟夫环）
layout: post
permalink: /108
categories:
  - 算法
tags:
  - 约瑟夫环
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2925" target="_blank">题目链接</a>

约瑟夫环：n个人（编号0~(n-1))，从0开始报数，报到(m-1)的退出，剩下的人继续从0开始报数。求胜利者的编号。

为取模方便，假设下标从0开始，倒推分析：
  
假设该轮有n个人，那么上一轮(n+1)人，编号为0的人上一轮编号为k，也即编号为f[n]的人上一轮编号为(f[n]+k)%(n+1)。
  
我们知道最后剩下的人在最后一轮编号肯定为0，那么这样不断倒推就可以推出其在第一轮的编号，也即他本来的编号。

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
int f[1000005];
int main(){
    //freopen("a.txt", "r", stdin);
    int n, m;
    while(~scanf("%d%d", &n, &m) && n && m){
        f[1] = 0;
        for(int i = 2; i &lt;=n; i++){
            f[i] = (f[i-1]+m)%i;
        }
        cout &lt;&lt; n &lt;&lt; " " &lt;&lt; m &lt;&lt; " " &lt;&lt; f[n]+1 &lt;&lt; endl;
    }
    return 0;
}
</pre>
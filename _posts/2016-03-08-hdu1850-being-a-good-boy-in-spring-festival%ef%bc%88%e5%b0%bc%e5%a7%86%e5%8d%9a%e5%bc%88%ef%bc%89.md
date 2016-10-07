---
title: HDU1850 Being a Good Boy in Spring Festival（尼姆博弈）
layout: post
permalink: /92
categories:
  - 算法
tags:
  - 博弈
  - 尼姆博弈
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1850" target="_blank">题目链接</a>

中文题。

当尼姆游戏的某个位置：（x1,x2,x3），当且仅当其x1⊕x2⊕x3 = 0（也就是各部分的异或为0）)当前位置为必败点，这对于多个堆的情况同样适用。

我们先求出所有堆异或后的值，再用这个值去对每一个堆进行异或，令res = x1⊕sum(sum为所有堆的或异值)（这时相当于没有考虑x1这堆）
  
如果res < x1的话，当前玩家就从x1中取走（x1-res）个，使x1剩下res这样必然导致所有的堆的异或值为0，也就是必败点，这就是一种方案 遍历每一个堆，进行上面的断判就可以得到总的方案数。 注意一个必败点不可能导致另一个必败点，因为如果这样的话当前这个必败点就不是必败点了，所以这里对于每个堆的操作至多只有一种方法可以导败必败点，如果res > x1的话就无论从这个堆取走多少都不可能导致必败点。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int a[102];
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(cin &gt;&gt; n && n){
        int sum = 0;
        for(int i = 0; i &lt; n; i++){
            scanf("%d", &a[i]);
            sum ^= a[i];
        }
        int s, ans = 0;
        for(int i = 0; i &lt; n; i++){
            s = sum^a[i];
            if(s&lt;a[i]) ans++;
        }
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
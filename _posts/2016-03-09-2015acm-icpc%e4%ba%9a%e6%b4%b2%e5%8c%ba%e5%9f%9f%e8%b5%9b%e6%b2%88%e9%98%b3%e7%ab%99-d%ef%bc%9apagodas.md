---
title: 2015ACM-ICPC亚洲区域赛沈阳站 D：Pagodas
layout: post
permalink: /94
categories:
  - 算法
tags:
  - 2015沈阳
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=5512" target="_blank">题目链接</a>

题意：N个点，刚开始给出两个点a，b(a != b) ，有两个人玩一个游戏，游戏规则如下：每次只能选择a + b或a - b或b -a的中的任意一个没被选中的符合[1,n]的点 。问最后谁一个点也选不了了。

能被选的点其实只有n / GCD(a,b)，因为初始的a和b决定了塔的间距，最后只要判奇偶即可。

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;cstdio&gt;
#include &lt;cstring&gt;
#include &lt;algorithm&gt;

using namespace std;

int gcd(int a, int b){
    return b == 0 ? a : gcd(b, a % b);
}

int main(){
    int cas;
    scanf("%d", &cas);
    for (int t = 1; t &lt;= cas; t++) {
        int n, a, b;
        scanf("%d%d%d", &n, &a, &b);
        int d = n / gcd(a, b);
        printf("Case #%d: %s\n", t, d&1 ? "Yuwgna" : "Iaka");
    }
    return 0;
}
</pre>
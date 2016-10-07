---
title: 2015ACM-ICPC亚洲区域赛EC-Final M：November 11th
layout: post
permalink: /68
categories:
  - 算法
tags:
  - 2015ecfinal
---
<a href="https://icpcarchive.ecs.baylor.edu/external/75/p7512.pdf" target="_blank">题目PDF下载</a>

题意：R*S的电影院座位图，B个坏掉的座位。所有人的左右两侧不能有人，问整个影院最多坐多少人，最少坐多少人。

对每一行单独处理。
  
最大值是两个人隔着坐，如果有一段连续的区间长度是L，那么最大值是ceil(L/2)。
  
最小值是一个人可以占连续的三个位置，那么最小值就是ceil(L/3)。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        int r, s, rr, ss;
        scanf("%d%d", &r, &s);
        int pic[r][s];
        memset(pic, 0, sizeof(pic));
        int b;
        scanf("%d", &b);
        while(b--){
            scanf("%d%d", &rr, &ss);
            pic[rr][ss] = 1;
        }
        int cnt = 0, maxx = 0, minn = 0;
        for(int i = 0; i &lt; r; i++){
            for(int j = 0; j &lt; s; j++){
                if(pic[i][j] == 0){
                    cnt++;
                }
                if(pic[i][j] != 0 || (pic[i][j] == 0 && j == s-1)){
                    maxx += ceil(1.0*cnt/2);
                    minn += ceil(1.0*cnt/3);
                    cnt = 0;
                }
            }
        }
        printf("Case #%d: %d %dn", cas, maxx, minn);
    }
    return 0;
}
</pre>
---
title: Codeforces631B Print Check
layout: post
permalink: /blog/80
categories:
  - 算法
---
<a href="http://codeforces.com/contest/631/problem/B" target="_blank">题目链接</a>

题意：query 1是把某行涂成一个色，2是把一列涂成一个色，后涂的颜色覆盖前面的颜色。

一次遍历就可以解决，对于每个点，比较行列颜色的顺序，输入顺序大的那个的颜色。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int n, m, k;
int r1[5005], c1[5005];  //i行（列）的颜色
int r1rank[5005], c1rank[5005]; //涂色顺序
int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d%d%d", &n, &m, &k) != EOF){
        memset(c1, 0, sizeof(c1));
        memset(r1rank, 0, sizeof(r1rank));
        memset(c1rank, 0, sizeof(c1rank));
        memset(r1, 0, sizeof(r1));
        for(int i =1 ; i&lt;=k;i++){
            int a, b ,c;
            scanf("%d%d%d", &a, &b, &c);
            //cout &lt;&lt; a &lt;&lt; b &lt;&lt; c &lt;&lt;endl;
            if(a == 1){
                r1[b] = c;
                r1rank[b] = i;
            }else if(a==2){
                c1[b] = c;
                c1rank[b] = i;
            }
        }
        for(int i = 1; i &lt;= n; i++){
            for(int j = 1; j &lt;= m; j++){
                if(r1rank[i] &gt; c1rank[j])
                    cout &lt;&lt; r1[i];
                else cout &lt;&lt; c1[j];
                //cout &lt;&lt; pic[i][j];
                if(j != m) cout &lt;&lt; " ";
            }
            cout &lt;&lt; endl;
        }

    }
    return 0;
}
</pre>
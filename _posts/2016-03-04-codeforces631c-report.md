---
title: Codeforces631C Report
layout: post
permalink: /81
categories:
  - 算法
---
<a href="http://www.codeforces.com/contest/631/problem/C" target="_blank">题目链接</a>

题意：对于给定的一列数，根据输入顺序对前x个数进行小于等于或大于等于的排序。

加入分别需要排前2，3，4个数，那么保留4就可以，2和3的排序对结果没有影响。所以最后需要把输入变成一个递减序列，如输入是2 3 4 2 7 6 ，那么最后只要按照 7 6的顺序排序就可以。
  
得到递减序列后，排序也可以优化。以上面数据为例，再用一个新的数组b将前7个数从小到大排序，用bl和br分别代表区间的最小值和最大值，通过移动bl、br就可以一遍完成所有排序。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int a[200005], t[200005];  //分别代表最终的递减序列和其query（1或2）
int n, m;
int num[200005]; //输入的数据
int b[200005]; //需要排序的前x个数从小到大的排序
int len; //最终递减序列长度

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d%d", &n, &m) != EOF){
        for(int i = 1; i &lt;= n; i++){
            scanf("%d", &num[i]);
            b[i] = num[i];
        }
        int len = 1, x, y;
        a[0] = 0;
        for(int i = 1; i &lt;= m; i++){
            scanf("%d%d", &t[i], &y);
            while(len&gt;1 && y&gt;=a[len-1])
                len--;
            a[len] = y;
            t[len++] = t[i];

        }
        int bl = 1, br = a[1];
        sort(b+1, b+1+br);
        num[0] = 0;
        a[len] = 0;
        for(int i = 1; i &lt; len; i++){
            for(int j = a[i]; j &gt; a[i+1]; j--){
                if(t[i] == 1){
                    num[j] = b[br--];
                }else{
                    num[j] = b[bl++];
                }
            }
        }
        for(int i = 1; i &lt;= n; i++){
            cout &lt;&lt; num[i];
            if(i!=n) cout &lt;&lt; " ";
        }
        cout &lt;&lt; endl;
    }
    return 0;
}
</pre>
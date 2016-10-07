---
title: Codeforces651B Beautiful Paintings
layout: post
permalink: /116
categories:
  - 算法
---
<a href="http://codeforces.com/contest/651/problem/B" target="_blank">题目链接</a>

题意：给出n个数，随意排列使相邻的两个数右边大于左边的数对最多。

先排序，然后把每个数字出现的次数放入一个新的数组b，再排序。
  
假如b数组排序后是1 3 4 5，每次都以最小的为基准选出1*4个数（三对，ans+=3），然后剩为1-1，3-1，4-1，5-1即2， 3， 4，以此类推。

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
int a[1005];
int b[1005];
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(~scanf("%d", &n)){
        a[0] = -1;
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &a[i]);
        sort(a+1, a+1+n);
        int ans = 0, cnt = 0, k = 1;
        for(int i = 1; i &lt;= n; i++){
            if(a[i]!=a[i-1] && i!=1){
                b[k++] = cnt;
                cnt = 1;
            }else{
                cnt++;
            }
            if(i==n)
                b[k++] = cnt;
        }
        //for(int i = 1; i &lt; k; i++) cout &lt;&lt; b[i] &lt;&lt; endl;
        b[0] = 0;
        sort(b, b+k);
        int w = k-2;
        for(int i = 1; i &lt; k; i++){
            ans += (w--)*(b[i]-b[i-1]);
        }
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
---
title: 'POJ2559 &#038;&#038; POJ2082（单调栈）'
layout: post
permalink: /blog/40
categories:
  - 算法
tags:
  - STL
---
<a href="http://poj.org/problem?id=2559" target="_blank">POJ2559题目链接</a>

题意：求出一些小矩形组成的图片的最大矩形面积。

思路：设所求矩形为L，枚举L的右边界，在每次枚举中再枚举L的高度。通过一个单调栈（不减）来实现。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int h[100555];
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(scanf("%d", &n)!=EOF && n){
        stack&lt;int&gt; s;
        for(int i = 1; i &lt;=n; i++)
            scanf("%d", &h[i]);
        s.push(0);
        h[n+1] = 0;
        long long ans =0;
        for(int i = 1; i &lt;=n+1; i++){
            while(h[i] &lt; h[s.top()]){
                int a = h[s.top()];
                s.pop();
                int b = i-s.top()-1;
                long long tem = (long long)a*b;
                if(ans &lt; tem)
                    ans = tem;
            }
            s.push(i);
        }
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>

WA了几发的原因是，当s.top()作为所求矩形高时，所求矩形的长不是从这个矩形到i的长度，而应该是栈中前一个元素的右边的矩形到i的长度。

<a href="http://poj.org/problem?id=2082" target="_blank">POJ2082题目链接</a>

一样的题，只不过长不是1了，是给定的。
  
看讨论版有人说O（n^2）也能过，果断暴力了一发，然后T了，老老实实的写单调栈。。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;map&gt;
#include&lt;stack&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int h[50005];
int l[50005];
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    while(scanf("%d", &n)!=EOF && n!=-1){
        int ans = 0;
        l[0] = 0;
        for(int i = 1; i &lt;= n; i++){
            int f;
            scanf("%d%d", &f, &h[i]);
            l[i] = l[i-1]+f;
        }
        //for(int i = 1; i &lt;= n; i++)cout &lt;&lt; l[i] &lt;&lt; endl;
        stack&lt;int&gt; s;
        s.push(0);
        h[++n] = 0;
        for(int i = 1; i &lt;= n; i++){
            while(h[i] &lt; h[s.top()]){
                int a = h[s.top()];
                s.pop();
                int b = l[i-1]-l[s.top()];
                int tem = a*b;
                //cout &lt;&lt; "a:" &lt;&lt;a &lt;&lt; "b:" &lt;&lt; b &lt;&lt;endl;
                //cout &lt;&lt; tem &lt;&lt;endl;
                if(tem &gt; ans)
                    ans = tem;
            }
            s.push(i);
        }

        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}

</pre>
---
title: POJ2456 Aggressive cows（二分+贪心）
layout: post
permalink: /blog/73
categories:
  - 算法
tags:
  - 二分
  - 贪心
---
<a href="http://poj.org/problem?id=2456" target="_blank">题目链接</a>

题意：给定n个农舍的位置和m头牛，每头牛放到不同的农舍使得任意两头牛距离的最小值最大。

二分距离然后贪心遍历判断是否能够取到。

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
int a[100005];
int n, c;
bool judge(int x){
    int cnt = 0;
    int l = 1, r = 2;
    int flag = 0;
    while(l&lt;n){
        int cha = a[r]-a[l];
        if(cha&gt;=x){
            if(l == flag)
                cnt++;
            else cnt += 2;
            flag = r;
            l = r;
            r = l+1;
        }else{
            r++;
            if(r&gt;n)
                break;
        }
    }
//cout &lt;&lt; cnt &lt;&lt; endl;
    if(cnt &gt;= c)
        return 1;
    return 0;

}

int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d%d", &n, &c) != EOF){
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &a[i]);
        sort(a+1, a+1+n);

        a[0] = 0;
        int l = 0, r = a[n];

        while(l&lt;=r){
            int mid = l+(r-l)/2;
            if(judge(mid))
                l = mid+1;
            else r = mid-1;
        }
        cout &lt;&lt; r &lt;&lt; endl;
    }
    return 0;
}
</pre>
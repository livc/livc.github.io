---
title: POJ2828 Buy Tickets（树状数组高级应用：sumseek）
layout: post
permalink: /blog/89
categories:
  - 算法
tags:
  - 树状数组
---
<a href="http://poj.org/problem?id=2828" target="_blank">题目链接</a>

题意：n个人排队，接下来n行每行第一个数是这个人的位置，第二个数是他的value（没卵用）。后来的人如果他的位置已经有人的话，所有他后面的人都向后移动1，也就是插队的感觉。求最后这些人的顺序。

最后一个人的位置肯定不会变，因为是最后插入的，所以后来的人的位置只受前面的人影响，因此从后往前考虑的话，第i个人的位置就是第pos+1个空位。将树状数组初始化为1，来人的话-1，用sumseek函数找到插入位置。

<pre class="brush: cpp; title: ; notranslate" title="">//寻找前缀和为k的第一个位置
int sumseek(int k){
    int ans = 0, sum = 0, i;
    for(i = 18; i &gt;= 0; i--){
        ans += (1 &lt;&lt; i);
        if (ans &gt;= n || sum + a[ans] &gt;= k) ans -= (1 &lt;&lt; i);
        else sum += a[ans];
    }
    return ans+1;
}
</pre>

第一次知道树状数组还可以这么玩。。

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
int n;
struct node{
    int pos, num;
}N[200005];

int a[200005];
int ans[200005];

int lowbit(int x){
    return x&(-x);
}

void add(int pos, int num){
    while(pos &lt;= n){
        a[pos] += num;
        pos += lowbit(pos);
    }
}

int sum(int n){
    int sum = 0;
    while(n &gt; 0){
        sum += a[n];
        n -= lowbit(n);
    }
    return sum;
}

int sumseek(int k){
    int ans = 0, sum = 0, i;
    for(i = 18; i &gt;= 0; i--){
        ans += (1 &lt;&lt; i);
        if (ans &gt;= n || sum + a[ans] &gt;= k) ans -= (1 &lt;&lt; i);
        else sum += a[ans];
    }
    return ans+1;
}


int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%d", &n)){
        //memset(a, 0, sizeof(a));
        for(int i = 1; i &lt;= n; i++){
            int w; scanf("%d %d", &w, &N[i].num);
            N[i].pos = w+1;
            add(i, 1);
        }

        for(int i = n; i &gt;= 1; i--){
            int k = sumseek(N[i].pos);
            ans[k] =N[i].num;
            add(k, -1);
        }
        for(int i = 1; i &lt;= n; i++){
            cout &lt;&lt; ans[i];
            if(i!=n) cout &lt;&lt; " ";
        }
        cout &lt;&lt; endl;
    }
    return 0;
}
</pre>

如果不知道sumseek函数的话，只能二分找到插入的位置了。
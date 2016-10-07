---
title: HDU2266 How Many Equations Can You Find（DFS）
layout: post
permalink: /16
categories:
  - 算法
tags:
  - DFS
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2266" target="_blank">题目链接</a>

题意：在一组数中添加加号或减号使结果等于指定的数。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;bits/stdc++.h&gt;
using namespace std;
long long n, ans, len;
char s[20];
void dfs(long long x, long long sum){ //第x位 当前和sum
    if(x == len){
        if(sum == n)
            ans++;
        return;
    }
    long long k = 0;
    for(int i = x; i &lt; len; i++){
        k = k*10 + s[i] -'0';
        dfs(i+1, sum+k);
        if(x)
            dfs(i+1, sum-k);
    }
}
int main(){
    while(scanf("%s %lld", s, &n) != EOF){
        ans = 0;
        len = strlen(s);
        dfs(0, 0);
        cout &lt;&lt; ans &lt;&lt; endl;
    }
    return 0;
}
</pre>
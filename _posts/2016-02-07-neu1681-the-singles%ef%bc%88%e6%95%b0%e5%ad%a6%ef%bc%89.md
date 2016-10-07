---
title: NEU1681 The Singles（数学）
layout: post
permalink: /42
categories:
  - 算法
tags:
  - 数学
---
<a href="http://acm.neu.edu.cn/hustoj/problem.php?id=1681" target="_blank">题目链接</a>

题意：输入a，输出最小的n个1组成的数，使这个数能整除a（如果存在）。

思路：不断对余数乘以10+1，直到余数已经出现停止（不存在），或者能整除（存在）。

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
int a[1000005], n;
int main(){
    //freopen("a.txt", "r", stdin);
    while(scanf("%d", &n) != EOF){
        memset(a, 0, sizeof(a));
        int ans = 1;
        int cnt = 1;
        int flag = 0;
        while(ans%n != 0){
            int t = ans%n;
            cnt++;
            ans = t*10+1;
            if(a[t]){
                flag = 1;
                break;
            }
            a[t] = 1;
        }
        if(flag) cout &lt;&lt; "There is no Singles' Day!" &lt;&lt; endl;
        else{
            cout &lt;&lt; "Singles' Day is on ";
            for(int i = 0; i &lt; cnt; i++) cout &lt;&lt; "1";
            cout &lt;&lt; "." &lt;&lt;endl;
        }
    }
    return 0;
}
</pre>
---
title: NEU1595 Permutation Problem
layout: post
permalink: /blog/45
categories:
  - 算法
---
<a href="http://acm.neu.edu.cn/hustoj/problem.php?id=1595" target="_blank">题目链接</a>

题意：1~n n个数的全排列，输入其中两组数，输出rank差。

思路：预处理每位上一个数字所出现次数，然后对于输入的数，第i位前面有x个小于a[i]的数，a[i]-=x.（结果代表个数），做差计算。

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
const int mod = 1e6+7;
int a[105], a1[105], b[105], b1[105], n, ans, num[105];
void init(){
    num[0] = 1;
    for(int i = 1; i &lt;= 105; i++){
        num[i] = num[i-1]*i;
        num[i] %= mod;
    }
}
int fxxk(int a1[], int a[]){
    for(int i = 0; i &lt; n; i++){
        scanf("%d", &a1[i]);
        a[i] = a1[i];
    }
    for(int i = 0; i &lt; n; i++){
        for(int j = 0; j &lt; i; j++){
            if(a1[j] &lt; a1[i])
                a[i]--;
        }
    }
}

int main(){
    //freopen("a.txt", "r", stdin);
    int T;cin&gt;&gt;T;
    init();
    for(int cas = 1; cas &lt;= T; cas++){
        scanf("%d", &n);
        memset(a, 0, sizeof(a));
        memset(b, 0, sizeof(b));
        fxxk(a1, a);
        fxxk(b1, b);
        ans = 0;
        //确定rank大的减去rank小的
        int flag = 0;
        for(int i = 0; i &lt; n; i++){
            if(a[i] &gt; b[i]){
                flag = 1;
                break;
            }
            if(a[i] &lt; b[i]){
                flag = 0;
                break;
            }
        }
        for(int i = 0; i &lt; n; i++){
            if(flag)
            a[i] -= b[i];
            else a[i] = (b[i]-a[i]);
            if(a[i] != 0){
                ans += a[i]*num[n-i-1];
                ans %= mod;
            }
        }
        //rank确定的情况下，结果一定应该是正的，如果是负的，加上mod再取模。
        ans += mod;
        ans %= mod;
        printf("Case $%d:n%dn", cas, ans);
    }
    return 0;
}
</pre>
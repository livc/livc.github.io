---
title: HDU5651 xiaoxin juju needs help（逆元）
layout: post
permalink: /124
categories:
  - 算法
tags:
  - 数学
  - 逆元
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=5651" target="_blank">题目链接</a>

题意：随意打乱顺序，求能构成回文串的个数。

判断一下能计算的条件，方法是strlen(l)/2的阶乘除以每个字母出现次数一半的阶乘的积。

逆元：在MOD的情况下， （a/b ) %MOD 不能直接 / b 来求，需要找到一个数 inv 使得 inv \* b % MOD = 1 。 这样 (a / b) % MOD = (a \* inv) % MOD;

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
const long long mod = 1e9+7;
long long a[1005];
int cnt[30];
void init(){
    a[0] = 1;
    a[1] = 1;
    for(int i = 2; i &lt;= 1000; i++)
        a[i] = (i*a[i-1])%mod;
}
long long quickmod(long long a, long long n){
    long long r = 1;
    while(n){
        if(n&1){
            r = (a*r)%mod;
        }
        a = (a*a)%mod;
        n &gt;&gt;= 1;
    }
    return r;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int n; cin &gt;&gt; n;
    init();
    while(n--){
//        v.clear();
        char s[1005];
        scanf("%s", s);
        memset(cnt, 0, sizeof(cnt));
        int l = strlen(s);
        for(int i = 0; i &lt; l; i++){
            cnt[s[i]-'a']++;
        }
        int k = 0;
        for(int i = 0; i &lt; 26; i++){
            if(cnt[i]%2) k++;
        }
        if(l==1) cout &lt;&lt; "1" &lt;&lt; endl;
        else if((k==1 && l%2==1) || (l%2==0 && k==0)){
            long long ans = a[l/2];
            //cout &lt;&lt; ans &lt;&lt; endl;
            for(int i = 0; i &lt; 26; i++){
                ans = (ans*quickmod(a[cnt[i]/2], mod-2))%mod;
                //cout &lt;&lt; ans &lt;&lt; endl;
            }

            cout &lt;&lt; ans &lt;&lt; endl;
        }else{
            cout &lt;&lt; "0" &lt;&lt; endl;
        }
    }
    return 0;
}

</pre>
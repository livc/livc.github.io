---
title: 2015ACM-ICPC亚洲区域赛沈阳站 F：Frogs（容斥）
layout: post
permalink: /blog/104
categories:
  - 算法
tags:
  - 2015沈阳
  - 数学
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=5514" target="_blank">题目链接</a>

题意： m个石头标记0~m-1，然后n个青蛙开始都在石头0上，每个青蛙每次跳x块石头，求最后能被青蛙跳上去的石头的值的和。

首先注意到每只青蛙每次跳的石头号为gcd(x, m)，然后把m的所有因子（最多log2（m）个）拿出来，设temp为每个gcd，将因子中每个temp的倍数都标记为1，然后再用num数组代表某个因数被跳跃的次数。

注意一下由于0~m-1，所以m这个数不会被跳上去（其实是0）。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
long long p[10005];
long long num[10005];//被加了几次
long long vis[10005];
int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        long long ans = 0;
        memset(vis, 0, sizeof(vis));
        memset(num, 0, sizeof(num));
        long long m, n;
        scanf("%lld %lld", &n, &m);
        int cnt = 0;
        //取出m的所有因子
        for(int i = 1; i &lt;= sqrt(m); i++){
            if(m%i == 0){
                p[cnt++] = i;
                if(i*i != m)
                    p[cnt++] = m/i;
            }
        }
        sort(p, p+cnt);
        //对于每个青蛙跳跃的步数分别求出gcd，然后在因子中标记gcd的倍数为1
        for(int i = 0; i &lt; n; i++){
            long long q;
            scanf("%lld", &q);
            int tem = __gcd(q, m);
            for(int j = 0; j &lt; cnt; j++){
                if(p[j]%tem == 0)
                    vis[j] = 1;
            }
        }

        vis[cnt-1] = 0;  //由于0~m-1，所以没有m这个数

        for(int i = 0; i &lt; cnt; i++){
            if(vis[i] != num[i]){
                ans += m*(p[i]+m)/p[i]/2*(vis[i]-num[i]); //若p[i]=2,则求2+4+6+…+m的和
                for(int j = i+1; j &lt; cnt; j++)
                    if(p[j]%p[i] == 0)
                        num[j] += (vis[i]-num[i]);  //更新未计算的num的值
            }
        }
        printf("Case #%d: %lld\n", cas, ans);
    }
    return 0;
}
</pre>
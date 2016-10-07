---
title: NEU1252 AND operation at intervals（线段树或二进制）
layout: post
permalink: /11
categories:
  - 算法
tags:
  - 二进制
  - 线段树
---
<a href="http://acm.neu.edu.cn/hustoj/problem.php?id=1252" target="_blank">题目链接</a>

题意：判断区间内的与和，OJ中题目描述貌似有问题。

题解：
  
第一种方法：线段树搞即可，注意longlong和输出格式。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stdio.h&gt;
#include&lt;string.h&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
#define lson l,m,rt&lt;&lt;1
#define rson m+1,r,rt&lt;&lt;1|1
const long long maxn = 1e5+10;
long long value[maxn&lt;&lt;4+1];

void PushUp (long long rt){
    long long a = rt&lt;&lt;1;
    long long b = rt&lt;&lt;1|1;
    if(value[a] == -1)
        value[rt] = value[b];
    else if(value[b] == -1)
        value[rt] = value[a];
    else
    value[rt] = value[a] & value[b];
}

void build(long long l,long long r, long long rt){
    if(l == r){
        scanf("%lld", &value[rt]);
        return;
    }
    long long m = l + (r-l)/2;
    build(lson);
    build(rson);
    PushUp(rt);
}

long long query(long long L,long long R,long long l,long long r,long long rt){
    if(L &lt;= l && R &gt;= r)    return value[rt];
    long long m = l + (r-l)/2;
    long long ans = -1;
    if(L &lt;= m){
        if(ans == -1){
            ans = query(L, R, lson);
        }else ans &= query(L, R, lson);
    }

    if(R &gt; m){
        if(ans == -1){
            ans = query(L, R, rson);
        }else ans &= query(L, R, rson);
    }
    return ans;
}

int main(){
    long long n, m;
    while(scanf("%lld %lld", &n, &m) != EOF){
        memset(value, -1, sizeof(value));
        build(1, n, 1);
        for(int j = 1; j &lt;= m; j++){
            long long a, b;
            scanf("%lld %lld", &a, &b);
            //flag = 1;
            printf("%lldn", query(a, b, 1, n, 1));
        }
        printf("n");
    }
    return 0;
}
</pre>

第二种方法：&运算，二进制位都是1，结果为1，否则为0。因此我们可以存储所有位的二进制前缀和。若前缀和做差正好等于区间长度，则这位是1，否则是0。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;stdio.h&gt;
#include&lt;string.h&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
long long a[100005];
int sum[100005][65]; //sum[i][j]表示前i个数在第j位的和
int main(){
    int n, m;
    while(scanf("%d %d", &n, &m) != EOF){
      memset(sum, 0, sizeof(sum));
      for(int i = 1; i &lt;= n; i++){
        scanf("%lld", &a[i]);
        for(long long bit = 1, num = 1; bit &lt;= 63; bit++, num &lt;&lt;= 1){
            sum[i][bit] = sum[i-1][bit] + ((a[i]&num)&gt;0);
        }
      }
      while(m--){
        int l, r;
        scanf("%d %d", &l, &r);
        long long ans = 0;
        for(long long i = 1, num = 1; i &lt;= 63; i++, num &lt;&lt;= 1){
            if(sum[r][i] - sum[l-1][i] == r-l+1){
                ans += num;
            }
        }
        printf("%lldn", ans);
      }
      cout &lt;&lt; endl;
    }
    return 0;
}
</pre>

交第二种方法时又被格式坑了。。。
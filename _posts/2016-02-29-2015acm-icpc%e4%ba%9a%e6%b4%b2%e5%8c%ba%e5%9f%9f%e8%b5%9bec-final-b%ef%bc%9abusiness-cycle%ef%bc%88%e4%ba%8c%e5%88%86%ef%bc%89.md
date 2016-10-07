---
title: 2015ACM-ICPC亚洲区域赛EC-Final B：Business Cycle（二分）
layout: post
permalink: /75
categories:
  - 算法
tags:
  - 2015ecfinal
  - 二分
---
<a href="https://icpcarchive.ecs.baylor.edu/external/75/p7501.pdf" target="_blank">题目PDF下载</a>

题意：n是一圈内的数字（a1,a2,,,an）个数，p步数的上限，问初始值ans最小是多少时，ans+a1+a2+...能大于等于g。（其中n个数构成一个圆圈，要求走的步数不超过p）

二分答案。然后讨论
  
1. 一圈增量小于等于0时，直接模拟到min（2n，p）将最大值与g比较。
  
因为比如-10 100 -10这组数据前两圈的最大值出现在第二圈。
  
2.增量大于0时，圈数a1 = p/n，同样模拟两圈，之后的计算就可以。

加了输入挂，优化二分后从T变WA了。。挖坑以后补。。
  
话说谷歌的思路题好变态。。。
  
有好想法的聚聚可以在下面留言互相交流。
  
也就是说这是一份WA的代码。。。目前只理论AC。。（雾
  
但是整体的思路应该是正确的，细节太多。。。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
long long a[100005];
long long sum[100005]; //前缀和
long long maxx[100005]; //前i个数中前缀和最大的角标
long long n, g, p, ans, a1, b1, cnt;
long long x1;  //x1是模拟两圈后的结果，作为第三圈的初始值
long long liz;  //sum最小值
long long da; //模拟过程中的最大值

template &lt;class T&gt;  //输入挂
inline bool scan_d(T &ret) {
    char c; int sgn;
    if(c=getchar(),c==EOF) return 0; //EOF
    while(c!='-'&&(c&lt;'0'||c&gt;'9')) c=getchar();
    sgn=(c=='-')?-1:1;
    ret=(c=='-')?0:(c-'0');
    while(c=getchar(),c&gt;='0'&&c&lt;='9') ret=ret*10+(c-'0');
    ret*=sgn;
    return 1;
}


bool judge1(long long x){
    long long k = min(2*n,p);
    da = x;
    for(int i = 1; i &lt;= k; i++){ if(x &gt;= g)  return 1;
        long long qq = i%n;
        if(qq == 0) qq = n;
        x += a[qq];
        if(x &lt; 0) x = 0; da = max(da, x); if(i == k){ x1 = x; if(x &gt;= g) return 1;
            return 0;
        }
    }
}
bool judge2(long long x){
    cnt = a1-2;
    bool flag = judge1(x);
    long long ret = x1;
    if(p &lt;= 2*n) return flag; else{ ret += cnt*sum[n]; if(sum[maxx[b1]] &gt; 0)
            ret += sum[maxx[b1]];
    }
    da = max(ret, da);
    if(da &gt;= g) return 1;
    return 0;
}

long long cal1(){    //增量小于等于0
    long long l = 0, r = g;
    bool k;
    while(l &lt;= r){
        //cout &lt;&lt; "l: " &lt;&lt; l &lt;&lt; "r: " &lt;&lt; r &lt;&lt; endl;
        long long mid = l+(r-l)/2;
        if(judge1(mid))
            r = mid-1;
        //else l = mid+1;
        else { //优化二分
            if(mid &lt; liz)
                l = mid+1;
            else
                l = mid+g-da;
        }
    }
    return l;
}

long long cal2(){   //增量大于0
    long long l = 0, r = g;
    bool k;
    while(l &lt;= r){
        //cout &lt;&lt; "l: " &lt;&lt; l &lt;&lt; "r: " &lt;&lt; r &lt;&lt; endl;
        long long mid = l+(r-l)/2;
        if(judge2(mid))
            r = mid-1;
        //else l = mid+1;
        else{   //优化二分
            if(mid &lt; liz)
                l = mid+1;
            else
                l = mid+g-da;
        }
    }
    return l;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int t;
    scanf("%d", &t);
    for(int cas = 1; cas &lt;= t; cas++){
        sum[0] = 0;
        a[0] = 0;
        maxx[0] = 0;
        liz = 0;
        scan_d(n);scan_d(g);scan_d(p);
        //scanf("%lld %lld %lld", &n, &g, &p);
        a1 = p/n; //quan
        b1 = p%n; // th.
        long long mx = -1e18, k = 0;
        for(int i = 1; i &lt;= n; i++){ //scanf("%lld", &a[i]); scan_d(a[i]); sum[i] = sum[i-1]+a[i]; liz = min(liz, sum[i]); if(sum[i] &gt; mx){
                mx = sum[i];
                maxx[i] = i;
                k = i;
            }else{
                maxx[i] = k;
            }
            //mx = max(sum[i], sum[i-1]);
        }
//        for(int i = 1; i &lt;= n; i++) cout &lt;&lt; sum[i] &lt;&lt;" ";
//cout &lt;&lt; endl;
//cout &lt;&lt; liz &lt;&lt; endl;
        //for(int i = 0; i &lt; u; i++) cout &lt;&lt; fu[i] &lt;&lt; endl;
        //cout &lt;&lt; a1 &lt;&lt; b1 &lt;&lt; endl;
        if(sum[n] &lt;= 0) ans = cal1();
        else{
            liz = -liz;
           // cnt = a1-2;
            ans = cal2();
        }
        //ans = cal();

        printf("Case #%d: %lldn", cas, ans);

    }
    return 0;
}</pre>
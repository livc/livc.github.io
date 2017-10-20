---
title: HDU2639 Bone Collector II（01背包第k优解）
layout: post
permalink: /blog/102
categories:
  - 算法
tags:
  - 01背包
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=2639" target="_blank">题目链接</a>

01背包的第k优解，再加一个维度。
  
就是用dp\[j\]\[k\]代表容量为j时第k大的价值。那么在内层循环再遍历一次k，每次遍历中将“取”和“不取”两种情况放在一个数组里，遍历完k之后对这个数组排序去重，然后根据顺序更新dp\[j\]\[k\]。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int dp[1005][1005];
int v[1005], w[1005];
int vec[100005];
bool cmp(int x, int y){
    return x&gt;y;
}
int main(){
    //freopen("a.txt", "r", stdin);
    int n, W, k, t;
    cin &gt;&gt; t;
    while(t--){
        memset(dp, 0, sizeof(dp));
        memset(vec, 0, sizeof(vec));
        scanf("%d %d %d", &n, &W, &k);
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &v[i]);
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &w[i]);
        for(int i = 1; i &lt;= n; i++){
            for(int j = W; j &gt;= w[i]; j--){
                int cnt = 0;
                for(int th = 1; th &lt;= k; th++){
                    vec[cnt++] = dp[j][th];
                    vec[cnt++] = dp[j-w[i]][th] + v[i];
                }
                sort(vec, vec+cnt, cmp);
                cnt = unique(vec, vec+cnt) - vec;  //去重
                for(int th = 1; th &lt;= min(cnt, k); th++)
                    dp[j][th] = vec[th-1];
            }
        }
        cout &lt;&lt; dp[W][k] &lt;&lt; endl;
    }
    return 0;
}
</pre>

这种算法是748MS，注意到35和36两行的STL的使用耗时太多，观察32和33两行的代码，其中dp\[j\]\[th\]是递减的，dp\[j-w[i]\]\[th\]也是递减的，所以用两个数组分别存下这两组数，然后在O（n）的时间就可以求出。节省了STL的时间。
  
这种方法只有109MS。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include &lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int dp[1005][1005];
int v[1005], w[1005];
int s1[100005];
int s2[100005];
int main(){
    //freopen("a.txt", "r", stdin);
    int n, W, k, t;
    cin &gt;&gt; t;
    while(t--){
        memset(dp, 0, sizeof(dp));
        scanf("%d %d %d", &n, &W, &k);
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &v[i]);
        for(int i = 1; i &lt;= n; i++)
            scanf("%d", &w[i]);
        for(int i = 1; i &lt;= n; i++){
            for(int j = W; j &gt;= w[i]; j--){
                for(int th = 1; th &lt;= k; th++){
                    s1[th-1] = dp[j][th];
                    s2[th-1] = dp[j-w[i]][th] + v[i];
                }
                s1[k] = s2[k] = -1;
                int cnt = 1, cnt1 = 0, cnt2 = 0;
                while(cnt&lt;=k && (s1[cnt1]!=-1 || s2[cnt2]!=-1)){
                    if(s1[cnt1]&gt;s2[cnt2])
                        dp[j][cnt] = s1[cnt1++];
                    else dp[j][cnt] = s2[cnt2++];
                    if(dp[j][cnt] != dp[j][cnt-1]) cnt++;
                }
            }
        }
        cout &lt;&lt; dp[W][k] &lt;&lt; endl;
    }
    return 0;
}
</pre>
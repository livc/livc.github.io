---
title: Codeforces651C Watchmen
layout: post
permalink: /123
categories:
  - 算法
tags:
  - 数学
---
<a href="http://codeforces.com/contest/651/problem/C" target="_blank">题目链接</a>

题意：坐标系中给出n个点，有两种计算距离的方法，一种是传统的两点间距离，另一种是横坐标差的绝对值加纵坐标差的绝对值。问n个点中这两种算法得到的答案一样的点对有多少个。（不算同一个点）

算出横坐标相等的点的个数存到vector里，再存纵坐标，然后遍历vector计算Cn2。最后减去所有重复点的Cn2。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;vector&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;

vector&lt;int&gt; num;

struct Point{
    int x, y;
}P[200005];

long long cal(int x){
    return (long long)x*(x-1)/2;
}
bool cmp1(Point a, Point b){
    if(a.x != b.x) return a.x&lt;b.x;
    return a.y&lt;b.y;
}
bool cmp2(Point a, Point b){
    if(a.y != b.y) return a.y&lt;b.y;
    return a.x&lt;b.x;
}
int main(){
    //freopen("a.txt", "r", stdin);
    int n;
    P[0].x = 1e9+1;
    P[0].y = 1e9+1;
    while(~scanf("%d", &n)){
        num.clear();
        for(int i = 1; i &lt;= n; i++){
            scanf("%d %d", &P[i].x, &P[i].y);
        }
        sort(P+1, P+n+1, cmp1);
        long long cnt = 1, ans = 0, flag = 1;
        for(int i = 1; i &lt;= n; i++){
            if(P[i].x == P[i-1].x && P[i].y == P[i-1].y){
                cnt++;
                if(i == n){
                    ans += (long long)cnt*(cnt-1)/2;
                    cnt = 1;
                }
            }else if(cnt != 1){
                ans += (long long)cnt*(cnt-1)/2;
                cnt = 1;
            }

            if(P[i].x == P[i-1].x){
                flag++;
                if(i == n){
                    num.push_back(flag);
                    flag = 1;
                }
            }else if(flag != 1){
                //cout &lt;&lt; "test" &lt;&lt; endl;
                num.push_back(flag);
                flag = 1;
            }
        }
        sort(P+1, P+n+1, cmp2);
        for(int i = 1; i &lt;= n; i++){
            if(P[i].y == P[i-1].y){
                flag++;
                if(i == n){
                    num.push_back(flag);
                    flag = 1;
                }
            }else if(flag != 1){
                num.push_back(flag);
                flag = 1;
            }
        }
        long long ans1 = 0;
        for(int i = 0; i &lt; num.size(); i++){
            //cout &lt;&lt; num[i] &lt;&lt;endl;
            ans1 += cal(num[i]);
        }
        ans1 -= ans;

        //break;
        //cout &lt;&lt; ans &lt;&lt; endl;
        cout &lt;&lt; ans1 &lt;&lt; endl;
    }
    return 0;
}

</pre>
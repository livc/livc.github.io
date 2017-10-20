---
title: 'POJ3087 Shuffle&#8217;m Up（模拟）'
layout: post
permalink: /blog/32
categories:
  - 算法
---
<a href="http://poj.org/problem?id=3087" target="_blank">题目链接</a>

题意：洗扑克，两堆S1, S2 各有C个扑克。先从S2最下面拿一张放在新的一堆的最下面，再拿S1的最下面一张往上放，以此类推最后形成2*C个扑克组成的堆。上C个是新的S2，下C个是新的S1。问多少次能匹配上给定的顺序。

思路：set存储字符串，find方法判断是否有重复的。如果有重复的意味着构成一个循环节，如果还没匹配上就再也匹配不上了。（注意输入的字符串最左面是底部）

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;queue&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;set&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;

int main(){
    //freopen("a.txt", "r", stdin);
    int N; cin &gt;&gt; N;
    for(int k = 1; k &lt;= N; k++){
        int ans = 0, l;
        string s1, s2, s3;
        cin &gt;&gt; l &gt;&gt; s1 &gt;&gt; s2 &gt;&gt; s3;
        set&lt;string&gt; s;
        while(1){
            string s4;
            for(int i = 0; i &lt; l; i++){
                s4 += s2[i];
                s4 += s1[i];
            }
            for(int i = 0; i &lt; l; i++){
                s1[i] = s4[i];
                s2[i] = s4[i+l];
            }
            ans++;
            if(s4 == s3)    break;
            if(s.find(s4) == s.end())
                s.insert(s4);
            else{
                ans = -1;
                break;
            }
        }
        printf("%d %dn", k, ans);
    }
    return 0;
}
</pre>
---
title: LeetCode338. Counting Bits（位运算+DP）
layout: post
permalink: /159
categories:
  - 算法
tags:
  - 位运算
  - 动态规划
---
<a href="https://leetcode.com/problems/counting-bits/" target="_blank">题目链接</a>

题意：输入num，给出[0, num]中每个数字二进制中1的个数，返回vector。

O(n)方法，可以写出两种状态转移方程（也许更多）。

1. i中1的个数比i&(i-1)中多一个。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    vector&lt;int&gt; countBits(int num) {
        vector&lt;int&gt; ans;
        ans.push_back(0);
        for(int i = 1; i &lt;= num; i++){
            ans.push_back(ans[i&(i-1)] + 1);
        }
        return ans;
    }
};
</pre>

2. i中1的个数（除了最低位）与i>>1相等（注意&和+的优先级）。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    vector&lt;int&gt; countBits(int num) {
        vector&lt;int&gt; ans;
        ans.push_back(0);
        for(int i = 1; i &lt;= num; i++){
            ans.push_back(ans[i&gt;&gt;1] + (i&1));
        }
        return ans;
    }
};
</pre>
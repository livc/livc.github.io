---
title: LeetCode278. First Bad Version（二分）
layout: post
permalink: /181
categories:
  - 算法
tags:
  - 二分
---
[题目链接](https://leetcode.com/problems/first-bad-version/)

二分本身很好理解，但是放在不同题目中，就有很多细节要处理和注意，要根据题意来二分。

<pre class="brush: cpp; title: ; notranslate" title="">// Forward declaration of isBadVersion API.
bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int L = 1, R = n;
        while(L&lt;R){
            int mid = L+(R-L)/2;
            if(isBadVersion(mid))
                R = mid;
            else 
                L = mid+1;
        }
        return R;
    }
};
</pre>
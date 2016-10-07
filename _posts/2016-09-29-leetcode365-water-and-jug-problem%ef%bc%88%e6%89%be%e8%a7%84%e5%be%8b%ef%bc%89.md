---
title: LeetCode365. Water and Jug Problem（找规律）
layout: post
permalink: /182
categories:
  - 算法
---
[题目链接](https://leetcode.com/problems/water-and-jug-problem/)

找规律题，z是x和y最大公因数的倍数（前提z小于等于x与y的和）就可以，要注意一些边界的判断。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    bool canMeasureWater(int x, int y, int z) {
        if(z == 0)return true;
        if(z &gt; x+y) return false;
        if(x==0 || y==0){
            if(max(x,y) == z) return true;
            return false;
        }
        if(z%gcd(x,y) == 0) return true;
        return false;
    }
    
    int gcd(int x,int y){
        return x%y?gcd(y,x%y):y;
    }
};
</pre>
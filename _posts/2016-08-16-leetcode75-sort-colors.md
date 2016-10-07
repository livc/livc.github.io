---
title: LeetCode75. Sort Colors
layout: post
permalink: /163
categories:
  - 算法
---
<a href="https://leetcode.com/problems/sort-colors/" target="_blank">题目链接</a>

题意：nums由0、1、2组成，将其排序，不允许使用库函数，一次遍历。

如果两次遍历的话很简单，第一次记录0、1、2的个数，第二次返回/输出，这样的时间复杂度也是O(n)的，所以如果是在ACM中是不会有这类要求的…

那么如何一次遍历完成排序呢？

题中由3个数组成，为了找到普遍规律，我们可以先看两个数的，也就是只有0和1。

假设输入为0, 1, 0 ，用a、b分别记录0和1的最近出现位置（a、b初始都为0）。

nums[0]时，nums[a++] = 0

nums[1]时，此时b仍然为0，因此在nums[i]为0时b也应该自增1，但为了不改变num[0]的值，b的自增顺序应该在a之前，这样会把a覆盖，所以上一步实际为：nums[b++] = 1; nums[a++] = 0;

然后在num[i]为1时，nums[b++] = 1；

nums[2]=0， a=1，b=2，和nums[0]时一样，执行nums[b++] = 1; nums[a++] = 0;

最后nums变为0， 0， 1。

总结一下就是nums[i]=0时，nums[b++] = 1; nums[a++] = 0; nums[i]=1时，nums[b++] = 1。

推广到三个数即可。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    void sortColors(vector&lt;int&gt;& nums) {
        int a = 0, b = 0, c = 0;
        for(int i = 0; i &lt; nums.size(); i++){
            if(nums[i] == 0){
                nums[c++] = 2;
                nums[b++] = 1;
                nums[a++] = 0;
            }else if(nums[i] == 1){
                nums[c++] = 2;
                nums[b++] = 1;
            }else if(nums[i] == 2){
                nums[c++] = 2;
            }
        }
    }
};
</pre>
---
title: LeetCode3. Longest Substring Without Repeating Characters
layout: post
permalink: /173
categories:
  - 算法
---
<a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank">题目链接</a>

输出最长不重复子串的长度。

一开始觉得是dp，转移方程写了半天没写出来。。看了下tag是双指针，用i和j维护不重复的子串端点。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int len = s.length();
        int a[300];
        memset(a, 0, sizeof(a));
        int j = 0, ans = 0;

        for(int i = 0; i &lt; len; i++){
            if(!a[s[i]-' ']){
                a[s[i]-' '] = 1;
            }else{
                ans = max(ans, (i-j));
                while(s[j] != s[i]){
                    a[s[j]-' '] = 0;
                    j++;
                }
                j++;
            }
        }
        ans = max(ans, (len-j));
        return ans;
    }
};
</pre>

坑爹的是居然不都是字母，还有其他符号，所以一开始减'a'就WA了。。
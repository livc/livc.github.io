---
title: LeetCode2. Add Two Numbers
layout: post
permalink: /168
categories:
  - 算法
tags:
  - 链表
---
<a href="https://leetcode.com/problems/add-two-numbers/" target="_blank">题目链接</a>

用链表反向代表数字的每一位，求和。

开始蠢到用数字代表每个表然后加一起，最后再转换成链表，后来发现这么出题就是在解高精度呀！从链表的开始就是个位，之后每位记录下进位就可以了。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *H = new ListNode(0);
        ListNode *pre = H;
        int f = 0, cnt = 10;
        while(1){
            if(l1){
                f += l1-&gt;val;
                l1 = l1-&gt;next;
            }
            if(l2){
                f += l2-&gt;val;
                l2 = l2-&gt;next;
            }
            ListNode *N = new ListNode(f%10);
            pre-&gt;next = N;
            f /= 10;
            pre = N;
            if(!l1 && !l2 && !f)break; //两个表都空并且无进位时终止
        }
        return H-&gt;next;
    }
};
</pre>
---
title: LeetCode141. Linked List Cycle
layout: post
permalink: /169
categories:
  - 算法
tags:
  - 链表
---
<a href="https://leetcode.com/problems/linked-list-cycle/" target="_blank">题目链接</a>

题意：判断链表中有无环，不使用额外的存储空间。

这个题很有意思，把链表想象成一条公路的话，一辆车和一个人从起点同时出发，如果有环的话他们一定会相遇。

这里用两个指针代表车和人，车的速度是2，人的速度是1。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *a = head, *b = head;
        if(head==NULL || head-&gt;next==NULL || head-&gt;next-&gt;next == NULL) return 0;
        while(1){
            a = a-&gt;next; if(a==NULL) return 0;
            a = a-&gt;next; if(a==NULL) return 0;
            b = b-&gt;next;
            if(a==b) return 1;
        }
    }
};
</pre>
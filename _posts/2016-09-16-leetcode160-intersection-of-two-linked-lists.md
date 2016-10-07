---
title: LeetCode160. Intersection of Two Linked Lists
layout: post
permalink: /170
categories:
  - 算法
tags:
  - 链表
---
<a href="https://leetcode.com/problems/intersection-of-two-linked-lists/" target="_blank">题目链接</a>

输出两个链表开始相交的节点。

为了保证长度一致，可以把两个链表连接起来，构成两个长度一样的链表。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        if(!headA || !headB) return NULL;
        ListNode *a = headA;
        ListNode *b = headB;
        int flag = 0;
        while(flag &lt;= 2){
            if(a==b) return a;
            a = a-&gt;next;
            b = b-&gt;next;
            if(a==NULL){ a = headB; flag++;}
            if(b==NULL){ b = headA; flag++;}
        }
        return NULL;
    }
};
</pre>
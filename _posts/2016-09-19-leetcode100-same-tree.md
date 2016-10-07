---
title: LeetCode100. Same Tree
layout: post
permalink: /174
categories:
  - 算法
tags:
  - DFS
  - tree
---
<a href="https://leetcode.com/problems/same-tree/" target="_blank">题目链接</a>

判断两个二叉树是否一样。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    bool isSameTree(TreeNode* p, TreeNode* q) {
        if(q==NULL && p==NULL) return 1;
        if((q==NULL && p!=NULL) || (p==NULL && q!=NULL))return 0;
        if(p-&gt;val != q-&gt;val) return 0;
        if(!isSameTree(p-&gt;left, q-&gt;left)) return 0;
        if(!isSameTree(p-&gt;right, q-&gt;right)) return 0;
        return 1;
    }
};
</pre>
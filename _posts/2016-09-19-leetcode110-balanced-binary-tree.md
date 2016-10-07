---
title: LeetCode110. Balanced Binary Tree
layout: post
permalink: /177
categories:
  - 算法
tags:
  - DFS
  - tree
---
<a href="https://leetcode.com/problems/balanced-binary-tree/" target="_blank">题目链接</a>

判断是否为平衡二叉树。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    bool isBalanced(TreeNode* root) {
        if(root == NULL) return 1;
        int l1 = getDepth(root-&gt;left);
        int l2 = getDepth(root-&gt;right);
        if(abs(l1-l2)&gt;1) return 0;
        return isBalanced(root-&gt;left)&&isBalanced(root-&gt;right);
        
    }
    int getDepth(TreeNode* root){
        if(root == NULL) return 0;
        return max(getDepth(root-&gt;left), getDepth(root-&gt;right))+1;
    }
};
</pre>
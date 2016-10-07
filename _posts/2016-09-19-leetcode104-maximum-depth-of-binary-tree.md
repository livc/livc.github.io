---
title: LeetCode104. Maximum Depth of Binary Tree
layout: post
permalink: /176
categories:
  - 算法
tags:
  - DFS
  - tree
---
<a href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank">题目链接</a>

输出二叉树的最大深度。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    int maxDepth(TreeNode* root) {
        return dfs(root);
    }
    int dfs(TreeNode* root){
        if(root == NULL) return 0;
        return 1+max(dfs(root-&gt;left), dfs(root-&gt;right));
    }
};
</pre>
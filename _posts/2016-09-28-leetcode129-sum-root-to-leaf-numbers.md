---
title: LeetCode129. Sum Root to Leaf Numbers
layout: post
permalink: /180
categories:
  - 算法
tags:
  - DFS
  - tree
---
[题目链接](https://leetcode.com/problems/sum-root-to-leaf-numbers/)

二叉树中每个叶节点所在路径作为数字的每一位，求所有数字的和。（1->2->3为123）

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    int sumNumbers(TreeNode* root) {
        return dfs(root, 0);
    }
    
    int dfs(TreeNode* root, int a){
        if(root==NULL) return 0;
        a += root-&gt;val;
        if(root-&gt;left==NULL && root-&gt;right==NULL) return a;
        return dfs(root-&gt;left, a*10) + dfs(root-&gt;right, a*10);
    }
};
</pre>
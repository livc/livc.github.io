---
title: LeetCode235. Lowest Common Ancestor of a Binary Search Tree
layout: post
permalink: /178
categories:
  - 算法
tags:
  - tree
---
<a href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" target="_blank">题目链接</a>

求二叉搜索树的最近公共祖先（LCA）。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        while(1){
            if(root-&gt;val &gt; max(p-&gt;val, q-&gt;val)) root = root-&gt;left;
            else if(root-&gt;val &lt; min(p-&gt;val, q-&gt;val)) root = root-&gt;right;
            else return root;
        }
    }
    
};
</pre>
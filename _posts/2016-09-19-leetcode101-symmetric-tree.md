---
title: LeetCode101. Symmetric Tree
layout: post
permalink: /175
categories:
  - 算法
tags:
  - DFS
  - tree
---
<a href="https://leetcode.com/problems/symmetric-tree/" target="_blank">题目链接</a>

判断一个二叉树是否对称。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    
    bool isSymmetric(TreeNode* root) {
        return judge(root, root);
    }
    
    bool judge(TreeNode* root1, TreeNode* root2){
        if(!root1 && !root2) return 1;
        if(root1 && root2 && root1-&gt;val==root2-&gt;val)
            if(judge(root1-&gt;left, root2-&gt;right) && judge(root1-&gt;right, root2-&gt;left)) return 1;
        return 0;
    }
};
</pre>
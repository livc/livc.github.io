---
title: LeetCode257. Binary Tree Paths（dfs）
layout: post
permalink: /171
categories:
  - 算法
tags:
  - DFS
  - tree
---
<a href="https://leetcode.com/problems/binary-tree-paths/" target="_blank">题目链接</a>

输出dfs二叉树路径。

刚刷leetcode，跟ACM提交方式不一样，适应中。。。

<pre class="brush: cpp; title: ; notranslate" title="">class Solution {
public:
    vector&lt;string&gt; binaryTreePaths(TreeNode* root) {
        vector&lt;string&gt; ans;
        if(root == NULL) return ans;
        dfs(ans, root, to_string(root-&gt;val));
        return ans;
    }
    
    void dfs(vector&lt;string&gt; &ans, TreeNode* root, string s) {
        if(root-&gt;left==NULL && root-&gt;right==NULL){
            ans.push_back(s);
            return;
        }
        if(root-&gt;left) dfs(ans, root-&gt;left, s+"-&gt;"+to_string(root-&gt;left-&gt;val));
        if(root-&gt;right) dfs(ans, root-&gt;right, s+"-&gt;"+to_string(root-&gt;right-&gt;val));
    }
};
</pre>
---
id: 217
title: HDU1539 Shredding Company（DFS）
layout: post
permalink: /blog/22
categories:
  - 算法
tags:
  - DFS
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1539" target="_blank">题目链接</a>

题意：分割一组数，使这些数组成的新的数组的和不大于给定的数。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;string&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int n, l, len, ans, tag, rel;
char s[30];
int path[22], repath[22];
void dfs(int cur, int sum){
    if(sum &gt; n) return;
    if(cur == len){
        if(sum &lt;= n && sum &gt;= ans){
            if(sum == ans) tag = 2;
            else{
                ans = sum, rel = 0, tag = 1;
                for(int i = 0; i &lt; l; i++)
                    repath[rel++] = path[i];
            }
        }
        return;
    }
    int tmp = 0;
    for(int i = cur; i &lt; len; i++){
        tmp = tmp*10 + s[i]-'0';
        path[l++] = tmp;
        dfs(i+1, sum+tmp);
        l--;
    }
}

int main(){
    //freopen("a.txt", "r", stdin);
    while(~scanf("%d%s",&n,s)){
    //while(cin &gt;&gt; n &gt;&gt; s){
        if(n == 0 && s[0] == '0') break;
        memset(path,0,sizeof(path));
        memset(repath,0,sizeof(repath));
        len = strlen(s);
        ans = 0, l = 0, tag = 0;
        dfs(0, 0);
        if(tag == 0) puts("error");
        else if(tag == 2) puts("rejected");
        else{
            cout &lt;&lt; ans;
            for(int i = 0; i &lt; rel; i++)
                cout &lt;&lt; " " &lt;&lt; repath[i];
            cout &lt;&lt; endl;
        }
    }
    return 0;
}
</pre>

题目问题，数组开大一点。

如果这么写： 

<pre class="brush: cpp; title: ; notranslate" title="">while(cin &gt;&gt; n &gt;&gt; s){</pre>

就WA。。。。。
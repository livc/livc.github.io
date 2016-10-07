---
title: HDU1627 Krypton Factor（DFS）
layout: post
permalink: /21
categories:
  - 算法
tags:
  - DFS
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1627" target="_blank">题目链接</a>

题意：输入n和l，要求输出前l个字母组成的第n个不含有连续的重复序列的字符串。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;iostream&gt;
#include&lt;cmath&gt;
#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;algorithm&gt;
using namespace std;
int n, l, cnt, f; //第cnt个序列
char ans[85];
void dfs(int cur){ //当前搜索到第cur位
    if(cnt == n){
        f = 1;
        int a = 0, b = 0;
        for(int i = 0; i &lt; cur; i++){
            if(a == 4 && b != 16){
                cout &lt;&lt; " ";
                a = 0;
            }if(b == 16){
                cout &lt;&lt; endl;
                a = b = 0;
            }
            printf("%c", ans[i]+'A');
            a++;
            if(a == 4) b++;
        }
        cout &lt;&lt; endl &lt;&lt; cur &lt;&lt; endl;
        return;
    }
    for(int i = 0; i &lt; l; i++){
        ans[cur] = i;
        int flag = 0;
        for(int j = 1; j &lt;= (cur+1)/2; j++){  //重复序列的元素个数
            flag = 1;
            for(int k = 0; k &lt; j; k++){  
                if(ans[cur-k] != ans[cur-k-j]){
                    flag = 0;
                    break;
                }
            }
            if(flag) break;
        }
        if(flag) continue;
        cnt++;
        if(f) return;
        dfs(cur+1);
    }

}

int main(){
    //freopen("a.txt", "r", stdin);

    while(scanf("%d %d", &n, &l) != EOF && n && l){
        //memset(ans, 0, sizeof(ans));
        cnt = 0;
        f = 0;
        dfs(0);
    }
}
</pre>
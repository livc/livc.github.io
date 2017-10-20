---
title: 2015ACM-ICPC亚洲区域赛沈阳站 B：Bazinga（KMP+剪枝）
layout: post
permalink: /blog/114
categories:
  - 算法
tags:
  - 2015沈阳
  - KMP
  - 字符串
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=5510" target="_blank">题目链接</a>

题意：给定n个字符串，标号1~n，找出标号最大的字符串i，使1~i中存在一个字符串不是i的子串。

很容易想到KMP，如果直接搞会超时，那么可以从头开始遍历主串，记录满足条件的串，最后从后找第一个满足条件的就可以。
  
每次遍历子串时，如果找到字符串j是i的子串，就把j标记一下，再往后就不需要对j进行KMP。

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
#include&lt;vector&gt;
#include&lt;map&gt;
#include&lt;queue&gt;
#include&lt;stack&gt;
#include&lt;string&gt;
using namespace std;

int nextt[505][2005];
char s[505][2005];
int f[505]; //f[i]=1表示i是后面某个串的子串
int ans[505]; //如果字符串i满足题意则ans[i]=1，最后从大到小遍历i即可

void kmp_pre(char x[],int m,int nextt[]){
    int i, j;
    j = nextt[0] = -1;
    i = 0;
    while(i &lt; m){
        while(-1!=j && x[i]!=x[j])
            j = nextt[j];
        nextt[++i] = ++j;
    }
}

int KMP_Index(char x[], int m, char y[], int n, int k){
    int i = 0, j = 0;
    //kmp_pre(x, m, nextt);
    while(i &lt; n && j &lt; m){
        if(j == -1 || y[i] == x[j]){
            i++; j++;
        }
        else
            j = nextt[k][j];
    }
    if(j == m)
        return i-m;
    else
        return -1;
}

int main(){
    //freopen("a.txt", "r", stdin);
    int t; cin &gt;&gt; t;
    for(int cas = 1; cas &lt;= t; cas++){
        memset(f, 0, sizeof(f));
        memset(ans, 0, sizeof(ans));
        int n;
        scanf("%d", &n);
        //求next
        for(int i = 0; i &lt; n; i++){
            scanf("%s", s[i]);
            kmp_pre(s[i], strlen(s[i]), nextt[i]);
        }
        int flag = 0;

        for(int i = 1; i &lt; n; i++){
            for(int j = 0; j &lt; i; j++){
                if(!f[j]){
                    int k = KMP_Index(s[j], strlen(s[j]), s[i], strlen(s[i]), j);
                    if(k!=-1) f[j] = 1;
                    else{
                        flag = 1;
                    }
                }
            }
            if(flag){
                ans[i] = 1;
                flag = 0;
            }
        }
        for(int i = n-1; i &gt;= 0; i--){
            if(ans[i]){
                printf("Case #%d: %d\n", cas, ++i);
                break;
            }
            if(i==0) printf("Case #%d: -1\n", cas);
        }

    }
    return 0;
}
</pre>
---
title: HDU1757 A Simple Math Problem（矩阵快速幂）
layout: post
permalink: /blog/65
categories:
  - 算法
tags:
  - 快速幂
  - 数学
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1757" target="_blank">题目链接</a>

题意：
  
x < 10时 f(x) = x. x >= 10时 f(x) = a0 \* f(x-1) + a1 \* f(x-2) + a2 \* f(x-3) + …… + a9 \* f(x-10) 并且ai(0<=i<=9) 只能是0或1. 求f(n)%m。 一张图一目了然。 <img src="https://i1.wp.com/images.cnitblog.com/blog/422400/201303/01110635-056194d957c24d5da0b31b93625bb31a.jpg?resize=530%2C320" class="aligncenter" data-recalc-dims="1" />

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cmath&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
const double pi = acos(-1);

int MOD;
const int maxn = 10;

struct Matrix{
    int mat[maxn][maxn];
};

//矩阵乘法
Matrix matrixmul(Matrix a,Matrix b){
    Matrix ret;
    for(int i = 0; i &lt; maxn; i++)
        for(int j = 0; j &lt; maxn; j++){
            ret.mat[i][j] = 0;
            for(int k = 0; k &lt; maxn; k++){
                ret.mat[i][j] += (a.mat[i][k]*b.mat[k][j])%MOD;
                ret.mat[i][j] %= MOD;
            }
        }
    return ret;
}

// a^n%MOD
Matrix M_quickpow(Matrix a, long long n){
    Matrix ret;
    memset(ret.mat, 0, sizeof(ret.mat));
    //构造单位矩阵
    for(int i = 0; i &lt; maxn; i++)
        ret.mat[i][i] = 1;
    while (n){
        if (n & 1) ret = matrixmul(ret, a);
        n &gt;&gt;= 1;
        a = matrixmul(a, a);
    }
    return ret;
}



int main(){
    //freopen("a.txt", "r", stdin);
    int k, m;
    Matrix q;
    memset(q.mat, 0, sizeof(q.mat));
    while (~scanf("%d%d", &k, &MOD)){
        if(k&lt;10) cout &lt;&lt; k%MOD &lt;&lt; endl;
        else{
            for(int i = 0; i &lt; 10; i++)
                scanf("%d", &q.mat[0][i]);
            for(int i = 0; i &lt; 9; i++){
                q.mat[i+1][i] = 1;
            }

            Matrix aa = M_quickpow(q, k-9);
            Matrix x;
            memset(x.mat, 0, sizeof(x.mat));
            for(int i = 0; i &lt; 10; i++)
                x.mat[i][0] = 9-i;

            Matrix ans = matrixmul(aa, x);

            cout &lt;&lt; ans.mat[0][0] &lt;&lt; endl;
        }

    }
    return 0;
}

</pre>
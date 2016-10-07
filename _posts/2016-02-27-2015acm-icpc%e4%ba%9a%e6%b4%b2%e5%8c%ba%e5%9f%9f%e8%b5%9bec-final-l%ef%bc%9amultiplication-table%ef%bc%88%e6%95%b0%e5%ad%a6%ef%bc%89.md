---
title: 2015ACM-ICPC亚洲区域赛EC-Final L：Multiplication Table（数学）
layout: post
permalink: /70
categories:
  - 算法
tags:
  - 2015ecfinal
  - 数学
---
<a href="https://icpcarchive.ecs.baylor.edu/external/75/p7511.pdf" target="_blank">题目PDF下载</a>

题意：给出一个乘法表，其中有的数字不知道，但是知道已知数字的相对位置，问是否是题目中乘法表的一部分。

如果所给的表中没有数字输出Yes

如果有一个数字n的话，分解因数与其坐标比较判断。枚举到根号n即可。

如果大于等于两个数字的话，先判断第一个数字，如果第一个数字的坐标满足条件，再根据坐标差计算之后的数字看是否相等。

所以此题不需要解方程甚至解方程组。

还有几个需要注意的地方：
  
1. 存储时只存储有数字的点，这样就不用遍历全图
  
2. 用getline读取每一行，因为getline支持string类，但是getline会吃掉输入行列时那个回车，所以要加个getchar

<pre class="brush: cpp; title: ; notranslate" title="">#include&lt;cstring&gt;
#include&lt;cstdio&gt;
#include&lt;cstring&gt;
#include&lt;cmath&gt;
#include&lt;string&gt;
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int r1, c1;  //第一个数的坐标
int r, c;
int sum;    //表中数字个数

struct point{  //存储每个数的值和坐标
    int num, r, c;
}p[1000005];

bool judge1(int x, int y){  //判断一个点是否满足条件
    int n = p[0].num;
    for(int i = 1; i &lt;= sqrt(n); i++){
        int k = n/i;
        if(k*i == n){   //能整除
            if((k&gt;=x && i&gt;=y) || (k&gt;=y && i&gt;=x))
                return 1;
        }
    }
    return 0;
}

bool judge2(){
    int n = p[0].num;
    for(int i = 1; i &lt;= sqrt(n); i++){
        int k = n/i;
        if(k*i == n){
            if(k&gt;=r1 && i&gt;=c1){
                int flag = 0, j;
                for(j = 1; j &lt; sum; j++){
                    int xx = p[j].r-r1;
                    int yy = p[j].c-c1;
                    if((k+xx)*(i+yy) != p[j].num){
                        flag = 1;
                        break;
                    }
                }
                if(j == sum && !flag) return 1;
            }
            //i和k互换
            if(i&gt;=r1 && k&gt;=c1){
                int flag = 0, j;
                for(j = 1; j &lt; sum; j++){
                    int xx = p[j].r-r1;
                    int yy = p[j].c-c1;
                    if((i+xx)*(k+yy) != p[j].num){
                        flag = 1;
                        break;
                    }
                }
                if(j == sum && !flag) return 1;
            }
        }
    }
    return 0;
}


int main(){
    //freopen("a.txt", "r", stdin);
    int t;
    scanf("%d", &t);
    for(int cas = 1; cas &lt;= t; cas++){
        scanf("%d %d", &r, &c);
        string s;
        int m = 0, n;
        sum = 0;
        getchar();
        for(int i = 1; i &lt;= r; i++){
            getline(cin, s);
            int cnt = 1;
            for(int j = 0; j &lt; s.length(); j++){
                if(s[j]!='?' && s[j]!=' '){
                    n = s[j]-'0';
                    m = m*10+n;
                }
                if(s[j] == ' ' || j == s.length()-1){
                    p[sum].num = m;
                    p[sum].r = i;
                    p[sum].c = cnt;
                    if(m!=0){
                        sum++;
                        if(sum == 1){
                            r1 = i;
                            c1 = cnt;
                        }
                    }
                    cnt++;
                    m = 0;
                }
            }
        }
        if(sum == 0)
            printf("Case #%d: Yesn", cas);
        else if(sum == 1){
            printf("Case #%d: ", cas);
            if(judge1(r1, c1)){
                printf("Yesn");
            }else printf("Non");
        }else{
            printf("Case #%d: ", cas);
            if(judge2()){
                printf("Yesn");
            }else printf("Non");
        }
    }
    return 0;
}

</pre>
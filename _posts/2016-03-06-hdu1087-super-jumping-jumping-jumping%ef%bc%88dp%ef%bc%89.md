---
title: HDU1087 Super Jumping! Jumping! Jumping!（DP）
layout: post
permalink: /87
categories:
  - 算法
tags:
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1087" target="_blank">题目链接</a>

题意：水平线上起点终点间有n个数，选择一条路线跳过去，要求所选路径上的数字必须不断增加，求所有路径中最大的和。（起点和终点可分别视为无穷小和无穷大）。

简单的动态规划题，设dp[i]表示以i为结尾（所选的最后一个数字）的最大和，那么可列：dp[i] = max(dp[i], dp[j]+a[i]), 1<=j<=i。需要注意的是dp初始化应为a数组对应的值。 [cpp] #include<stdio.h> #include<iostream> #include<string.h> #include<algorithm> using namespace std; int a[1005]; int dp[1005]; int main(){ //freopen("a.txt", "r", stdin); int n; while(~scanf("%d", &n) && n){ for(int i = 1; i <= n; i++){ scanf("%d", &a[i]); } for(int i = 1; i <= n; i++){ dp[i] = a[i]; for(int j = 1; j <= i; j++){ if(a[i] > a[j]) dp[i] = max(dp[i], dp[j]+a[i]); } } int ans = 0; for(int i = 1; i <= n; i++){ ans = max(ans, dp[i]); } cout << ans << endl; } return 0; } [/cpp]
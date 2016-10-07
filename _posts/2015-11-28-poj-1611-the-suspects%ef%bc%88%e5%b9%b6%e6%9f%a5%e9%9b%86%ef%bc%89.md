---
title: POJ 1611 The Suspects（并查集）
layout: post
permalink: /5
categories:
  - 算法
tags:
  - 并查集
---
<a href="http://poj.org/problem?id=1611" target="_blank">题目链接</a>

题意：非典时期，共有n个人（标号0~n-1），分成m组。第一行输入n（0 < n <= 30000），m（0 <= m <= 500），接下来 m行代表m组，每行第一个数k代表该组人数，后面k个数为这k个人的标号。默认标号为0的人是流感嫌疑人，如果一个小组中有 一个人是嫌疑人，那么这个组的所有人都成为了流感嫌疑人。一个人可以在几个小组里。问共有多少个嫌疑人。 [c] #include <iostream> #include <cstdio> #include <cstring> #include <string> #include <algorithm> using namespace std; //rank[i]代表标号为i的人在链中第几位 //例如最后一个节点的rank为1，它的父节点的rank就是2 int rank[30005]; int fa[30005]; //找祖先 int findfa(int x){ if(fa[x] != x){ fa[x] = findfa(fa[x]); } return fa[x]; } //合并 void add(int x, int y){ x = findfa(x); y = findfa(y); if(x != y){ //如果这两个点还没有被合并 if(rank[x] >= rank[y]){ fa[y] = x; rank[x] += rank[y]; }else{ fa[x] = y; rank[y] += rank[x]; } } } int main() { int n, m; while(scanf("%d %d", &n, &m) != EOF){ if(n == 0 && m == 0) break; for(int i = 0; i < n; i++){ fa[i] = i; rank[i] = 1; //初始化所有点 } while(m--){ int num, first; scanf("%d %d", &num, &first); for(int i = 1; i < num; i++){ int temp; scanf("%d", &temp); add(first, temp); } } printf("%dn", rank[fa[0]]); } return 0; } [/c]
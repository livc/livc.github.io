---
title: Google APAC 2017 Problem B. Robot Rock Band（位运算）
layout: post
permalink: /165
categories:
  - 算法
tags:
  - 位运算
---
<a href="https://code.google.com/codejam/contest/dashboard?c=5254486#s=p1" target="_blank">题目链接</a>

题意：四组数字，每组都是n个数，要求从每组数中选一个数字，四个数的异或结果等于k。

一开始在想拆位，后来发现没那么麻烦。

n < 1000，四层循环肯定超时，所以把四组数字分成两次计算异或。

异或性质：x^y^y = x

假设前两组数的异或结果为x，后两组数字中的异或结果为y，那么题目就是要求 x^y=k. 即y=k^x.

所以把所有x^k计算出来，用map对应x^k的个数，然后再遍历后两组出直接取出map[y]，看存在几次，全部加在一起。（栈区定义map默认初始化为0，因此若不存在加的就是0）。

注意ans要开long long。

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;cstring&gt;
#include &lt;map&gt;
#include &lt;cmath&gt;
#include &lt;algorithm&gt;
#include &lt;cstdio&gt;
#include &lt;iostream&gt;
using namespace std;
int main(){
	freopen("../Downloads/B-large-practice.in", "r", stdin);
	freopen("ans.out", "w", stdout);
	int t; cin &gt;&gt; t;
	for(int cas = 1; cas &lt;= t; cas++){
		int n, k;
		scanf("%d %d", &n, &k);
		int a[4005];
		for(int i = 0; i &lt; 4*n; i++){
			scanf("%d", &a[i]);
		}
		map&lt;int, int&gt; m;
		for(int i = 0; i &lt; n; i++){
			for(int j = n; j &lt; 2*n; j++){
				int cal = a[i]^a[j]^k;
				int tmp = m[cal];
				m[cal] = tmp+1;
			}
		}
		//cout &lt;&lt; m[0]&lt;&lt; endl;
		long long ans = 0;
		for(int i = 2*n; i &lt; 3*n; i++){
			for(int j = 3*n; j &lt; 4*n; j++){
				ans += m[a[i]^a[j]];
			//	cout &lt;&lt; ans &lt;&lt; endl;
			}
		}
		printf("Case #%d: %lld\n", cas, ans);
	}
	return 0;
}

</pre>
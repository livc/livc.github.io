---
title: Google APAC 2017 Problem A. Lazy Spelling Bee（模拟）
layout: post
permalink: /164
categories:
  - 算法
---
<a href="https://code.google.com/codejam/contest/dashboard?c=5254486#s=p0" target="_blank">题目链接</a>

题意：给一个长度为L的字符串，问能求出多少个长度为L的字符串，使得输出的字符串i位与原字符串i-1、i、i+1位的任意一位字符相等。

直接扫一遍乘一起取模就可以，注意开longlong。

<pre class="brush: cpp; title: ; notranslate" title="">#include &lt;cstring&gt;
#include &lt;cmath&gt;
#include &lt;algorithm&gt;
#include &lt;cstdio&gt;
#include &lt;iostream&gt;
using namespace std;
const int mod = 1e9+7;
int main(){
	freopen("../Downloads/A-large-practice.in", "r", stdin);
	freopen("ans.out", "w", stdout);
	int t; cin &gt;&gt; t;
	for(int cas = 1; cas &lt;= t; cas++){
		char s[1005];
		scanf("%s", s);
		int len = strlen(s);
		long long ans = 1;
		for(int i = 0; i &lt; len; i++){
			int tmp = 1;
			if(i == 0){
				if(i+1&lt;len && s[i]!=s[i+1]) tmp++;
			}else if (i == len-1){
				if(s[i] != s[i-1]) tmp++;
			}else{
				if(s[i] != s[i-1]) tmp++;
				if(s[i+1]!=s[i] && s[i+1]!=s[i-1]) tmp++;
			}
			ans =(ans*tmp)%mod;
		}
		printf("Case #%d: %lld\n", cas, ans);
	}
	return 0;
}
</pre>

注意这个平台需要提交的是输出的文本，而不是代码……
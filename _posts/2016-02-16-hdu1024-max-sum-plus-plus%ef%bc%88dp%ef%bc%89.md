---
title: HDU1024 Max Sum Plus Plus（DP）
layout: post
permalink: /blog/53
categories:
  - 算法
tags:
  - 动态规划
---
<a href="http://acm.hdu.edu.cn/showproblem.php?pid=1024" target="_blank">题目链接</a>

题意：给n个数，找出不交叉的m段，使所有段内元素和最大。

设dp\[ i \]\[ j \]表示前 i 个数中选 j 段的最大和，其中 i 在最后一段。
  
这样就有两种情况：
  
1. i 和前面的数在一段内，此时dp\[ i \]\[ j \] = dp\[ i-1 \]\[ j \] + a\[ i \]\[ j \]
  
2. i 自己单独一段，此时dp\[ i \]\[ j \] = max( dp\[ k \]\[ j-1 \] ) + a\[ i \]\[ j \] , 其中 j-1 =< k <=i-1 .
  
这样就写出了状态转移方程：dp\[ i \]\[ j \] = max ( dp\[ i-1 \]\[ j \] ， max( dp\[ k \]\[ j-1 \] ) ) + a\[ i \]\[ j \]， j-1 =< k <=i-1 .

此题n高达10^6，开二维数组空间肯定不够，观察状态转移方程，其中dp\[ \]\[ j \]只用到了dp\[ \]\[ j \]和dp\[ \]\[ j-1 \]，也就是说dp\[ \]\[ 0 \]~dp\[ \]\[ j-2 \]的值都不用了，也就是说 j 只开二维的就够了（听说叫滚动数组）。

再来看一看时间复杂度：n\*n\*m，再来观察方程，带 k 的这重循环是为了找最大值，这可以同步完成，避免了这层循环。时间复杂度为n*m.

<link rel='stylesheet' type='text/css' href='http://tools.oschina.net/js/syntaxhighlighter_3.0.83/styles/shCoreDefault.css' />

<div id="highlighter_155178" class="syntaxhighlighter  c">
  <div class="toolbar">
    <span><a href="#" class="toolbar_item command_help help">?</a></span>
  </div>
  
  <table border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td class="gutter">
        <div class="line number1 index0 alt2">
          1
        </div>
        
        <div class="line number2 index1 alt1">
          2
        </div>
        
        <div class="line number3 index2 alt2">
          3
        </div>
        
        <div class="line number4 index3 alt1">
          4
        </div>
        
        <div class="line number5 index4 alt2">
          5
        </div>
        
        <div class="line number6 index5 alt1">
          6
        </div>
        
        <div class="line number7 index6 alt2">
          7
        </div>
        
        <div class="line number8 index7 alt1">
          8
        </div>
        
        <div class="line number9 index8 alt2">
          9
        </div>
        
        <div class="line number10 index9 alt1">
          10
        </div>
        
        <div class="line number11 index10 alt2">
          11
        </div>
        
        <div class="line number12 index11 alt1">
          12
        </div>
        
        <div class="line number13 index12 alt2">
          13
        </div>
        
        <div class="line number14 index13 alt1">
          14
        </div>
        
        <div class="line number15 index14 alt2">
          15
        </div>
        
        <div class="line number16 index15 alt1">
          16
        </div>
        
        <div class="line number17 index16 alt2">
          17
        </div>
        
        <div class="line number18 index17 alt1">
          18
        </div>
        
        <div class="line number19 index18 alt2">
          19
        </div>
        
        <div class="line number20 index19 alt1">
          20
        </div>
        
        <div class="line number21 index20 alt2">
          21
        </div>
        
        <div class="line number22 index21 alt1">
          22
        </div>
        
        <div class="line number23 index22 alt2">
          23
        </div>
        
        <div class="line number24 index23 alt1">
          24
        </div>
        
        <div class="line number25 index24 alt2">
          25
        </div>
        
        <div class="line number26 index25 alt1">
          26
        </div>
        
        <div class="line number27 index26 alt2">
          27
        </div>
        
        <div class="line number28 index27 alt1">
          28
        </div>
        
        <div class="line number29 index28 alt2">
          29
        </div>
        
        <div class="line number30 index29 alt1">
          30
        </div>
        
        <div class="line number31 index30 alt2">
          31
        </div>
        
        <div class="line number32 index31 alt1">
          32
        </div>
        
        <div class="line number33 index32 alt2">
          33
        </div>
        
        <div class="line number34 index33 alt1">
          34
        </div>
        
        <div class="line number35 index34 alt2">
          35
        </div>
        
        <div class="line number36 index35 alt1">
          36
        </div>
        
        <div class="line number37 index36 alt2">
          37
        </div>
      </td>
      
      <td class="code">
        <div class="container">
          <div class="line number1 index0 alt2">
            <code class="c preprocessor">#include&lt;iostream&gt;</code>
          </div>
          
          <div class="line number2 index1 alt1">
            <code class="c preprocessor">#include&lt;cmath&gt;</code>
          </div>
          
          <div class="line number3 index2 alt2">
            <code class="c preprocessor">#include&lt;queue&gt;</code>
          </div>
          
          <div class="line number4 index3 alt1">
            <code class="c preprocessor">#include&lt;cstring&gt;</code>
          </div>
          
          <div class="line number5 index4 alt2">
            <code class="c preprocessor">#include&lt;string&gt;</code>
          </div>
          
          <div class="line number6 index5 alt1">
            <code class="c preprocessor">#include&lt;map&gt;</code>
          </div>
          
          <div class="line number7 index6 alt2">
            <code class="c preprocessor">#include&lt;stack&gt;</code>
          </div>
          
          <div class="line number8 index7 alt1">
            <code class="c preprocessor">#include&lt;set&gt;</code>
          </div>
          
          <div class="line number9 index8 alt2">
            <code class="c preprocessor">#include&lt;cstdio&gt;</code>
          </div>
          
          <div class="line number10 index9 alt1">
            <code class="c preprocessor">#include&lt;algorithm&gt;</code>
          </div>
          
          <div class="line number11 index10 alt2">
            <code class="c keyword bold">using</code>&nbsp;<code class="c keyword bold">namespace</code>&nbsp;<code class="c plain">std;</code>
          </div>
          
          <div class="line number12 index11 alt1">
            &nbsp;
          </div>
          
          <div class="line number13 index12 alt2">
            <code class="c color1 bold">int</code>&nbsp;<code class="c plain">a[1000005];</code>
          </div>
          
          <div class="line number14 index13 alt1">
            <code class="c color1 bold">int</code>&nbsp;<code class="c plain">dp[1000005][2];</code>
          </div>
          
          <div class="line number15 index14 alt2">
            &nbsp;
          </div>
          
          <div class="line number16 index15 alt1">
            <code class="c color1 bold">int</code>&nbsp;<code class="c plain">main(){</code>
          </div>
          
          <div class="line number17 index16 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c comments">//freopen("a.txt",&nbsp;"r",&nbsp;stdin);</code>
          </div>
          
          <div class="line number18 index17 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">n,&nbsp;m;</code>
          </div>
          
          <div class="line number19 index18 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">while</code><code class="c plain">(</code><code class="c functions bold">scanf</code><code class="c plain">(</code><code class="c string">"%d&nbsp;%d"</code><code class="c plain">,&nbsp;&m,&nbsp;&n)&nbsp;!=&nbsp;EOF){</code>
          </div>
          
          <div class="line number20 index19 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c functions bold">memset</code><code class="c plain">(dp,&nbsp;0,&nbsp;</code><code class="c keyword bold">sizeof</code><code class="c plain">(dp));</code>
          </div>
          
          <div class="line number21 index20 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">for</code><code class="c plain">(</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">i&nbsp;=&nbsp;1;&nbsp;i&nbsp;&lt;=&nbsp;n;&nbsp;i++)</code>
          </div>
          
          <div class="line number22 index21 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c functions bold">scanf</code><code class="c plain">(</code><code class="c string">"%d"</code><code class="c plain">,&nbsp;&a[i]);</code>
          </div>
          
          <div class="line number23 index22 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">ans&nbsp;=&nbsp;-1e9;</code>
          </div>
          
          <div class="line number24 index23 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">for</code><code class="c plain">(</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">j&nbsp;=&nbsp;1;&nbsp;j&nbsp;&lt;=&nbsp;m;&nbsp;j++){</code>
          </div>
          
          <div class="line number25 index24 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">maxx&nbsp;=&nbsp;-1e9;</code>
          </div>
          
          <div class="line number26 index25 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">for</code><code class="c plain">(</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">i&nbsp;=&nbsp;j;&nbsp;i&nbsp;&lt;=&nbsp;n;&nbsp;i++){</code>
          </div>
          
          <div class="line number27 index26 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">maxx&nbsp;=&nbsp;max(maxx,&nbsp;dp[i-1][0]);</code>
          </div>
          
          <div class="line number28 index27 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">dp[i][1]&nbsp;=&nbsp;max(dp[i-1][1],&nbsp;maxx)&nbsp;+&nbsp;a[i];</code>
          </div>
          
          <div class="line number29 index28 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">if</code><code class="c plain">(j&nbsp;==&nbsp;m)&nbsp;ans&nbsp;=&nbsp;max(ans,&nbsp;dp[i][1]);</code>
          </div>
          
          <div class="line number30 index29 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">}</code>
          </div>
          
          <div class="line number31 index30 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">for</code><code class="c plain">(</code><code class="c color1 bold">int</code>&nbsp;<code class="c plain">k&nbsp;=&nbsp;0;&nbsp;k&nbsp;&lt;=&nbsp;n;&nbsp;k++)</code>
          </div>
          
          <div class="line number32 index31 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">dp[k][0]&nbsp;=&nbsp;dp[k][1];</code>
          </div>
          
          <div class="line number33 index32 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">}</code>
          </div>
          
          <div class="line number34 index33 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">cout&nbsp;&lt;&lt;&nbsp;ans&nbsp;&lt;&lt;&nbsp;endl;</code>
          </div>
          
          <div class="line number35 index34 alt2">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c plain">}</code>
          </div>
          
          <div class="line number36 index35 alt1">
            <code class="c spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="c keyword bold">return</code>&nbsp;<code class="c plain">0;</code>
          </div>
          
          <div class="line number37 index36 alt2">
            <code class="c plain">}</code>
          </div>
        </div>
      </td>
    </tr>
  </table>
</div>
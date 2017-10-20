---
title: microRNA学习笔记（四）——microRNA新基因的预测、克隆鉴定及注册
layout: post
permalink: /blog/78
categories:
  - 生物信息学
tags:
  - miRNA
---
<div id="wmd-preview-section-1623" class="wmd-preview-section preview-content">
  <div id="wmd-preview-section-1623" class="wmd-preview-section preview-content">
    <p>
      发现新的microRNA分子目前的策略可概括为小分子RNA富集纯化、末端修饰及连接已知序列、克隆、测序，并通过分子生物学相关方法确认。
    </p>
  </div>
  
  <div id="wmd-preview-section-3154" class="wmd-preview-section preview-content">
    <h2 id="microrna新基因的预测及注册程序">
      microRNA新基因的预测及注册程序
    </h2>
    
    <p>
      研究者根据microRNA的<strong>两个特点</strong>进行预测和验证：
    </p>
    
    <ul>
      <li>
        物种间高度的序列保守性
      </li>
      <li>
        microRNA前体呈茎-环结构
      </li>
    </ul>
    
    <p>
      microRNA生物信息学预测基本原理：
    </p>
    
    <ul>
      <li>
        利用已知microRNA前体序列对目标物种的全基因组正反链序列进行同源性扫描
      </li>
      <li>
        获得大量同源性由高到低的候选基因序列
      </li>
      <li>
        筛选这些基因序列（通过各种RNA二级结构分析及预测软件结合动力学分析）
      </li>
    </ul>
    
    <p>
      目前研究者多使用如下软件和网络资源对候选microRNA基因序列进行二级结构分析和新序列筛选：
    </p>
  </div>
  
  <div id="wmd-preview-section-4681" class="wmd-preview-section preview-content">
    <h3 id="mirscan">
      MiRscan
    </h3>
    
    <p>
      <a href="http://genes.mit.edu/mirscan/" target="_blank">MiRscan</a>以已被实验验证的50对线虫pre-microRNA茎-环结构序列数据库为基础，对microRNA序列对进行二级结构分析，并通过评分来判断其为新microRNA的可能性大小。
    </p>
    
    <p>
      MiRscan是较简单的RNA二级结构预测程序，应用范围有一定局限性：只能分析与50对线虫pre-microRNA茎-环结构同源的序列。
    </p>
  </div>
  
  <div id="wmd-preview-section-5373" class="wmd-preview-section preview-content">
    <h3 id="rnafold">
      RNAfold
    </h3>
    
    <p>
      <a href="http://rna.tbi.univie.ac.at/cgi-bin/RNAfold.cgi" target="_blank">RNAfold</a>是RNA研究领域<strong>最常用</strong>的二级结构分析程序，其序列提交长度可达7000bp，还可设置相关动力学系数。
    </p>
  </div>
  
  <div id="wmd-preview-section-5984" class="wmd-preview-section preview-content">
    <h3 id="其他microrna二级结构预测网络资源">
      其他microRNA二级结构预测网络资源
    </h3>
    
    <ul>
      <li>
        <a href="http://www.tbi.univie.ac.at/RNA/" target="_blank">Vienna RNA Package</a>
      </li>
      <li>
        <a href="http://unafold.rna.albany.edu/?q=dinamelt" target="_blank">the DINAMelt Server</a>
      </li>
      <li>
        <a href="http://unafold.rna.albany.edu/?q=mfold" target="_blank">Mfold-3.2</a>
      </li>
    </ul>
  </div>
  
  <div id="wmd-preview-section-6363" class="wmd-preview-section preview-content">
    <h3 id="新microrna的注册">
      新microRNA的注册
    </h3>
    
    <p>
      主要在“microRNA Base”网站进行注册。
    </p>
  </div>
  
  <div id="wmd-preview-section-7263" class="wmd-preview-section preview-content">
    <h2 id="microrna新基因的克隆及鉴定方法">
      microRNA新基因的克隆及鉴定方法
    </h2>
    
    <p>
      略
    </p>
  </div>
</div>
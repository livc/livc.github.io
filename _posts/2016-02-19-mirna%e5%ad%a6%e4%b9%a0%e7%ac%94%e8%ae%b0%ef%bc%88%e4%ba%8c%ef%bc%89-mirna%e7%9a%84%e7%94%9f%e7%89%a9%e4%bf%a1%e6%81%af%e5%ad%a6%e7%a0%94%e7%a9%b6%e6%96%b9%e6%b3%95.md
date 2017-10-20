---
title: microRNA学习笔记（二）——microRNA的生物信息学研究方法
layout: post
permalink: /blog/59
categories:
  - 生物信息学
tags:
  - miRNA
---
<div id="wmd-preview-section-1" class="wmd-preview-section preview-content">
  <p>
    最近发现博客的ol标签不起作用，应该是主题的问题，已经反映给作者了。所以文章中先用ul。
  </p>
</div>

<div id="wmd-preview-section-2" class="wmd-preview-section preview-content">
  <h2 id="microrna生物信息学分析策略概述">
    microRNA生物信息学分析策略概述
  </h2>
  
  <p>
    microRNA基因常规生物信息学分析策论：
  </p>
  
  <ul>
    <li>
      获得microRNA序列信息，包括成熟和前体microRNA（pre-microRNA）序列、microRNA基因组定位信息、microRNA基因分布特点（即确定目的microRNA属于基因间分布性还是基因内分布性microRNA）。
    </li>
    <li>
      microRNA基因簇分析，即目的microRNA基因与相邻microRNA基因关系的分析。
    </li>
    <li>
      microRNA基因的种系发育分析。
    </li>
    <li>
      新microRNA基因的预测与生物信息学验证。
    </li>
    <li>
      目的microRNA基因的序列分析，包括目的microRNA的启动子预测和转录因子结合位点分析。
    </li>
    <li>
      目的microRNA靶基因预测。
    </li>
  </ul>
</div>

<div id="wmd-preview-section-3" class="wmd-preview-section preview-content">
  <h2 id="microrna序列信息获取及相关数据库的建立">
    microRNA序列信息获取及相关数据库的建立
  </h2>
</div>

<div id="wmd-preview-section-4" class="wmd-preview-section preview-content">
  <h3 id="microrna-base">
    microRNA Base
  </h3>
  
  <p>
    目前最常用的是microRNA信息综合网站——microRNA Base（<a href="http://mirbase.org/" target="_blank">http://mirbase.org/</a>）<br /> 它主要有三个功能：
  </p>
  
  <ul>
    <li>
      Database，microRNA序列数据库查询页面，有各个物种microRNA的具体序列、基因组分布和详细序列注释信息。
    </li>
    <li>
      Registry，提交新发现的microRNA序列到数据库。
    </li>
    <li>
      Targets，链接到microCosm、TargetScan、Pictar，可以查询靶基因预测数据库检索目的microRNA的预测靶基因（现在没有这个功能了）
    </li>
  </ul>
</div>

<div id="wmd-preview-section-5" class="wmd-preview-section preview-content">
  <h3 id="genbank">
    GenBank
  </h3>
  
  <p>
    GenBank（<a href="http://www.ncbi.nlm.nih.gov/genbank" target="_blank">http://www.ncbi.nlm.nih.gov/genbank</a>）属于NCBI（美国生物技术信息中心），收录了绝大部分已知的公开的DNA和蛋白质序列，存储了相应参考文献记录和生物学注释。
  </p>
  
  <p>
    这个数据库通常作为microRNA Base检索的补充。
  </p>
</div>

<div id="wmd-preview-section-6" class="wmd-preview-section preview-content">
  <h2 id="microrna簇的分析策略">
    microRNA簇的分析策略
  </h2>
</div>

<div id="wmd-preview-section-7" class="wmd-preview-section preview-content">
  <h3 id="microrna簇的发现与研究现状">
    microRNA簇的发现与研究现状
  </h3>
  
  <p>
    microRNA成簇现象（microRNA Clustering）：microRNA基因在染色体上分布是紧密的，有的甚至只相隔几十个碱基。
  </p>
  
  <ul>
    <li>
      成簇的microRNA基因具有协同作用。
    </li>
    <li>
      成簇的microRNA序列可以相同也可以不同，通常包含2-3个microRNA成员，但也存在较大的microRNA簇。
    </li>
  </ul>
</div>

<div id="wmd-preview-section-8" class="wmd-preview-section preview-content">
  <h3 id="microrna簇的分析方法">
    microRNA簇的分析方法
  </h3>
  
  <ul>
    <li>
      编码基因间的microRNA，以3000nt作为相邻microRNA间距离的最大阈值来寻找染色体同一方向的可成簇microRNA。
    </li>
    <li>
      编码基因内的microRNA，以整个编码基因DNA序列作为成簇分析对象。
    </li>
  </ul>
</div>

<div id="wmd-preview-section-9" class="wmd-preview-section preview-content">
  <h4 id="在线分析工具promir-ⅱ">
    在线分析工具ProMiR Ⅱ
  </h4>
  
  <p>
    ProMiR Ⅱ（<a href="http://cbit.snu.ac.kr/~ProMiR2/" target="_blank">http://cbit.snu.ac.kr/~ProMiR2/</a>）可以预测目的microRNA附近新microRNA基因并可搜寻目标序列是否含有成簇microRNA基因。（该网站目前上不去。。）
  </p>
</div>

<div id="wmd-preview-section-10" class="wmd-preview-section preview-content">
  <h2 id="microrna种系发育分析">
    microRNA种系发育分析
  </h2>
  
  <p>
    物种间或同一物种内大量高度同源的microRNA及microRNA基因簇的存在提示，microRNA基因的物种进化方式以“复制”为主。
  </p>
</div>

<div id="wmd-preview-section-11" class="wmd-preview-section preview-content">
  <h4 id="种系发育分析的好处">
    种系发育分析的好处
  </h4>
  
  <ul>
    <li>
      可以观察microRNA基因在物种进化过程中的序列演化和基因变迁。
    </li>
    <li>
      可以帮助理解microRNA家族成员间的亲缘关系。
    </li>
    <li>
      有时甚至可以发现新的microRNA基因。
    </li>
  </ul>
</div>

<div id="wmd-preview-section-12" class="wmd-preview-section preview-content">
  <h4 id="microrna基因的种系发育分析流程">
    microRNA基因的种系发育分析流程
  </h4>
  
  <ul>
    <li>
      目的microRNA基因在多个物种或同一物种内的序列数据采集（通过microRNA Base、Ensemble等网站查询）。
    </li>
    <li>
      目的microRNA基因在物种间或种内的保守性分析。
    </li>
    <li>
      绘制目的基因进化树。
    </li>
    <li>
      对目的microRNA基因进行物种进化史分析。
    </li>
  </ul>
  
  <p>
    与蛋白编码基因相比，microRNA基因数量相对较少，而且进行microRNA基因发育分析所需的序列分析工具和资源也较少，尚不能进行大规模的microRNA基因发育分析。
  </p>
</div>

<div id="wmd-preview-section-13" class="wmd-preview-section preview-content">
  <h2 id="microrna基因转录调控分析">
    microRNA基因转录调控分析
  </h2>
  
  <p>
    启动子：控制基因表达（转录）的起始时间和表达的程度。<br /> 启动子本身并不控制基因活动，而是通过与称为转录因子（transcription factor）的这种蛋白质（proteins）结合而控制基因活动的。<br /> 转录因子就像一面“旗子”，指挥着酶（enzymes）(RNA聚合酶RNA polymerases) 的活动。这种酶指导着RNA合成。
  </p>
</div>

<div id="wmd-preview-section-14" class="wmd-preview-section preview-content">
  <h3 id="启动子分析">
    启动子分析
  </h3>
  
  <p>
    常用下列启动子分析软件对microRNA基因进行RNA聚合酶Ⅱ启动子分析：
  </p>
</div>

<div id="wmd-preview-section-1193" class="wmd-preview-section preview-content">
  <h4 id="promoter-20">
    <a href="http://www.cbs.dtu.dk/services/Promoter/" target="_blank">Promoter 2.0</a>
  </h4>
  
  <p>
    Promoter 2.0分析结果较简单，只给出启动子预测区定位及评分。
  </p>
</div>

<div id="wmd-preview-section-7048" class="wmd-preview-section preview-content">
  <h4 id="promoter-scan">
    <a href="http://www-bimas.cit.nih.gov/molbio/proscan/" target="_blank">Promoter Scan</a>
  </h4>
  
  <p>
    与Promoter 2.0相比，Promoter Scan不但提供了提交序列的详细启动子分布预测及评分，而且还提供了转录因子结合位点预测并包括了正反序列。
  </p>
</div>

<div id="wmd-preview-section-15747" class="wmd-preview-section preview-content">
  <h4 id="neural-networkpromoter-predictionnnpp">
    <a href="http://www.fruitfly.org/seq_tools/promoter.html" target="_blank">Neural NetworkPromoter Prediction（NNPP）</a>
  </h4>
  
  <p>
    NNPP的分析结果也比较简单，只给出了启动子预测区定位及评分，并不提供转录因子结合位点预测。
  </p>
  
  <p>
    作者推荐以<strong>Promoter Scan</strong>为主，另外两种作为参考。
  </p>
</div>

<div id="wmd-preview-section-17996" class="wmd-preview-section preview-content">
  <h3 id="转录因子结合位点分析">
    转录因子结合位点分析
  </h3>
</div>

<div id="wmd-preview-section-66935" class="wmd-preview-section preview-content">
  <h4 id="作用">
    作用：
  </h4>
  
  <ul>
    <li>
      了解microRNA基因转录调控信息
    </li>
    <li>
      为目的microRNA的功能研究提供线索
    </li>
  </ul>
  
  <p>
    真核生物转录因子结合位点分析通常在BIOBASE生物数据库进行，常用下列软件搜索TANSFAC转录因子数据库以预测目的基因序列的转录因子结合位点：
  </p>
  
  <ul>
    <li>
      <a href="http://www.gene-regulation.com/cgi-bin/pub/programs/patch/bin/patch.cgi" target="_blank">Patch</a>： 能有效分析目的基因序列并提供该序列详细的预测转录因子结合位点。
    </li>
    <li>
      <a href="http://www.gene-regulation.com/cgi-bin/pub/programs/pmatch/bin/p-match.cgi" target="_blank">P-MATCH 1.0</a>：与<em>Patch</em>相比提供了更为详细的转录因子结合位点预测分析，预测精确度更高，还可以预测组织特异性转录因子并图形化显示分析结果，是目的microRNA基因转录因子分析的<strong>最主要工具</strong>。
    </li>
    <li>
      <a href="http://gene-regulation.com/pub/programs/alibaba2/index.html" target="_blank">AliBaba2</a>：AliBaba2与前两者相比界面简洁直观，能给出较详细的分析数据，且分析结果图形化后可以更直观地搜索相关功能。
    </li>
    <li>
      <a href="http://www.gene-regulation.com/cgi-bin/pub/programs/fmatch/ffa2.cgi" target="_blank">F-Match</a>
    </li>
    <li>
      <a href="http://www.gene-regulation.com/cgi-bin/pub/programs/match/bin/match.cgi" target="_blank">Match</a>
    </li>
    <li>
      <a href="http://www.gene-regulation.com/cgi-bin/pub/programs/sigscan/sigscan.cgi" target="_blank">SIGNAL SCAN</a>
    </li>
  </ul>
  
  <p>
    microRNA其他相关的生物信息学分析方法还有新microRNA基因的预测、鉴定、注册以及对于特异microRNA作用机制研究至关重要的靶基因预测等，作者将其放在后续相关的分子生物学方法部分，与相应的分子生物学方法结合阐述，使读者一目了然。
  </p>
</div>
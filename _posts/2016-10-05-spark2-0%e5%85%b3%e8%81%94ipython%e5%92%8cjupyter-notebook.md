---
title: Spark2.0关联Ipython和Jupyter Notebook
layout: post
permalink: /168
categories:
  - 杂谈
tags:
  - ipython
  - notebook
  - spark
---
在Spark2.0中对相关接口做了调整

#### 关联Ipython

    PYSPARK_DRIVER_PYTHON=ipython  ./bin/pyspark
    

#### 关联Notebook

    PYSPARK_DRIVER_PYTHON_OPTS='/usr/local/bin/jupyter-notebook'  ./bin/pyspark
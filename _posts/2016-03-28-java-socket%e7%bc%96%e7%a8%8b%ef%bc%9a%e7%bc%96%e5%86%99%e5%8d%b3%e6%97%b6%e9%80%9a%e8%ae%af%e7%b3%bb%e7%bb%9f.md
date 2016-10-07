---
title: JAVA Socket编程：编写即时通讯系统
layout: post
permalink: /126
categories:
  - Java
tags:
  - socket
  - 即时通讯
---
<div id="wmd-preview-section-245" class="wmd-preview-section preview-content">
  <h1 id="功能">
    功能
  </h1>
  
  <ul>
    <li>
      登录
    </li>
    <li>
      发送文件、表情、信息
    </li>
    <li>
      多人同时聊天
    </li>
    <li>
      离线发送消息（上线后就能看到）
    </li>
  </ul>
</div>

<div id="wmd-preview-section-253" class="wmd-preview-section preview-content">
  <h1 id="服务器和客户端通信协议">
    服务器和客户端通信协议
  </h1>
  
  <p>
    客户端登录，客户端取得用户列表，以及客户端和客户端的通信都必须跟服务器交互，我们约定客户端和服务器端的通信协议如下：
  </p>
</div>

<div id="wmd-preview-section-267" class="wmd-preview-section preview-content">
  <h2 id="请求数据格式">
    请求数据格式
  </h2>
  
  <p>
    客户端发送请求数据格式：
  </p>
  
  <p>
    请求码 请求数据
  </p>
  
  <p>
    请求码：<br /> 101 用户登录<br /> 102 取得用户列表<br /> 103 发送消息
  </p>
  
  <p>
    如登录请求，客户端向服务器发送的请求数据为：<br /> 101|用户名,密码
  </p>
  
  <p>
    如取得用户列表，客户端向服务器发送的请求数据为：<br /> 102|
  </p>
  
  <p>
    如发送消息，客户端向服务器发送的请求数据为：<br /> 103|消息发送方,消息接收方,消息内容
  </p>
</div>

<div id="wmd-preview-section-285" class="wmd-preview-section preview-content">
  <h2 id="响应数据格式">
    响应数据格式
  </h2>
  
  <p>
    服务器响应数据格式：<br /> 响应码 响应数据
  </p>
  
  <p>
    响应码：<br /> 1 响应成功<br /> 0 响应失败
  </p>
  
  <p>
    如登录请求，服务器端的响应数据为：<br /> 1| 或者 0|
  </p>
  
  <p>
    如取得用户列表，服务器端的响应数据为：<br /> 1|消息类型(102)@消息发送方(Server)@用户1,用户2,用户3@消息发送时间
  </p>
  
  <p>
    如服务器给客户端发送消息<br /> 1|消息类型(103)@消息发送方@消息内容@消息发送时间
  </p>
</div>

<div id="wmd-preview-section-1255" class="wmd-preview-section preview-content">
  <h2 id="服务器消息队列格式">
    服务器消息队列格式
  </h2>
  
  <p>
    服务器端接收到客户的请求后（取得用户列表和用户信息）将请求结果放在消息队列中，发送消息的线程用队列中取消息，发送给客户端，
  </p>
  
  <p>
    我们约定消息队列中消息的格式如下：
  </p>
  
  <table>
    <tr>
      <th>
        消息发送方
      </th>
      
      <th align="center">
        消息接收方
      </th>
      
      <th align="center">
        内容
      </th>
      
      <th align="center">
        发送时间
      </th>
      
      <th align="center">
        消息类别
      </th>
    </tr>
    
    <tr>
      <td>
        Server
      </td>
      
      <td align="center">
        tom
      </td>
      
      <td align="center">
        Tom,jack,luly,lily
      </td>
      
      <td align="center">
        2016-1-29 11:11:11
      </td>
      
      <td align="center">
        102
      </td>
    </tr>
    
    <tr>
      <td>
        Jack
      </td>
      
      <td align="center">
        tom
      </td>
      
      <td align="center">
        How are you doing?
      </td>
      
      <td align="center">
        2016-1-29 12:12:12
      </td>
      
      <td align="center">
        103
      </td>
    </tr>
  </table>
</div>

<div id="wmd-preview-section-1441" class="wmd-preview-section preview-content">
  <h1>
    效果
  </h1>
  
  <p>
    <img class="alignnone" src="https://i2.wp.com/ww2.sinaimg.cn/large/9cd77f2ejw1f2ctfucckfj20c1085q36.jpg?resize=433%2C293" alt="" data-recalc-dims="1" />
  </p>
</div>

&nbsp;

<img class="alignnone" src="https://i1.wp.com/ww3.sinaimg.cn/large/9cd77f2ejw1f2ctfvmaa6j20bs0aomxh.jpg?resize=424%2C384" alt="" data-recalc-dims="1" />

&nbsp;

&nbsp;

<img class="alignnone" src="https://i0.wp.com/ww3.sinaimg.cn/large/9cd77f2ejw1f2ctfw7jszj207z086dg9.jpg?resize=287%2C294" alt="" data-recalc-dims="1" />

&nbsp;

&nbsp;

<img class="alignnone" src="https://i1.wp.com/ww1.sinaimg.cn/large/9cd77f2ejw1f2ctfwosduj20bv0akjrt.jpg?resize=427%2C380" alt="" data-recalc-dims="1" />

<div id="wmd-preview-section-1441" class="wmd-preview-section preview-content">
  <h1 id="服务端代码">
    源码下载
  </h1>
</div>

<div id="wmd-preview-section-1401" class="wmd-preview-section preview-content">
  <p id="客户端代码">
    <a href="https://pan.baidu.com/s/1nuBOmYP" target="_blank">https://pan.baidu.com/s/1nuBOmYP</a>
  </p>
</div>
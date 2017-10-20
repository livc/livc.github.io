---
title: JAVA Socket编程：使用HTTP实现网络通信
layout: post
permalink: /blog/120
categories:
  - Java
tags:
  - http
  - socket
---
<div id="wmd-preview-section-32" class="wmd-preview-section preview-content">
  <h1 id="功能">
    功能
  </h1>
</div>

<div id="wmd-preview-section-180" class="wmd-preview-section preview-content">
  <h2 id="服务器功能">
    服务器功能
  </h2>
  
  <p>
    提供 HTML,JPG 等 MIME 类型的资源。
  </p>
</div>

<div id="wmd-preview-section-198" class="wmd-preview-section preview-content">
  <h2 id="客户端功能">
    客户端功能
  </h2>
  
  <p>
    访问服务器，获取 HTML 和 JPG 资源，保存到本地磁盘。
  </p>
</div>

<div id="wmd-preview-section-234" class="wmd-preview-section preview-content">
  <h1 id="预习内容http通信原理">
    预习内容：HTTP通信原理
  </h1>
  
  <p>
    <a href="https://i0.wp.com/ww1.sinaimg.cn/large/9cd77f2ejw1f25ksfsm50j20dm08hta3.jpg"><img class="alignnone" src="https://i0.wp.com/ww1.sinaimg.cn/large/9cd77f2ejw1f25ksfsm50j20dm08hta3.jpg?resize=490%2C305" alt="" data-recalc-dims="1" /></a>
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    <a href="https://i0.wp.com/ww2.sinaimg.cn/mw690/9cd77f2ejw1f25kuzcqy9j20ge0ogjt6.jpg"><img class="alignnone" src="https://i0.wp.com/ww2.sinaimg.cn/mw690/9cd77f2ejw1f25kuzcqy9j20ge0ogjt6.jpg?resize=590%2C880" alt="" data-recalc-dims="1" /></a>
  </p>
</div>

<div id="wmd-preview-section-274" class="wmd-preview-section preview-content">
  <h1 id="服务器端代码">
    服务器端代码
  </h1>
</div>

<div id="wmd-preview-section-831" class="wmd-preview-section preview-content">
  <h2 id="taskthreadjava">
    TaskThread.java
  </h2>
  
  <pre class="brush: java; title: ; notranslate" title="">
package httpServer;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;

public class TaskThread extends Thread{
	private Socket s;
	
	public TaskThread(Socket s){
		this.s = s;
	}
	
	public void run(){
		BufferedReader reader;
		PrintStream writer;
		FileInputStream in;
		DataOutputStream os;
		String firstLineOfRequest;
		try {
			reader = new BufferedReader(new InputStreamReader(s.getInputStream()));
			firstLineOfRequest = reader.readLine();
			//System.out.println(firstLineOfRequest);
			String uri = firstLineOfRequest.split(" ")[1];
			writer = new PrintStream(s.getOutputStream());
			File file = new File("D:/http"+uri);
			if(file.exists()){
				writer.println("HTTP/1.1 200 OK");//返回应答消息，并结束应答
				if(uri.endsWith(".html")) {
					writer.println("Content-Type:text/html");
				}
				else if(uri.endsWith(".jpg")) {
					writer.println("Content-Type:image/jpeg");
				}else {
					writer.println("Content-Type:application/octet-stream");
				}	
				in = new FileInputStream("D:/http"+uri);	
				//发送响应头
				writer.println("Content-Lenth:"+in.available());
				writer.println();
				writer.flush();
				//发送响应体
				os = new DataOutputStream(s.getOutputStream());
				byte[]b=new byte[1024];
				int len = 0;
				len = in.read(b);
				while(len!=-1) {
					os.write(b,0,len);
					len=in.read(b);
				}
				os.flush();
				writer.close();
			}else{
				//发送响应头
				writer.println("HTTP/1.1 404 Not Found");
				writer.println("Content-Type:text/plain");
				writer.println("Content-Length:7");
				writer.println();
				//发送响应体
				writer.print("访问内容不存在");
				writer.flush();
				writer.close();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
}
</pre>
</div>

<div id="wmd-preview-section-942" class="wmd-preview-section preview-content">
  <h2 id="serverjava">
    server.java
  </h2>
  
  <pre class="brush: java; title: ; notranslate" title="">
package httpServer;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class server {
	public static void main(String[]args) {
		ServerSocket ss=null;
		try {
			ss=new ServerSocket(8888);
		} catch (IOException e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
		}
		while(true) {
			try {
				Socket s = ss.accept();
				TaskThread t = new TaskThread(s);
				t.start();
			} catch (IOException e) {
				// TODO 自动生成的 catch 块
				e.printStackTrace();
			}
		}
		
	}
}

</pre>
  
  <p>
    服务器端写完后可以启动后在浏览器中测试一下如：<br /> 输入 http://localhost:8888/login.html<br /> 输入 http://localhost:8888/ios.jpg
  </p>
</div>

<div id="wmd-preview-section-254" class="wmd-preview-section preview-content">
  <h1 id="客户端代码">
    客户端代码
  </h1>
</div>

<div id="wmd-preview-section-662" class="wmd-preview-section preview-content">
  <h2 id="clientjava">
    Client.java
  </h2>
  
  <pre class="brush: java; title: ; notranslate" title="">
package httpClient;

import java.io.BufferedReader;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class Client {

	public static void main(String[] args) throws UnknownHostException, IOException {
		// TODO Auto-generated method stub
		Scanner scanner= new Scanner(System.in);
		//连接服务器
		Socket s = new Socket("localhost", 8888);
		//发送请求头	
		PrintStream writer = new PrintStream(s.getOutputStream());
		System.out.println("请输入filename:");
		String filename = scanner.nextLine();
		writer.println("GET /"+filename+" HTTP/1.1");
		writer.println("Host:localhost");
		writer.println("connetion:keep-alive");
		writer.println();
		writer.flush();
		//接受响应状态
		InputStream in=s.getInputStream();
		BufferedReader reader=new BufferedReader(new InputStreamReader(in));
		String firstLineOfResponse = reader.readLine();
		String secondLineOfResponse = reader.readLine();
		String threeLineOfResponse = reader.readLine();
		if(firstLineOfResponse.endsWith("OK")) {
			System.out.println("开始传输\n");
			byte[] b = new byte[1024];
			FileOutputStream out= new FileOutputStream("D:/http/h"+"/"+filename);
			int len = in.read(b);
			while(len!=-1) {
				out.write(b,0,len);
				len=in.read(b);
			}
			System.out.println("传输完成\n");
			in.close();
			out.close();
		}
		else {
			//output error message
			System.out.println("该文件不存在\n");
			StringBuffer result = new StringBuffer();
			String line;
			while((line=reader.readLine())!=null) {
				result.append(line);
			}
			reader.close();
			System.out.println(result);
		}
	
	}

}

</pre>
</div>
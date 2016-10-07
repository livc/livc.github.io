---
title: JAVA Socket编程：使用FTP实现网络通信
layout: post
permalink: /105
categories:
  - Java
tags:
  - ftp
  - socket
---
<div id="wmd-preview-section-2" class="wmd-preview-section preview-content">
  <div id="wmd-preview-section-535" class="wmd-preview-section preview-content">
    <h1 id="功能">
      预习内容
    </h1>
  </div>
  
  <div id="wmd-preview-section-565" class="wmd-preview-section preview-content">
    <h2 id="ftp通信流程和通信命令">
      FTP通信流程和通信命令
    </h2>
    
    <p>
      FTP使用2个端口，一个数据端口和一个命令端口（也叫做控制端口）。这两个端口一般是21（命令端口）和 20（数据端口）。
    </p>
  </div>
  
  <div id="wmd-preview-section-580" class="wmd-preview-section preview-content">
    <h3 id="命令端口">
      命令端口
    </h3>
    
    <p>
      一般来说，客户端有一个 Socket 用来连接 FTP 服务器的相关端口，它负责 FTP 命令的发送和接收返回的响应信息。一些操作如“ 登录” 、 “ 改变目录” 、 “ 删除文件” ，依靠这个连接发送命令就可完成。
    </p>
  </div>
  
  <div id="wmd-preview-section-595" class="wmd-preview-section preview-content">
    <h3 id="数据端口">
      数据端口
    </h3>
    
    <p>
      对于有数据传输的操作，主要是显示目录列表，上传、下载文件，我们需要依靠另一个Socket 来完成。
    </p>
    
    <p>
      如果使用被动模式，通常服务器端会返回一个端口号。客户端需要另开一个 Socket 来连接这个端口，然后数据会通过这个新开的端口传输。
    </p>
    
    <p>
      如果使用主动模式，通常客户端会发送一个端口号给服务器端，并在这个端口监听。服务器需要连接到客户端开启的这个数据端口，并进行数据的传输。
    </p>
  </div>
  
  <div id="wmd-preview-section-610" class="wmd-preview-section preview-content">
    <h3 id="主动模式-port">
      主动模式 (PORT)
    </h3>
    
    <p>
      主动模式下，客户端随机打开一个大于 1024 的端口（我们称这个端口为 N） 向服务器的命令端口，即 21 端口，发起连接，同时开放另一个端口监听 （我们称这个端口为 N+1） ，并向服务器发出 “port N+1” 命令，由服务器从它自己的数据端口 (20) 主动连接到客户端指定的数据端口 (N+1)。
    </p>
    
    <p>
      FTP 的客户端只是告诉服务器自己的端口号，让服务器来连接客户端指定的端口。对于客户端的防火墙来说，这是从外部到内部的连接，可能会被阻塞。
    </p>
  </div>
  
  <div id="wmd-preview-section-625" class="wmd-preview-section preview-content">
    <h3 id="被动模式-pasv">
      被动模式 (PASV)
    </h3>
    
    <p>
      为了解决服务器发起到客户的连接问题，有了另一种 FTP 连接方式，即被动方式。命令连接和数据连接都由客户端发起，这样就解决了从服务器到客户端的数据端口的连接被防火墙过滤的问题。被动模式下，当开启一个 FTP 连接时，客户端打开两个任意的本地端口(N > 1024 和 N+1) 。
    </p>
    
    <p>
      第一个端口连接服务器的 21 端口，提交 PASV 命令。然后，服务器会开启一个任意的端口 (P > 1024 )，返回如“ 227 entering passive mode (127,0,0,1,4,18)” 。 它返回了 227 开头的信息，在括号中有以逗号隔开的六个数字，前四个指服务器的地址，最后两个，将倒数第二个乘 256 再加上最后一个数字，这就是 FTP 服务器开放的用来进行数据传输的端口。如得到 227 entering passive mode (h1,h2,h3,h4,p1,p2)，那么端口号是p1*256+p2， ip 地址为 h1.h2.h3.h4。这意味着在服务器上有一个端口被开放。客户端收到命令取得端口号之后, 会通过 N+1 号端口连接服务器的端口 P，然后在两个端口之间进行数据传输。
    </p>
  </div>
  
  <div id="wmd-preview-section-640" class="wmd-preview-section preview-content">
    <h3 id="主要用到的-ftp-命令">
      主要用到的 FTP 命令
    </h3>
    
    <p>
      FTP 每个命令都有 3 到 4 个字母组成，命令后面跟参数，用空格分开。每个命令都以 “\r\n”结束。
    </p>
    
    <p>
      要下载或上传一个文件，首先要登入 FTP 服务器，然后发送命令，最后退出。这个过程中，主要用到的命令有 USER、PASS、SIZE 、CWD、RETR、PASV、PORT、REST、QUIT。
    </p>
    
    <ul>
      <li>
        USER:指定用户名。通常是控制连接后第一个发出的命令。“USER gaoleyi\r\n”： 用户名为gaoleyi 登录。
      </li>
      <li>
        PASS:指定用户密码。该命令紧跟 USER 命令后。“PASS gaoleyi\r\n”：密码为 gaoleyi。
      </li>
      <li>
        SIZE:从服务器上返回指定文件的大小。“SIZE file.txt\r\n”：如果 file.txt 文件存在，则返回该文件的大小。
      </li>
      <li>
        CWD:改变工作目录。如：“CWD dirname\r\n”。
      </li>
      <li>
        PASV: 让服务器在数据端口监听，进入被动模式。如：“PASV\r\n”。
      </li>
      <li>
        PORT: 告诉 FTP 服务器客户端监听的端口号，让 FTP 服务器采用主动模式连接客户端。如：“PORT h1,h2,h3,h4,p1,p2”。
      </li>
      <li>
        RETR: 下载文件。“RETR file.txt \r\n”：下载文件 file.txt。
      </li>
      <li>
        STOR: 上传文件。“STOR file.txt\r\n”：上传文件 file.txt。
      </li>
      <li>
        REST: 该命令并不传送文件，而是略过指定点后的数据。此命令后应该跟其它要求文件传输的 FTP 命令。“REST 100\r\n”：重新指定文件传送的偏移量为 100 字节。
      </li>
      <li>
        QUIT: 关闭与服务器的连接。
      </li>
    </ul>
  </div>
  
  <div id="wmd-preview-section-655" class="wmd-preview-section preview-content">
    <h3 id="ftp-响应码">
      FTP 响应码
    </h3>
    
    <p>
      客户端发送 FTP 命令后，服务器返回响应码。
    </p>
    
    <p>
      响应码用三位数字编码表示：
    </p>
    
    <p>
      第一个数字给出了命令状态的一般性指示，比如响应成功、失败或不完整。<br /> 第二个数字是响应类型的分类，如 2 代表跟连接有关的响应，3 代表用户认证。<br /> 第三个数字提供了更加详细的信息。如：
    </p>
    
    <p>
      227 entering passive mode (127,0,0,1,4,18)<br /> 230 Logged on<br /> 250 CWD successful
    </p>
  </div>
  
  <div id="wmd-preview-section-670" class="wmd-preview-section preview-content">
    <h2 id="socket编程">
      Socket编程
    </h2>
    
    <p>
      <img title="" src="https://i2.wp.com/ww2.sinaimg.cn/large/9cd77f2ejw1f1xtz5mkiqj20kc0czdhs.jpg" alt="" data-recalc-dims="1" />
    </p>
    
    <p>
      典型的Socket通信代码如下：
    </p>
    
    <p>
      <img title="" src="https://i1.wp.com/ww3.sinaimg.cn/large/9cd77f2ejw1f1xtz6ulm5j20ki0blwh1.jpg" alt="" data-recalc-dims="1" />
    </p>
  </div>
  
  <div id="wmd-preview-section-685" class="wmd-preview-section preview-content">
    <h2 id="多线程编程">
      多线程编程
    </h2>
    
    <p>
      为了保证FTP服务器能够同时处理多个客户端的请求，服务器为每个客户端分配一个线程，参考代码如下：
    </p>
    
    <p>
      <img title="" src="https://i2.wp.com/ww3.sinaimg.cn/large/9cd77f2ejw1f1xtz7cm9yj20l507caaa.jpg" alt="" data-recalc-dims="1" />
    </p>
  </div>
  
  <div id="wmd-preview-section-700" class="wmd-preview-section preview-content">
  </div>
  
  <div class="wmd-preview-section preview-content">
    <h1 id="服务器端代码">
      服务器端代码
    </h1>
    
    <h2 id="TaskThread.java">
      TaskThread.java
    </h2>
    
    <pre class="brush: java; title: ; notranslate" title="">


import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Calendar;
import java.util.Random;
import java.util.Scanner;

public class TaskThread extends Thread {
	private Socket s;
	private ServerSocket ds = null;
	static Socket dataSocket;
	static File file;
	String msg; //客户端发过来的消息
	String order; //FTP码
	
	String path = "D:\\ftp";
	
	public TaskThread(Socket s){
		this.s = s;
	}
	
	public void run(){		
		try {
			DataInputStream dis = new DataInputStream(s.getInputStream());
			DataOutputStream dos = new DataOutputStream(s.getOutputStream());
			
			while(true){
				msg = dis.readUTF();
				order = msg.substring(0, 4);
				
				System.out.println("收到指令：" + msg);
				if(order.equals("USER")){
					String username = msg.substring(4).trim();
                    System.out.println("收到客户端账号："+ username);
                    if(username == ""){
                    	dos.writeUTF("501 Syntax error");
                    }
                    	
                    else
                    	dos.writeUTF("331 Password required for " + username);
				}
				
				else if(order.equals("PASS")){
					String password = msg.substring(4).trim();
					System.out.println("收到密码:" + password);
					if(password.equals("root")){
						dos.writeUTF("230 Logged on");
					}else{
						dos.writeUTF("530 Login or password incorrect!");
	
					}
				}
				
				
				
				/***
				 * PASV
				 */
				else if(order.equals("PASV")){
					Random generator = new Random();
					int port_high, port_low;
					while(true){
							port_high = 1+generator.nextInt(20);
							port_low = 100+generator.nextInt(1000);
							try {
								ds = new ServerSocket(port_high*256+port_low);
								break;
							} catch (Exception e) {
								continue;
							}
					}
					InetAddress i=null;
					try {
						i = InetAddress.getLocalHost();
					} catch (UnknownHostException e) {
						e.printStackTrace();
					}	
					dos.writeUTF("227 entering passive mode ("+i.getHostAddress().replace(".", ",")+","+port_high+","+port_low+")");
					dataSocket = ds.accept(); // ??
				}
				
				
				
				
				/***
				 * List
				 */
				else if(order.equals("List")){
					String name = msg.substring(4).trim();
					//System.out.println(name);
					String str = "";
					File file = new File(name);
					Calendar cal = Calendar.getInstance(); 
					
					String [] filenames = file.list();
					
					File tempfile = null;
					for(int i = 0; i &lt; filenames.length; i++){
						tempfile = new File(filenames[i]);
						
						
						/**
						 * 获取文件的创建时间
						 */
						String filePath = name+"\\"+tempfile;
						
						//System.out.println(filePath);
				        String strTime = null;  
				        try {  
				            Process p = Runtime.getRuntime().exec("cmd /C dir "           
				                    + filePath  
				                    + "/tc" );  
				            InputStream is = p.getInputStream();   
				            BufferedReader br = new BufferedReader(new InputStreamReader(is));             
				            String line;  
				            while((line = br.readLine()) != null){  
				                if(line.endsWith(".txt")){  
				                    strTime = line.substring(0,17);  
				                    break;  
				                }                             
				             }   
				        } catch (IOException e) {  
				            e.printStackTrace();  
				        }         
				        
		
						//cal.setTimeInMillis(tempfile.lastModified());
						str += filenames[i] + " " + tempfile.length() + "字节  " + strTime + "\n";
					}
					dos.writeUTF(str);  //文件列表信息
					dos.flush();
					dos.writeUTF("226 Transfer OK");
					dos.flush();
				}
				
				
				
				
				
				/***
				 * RETR
				 */
				else if(order.equals("RETR")){
					order = msg.substring(0, 4);
					System.out.println("收到指令：" + msg);
					String address = msg.substring(4).trim();					
					file = new File(address);
					
					System.out.println(file);
					
					if(file.isDirectory()){  //目标是文件夹
						
						System.out.println("下载文件夹");
						String [] filenames = file.list();
						int numofFile = filenames.length;
						System.out.println("传输文件夹内文件个数：" + numofFile);
						dos.write(numofFile); //传输文件夹内文件个数
						
						for(int i = 0; i &lt; numofFile; i++){
							dos.writeUTF(filenames[i]); //传输每个文件名
							System.out.println(filenames[i]);
							file = new File(address +"\\" + filenames[i]);


							FileInputStream fis = new FileInputStream(file);
							OutputStream os = dataSocket.getOutputStream();
							
								
							byte [] buffer = new byte[1024];
							int byteread = 0;
							while((byteread = fis.read(buffer))!=-1){
								os.write(buffer, 0, byteread);
							}
							fis.close();
							os.close();
						}
					}else{ //目标是文件
						file = new File(address);
						server_downloadFile(s, 0);
					}
					
				}
				
				
				
				
				
				
				/***
				 * REST
				 */
				else if(order.equals("REST")){
					//指定偏移位置
					int len = Integer.parseInt(msg.substring(4).trim());
					dos.writeUTF("350 Rest supported. Restarting at " + len);
					//读取RETR指令
					msg = dis.readUTF();
					String address = msg.substring(4).trim();					
					file = new File(address);
					server_downloadFile(s, len);
				}
				
				else if(order.equals("SIZE")){
					String address = msg.substring(4).trim();
					File file = new File(address);
					if(file.exists()){	//服务器存在此文件
						dos.writeUTF("exists"); 
						dos.writeUTF(Long.toString(file.length()));
					}
					else{		
						dos.writeUTF("服务器不存在此文件");
					}
					
				}
				
				
				
				
				/***
				 * 切换目录
				 */
				else if(order.equals("CWD")){
					String newPath = msg.substring(3).trim();
					path = newPath;
				}
				
				
				
				/***
				 * STOR
				 */
				else if(order.equals("STOR")){
					String address=msg.substring(4).trim();
					File tmpFile=new File("D:\\ftp\\" + address);
					if(tmpFile.exists()){
						String str=dis.readUTF();
						if(str.equals("exists")){ //断点续传
							int len=Integer.parseInt(Long.toString(tmpFile.length()));
							byte[] bytes=new byte[1024];
							InputStream is=dataSocket.getInputStream();
							FileOutputStream fos=new FileOutputStream(tmpFile,true);
							int length=0;
							while((length=is.read(bytes))!=-1){
								fos.write(bytes, len, length);
							}
							System.out.println("上传成功1");
							is.close();
							fos.close();
						}else{
							System.out.println("客户端:"+str);
						}
					}else{
						String str=dis.readUTF();
						if(str.equals("exists")){
							byte[] bytes=new byte[1024];
							InputStream is=dataSocket.getInputStream();
							FileOutputStream fos=new FileOutputStream(tmpFile);
							int length=0;
							while((length=is.read(bytes))!=-1){
								fos.write(bytes, 0, length);
							}
							System.out.println("上传成功2");
							fos.close();
							is.close();
						}else{
							System.out.println("客户端:"+str);
						}
					}
						
				}
				
				
				
				
				
				
				
				else if(order.equals("QUIT")){
					dos.writeUTF("221 Goodbye");
					s.close();
					ds.close();
					return;
				}
				
				
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	/***
	 * 下载单个文件
	 */
	
	public static void server_downloadFile(Socket s, int len) throws IOException{
		DataInputStream dis = new DataInputStream(s.getInputStream());
		DataOutputStream dos = new DataOutputStream(s.getOutputStream());
		FileInputStream fis = new FileInputStream(file);
		OutputStream os = dataSocket.getOutputStream();
		if(file.exists()){
			dos.writeUTF("exists"); //服务器存在此文件
			byte [] buffer = new byte[1024];
			int byteread = 0;
			while((byteread = fis.read(buffer))!=-1){
				os.write(buffer, len, byteread);
			}
			fis.close();
			os.close();

		}else {
			dos.writeUTF("服务器不存在此文件");
		}
	}
}

</pre>
    
    <h2 id="StartServer.java">
      StartServer.java
    </h2>
    
    <pre class="brush: java; title: ; notranslate" title="">


import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class StartSever {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//1.打开一个监听端口
		try {
			ServerSocket ss = new ServerSocket(3336);
			while(true){
				//2. 接受客户端的访问
				Socket s = ss.accept();
				//3.启动子线程，把s传递给子线程
				TaskThread tt = new TaskThread(s);
				//4.启动子线程
				tt.start(); //tt线程准备就绪,不能直接调用run方法
			}

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}

</pre>
    
    <h1 id="客户端代码">
      客户端代码
    </h1>
    
    <h2 id="Client.java">
      Client.java
    </h2>
    
    <pre class="brush: java; title: ; notranslate" title="">
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

public class Client {
	static String IP = "localhost";
	static Scanner scanner = new Scanner(System.in);
	static String reponse = "";  //服务器返回的结果
	static int port1;       //服务器开放数据传输的端口
	static String localFile = ""; //本地文件
	static String remoteFile = "";   //服务器文件
	static String localFolder = ""; //本地文件夹
	static String remoteFolder = "";   //服务器文件夹
	
	public static void main(String[] args){
		// TODO Auto-generated method stub
		try {
			Socket s = new Socket(IP, 3336);
			BufferedReader reader = new BufferedReader(new InputStreamReader(s.getInputStream()));
			PrintWriter writer = new PrintWriter(new OutputStreamWriter(s.getOutputStream()));
			connectFTP(s);
			Socket dataSocket = new Socket(IP, port1);
			//列出文件信息
			list(s, dataSocket);
			
			//下载文件（包括断点续传）
			//remoteFile = "D:\\ftp\\1.txt";
			//downloadFile(s, dataSocket, remoteFile);
			
			
			//下载文件夹
			//remoteFolder = "D:\\ftp\\down"; //下载这个文件夹
			//downloadFolder(s, dataSocket, remoteFolder);
			
			
			//上传文件（包括断点续传）
			//uploadFile(s, dataSocket, localFile);
			closeFTP(s);

		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	/**
	* 建立FTP连接
	*/
	public static void connectFTP(Socket s) throws IOException{
		DataInputStream dis=new DataInputStream(s.getInputStream());
		DataOutputStream dos=new DataOutputStream(s.getOutputStream());
		//String username = "livc";
		//String password = "rt";
		
		System.out.println("请输入账号：");
		String username = scanner.nextLine();
		dos.writeUTF("USER "+ username);
		dos.flush();
		reponse = dis.readUTF();
		System.out.println("服务器消息：" + "\n" + reponse); //331 Password required for livc95
		
		while(true){ //直到输入正确的密码
			System.out.println("请输入密码：");
			String password = scanner.nextLine();
			dos.writeUTF("PASS "+ password);
			dos.flush();
			reponse = dis.readUTF();
			System.out.println("服务器消息：" + "\n" + reponse); //230 Logged on
			if(reponse.substring(0, 3).equals("230"))
				break;
		}
		
		
		dos.writeUTF("PASV");
		dos.flush();
		reponse = dis.readUTF(); // 227 entering passive mode (h1,h2,h3,h4,p1,p2)
		System.out.println(reponse);
		
		//从字符串中取出 p1和p2
		int cnt = 0, p1 = 0, p2 = 0;
		for(int i = 0; i &lt; reponse.length(); i++){
			char c = reponse.charAt(i);
			if(cnt == 4 && c != ','){
				p1 = p1*10+c-'0';
			}
			if(cnt == 5 && c != ',' && c != ')'){
				p2 = p2*10+c-'0';
			}
			if(c == ',') cnt++;
		}
		//System.out.println("p1: " + p1 + " p2: " + p2);
		port1 = p1*256+p2;
		
	}
	
	
	
	/**
	* 关闭FTP连接
	*/
	public static void closeFTP(Socket s) throws IOException{
		DataInputStream dis = new DataInputStream(s.getInputStream());
		DataOutputStream dos = new DataOutputStream(s.getOutputStream());
		dos.writeUTF("QUIT");
		dos.flush();
		reponse = dis.readUTF();
		System.out.println(reponse); //221 Goodbye
	}

	
	
	/**
	* 获取文件列表
	*/
	public static void list(Socket s, Socket dataSocket) throws IOException{
		DataInputStream dis=new DataInputStream(s.getInputStream());
		DataOutputStream dos=new DataOutputStream(s.getOutputStream());
		dos.writeUTF("List D:\\ftp\r\n");
		dos.flush();
		reponse = dis.readUTF();
		System.out.println(reponse); //输出文件列表
		reponse = dis.readUTF();
		System.out.println(reponse); //226 Transfer OK
	}
	
	
	
	/**
	* 下载文件
	*/
	public static void downloadFile(Socket s, Socket dataSocket, String remoteFile) throws IOException{
		DataInputStream dis = new DataInputStream(s.getInputStream());
		DataOutputStream dos = new DataOutputStream(s.getOutputStream());
		//System.out.println("请输入要下载的文件名");
		
		System.out.println("请输入文件保存名");
		localFile = scanner.nextLine();
		File file = new File("D:\\ftp\\" + localFile);
		
		if(file.exists()){  //文件存在，断点续传
			
			int len = (int)file.length();  //本地文件长度
			dos.writeUTF("REST " + len); //从指定点重新开始传输
			dos.flush();
			reponse = dis.readUTF(); 
			System.out.println(reponse);//350 Rest supported. Restarting at 0
			
			
			System.out.println("断点续传下载中");
			 
			dos.writeUTF("RETR " + remoteFile); 
			dos.flush();
			reponse = dis.readUTF(); //吃掉返回来的exists
			byte[] bytes = new byte[1024];
			InputStream is = dataSocket.getInputStream();
			FileOutputStream fos=new FileOutputStream(file);
			int length = 0;
			while((length = is.read(bytes)) != -1){
				fos.write(bytes, len, length);  //断点续传
			}
			System.out.println("断点续传下载成功");
			fos.close();
			is.close();
		
		}else{
			
			dos.writeUTF("RETR " + remoteFile);
			dos.flush();
			String str = dis.readUTF();
			if(str.equals("exists")){ //服务器存在此文件，开始下载
				System.out.println("开始下载");
				byte[] bytes = new byte[1024];
				InputStream is = dataSocket.getInputStream();
				FileOutputStream fos=new FileOutputStream(file);
				int length = 0;
				while((length = is.read(bytes)) != -1){
					fos.write(bytes, 0, length); //分别代表缓冲源、数据偏移开始位置、要写入字节数
				}
				System.out.println("下载成功");
				fos.close();
				is.close();

			}else{ //服务器不存在此文件
				System.out.println("服务器:"+str);
			}
			
		}
	}
	
	
	
	/**
	* 下载文件夹
	*/
	public static void downloadFolder(Socket s, Socket dataSocket, String downloadFolder) throws IOException{
		DataInputStream dis = new DataInputStream(s.getInputStream());
		DataOutputStream dos = new DataOutputStream(s.getOutputStream());
		//System.out.println("请输入要下载的文件名");
		
		//System.out.println("请输入文件保存名");
		//localFile = scanner.nextLine();
		//File file = new File("D:\\ftp\\" + localFile);
		
		dos.writeUTF("RETR " + remoteFolder);
		dos.flush();
		File file = new File("D:\\down"); //下载到这个文件夹
		if(!file.exists()){//如果不存在该文件夹
			file.mkdir();//新建
			int numofFile = dis.read(); //下载文件内文件夹的个数
			
			System.out.println(numofFile);
			
			for(int i = 0; i &lt; numofFile; i++){
				reponse = dis.readUTF(); //每个文件名
				remoteFile = "D:\\down\\" + reponse;
				//System.out.println(remoteFile);
				
				//下载文件夹内单个文件
				dos.writeUTF("RETR " + remoteFile);
				dos.flush();
				//String str = dis.readUTF();
				
				System.out.println("开始下载");
				byte[] bytes = new byte[1024];
				InputStream is = dataSocket.getInputStream();
				FileOutputStream fos=new FileOutputStream(file);
				int length = 0;
				while((length = is.read(bytes)) != -1){
					fos.write(bytes, 0, length); //分别代表缓冲源、数据偏移开始位置、要写入字节数
				}
				System.out.println("第"+(i+1)+"个文件下载成功");
				fos.close();
				is.close();

				
			}
			
		}

	}
	
	
	
	/**
	* 上传文件
	*/
	public static void uploadFile(Socket s, Socket dataSocket, String localFile) throws IOException{
		DataInputStream dis = new DataInputStream(s.getInputStream());
		DataOutputStream dos = new DataOutputStream(s.getOutputStream());
		
		//输入被上传文件名字
		System.out.println("已建立连接，请输入上传文件名：");
		String namesh=scanner.nextLine();
		dos.writeUTF("STOR "+namesh);
		File file2 = new File("D:\\ftp\\down\\"+namesh);
		if(file2.exists()){
			dos.writeUTF("exists");	
			FileInputStream fis=new FileInputStream(file2);
			OutputStream os=dataSocket.getOutputStream();
			byte [] buffer=new byte[1024];
			int byteread=0;
			while((byteread=fis.read(buffer))!=-1){
				os.write(buffer, 0, byteread);
			}
			fis.close();
			os.close();					
		}else{
			dos.writeUTF("file don't exists");
		}
	}
	
}

</pre>
    
    <pre></pre>
  </div>
</div>
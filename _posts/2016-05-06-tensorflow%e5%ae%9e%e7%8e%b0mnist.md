---
title: 【TensorFlow】MNIST For ML Beginners
layout: post
permalink: /blog/148
categories:
  - MachineLearning
tags:
  - MNIST
  - tensorflow
---
完整版代码：

<pre class="brush: python; title: ; notranslate" title="">import tensorflow as tf 
import input_data 
mnist = input_data.read_data_sets("MNIST_data/", one_hot = True) 
x = tf.placeholder(tf.float32, [None, 784]) 
W = tf.Variable(tf.zeros([784, 10])) 
b = tf.Variable(tf.zeros([10])) 
y = tf.nn.softmax(tf.matmul(x, W) + b) 
y_ = tf.placeholder(tf.float32, [None, 10])
cross_entropy = tf.reduce_mean(-tf.reduce_sum(y_*tf.log(y), reduction_indices=[1]))
train_step = tf.train.GradientDescentOptimizer(0.5).minimize(cross_entropy)
init = tf.initialize_all_variables()
sess = tf.Session()
sess.run(init)
for i in range(1000):
	batch_xs, batch_ys = mnist.train.next_batch(100)
	sess.run(train_step, feed_dict = {x:batch_xs, y_:batch_ys})

correct_prediction = tf.equal(tf.argmax(y, 1), tf.argmax(y_, 1))
accuracy = tf.reduce_mean(tf.cast(correct_prediction, tf.float32))

print(sess.run(accuracy, feed_dict={x: mnist.test.images, y_: mnist.test.labels}))

</pre>

<div id="wmd-preview-section-2" class="wmd-preview-section preview-content">
  <h2 id="mnist简介">
    MNIST简介
  </h2>
  
  <p>
    MNIST在机器学习中就相当于我们学习编程语言的“Hello World”。
  </p>
  
  <p>
    MNIST是一个入门级的计算机视觉数据集，它包含各种手写数字图片，也包含每一张图片对应的标签，告诉我们这个是数字几。
  </p>
  
  <p>
    <img title="" src="https://i2.wp.com/www.tensorflow.org/versions/r0.8/images/MNIST.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    在此教程中，我们将训练一个机器学习模型用于预测图片里面的数字。目的是要介绍下如何使用TensorFlow。
  </p>
</div>

<div id="wmd-preview-section-3" class="wmd-preview-section preview-content">
  <h2 id="获取mnist数据">
    获取MNIST数据
  </h2>
  
  <p>
    下载<a href="https://www.tensorflow.org/code/tensorflow/examples/tutorials/mnist/input_data.py">这份代码</a>，然后导入到我们的文件中，也就是代码的第二行和第三行。
  </p>
  
  <p>
    下载的数据分为3部分：
  </p>
  
  <ul>
    <li>
      55000行训练数据集（<em>mnist.train</em>）
    </li>
    <li>
      10000行测试数据集（<em>mnist.test</em>）
    </li>
    <li>
      5000行验证数据（<em>mnist.validation</em>）
    </li>
  </ul>
  
  <p>
    每一个MNIST的数据单元也由两部分组成：
  </p>
  
  <ul>
    <li>
      手写数字的图片，设为“xs”。
    </li>
    <li>
      对应的标签，设为“ys”。
    </li>
  </ul>
  
  <p>
    训练数据集和测试数据集都包含<em>xs</em>和<em>ys</em>，比如训练数据集的图片是* mnist.train.images <em>，训练数据集的标签是 *mnist.train.labels</em> 。
  </p>
  
  <p>
    每张图片包含 28*28=784 个像素点，如图。
  </p>
  
  <p>
    <img title="" src="https://i1.wp.com/www.tensorflow.org/versions/r0.8/images/MNIST-Matrix.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    因此，在MNIST训练数据集中， <em>mnist.train.images </em>是一个形状为 [55000, 784] 的张量，第一个维度数字用来索引图片，第二个维度数字用来索引每张图片中的像素点。在此张量里的每一个元素，都表示某张图片里的某个像素的强度值，值介于0和1之间。
  </p>
  
  <p>
    <img title="" src="https://i0.wp.com/www.tensorflow.org/versions/r0.8/images/mnist-train-xs.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    每个标签是在 0~9 之间的数字，我们用<strong>“独热编码(<em>one-hot vectors</em>)”</strong>来表示数据。
  </p>
  
  <blockquote>
    <p>
      独热编码即 One-Hot<br /> 编码，又称一位有效编码，其方法是使用N位状态寄存器来对N个状态进行编码，每个状态都有它独立的寄存器位，并且在任意时候，其中只有一位有效。
    </p>
    
    <p>
      例如对六个状态进行编码：
    </p>
    
    <p>
      自然顺序码为 000,001,010,011,100,101 独热编码则是<br /> 000001,000010,000100,001000,010000,100000
    </p>
    
    <p>
      （via 百度百科）
    </p>
  </blockquote>
  
  <p>
    于是，标签 3 可以表示成 [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0] 。
  </p>
  
  <p>
    因此， <em>mnist.train.labels </em>是一个 [55000, 10] 的浮点值的矩阵。
  </p>
  
  <p>
    <img title="" src="https://i0.wp.com/www.tensorflow.org/versions/r0.8/images/mnist-train-ys.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
</div>

<div id="wmd-preview-section-828" class="wmd-preview-section preview-content">
  <h2 id="softmax回归softmax-regression">
    Softmax回归（Softmax Regression）
  </h2>
  
  <p>
    Softmax回归适用于：
  </p>
  
  <ul>
    <li>
      用于分类
    </li>
    <li>
      待分类的类别数量大于2
    </li>
  </ul>
  
  <p>
    这样，我们就可以得到一张图片代表每个数字的概率。
  </p>
  
  <p>
    比如说，我们的模型可能推测一张包含9的图片代表数字9的概率是80%但是判断它是8的概率是5%（因为8和9都有上半部分的小圆），代表其他数字的概率更小。
  </p>
  
  <p>
    Softmax回归分成两步：
  </p>
  
  <ul>
    <li>
      统计每张图片的证据（evidence）和
    </li>
    <li>
      把证据转化为概率
    </li>
  </ul>
  
  <p>
    为了得到一张给定图片属于某个特定数字类的证据，我们对图片像素值进行加权求和。如果这个像素具有很强的证据说明这张图片不属于该类，那么相应的权值为负数，相反如果这个像素拥有有利的证据支持这张图片属于这个类，那么权值是正数。
  </p>
  
  <p>
    下面的图片显示了一个模型学习到的图片上每个像素对于特定数字类的权值。红色代表负数权值，蓝色代表正数权值。
  </p>
  
  <p>
    <img title="" src="https://i0.wp.com/www.tensorflow.org/versions/r0.8/images/softmax-weights.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    我们也需要加入一个额外的偏置量（<em>bias</em>），因为输入往往会带有一些无关的干扰量。因此对于给定的输入图片 x 它代表的是数字 i 的证据可以表示为:
  </p> $$ \text{evidence}_i = \sum_j W_{i,~ j} x_j + b_i $$
  
  <p>
    Wi代表权重，bi代表数字 i 类的偏置量，j 代表给定图片 x 的像素索引用于像素求和。
  </p>
  
  <p>
    然后用softmax函数可以把这些证据转换成概率 y：
  </p> \(y = \text{softmax}(\text{evidence})\) 
  
  <p>
    用一张图来表示：
  </p>
  
  <p>
    <img title="" src="https://i1.wp.com/www.tensorflow.org/versions/r0.8/images/softmax-regression-scalargraph.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    写成等式：
  </p>
  
  <p>
    <img title="" src="https://i1.wp.com/www.tensorflow.org/versions/r0.8/images/softmax-regression-scalarequation.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    用矩阵表示：
  </p>
  
  <p>
    <img title="" src="https://i0.wp.com/www.tensorflow.org/versions/r0.8/images/softmax-regression-vectorequation.png?ssl=1" alt="enter image description here" data-recalc-dims="1" />
  </p>
  
  <p>
    最后，我们可以简洁地写成：<br /> \(y = \text{softmax}(Wx + b)\)
  </p>
</div>

<div id="wmd-preview-section-2502" class="wmd-preview-section preview-content">
  <h2 id="实现回归模型">
    实现回归模型
  </h2>
  
  <p>
    第4行代码中，x是一个<strong>“占位符”</strong>，在TensorFlow计算时输入这个值。其中<strong>None</strong>代表图片的数量，表示可以是任意张；<strong>784</strong>表示每张图的像素。
  </p>
  
  <p>
    第5、6行代码中，用<strong>Variable</strong>表示权重值和偏置量，<strong>Variable</strong>可以在计算中被修改。<br /> 这里我们都用全为零的张量来初始化 W 和b 。因为我们要学习 W 和 b 的值，它们的初值可以随意设置。
  </p>
  
  <p>
    最后实现模型只需要一行代码（第7行）。
  </p>
</div>

<div id="wmd-preview-section-3395" class="wmd-preview-section preview-content">
  <h2 id="训练模型">
    训练模型
  </h2>
  
  <p>
    机器学习中，通常定义一个指标衡量模型好坏，称为成本（cost）或损失（loss），然后尽量最小化这个指标。
  </p>
</div>

<div id="wmd-preview-section-5068" class="wmd-preview-section preview-content">
  <h3 id="交叉熵cross-entropy">
    交叉熵（cross-entropy）
  </h3>
  
  <p>
    交叉熵是一个常见又好用的成本函数。<br /> 它产生于信息论里面的信息压缩编码技术，后来演变成为从博弈论到机器学习等其他领域里的重要技术手段。<br /> 定义如下：
  </p> \(H_{y'}(y) = -\sum_i y'_i \log(y_i)\) 
  
  <p>
    y 是我们预测的概率分布, y’ 是实际的分布（我们输入的one-hot vector)。
  </p>
  
  <p>
    如第8行代码所示，为了计算交叉熵，我们首先需要添加一个新的占位符用于输入正确值。
  </p>
  
  <p>
    然后我们可以用
  </p> \(-\sum y'\log(y)\) 
  
  <p>
    计算交叉熵：第九行代码，用 tf.log 计算 y 的每个元素的对数。接下来，我们把 y_ 的每一个元素和 tf.log(y) 的对应元素相乘。
  </p>
</div>

<div id="wmd-preview-section-5362" class="wmd-preview-section preview-content">
  <h3 id="反向传播算法">
    反向传播算法
  </h3>
  
  <blockquote>
    <p>
      反向传播（英语：Backpropagation，缩写为BP）是“误差反向传播”的简称，是一种与最优化方法（如梯度下降法）结合使用的，用来训练人工神经网络的常见方法。该方法计算对网络中所有权重计算损失函数（英语：loss function）的梯度。这个梯度会反馈给最优化方法，用来更新权值以最小化损失函数。 ——维基百科
    </p>
  </blockquote>
  
  <p>
    TensorFlow拥有一张描述你各个计算单元的图，它可以自动地使用<strong>反向传播算法(backpropagation algorithm)</strong>来有效地确定你的变量是如何影响你想要最小化的那个成本值的。然后，TensorFlow会用你选择的优化算法来不断地修改变量以降低成本。
  </p>
</div>

<div id="wmd-preview-section-9293" class="wmd-preview-section preview-content">
  <h3 id="梯度下降算法">
    梯度下降算法
  </h3>
  
  <p>
    第10行代码中，我们要求TensorFlow用<strong>梯度下降算法（gradient descent algorithm）</strong>（一种最优化算法）以0.5的学习速率最小化交叉熵。
  </p>
  
  <p>
    梯度下降算法是一个简单的学习过程，TensorFlow只需将每个变量一点点地往使成本不断降低的方向移动。当然TensorFlow也提供了其他许多优化算法：只要简单地调整一行代码就可以使用其他的算法。
  </p>
  
  <p>
    在运行计算之前，第11行用来初始化我们创建的变量。
  </p>
  
  <p>
    12、13行代表在一个Session中启动模型，并初始化变量。
  </p>
</div>

<div id="wmd-preview-section-9474" class="wmd-preview-section preview-content">
  <h3 id="随机训练">
    随机训练
  </h3>
  
  <p>
    14~16行是训练模型1000次。
  </p>
  
  <p>
    每次循环随机提取100个训练数据作为一批（<em>batch</em>）,来替换之前的占位符来运行 train_step 。
  </p>
  
  <p>
    使用一小部分的随机数据来进行训练被称为<strong>随机训练（stochastic training）</strong>-，在这里更确切的说是随机梯度下降训练。
  </p>
  
  <p>
    在理想情况下，我们希望用我们所有的数据来进行每一步的训练，因为这能给我们更好的训练结果，但显然这需要很大的计算开销。所以，每一次训练我们可以使用不同的数据子集，这样做既可以减少计算开销，又可以最大化地学习到数据集的总体特性。
  </p>
</div>

<div id="wmd-preview-section-12586" class="wmd-preview-section preview-content">
  <h2 id="评估模型">
    评估模型
  </h2>
  
  <p>
    首先我们找出那些预测正确的标签。
  </p>
  
  <p>
    第18行代码中， tf.argmax 是一个非常有用的函数，它能给出某个tensor对象在某一维上的其数据最大值所在的索引值。由于标签向量是由0,1组成，因此最大值1所在的索引位置就是类别标签，比如 tf.argmax(y,1) 返回的是模型对于任一输入x预测到的标签值，而 tf.argmax(y_,1) 代表正确的标签，我们可以用 tf.equal 来检测我们的预测是否真实标签匹配(索引位置一样表示匹配)。
  </p>
  
  <p>
    第19行代码会给我们一组布尔值。为了确定正确预测项的比例，我们可以把布尔值转换成浮点数，然后取平均值。例如， [True, False, True, True] 会变成 [1,0,1,1] ，取平均值后得到 0.75 。
  </p>
  
  <p>
    最后（第21行代码），我们计算所学习到的模型在测试数据集上面的正确率。结果大约是91%~92%。
  </p>
  
  <p>
    <img src="https://i2.wp.com/ww4.sinaimg.cn/mw690/9cd77f2ejw1f3m0pahdkwj20k90g2117.jpg" alt="" data-recalc-dims="1" />
  </p>
  
  <p>
    在机器学习中，这个结果是比较差的，但是本文目的是熟悉tf的操作流程，而不是提高模型的精确度。
  </p>
  
  <hr />
  
  <p>
    参考：<br /> <a href="https://www.tensorflow.org/versions/r0.8/tutorials/mnist/beginners/index.html#mnist-for-ml-beginners">https://www.tensorflow.org/versions/r0.8/tutorials/mnist/beginners/index.html#mnist-for-ml-beginners</a><br /> <a href="http://wiki.jikexueyuan.com/project/tensorflow-zh/tutorials/mnist_beginners.html">http://wiki.jikexueyuan.com/project/tensorflow-zh/tutorials/mnist_beginners.html</a>
  </p>
</div>

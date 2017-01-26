---
title: 'error LNK1104: cannot open file &#8216;vtkRendering.lib&#8217; 解决方法'
layout: post
permalink: /156
categories:
  - vtk
---
在《VTK图形图像开发进阶》中，第一个程序Chap01按照书上编译会出现1104的错误，解决方法如下：

CMakeLists.txt

```bash
CMAKE_MINIMUM_REQUIRED(VERSION 2.8)
PROJECT( Chap01 )

FIND_PACKAGE( VTK REQUIRED )
INCLUDE( ${VTK_USE_FILE} )

ADD_EXECUTABLE( 1.3_TestVTKInstall 1.3_TestVTKInstall.cpp)
TARGET_LINK_LIBRARIES( 1.3_TestVTKInstall vtkRendering vtkCommon )
```

最后一行改为：

```bash
TARGET_LINK_LIBRARIES( 1.3_TestVTKInstall ${VTK_LIBRARIES} )
```

然后重新用Cmake编译，按照书上步骤运行。

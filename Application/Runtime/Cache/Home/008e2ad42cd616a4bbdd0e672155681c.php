<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="keywords" content="我的" />
	<meta name="description" content=""/>
	<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
	<meta http-equiv="Cache-Control" content="no-transform" /> 
	<meta http-equiv="Cache-Control" content="no-siteapp" />
	
	<!--[if lte IE 9]>
		<link rel="stylesheet" type="text/css" href="/collegial/Public/css/IE/ie.css" />
	<![endif]--> 

	<!--[if IE 9]>
	    <script type="text/javascript" src="/collegial/Static/PIE-2.0beta1/PIE_IE9.js"></script>
	    <link rel="stylesheet" type="text/css" href="/collegial/Public/css/IE/ie9.css" />
	<![endif]-->

	<!--[if lt IE 9]>
		<script type="text/javascript" src="/collegial/Public/plugins/html5.js"></script>
		<script type="text/javascript" src="/collegial/Static/PIE-2.0beta1/PIE_IE678.js"></script>
		<link rel="stylesheet" type="text/css" href="/collegial/Public/css/IE/ie678.css" />
	<![endif]-->
	
	<title>我的</title>
	<!-- <link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
	<link rel="bookmark" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon" /> 
	<link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon"> -->
	<link rel="stylesheet" href="/collegial/Public/css/core/core.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/zepto.min.js"></script>
</head>
<body>
	<style>body {background-color: #ebebeb}</style>
	<div id="account-top">
		<img src="/collegial/Public/images/user1.jpg" alt="" class="portrait">
		<p>路三三</p>
	</div>
	<div id="account-list" class="pre-navbt">
		<a href="<?php echo U('Index/check');?>"><p><span>申请审核</span><img src="/collegial/Public/images/arrow_right.png" alt=""></p></a>
		<ul>
			<a href="<?php echo U('Index/info');?>"><li><span>我的信息</span><img src="/collegial/Public/images/arrow_right.png" alt=""></li></a>
			<a href="<?php echo U('Index/activity');?>"><li><span>我的活动</span><img src="/collegial/Public/images/arrow_right.png" alt=""></li></a>
			<a href="<?php echo U('Index/club');?>"><li><span>我的社团</span><img src="/collegial/Public/images/arrow_right.png" alt=""></li></a>
		</ul>
	</div>
	<div class="nav-bottom">
		<a href="<?php echo U('Index/index');?>">
			<div class="navbt-item"><img src="/collegial/Public/images/home_white.png" alt=""><span>首页</span>
			</div>
			<div class="navbt-item active"><img src="/collegial/Public/images/person.png" alt=""><span>我的</span>
			</div>
		</a>
	</div>


</body>
</html>
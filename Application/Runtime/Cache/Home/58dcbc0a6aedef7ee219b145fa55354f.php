<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="keywords" content="我的信息" />
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
	
	<title>我的信息</title>
	<!-- <link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
	<link rel="bookmark" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon" /> 
	<link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon"> -->
	<link rel="stylesheet" href="/collegial/Public/css/core/core.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/zepto.min.js"></script>
</head>
<body>

	<style>body {background-color: #eee}</style>
	<div id="uinfo-top" class="one-line">
		完善个人信息才能加入社团,或者创建属于自己的社团哦！
	</div>
	<div id="uinfo-detail">
		<form action="">
			<div id="uinfo-wrap">
				<div class="uinfo-item">
					<span>姓名</span>
					<input type="text" value="路三三" placeholder="请输入您的真实姓名">
				</div>
				<div class="uinfo-item">
					<span>性别</span>
					<input id="uitem-man" type="radio" name="sex" value="1">
					<label for="uitem-man">男</label>
					<input id="uitem-woman" type="radio" name="sex" value="2">
					<label for="uitem-woman">女</label>
				</div>
				<div class="uinfo-item">
					<span>学校</span>
					<input type="text" value="浙江工业大学" placeholder="请输入您所在的学校" readonly>
					<img src="/collegial/Public/images/arrow_right.png" alt="">
				</div>
				<div class="uinfo-item">
					<span>学院院系</span>
					<input type="text" placeholder="请输入您所在的学校或院系" value="信息工程学院">
				</div>
				<div class="uinfo-item">
					<span>专业班级</span>
					<input type="text" value="信管121班" placeholder="请输入您所在的专业班级">
				</div>
				<div class="scode-send-wrap uinfo-item">
					<span>手机号码</span>
					<input type="text" value="路三三" placeholder="手机号码">
					<input type="button" class="active" value="65s后可重新发送">
				</div>
				<div class="uinfo-item">
					<span>验证码</span>
					<input type="text" placeholder="请输入您收到的验证码">
				</div>
			</div>
			<input class="submit" type="submit" value="确认修改">
		</form>
	</div>
	


</body>
</html>
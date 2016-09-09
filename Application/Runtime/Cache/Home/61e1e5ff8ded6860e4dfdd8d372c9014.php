<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="keywords" content="社团详情" />
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
	
	<title>社团详情</title>
	<!-- <link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
	<link rel="bookmark" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon" /> 
	<link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon"> -->
	<link rel="stylesheet" href="/collegial/Public/css/core/core.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/jquery-1.11.2.js"></script>
</head>
<body>
	<style>body {background-color: #eee}</style>
	
	<div id="ccreate-wrap">
		<form action="">
			<p class="ccreate-title">
				填写社团资料
			</p>
			<div class="ccreate-detail">
				<ul>
					<li><span> 社团名称</span><input type="text" placeholder="请输入社团名称"></li>
					<li class="pr"><span>社团级别</span><input type="text" value="校级组织" readonly><img src="/collegial/Public/images/arrow_right.png" alt=""></li>
				</ul>
			</div>
			<p class="ccreate-title">
				填写申请人信息
			</p>
			<div class="ccreate-detail">
				<ul>
					<li><span>申请人姓名</span><input type="text" placeholder="请输入您的姓名"></li>
					<li><span>身份证号码</span><input type="text" placeholder="请输入您的身份证号码"></li>
					<li class="scode-send-wrap"><span>手机号码</span><input type="text" placeholder="手机号码"><input type="button" class="" value="发送验证码"></li>
					<li><span>验证码</span><input type="text" placeholder="请输入您收到的验证码"></li>
				</ul>
			</div>
			<button class="submit">立即创建</button>
		</form>
	</div>
	<script>
		$(function() {
			$(".submit").click(function() {
				alert("12");
			});
		})
	</script>

</body>
</html>
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
	
	<title>我的社团</title>
	<!-- <link rel="icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon">
	<link rel="bookmark" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon" /> 
	<link rel="shortcut icon" href="favicon.ico" mce_href="favicon.ico" type="image/x-icon"> -->
	<link rel="stylesheet" href="/collegial/Public/css/core/core.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/jquery-1.11.2.js"></script>
</head>
<body>
	<style>body {background-color: #f2f2f2}</style>
	<div id="act-top">
		<button class="round-button active">我加入的</button><button class="round-button">我创建的</button>
	</div>
	<div id="none-club" class="center">
		<p>您还没有创建过任何社团哦</p>
		<p>快来创建一个吧</p>
		<button class="round-button active">创建社团</button>
	</div>

	
	<script>
		$(function() {
			$(".round-button").click(function() {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			})
		})
	</script>


</body>
</html>
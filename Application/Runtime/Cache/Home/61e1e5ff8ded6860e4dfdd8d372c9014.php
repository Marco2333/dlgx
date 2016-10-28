<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="keywords" content="创建社团" />
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
	
	<title>创建社团</title>
	<link rel="stylesheet" href="/collegial/Static/font-awesome-4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="/collegial/Public/css/core/core.min.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/zepto.min.js"></script>
</head>
<body>

	<div id="ccreate-wrap">
		<form action="" method="post" enctype="multipart/form-data" onsubmit="return check();">
			<p class="ccreate-title">
				填写社团资料
			</p>
			<div class="ccreate-detail">
				<ul>
					<li>
						<span>社团名称</span>
						<div class="cdinput-wrap">
							<input type="text" name="name" placeholder="请输入社团名称">
						</div>
					</li>
					<li class="show-dpicker pr">
						<span>社团类型</span>
						<div class="cdinput-wrap">
							<input type="text" name="type" value="学术型" readonly>
						</div>
						<i class="fa fa-angle-right"></i>
					</li>
					<li>
						<span>加入口令</span>
						<div class="cdinput-wrap">
							<input type="text" name="password" placeholder="请设置加入口令">
						</div>
					</li>
				</ul>
			</div>
			<div class="ccreate-detail">
				<ul>
					<li>
						<span>社团相册</span>
						<div class="cdinput-wrap pr album-add">
							<input type="file" name="album[]">
							<span>添加图片</span>
						</div>
					</li>
					<p class="club-add-img"><img src="/collegial/Public/images/picture.png" alt=""></p>
				</ul>
			</div>
			<div class="ccreate-detail">
				<ul>
					<li>
						<span>社团简介</span>
						<div class="cdinput-wrap">
							<textarea name="intro" placeholder="请输入社团简介"></textarea>
						</div>
					</li>
				</ul>
			</div>
			<div class="ccreate-detail">
				<ul>
					<li class="pr">
						<span>社团logo</span>
						<input type="file" name="logo">
						<img id="club-logo-set" src="/collegial/Public/images/actorg1.png" alt="" >
						<i class="fa fa-angle-right"></i>	
					</li>
				</ul>
			</div>
			<button class="submit">立即创建</button>
		</form>
	</div>
	<div class="date-picker">
		<p><span class="fl dpicker-cancel">取消</span>选择类型<span class="dpicker-finish fr">完成</span></p>
		<div class="dpicker-body">
			<ul>
				<li class="dpicker-item empty sub-active"></li>
				<li class="dpicker-item active">体育类</li>
				<li class="dpicker-item sub-active">实践类</li>
				<li class="dpicker-item">艺术类</li>
				<li class="dpicker-item">团学组织</li>
				<li class="dpicker-item empty"></li>
			</ul>
		</div>
	</div>
	<div class="info-mask center none" data-status="">修改失败</div>
	<script src="/collegial/Public/script/min/clubCreate.min.js"></script>

</body>
</html>
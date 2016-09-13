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
	<script type="text/javascript" src="/collegial/Public/plugins/zepto.min.js"></script>
</head>
<body>
	<style>body {background-color: #ebebeb}</style>
	<div id="cdetail-top">
		<img class="portrait" src="/collegial/Public/images/user1.jpg" alt="">
		<h2>大学生创业协会</h2>
		<p>浙江工业大学</p>
		<button class="_exit">退出社团</button>
	</div>
	<div id="club-info" class="info-wrap">
		<p class="info-title">社团资料</p>
		<div class="detail-info">
			<ul>
				<li class="clearfix">
					<span>社团团长</span>
					<p>路意义</p>
				</li>
				<li class="clearfix">
					<span>社团级别</span>
					<p>校级组织</p>
				</li>
				<li class="clearfix">
					<span>社团简介</span>
					<p>大学生就业协会立志于为广大高校毕业生创造良好的就业环境及条件。</p>
				</li>
			</ul>
		</div>
	</div>
	<div id="club-member" class="pre-navbt info-wrap">
		<p class="info-title">社团成员</p>
		<div class="detail-info clearfix">
			<ul>
				<li><img src="/collegial/Public/images/user1.jpg" alt=""><h4>路意义</h4></li>
				<li><img src="/collegial/Public/images/user2.jpg" alt=""><h4>路意义</h4></li>
				<li><img src="/collegial/Public/images/user3.jpg" alt=""><h4>路意义</h4></li>
				<li><img src="/collegial/Public/images/user1.jpg" alt=""><h4>路意义</h4></li>
				<li><img src="/collegial/Public/images/user2.jpg" alt=""><h4>路意义</h4></li>
				<li><img src="/collegial/Public/images/user3.jpg" alt=""><h4>路意义</h4></li>
				<li><img src="/collegial/Public/images/user1.jpg" alt=""><h4>路意义</h4></li><li><img src="/collegial/Public/images/user3.jpg" alt=""><h4>路意义</h4></li>
			</ul>
		</div>
	</div>
	<div class="nav-bottom">
		<div class="navbt-item"><span>发布活动</span>
		</div>
		<div class="navbt-item active"><span>发布公告</span>
		</div>
	</div>
	<script src="/collegial/Public/script/min/mypop.min.js"></script>
	<script>
		$("#cdetail-top").on('click','._apply',function() {
			myalert('您的申请已收到，社团管理员将在24小时内完成审核，请耐心等待。');
			$(this).removeClass('_apply').addClass('_wait')
			.text('等待审核');
		}).on('click','._exit',function() {
			myconfirm('确定退出该社团吗？',function() {

			})
		})
	</script>

</body>
</html>
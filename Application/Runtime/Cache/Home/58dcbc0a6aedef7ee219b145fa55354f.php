<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="keywords" content="完善个人信息" />
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
	
	<title>完善个人信息</title>
	<link rel="stylesheet" href="/collegial/Static/font-awesome-4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="/collegial/Public/css/core/core.min.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/zepto.min.js"></script>
</head>
<body>

	<div id="uinfo-top">
		完善个人信息才能加入社团或创建属于自己的社团哦！
	</div>
	<div id="uinfo-detail">
		<form action="" >
			<div id="uinfo-wrap" class="ccreate-detail">
				<ul>
					<li>
						<span>姓名</span>
						<div class="cdinput-wrap">
							<input type="text" name="name" placeholder="请输入您的真实姓名">
						</div>
					</li>
					<li>
						<span>性别</span>
						<div class="radio-wrap cdinput-wrap">
							<input id="uitem-man" type="radio" name="sex" value="1" checked>
							<p class="radio-temp"></p>
							<label for="uitem-man">男</label>
						</div>
						<div class="radio-wrap">
							<input id="uitem-woman" type="radio" name="sex" value="2">
							<p class="radio-temp"></p>
							<label for="uitem-woman">女</label>
						</div>
					</li>
					<a href="<?php echo U('Index/school');?>">
						<li class="pr">
							<span>学校</span>
							<div class="cdinput-wrap">
								<input type="text" name="school" placeholder="请输入您所在的学校" readonly>
							</div>
							<i class="fa fa-angle-right"></i>
						</li>
					</a>
					<li>
						<span>学院院系</span>
						<div class="cdinput-wrap">
							<input type="text" placeholder="请输入您所在的院系名称" name="college">
						</div>
					</li>
					<li>
						<span>专业班级</span>
						<div class="cdinput-wrap">
							<input type="text" placeholder="请输入您所在的专业班级" name="major">
						</div>
					</li>
					<li class="scode-send-wrap pr">
						<span>手机号码</span>
						<div class="cdinput-wrap">
							<input type="text" placeholder="请输入手机号码" name="phone">
						</div>
						<button>发送验证码</button>
					</li>
					<li>
						<span>验证码</span>
						<div class="cdinput-wrap">
							<input type="text" placeholder="请输入您收到的验证码">
						</div>
					</li>
				</ul>
			</div>
				
			<button class="submit">确认修改</button>
		</form>
	</div>
	
	<script src="/collegial/Public/script/min/mypop.min.js"></script>
	<script src="/collegial/Public/script/min/validate.min.js"></script>


</body>
</html>
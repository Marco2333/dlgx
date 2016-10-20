<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="renderer" content="webkit|ie-comp|ie-stand">
	<meta name="keywords" content="主页" />
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
	
	<title>首页</title>
	<link rel="stylesheet" href="/collegial/Static/font-awesome-4.5.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="/collegial/Public/css/core/core.min.css">
	<link rel="stylesheet" href="/collegial/Public/css/style.css">
	<script type="text/javascript" src="/collegial/Public/plugins/zepto.min.js"></script>
</head>
<body>

	<div id="act-top" >
		<button class="round-button active">活动</button><button class="round-button">社团</button>
	</div>
	<div class="search-wrap">
		<img src="/collegial/Public/images/search.png" alt=""><input type="text" placeholder="搜索活动">
	</div>
	<div id="banner-wrap" class="none">
		<div class="imgbox">
		    <ul class="clearfix">
		        <li><a href=""><img src="/collegial/Public/images/banner.jpg" alt=""></img></a></li>
		        <li><a href=""><img src="/collegial/Public/images/banner.jpg" alt=""></img></a></li>
		        <li><a href=""><img src="/collegial/Public/images/banner.jpg" alt=""></img></a></li>
		    </ul>
		</div>
		<div class="page">
		    <ol>
		        <li class="active"></li>
		        <li></li>
		        <li></li>
		    </ol>
		</div>
	</div>
	<div class="acttype-head">
		<span>线上活动</span>
		<a href="">
			<div class="fr">
				<span>更多</span>
				<img src="/collegial/Public/images/arrow_right.png" alt="">
			</div>
		</a>
	</div>
	<div class="online-act">
		<a href=""><img src="/collegial/Public/images/actdetail.png" alt=""></a>
		<a href=""><img src="/collegial/Public/images/actdetail.png" alt=""></a>
		<a href=""><img src="/collegial/Public/images/actdetail.png" alt=""></a>
		<a href=""><img src="/collegial/Public/images/actdetail.png" alt=""></a>
	</div>
	<div class="acttype-head">
		<span>线下活动</span>
		<a href="">
			<div class="fr">
				<span>更多</span>
				<img src="/collegial/Public/images/arrow_right.png" alt="">
			</div>
		</a>
	</div>
	<div id="act-list" class="pre-navbt">
		<div class="act-item clearfix">
			<div class="act-img"><a href="<?php echo U('Index/actdetail');?>"><img src="/collegial/Public/images/activity1.png" alt=""></a></div>
			<div class="act-info">
				<h2 class="act-title one-line">
					<a href="<?php echo U('Index/actdetail');?>">蒙牛全明星~早间青春SHOW</a>
				</h2>
				<div class="act-organize clearfix">
					<img src="/collegial/Public/images/actorg1.png" alt="">
					<span class="one-line">发起人(浙江工业大学)</span>
				</div>
				<p class="act-time one-line">活动时间: 2016.9.2 - 9.30</p>
				<div class="act-operate">
					<span>2016年10月20日发布</span>
					<img src="/collegial/Public/images/activity_ing.png" alt="">
				</div>
			</div>
		</div>
		<div class="act-item clearfix">
			<div class="act-img"><a href="<?php echo U('Index/actdetail');?>"><img src="/collegial/Public/images/activity2.png" alt=""></a></div>
			<div class="act-info">
				<h2 class="act-title one-line">
					<a href="<?php echo U('Index/actdetail');?>">蒙牛全明星~早间青春SHOW</a>
				</h2>
				<div class="act-organize clearfix">
					<img src="/collegial/Public/images/actorg1.png" alt="">
					<span class="one-line">发起人(浙江工业大学)</span>
				</div>
				<p class="act-time one-line">活动时间: 2016.9.2 - 9.30</p>
				<div class="act-operate">
					<span>2016年10月20日发布</span>
					<img src="/collegial/Public/images/activity_ing.png" alt="">
				</div>
			</div>
		</div>
		<div class="act-item clearfix">
			<div class="act-img"><a href="<?php echo U('Index/actdetail');?>"><img src="/collegial/Public/images/activity1.png" alt=""></a></div>
			<div class="act-info">
				<h2 class="act-title one-line">
					<a href="<?php echo U('Index/actdetail');?>">蒙牛全明星~早间青春SHOW</a>
				</h2>
				<div class="act-organize clearfix">
					<img src="/collegial/Public/images/actorg1.png" alt="">
					<span class="one-line">发起人(浙江工业大学)</span>
				</div>
				<p class="act-time one-line">活动时间: 2016.9.2 - 9.30</p>
				<div class="act-operate">
					<span>2016年10月20日发布</span>
					<img src="/collegial/Public/images/activity_ing.png" alt="">
				</div>
			</div>
		</div>
		<div class="act-item clearfix">
			<div class="act-img"><a href="<?php echo U('Index/actdetail');?>"><img src="/collegial/Public/images/activity2.png" alt=""></a></div>
			<div class="act-info">
				<h2 class="act-title one-line">
					<a href="<?php echo U('Index/actdetail');?>">蒙牛全明星~早间青春SHOW</a>
				</h2>
				<div class="act-organize clearfix">
					<img src="/collegial/Public/images/actorg1.png" alt="">
					<span class="one-line">发起人(浙江工业大学)</span>
				</div>
				<p class="act-time one-line">活动时间: 2016.9.2 - 9.30</p>
				<div class="act-operate">
					<span>2016年10月20日发布</span>
					<img src="/collegial/Public/images/activity_ing.png" alt="">
				</div>
			</div>
		</div>
		<div class="act-item clearfix">
			<div class="act-img"><a href="<?php echo U('Index/actdetail');?>"><img src="/collegial/Public/images/activity1.png" alt=""></a></div>
			<div class="act-info">
				<h2 class="act-title one-line">
					<a href="<?php echo U('Index/actdetail');?>">蒙牛全明星~早间青春SHOW</a>
				</h2>
				<div class="act-organize clearfix">
					<img src="/collegial/Public/images/actorg1.png" alt="">
					<span class="one-line">发起人(浙江工业大学)</span>
				</div>
				<p class="act-time one-line">活动时间: 2016.9.2 - 9.30</p>
				<div class="act-operate">
					<span>2016年10月20日发布</span>
					<img src="/collegial/Public/images/activity_ing.png" alt="">
				</div>
			</div>
		</div>
		<div class="act-item clearfix">
			<div class="act-img"><a href="<?php echo U('Index/actdetail');?>"><img src="/collegial/Public/images/activity2.png" alt=""></a></div>
			<div class="act-info">
				<h2 class="act-title one-line">
					<a href="<?php echo U('Index/actdetail');?>">蒙牛全明星~早间青春SHOW</a>
				</h2>
				<div class="act-organize clearfix">
					<img src="/collegial/Public/images/actorg1.png" alt="">
					<span class="one-line">发起人(浙江工业大学)</span>
				</div>
				<p class="act-time one-line">活动时间: 2016.9.2 - 9.30</p>
				<div class="act-operate">
					<span>2016年10月20日发布</span>
					<img src="/collegial/Public/images/activity_ing.png" alt="">
				</div>
			</div>
		</div>
		<div class="act-item">
			<div class="act-video">
				<video src="/collegial/Public/video/v1.mp4" poster="/collegial/Public/images/poster1.png" controls></video>
				<p><span class="fl one-line">因为青春</span><span class="fr">2.33</span></p>
			</div>
			<div class="video-bottom">
				<img src="/collegial/Public/images/actorg1.png" alt="">
				<span>大了个学</span>
				<span class="fr">8月15日发布</span>
			</div>
		</div>
	</div>
	<div class="nav-bottom">
		<div class="navbt-item active"><img src="/collegial/Public/images/home.png" alt=""><p>首页</p>
		</div>
		<a href="<?php echo U('Index/user');?>">
			<div class="navbt-item"><img src="/collegial/Public/images/topic_gray.png" alt=""><p>话题</p>
			</div>
		</a>
		<a href="<?php echo U('Index/user');?>">
			<div class="navbt-item"><img src="/collegial/Public/images/person_gray.png" alt=""><p>我的</p>
			</div>
		</a>
	</div>
	
	<script src="/collegial/Public/script/min/swipe.min.js"></script>
	<script>
		$(function() {
			$("#banner-wrap").removeClass('none');
			var scrollImg = $.mggScrollImg('.imgbox ul',{
		        loop: true,//循环切换
		        auto: true,//自动切换
		        callback: function(ind){
		            $('.page li').eq(ind).addClass('active').siblings().removeClass('active');
		        }
		    });
			$(".round-button").click(function() {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			});
			$(".act-video > p").click(function(){
				$(this).css('bottom','-40px');
			});
		})
	</script>

</body>
</html>
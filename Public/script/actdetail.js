$(function() {
	$("#banner-wrap").removeClass('none');
	var scrollImg = $.mggScrollImg('.imgbox ul', {
		loop: true, //循环切换
		auto: true, //自动切换
		callback: function(ind) {
			$('.page li').eq(ind).addClass('active').siblings().removeClass('active');
		}
	});

	$("#uportrait-list").css('width', $(".uportrait-wrap").length * 7 + 'rem');

	$("#uportrait-list").swipeRight(function() {

		var that = $(this),
			left = parseInt(that.css('left'));

		left = left + 130 > 0 ? 0 : left + 130;

		that.css('left', left + "px");
	});

	$("#uportrait-list").swipeLeft(function() {
		var that = $(this),
			left = parseInt(that.css('left')),
			parentWidth = that.parent('ul').width(),
			selfWidth = that.width();

		left = left - 130 < parentWidth - selfWidth ? parentWidth - selfWidth : left - 130;

		that.css('left', left + "px");
	});

	$("#onact-apply").click(function() {
		myalert('恭喜您！成功加入“大学生创业社团”！');
	});

	$("#offact-apply").click(function() {
		myalert('恭喜您！报名成功啦！');
	});

	$(".navbt-item").eq(0).click(function() {
		$(".mark-publish-wrap").css("bottom", '0');
	});

	$(".mark-publish-head span.fl").click(function() {
		$(".mark-publish-wrap").css("bottom", '-21rem');
	});

	$(".mark-list").on('click', '.mark-reply > span', function() {
		$(".mark-publish-wrap").css("bottom", '0');
	});

	$(".mark-publish-head span.fr").click(function() {
		var text = $(".mark-publish-body > textarea").val().trim();
		if (text == '') {
			myalert("评论不能为空！");
			return;
		}
		$(".mark-publish-wrap").css("bottom", '-21rem');
	});

	$(".mark-publish-body").on('change', "input[type='file']", function() {
		var len, i, objUrl, val = $(this).val(),
			suffix = val.substring(val.lastIndexOf('.') + 1);

		if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
			alert("请上传图片文件！");
			$(this).val('');
			return;
		}

		if ($(this).parent().find('img').length >= 6) {
			alert('最多添加5张图片');
			return;
		}

		objUrl = getObjectURL(this.files[0]);
		$("<img>").attr('src', objUrl).prependTo($(".mark-publish-body p"));
		$(this).after($("<input type='file' name='file[]'>"));
	});
})

function getObjectURL(file) {
	var url = null;
	if (window.createObjectURL != undefined) { // basic
		url = window.createObjectURL(file);
	} else if (window.URL != undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file);
	} else if (window.webkitURL != undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file);
	}
	return url;
}
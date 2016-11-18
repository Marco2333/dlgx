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

	$(".mark-list").on('click', '.mark-reply > span', function() {
		$(".mark-publish-wrap").css("bottom", '0');
	});
})
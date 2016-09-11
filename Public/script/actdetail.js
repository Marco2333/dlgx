$(function() {
	$("#uportrait-list").css('width',$(".uportrait-wrap").length * 7 + 'rem');

	$("#uportrait-list").swipeRight(function(){

		var that = $(this), left = parseInt(that.css('left'));

		left = left + 130 > 0 ? 0 : left + 130;

		that.css('left',left + "px");
	});

	$("#uportrait-list").swipeLeft(function(){
		var that = $(this), left = parseInt(that.css('left')), parentWidth = that.parent('ul').width(), selfWidth = that.width();

		console.log(parentWidth,selfWidth);

		left = left - 130 < parentWidth -  selfWidth? parentWidth -  selfWidth : left - 130;

		that.css('left',left + "px");
	});

	$("#act-apply").click(function() {
		alert('恭喜您，报名成功了！');
	});
})
$(function() {
	var status = $(".info-mask").attr('data-status');
	if (status === '1' || status === '-1') {
		if (status === '1') {
			$(".info-mask").text('评论成功');
		} else {
			$(".info-mask").text('评论失败');
		}
		$(".info-mask").removeClass('none');
		setTimeout(function() {
			$(".info-mask").addClass('none');
		}, 1500);
	}

	$("#topic-detail-bottom").on('click', '.fa-heart', function(e) {
		// alert();
		var that = $(this);
		setTimeout(function() {
			that.removeClass('fa-heart').addClass('fa-heart-o').parent().removeClass('active');
		}, 10)

		// $.get('', function(data) {
		// 	if (data.status == 1) {
		// 		that.removeClass('fa-heart').addClass('fa-heart-o').parent().removeClass('active');
		// 	}
		// })
	});

	$("#topic-detail-bottom").on('click', '.fa-heart-o', function() {
		var that = $(this);
		setTimeout(function() {
			that.addClass('fa-heart').removeClass('fa-heart-o').parent().addClass('active');
		}, 10)

		// $.get('', function(data) {
		// 	if (data.status == 1) {
		// 		that.addClass('fa-heart').removeClass('fa-heart-o').parent().addClass('active');
		// 	}
		// })
	});

	$("#topic-detail-bottom").on('click', '.fa-star-o', function() {
		var that = $(this);
		setTimeout(function() {
				that.removeClass('fa-star-o').addClass('fa-star').parent().addClass('active');
			}, 10)
			// $.get('', function(data) {
			// 	if (data.status == 1) {
			// 		that.removeClass('fa-star-o').addClass('fa-star').parent().addClass('active');
			// 	}
			// })
	});

	$("#topic-detail-bottom").on('click', '.fa-star', function() {
		var that = $(this);
		setTimeout(function() {
				that.removeClass('fa-star').addClass('fa-star-o').parent().removeClass('active');
			}, 10)
			// $.get('', function(data) {
			// 	if (data.status == 1) {
			// 		that.removeClass('fa-star').addClass('fa-heart-o').parent().removeClass('active');
			// 	}
			// })
	});

	$(".topic-ibottom-item").eq(0).click(function() {
		$(".mark-publish-wrap").css('bottom', '0');
	});

	$(".mark-publish-head span.fl").click(function() {
		$(".mark-publish-wrap").css("bottom", '-21rem');
	});

	$(".mark-list").on('click', '.mark-reply > span', function() {
		$(".mark-publish-wrap").css('bottom', '0');
	});

	$(".mark-publish-body").on('change', "input[type='file']", function() {
		var len, i, objUrl, val = $(this).val(),
			suffix = val.substring(val.lastIndexOf('.') + 1);

		if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
			alert("请上传图片文件！");
			$(this).val('');
			return;
		}

		if ($(".mark-publish-body img").length >= 6) {
			alert("最多上传5张图片");
			$(this).val('');
			return;
		}

		objUrl = getObjectURL(this.files[0]);
		$("<img>").attr('src', objUrl).prependTo($(".mark-publish-body > p"));
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

function check() {
	var text = $(".mark-publish-body > textarea").val().trim();
	if (text == '') {
		myalert("评论不能为空！");
		return false;
	}
	return true;
}
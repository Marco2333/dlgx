$(function() {
	$("#topic-list").on('click', '.fa-heart', function(e) {
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

	$("#topic-list").on('click', '.fa-heart-o', function() {
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

	$("#topic-list").on('click', '.fa-star-o', function() {
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

	$("#topic-list").on('click', '.fa-star', function() {
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

	$("#topic-list").on('click', '.topic-ibottom-item:first-child', function() {
		$(".mark-publish-wrap").css('bottom', '0');
	});

	$(".mark-publish-head span.fl").click(function() {
		$(".mark-publish-wrap").css("bottom", '-21rem');
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
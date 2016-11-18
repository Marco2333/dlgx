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

	$(".mark-list").on('click', '.mark-reply > span', function() {
		$(".mark-publish-wrap").css('bottom', '0');
	});
});
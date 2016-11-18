$(function() {
	// $("#topic-list").on('click', '.fa-heart', function(e) {
	// 	// alert();
	// 	var that = $(this);
	// 	setTimeout(function() {
	// 		that.removeClass('fa-heart').addClass('fa-heart-o').parent().removeClass('active');
	// 	}, 10)

	// 	// $.get('', function(data) {
	// 	// 	if (data.status == 1) {
	// 	// 		that.removeClass('fa-heart').addClass('fa-heart-o').parent().removeClass('active');
	// 	// 	}
	// 	// })
	// });

	// $("#topic-list").on('click', '.fa-heart-o', function() {
	// 	var that = $(this);
	// 	setTimeout(function() {
	// 		that.addClass('fa-heart').removeClass('fa-heart-o').parent().addClass('active');
	// 	}, 10)

	// 	// $.get('', function(data) {
	// 	// 	if (data.status == 1) {
	// 	// 		that.addClass('fa-heart').removeClass('fa-heart-o').parent().addClass('active');
	// 	// 	}
	// 	// })
	// });

	// $("#topic-list").on('click', '.fa-star-o', function() {
	// 	var that = $(this);
	// 	setTimeout(function() {
	// 			that.removeClass('fa-star-o').addClass('fa-star').parent().addClass('active');
	// 		}, 10)
	// 		// $.get('', function(data) {
	// 		// 	if (data.status == 1) {
	// 		// 		that.removeClass('fa-star-o').addClass('fa-star').parent().addClass('active');
	// 		// 	}
	// 		// })
	// });

	// $("#topic-list").on('click', '.fa-star', function() {
	// 	var that = $(this);
	// 	setTimeout(function() {
	// 			that.removeClass('fa-star').addClass('fa-star-o').parent().removeClass('active');
	// 		}, 10)
	// 		// $.get('', function(data) {
	// 		// 	if (data.status == 1) {
	// 		// 		that.removeClass('fa-star').addClass('fa-heart-o').parent().removeClass('active');
	// 		// 	}
	// 		// })
	// });

	$("#topic-list").on('click', '.topic-ibottom-item:first-child', function() {
		$(".mark-publish-wrap").css('bottom', '0');
	});

	$("#topic-list").on('click', '.topic-ibottom-item', function() {
		var fa = $(this).find('.fa');
		if (fa.hasClass('fa-heart')) {
			fa.removeClass('fa-heart').addClass('fa-heart-o');
			$(this).removeClass('active');
		} else if (fa.hasClass('fa-heart-o')) {
			fa.addClass('fa-heart').removeClass('fa-heart-o');
			$(this).addClass('active');
		} else if (fa.hasClass('fa-star')) {
			fa.removeClass('fa-star').addClass('fa-star-o');
			$(this).removeClass('active');
		} else if (fa.hasClass('fa-star-o')) {
			fa.removeClass('fa-star-o').addClass('fa-star');
			$(this).addClass('active');
		}
	});
})
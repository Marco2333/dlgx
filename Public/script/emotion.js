$(document).ready(function() {
	$(".mark-publish-head > img").click(function() {
		var ew = $(".emotion-wrap");
		ew.hasClass('none') ? (function() {
			loadGif();
			ew.removeClass('none')
		})() : ew.addClass('none');
	});
	$(".emotion-wrap").on('click', '.emotion-item', function() {
		var ta = $(".mark-publish-body textarea");
		ta.text(ta.text() + "[[_gif" + $(this).attr('data-id') + "_]]");
	});
	$(".mark-publish-body textarea").click(function() {
		$(".emotion-wrap").addClass('none');
	})
})

function loadGif() {
	if ($(".emotion-wrap").attr('data-status') == '1') {
		return;
	}
	var i = 1,
		path = gifPath,
		htmlStr = '';

	for (; i <= 75; i++) {
		htmlStr += "<li class='emotion-item' data-id='" + i + "'><img src='" + path + i + ".gif' alt='' /></li>";
	}

	$(".emotion-wrap ul").html(htmlStr);

	$(".emotion-wrap").attr('data-status', '1');
}
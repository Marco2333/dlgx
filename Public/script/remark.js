$(function() {
	// var change = false,
	// var imgIndex;

	$(".mark-publish-head span.fl").click(function() {
		$(".mark-publish-wrap").css("bottom", '-21rem');
	});

	// $(".mark-img-button").on('click', "img", function() {
	// 	// change = false;
	// 	// $(".mark-img-button input[type='file']").last().trigger('click');
	// });

	$(".mark-img-button").on('change', "input[type='file']", function() {
		var len, i, objUrl, val = $(this).val(),
			suffix = val.substring(val.lastIndexOf('.') + 1);

		if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
			alert("请上传图片文件！");
			$(this).val('');
			return;
		}

		// if (change) {
		// 	objUrl = getObjectURL(this.files[0]);
		// 	$(".mark-item-img img").eq(imgIndex).attr('src', objUrl);
		// } else {
		if ($(".mark-publish-body img").length >= 7) {
			alert("最多上传6张图片");
			$(this).val('');
			return;
		}

		objUrl = getObjectURL(this.files[0]);
		var div = $("<div class='mark-item-img'>");
		div.append("<div class='mark-item-mask'>删除</div>");
		$("<img>").appendTo(div).attr('src', objUrl);
		div.prependTo($(".mark-publish-img"));
		$(this).after($("<input type='file' name='file[]'>"));
		// }
	});

	$(".mark-publish-img").on('click', '.mark-item-img', function() {
		var now = $(this),
			imgIndex = 0;
		// change = true;

		while (true) {
			now = now.prev(".mark-item-img");

			if (now.length == 0) {
				break;
			}
			imgIndex++;
		}

		if (confirm("确认删除？")) {
			$(this).remove();
			$(".mark-img-button input[type='file']").eq(imgIndex).remove();
		}

	})
});

function check() {
	var text = $(".mark-publish-body > textarea").val().trim();
	if (text == '') {
		myalert("评论不能为空！");
		return false;
	}
	return true;
}

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
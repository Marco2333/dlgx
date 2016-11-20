$(function() {
	var status = $(".info-mask").attr('data-status');
	if (status === '1' || status === '-1') {
		if (status === '1') {
			$(".info-mask").text('创建成功');
		} else {
			$(".info-mask").text('创建失败');
		}
		$(".info-mask").removeClass('none');
		setTimeout(function() {
			$(".info-mask").addClass('none');
		}, 1500);
	}
	var rate = 0;
	$(".dpicker-body").scroll(function() {
		rate = setPickerStyle(rate)
	});

	$(".dpicker-finish").click(function() {
		var text = $(".dpicker-item.active").text();
		$(".date-picker").css({
			'bottom': '-17.5rem'
		});
		$(".show-dpicker input").val(text);
	});

	$(".dpicker-cancel").click(function() {
		$(".date-picker").css({
			'bottom': '-17.5rem'
		});
	});

	$(".show-dpicker").click(function() {
		$(".date-picker").css({
			'bottom': 0
		});
	});

	$("#club-logo-set").prev('input').change(function() {
		var val = $(this).val(),
			suffix = val.substring(val.lastIndexOf('.') + 1);
		if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
			alert("请上传图片文件！");
			$(this).val('');
			return;
		}

		var objUrl = getObjectURL(this.files[0]);

		if (objUrl) {
			$("#club-logo-set").attr('src', objUrl)
		}
	});

	$("#upload-proof").prev('input').change(function() {
		var val = $(this).val(),
			suffix = val.substring(val.lastIndexOf('.') + 1);
		if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
			alert("请上传图片文件！");
			$(this).val('');
			return;
		}

		var objUrl = getObjectURL(this.files[0]);

		if (objUrl) {
			$("#upload-proof").attr('src', objUrl)
		}
	});


	// var albumFlag = true;

	// $(".album-add").on('change', "input[type='file']", function() {
	// 	var len, i, objUrl, val = $(this).val(),
	// 		suffix = val.substring(val.lastIndexOf('.') + 1);

	// 	if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
	// 		alert("请上传图片文件！");
	// 		$(this).val('');
	// 		return;
	// 	}

	// 	objUrl = getObjectURL(this.files[0]);
	// 	$("<img>").attr('src', objUrl).prependTo($(".club-add-img"));
	// 	$(this).after($("<input type='file' name='album[]'>"));

	// 	if (albumFlag) {
	// 		albumFlag = false;
	// 		$(".club-add-img img").last().attr("src", "../../../Public/images/add_picture.png")
	// 	}
	// });

	// $(".club-add-img").on('click', 'img:last-child', function() {
	// 	$(".album-add input:last-of-type").trigger('click');
	// })

	$(".mark-img-button").on("change", "input[type='file']", function() {
		var i, e = $(this).val(),
			t = e.substring(e.lastIndexOf(".") + 1);
		if (["jpg", "png", "gif", "jpeg", "bmp"].indexOf(t.toLowerCase()) == -1) return alert("请上传图片文件！"), void $(this).val("");
		if ($(".mark-item-img").length >= 6) return alert("最多上传6张图片"), void $(this).val("");
		i = getObjectURL(this.files[0]);
		var r = $("<div class='mark-item-img'>");
		r.append("<div class='mark-item-mask'>删除</div>"), $("<img>").appendTo(r).attr("src", i), r.prependTo($(".mark-publish-img")), $(this).after($("<input type='file' name='file[]'>"))
	}), $(".mark-publish-img").on("click", ".mark-item-img", function() {
		for (var i = $(this), e = 0;;) {
			if (i = i.prev(".mark-item-img"), 0 == i.length) break;
			e++
		}
		confirm("确认删除？") && ($(this).remove(), $(".mark-img-button input[type='file']").eq(e).remove())
	});

	setPickerStyle(0);
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

function setPickerStyle(rate) {
	var i, len,
		scrollTop = $(".dpicker-body").scrollTop(),
		newRate = parseInt(scrollTop / 38);

	if (newRate === rate) {
		return rate;
	}

	var itemList = $(".dpicker-item");

	if ($(itemList[newRate + 1]).hasClass('empty')) {
		return newRate;
	}

	itemList = $(".dpicker-item").removeClass('active').removeClass('sub-active');

	$(itemList[newRate + 1]).addClass('active').prev().addClass('sub-active').next().next().addClass('sub-active');

	return newRate;
}

function check() {
	if (!$("input[name='name']").val().trim()) {
		alert("社团名称不能为空！");
		return false;
	}
	if (!$("input[name='password']").val().trim()) {
		alert("口令不能为空！");
		return false;
	}
	if (!$("textarea[name='intro']").val().trim()) {
		alert("社团简介不能为空！");
		return false;
	}
}
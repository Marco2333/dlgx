$(function() {

	var status = $(".info-mask").attr('data-status');
	if (status === '1' || status === '-1') {
		if (status === '1') {
			$(".info-mask").text('发起成功');
		} else {
			$(".info-mask").text('发起失败');
		}
		$(".info-mask").removeClass('none');
		setTimeout(function() {
			$(".info-mask").addClass('none');
		}, 1500);
	}

	var rate1 = 0,
		rate2 = 0,
		rate3 = 0,
		index = 0;
	var monthArr = [1, 3, 5, 7, 8, 10, 12];

	$(".dpicker-body").scrollTop("9");

	$(".dpicker-body").eq(0).scroll(function() {
		rate1 = setPickerStyle(rate1, 0);
		if ($(".dpicker-item.active").eq(1).text() == "2") {
			var dpItem = $(".dpicker-body").eq(2).find(".dpicker-item");
			if (!isLeapYear($(".dpicker-item.active").eq(0).text())) {
				dpItem.eq(28).addClass("none");
			} else {
				dpItem.eq(28).removeClass("none");
			}
		}
	});

	$(".dpicker-body").eq(1).scroll(function() {
		rate2 = setPickerStyle(rate2, 1);
		var dpItem = $(".dpicker-body").eq(2).find(".dpicker-item");
		if (monthArr.indexOf(1 + rate2) == -1) {
			dpItem.eq(30).addClass("none")
			if (rate2 == 1) {
				dpItem.eq(29).addClass("none");
				if (!isLeapYear($(".dpicker-item.active").eq(0).text())) {
					dpItem.eq(28).addClass("none");
				}
			}
		} else {
			dpItem.removeClass("none");
		}
	});

	$(".dpicker-body").eq(2).scroll(function() {
		rate3 = setPickerStyle(rate3, 2);
	});

	$(".dpicker-finish").click(function() {
		var dpickerItem = $(".dpicker-item.active"),
			text = dpickerItem.eq(0).text() + " 年 " + dpickerItem.eq(1).text() + " 月 " + dpickerItem.eq(2).text() + " 日 ";
		$(".date-picker").css({
			'bottom': '-17.5rem'
		});
		$(".show-dpicker input").eq(+index).val(text);
	});

	$(".dpicker-cancel").click(function() {
		$(".date-picker").css({
			'bottom': '-17.5rem'
		});
	});

	$(".show-dpicker").click(function() {
		index = $(this).attr('data-id');
		$(".date-picker").css({
			'bottom': 0
		});
	});

	setPickerStyle(0);

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

function setPickerStyle(rate, index) {

	var i, len,
		scrollTop = $(".dpicker-body").eq(index).scrollTop(),
		newRate = parseInt(scrollTop / 38);

	if (newRate === rate) {
		return rate;
	}

	var itemList = $(".dpicker-body").eq(index).find(".dpicker-item");

	if ($(itemList[newRate + 1]).hasClass('empty')) {
		return newRate;
	}

	itemList = $(".dpicker-body").eq(index).find(".dpicker-item")
		.removeClass('active').removeClass('sub-active');

	$(itemList[newRate + 1]).addClass('active').prev().addClass('sub-active').next().next().addClass('sub-active');

	return newRate;
}

function isLeapYear(pYear) {
	if (!isNaN(parseInt(pYear))) {
		if ((pYear % 4 == 0 && pYear % 100 != 0) || pYear % 400 == 0) {
			return true;
		}
	}
	return false;
}

function check() {
	if (!$("input[name='name']").val().trim()) {
		alert("活动名称不能为空！");
		return false;
	}
	if (!$("input[name='location']").val().trim()) {
		alert("活动地点不能为空！");
		return false;
	}
	if (!$("textarea[name='intro']").val().trim()) {
		alert("活动介绍不能为空！");
		return false;
	}
	if ($("input[name='starttime']").val().trim() === "未设置") {
		alert("开始时间不能为空！");
		return false;
	}
	if ($("input[name='endtime']").val().trim() === "未设置") {
		alert("结束时间不能为空！");
		return false;
	}

	return true;
}
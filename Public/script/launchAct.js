$(function() {
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
})


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
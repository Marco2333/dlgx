$(function() {
	var rate = 0;
	$(".dpicker-body").scroll(function() {
		rate = setPickerStyle(rate)
	});
	
	$(".dpicker-finish").click(function() {
		var text = $(".dpicker-item.active").text();
		$(".date-picker").css({'bottom':'-17.5rem'});
		$(".show-dpicker input").val(text);
	});

	$(".show-dpicker").click(function() {
		$(".date-picker").css({'bottom':0});
	});

	setPickerStyle(0);
})


function setPickerStyle(rate) {
	var i, len,
		scrollTop = $(".dpicker-body").scrollTop(),
		newRate = parseInt(scrollTop / 38);

	if(newRate === rate) {
		return rate;
	}

	var itemList = $(".dpicker-item");

	if($(itemList[newRate + 1]).hasClass('empty')) {
		return newRate;
	}

	itemList = $(".dpicker-item").removeClass('active').removeClass('sub-active');

	$(itemList[newRate + 1]).addClass('active').prev().addClass('sub-active').next().next().addClass('sub-active');

	return newRate;
}
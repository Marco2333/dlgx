$(function() {
	$(".submit").click(function(e) {
		var i = 0, flag = true, inputList = $("input[type='text']"), 
		len = inputList.length;
		for(;i < len;i++){
			if(!$(inputList[i]).val().trim()) {
				alert('信息填写不完整！');
				e.preventDefault();
				return false;
			}
		}
		if(!regRule.idcard.test($("input[name='id']").val().trim())) {
			alert('请输入规范的身份证号码！');
			e.preventDefault();
			return false;
		}

		if(!regRule.mobile.test($("input[name='phone']").val().trim())) {
			alert('请输入规范的手机号！');
			e.preventDefault();
			return false;
		}
	});

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

	$(".scode-send-wrap input[type = 'button']").click(function() {
		$(this).addClass('active');

		var count = 59,
			that = $(this).val('60s后可重新发送'),
			interID = setInterval(function() {
				if(count == 0) {
					that.removeClass('active').val('发送验证码');
					clearInterval(interID);
					return;
				}
				that.val(count-- + 's后可重新发送');
			},1000)
	});

	setPickerStyle(0);
})

var regRule = {
	idcard: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
	mobile: /^1\d{10}$/,
	mail: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
}

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
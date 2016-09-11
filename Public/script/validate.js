$(function() {
	$(".submit").click(function(e) {
		var i = 0, val, flag = true, inputList = $("input[type='text']"), 
		len = inputList.length;
		for(;i < len;i++){
			if(!$(inputList[i]).val().trim()) {
				alert('信息填写不完整！');
				e.preventDefault();
				return false;
			}
		}
		if($("input[name='idnumber']").length && !regRule.idcard.test($("input[name='idnumber']").val())) {
			alert('请输入规范的身份证号码！');
			e.preventDefault();
			return false;
		}
		if($("input[name='phone']").length && !regRule.mobile.test($("input[name='phone']").val())) {
			alert('请输入规范的手机号！');
			e.preventDefault();
			return false;
		}
	});

	$(".scode-send-wrap input[type = 'button']").click(function() {
		var phone;

		if(phone = $(this).prev('input').val().trim()) {
			if(!regRule.mobile.test(phone)) {
				alert('请输入规范的手机号！');
				return false;
			}
		} else {
			alert('手机号不能为空！');
			return false;
		}

		$(this).addClass('active').attr('disabled',true);

		var count = 58,
			that = $(this).val('59s后可重新发送'),
			interID = setInterval(function() {
				if(count == 0) {
					that.removeClass('active').val('发送验证码');
					clearInterval(interID);
					that.removeAttr("disabled");
					return;
				}
				that.val(count-- + 's后可重新发送');
			},1000)
	});
})

var regRule = {
	idcard: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/,
	mobile: /^1\d{10}$/,
	mail: /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
}

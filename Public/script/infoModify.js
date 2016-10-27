$(function() {
	var input = null;
	$(".imodify-item").each(function() {
		if ($(this).hasClass('change-sex')) {
			return;
		}
		$(this).click(function() {
			input = $(this).find('input[type="text"]');
			$(".panel-wrap").removeClass("none");
			$(".sex-panel").css('bottom', '-15rem');
			$(".input-panel").css('bottom', '0');
		});
	})

	$(".panel-wrap").click(function() {
		$(".panel-wrap").addClass("none");
		$(".input-panel").css('bottom', '-7rem');
		$(".sex-panel").css('bottom', '-15rem');
	});

	$(".fa-close").click(function() {
		$(this).prev('input').val('');
	});

	$(".input-button").click(function() {
		var val = $(".input-wrap input").val();
		if (!val.trim()) {
			alert("信息不能为空!");
			return;
		}
		if (val.trim().length >= 20) {
			alert("信息长度不能大于20");
		}
		input.val(val);
		input.prev().text(val);
		$(".input-panel").css('bottom', '-7rem');
		$(".panel-wrap").addClass("none");
	});

	$(".change-sex").click(function() {
		$(".panel-wrap").removeClass("none");
		$(".input-panel").css('bottom', '-7rem');
		$(".sex-panel").css('bottom', '0');
	});

	$(".sex-panel > p").click(function() {
		$(".panel-wrap").addClass("none");
		$(".sex-panel").css('bottom', '-15rem');
	});

	$(".sex-panel-type > p").each(function(i) {
		$(this).click(function() {
			$(".panel-wrap").addClass("none");
			$(".sex-panel").css('bottom', '-15rem');
			if (i == 0) {
				$(".change-sex input").val('1').prev().text('男');
			} else {
				$(".change-sex input").val('2').prev().text('女');
			}
		})
	});

	$(".portrait-modify input[type='file']").on('change', function() {
		var objUrl, val = $(this).val(),
			suffix = val.substring(val.lastIndexOf('.') + 1);

		if (['jpg', 'png', 'gif', 'jpeg', 'bmp'].indexOf(suffix.toLowerCase()) == -1) {
			alert("请上传图片文件！");
			$(this).val('');
			return;
		}
		objUrl = getObjectURL(this.files[0]);

		$(".portrait-modify img").attr("src", objUrl);
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
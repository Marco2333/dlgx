window.myalert = function(msg) {
	var panelString = [
		"<div class='pop-panel center'>",
		"<h2 class='pop-title'>提示</h2>",
		"<div class='alert-body'>",
		msg,
		"</div>",
		"<div class='alert-operate'>确认</div>",
		"</div>"
	].join(" ");
	$("<div class='pop-wrap'>").html(panelString).appendTo($('body'));
	$(".alert-operate").click(function() {
		$(".pop-wrap").remove();
	})
}

window.myconfirm = function(msg,succsss) {
	var panelString = [
		"<div class='pop-panel center'>",
		"<h2 class='pop-title'>提示</h2>",
		"<div class='alert-body'>",
		msg,
		"</div>",
		"<div class='confirm-operate'><p class='inactive'>取消</p><p class='active'>确定</p></div>",
		"</div>"
	].join(" ");
	
	$("<div class='pop-wrap'>").html(panelString).appendTo($('body'));

	$(".confirm-operate").on('click','.inactive',function() {
		$(".pop-wrap").remove();
	}).on('click','.active',function() {
		console.log(this);
		succsss();
		$(".pop-wrap").remove();
	});
}

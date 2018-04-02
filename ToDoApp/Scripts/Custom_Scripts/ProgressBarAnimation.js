$(function () {
	$('.progress-bar').each(function () {
	  var bar_value = $(this).attr('aria-valuenow') + '%';
	  console.log(bar_value);
     $(this).animate({ width: bar_value }, { duration: 50 });
  });
});

$(function () {
	$('.progress-bar-success').each(function () {
		var bar_value = $(this).attr('aria-valuenow') + '%';
		console.log(bar_value);
		$(this).animate({ width: bar_value }, { duration: 50 });
	});
});
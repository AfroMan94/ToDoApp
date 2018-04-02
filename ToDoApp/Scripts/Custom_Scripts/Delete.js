$(function () {

	$(".delete-row").on("click", function() {

		var self = $(this);
		var id = self.attr('id');

		$.ajax({
			url: '/ToDoes/AJAXDelete',
			data: {
				id: id,
			},
			type: 'POST',
			success: function (result) {
				$('#tableDiv').html(result);
				generate();
			}

		});

		
		//$.ajax({
		//	url: '/ToDoes/getCompleted',
		//	success: function (result) {

		//		if (result == 100) {
		//			$('#progressBar .progress div').toggleClass('progress-bar progress-bar-success');
		//		}

		//		if (result < 100) {
		//			$('#progressBar .progress div').addClass('progress-bar').removeClass('progress-bar-success');
		//		}

			
		//		$('.progress-bar').each(function () {
					
		//			var bar_value = result + '%';
		//			$(this).text(bar_value);
		//			$(this).animate({ width: bar_value }, { duration: 50 });
		//		});

		//		$('.progress-bar-success').each(function () {
		//			var bar_value = result + '%';
		//			$(this).text(bar_value);
		//			$(this).animate({ width: bar_value }, { duration: 50 });
		//		});
		//	}

		//});

	});
})
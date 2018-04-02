$(function () {

	$(".itemDescription").on("click", function () {
		var self = $(this);
		var html = self.html();
		var id = self.attr('id');
		var text = self.text();

		if ($(".itemDescription").has(".completedToDo")) {
			text = self.children(".completedToDo").text();
		}


		var $input = $('<input>', {
			value: self.text(),
			type: 'text',
			blur: function () {
				self.text(this.value);
			},
			keyup: function (e) {
				if (e.which === 13) $input.blur();
			}
		}).appendTo(self.empty()).focus();


		//$.ajax({
		//	url: '/ToDoes/AJAXDelete',
		//	data: {
		//		id: id,
		//	},
		//	type: 'POST',
		//	success: function (result) {
		//		$('#tableDiv').html(result);
		//	}

		//});
	});
})
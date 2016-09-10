
(function (newsImporter, $, undefined) {

	newsImporter.init = function () {

		// toggle task enabled
		$('#TaskEnabled').change(function () {
			var isChecked = $(this).is(':checked');
			$('#NewsImporterSettingTable').find('.news-task').toggle(isChecked);
		}).trigger('change');

		// show insert feed dialog
		$('#FeedGridContainer').on('click', '.feed-insert', function (e) {
			e.preventDefault();
			var dialog = $('#insert-feed-dialog');
			safeSetFocus(dialog);
			dialog.modal('show');
			return false;
		});

		// delete feed
		$('#FeedGridContainer').on('click', '.feed-delete', function (e) {
			e.preventDefault();
			$(this).doAjax({
				type: 'POST',
				callbackSuccess: function (resp) {
					refreshGrid();
				}
			});
			return false;
		});

	};

	function safeSetFocus(dialog) {
		setTimeout(function () {
			dialog.find('.modal-body :input:visible:enabled:first').focus();
		}, 1000);
	}

	function refreshGrid() {
		setTimeout(function () {
			$('#news-feed-grid').data('tGrid').ajaxRequest();
		}, 500);
	}

}(window.newsImporter = window.newsImporter || {}, jQuery));

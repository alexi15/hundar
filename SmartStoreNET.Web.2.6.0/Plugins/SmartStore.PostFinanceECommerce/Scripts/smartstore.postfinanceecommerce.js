
(function (postfinanceecommerce, $, undefined) {

	postfinanceecommerce.init = function () {

		// show/hide api url
		$('#UseTestEnvironment').change(function () {
			var isChecked = $(this).is(':checked');
			$('#ApiUrlProduction').closest('tr').toggle(!isChecked);
			$('#ApiUrlTest').closest('tr').toggle(isChecked);
		}).trigger('change');
	};

}(window.postfinanceecommerce = window.postfinanceecommerce || {}, jQuery));

(function (accardakar, $, undefined) {

	accardakar.init = function () {

		// show/hide api url
		$('#UseSandbox').change(function () {
			var isChecked = $(this).is(':checked');
			$('#ApiUrlProduction').closest('tr').toggle(!isChecked);
			$('#ApiUrlTest').closest('tr').toggle(isChecked);
		}).trigger('change');

		// show/hide physical invoice fee
		$('#EnablePhysicalInvoice').change(function () {
			$('#AccardaKarConfigTable').find('.accarda-physical-invoice').toggle($(this).is(':checked'));
		}).trigger('change');

		// show/hide item details options
		$('#TransmitItemDetails').change(function () {
			$('#AccardaKarConfigTable').find('.accarda-item-details').toggle($(this).is(':checked'));
		}).trigger('change');
	};

}(window.accardakar = window.accardakar || {}, jQuery));
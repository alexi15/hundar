
(function (skrill, $, undefined) {

	skrill.init = function () {

		// show/hide payment methods
		$('#RestrictPaymentMethods').change(function () {
			$('#SkrillConfigTable').find('.payment-methods').toggle($(this).is(':checked'));
		})
		.trigger('change');

		// toggle payment methods info
		$('#PaymentMethodsInfoLink').click(function () {
			$(this).text($(this).attr($('#PaymentMethodsInfoContainer').is(':visible') ? 'data-in' : 'data-out'));
			$('#PaymentMethodsInfoContainer').slideToggle();
		});

	};

}(window.skrill = window.skrill || {}, jQuery));

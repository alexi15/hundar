
(function (debitoor, $, undefined) {

	debitoor.init = function () {

		// debitoor payment term change
		$('body').on('change', '#PaymentTermsId', function () {
			var termsWithDaysIds = $('input[name=PaymentTermsIdWithDayInput]').val().split(';'),
				value = $(this).val();

			$('#DebitoorPaymentTermsDays').toggle(jQuery.inArray(value, termsWithDaysIds) >= 0);
		});
		$('#PaymentTermsId').trigger('change');

		// show/hide add products
		$('#AddProducts').change(function () {
			$('#DebitoorConfigTable').find('.debitoor-add-product').toggle($(this).is(':checked'));
		}).trigger('change');

		// show/hide email invoice
		$('#BookPaidInvoices').change(function () {
			$('#DebitoorConfigTable').find('.debitoor-emailinvoice').toggle($(this).is(':checked'));
			$('#BookPaidInvoicesAndEmail').trigger('change');
		}).trigger('change');

		// show/hide email options
		$('#BookPaidInvoicesAndEmail').change(function () {
			$('#DebitoorConfigTable').find('.debitoor-emailinvoice-option').toggle(
				$(this).is(':checked') && $('#BookPaidInvoices').is(':checked')
			);
		}).trigger('change');
	};

	debitoor.reversePaid = function (context) {
		if (confirm($(context).attr('data-ask'))) {
			$.throbber.show({
				speed: 0,
				message: $(context).attr('data-note')
			});
			return true;
		}
		return false;
	};

}(window.debitoor = window.debitoor || {}, jQuery));
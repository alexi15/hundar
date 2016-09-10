
(function (payone, $, undefined) {

	payone.init = function (systemName) {

		// toggle checkout data options
		$('#EnterPaymentDataInCheckout').change(function () {
			$('#PayoneConfigTable').find('.checkout-data-options').toggle($(this).is(':checked'));

			$('#AdminInstructionCss').slideToggle(!$(this).is(':checked'));
		});

		$('#PayoneConfigTable').find('.checkout-data-options').toggle($('#EnterPaymentDataInCheckout').is(':checked'));

		// save button clicked
		$('#SaveConfigButton').click(function () {
			if (systemName === 'Payments.PayoneCreditCard') {
				SafeJoinValue('ExcludedCreditCards');
			}
			else if (systemName === 'Payments.PayoneOnlineBankTransfer') {
				SafeJoinValue('ExcludedOnlineBankTransferTypes');
			}
		});

		// toggle css button
		$('#PayoneCssLink').click(function () {
			$(this).text($(this).attr($('#PayoneCssContainer').is(':visible') ? 'data-in' : 'data-out'));
			$('#PayoneCssContainer').slideToggle();
		});

		if (systemName === 'Payments.PayoneCreditCard') {
			InitMultipleSelect('ExcludedCreditCards');
		}
		else if (systemName === 'Payments.PayoneOnlineBankTransfer') {
			InitMultipleSelect('ExcludedOnlineBankTransferTypes');
		}
	};


	function SafeJoinValue(id) {
		var value = $('#' + id).val();
		$('input[name=new' + id + ']').val(value ? value.join() : '');
	}

	function InitMultipleSelect(id) {
		var values = $('input[name=new' + id + ']').val().split(',');
		$('#' + id).select2().select2('val', values);
	}

}(window.payone = window.payone || {}, jQuery));

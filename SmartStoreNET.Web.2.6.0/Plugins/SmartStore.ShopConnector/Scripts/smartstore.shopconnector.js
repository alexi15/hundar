
(function (shopConnector, $, undefined) {

	var progressIntervall = null;

	shopConnector.init = function () {
		var dialog = $('#connection-dialog');

		// show connection dialog
		$(document).on('click', '.connection-grid-button', function (e) {
			e.preventDefault();
			var isDelete = $(this).hasClass('connection-delete'),
				forExport = $(this).hasClass('connection-forexport');

			var url = dialog.attr(isDelete ? 'data-urldelete' : 'data-urlupsert');
			url += '?isForExport=' + forExport.toString();
			url += '&id=' + ($(this).closest('div').attr('data-id') || '0');			

			if (isDelete) {
				$({}).doAjax({
					type: 'POST',
					url: url,
					ask: dialog.find('.modal-ask-delete').text(),
					callbackSuccess: function (resp) {
						refreshGrid(forExport);
					}
				});
				return false;
			}
			
			dialog.find('.modal-body').empty();
			dialog.find('.caption').text($.trim($(this).text()));
			showPrimaryButton(false);

			$({}).doAjax({
				type: 'GET',
				url: url,
				smallIcon: dialog.find('.modal-body'),
				callbackSuccess: function (resp) {
					dialog.find('.modal-body').html(resp);
					initMultipleSelect('LimitedToManufacturerIds');
					safeSetFocus(dialog);
				},
				callbackComplete: function () {
					showPrimaryButton(true);
				}
			});

			dialog.modal('show');
			return false;
		});

		// connection action clicked
		$(document).on('click', 'a.connection-action', function (e) {
			e.preventDefault();
			var link = $(this),
				isImport = $(this).hasClass('action-product-import');

			dialog.find('.modal-body').empty();
			dialog.find('.caption').text($.trim($(this).text()));
			showPrimaryButton(false);

			link.doAjax({
				type: 'GET',
				smallIcon: dialog.find('.modal-body'),
				callbackSuccess: function (resp) {
					if (isImport && !resp.length) {
						showPrimaryButton(true);

						function getProgress() {
							$({}).doAjax({
								type: 'GET',
								url: link.attr('data-urlprogress'),
								callbackSuccess: function (progress) {
									dialog.find('.modal-body').html(progress.Message);
									if (progress.NoRunningTask) {
										clearInterval(progressIntervall);
										progressIntervall = null;
									}
								}
							});
						}

						getProgress();
						if (progressIntervall == null)
							progressIntervall = setInterval(getProgress, 2000);
					}
					else {
						dialog.find('.modal-body').html(resp);

						showPrimaryButton(true, isImport && $('#ImportFile').length ? 'ConnectionNext' : null);

						// update download product data link
						$('#ImportFile').change(function () {
							var link = $('a.product-data-load');
							link.attr('href', link.attr('data-url') + '&name=' + encodeURIComponent($(this).val()));
						}).trigger('change');

						initMultipleSelect('FilterManufacturerIds');
						dialog.find('#ImportFile').selectWrapper();
						dialog.find('#FilterCategoryId').selectWrapper();
					}
				}
			});

			dialog.modal('show');
			return false;
		});

		// submit dialog form
		dialog.on('click', '.btn-primary', function () {
			var form = dialog.find('.connection-form'),
				forExport = ((form.find('input[name=IsForExport]').val() || '').toLowerCase() === 'true');

			if (!form.length) {
				dialog.modal('hide');
				return;
			}

			if (form.attr('method') === 'GET') {
				form.submit();
				return;
			}

			safeJoinValue('LimitedToManufacturerIds');
			safeJoinValue('FilterManufacturerIds');

			dialog.find('.processing-note').fadeIn();
			showPrimaryButton(false);

			form.doAjax({
				type: 'POST',
				callbackSuccess: function (resp) {
					if (resp.length)
						dialog.find('.modal-body').html(resp);
					else
						dialog.modal('hide');
					refreshGrid(forExport);
				},
				callbackComplete: function () {
					showPrimaryButton(true);
				}
			});
		});

		// delete product data file
		dialog.on('click', '.product-data-delete', function () {
			var name = $('#ImportFile').val();

			$(this).doAjax({
				type: 'POST',
				appendToUrl: '&name=' + encodeURIComponent(name),
				ask: dialog.find('.modal-ask-delete').text()
			});
		});

		// xml file upload
		$('#XmlFileUploader').fileupload({
			url: $('#XmlFileUploader').attr('data-url'),
			dataType: 'json',
			acceptFileTypes: /^.*\.xml$/,

			done: function (e, data) {
				EventBroker.publish("message", { title: data.result.Message, type: data.result.MessageType });
			},

			error: function (jqXHR, textStatus, errorThrown) {
				if (errorThrown !== 'abort') {
					EventBroker.publish("message", { title: errorThrown, type: 'error' });
				}
			}
		});
	};

	function showPrimaryButton(display, textId) {
		var button = $('#connection-dialog').find('.btn-primary').toggle(display);
		if (display) {
			button.find('span').hide();
			button.find('#' + (textId || 'ConnectionOk')).show();
		}
	}

	function initMultipleSelect(id) {
		var control = $('#' + id);
		if (control.length) {
			var values = $('input[name=New' + id + ']').val().split(',');
			control.select2().select2('val', values);
		}
	}

	function safeJoinValue(id) {
		var control = $('#' + id);
		if (control.length) {
			var value = control.val();
			$('input[name=New' + id + ']').val(value ? value.join() : '');
		}
	}

	function refreshGrid(forExport) {
		setTimeout(function () {
			$(forExport ? '#export-connection-grid' : '#import-connection-grid').data('tGrid').ajaxRequest();
		}, 500);
	}

	function safeSetFocus(dialog) {
		setTimeout(function () {
			dialog.find('.modal-body :input:visible:enabled:first').focus();
		}, 1000);
	}

}(window.shopConnector = window.shopConnector || {}, jQuery));

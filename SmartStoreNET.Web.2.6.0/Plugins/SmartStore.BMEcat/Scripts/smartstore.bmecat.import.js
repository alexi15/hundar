(function (bmecatImport, $, undefined) {

    bmecatImport.init = function (uploaderID) {
        var cont = $('#' + uploaderID).closest('.bme-container'),
			url = cont.attr('data-url');

		$('#' + uploaderID).fileupload({
			url: url + '/ImportFileUpload?uploaderID=' + uploaderID,
			dataType: 'json',
			acceptFileTypes: /(xml)$/i,

			done: function (e, data) {
				if (data.result.success) {
				    window.location.reload(true);
				}
			},

			error: function (jqXHR, textStatus, errorThrown) {
				if (errorThrown === 'abort') {
					//alert('File Upload has been canceled');
				}
			}
		});
	};

	function GetUploaderID(context) {
	    return $(context).closest('.bme-container').find('.fileupload').attr('id');
	}

}(window.bmecatImport = window.bmecatImport || {}, jQuery));
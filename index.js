function enter(e) {
	var zip = $('.zip');

	if (e.keyCode == 13) {
		zip.blur();
		$('.shirt').css({'filter' : 'none'});
		window.setTimeout(function () {
			$('.font').text(zip.val());
		}, 2000);
	} else {
		if (zip.val() == '###') {
			zip.val('');
		}
	}
}

function changeFont(e) {
	font = e.target.style.fontFamily;
	$('.zip').css({'font-family' : font});
}

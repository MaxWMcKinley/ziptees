function enter(e) {
	if (e.keyCode == 13) {
		var zip = $('.zip').val();
		$('.zip').blur();
		$('.shirt').css({'filter' : 'none'});
		window.setTimeout(function () {
			$('.font').text(zip);
		}, 2000);
	}
}

function changeFont(e) {
	font = e.target.style.fontFamily;
	$('.zip').css({'font-family' : font});
}

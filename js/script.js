/* [Nathalia Pissuti e Laionel Lellis 15.05.2016] */

$(document).ready(function () {
	/* Funcao responsavel por abrir o menu */
	$('#menu .glyphicon-play').click(function() {
		if($('#menu').hasClass('menu-fechado')) {
			$('#menu').animate({left: 0}, 600);
		} else {
			$('#menu').animate({left: '-15em'}, 600);
		}
		$('#menu').toggleClass('menu-fechado');
	});

});
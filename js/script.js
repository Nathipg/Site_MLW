/* [Nathalia Pissuti e Laionel Lellis 15.05.2016] */

$(document).ready(function () {
	/* Funcao responsavel por abrir o menu */
	$('#menu .glyphicon-play').click(function() {
		if($('#menu').hasClass('menu-fechado')) {
			$('#menu').animate({left: 0}, 600);
			$('.glyphicon-play').css("-webkit-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(180deg)");
			$('.glyphicon-play').css("transform", "rotate(180deg)");
			$('.glyphicon-play').css("padding", "20em 0.2em 1em 0.2em");
		} else {
			$('#menu').animate({left: '-15em'}, 600);
			$('.glyphicon-play').css("-webkit-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(0deg)");
			$('.glyphicon-play').css("transform", "rotate(0deg)");
			$('.glyphicon-play').css("padding", "1em 0.2em 20em 0.2em");
		}
		$('#menu').toggleClass('menu-fechado');
	});
});
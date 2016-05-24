/* [Nathalia Pissuti e Laionel Lellis 15.05.2016] */

$(document).ready(function () {
	/* Funcao responsavel por abrir o menu */
	$('#menu .menuclick').click(function() {
		if($('#menu').hasClass('menu-fechado')) {
			$('#menu').animate({left: 0}, 600);
			$('.glyphicon-play').css("-webkit-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(180deg)");
			$('.glyphicon-play').css("transform", "rotate(180deg)");
		} else {
			$('#menu').animate({left: '-18.2em'}, 600);
			$('.glyphicon-play').css("-webkit-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(0deg)");
			$('.glyphicon-play').css("transform", "rotate(0deg)");
		}
		$('#menu').toggleClass('menu-fechado');
		/* Som de abertura do menu */
		$('#sommenu').trigger('play');
	});
	/* Som do click no menu */
	$('#menu ul li').click(function() {
		$('#sommenuclick').trigger('play');
	});
	/* Funcao responsavel por abrir o menu de atalhos */
	$('#menu-atalhos .menuclick').click(function() {
		if($('#menu-atalhos').hasClass('menu-fechado')) {
			$('#menu-atalhos .texto-menu-aberto').show();
		} else {
			$('#menu-atalhos .texto-menu-aberto').hide();
		}
		$('#menu-atalhos').toggleClass('menu-fechado');
	});
});
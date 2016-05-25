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
			/* Som ao abrir */
			if($('#somcontrol').hasClass('glyphicon-volume-up')) {
				$('#sommenuopen').trigger('play');
			}
		} else {
			$('#menu').animate({left: '-18.2em'}, 600);
			$('.glyphicon-play').css("-webkit-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(0deg)");
			$('.glyphicon-play').css("transform", "rotate(0deg)");
			/* Som ao fechar */
			if($('#somcontrol').hasClass('glyphicon-volume-up')) {
				$('#sommenuclose').trigger('play');
			}
		}
		$('#menu').toggleClass('menu-fechado');		
	});
	
	/* Som do click no menu */
	$('#menu ul li').click(function() {
		if($('#somcontrol').hasClass('glyphicon-volume-up')) {
			$('#sommenuclick').trigger('play');
		}
	});
	
	/* Controle do som do site */
	$('#somcontrol').click(function() {
		if($('#somcontrol').hasClass('glyphicon-volume-off')) {
			$('#somcontrol').toggleClass('glyphicon-volume-up');
		} else {
			$('#somcontrol').toggleClass('glyphicon-volume-off');
		}
	});
	
	/* Funcao responsavel por abrir o menu de atalhos */
	$('#menu-atalhos .menuclick').click(function() {
		if($('#menu-atalhos').hasClass('menu-fechado')) {
			$('#menu-atalhos .texto-menu-aberto').show();
			/* Som ao abrir */
			if($('#somcontrol').hasClass('glyphicon-volume-up')) {
				$('#sommenuopen').trigger('play');
			}
		} else {
			$('#menu-atalhos .texto-menu-aberto').hide();
			/* Som ao fechar */
			if($('#somcontrol').hasClass('glyphicon-volume-up')) {
				$('#sommenuclose').trigger('play');
			}
		}
		$('#menu-atalhos').toggleClass('menu-fechado');
	});
});
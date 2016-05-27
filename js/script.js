/* [Nathalia Pissuti e Laionel Lellis 15.05.2016] */

$(document).ready(function () {
	/* Funcao responsavel por abrir o menu */
	$('#menu .menuclick').click(function() {
		if($('#menu').hasClass('menu-fechado')) {
			$('#menu').animate({left: 0}, 900);
			$('.glyphicon-play').css("-webkit-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(180deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(180deg)");
			$('.glyphicon-play').css("transform", "rotate(180deg)");
			/* Som ao abrir */
			playSound(1);
		} else {
			$('#menu').animate({left: '-18.2em'}, 300);
			$('.glyphicon-play').css("-webkit-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-o-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-ms-transform", "rotate(0deg)");
			$('.glyphicon-play').css("-moz-transform", "rotate(0deg)");
			$('.glyphicon-play').css("transform", "rotate(0deg)");
			/* Som ao fechar */
			playSound(2);
		}
		$('#menu').toggleClass('menu-fechado');		
	});
	
	/* Função definir sons */
	function playSound(tipo){
		if($('#somcontrol').hasClass('glyphicon-volume-up')) {
			switch (tipo) {
				case 1:
					$('#sommenuopen').trigger('play');
					break;
				case 2:
					$('#sommenuclose').trigger('play');
					break;
				case 3:
					$('#sommenuclick').trigger('play');
					break;
			}
		}
	};
	
	/*Click no menu: Link e Som*/
	$('#menu ul li').click(function() {
		playSound(3);
		switch (this.id){
			case "avaliacao":
				$(location).attr('href', this.id + '.xhtml');
				break;
			case "console"	:
				$(location).attr('href', this.id + '.xhtml');
				break;
			case "hardware"	:
				$(location).attr('href', this.id + '.xhtml');
				break;
			case "cadastro":
				$(location).attr('href', this.id + '.xhtml');
				break;
			case "sobre"	:
				$(location).attr('href', this.id + '.xhtml');
				break;
			case "produtos"	:
				$(location).attr('href', this.id + '.xhtml');
				break;
			case "pacman"	:
				$(location).attr('href', this.id + '.xhtml');
				break;
		}
	});
	
	/* Controle do som do site */
	$('#somcontrol').click(function() {
		if($(this).hasClass('glyphicon-volume-off')) {
			$(this).toggleClass('glyphicon-volume-up');
		} else {
			$(this).toggleClass('glyphicon-volume-off');
		}
	});
	
	/* Funcao responsavel por abrir o menu de atalhos */
	$('#menu-atalhos .menuclick').click(function() {
		if($('#menu-atalhos').hasClass('menu-fechado')) {
			$('#menu-atalhos .texto-menu-aberto').show();
			/* Som ao abrir */
			playSound(1);
		} else {
			$('#menu-atalhos .texto-menu-aberto').hide();
			/* Som ao fechar */
			playSound(2);
		}
		$('#menu-atalhos').toggleClass('menu-fechado');
	});
	
    $('[data-toggle="tooltip"]').tooltip();
});
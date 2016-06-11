/* [Nathalia Pissuti e Laionel Lellis 15.05.2016] */

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
}

function adicionarCarrinho() {
	$('#modalIncCarrinho').css("display", "block");
	setTimeout(function(){
		$('#modalIncCarrinho').css("display", "none");
	}, 3000);
}

function avisoFalha(local, texto) {
	$(local).append('\n\
		<div class="row">\n\
			<div class="col-lg-12">\n\
				<div class="aviso-falha">\n\
					<span>' + texto + '</span>\n\
				</div>\n\
			</div>\n\
		</div>');
}

function avisoSucesso(local, texto) {
	$(local).append('\n\
		<div class="row">\n\
			<div class="col-lg-12">\n\
				<div class="aviso-sucesso">\n\
					<span>' + texto + '</span>\n\
				</div>\n\
			</div>\n\
		</div>');
}

function validarCadastro() {
	$('.aviso-falha').remove();
	var form = document.forms['form_cadastro'];

	if(form.nome.value.trim() == '' || form.nome.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar um nome.');
		form.nome.focus();
		return false;
	}

	if(form.sobrenome.value.trim() == '' || form.sobrenome.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar um sobrenome.');
		form.sobrenome.focus();
		return false;
	}

	if(form.cidade.value.trim() == '' || form.cidade.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar uma cidade.');
		form.cidade.focus();
		return false;
	}

	if(form.bairro.value.trim() == '' || form.bairro.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar um bairro.');
		form.bairro.focus();
		return false;
	}

	if(form.rua.value.trim() == '' || form.rua.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar uma rua.');
		form.rua.focus();
		return false;
	}

	if(form.numero.value.trim() == '' || form.numero.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar um número.');
		form.numero.focus();
		return false;
	}

	if(form.email.value.trim() == '' || form.email.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar um e-mail.');
		form.email.focus();
		return false;
	}

	if(form.email.value.indexOf('@') == -1
		|| form.email.value.indexOf(' ') != -1
		|| form.email.value.split('@')[0].length == 0
		|| form.email.value.split('@')[1].length == 0
		|| form.email.value.split('@')[1].indexOf('.') == -1
		|| form.email.value.split('@')[1].split('.')[0].length == 0
		|| form.email.value.split('@')[1].split('.')[1].length == 0) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar um e-mail válido.');
		form.email.focus();
		return false;
	}

	if(form.senha.value.trim() == '' || form.senha.value == null) {
		avisoFalha('form[name=form_cadastro]', 'É necessário informar uma senha.');
		form.senha.focus();
		return false;
	}else if(form.senha.value != form.confsenha.value){
		avisoFalha('form[name=form_cadastro]', 'As senhas devem ser iguais.');
		form.confsenha.focus();
		return false;
	}

	avisoSucesso('form[name=form_cadastro]', 'Usuário cadastrado com sucesso.');
}

function validarAvaliacao() {
	$('.aviso-falha').remove();
	var form = document.forms['form_avaliacao'];

	if(form.nome.value.trim() == '' || form.nome.value == null) {
		avisoFalha('form[name=form_avaliacao]', 'É necessário informar um nome.');
		return false;
	}

	if(form.email.value.trim() == '' || form.email.value == null) {
		avisoFalha('form[name=form_avaliacao]', 'É necessário informar um e-mail.');
		return false;
	}

	if(form.email.value.indexOf('@') == -1
		|| form.email.value.indexOf(' ') != -1
		|| form.email.value.split('@')[0].length == 0
		|| form.email.value.split('@')[1].length == 0
		|| form.email.value.split('@')[1].indexOf('.') == -1
		|| form.email.value.split('@')[1].split('.')[0].length == 0
		|| form.email.value.split('@')[1].split('.')[1].length == 0) {
		avisoFalha('form[name=form_avaliacao]', 'É necessário informar um e-mail válido.');
		return false;
	}

	if(form.avaliacao.value.trim() == '' || form.avaliacao.value == null) {
		avisoFalha('form[name=form_avaliacao]', 'É necessário comentar sua avaliação.');
		return false;
	}

	if(form.nota.value.trim() == '' || form.nota.value == null) {
		avisoFalha('form[name=form_avaliacao]', 'É necessário informar uma nota.');
		return false;
	}

	$("#conteiner-avaliacoes").append('\n\
		<div class="post">\n\
			<div class="row">\n\
				<div class="col-lg-3">\n\
					<p class="nota">' + form.nota.value + '</p>\n\
				</div>\n\
				<div class="col-lg-9">\n\
					<h1>' + form.nome.value + '</h1>\n\
					<p>' + form.avaliacao.value + '</p>\n\
				</div>\n\
			</div>\n\
		</div>');

	avisoSucesso('form[name=form_avaliacao]', 'Avaliação enviada com sucesso.');
}

function validarNota(nota) {
	if(nota < 0) {
		nota = 0;
	}

	if(nota > 10) {
		nota = 10;
	}

	return nota;
}
/* Função dados do usuário*/
function userInfo(){
	$('#userFoto').attr("src","img/logo2.png")
	$('#userName').text("Seu nome aqui");
	$('#userEnd').text("Endereço");
	$('#userNum').text("Numero");
	$('#userBairro').text("Bairro");
	$('#userCidade').text("Cidade");
	$('#userEstado').text("Estado");
	$('#userPais').text("Pais");
	$('#userCep').text("00.000-000");
	$('#userTel').text("(00) 0000-0000");
	$('#userEmail').text("email@email.com");
}

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

	/* Controle do som do site */
	$('#somcontrol').click(function() {
		$(this).toggleClass('glyphicon-volume-up');
		$(this).toggleClass('glyphicon-volume-off');
	});

	/* Funcao responsavel por abrir o menu de atalhos */
	$('#menu-atalhos .menuclick').click(function() {
		if($('#menu-atalhos').hasClass('menu-fechado')) {
			$('#menu-atalhos .texto-menu-aberto').show(900);
			/* Som ao abrir */
			playSound(1);
		} else {
			$('#menu-atalhos .texto-menu-aberto').hide(300);
			/* Som ao fechar */
			playSound(2);
		}
		$('#menu-atalhos').toggleClass('menu-fechado');
	});

	/* Tooltip */
	$('[data-toggle="tooltip"]').tooltip();
});
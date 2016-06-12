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

function mostrarAviso(tipo, mensagem) {
	$('#aviso').addClass('aviso-' + tipo);
	$('#aviso .titulo').html(tipo[0].toUpperCase() + tipo.substr(1));
	$('#aviso .mensagem').html(mensagem);
	$('#aviso').css("display", "block");
	var porcentagem = 100;
	setInterval(function() {
		if(porcentagem != 0) {
			porcentagem--;
			$('.aviso .barra-progresso').css('width', porcentagem + '%');
		}
	}, 30);
	setTimeout(function(){
		$('#aviso').css("display", "none");
		$('.aviso .barra-progresso').css('width', '100%');
		$('#aviso').removeClass('aviso-' + tipo);
	}, 3000);
}

function validarLogin() {
	var form = document.forms['formulario_login'];

	if(form.usuario.value.trim() == '' || form.usuario.value == null) {
		mostrarAviso('falha', 'É necessário informar um e-mail.');
		form.usuario.focus();
		return false;
	}

	if(form.usuario.value.indexOf('@') == -1
		|| form.usuario.value.indexOf(' ') != -1
		|| form.usuario.value.split('@')[0].length == 0
		|| form.usuario.value.split('@')[1].length == 0
		|| form.usuario.value.split('@')[1].indexOf('.') == -1
		|| form.usuario.value.split('@')[1].split('.')[0].length == 0
		|| form.usuario.value.split('@')[1].split('.')[1].length == 0) {
		mostrarAviso('falha', 'É necessário informar um e-mail válido.');
	form.usuario.focus();
	return false;
}

if(form.senha.value.trim() == '' || form.senha.value == null) {
	mostrarAviso('falha', 'É necessário informar uma senha.');
	form.senha.focus();
	return false;
}

if(form.usuario.value != 'usu@usu.com'
	|| form.senha.value != 'senha') {
	mostrarAviso('falha', 'Usuário ou senha inválido.');
return false;
}

window.location = "perfil.xhtml";
}

function validarCadastro() {
	var form = document.forms['form_cadastro'];

	if(form.nome.value.trim() == '' || form.nome.value == null) {
		mostrarAviso('falha', 'É necessário informar um nome.');
		form.nome.focus();
		return false;
	}

	if(form.sobrenome.value.trim() == '' || form.sobrenome.value == null) {
		mostrarAviso('falha', 'É necessário informar um sobrenome.');
		form.sobrenome.focus();
		return false;
	}

	if(form.cidade.value.trim() == '' || form.cidade.value == null) {
		mostrarAviso('falha', 'É necessário informar uma cidade.');
		form.cidade.focus();
		return false;
	}

	if(form.bairro.value.trim() == '' || form.bairro.value == null) {
		mostrarAviso('falha', 'É necessário informar um bairro.');
		form.bairro.focus();
		return false;
	}

	if(form.rua.value.trim() == '' || form.rua.value == null) {
		mostrarAviso('falha', 'É necessário informar uma rua.');
		form.rua.focus();
		return false;
	}

	if(form.numero.value.trim() == '' || form.numero.value == null) {
		mostrarAviso('falha', 'É necessário informar um número.');
		form.numero.focus();
		return false;
	}

	if(form.email.value.trim() == '' || form.email.value == null) {
		mostrarAviso('falha', 'É necessário informar um e-mail.');
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
		mostrarAviso('falha', 'É necessário informar um e-mail válido.');
	form.email.focus();
	return false;
}

if(form.senha.value.trim() == '' || form.senha.value == null) {
	mostrarAviso('falha', 'É necessário informar uma senha.');
	form.senha.focus();
	return false;
} else if(form.senha.value != form.confsenha.value){
	mostrarAviso('falha', 'As senhas devem ser iguais.');
	form.confsenha.focus();
	return false;
}

mostrarAviso('sucesso', 'Usuário cadastrado com sucesso.');
}

function validarAvaliacao() {
	var form = document.forms['form_avaliacao'];

	if(form.nome.value.trim() == '' || form.nome.value == null) {
		mostrarAviso('falha', 'É necessário informar um nome.');
		return false;
	}

	if(form.email.value.trim() == '' || form.email.value == null) {
		mostrarAviso('falha', 'É necessário informar um e-mail.');
		return false;
	}

	if(form.email.value.indexOf('@') == -1
		|| form.email.value.indexOf(' ') != -1
		|| form.email.value.split('@')[0].length == 0
		|| form.email.value.split('@')[1].length == 0
		|| form.email.value.split('@')[1].indexOf('.') == -1
		|| form.email.value.split('@')[1].split('.')[0].length == 0
		|| form.email.value.split('@')[1].split('.')[1].length == 0) {
		mostrarAviso('falha', 'É necessário informar um e-mail válido.');
	return false;
}

if(form.avaliacao.value.trim() == '' || form.avaliacao.value == null) {
	mostrarAviso('falha', 'É necessário comentar sua avaliação.');
	return false;
}

if(form.nota.value.trim() == '' || form.nota.value == null) {
	mostrarAviso('falha', 'É necessário informar uma nota.');
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

function validarSugestao() {
	var form = document.forms['form_sugestao'];

	if(form.nome.value.trim() == '' || form.nome.value == null) {
		mostrarAviso('falha', 'É necessário informar um nome.');
		form.nome.focus();
		return false;
	}

	if(form.sobrenome.value.trim() == '' || form.sobrenome.value == null) {
		mostrarAviso('falha', 'É necessário informar um sobrenome.');
		form.sobrenome.focus();
		return false;
	}

	if(form.email.value.trim() == '' || form.email.value == null) {
		mostrarAviso('falha', 'É necessário informar um e-mail.');
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
		mostrarAviso('falha', 'É necessário informar um e-mail válido.');
	form.email.focus();
	return false;
}

if(form.sugestao.value.trim() == '' || form.sugestao.value == null) {
	mostrarAviso('falha', 'É necessário informar uma sugestão.');
	form.sugestao.focus();
	return false;
}

mostrarAviso('sucesso', 'Segestão cadastrada com sucesso.');
}

function validarProduto() {
	var form = document.forms['form_produto'];

	if(form.nome.value.trim() == '' || form.nome.value == null) {
		mostrarAviso('falha', 'É necessário informar um nome.');
		form.nome.focus();
		return false;
	}

	if(form.codigo.value.trim() == '' || form.codigo.value == null) {
		mostrarAviso('falha', 'É necessário informar um código.');
		form.codigo.focus();
		return false;
	}

	if(form.preco.value.trim() == '' || form.preco.value == null) {
		mostrarAviso('falha', 'É necessário informar um preço.');
		form.preco.focus();
		return false;
	}

	if(form.descricao.value.trim() == '' || form.descricao.value == null) {
		mostrarAviso('falha', 'É necessário informar uma descrição.');
		form.descricao.focus();
		return false;
	}

	mostrarAviso('sucesso', 'Produto cadastrado com sucesso.');
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

function finalizarCompra() {
	mostrarAviso('sucesso', 'O boleto foi enviado para o e-mail cadastrado');
	setTimeout(function() {
		window.location = 'perfil.xhtml';
	}, 3000);
}

function removerItemCarrinho(id) {
	$('#linha' + id).remove();

	if($('.carrinho table tbody').children().length == 0) {
		$('.carrinho table tbody').append('\n\
			<tr>\n\
				<td colspan="4">Nenhum item no carrinho</td>\n\
			</tr>');
	}

	mostrarAviso('sucesso', 'Item removido');
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
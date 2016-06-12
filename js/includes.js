/* Includes padroes de todas as paginas */

function incluirMenu() {
	$('body').append('\n\
		<div id="menu" class="menu-fechado">\n\
			<span class="menuclick" title="Click para abrir/fechar o menu"><span class="glyphicon glyphicon-play"></span></span>\n\
			<div class="texto-menu-aberto">\n\
				<h1>Menu</h1>\n\
				<ul>\n\
					<a href="avaliacao.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-star"></span> Avaliação dos Usuários</li></a>\n\
					<a href="cadastrar_sugestao.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-pencil" /> Enviar Sugestão</li></a>\n\
					<a href="cadastro.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-user"></span> Cadastro</li></a>\n\
					<a href="consoles.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-certificate"></span> Consoles</li></a>\n\
					<a href="acessorios.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-cog"></span> Acessórios</li></a>\n\
					<a href="games.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-barcode"></span> Games</li></a>\n\
					<a href="sobre.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-road"></span> Sobre Nós</li></a>\n\
				</ul>\n\
			</div>\n\
		</div>');
}

function incluirCabecalho () {
	$('body').prepend('\n\
		<div id="cabecalho" class="secao">\n\
			<div class="row text-center secao">\n\
				<div class="col-lg-1">\n\
					<img id="logohome" src="img/Logo1.png" alt="Logo" />\n\
				</div>\n\
				<div class="col-lg-11">\n\
					<h1 id="nomeSite">Wizard Games</h1>\n\
				</div>\n\
			</div>\n\
		</div>\n\
		<div id="barra-funcionalidades" class="secao">\n\
			<div id="menu-atalhos" class="menu-fechado">\n\
				<div class="texto-menu-fechado">\n\
					<div class="row">\n\
						<div class="col-lg-12">\n\
							<span class="glyphicon glyphicon-menu-hamburger menuclick"></span>\n\
						</div>\n\
					</div>\n\
				</div>\n\
				<div class="texto-menu-aberto">\n\
					<div class="row">\n\
						<div class="col-lg-12">\n\
							<ul>\n\
								<a href="index.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-home" /> Início</li></a>\n\
								<a href="#" data-toggle="modal" data-target="#myModal" class="coin-sound"><li><span class="glyphicon glyphicon-lock" /> Login</li></a>\n\
								<a href="perfil.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-user" /> Perfil</li></a>\n\
								<a href="carrinho.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-shopping-cart" /> Carrinho</li></a>\n\
								<a href="sugestao.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-pencil" /> Sugestões</li></a>\n\
								<a href="cadastrar_produto.xhtml" class="coin-sound"><li><span class="glyphicon glyphicon-list-alt" /> Cadastrar Produtos</li></a>\n\
								<button id="somcontrol" class="glyphicon glyphicon-volume-up" data-toggle="tooltip" title="Desabilitar / Habilitar Som"></button>\n\
							</ul>\n\
						</div>\n\
					</div>\n\
				</div>\n\
			</div>\n\
		</div>');
}

function incluirRodape () {
	$('body').append('\n\
		<div id="rodape" class="secao">\n\
			<div class="row">\n\
				<div class="col-lg-3">\n\
					<h3>Contato</h3>\n\
					<span class="glyphicon glyphicon-earphone"></span> &#160; +41 +423 239 63 01<br/>\n\
					<span class="glyphicon glyphicon-envelope"></span> &#160; contato@wizardgames.com.br\n\
				</div>\n\
				<div class="col-lg-3">\n\
					<h3>Redes Sociais</h3>\n\
					<a href="https://twitter.com" target="_blank">\n\
						<span class="socicon-twitter social-media"></span>\n\
					</a>\n\
					<a href="https://www.facebook.com/" target="_blank">\n\
						<span class="socicon-facebook social-media"></span>\n\
					</a>\n\
					<a href="https://plus.google.com" target="_blank">\n\
						<span class="socicon-googleplus social-media"></span>\n\
					</a>\n\
					<a href="https://spotify.com" target="_blank">\n\
						<span class="socicon-spotify social-media"></span>\n\
					</a>\n\
				</div>\n\
				<div class="col-lg-2">\n\
					<h3>Endereço</h3>\n\
					<span class="glyphicon glyphicon-home"></span> &#160; Suíça, Liechtenstein <br/>\n\
		&#160;&#160;&#160;&#160;&#160;&#160; Vaduz - 9490\n\
				</div>\n\
				<div class="col-lg-4">\n\
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608.6360446388463!2d9.52037434630057!3d47.14105024607922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b31665c517ef3%3A0x5143d97dca1b7b82!2s9490+Vaduz%2C+Liechtenstein!5e1!3m2!1spt-BR!2sbr!4v1463615251698"></iframe>\n\
				</div>\n\
			</div>\n\
		</div>');
}
function incluirModal(){
	$('body').prepend('\n\
	<div id="aviso" class="aviso">\n\
		<span class="titulo"></span><br/>\n\
		<span class="mensagem"></span>\n\
		<div class="barra-progresso"></div>\n\
	</div>');

	$('body').append('\n\
	<div class="modal fade" id="myModal">\n\
		<div class="modal-dialog">\n\
			<div class="modal-content">\n\
				<div class="modal-header">\n\
					<button type="button" class="close" data-dismiss="modal">\n\
						<span class="glyphicon glyphicon-remove-circle"></span>\n\
					</button>\n\
					<h4 class="modal-title">Login</h4>\n\
				</div>\n\
				<div class="modal-body">\n\
					<p>Preencha o formulário abaixo para se identificar.</p>\n\
					<br/>\n\
					<form name="formulario_login">\n\
						<label>Usuário</label><br/>\n\
						<input class="form-control" type="text" name="usuario" /><br/>\n\
						<label>Senha</label><br/>\n\
						<input class="form-control" type="password" name="senha" />\n\
					</form>\n\
				</div>\n\
				<div class="modal-footer">\n\
					<div class="row">\n\
						<div class="col-lg-12">\n\
							<button type="button" class="btn btn-primary"\n\
								onclick="validarLogin()">Acessar</button>\n\
							<button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>\n\
						</div>\n\
					</div>\n\
				</div>\n\
			</div>\n\
		</div>\n\
	</div>');
}
function incluirAudios() {
	$('body').prepend('<audio id="sommenuopen" preload="auto"><source src="sounds/smw_door_opens.mp3" type="audio/mpeg" /></audio>\n\
		<audio id="sommenuclose" preload="auto"><source src="sounds/smw_door_closed.mp3" type="audio/mpeg" /></audio>\n\
		<audio id="sommenuclick" preload="auto"><source src="sounds/smw_coin.mp3" type="audio/mpeg" /></audio>');

	/*Click no menu: Link e Som*/
	$('.coin-sound').click(function(event) {
		link = $(this).attr('href');
		event.preventDefault();
		playSound(3);
		setTimeout(function() {
			window.location = link;
		}, 600);
	});
}
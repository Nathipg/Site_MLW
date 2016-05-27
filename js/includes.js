/* Includes padroes de todas as paginas */

function incluirMenu() {
	$('body').append('<div id="menu" class="menu-fechado">\n\
			<span class="menuclick"><span class="glyphicon glyphicon-play"></span></span>\n\
			<div class="texto-menu-aberto">\n\
			<h1>Menu</h1>\n\
				<ul>\n\
					<li><span class="glyphicon glyphicon-star"></span> Avaliação do Usuários</li>\n\
					<li><span class="glyphicon glyphicon-certificate"></span> Consoles</li>\n\
					<li><span class="glyphicon glyphicon-cog"></span> Hardware</li>\n\
					<li><a href="cadastro.xhtml"><span class="glyphicon glyphicon-user"></span> Cadastro</a></li>\n\
					<li><span class="glyphicon glyphicon-road"></span> Sobre nós</li>\n\
					<li><span class="glyphicon glyphicon-barcode"></span> Produtos</li>\n\
					<li><span class="glyphicon glyphicon-star"></span> Pacman</li>\n\
				</ul>\n\
			</div>\n\
		</div>');
}

function incluirCabecalho () {
	$('body').prepend('<div id="cabecalho" class="secao">\n\
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
									<li><a href="index.xhtml">Início</a></li>\n\
									<li><a href="perfil.xhtml">Perfil</a></li>\n\
									<li><a href="#">Carrinho</a></li>\n\
									<li><a href="#">Sugestões</a></li>\n\
									<li><a href="#">Aprovar Críticas</a></li>\n\
									<li><a href="#">Cadastrar Produtos</a></li>\n\
									<li><span id="somcontrol" class="glyphicon glyphicon-volume-up" data-toggle="tooltip" title="Desabilitar / Habilitar Som"></span></li>\n\
								</ul>\n\
							</div>\n\
						</div>\n\
					</div>\n\
				</div>\n\
			</div>');
}

function incluirRodape () {
	$('body').append('<div id="rodape" class="secao">\n\
				<div class="row" id="rodape">\n\
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

function incluirAudios() {
	$('body').prepend('<audio id="sommenuopen" preload="auto"><source src="sounds/smw_door_opens.mp3" type="audio/mpeg" /></audio>\n\
	<audio id="sommenuclose" preload="auto"><source src="sounds/smw_door_closed.mp3" type="audio/mpeg" /></audio>\n\
	<audio id="sommenuclick" preload="auto"><source src="sounds/smw_coin.mp3" type="audio/mpeg" /></audio>');
}
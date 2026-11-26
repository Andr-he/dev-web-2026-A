/* ── CONFIGURAÇÃO ── */
const WHATSAPP = "5561992145777";
const EMAIL    = "ah4418844@gmail.com";


/* ── TEMA (LIGHT / DARK MODE) ── */
function aplicarTema(tema) {
  var html = document.documentElement;
  html.setAttribute('data-theme', tema);
  html.setAttribute('data-bs-theme', tema);

  var btnTema = document.getElementById('btn-tema');
  var iconeTema = document.getElementById('icone-tema');

  if (btnTema && iconeTema) {
    if (tema === 'dark') {
      iconeTema.className = 'bi bi-sun-fill';
      btnTema.setAttribute('aria-label', 'Ativar modo claro');
      btnTema.setAttribute('title', 'Ativar modo claro');
      btnTema.setAttribute('aria-pressed', 'true');
    } else {
      iconeTema.className = 'bi bi-moon-stars-fill';
      btnTema.setAttribute('aria-label', 'Ativar modo escuro');
      btnTema.setAttribute('title', 'Ativar modo escuro');
      btnTema.setAttribute('aria-pressed', 'false');
    }
  }
}

(function iniciarTema() {
  var temaSalvo = null;
  try {
    temaSalvo = localStorage.getItem('tema');
  } catch (e) {
    temaSalvo = null;
  }

  var temaInicial = temaSalvo || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  aplicarTema(temaInicial);

  var btnTema = document.getElementById('btn-tema');
  if (btnTema) {
    btnTema.addEventListener('click', function() {
      var atual = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var proximo = atual === 'dark' ? 'light' : 'dark';
      aplicarTema(proximo);
      try {
        localStorage.setItem('tema', proximo);
      } catch (e) {
        // Ignora erro caso armazenamento local esteja bloqueado
      }
    });
  }
})();


/* ── VALIDAÇÃO ── */
function validar() {
  var nome     = document.getElementById('campo-nome').value.trim();
  var email    = document.getElementById('campo-email').value.trim();
  var assunto  = document.getElementById('campo-assunto').value.trim();
  var mensagem = document.getElementById('campo-mensagem').value.trim();

  // Limpa erros anteriores
  document.getElementById('campo-nome').classList.remove('campo-invalido');
  document.getElementById('campo-email').classList.remove('campo-invalido');
  document.getElementById('campo-assunto').classList.remove('campo-invalido');
  document.getElementById('campo-mensagem').classList.remove('campo-invalido');
  document.getElementById('erro-nome').classList.add('d-none');
  document.getElementById('erro-email').classList.add('d-none');
  document.getElementById('erro-assunto').classList.add('d-none');
  document.getElementById('erro-mensagem').classList.add('d-none');
  document.getElementById('alerta-erro').classList.add('d-none');

  var ok = true;

  // Nome não pode estar vazio
  if (nome === '') {
    document.getElementById('campo-nome').classList.add('campo-invalido');
    document.getElementById('erro-nome').classList.remove('d-none');
    ok = false;
  }

  // E-mail precisa conter @
  if (email === '' || email.indexOf('@') === -1) {
    document.getElementById('campo-email').classList.add('campo-invalido');
    document.getElementById('erro-email').classList.remove('d-none');
    ok = false;
  }

  // Assunto não pode estar vazio
  if (assunto === '') {
    document.getElementById('campo-assunto').classList.add('campo-invalido');
    document.getElementById('erro-assunto').classList.remove('d-none');
    ok = false;
  }

  // Mensagem não pode estar vazia e precisa ter pelo menos 10 caracteres
  if (mensagem === '' || mensagem.length < 10) {
    document.getElementById('campo-mensagem').classList.add('campo-invalido');
    document.getElementById('erro-mensagem').classList.remove('d-none');
    ok = false;
  }

  if (!ok) {
    document.getElementById('alerta-erro').classList.remove('d-none');
  }

  return ok;
}


/* ── LIMPAR ERRO AO DIGITAR ── */
[
  { campo: 'campo-nome',     erro: 'erro-nome' },
  { campo: 'campo-email',    erro: 'erro-email' },
  { campo: 'campo-assunto',  erro: 'erro-assunto' },
  { campo: 'campo-mensagem', erro: 'erro-mensagem' }
].forEach(function(item) {
  var el = document.getElementById(item.campo);
  if (!el) return;
  el.addEventListener('input', function() {
    el.classList.remove('campo-invalido');
    document.getElementById(item.erro).classList.add('d-none');

    var aindaTemErro = document.querySelectorAll('#form-contato .campo-invalido').length > 0;
    if (!aindaTemErro) {
      document.getElementById('alerta-erro').classList.add('d-none');
    }
  });
});


/* ── EVITAR RELOAD CASO PRESSIONE ENTER NO FORMULÁRIO ── */
document.getElementById('form-contato').addEventListener('submit', function(e) {
  e.preventDefault();
});


/* ── ENVIO PELO WHATSAPP ── */
document.getElementById('btn-whatsapp').addEventListener('click', function() {
  if (!validar()) return;

  var nome     = document.getElementById('campo-nome').value.trim();
  var email    = document.getElementById('campo-email').value.trim();
  var assunto  = document.getElementById('campo-assunto').value.trim();
  var mensagem = document.getElementById('campo-mensagem').value.trim();

  var texto = 'Olá! Meu nome é ' + nome + '.\n\nAssunto: ' + assunto + '\n\n' + mensagem + '\n\nRetorno: ' + email;
  window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(texto), '_blank');
  document.getElementById('form-contato').reset();
});


/* ── ENVIO POR E-MAIL ── */
document.getElementById('btn-email').addEventListener('click', function() {
  if (!validar()) return;

  var nome     = document.getElementById('campo-nome').value.trim();
  var email    = document.getElementById('campo-email').value.trim();
  var assunto  = document.getElementById('campo-assunto').value.trim();
  var mensagem = document.getElementById('campo-mensagem').value.trim();

  var corpo = 'Olá!\n\nMeu nome é ' + nome + ' (' + email + ').\n\n' + mensagem;
  window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo);
});


/* ── FECHAR MENU MOBILE AO CLICAR NUM LINK ── */
document.querySelectorAll('#menu .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    var menuEl = document.getElementById('menu');
    if (menuEl && menuEl.classList.contains('show')) {
      var instancia = bootstrap.Collapse.getOrCreateInstance(menuEl);
      instancia.hide();
    }
  });
});


/* ── DESTACAR LINK ATIVO NA NAVBAR CONFORME SCROLL ── */
(function configurarScrollNav() {
  var secoes = document.querySelectorAll('section[id]');
  var links  = document.querySelectorAll('#menu .nav-link');

  function atualizarLinkAtivo() {
    var posicao = window.scrollY + 120;
    var secaoAtual = 'inicio';

    secoes.forEach(function(secao) {
      if (posicao >= secao.offsetTop) {
        secaoAtual = secao.getAttribute('id');
      }
    });

    links.forEach(function(link) {
      var alvo = link.getAttribute('href').replace('#', '');
      if (alvo === secaoAtual) {
        link.classList.add('active', 'text-primary');
        link.classList.remove('text-secondary');
      } else {
        link.classList.remove('active', 'text-primary');
        link.classList.add('text-secondary');
      }
    });
  }

  window.addEventListener('scroll', atualizarLinkAtivo, { passive: true });
  atualizarLinkAtivo();
})();

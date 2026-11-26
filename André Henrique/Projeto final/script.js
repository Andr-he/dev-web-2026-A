/* ── CONFIGURAÇÃO ── */
const WHATSAPP = "5561992145777";
const EMAIL    = "ah4418844@gmail.com";


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

  // Mensagem precisa ter pelo menos 10 caracteres
  if (mensagem.length < 10) {
    document.getElementById('campo-mensagem').classList.add('campo-invalido');
    document.getElementById('erro-mensagem').classList.remove('d-none');
    ok = false;
  }

  if (!ok) {
    document.getElementById('alerta-erro').classList.remove('d-none');
  }

  return ok;
}


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
  window.open('mailto:' + EMAIL + '?subject=' + encodeURIComponent(assunto) + '&body=' + encodeURIComponent(corpo), '_blank');
});


/* ── FECHAR MENU MOBILE AO CLICAR NUM LINK ── */
document.querySelectorAll('#menu .nav-link').forEach(function(link) {
  link.addEventListener('click', function() {
    var instancia = bootstrap.Collapse.getInstance(document.getElementById('menu'));
    if (instancia) instancia.hide();
  });
});

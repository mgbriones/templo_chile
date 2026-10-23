// Compartir: en celular abre el menú nativo; si no, el enlace va a WhatsApp
(function () {
  var enlace = document.getElementById('compartir');
  if (!enlace) return;
  enlace.addEventListener('click', function (e) {
    var tactil = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    if (!tactil || !navigator.share) return;
    e.preventDefault();
    navigator.share({ title: enlace.dataset.titulo, text: enlace.dataset.texto, url: enlace.dataset.url }).catch(function (err) {
      if (err && err.name !== 'AbortError') window.location.href = enlace.href;
    });
  });
})();

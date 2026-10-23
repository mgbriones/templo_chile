// Carrusel de fotos: avance automático, flechas, puntos y swipe en celular
(function () {
  var AUTOPLAY_MS = 5000;
  var galeria = document.getElementById('galeria');
  if (!galeria) return;

  var indice = 0;
  var timer;
  var pista = function () { return galeria.querySelector('.galeria__pista:not([hidden])'); };
  var puntos = function () { return galeria.querySelector('.galeria__puntos:not([hidden])'); };

  function actualizar() {
    pista().style.transform = 'translateX(-' + (indice * 100) + '%)';
    Array.prototype.forEach.call(puntos().children, function (b, i) {
      b.setAttribute('aria-current', i === indice ? 'true' : 'false');
    });
  }

  function ir(i) {
    var n = pista().children.length;
    indice = ((i % n) + n) % n;
    actualizar();
  }

  function reiniciarAutoplay() {
    clearInterval(timer);
    timer = setInterval(function () { ir(indice + 1); }, AUTOPLAY_MS);
  }

  // Al cambiar de sede (ver scripts/pestanas.js) se parte desde la primera foto
  galeria.addEventListener('cambio-sede', function () { ir(0); reiniciarAutoplay(); });

  galeria.addEventListener('click', function (e) {
    var paso = e.target.closest('[data-galeria-paso]');
    var punto = e.target.closest('[data-punto]');
    if (paso) ir(indice + Number(paso.getAttribute('data-galeria-paso')));
    else if (punto) ir(Number(punto.getAttribute('data-punto')));
    else return;
    reiniciarAutoplay();
  });

  var inicioX = null;
  var visor = galeria.querySelector('.galeria__visor');
  visor.addEventListener('touchstart', function (e) { inicioX = e.touches[0].clientX; }, { passive: true });
  visor.addEventListener('touchend', function (e) {
    if (inicioX === null) return;
    var dx = e.changedTouches[0].clientX - inicioX;
    if (Math.abs(dx) > 40) { ir(indice + (dx < 0 ? 1 : -1)); reiniciarAutoplay(); }
    inicioX = null;
  });

  reiniciarAutoplay();
})();

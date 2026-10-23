// Pestañas de sede: cada grupo [data-pestanas="x"] muestra los elementos
// [data-panel="x"] de la sede elegida y avisa con el evento "cambio-sede".
(function () {
  document.querySelectorAll('[data-pestanas]').forEach(function (grupo) {
    var nombre = grupo.getAttribute('data-pestanas');
    grupo.addEventListener('click', function (e) {
      var boton = e.target.closest('[data-sede]');
      if (!boton) return;
      var sede = boton.getAttribute('data-sede');
      grupo.querySelectorAll('[data-sede]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === boton));
      });
      document.querySelectorAll('[data-panel="' + nombre + '"]').forEach(function (panel) {
        panel.hidden = panel.getAttribute('data-sede') !== sede;
      });
      grupo.dispatchEvent(new CustomEvent('cambio-sede', { detail: sede, bubbles: true }));
    });
  });
})();

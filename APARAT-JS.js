/* APARAT — JS pro Shoptet šablonu Techno. Verze 0.1 (kostra).
   Pole upravy[]: každá úprava je idempotentní a běží v try/catch. */
(function () {
  'use strict';

  var upravy = [
    {
      nazev: 'Označení šablony',
      spustit: function () { document.body.classList.add('gp-aparat'); }
    }
  ];

  function spust() {
    upravy.forEach(function (u) {
      try { u.spustit(); } catch (e) { console.warn('[aparat]', u.nazev, e); }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', spust);
  else spust();
})();

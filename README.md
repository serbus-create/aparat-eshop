# aparat-eshop
E-shop / Bazar foto & audio — Shoptet, šablona Techno (`template-07`).

## Vložení do Shoptetu
Administrace → Vzhled a obsah → Editor → HTML kód → Záhlaví (před koncovým tagem HEAD).
Vždy **plný 40znakový hash commitu** (nikdy `@main`, nikdy zkrácený):

```html
<style id="gp-preload">html:not(.gp-ready) body{visibility:hidden}</style>
<script>(function(){var n=0,d=false;function go(){if(d)return;d=true;document.documentElement.classList.add('gp-ready')}window.__checkReady=function(){if(++n>=2)go()};setTimeout(go,1500)})();</script>

<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/serbus-create/aparat-eshop@<HASH>/APARAT-CSS.css"
      onload="window.__checkReady && window.__checkReady()">
<script defer
        src="https://cdn.jsdelivr.net/gh/serbus-create/aparat-eshop@<HASH>/APARAT-JS.js"
        onload="window.__checkReady && window.__checkReady()"></script>
```

Paleta: navy `#000057`, levandule `#8788e7`, světlá levandule `#e6e6fa`, krém `#fbf5e4`, mandarinka `#ff7a45`.

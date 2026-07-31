# Vinami — horeca funnel landingspagina

Losse, statische marketingpagina (geen Shopify) voor de horeca-outreach: leads
komen via een persoonlijke e-mail met wijnkaart-analyse op deze pagina terecht
en kunnen een gratis fles aanvragen of een kennismaking plannen.

Puur HTML/CSS/JS, geen build-stap nodig.

## Vóór livegang: verplichte stappen

1. **Formulier koppelen.** Het formulier stuurt nu naar een placeholder:
   `https://formspree.io/f/YOUR_FORM_ID` in `index.html`. Maak gratis een
   account op [formspree.io](https://formspree.io), koppel een formulier aan
   `info@vinami.nl`, en vervang `YOUR_FORM_ID` door je eigen formulier-ID.
2. **Echte foto's toevoegen.** Alle `<div class="placeholder-media">...</div>`
   blokken (hero, verhaal, en de drie cases) zijn bewust kleurvlakken in
   plaats van afbeeldingen. Zodra je foto's hebt: zet ze in `assets/`, en
   vervang bijvoorbeeld
   ```html
   <div class="hero__media placeholder-media" aria-hidden="true">
     <span class="placeholder-media__label">Foto: wijngoed</span>
   </div>
   ```
   door
   ```html
   <img class="hero__media" src="assets/hero-wijngoed.jpg" alt="Het wijngoed van Vinami">
   ```
   (en verwijder dan de bijbehorende `.placeholder-media` CSS-regel niet per se — die blijft gewoon ongebruikt).
3. **Logo.** De huidige "Vinami"-tekst in `Playfair Display italic` is een
   vlotte vervanger voor het echte beeldmerk. Heb je een logobestand
   (svg/png)? Vervang dan `<a class="logo" href="#top">Vinami</a>` door een
   `<img>`.

## Optioneel

- **Custom domein**: voeg een `CNAME`-bestand toe in deze map met bv.
  `horeca.vinami.nl` erin, en zet bij je DNS-provider een CNAME-record naar
  `sebastiaansparreboom-eng.github.io`. Zonder dit bestand draait de site op
  de standaard GitHub Pages-URL.
- **Personalisatie per restaurant**: nu is de pagina bewust generiek (de
  personalisatie zit in de e-mail). Wil je later toch een naam/gap-analyse
  tonen op basis van een linkparameter (`?naam=Floats`), dan is dat een
  aparte uitbreiding.

## Hoe deployen werkt

Een GitHub Actions-workflow (`.github/workflows/deploy-horeca-pages.yml`)
publiceert de inhoud van deze map automatisch naar GitHub Pages bij elke push
naar `main` die iets in `horeca/` wijzigt.

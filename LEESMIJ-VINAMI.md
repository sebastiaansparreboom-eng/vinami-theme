# Vinami aanpassingen in dit conceptthema

Dit is je Horizon conceptthema (geëxporteerd op 30 juli 2026) met de Vinami stijl en functionaliteit er al in verwerkt. Onderstaand een overzicht van wat is toegevoegd en wat je zelf nog moet instellen in Shopify admin.

## Wat is toegevoegd

De volledige Aesop x Porsche restyle (kleuren, typografie, scherpe hoeken, dunne lijnen i.p.v. schaduw) staat in `config/settings_data.json`, dus zichtbaar en aanpasbaar via Thema-editor > Thema-instellingen > Kleuren / Typografie. Koppen en verhalende tekst gebruiken Fraunces, body-tekst en specificaties gebruiken Inter.

`assets/vinami-style.css` bevat aanvullende stijl voor de leeftijdscheck, het specificatieblok en de horecapagina (crème/steengrijs met bordeauxrood/zwart als precisie-accent), en leest de kleuren/lettertypen uit dezelfde thema-instellingen. Dit bestand wordt automatisch geladen via `snippets/stylesheets.liquid`, dus je hoeft hier niets voor te doen.

De homepage (`templates/index.json`) heeft naast de hero en het productoverzicht ook een marquee met wijnregio's, een verhalend blok over de filosofie van Vinami, en een sectie gericht op horeca-klanten (link naar de `horeca`-pagina, zie hieronder).

Placeholder-teksten (verzending, retour, aanbevelingen op de productpagina, en de nieuwsbrief-aanmelding in de footer) zijn vertaald naar het Nederlands en aangepast aan wijn. De footer gebruikt nu het donkere kleurenschema.

`sections/age-verification.liquid` is de leeftijdscheck. Deze staat al ingehaakt in `layout/theme.liquid`, direct na de openende `<body>` tag, en verschijnt dus op elke pagina totdat een bezoeker zijn geboortedatum bevestigt.

`blocks/wine-spec-block.liquid` is het specificatieblok (regio, druif, jaargang, alcoholpercentage, serveertemperatuur). Dit is toegevoegd als blok in `templates/product.json`, direct onder de productbeschrijving. Je kunt de positie later zelf verslepen in de thema-editor.

`sections/horeca-request-form.liquid` en `templates/page.horeca.json` vormen samen de horecapagina met aanvraagformulier.

## Wat jij nog moet doen in Shopify admin

Ga naar Instellingen > Aangepaste gegevens > Producten en maak deze metafields aan in de namespace `vinami`: regio (enkele regel tekst), druif (enkele regel tekst), jaargang (enkele regel tekst of geheel getal), alcoholpercentage (getal met decimalen), serveertemperatuur (enkele regel tekst). Vul deze in per product, of gebruik een import via een spreadsheet als je veel producten hebt.

Zet bij diezelfde metafields de optie "Gebruiken als filter in de winkel" aan. Ga daarna naar de Search & Discovery app en voeg regio, druif en jaargang toe als filters op je collectiepagina's. Prijs staat er standaard al bij.

Maak onder Onlinewinkel > Pagina's een nieuwe pagina aan met de handle `horeca`, en kies bij Thema sjabloon de optie `page.horeca`. Stel bij Instellingen > Meldingen het e-mailadres in dat de aanvragen via dit formulier moet ontvangen.

Test in een incognitovenster of de leeftijdscheck in beeld komt, vul een geboortedatum onder de 18 in om de foutmelding te zien, en controleer of "onthoud mij" ervoor zorgt dat de check bij een volgend bezoek wegblijft.

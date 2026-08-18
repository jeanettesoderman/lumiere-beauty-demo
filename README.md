# Lumière Beauty Master v3

Version 3 gör kundbilder lika enkla att byta som kontaktuppgifter.

## Det viktigaste
Du har nu:
- `config.js` för kunduppgifter
- `images/` för kundens egna bilder
- bildsökvägar samlade i `config.js`

## Kundbilder, snabbast möjliga arbetsflöde
1. Lägg kundens bilder i `images/`.
2. Döp dem tydligt, till exempel:
   - `hero.jpg`
   - `lashes.jpg`
   - `brows.jpg`
   - `facial.jpg`
   - `nails.jpg`
   - `skincare.jpg`
   - `about.jpg`
   - `gallery-1.jpg` osv.
3. Öppna `config.js`.
4. Ändra exempelvis:
   `hero: "images/hero.jpg"`
5. Spara och testa lokalt.

## Övrig kundanpassning
I `config.js` kan du också byta:
- företagsnamn
- sidtitel och beskrivning
- hero-text
- om-salongen-text
- bokningslänk
- adress
- telefon
- e-post
- öppettider
- Instagram/Facebook
- kontaktformulär

## Viktigt för bilder
För riktiga kundsajter rekommenderas lokala bilder i `images/` i stället för externa demo-URL:er.

## Nästa förbättring
Nästa logiska steg är att flytta behandlingar, priser och galleriinnehåll till `config.js`, så att nästan hela sajten kan kundanpassas från en enda fil.

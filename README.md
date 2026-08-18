# Lumière Beauty Master v2

Det här är masterversionen av beauty-sajten.

## Viktigaste skillnaden mot v1
Vanliga kunduppgifter ligger nu i `config.js`.

När en kund köper modellen kan du i första hand ändra:
- företagsnamn
- sidtitel och beskrivning
- hero-rubrik och text
- om-salongen-text
- bokningslänk
- adress
- telefon
- e-post
- öppettider
- Instagram
- Facebook
- kontaktformulärets mottagning

utan att behöva leta genom `index.html`.

## Kundorder, snabb arbetsgång
1. Kopiera hela projektmappen.
2. Döp kopian efter kunden.
3. Öppna `config.js`.
4. Byt kunduppgifterna.
5. Byt bilder och priser/tjänster vid behov i `index.html`.
6. Testa lokalt.
7. Skapa kundrepo på GitHub.
8. Publicera via Netlify.
9. Koppla kundens domän.

## Bokningssystem
I `config.js`:
- `booking.url: "#"` betyder demo.
- Byt till kundens riktiga Bokadirekt-/bokningslänk när den finns.

## Kontaktformulär
Standard:
`mode: "demo"`

För extern formulärtjänst:
`mode: "external"`
och fyll i `actionUrl`.

## Nästa förbättring
Om vi vill kan även behandlingar, priser och galleri flyttas till konfigurationsfilen i en senare version.

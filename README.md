# Lumière Beauty Master v4

Nu kan nästan hela kundanpassningen göras från `config.js`.

## Det som nu ligger i config.js
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
- bilder
- behandlingar
- prislista
- galleri

## Ändra behandlingar
I `services` kan du ändra namn, beskrivning, startpris och bild.

Exempel:
```js
{
  key: "lashes",
  name: "Lashes",
  description: "Framhäv ögonen med fransar anpassade efter ditt uttryck.",
  priceFrom: "Från 795 kr",
  imageKey: "lashes"
}
```

Du kan även ta bort eller lägga till hela objekt.

## Ändra priser
I `prices` finns kategorier och prisrader.

Exempel:
```js
{
  category: "Brows",
  items: [
    ["Brynfärgning och formning", "395 kr"],
    ["Brow Lift", "695 kr"]
  ]
}
```

## Ändra galleri
I `gallery` styr du vilka bilder som visas och vilken layoutklass de får.

- `tall` = hög bild
- `wide` = bred bild
- tom sträng = vanlig bild

Exempel:
```js
{ imageKey: "gallery1", alt: "Beauty portrait", className: "tall" }
```

## Kundbilder
Lägg bilderna i `images/` och byt bildsökvägarna i `config.js`.

## Rekommenderad kundanpassning
1. Kopiera masterprojektet.
2. Lägg in kundens bilder.
3. Ändra `config.js`.
4. Kontrollera texter och priser.
5. Testa lokalt.
6. Push till kundens GitHub-repo.
7. Netlify publicerar automatiskt.
8. Koppla kundens domän.

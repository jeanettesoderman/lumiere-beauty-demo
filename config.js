/*
  ============================================================
  LUMIÈRE MASTER CONFIG
  ============================================================
  Ändra i princip bara uppgifterna i den här filen när du
  kundanpassar sajten. Resten av HTML/CSS behöver normalt inte
  röras för vanliga företagsuppgifter.
*/

window.SITE_CONFIG = {
  business: {
    fullName: "Lumière Beauty Studio",
    shortName: "Lumière",
    type: "Beauty Studio",
    siteTitle: "Lumière Beauty Studio | Lashes, brows, hudvård och naglar",
    description:
      "Lumière Beauty Studio – lashes, brows, hudvård och naglar i en elegant salongsmiljö."
  },

  hero: {
    title: "Skönhet med känsla för detaljer",
    text:
      "Professionella behandlingar för dig som vill framhäva det naturliga, unna dig en stund för dig själv och lämna salongen med den där lilla extra känslan.",
    serviceSummary: "Lashes · Brows · Hudvård · Naglar"
  },

  about: {
    title: "En stund som bara är din",
    text1:
      "På Lumière Beauty Studio kombinerar vi noggrant utförda behandlingar med personlig service och en lugn, elegant miljö.",
    text2:
      "Vi arbetar med kvalitetsprodukter och anpassar varje behandling efter dina önskemål, din stil och dina förutsättningar."
  },

  booking: {
    title: "Din nästa Lumière-stund väntar",
    buttonText: "Boka tid online",
    url: "#"
  },

  contact: {
    title: "Välkommen till Lumière",
    addressLines: ["Storgatan 24", "553 21 Jönköping"],
    phone: "036-123 45 67",
    email: "hello@lumierebeauty.se",
    openingHours: [
      "Mån–Tors: 10.00–18.00",
      "Fredag: 09.00–17.00",
      "Lördag: 10.00–14.00",
      "Söndag: Stängt"
    ]
  },

  social: {
    instagram: "#",
    facebook: "#"
  },

  form: {
    /*
      "demo" = visar bara demo-meddelande.
      "external" = formuläret skickas till actionUrl, t.ex. Formspree.
    */
    mode: "demo",
    actionUrl: ""
  }
,

  images: {
    /*
      För kundbilder:
      1. Lägg bilderna i mappen /images
      2. Byt bara sökvägarna nedan
      Exempel: "images/hero.jpg"

      Om du vill använda en extern bildlänk går det också bra.
    */
    hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    lashes: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&fit=crop&w=900&q=85",
    brows: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
    facial: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85",
    nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    skincare: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=900&q=85",
    about: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=85",
    gallery1: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85",
    gallery2: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
    gallery3: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85",
    gallery4: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    gallery5: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
    gallery6: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85"
  }
};

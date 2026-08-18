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
};

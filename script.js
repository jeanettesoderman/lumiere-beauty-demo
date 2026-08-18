function applySiteConfig() {
  const c = window.SITE_CONFIG;
  if (!c) return;

  if (c.images) {
    document.querySelectorAll("[data-image-key]").forEach(img => {
      const key = img.dataset.imageKey;
      const src = c.images[key];
      if (src) img.src = src;
    });
  }

  const one = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) el.textContent = value;
  };

  const all = (selector, value) => {
    document.querySelectorAll(selector).forEach(el => {
      if (value !== undefined && value !== null) el.textContent = value;
    });
  };

  one("[data-site-title]", c.business.siteTitle);
  document.title = c.business.siteTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", c.business.description);

  all("[data-brand-short]", c.business.shortName);
  one("[data-business-name-upper]", c.business.fullName.toUpperCase());
  one("[data-business-type]", c.business.type);

  one("[data-hero-title]", c.hero.title);
  one("[data-hero-text]", c.hero.text);
  one("[data-service-summary]", c.hero.serviceSummary);

  one("[data-about-title]", c.about.title);
  one("[data-about-text-1]", c.about.text1);
  one("[data-about-text-2]", c.about.text2);

  one("[data-booking-title]", c.booking.title);
  one("[data-contact-title]", c.contact.title);

  const bookingLink = document.querySelector("[data-booking-link]");
  if (bookingLink) {
    bookingLink.textContent = c.booking.buttonText;
    bookingLink.href = c.booking.url || "#";
    if (c.booking.url && c.booking.url !== "#") {
      bookingLink.target = "_blank";
      bookingLink.rel = "noopener";
    } else {
      bookingLink.addEventListener("click", e => e.preventDefault());
    }
  }

  const navBooking = document.querySelector("[data-nav-booking]");
  if (navBooking && c.booking.url && c.booking.url !== "#") {
    navBooking.href = c.booking.url;
    navBooking.target = "_blank";
    navBooking.rel = "noopener";
  }

  const address = document.querySelector("[data-address]");
  if (address) address.innerHTML = c.contact.addressLines.join("<br>");

  one("[data-phone]", c.contact.phone);
  one("[data-email]", c.contact.email);

  const hours = document.querySelector("[data-opening-hours]");
  if (hours) hours.innerHTML = c.contact.openingHours.join("<br>");

  const instagram = document.querySelector("[data-instagram]");
  if (instagram) instagram.href = c.social.instagram || "#";

  const facebook = document.querySelector("[data-facebook]");
  if (facebook) facebook.href = c.social.facebook || "#";

  one(
    "[data-copyright]",
    `© ${new Date().getFullYear()} ${c.business.fullName}`
  );

  const form = document.querySelector("[data-contact-form]");
  if (form) {
    if (c.form.mode === "external" && c.form.actionUrl) {
      form.action = c.form.actionUrl;
    } else {
      form.addEventListener("submit", handleDemoForm);
    }
  }
}

document.addEventListener("DOMContentLoaded", applySiteConfig);

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

function handleDemoForm(event) {
  event.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "Demoformulär: här kopplas Formspree, Netlify Forms eller annan formulärtjänst in.";
  event.target.reset();
  return false;
}

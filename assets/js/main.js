// Quail Valley Charities — shared site behavior
// Loads the header/footer partials, then wires up navigation, scroll reveal,
// and demo form handling once they exist in the DOM.

async function includePartials() {
  const targets = document.querySelectorAll("[data-include]");
  await Promise.all(
    Array.from(targets).map(async (el) => {
      const src = el.getAttribute("data-include");
      try {
        const res = await fetch(src);
        el.innerHTML = await res.text();
      } catch (err) {
        console.error("Failed to load partial:", src, err);
      }
    })
  );
}

function setActiveNavLink() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  const link = document.querySelector(`.main-nav a[data-nav="${page}"]`);
  if (link) link.setAttribute("aria-current", "page");
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function setupNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Content is visible by default (see .reveal in style.css). Only opt into
  // the hidden/animate-in state once we know we can reliably bring it back —
  // otherwise a slow network, a script error, or an observer that never
  // fires would leave real content permanently invisible.
  if (prefersReduced || !("IntersectionObserver" in window)) return;

  document.documentElement.classList.add("js-reveal");

  // Safety net: if anything goes wrong after this point, don't leave
  // content stuck at opacity 0.
  const failSafe = window.setTimeout(() => {
    items.forEach((el) => el.classList.add("is-visible"));
  }, 4000);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
  window.addEventListener(
    "load",
    () => {
      // Anything already in view on load (e.g. above the fold) should be
      // visible immediately rather than waiting on a scroll event.
      items.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-visible");
        }
      });
      window.clearTimeout(failSafe);
    },
    { once: true }
  );
}

function setupContactForm() {
  const form = document.querySelector(".contact-form:not(#donate-demo-form)");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const status = document.getElementById("form-status");
    if (status) {
      status.hidden = false;
      status.textContent = "Thanks for reaching out! This is a demo form — connect it to your email or CRM to start receiving messages.";
    }
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", async function () {
  await includePartials();
  setActiveNavLink();
  setFooterYear();
  setupNavToggle();
  setupScrollReveal();
  setupContactForm();
});

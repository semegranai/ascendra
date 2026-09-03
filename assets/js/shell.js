// Shell — nav + footer. Highlights current link from body[data-nav].
(function () {
  const NAV_ITEMS = [
    ["home", "Home", "index.html"],
    ["plan", "How it works", "index.html#plan"],
    ["events", "Events", "events.html"],
    ["about", "About", "about.html"],
    ["donate", "Donate", "donate.html"],
  ];

  const current = document.body.dataset.nav || "";

  const nav = `
    <nav class="nav" aria-label="Primary">
      <div class="nav-inner">
        <a class="brand" href="index.html" aria-label="Ascendra — Home">
          <img src="assets/img/logo.png" width="44" height="44" alt="" />
          <strong>Ascendra</strong>
          <small>Association</small>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
        <div class="nav-links" id="nav-links">
          ${NAV_ITEMS.map(
            ([k, label, href]) =>
              `<a href="${href}" class="${k === current ? "current" : ""}">${label}</a>`
          ).join("")}
          <a href="index.html#memo" class="cta primary">Get the memo <span class="arrow">→</span></a>
        </div>
      </div>
    </nav>`;

  const footer = `
    <footer>
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-col foot-brand">
            <div class="brand">
              <img src="assets/img/logo.png" width="44" height="44" alt="" />
              <strong>Ascendra Association</strong>
            </div>
            <p>A Missouri nonprofit. Open AI packs that bolt onto the advisors you already have — so you walk in as their best client, not as their replacement.</p>
          </div>
          <div class="foot-col">
            <h5>Use</h5>
            <a href="index.html#memo">The memo</a>
            <a href="index.html#plan">How it works</a>
            <a href="index.html#demo">See it</a>
            <a href="tools.html">Tools</a>
          </div>
          <div class="foot-col">
            <h5>Firm</h5>
            <a href="about.html">About</a>
            <a href="events.html">Events</a>
            <a href="donate.html">Support the work</a>
            <a href="design-system.html">Design system</a>
          </div>
          <div class="foot-col">
            <h5>Legal</h5>
            <a href="legal.html">Disclaimer</a>
            <a href="mailto:hello@ascendra.org">hello@ascendra.org</a>
          </div>
        </div>
        <div class="foot-legal">
          <span>© 2026 Ascendra Association</span>
          <span>Missouri nonprofit · Kansas City</span>
        </div>
        <p class="disclaimer">Nothing on this site is legal, financial, tax, investment, or business advice. Educational tools only. You own your decisions. Support of this work is not described as a tax-deductible charitable contribution until the entity’s status is confirmed in writing.</p>
      </div>
    </footer>`;

  const navMount = document.getElementById("nav-mount");
  const footMount = document.getElementById("foot-mount");
  if (navMount) navMount.innerHTML = nav;
  if (footMount) footMount.innerHTML = footer;

  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  document.querySelectorAll("form[data-capture]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (!email || !email.value.trim()) return;
      form.classList.add("ok");
      const btn = form.querySelector("button, .cta");
      if (btn) btn.textContent = "Sent — check your inbox";
      email.disabled = true;
      const note = form.parentElement.querySelector(".capture-note");
      if (note) {
        note.textContent =
          "Email wiring is next. For now this confirms the form works — we’ll send the skill from here before launch.";
      }
    });
  });
})();

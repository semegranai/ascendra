(function () {
  document.querySelectorAll("form[data-capture]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      if (!email || !email.value.trim()) return;
      form.classList.add("ok");
      const btn = form.querySelector("button");
      if (btn) btn.textContent = "Sent — check your inbox";
      email.disabled = true;
    });
  });
})();

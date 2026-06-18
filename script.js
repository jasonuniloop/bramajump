const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("[data-video]").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-video");
    if (!id) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
    iframe.title = "Bramajump teaser officiel 2026";
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    button.replaceChildren(iframe);
  }, { once: true });
});

document.querySelectorAll("[data-map]").forEach((button) => {
  button.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps/d/u/1/embed?mid=1tZv7SQhTyPbhyhAIDHI83cIMy_DwCqM&ehbc=2E312F&noprof=1";
    iframe.title = "Carte d'acces Bramajump";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    button.replaceChildren(iframe);
    button.style.padding = "0";
    button.style.background = "transparent";
  }, { once: true });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");
const currentPage = document.body.dataset.page;

navLinks.forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("is-current");
    link.setAttribute("aria-current", "page");
  }
});

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    nav.classList.toggle("is-open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const showcaseItems = document.querySelectorAll(".showcase-item");
const showcaseImage = document.getElementById("showcaseImage");
const showcaseTag = document.getElementById("showcaseTag");
const showcaseTitle = document.getElementById("showcaseTitle");
const showcaseText = document.getElementById("showcaseText");

if (showcaseItems.length && showcaseImage && showcaseTag && showcaseTitle && showcaseText) {
  const setShowcase = (item) => {
    showcaseItems.forEach((button) => button.classList.remove("is-active"));
    item.classList.add("is-active");

    const { image, tag, title, text } = item.dataset;
    showcaseImage.src = image;
    showcaseImage.alt = item.querySelector("img")?.alt || "PreFab Ghana project";
    showcaseTag.textContent = tag;
    showcaseTitle.textContent = title;
    showcaseText.textContent = text;
  };

  showcaseItems.forEach((item) => {
    item.addEventListener("click", () => setShowcase(item));
  });
}

document.documentElement.classList.add("js");

const THEME_KEY = "kubekite-theme";
const themeToggle = document.querySelector("#theme-toggle");

// Dark is the default, so anything other than an explicit "light" counts as dark.
const currentTheme = () =>
  document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";

const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
    );
  }
};

applyTheme(currentTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = currentTheme() === "dark" ? "light" : "dark";
    applyTheme(nextTheme);

    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
      // Storage can be unavailable in private mode; the toggle still works for this visit.
    }
  });
}

const header = document.querySelector(".site-header");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    const headerOffset = header ? header.offsetHeight + 16 : 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: targetTop,
      behavior: "smooth"
    });
  });
});

const revealElements = document.querySelectorAll(".reveal");

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
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

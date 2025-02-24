const navbarButton = document.querySelector(".navbar__button");
const navbarLinks = document.querySelector(".navbar__links");
const navbarCta = document.querySelector(".navbar__cta");

navbarButton.addEventListener("click", () => {
  navbarButton.classList.toggle("active");
  navbarLinks.classList.toggle("active");
  navbarCta.classList.toggle("active");
});

function navigateTo(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section) {
    console.error(`Elemento com ID "${sectionId}" não encontrado.`);
    return;
  }

  const offset = 63;
  const topPosition =
    section.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: topPosition,
    behavior: "smooth",
  });

  history.pushState(null, null, window.location.pathname);
  return false;
}

function toggleAnimation(slider) {
  const currentState = getComputedStyle(slider).animationPlayState;
  slider.style.animationPlayState = currentState === "running" ? "paused" : "running";
}
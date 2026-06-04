document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const stickyCta = document.querySelector(".mobile-sticky-cta");
  const bottomCtaButton = document.querySelector(".bottom-cta .button");
  const updateStickyCta = () => {
    if (!stickyCta) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const stickyHeight = stickyCta.offsetHeight || 0;
    const bottomButtonTop = bottomCtaButton
      ? bottomCtaButton.getBoundingClientRect().top
      : Number.POSITIVE_INFINITY;
    const isNearBottomButton = bottomButtonTop <= window.innerHeight - stickyHeight - 16;
    stickyCta.classList.toggle("is-visible", scrollTop > 680 && !isNearBottomButton);
  };

  updateStickyCta();
  window.addEventListener("scroll", updateStickyCta, { passive: true });
  window.addEventListener("resize", updateStickyCta);
  window.setInterval(updateStickyCta, 300);
});

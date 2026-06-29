document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  loadCampaignContent();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const budgetTabs = document.querySelectorAll("[data-budget-tab]");
  const budgetPanels = document.querySelectorAll("[data-budget-panel]");

  if (budgetTabs.length && budgetPanels.length) {
    budgetPanels.forEach((panel) => {
      panel.hidden = !panel.classList.contains("is-active");
    });

    budgetTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.budgetTab;

        budgetTabs.forEach((item) => {
          const isActive = item === tab;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
        });

        budgetPanels.forEach((panel) => {
          const isActive = panel.dataset.budgetPanel === target;
          panel.classList.toggle("is-active", isActive);
          panel.hidden = !isActive;
        });
      });
    });
  }

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

async function loadCampaignContent() {
  try {
    const response = await fetch("data/campaign.json", { cache: "no-store" });
    if (!response.ok) return;
    const campaign = await response.json();

    if (campaign.page_title) document.title = campaign.page_title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && campaign.meta_description) {
      metaDescription.setAttribute("content", campaign.meta_description);
    }

    const campaignLabel = document.querySelector("[data-campaign-label]");
    if (campaignLabel && campaign.campaign_label) campaignLabel.textContent = campaign.campaign_label;

    const heading = document.querySelector("[data-campaign-h1]");
    if (heading && campaign.h1) heading.textContent = campaign.h1;

    const mainCopy = document.querySelector("[data-campaign-main-copy]");
    if (mainCopy && campaign.main_copy) mainCopy.textContent = campaign.main_copy;

    const subCopy = document.querySelector("[data-campaign-sub-copy]");
    if (subCopy && campaign.sub_copy) subCopy.textContent = campaign.sub_copy;

    document.querySelectorAll("[data-campaign-cta]").forEach((cta) => {
      if (campaign.cta_label) cta.textContent = campaign.cta_label;
    });
  } catch {
    // Static file previews without fetch support can keep the HTML defaults.
  }
}

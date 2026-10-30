const incoming = new URLSearchParams(window.location.search);
const campaignReady = fetch("data/campaign.json")
  .then((response) => {
    if (!response.ok) throw new Error(`Campaign configuration: ${response.status}`);
    return response.json();
  })
  .catch((error) => {
    console.warn("Campaign configuration could not be loaded", error);
    return {};
  });

window.dataLayer = window.dataLayer || [];

document.querySelectorAll("[data-track]").forEach((link) => {
  link.addEventListener("click", async () => {
    const campaign = await campaignReady;
    window.dataLayer.push({
      event: "popup_location_click",
      cta_id: link.dataset.track,
      utm_source: incoming.get("utm_source") || "lp",
      utm_medium: incoming.get("utm_medium") || "owned",
      utm_campaign: incoming.get("utm_campaign") || campaign.utm_campaign || window.location.pathname
    });
  });
});

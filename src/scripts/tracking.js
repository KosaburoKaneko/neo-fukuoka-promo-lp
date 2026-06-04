const DEFAULT_UTM = {
  utm_source: "lp",
  utm_medium: "owned",
  utm_campaign: "fathersday_2026"
};

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term"];

function currentUtmParams() {
  const searchParams = new URLSearchParams(window.location.search);
  return UTM_KEYS.reduce((params, key) => {
    const value = searchParams.get(key) || DEFAULT_UTM[key];
    if (value) params[key] = value;
    return params;
  }, {});
}

function decorateUrl(baseUrl, content) {
  const url = new URL(baseUrl);
  const inherited = currentUtmParams();

  Object.entries(inherited).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });
  url.searchParams.set("utm_content", content || "lp_cta");

  return url.toString();
}

function emitCtaEvent(anchor) {
  const eventName = anchor.dataset.event || `click_${anchor.dataset.utmContent || "lp_cta"}`;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    cta_content: anchor.dataset.utmContent || "lp_cta",
    destination_url: anchor.dataset.baseUrl || anchor.href
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[data-base-url]").forEach((anchor) => {
    anchor.href = decorateUrl(anchor.dataset.baseUrl, anchor.dataset.utmContent);
    anchor.addEventListener("click", () => emitCtaEvent(anchor));
  });
});

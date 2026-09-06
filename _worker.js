const NEW_ORIGIN = "https://sportarc.ai";
const PAGE_MAP = new Map([
  ["/", "/"], ["/en/", "/"],
  ...["zh-CN", "zh-TW", "de", "fr", "ja", "ko", "privacy", "terms", "membership_service_agreement", "auto_renewal_subscription_agreement"].map(path => [`/${path}/`, `/${path}/`]),
]);
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const stripped = url.pathname.replace(/\/index(?:\.html)?$/, "/");
    const destination = PAGE_MAP.get(stripped.endsWith("/") ? stripped : stripped + "/");
    if (destination) {
      const target = new URL(destination, NEW_ORIGIN);
      target.search = url.search;
      return new Response(null, { status: 301, headers: { Location: target.toString(), "Cache-Control": "public, max-age=3600" }});
    }
    // Preserve historical policies, verification files and static resources.
    return env.ASSETS.fetch(request);
  },
};

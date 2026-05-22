const SUPPORTED = ["en", "zh-CN", "zh-TW", "de", "fr", "ja", "ko"];

function normalizeLanguage(value) {
  if (!value) return null;
  const code = value.toLowerCase();
  if (code.startsWith("zh-hant") || code.startsWith("zh-tw") || code.startsWith("zh-hk") || code.startsWith("zh-mo")) return "zh-TW";
  if (code.startsWith("zh")) return "zh-CN";
  if (code.startsWith("ja")) return "ja";
  if (code.startsWith("ko")) return "ko";
  if (code.startsWith("de")) return "de";
  if (code.startsWith("fr")) return "fr";
  if (code.startsWith("en")) return "en";
  return null;
}

function fromAcceptLanguage(header) {
  if (!header) return null;
  return header
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .map(normalizeLanguage)
    .find(Boolean) || null;
}

function fromCountry(country) {
  const code = (country || "").toUpperCase();
  if (["CN", "SG"].includes(code)) return "zh-CN";
  if (["TW", "HK", "MO"].includes(code)) return "zh-TW";
  if (["JP"].includes(code)) return "ja";
  if (["KR"].includes(code)) return "ko";
  if (["DE", "AT", "CH"].includes(code)) return "de";
  if (["FR", "BE", "LU", "MC"].includes(code)) return "fr";
  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      const language = fromAcceptLanguage(request.headers.get("Accept-Language"))
        || fromCountry(request.cf && request.cf.country)
        || "en";
      const target = SUPPORTED.includes(language) ? language : "en";
      return new Response(null, {
        status: 302,
        headers: {
          Location: `${url.origin}/${target}/`,
          Vary: "Accept-Language",
        },
      });
    }

    return env.ASSETS.fetch(request);
  },
};

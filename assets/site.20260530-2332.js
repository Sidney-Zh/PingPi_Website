const SUPPORTED_LOCALES = ["en", "zh-CN", "zh-TW", "de", "fr", "ja", "ko"];
const SCREENSHOT_WIDTH = 828;
const SCREENSHOT_HEIGHT = 1792;
const RESPONSIVE_IMAGE_WIDTHS = [420, 640, 828];
const HERO_IMAGE_SIZES = "(max-width: 560px) 68vw, (max-width: 900px) 36vw, 390px";
const GALLERY_IMAGE_SIZES = "(max-width: 560px) 70vw, (max-width: 1200px) 28vw, 406px";

const LANGUAGE_OPTIONS = [
  ["en", "English"],
  ["zh-CN", "简体中文"],
  ["zh-TW", "繁體中文"],
  ["de", "Deutsch"],
  ["fr", "Français"],
  ["ja", "日本語"],
  ["ko", "한국어"],
];

const IMAGE_SETS = {
  en: ["starten.png", "aicoach1en.png", "aicoach2en.png", "matchreview1en.png", "matchreview2en.png", "autocuten.png"],
  "zh-CN": ["start.png", "aicoach1.png", "aicoach2.png", "matchreview1.png", "matchreview2.png", "autocut.png"],
  "zh-TW": ["startzh.png", "aicoach1zh.png", "aicoach2zh.png", "matchreview1zh.png", "matchreview2zh.png", "autocutzh.png"],
  de: ["startde.png", "aicoach1de.png", "aicoach2de.png", "matchreview1de.png", "matchreview2de.png", "autocutde.png"],
  fr: ["startfr.png", "aicoach1fr.png", "aicoach2fr.png", "matchreview1fr.png", "matchreview2fr.png", "autocutfr.png"],
  ja: ["startjp.png", "aicoach1jp.png", "aicoach2jp.png", "matchreview1jp.png", "matchreview2jp.png", "autocutjp.png"],
  ko: ["startko.png", "aicoach1ko.png", "aicoach2ko.png", "matchreview1ko.png", "matchreview2ko.png", "autocutko.png"],
};

const IMAGE_FOLDERS = {
  en: "en",
  "zh-CN": "zh",
  "zh-TW": "zh-hant",
  de: "de",
  fr: "fr",
  ja: "ja",
  ko: "ko",
};

const APP_STORE_BADGES = {
  en: "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/en-us?size=250x83",
  "zh-CN": "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/zh-cn?size=250x83",
  "zh-TW": "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/zh-tw?size=250x83",
  de: "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/de-de?size=250x83",
  fr: "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83",
  ja: "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83",
  ko: "https://toolbox.marketingtools.apple.com/api/badges/download-on-the-app-store/black/ko-kr?size=250x83",
};

const APP_STORE_URL = "https://apps.apple.com/us/app/pingpi-ai-table-tennis-coach/id6768219425";

const COPY = {
  en: {
    pageTitle: "PingPi - AI table tennis assistant",
    navCta: "App Store",
    heroEyebrow: "AI table tennis assistant",
    heroTitleA: "Review matches.",
    heroTitleB: "Improve faster.",
    heroLead: "PingPi turns one phone video into AI Coach feedback, Match Review data, and clean Auto Cut clips. Built for players who want useful answers after every session.",
    appStore: "Download on the App Store",
    statTitle: "One phone is enough",
    statText: "Record, review, export, and keep your table tennis progress in one place.",
    featuresKicker: "Three tools, one workflow",
    featuresTitle: "From raw video to clear next steps.",
    featuresCopy: "Use PingPi after training or a match. It keeps the flow simple: choose a video, run the analysis, then review the result in the app.",
    galleryKicker: "In the app",
    galleryTitle: "Six views that cover the whole loop.",
    galleryCopy: "Swipe through the key screens: recording, AI Coach, Match Review, and Auto Cut.",
    closingKicker: "Built for real practice",
    closingTitle: "No social feed. No busy dashboard.",
    closingCopy: "PingPi focuses on the parts that help a table tennis player: technique feedback, match data, and clips worth saving.",
    socialTitle: "Contact",
    contact: "Support: support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "Terms of Use",
    privacyLink: "Privacy Policy",
    policies: ["Terms", "Privacy", "Membership", "Auto-Renewal"],
    screenshots: ["Start", "AI Coach", "Motion data", "Match Review", "Match data", "Auto Cut"],
    features: [
      ["AI Coach", "Turn a training video into motion diagnosis. Compare technique, inspect 3D movement, and get feedback you can act on."],
      ["Match Review", "Read the match through placements, strokes, phases, and an AI report that points out strengths and weak spots."],
      ["Auto Cut", "Remove dead time and keep the rallies. Export one clean highlight video or selected clips from a match."]
    ]
  },
  "zh-CN": {
    pageTitle: "PingPi - AI 乒乓球助手",
    navCta: "App Store",
    heroEyebrow: "AI 乒乓球助手",
    heroTitleA: "复盘比赛。",
    heroTitleB: "更快进步。",
    heroLead: "PingPi 用一部手机完成 AI教练、比赛复盘和自动剪辑。训练后、比赛后，把视频交给它，留下真正有用的结果。",
    appStore: "在 App Store 下载",
    statTitle: "一部手机就够",
    statText: "录制、分析、导出、回看，把乒乓球训练进度放在同一个地方。",
    featuresKicker: "三个功能，一个流程",
    featuresTitle: "从原始视频，到清楚的下一步。",
    featuresCopy: "训练或比赛结束后，选择视频，运行分析，再回到结果页查看数据、建议和可导出的内容。",
    galleryKicker: "App 内界面",
    galleryTitle: "六张截图，看完整使用流程。",
    galleryCopy: "左右滑动浏览录制、AI教练、比赛复盘和自动剪辑等核心界面。",
    closingKicker: "为真实训练设计",
    closingTitle: "不是社交平台，也不是复杂后台。",
    closingCopy: "PingPi 只聚焦乒乓球用户真正需要的部分：动作反馈、比赛数据，以及值得保存的精彩片段。",
    socialTitle: "联系方式",
    contact: "支持邮箱：support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "用户协议",
    privacyLink: "隐私政策",
    policies: ["用户协议", "隐私政策", "会员服务", "自动续费"],
    screenshots: ["首页", "AI教练", "动作数据", "比赛复盘", "比赛数据", "自动剪辑"],
    features: [
      ["AI教练", "把训练视频变成动作诊断。对比技术动作，查看 3D 动作数据，得到能直接用于训练的反馈。"],
      ["比赛复盘", "从落点、技术动作、战术阶段和 AI 报告理解一场比赛，找出优势和短板。"],
      ["自动剪辑", "自动去掉无效时间，保留回合。可以导出完整高光，也可以只导出选中的片段。"]
    ]
  },
  "zh-TW": {
    pageTitle: "PingPi - AI 桌球助手",
    navCta: "App Store",
    heroEyebrow: "AI 桌球助手",
    heroTitleA: "復盤比賽。",
    heroTitleB: "更快進步。",
    heroLead: "PingPi 用一部手機完成 AI 教練、比賽復盤和自動剪輯。訓練後、比賽後，把影片交給它，留下真正有用的結果。",
    appStore: "在 App Store 下載",
    statTitle: "一部手機就夠",
    statText: "錄製、分析、匯出、回看，把桌球訓練進度放在同一個地方。",
    featuresKicker: "三個功能，一個流程",
    featuresTitle: "從原始影片，到清楚的下一步。",
    featuresCopy: "訓練或比賽結束後，選擇影片、執行分析，再回到結果頁查看數據、建議和可匯出的內容。",
    galleryKicker: "App 內介面",
    galleryTitle: "六張截圖，看完整使用流程。",
    galleryCopy: "左右滑動瀏覽錄製、AI 教練、比賽復盤和自動剪輯等核心介面。",
    closingKicker: "為真實訓練設計",
    closingTitle: "不是社群平台，也不是複雜後台。",
    closingCopy: "PingPi 只聚焦桌球使用者真正需要的部分：動作回饋、比賽數據，以及值得保存的精彩片段。",
    socialTitle: "聯絡方式",
    contact: "支援信箱：support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "使用者協議",
    privacyLink: "隱私政策",
    policies: ["使用者協議", "隱私政策", "會員服務", "自動續費"],
    screenshots: ["首頁", "AI 教練", "動作數據", "比賽復盤", "比賽數據", "自動剪輯"],
    features: [
      ["AI 教練", "把訓練影片變成動作診斷。對比技術動作，查看 3D 動作數據，得到能直接用於訓練的回饋。"],
      ["比賽復盤", "從落點、技術動作、戰術階段和 AI 報告理解一場比賽，找出優勢與短板。"],
      ["自動剪輯", "自動去掉無效時間，保留回合。可以匯出完整高光，也可以只匯出選中的片段。"]
    ]
  },
  de: {
    pageTitle: "PingPi - KI-Assistent für Tischtennis",
    navCta: "App Store",
    heroEyebrow: "KI-Assistent für Tischtennis",
    heroTitleA: "Spiele auswerten.",
    heroTitleB: "Gezielter trainieren.",
    heroLead: "PingPi macht aus einem Handyvideo AI-Coach-Feedback, Matchanalyse und Auto-Schnitt-Clips. Für Spielerinnen und Spieler, die nach dem Training konkrete Hinweise wollen.",
    appStore: "Im App Store laden",
    statTitle: "Ein Smartphone reicht",
    statText: "Aufnehmen, analysieren, exportieren und deine Fortschritte an einem Ort verfolgen.",
    featuresKicker: "Drei Werkzeuge, ein Ablauf",
    featuresTitle: "Vom Rohvideo zum nächsten Trainingsschritt.",
    featuresCopy: "Nach dem Training oder Match wählst du ein Video, startest die Analyse und prüfst anschließend die Ergebnisse in der App.",
    galleryKicker: "In der App",
    galleryTitle: "Sechs Ansichten für den ganzen Ablauf.",
    galleryCopy: "Wische durch die wichtigsten Ansichten: Aufnahme, AI-Coach, Matchanalyse und Auto-Schnitt.",
    closingKicker: "Für echtes Training",
    closingTitle: "Kein Social Feed. Kein überladenes Dashboard.",
    closingCopy: "PingPi konzentriert sich auf das, was Tischtennisspieler brauchen: Technikfeedback, Matchdaten und Clips, die man behalten möchte.",
    socialTitle: "Kontakt",
    contact: "Support: support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "Nutzungsbedingungen",
    privacyLink: "Datenschutz",
    policies: ["Nutzungsbedingungen", "Datenschutz", "Mitgliedschaft", "Auto-Verlängerung"],
    screenshots: ["Start", "AI-Coach", "Bewegungsdaten", "Matchanalyse", "Matchdaten", "Auto-Schnitt"],
    features: [
      ["AI-Coach", "Wandle ein Trainingsvideo in eine Bewegungsdiagnose um. Vergleiche Technik, prüfe 3D-Bewegungen und erhalte Feedback für die nächste Einheit."],
      ["Matchanalyse", "Analysiere Platzierungen, Schläge, Phasen und einen KI-Bericht, der Stärken und Schwachstellen klar benennt."],
      ["Auto-Schnitt", "Entfernt Leerlauf und behält die Ballwechsel. Exportiere ein Highlight-Video oder einzelne ausgewählte Clips."]
    ]
  },
  fr: {
    pageTitle: "PingPi - Assistant IA de tennis de table",
    navCta: "App Store",
    heroEyebrow: "Assistant IA de tennis de table",
    heroTitleA: "Analysez vos matchs.",
    heroTitleB: "Progressez plus vite.",
    heroLead: "PingPi transforme une vidéo filmée au téléphone en retour Coach IA, en Analyse de match et en clips de Montage auto. Utile après l’entraînement comme après la compétition.",
    appStore: "Télécharger sur l’App Store",
    statTitle: "Un téléphone suffit",
    statText: "Filmez, analysez, exportez et suivez vos progrès au même endroit.",
    featuresKicker: "Trois outils, un seul flux",
    featuresTitle: "De la vidéo brute à une vraie piste de travail.",
    featuresCopy: "Après une séance ou un match, choisissez une vidéo, lancez l’analyse, puis consultez les résultats directement dans l’app.",
    galleryKicker: "Dans l’app",
    galleryTitle: "Six écrans pour comprendre le parcours.",
    galleryCopy: "Faites défiler les écrans clés : enregistrement, Coach IA, Analyse de match et Montage auto.",
    closingKicker: "Pensé pour l’entraînement",
    closingTitle: "Pas de réseau social. Pas de tableau de bord inutile.",
    closingCopy: "PingPi se concentre sur l’essentiel pour les joueurs de tennis de table : retour technique, données de match et clips à conserver.",
    socialTitle: "Contact",
    contact: "Support : support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "Conditions d’utilisation",
    privacyLink: "Politique de confidentialité",
    policies: ["Conditions", "Confidentialité", "Abonnement", "Renouvellement"],
    screenshots: ["Accueil", "Coach IA", "Données gestuelles", "Analyse de match", "Données de match", "Montage auto"],
    features: [
      ["Coach IA", "Transformez une vidéo d’entraînement en diagnostic gestuel. Comparez votre technique, inspectez le mouvement en 3D et repartez avec des conseils concrets."],
      ["Analyse de match", "Comprenez le match à partir des placements, des gestes, des phases tactiques et d’un rapport IA qui montre vos forces et vos points faibles."],
      ["Montage auto", "Supprimez les temps morts et gardez les échanges. Exportez une vidéo de highlights ou seulement les clips que vous choisissez."]
    ]
  },
  ja: {
    pageTitle: "PingPi - 卓球向けAIアシスタント",
    navCta: "App Store",
    heroEyebrow: "卓球向けAIアシスタント",
    heroTitleA: "試合を振り返る。",
    heroTitleB: "練習を前に進める。",
    heroLead: "PingPi はスマートフォンの動画から、AIコーチのフィードバック、試合レビュー、自動編集クリップを作ります。練習後にも試合後にも使える卓球アプリです。",
    appStore: "App Storeでダウンロード",
    statTitle: "スマートフォン1台で完結",
    statText: "撮影、分析、書き出し、振り返りまで、卓球の記録をひとつの場所にまとめます。",
    featuresKicker: "3つの機能、1つの流れ",
    featuresTitle: "動画から、次の練習ポイントへ。",
    featuresCopy: "練習や試合のあとに動画を選び、分析を実行し、アプリ内で結果を確認します。",
    galleryKicker: "アプリ画面",
    galleryTitle: "6つの画面で流れを確認。",
    galleryCopy: "録画、AIコーチ、試合レビュー、自動編集まで、主要画面を横にスワイプして確認できます。",
    closingKicker: "実際の練習のために",
    closingTitle: "SNSでも、複雑な管理画面でもありません。",
    closingCopy: "PingPi が見るのは、卓球プレーヤーに必要なものだけ。技術フィードバック、試合データ、保存したいクリップです。",
    socialTitle: "お問い合わせ",
    contact: "サポート：support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "利用規約",
    privacyLink: "プライバシーポリシー",
    policies: ["利用規約", "プライバシー", "メンバーシップ", "自動更新"],
    screenshots: ["ホーム", "AIコーチ", "動作データ", "試合レビュー", "試合データ", "自動編集"],
    features: [
      ["AIコーチ", "練習動画をフォーム診断に変えます。技術を比較し、3Dの動作データを見ながら、次の練習に使えるフィードバックを確認できます。"],
      ["試合レビュー", "落点、技術、戦術フェーズ、AIレポートから試合を振り返り、強みと課題を見つけます。"],
      ["自動編集", "待ち時間を削り、ラリーを残します。ハイライト動画も、選んだクリップだけの書き出しもできます。"]
    ]
  },
  ko: {
    pageTitle: "PingPi - 탁구 AI 어시스턴트",
    navCta: "App Store",
    heroEyebrow: "탁구 AI 어시스턴트",
    heroTitleA: "경기를 리뷰하고.",
    heroTitleB: "더 빠르게 발전하세요.",
    heroLead: "PingPi는 휴대폰 영상 하나로 AI 코치 피드백, 경기 리뷰, 자동 편집 클립을 만들어 줍니다. 훈련 후에도, 경기 후에도 바로 확인할 수 있습니다.",
    appStore: "App Store에서 다운로드",
    statTitle: "휴대폰 하나면 충분합니다",
    statText: "촬영, 분석, 내보내기, 다시 보기까지 탁구 기록을 한곳에서 관리합니다.",
    featuresKicker: "세 가지 기능, 하나의 흐름",
    featuresTitle: "원본 영상에서 다음 훈련 포인트까지.",
    featuresCopy: "훈련이나 경기 후 영상을 선택하고 분석을 실행한 뒤, 앱에서 결과를 확인하세요.",
    galleryKicker: "앱 화면",
    galleryTitle: "여섯 개 화면으로 전체 흐름을 확인하세요.",
    galleryCopy: "녹화, AI 코치, 경기 리뷰, 자동 편집까지 주요 화면을 좌우로 넘겨 보세요.",
    closingKicker: "실제 훈련을 위해",
    closingTitle: "소셜 피드도, 복잡한 대시보드도 아닙니다.",
    closingCopy: "PingPi는 탁구 선수에게 필요한 것에 집중합니다. 기술 피드백, 경기 데이터, 저장할 만한 클립입니다.",
    socialTitle: "문의",
    contact: "지원: support@pingpi.top",
    copyright: "© 2026 PingPi",
    termsLink: "이용약관",
    privacyLink: "개인정보처리방침",
    policies: ["이용약관", "개인정보", "멤버십", "자동 갱신"],
    screenshots: ["홈", "AI 코치", "동작 데이터", "경기 리뷰", "경기 데이터", "자동 편집"],
    features: [
      ["AI 코치", "훈련 영상을 동작 진단으로 바꿉니다. 기술을 비교하고 3D 움직임을 확인한 뒤, 다음 훈련에 바로 쓸 수 있는 피드백을 받습니다."],
      ["경기 리뷰", "낙구 위치, 기술, 전술 단계, AI 리포트를 통해 경기의 강점과 약점을 확인합니다."],
      ["자동 편집", "불필요한 시간을 덜어내고 랠리를 남깁니다. 하이라이트 영상이나 선택한 클립만 내보낼 수 있습니다."]
    ]
  }
};

function normalizeLocale(value) {
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

function detectLocale() {
  const bodyLocale = document.body.dataset.locale;
  if (bodyLocale && bodyLocale !== "auto") return bodyLocale;

  const queryLocale = normalizeLocale(new URLSearchParams(window.location.search).get("lang"));
  if (queryLocale) return queryLocale;

  const savedLocale = normalizeLocale(localStorage.getItem("pingpi.site.language"));
  if (savedLocale) return savedLocale;

  for (const lang of navigator.languages || [navigator.language]) {
    const matched = normalizeLocale(lang);
    if (matched) return matched;
  }

  return "en";
}

function imagePath(locale, index, format = "png") {
  const folder = IMAGE_FOLDERS[locale] || IMAGE_FOLDERS.en;
  const file = (IMAGE_SETS[locale] || IMAGE_SETS.en)[index];
  const resolvedFile = format === "webp" ? file.replace(/\.png$/, ".webp") : file;
  return `/pictures/${folder}/${resolvedFile}`;
}

function responsiveImagePath(locale, index, width) {
  const folder = IMAGE_FOLDERS[locale] || IMAGE_FOLDERS.en;
  const file = (IMAGE_SETS[locale] || IMAGE_SETS.en)[index];
  const suffix = width === SCREENSHOT_WIDTH ? ".webp" : `-${width}.webp`;
  return `/pictures/${folder}/${file.replace(/\.png$/, suffix)}`;
}

function responsiveImageSrcset(locale, index) {
  return RESPONSIVE_IMAGE_WIDTHS.map((width) => `${responsiveImagePath(locale, index, width)} ${width}w`).join(", ");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setResponsiveScreenshot(img, locale, index, alt, priority = "auto", sizes = HERO_IMAGE_SIZES) {
  const source = img.closest("picture")?.querySelector('source[type="image/webp"]');
  if (source) {
    source.srcset = responsiveImageSrcset(locale, index);
    source.sizes = sizes;
  }
  img.src = imagePath(locale, index);
  img.alt = alt || "";
  img.width = SCREENSHOT_WIDTH;
  img.height = SCREENSHOT_HEIGHT;
  img.decoding = "async";
  img.sizes = sizes;
  if (priority !== "auto") {
    img.fetchPriority = priority;
  }
}

function renderLanguageSelect(locale) {
  const select = document.querySelector("[data-language-select]");
  if (!select) return;
  select.innerHTML = "";
  for (const [code, label] of LANGUAGE_OPTIONS) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = label;
    option.selected = code === locale;
    select.appendChild(option);
  }
  select.addEventListener("change", () => {
    const nextLocale = select.value;
    localStorage.setItem("pingpi.site.language", nextLocale);
    window.location.href = `/${nextLocale}/`;
  });
}

function renderFeatures(copy) {
  const grid = document.querySelector("[data-feature-grid]");
  if (!grid) return;
  grid.innerHTML = "";
  copy.features.forEach(([title, body], index) => {
    const card = document.createElement("article");
    card.className = "feature-card reveal";
    card.style.setProperty("--accent", ["var(--blue)", "var(--green)", "var(--gold)"][index]);
    card.style.animationDelay = `${index * 90}ms`;
    card.innerHTML = `
      <span class="feature-number">${index + 1}</span>
      <h3>${title}</h3>
      <p>${body}</p>
    `;
    grid.appendChild(card);
  });
}

function renderGallery(locale, copy) {
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;
  gallery.innerHTML = "";
  copy.screenshots.forEach((label, index) => {
    const figure = document.createElement("figure");
    figure.className = "gallery-card";
    figure.innerHTML = `
      <picture>
        <source type="image/webp" srcset="${responsiveImageSrcset(locale, index)}" sizes="${GALLERY_IMAGE_SIZES}">
        <img src="${imagePath(locale, index)}" alt="${label}" loading="lazy" decoding="async" width="${SCREENSHOT_WIDTH}" height="${SCREENSHOT_HEIGHT}" sizes="${GALLERY_IMAGE_SIZES}">
      </picture>
      <figcaption>${label}</figcaption>
    `;
    gallery.appendChild(figure);
  });
  setupGalleryDots(gallery, copy.screenshots);
  setupGalleryHint(gallery);
}

function setupGalleryDots(gallery, labels) {
  const existingDots = gallery.nextElementSibling?.classList.contains("gallery-dots") ? gallery.nextElementSibling : null;
  if (existingDots) existingDots.remove();

  const dots = document.createElement("div");
  dots.className = "gallery-dots";

  labels.forEach((label, index) => {
    const dot = document.createElement("button");
    dot.className = `gallery-dot${index === 0 ? " is-active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", label);
    if (index === 0) dot.setAttribute("aria-current", "true");
    dot.title = label;
    dot.addEventListener("click", () => {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      const inline = window.matchMedia("(max-width: 560px)").matches ? "center" : "start";
      gallery.children[index]?.scrollIntoView({ behavior, block: "nearest", inline });
    });
    dots.appendChild(dot);
  });

  gallery.insertAdjacentElement("afterend", dots);

  const setActive = (index) => {
    gallery.classList.toggle("is-at-end", index === labels.length - 1);
    dots.querySelectorAll(".gallery-dot").forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
      if (dotIndex === index) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(Number(visible.target.dataset.galleryIndex || 0));
      },
      { root: gallery, threshold: [0.55, 0.75] }
    );

    Array.from(gallery.children).forEach((card, index) => {
      card.dataset.galleryIndex = index;
      observer.observe(card);
    });
  }
}

function setupGalleryHint(gallery) {
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      gallery.classList.add("is-hinting");
      window.setTimeout(() => gallery.classList.remove("is-hinting"), 1200);
      observer.disconnect();
    },
    { threshold: 0.38 }
  );
  observer.observe(gallery);
}

function setupAppStoreLinks() {
  document.querySelectorAll("[data-app-store-button]").forEach((button) => {
    button.href = APP_STORE_URL;
    button.removeAttribute("target");
    button.removeAttribute("rel");
  });
}

function render(locale) {
  const copy = COPY[locale] || COPY.en;
  document.documentElement.lang = locale;
  document.title = copy.pageTitle;

  setText("[data-nav-cta]", copy.navCta);
  setText("[data-hero-eyebrow]", copy.heroEyebrow);
  setText("[data-hero-title-a]", copy.heroTitleA);
  setText("[data-hero-title-b]", copy.heroTitleB);
  setText("[data-hero-lead]", copy.heroLead);
  setText("[data-stat-title]", copy.statTitle);
  setText("[data-stat-text]", copy.statText);
  setText("[data-features-kicker]", copy.featuresKicker);
  setText("[data-features-title]", copy.featuresTitle);
  setText("[data-features-copy]", copy.featuresCopy);
  setText("[data-gallery-kicker]", copy.galleryKicker);
  setText("[data-gallery-title]", copy.galleryTitle);
  setText("[data-gallery-copy]", copy.galleryCopy);
  setText("[data-closing-kicker]", copy.closingKicker);
  setText("[data-closing-title]", copy.closingTitle);
  setText("[data-closing-copy]", copy.closingCopy);
  setText("[data-social-title]", copy.socialTitle);
  setText("[data-contact]", copy.contact);
  setText("[data-copyright]", copy.copyright);
  setText("[data-terms-link]", copy.termsLink);
  setText("[data-privacy-link]", copy.privacyLink);

  const heroImages = document.querySelectorAll("[data-hero-image]");
  if (heroImages[0]) setResponsiveScreenshot(heroImages[0], locale, 0, copy.screenshots[0], "high", HERO_IMAGE_SIZES);
  if (heroImages[1]) setResponsiveScreenshot(heroImages[1], locale, 3, copy.screenshots[3], "high", HERO_IMAGE_SIZES);

  const badge = document.querySelector("[data-app-store-badge]");
  if (badge) {
    badge.src = APP_STORE_BADGES[locale] || APP_STORE_BADGES.en;
    badge.alt = copy.appStore;
  }

  renderLanguageSelect(locale);
  renderFeatures(copy);
  renderGallery(locale, copy);

  if (document.body.dataset.locale === "auto" && window.location.protocol.startsWith("http")) {
    const target = `/${locale}/`;
    if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
      window.history.replaceState({}, "", target);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const locale = detectLocale();
  setupAppStoreLinks();
  render(locale);
});

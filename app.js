/* ===== CONFIG ===== */
// HTTPS address of your signing server (see server/server.js). Empty = demo mode:
// certificates are verified in the browser only, and installs use the static manifests.
const API_BASE = "";

/* One object per app. `id` must match the server's apps.json and ipas/<id>.ipa */
const APPS = [
  { id: "sample", name: "Sample App", version: "1.0.0", icon: "icons/sample.png", manifest: "manifests/sample.plist",
    desc: { ckb: "وەسفێکی کورت بۆ بەرنامەکە.", ar: "وصف مختصر للتطبيق.", en: "Short description of the app." } }
];

/* ===== TRANSLATIONS (Sorani Kurdish = main) ===== */
const I18N = {
  ckb: { apps:"بەرنامەکان", settings:"ڕێکخستن", subtitle:"بەرنامەکان بە یەک تاپ دابمەزرێنە", search:"گەڕان بەدوای بەرنامە…",
    install:"دامەزراندن", version:"وەشان", empty:"هیچ بەرنامەیەک نەدۆزرایەوە", notice:"دامەزراندن تەنها لە Safari ی ئایفۆن یان ئایپاد کار دەکات.",
    language:"زمان", appearance:"ڕووکار", dark:"تاریک", light:"ڕووناک", community:"پەیوەندی", channel:"کەناڵی تلیگرام", channelSub:"نوێکاری و بەرنامەی نوێ",
    contact:"نامە بنێرە", contactSub:"پەیوەندی بە گەشەپێدەر بکە", footer:"ئیمزاکراوە بە بەڵگەنامەی خۆی گەشەپێدەر",
    certTitle:"بڵگەنامەی ئیمزاکردن", p12:"فایلی .p12", prov:"فایلی .mobileprovision", password:"وشەی نهێنی p12", choose:"هەڵبژێرە",
    verify:"پشکنین و پاشەکەوتکردن", verifying:"خەریکی پشکنینە…", remove:"سڕینەوە",
    certHint:"پشکنین لەناو وێبگەڕەکەتدا دەکرێت. بۆ ئیمزاکردنی بەرنامەکان فایلەکان بە شێوەی کاتی بۆ سێرڤەر دەنێردرێن و دوای ماوەیەک دەسڕدرێنەوە. وشەی نهێنی لە وێبگەڕدا پاشەکەوت ناکرێت.",
    ok:"بڵگەنامە دروستە ✓", team:"تیم", profile:"پڕۆفایل", certExp:"بڵگەنامە بەسەردەچێت", profExp:"پڕۆفایل بەسەردەچێت", devices:"ئامێرەکان", allDevices:"هەموو ئامێرەکان",
    signedWith:"ئیمزاکراو بە", signing:"ئیمزادەکرێت…", signFail:"ئیمزاکردن سەرکەوتوو نەبوو", noServer:"سێرڤەری ئیمزاکردن ڕێک نەخراوە",
    missing:"هەردوو فایلەکە هەڵبژێرە", badPass:"وشەی نهێنی p12 هەڵەیە", badP12:"فایلی p12 دروست نییە", noCert:"p12 بڵگەنامە و کلیلی تایبەتی تێدا نییە",
    certExpired:"بڵگەنامەکە بەسەرچووە", badProfile:"فایلی mobileprovision دروست نییە", profExpired:"پڕۆفایلەکە بەسەرچووە",
    mismatch:"ئەم پڕۆفایلە بۆ ئەم بڵگەنامەیە نییە", server:"سێرڤەر وەڵامی نەدایەوە", lib:"پشکنەر بار نەبوو، ئینتەرنێتەکەت بپشکنە" },
  ar: { apps:"التطبيقات", settings:"الإعدادات", subtitle:"ثبّت التطبيقات بنقرة واحدة", search:"ابحث عن تطبيق…",
    install:"تثبيت", version:"الإصدار", empty:"لا توجد تطبيقات مطابقة", notice:"التثبيت يعمل فقط في Safari على iPhone أو iPad.",
    language:"اللغة", appearance:"المظهر", dark:"داكن", light:"فاتح", community:"التواصل", channel:"قناة تيليجرام", channelSub:"التحديثات والتطبيقات الجديدة",
    contact:"أرسل رسالة", contactSub:"تواصل مع المطوّر", footer:"موقّع بشهادة المطوّر الخاصة",
    certTitle:"شهادة التوقيع", p12:"ملف .p12", prov:"ملف .mobileprovision", password:"كلمة مرور p12", choose:"اختر",
    verify:"تحقق واحفظ", verifying:"جارٍ التحقق…", remove:"إزالة",
    certHint:"يتم التحقق داخل متصفحك. لتوقيع التطبيقات تُرسل الملفات مؤقتًا إلى الخادم وتُحذف بعد فترة. لا تُحفظ كلمة المرور في المتصفح.",
    ok:"الشهادة صالحة ✓", team:"الفريق", profile:"الملف", certExp:"انتهاء الشهادة", profExp:"انتهاء الملف", devices:"الأجهزة", allDevices:"كل الأجهزة",
    signedWith:"موقّع بـ", signing:"جارٍ التوقيع…", signFail:"فشل التوقيع", noServer:"خادم التوقيع غير مُعدّ",
    missing:"اختر الملفين", badPass:"كلمة مرور p12 غير صحيحة", badP12:"ملف p12 غير صالح", noCert:"لا يحتوي p12 على شهادة ومفتاح خاص",
    certExpired:"الشهادة منتهية الصلاحية", badProfile:"ملف mobileprovision غير صالح", profExpired:"الملف منتهي الصلاحية",
    mismatch:"هذا الملف لا يتضمن هذه الشهادة", server:"تعذر الاتصال بالخادم", lib:"تعذر تحميل أداة التحقق، تحقق من الاتصال" },
  en: { apps:"Apps", settings:"Settings", subtitle:"Install apps with one tap", search:"Search apps…",
    install:"Install", version:"Version", empty:"No apps found", notice:"Installing only works in Safari on iPhone or iPad.",
    language:"Language", appearance:"Appearance", dark:"Dark", light:"Light", community:"Contact", channel:"Telegram channel", channelSub:"Updates and new apps",
    contact:"Send a message", contactSub:"Contact the developer", footer:"Signed with the developer’s own certificate",
    certTitle:"Signing certificate", p12:".p12 file", prov:".mobileprovision file", password:".p12 password", choose:"Choose",
    verify:"Verify & save", verifying:"Verifying…", remove:"Remove",
    certHint:"Verification runs in your browser. To sign apps, the files are sent to the server temporarily and deleted after a while. The password is never stored in the browser.",
    ok:"Certificate is valid ✓", team:"Team", profile:"Profile", certExp:"Certificate expires", profExp:"Profile expires", devices:"Devices", allDevices:"All devices",
    signedWith:"Signed with", signing:"Signing…", signFail:"Signing failed", noServer:"Signing server isn’t configured",
    missing:"Choose both files", badPass:"Wrong .p12 password", badP12:"Invalid .p12 file", noCert:"The .p12 has no certificate and private key pair",
    certExpired:"Certificate has expired", badProfile:"Invalid .mobileprovision file", profExpired:"Profile has expired",
    mismatch:"This profile doesn’t include this certificate", server:"Couldn’t reach the signing server", lib:"Couldn’t load the verifier — check your connection" }
};

/* ===== HELPERS ===== */
const root = document.documentElement, $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = { get(k, d){ try { return localStorage.getItem(k) || d; } catch(e){ return d; } }, set(k, v){ try { localStorage.setItem(k, v); } catch(e){} } };
let lang = store.get("mz-lang", "ckb"); if (!I18N[lang]) lang = "ckb";
const t = k => I18N[lang][k] || k;
const fail = code => Object.assign(new Error(code), { code });
const binStr = u8 => { let s = ""; for (const b of u8) s += String.fromCharCode(b); return s; };
let tt; const toast = m => { const el = $("#toast"); el.textContent = m; el.hidden = false; clearTimeout(tt); tt = setTimeout(() => el.hidden = true, 3500); };

/* ===== CERTIFICATE SESSION (sessionStorage: cleared when the tab closes) =====
   Only metadata + a server token are kept. The .p12 file and password are NEVER stored here. */
const CK = "mz-cert";
const readCert = () => { try { return JSON.parse(sessionStorage.getItem(CK)); } catch(e){ return null; } };
const setCert = c => { try { sessionStorage.setItem(CK, JSON.stringify(c)); } catch(e){} };
function clearCert() {
  const c = readCert(); try { sessionStorage.removeItem(CK); } catch(e){}
  if (c && c.token && API_BASE) fetch(`${API_BASE}/api/session/${c.token}`, { method: "DELETE", keepalive: true }).catch(() => {});
}
function getCert() {
  const c = readCert(); if (!c) return null;
  if (Math.min(c.meta.certExp, c.meta.profExp, c.token ? c.expiresAt : Infinity) < Date.now()) { clearCert(); return null; }
  return c;
}

/* ===== VERIFICATION (runs fully in the browser with node-forge) ===== */
function plist(n) {                       // minimal Apple plist → JS
  switch (n.tagName) {
    case "dict": { const o = {}, k = [...n.children]; for (let i = 0; i < k.length; i += 2) o[k[i].textContent] = plist(k[i + 1]); return o; }
    case "array": return [...n.children].map(plist);
    case "date": return new Date(n.textContent);
    case "data": return n.textContent.replace(/\s+/g, "");
    case "integer": return +n.textContent;
    case "true": return true; case "false": return false;
    default: return n.textContent;
  }
}
function parseProfile(buf) {              // .mobileprovision = CMS blob wrapping an XML plist
  const s = new TextDecoder("utf-8").decode(buf), a = s.indexOf("<?xml"), b = s.indexOf("</plist>");
  if (a < 0 || b < 0) throw fail("badProfile");
  const x = new DOMParser().parseFromString(s.slice(a, b + 8), "application/xml");
  if (x.querySelector("parsererror")) throw fail("badProfile");
  return plist(x.documentElement.firstElementChild);
}
async function verifyLocal(p12File, profFile, pass) {
  if (typeof forge === "undefined") throw fail("lib");
  const oid = forge.pki.oids;
  let p12;
  try { p12 = forge.pkcs12.pkcs12FromAsn1(forge.asn1.fromDer(binStr(new Uint8Array(await p12File.arrayBuffer()))), pass); }
  catch (e) { throw fail(/mac|password/i.test(e.message) ? "badPass" : "badP12"); }
  const bags = type => p12.getBags({ bagType: type })[type] || [];
  const key = [...bags(oid.pkcs8ShroudedKeyBag), ...bags(oid.keyBag)].map(b => b.key).find(Boolean);
  const cert = bags(oid.certBag).map(b => b.cert).find(c => c && key && c.publicKey.n && c.publicKey.n.compareTo(key.n) === 0);
  if (!cert) throw fail("noCert");
  if (cert.validity.notAfter < new Date()) throw fail("certExpired");

  const prof = parseProfile(new Uint8Array(await profFile.arrayBuffer()));
  if (!(prof.ExpirationDate instanceof Date) || prof.ExpirationDate < new Date()) throw fail("profExpired");
  const der = btoa(forge.asn1.toDer(forge.pki.certificateToAsn1(cert)).getBytes());
  if (!(prof.DeveloperCertificates || []).includes(der)) throw fail("mismatch");   // profile must contain THIS certificate

  const cn = cert.subject.getField("CN");
  return { cn: cn ? cn.value : "—", team: prof.TeamName || "—", profile: prof.Name || "—",
    certExp: cert.validity.notAfter.getTime(), profExp: prof.ExpirationDate.getTime(),
    devices: prof.ProvisionedDevices ? prof.ProvisionedDevices.length : null };   // null = enterprise / all devices
}
async function registerSession(p12File, profFile, pass) {      // upload once → short-lived token
  if (!API_BASE) return null;
  const fd = new FormData(); fd.append("p12", p12File); fd.append("profile", profFile); fd.append("password", pass);
  try { const r = await fetch(API_BASE + "/api/session", { method: "POST", body: fd }); if (!r.ok) throw 0; return await r.json(); }
  catch (e) { throw fail("server"); }                          // → { token, expiresAt }
}

/* ===== OTA LINK: static manifest, or per-user dynamic manifest when a certificate is active ===== */
function otaLink(app) {
  const c = getCert();
  const manifest = c && c.token
    ? `${API_BASE}/api/manifest/${encodeURIComponent(app.id)}.plist?s=${encodeURIComponent(c.token)}`
    : new URL(app.manifest, location.href).href;
  return "itms-services://?action=download-manifest&url=" + encodeURIComponent(manifest);
}
async function requestSigning(app, token) {                    // server re-signs the IPA (cached per session)
  try {
    const r = await fetch(API_BASE + "/api/sign", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ app: app.id, token }), signal: AbortSignal.timeout(180000) });
    if (!r.ok) throw 0;
  } catch (e) { throw fail("signFail"); }
}
async function onInstall(ev, app, btn) {
  const c = getCert(); if (!c) return;                          // no certificate → normal link works
  ev.preventDefault();
  if (!c.token) return toast(t("noServer"));                    // demo mode
  btn.textContent = t("signing"); btn.setAttribute("aria-busy", "true");
  try { await requestSigning(app, c.token); location.href = otaLink(app); }
  catch (e) { toast(t(e.code || "signFail")); }
  btn.textContent = t("install"); btn.removeAttribute("aria-busy");
}

/* ===== RENDER ===== */
function renderApps() {
  const q = $("#q").value.trim().toLowerCase(), list = $("#list"); list.replaceChildren();
  const shown = APPS.filter(a => a.name.toLowerCase().includes(q));
  if (!shown.length) { const li = document.createElement("li"); li.className = "empty"; li.textContent = t("empty"); return list.append(li); }
  for (const a of shown) {
    const li = document.createElement("li"); li.className = "row";
    const ic = document.createElement("div"); ic.className = "icon"; ic.style.backgroundImage = `url("${a.icon}")`;
    const info = document.createElement("div"); info.className = "info";
    [["name", a.name], ["desc", a.desc[lang] || a.desc.en], ["meta", t("version") + " " + a.version]].forEach(([c, x]) => {
      const d = document.createElement("div"); d.className = c; d.textContent = x; info.append(d); });
    const b = document.createElement("a"); b.className = "install"; b.href = otaLink(a); b.textContent = t("install");
    b.setAttribute("aria-label", t("install") + " " + a.name); b.onclick = ev => onInstall(ev, a, b);
    li.append(ic, info, b); list.append(li);
  }
}
function showErr(code) { const s = $("#cert-status"); s.replaceChildren(); s.className = "status err"; s.textContent = t(code); }
function renderCert() {
  const box = $("#cert-status"), c = getCert(), badge = $("#badge");
  box.replaceChildren(); box.className = "status"; badge.hidden = !c;
  if (!c) return;
  badge.textContent = `${t("signedWith")}: ${c.meta.cn}`;
  box.classList.add("ok");
  const h = document.createElement("div"); h.className = "ok-title"; h.textContent = t("ok"); box.append(h);
  const d = ms => new Date(ms).toLocaleDateString("en-GB"), m = c.meta;
  [["team", m.team], ["profile", m.profile], ["certExp", d(m.certExp)], ["profExp", d(m.profExp)], ["devices", m.devices == null ? t("allDevices") : m.devices]]
    .forEach(([k, v]) => { const r = document.createElement("div"); r.className = "kv";
      const a = document.createElement("span"), b = document.createElement("span"); a.textContent = t(k); b.textContent = v; r.append(a, b); box.append(r); });
  const rm = document.createElement("button"); rm.className = "ghost"; rm.textContent = t("remove");
  rm.onclick = () => { clearCert(); renderCert(); renderApps(); }; box.append(rm);
}
function applyLang() {
  root.lang = lang; root.dir = lang === "en" ? "ltr" : "rtl";
  $$("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
  $$("[data-i18n-ph]").forEach(e => e.placeholder = t(e.dataset.i18nPh));
  $$("#seg-lang button").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  renderApps(); renderCert();
}
function applyTheme(th) {
  root.dataset.theme = th; store.set("mz-theme", th);
  $('meta[name="theme-color"]').content = th === "light" ? "#f2f3f7" : "#0a0c10";
  $$("#seg-theme button").forEach(b => b.setAttribute("aria-pressed", b.dataset.theme === th));
}

/* ===== EVENTS ===== */
$("#seg-lang").onclick = e => { const b = e.target.closest("button"); if (b) { lang = b.dataset.lang; store.set("mz-lang", lang); applyLang(); } };
$("#seg-theme").onclick = e => { const b = e.target.closest("button"); if (b) applyTheme(b.dataset.theme); };
$("#q").oninput = renderApps;
$$(".tab").forEach(b => b.onclick = () => {
  $$(".tab").forEach(x => x.setAttribute("aria-selected", x === b));
  $("#tab-apps").hidden = b.dataset.tab !== "apps"; $("#tab-settings").hidden = b.dataset.tab !== "settings"; scrollTo(0, 0);
});
[["#p12", "#p12-name"], ["#prov", "#prov-name"]].forEach(([i, n]) => $(i).onchange = () => $(n).textContent = $(i).files[0]?.name || "—");

$("#verify").onclick = async () => {
  const f = $("#p12").files[0], p = $("#prov").files[0], pw = $("#pass").value, btn = $("#verify");
  if (!f || !p) return showErr("missing");
  btn.disabled = true; btn.textContent = t("verifying");
  try {
    const meta = await verifyLocal(f, p, pw);
    const s = await registerSession(f, p, pw);
    setCert({ meta, token: s ? s.token : null, expiresAt: s ? s.expiresAt : 0 });
    $("#pass").value = ""; $("#p12").value = ""; $("#prov").value = ""; $("#p12-name").textContent = $("#prov-name").textContent = "—";
    renderCert(); renderApps();
  } catch (e) { showErr(e.code || "badP12"); }
  btn.disabled = false; btn.textContent = t("verify");
};

const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
$("#notice").hidden = isIOS;
applyTheme(root.dataset.theme === "light" ? "light" : "dark");
applyLang();

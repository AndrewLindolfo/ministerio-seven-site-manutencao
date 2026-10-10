"use strict";

// Mesma chave de preferência do site oficial: seven_theme.
const THEME_KEY = "seven_theme";
// 00h de 15/10/2026 em Rondônia (UTC-4), independente do fuso do visitante.
const RETURN_AT = Date.parse("2026-10-15T00:00:00-04:00");
const pad = (value) => String(value).padStart(2, "0");
const root = document.documentElement;

function savedTheme() {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}
function applyTheme(theme) {
  const light = theme === "light";
  root.dataset.theme = light ? "light" : "dark";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", light ? "#f7f7fa" : "#0b0b0d");
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.setAttribute("aria-label", light ? "Ativar modo escuro" : "Ativar modo claro");
    toggle.setAttribute("aria-pressed", String(light));
  }
  const footerLogo = document.getElementById("footer-logo");
  if (footerLogo) footerLogo.src = light ? "assets/img/logo/logo_dark.png" : "assets/img/logo/logo_light.png";
}
function toggleTheme() {
  const theme = root.dataset.theme === "light" ? "dark" : "light";
  try { localStorage.setItem(THEME_KEY, theme); } catch { /* Site funciona sem armazenamento. */ }
  applyTheme(theme);
}
function renderCountdown() {
  const secondsLeft = Math.max(0, Math.ceil((RETURN_AT - Date.now()) / 1000));
  const days = Math.floor(secondsLeft / 86400);
  const hours = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;
  for (const [id, value] of [["days",days],["hours",hours],["minutes",minutes],["seconds",seconds]]) {
    const node = document.getElementById(id);
    if (node) node.textContent = pad(value);
  }
  if (secondsLeft === 0) {
    document.getElementById("countdown-finished")?.removeAttribute("hidden");
    document.getElementById("countdown-caption")?.setAttribute("hidden", "");
    return true;
  }
  return false;
}
function init() {
  applyTheme(savedTheme());
  document.getElementById("theme-toggle")?.addEventListener("click", toggleTheme);
  const year = document.getElementById("footer-year");
  if (year) year.textContent = String(new Date().getFullYear());
  if (!renderCountdown()) {
    const timer = window.setInterval(() => { if (renderCountdown()) window.clearInterval(timer); }, 1000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) renderCountdown(); });
  }
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once:true });
else init();

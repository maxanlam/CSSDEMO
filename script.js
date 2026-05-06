// -------- helpers --------
function getCleanHTML(section) {
  const clone = section.cloneNode(true);

  clone.querySelectorAll(".button-container").forEach((el) => el.remove());

  clone.querySelectorAll("h3").forEach((el) => el.remove());

  return clone.outerHTML;
}

function getUsedCSS(section) {
  const rules = [...document.styleSheets].flatMap((sheet) => {
    try {
      return [...sheet.cssRules];
    } catch {
      return [];
    }
  });

  const used = new Set();

  return rules
    .filter((rule) => rule.selectorText)
    .filter((rule) => {
      const selector = rule.selectorText.trim();

      if (selector.includes("copy-btn")) return false;
      if (selector.includes("button-container")) return false;
      if (selector.includes("copy-html-btn")) return false;
      if (selector.includes("copy-css-btn")) return false;
      if (selector.includes("h3")) return false;
      if (selector === "*") return false;

      return selector.split(",").some((sel) => {
        try {
          return section.querySelector(sel.trim()) !== null;
        } catch {
          return false;
        }
      });
    })
    .filter((rule) => {
      if (used.has(rule.cssText)) return false;
      used.add(rule.cssText);
      return true;
    })
    .map((r) => r.cssText)
    .join("\n");
}

// -------- HTML copy --------
document.querySelectorAll(".html-copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.closest("section");
    const html = getCleanHTML(section);

    navigator.clipboard.writeText(html);

    btn.textContent = "✔ HTML kopiert";
    setTimeout(() => (btn.textContent = "HTML kopieren"), 1500);
  });
});

// -------- CSS copy --------
document.querySelectorAll(".css-copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.closest("section");
    const css = getUsedCSS(section);

    navigator.clipboard.writeText(css);

    btn.textContent = "✔ CSS kopiert";
    setTimeout(() => (btn.textContent = "CSS kopieren"), 1500);
  });
});
const nav = document.querySelector("nav");

nav.addEventListener("mousemove", (e) => {
  const rect = nav.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const width = rect.width;

  const speed = 100;

  if (mouseX > width / 2) {
    nav.scrollLeft += speed;
  } else {
    nav.scrollLeft -= speed;
  }
});

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.closest("section");

    const clone = section.cloneNode(true);

    // remove UI elements from clone
    clone.querySelectorAll(".copy-btn").forEach((el) => el.remove());
    clone.querySelectorAll("h3").forEach((el) => el.remove());

    const html = clone.outerHTML;

    const rules = [...document.styleSheets].flatMap((sheet) => {
      try {
        return [...sheet.cssRules];
      } catch {
        return [];
      }
    });

    const used = new Set();

    const css = rules
      .filter((rule) => rule.selectorText)
      .filter((rule) => {
        const selector = rule.selectorText.trim();

        if (selector.includes("copy-btn")) return false;
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

    const output = `<!-- HTML -->\n${html}\n\n<style>\n${css}</style>`;

    navigator.clipboard.writeText(output);

    btn.textContent = "✔ kopiert";
    setTimeout(() => (btn.textContent = "Snippet Kopieren"), 1500);
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

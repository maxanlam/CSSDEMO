document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.closest("section");

    const html = section.outerHTML;

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
        return rule.selectorText.split(",").some((sel) => {
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

    const output = `<!-- HTML -->\n${html}\n\n<style>\n${css}\n</style>`;

    navigator.clipboard.writeText(output);

    btn.textContent = "✔ kopiert";
    setTimeout(() => (btn.textContent = "Code Kopieren"), 1500);
  });
});

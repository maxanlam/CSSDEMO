# @media screen meets print Steckbrief {}

#### Based on the info of and Imagery from the software you have gathered:

## Design a hybrid page that communicates and reflects your personal experience

Try Use your “Steckbrief” as a starting point, but reinterpret it creatively rather than solely presenting raw data. Transform your findings into an fun, engaging, and designed experience.

1.  Your design must work in both screen and print versions.
    The printed and digital versions should not be identical – though still remaining somewhat consistent in theme. Highlight the differences between them & reflect on how design changes between digital/interactive and physical formats.

2.  Include at least one interaction on the website.

- This interaction can also affect or influence the printed outcome/appearance in some way.

---

## HTML

Damit Seiten in HTML gerendet werden benötigen sie immer die Endung `.html`,
die erste Startseite nennt man i.d.R. `index.html`;

sobald dich in der HTML-Datei in VS Code befindest auf hast drücke `!` und klicke im popup auf das erste in der liste (`Emmet Abbreviation`); Somit erstellt du direkt ein Grundskellet für das Korrekte formatieren einer HTML-Seite, mit den wichtigsten Klarifikationen im `<head>` bzw. `<meta>`. Das ist wichtig weil Seiten sonst im Quirks mode landen = sieht komisch ungeplant und sehr inkonsisent auf endgeräten aus.

**wichtig:**
Alle HTML ELemente die über inhalt verfügen müssen immer geschlossen werden
z.B. bei `<p>` mit `</p>`
die einzigen Ausnahmen sind:
`<img>`
`<br>`
`<hr>`
`<input>`
`<meta>`
`<link>`
`<source>`
`<track>`

---

### Struktur (das Grundgerüst jeder Webseite)

Diese definieren den Aufbau und die Bedeutung deines Dokuments.

- `<html>` – umschließt alles
- `<head>` – Metadaten, Skripte, Styles
- `<body>` – sichtbarer Inhalt
- `<header>`, `<main>`, `<footer>` – Hauptbereiche
- `<section>`, `<article>` – gruppieren zusammengehörige Inhalte
- `<nav>` – Navigationslinks
- `<div>` – generischer Container (wird oft verwendet, aber nicht übertreiben)

---

### Text & Inhalt

Das, was Nutzer tatsächlich lesen.

- `<h1>`, `<h2>` → `<h6>` – Überschriften, gut für Struktur
- `<p>` – Absätze
- `<span>` – Inline-Container, kann html inhalte komplett unformatiert verpacken
- `<br>` – Zeilenumbruch
- `<strong>` / `<em>` – semantische Hervorhebung (besser als `<b>` / `<i>`)

---

### Links

- `<a>` – Hyperlinks (quasi das Herz des Webs)
  - innerhalb es tags kann der link in `src=""` geschrieben werden, du kannst hier auf eine andere Seite verlinken, aber sogar auch auf eine bestimmte [id](#klassen--ids) bspb. `src="#beispiel"`

### Medien

da diese Tags ja kein Texthinalt "tragen" müssen, müssen sie folglich nicht mit `</img>` oder `</video>` geschlossen werden

- `<img>` – Bilder
- `<video>` / `<audio>` – Medienplayer für inhalte die du selber bei dir hostest

  bsp:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track src="subs.vtt" kind="subtitles" srclang="de" />
</video>
```

- `<iframe>` – Einbettung externer Inhalte (z. B. YouTube, Google Maps, ganze Webseiten)

---

### Listen

Werden ständig für Navigation, Menüs usw. verwendet.

- `<ul>` – ungeordnete Liste
- `<ol>` – geordnete Liste
- `<li>` – Listenelement

---

### Formulare (Benutzereingaben)

- `<form>` – umschließt Eingabefelder
- `<input>` – Textfelder, Checkboxen usw.
- `<textarea>` – mehrzeiliger Text
- `<button>` – klickbarer Button
- `<label>` – verbessert die Barrierefreiheit

---

### vielleicht weniger modern, aber immer noch nützlich :))

- `<table>`- Tabelle, mit:
  - `<tr>` - eine Zeile (table row)
  - `<td>` - eine normale Zelle (table data)
  - `<th>` - eine Kopfzelle (table header)

- `<hr>` - horizontale Linie

---

### Klassen & IDs

Diese Attribute sind hilfreich für weitere Katoegoriserung im **Styling und Interakton**.

- `class="..."` – wiederverwendbare CSS-Gruppen
  - ein Element kann mehrere Klassen haben
  - mehre Elemente können die gleiche Klasse haben
    → wichtig wenn man Elemente gleich stylen will oder aber statements / modi im Javascript bestimmen will (via ClassList Toggle/Add/Remove/Contain/Replace)
  - werden im CSS mit `.` angesprochen (bsp. `.beisielKlasse`)
  - können im JS über `document.querySelector` (bei nur einem Element) oder aber für meher elemente `document.querySelectorAll` angesprochen (bsp. document.queryselecotrAll(".BeistpienlKlasse"));

im html mit class einfügen:

```html
<div class="beispiel"></div>
```

werden im CSS mit `.` angesprochen:

```css
.beispiel {
  color: red;
}
```

im Javascript (bei nur einem Element/für das erste element mit er Klase) kann man sie z.B. mit dem `querySelector` Ansprechen

```js
document.querySelector(".beispiel");
```

für mehrer Elemente kann man sie z.B. mit dem `querySelectorAll` Ansprechen, dieser Erstellt dann eine Liste aller objekte

```js
document.querySelectorAll(".beispiel");
```

durch diese man dann loops bauen kann (sehr wichtig in Javascript, [siehe Javascript Beispiele](#listen));

---

## CSS

### Media-Queries

#### @media screen

#### @media print

## Javascript-Beispiele für CSS-Styling

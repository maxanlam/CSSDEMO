# @media screen meets print Steckbrief {}

#### Based on the info of and Imagery from the software you have gathered:

## Design a hybrid page that communicates and reflects your personal experience

Try Use your “Steckbrief” as a starting point, but reinterpret it creatively rather than solely presenting raw data. Transform your findings into an fun, engaging, and designed experience.

1.  Your design must work in both screen and print versions.
    The printed and digital versions should not be identical – though still remaining somewhat consistent in theme. Highlight the differences between them & reflect on how design changes between digital/interactive and physical formats.

2.  Include at least one interaction on the website.

- This interaction can also affect or influence the printed outcome/appearance in some way.

---

**Software-Anforderungen:** Visual Studio Code mit Live-Server Extension, Firefox oder Google Chrome

## HTML

Damit Seiten in HTML gerendered werden benötigen sie immer die Endung `.html`,
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

- `<a>` – Hyperlinks
  - innerhalb es tags kann der link in `src=""` geschrieben werden. Du kannst hier auf eine andere Seite/Url verlinken die auf klick geöffnet/aktiviert wird, mit `target="_blank"` wird diese in einem neuen tab geöffnet. Man kann aber auch auf eine bestimmte [id] (#id) innerhalb der eigenen Seite verlinken, z.B: `src="#beispiel"`.

### Medien

- `<img>` – Bilder
  - hier kannst du auch einfach mit `src=""` auf ein bild verlinken. Entweder auf eins in deinen eigenen ordnern oder mit einer externen url auf irgend ein anderes im internet
  - mit `alt=""` kannst du auch einen alt text hinzufügen, was hilft das bild zu umschreiben sollte es mal nicht irchtig laden aber auch vorallem für menschen mit Sehbehinderung, die oft screenreader benutzen.
  - mit `loading="lazy` werden bilder erst reingeladen, wenn sie sichtbar werden, statt direkt auf einmal beim Seitenladen. was bei perfomance helfen kann

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

### ID

- `id="..."` – eindeutiger Identifikator für ein bestimmtes Element
  - Eine ID darf **nur einmal pro HTML-Dokument vorkommen**
  - Sie darf nur **einem einzigen Element** zugewiesen werden
  - Wird im CSS mit `#` angesprochen (z. B. `#beispiel`)
  - Wird im JavaScript über `document.getElementById()` angesprochen
  - Hat im Vergleich zu `class` eine **höhere Priorität (Spezifität)** im CSS

#### Klasse

- `class="..."` – wiederverwendbare CSS-Gruppen die bei Kategorisierungen helfen
- ein Element kann mehrere Klassen haben
- mehre Elemente können die gleiche Klasse haben
  - wichtig wenn man Elemente geich bzw. nach einem Schema stylen will oder aber statements / modi im Javascript bestimmen will (via ClassList Toggle/Add/Remove/Contain/Replace)
- werden im CSS mit `.` angesprochen (bsp. `.beisiel`)
- können im JS über `document.querySelector` (bei nur einem Element) oder aber für meher elemente `document.querySelectorAll` angesprochen (bsp. `document.queryselecotrAll(".BeistpienlKlasse"`));

```html
<div class="beispiel"></div>
```

hier nutze ich das klassensystem um zusätzlich ein modus/statement auszuführen:

```html
<div class="beispiel active"></div>
```

ich habe mir hier z.B. die klasse `active` ausgedacht um sie später im CSS stylen und Javascript nutzen/ggf. umschalten zu können

---

# CSS Grundlagen – Zusammenfassung

CSS bestimmt das Aussehen deiner HTML-Struktur. Damit Browser deine Styles erkennen, müssen diese Dateien immer die Endung `.css` haben. Traditionell wird die erste Hauptdatei `style.css` gennant. Es wird in der HTML im `<head>` verlkinkt, z.B. als `<link rel="stylesheet" href="style.css">`. Statt einer seperaten CSS-Dateikann aber auch (seltener) direkt in der html in den `<style>`-Tag geschrieben, oder innerhalb eines html-elements mit `style="..."`;

## Aufbau einer CSS-Regel

- **Selektor (Selector):** Zeigt auf das HTML-Element, das du stylen möchtest.
- **Deklarationsblock (Declaration Block):** Enthält eine oder mehrere Deklarationen, getrennt durch Semikolons.
- **Eigenschaft (Property):** Das Stil-Attribut, das du ändern möchtest (z. B. `color`).
- **Wert (Value):** Der Wert für diese Eigenschaft (z. B. `red`).

---

## Die häufigsten Selektoren

Selektoren werden verwendet, um HTML-Elemente zu „finden“.

| Selektor      | Beispiel             | Beschreibung                                     |
| ------------- | -------------------- | ------------------------------------------------ |
| Element       | `p { ... }`          | Wählt alle `<p>`-Elemente aus                    |
| ID            | `#header { ... }`    | Wählt das eindeutige Element mit `id="header"`   |
| Klasse        | `.btn { ... }`       | Wählt alle Elemente mit der Klasse `btn`         |
| Universal     | `* { ... }`          | Wählt alle Elemente auf der Seite                |
| Attribut      | `input[type="text"]` | Wählt Elemente anhand eines bestimmten Attributs |
| Nachfahre     | `div p`              | Wählt alle `<p>` innerhalb eines `<div>`         |
| Direktes Kind | `ul > li`            | Wählt `<li>`, die direkte Kinder von `<ul>` sind |

---

## Das CSS-Box-Modell

Jedes Element im Web wird als rechteckige Box betrachtet. Das Box-Modell ist entscheidend für Layouts.

- **Content (Inhalt):** Text oder Bilder im Inneren
- **Padding:** Transparenter Bereich um den Inhalt (innerhalb des Rahmens)
- **Border (Rahmen):** Linie um Padding und Inhalt
- **Margin (Außenabstand):** Transparenter Bereich außerhalb des Rahmens

```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
  box-sizing: border-box; /* Padding und Border erhöhen die Breite nicht */
}
```

---

## Wichtige Layout-Eigenschaften

### Display

Definiert, wie ein Element dargestellt wird.

- `display: block;` - Nimmt die gesamte Breite ein
- `display: inline;` - Nur notwendige Breite, keine feste Höhe/Breite
- `display: inline-block;` - Inline, aber mit Höhe/Breite steuerbar
- `display: none;` - Element wird (visuell) aus dem Flow entfernt

### Positionierung

- `position: static;` - Standard
- `position: relative;` - Relativ zur normalen Position
- `position: absolute;` - Relativ zum nächsten positionierten Elternteil
- `position: fixed;` - Relativ zum Viewport
- `position: sticky;` - Wechsel zwischen relative und fixed beim Scrollen

---

## Flexbox & Grid (Moderne Layouts)

### Flexbox (Eindimensional)

Für Reihen ODER Spalten.

```css
display: flex;
justify-content: center; /* horizontale Ausrichtung */
align-items: center; /* vertikale Ausrichtung */
flex-direction: column;
```

### Grid (Zweidimensional)

Für Reihen UND Spalten.

```css
display: grid;
grid-template-columns: 1fr 1fr 1fr; /* drei gleich große Spalten */
gap: 10px; /* Abstand zwischen Elementen */
```

---

## Typografie & Text

- `font-family:` - Schriftart (z. B. Arial, sans-serif)
- `font-size:` - Schriftgröße (px, em, rem)
- `font-weight:` - Dicke (bold, 400, 700)
- `text-align:` - Ausrichtung (left, center, right, justify)
- `line-height:` - Zeilenabstand
- `color:` - Textfarbe
- `webkit-text-stroke:` - Textkontur
  - `paint-order: stroke;` - draw the stroke first, then fill and markers
  - `paint-order: markers;` - draw the markers first, then fill and stroke

---

## Einheiten

- `px` - Pixel (absolut)
- `%` - Prozent relativ zum Eltern-Element
- `em` - relativ zur Schriftgröße des Elements
- `rem` - relativ zur Schriftgröße des Root-Elements (`<html>`)
- `vw / vh` - Prozent der Viewport-Breite/-Höhe

---

## Pseudo-Klassen & Pseudo-Elemente

Für spezielle Zustände von Elementen.

- `:hover` - Beim Darüberfahren mit der Maus
- `:active` - Beim Klicken
- `:nth-child(n)` - Wählt das n-te Kind-Element
- `::before / ::after` - Fügt Inhalt vor oder nach einem Element ein

---

## Media Queries

### @media Screen

Für unterschiedliche Bildschirmgrößen.

```css
/* Für Bildschirme ab 768px Breite */
@media (min-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

### @media Print

Wird verwendet, wenn eine Seite gedruckt wird (oder Druckvorschau geöffnet ist).

#### vorschau:

Um zu checken wie es aussieht kann man `command`+ `P` drücken. Um diesen visuellen Abgleichungsprozess aber etwas zu beschleunigen gibt es folgenden Workaround:

**Chrome:**
DevTools öffnen (`F12` oder option + `command` + `I`)

Command Menu für direkte suche öffnen (`control` + `shift` + `P`),
„Rendering“ eingeben → Rendering Panel öffnen

![image](/screenshots/chrome1.png)

Dort bei Emulate CSS media type → print auswählen

![image](/screenshots/chrome2.png)

responsive mode einschalten

![image](/screenshots/chrome3.png)

Liste der Geräte ansehen und bearbeiten

![image](/screenshots/chrome4.png)

einen neues "Gerät" eingeben

![image](/screenshots/chrome5.png)

maße in pixel eingeben (z.B. a4 = 595 x 842)

![image](/screenshots/chrome6.png)

nach dem speichern ist unser custom format in der Liste und kann für die Vorschau benutzt werden

![image](/screenshots/chrome7.png)

**Firefox**
DevTools öffnen (`F12` oder option + `command` + `i`)

im DevTools-Menü: „Druckmedien simulieren“ (print) auswählen

![image](/screenshots/firefox1.png)

responsive mode einschalten

![image](/screenshots/firefox2.png)

Liste der Geräte ansehen und bearbeiten

![image](/screenshots/firefox3.png)

einen neues "Gerät" eingeben

![image](/screenshots/firefox4.png)

maße in pixel eingeben (z.B. a4 = 595 x 842)

![image](/screenshots/firefox5.png)

nach dem speichern ist unser custom format in der Liste und kann für die Vorschau benutzt werden

![image](/screenshots/firefox6.png)

```css
@media print {
  body {
    background: white;
    color: black;
  }
}
```

---

#### Seitenlayout

- `@page` - Seitenformat steuern (Rand, Größe)

z.B.

```css
@page {
  margin: 20mm;
  size: A4 landscape;
}
```

oder

```css
@page {
  margin: 20mm;
  size: 210mm 297mm;
}
```

#### Seitenumbrüche

- `break-before: always;` - Neue Seite vor Element
- `break-after: always;` - Neue Seite nach Element
- `break-inside: avoid;` - Bruch eines Elements über mehrere Seiten verhindern

---

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

- `<a>` – Hyperlinks (quasi das Herz des Webs)
  - innerhalb es tags kann der link in `src=""` geschrieben werden, du kannst hier auf eine andere Seite verlinken, aber sogar auch auf eine bestimmte [id](#id) bspb. `src="#beispiel"`

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

### ID

- `id="..."` - einzigartiger Identifikator für ein Bestimmtese Element
  - Name der ID kann nur einmal und nur auf ein Element angewendet werden.

#### Klasse

- `class="..."` – wiederverwendbare CSS-Gruppen die bei Kategorisierungen helfen
  - ein Element kann mehrere Klassen haben
  - mehre Elemente können die gleiche Klasse haben
    → wichtig wenn man Elemente geich bzw. nach einem Schema stylen will oder aber statements / modi im Javascript bestimmen will (via ClassList Toggle/Add/Remove/Contain/Replace)
    im html mit class einfügen:

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

CSS bestimmt das Aussehen deiner HTML-Struktur. Damit Browser deine Styles erkennen, müssen diese Dateien immer die Endung .css haben. Es wird entweder im `<head>` via `<link rel="stylesheet" href="style.css">` eingebunden. Statt einer seperaten CSS-Dateikann aber auch (seltener) direkt in der html in den `<style>`-Tag geschrieben, oder innerhalb eines html-elements mit `style="..."`;

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

- `display: block;` → Nimmt die gesamte Breite ein
- `display: inline;` → Nur notwendige Breite, keine feste Höhe/Breite
- `display: inline-block;` → Inline, aber mit Höhe/Breite steuerbar
- `display: none;` → Element wird (visuell) aus dem Flow entfernt

### Positionierung

- `position: static;` → Standard
- `position: relative;` → Relativ zur normalen Position
- `position: absolute;` → Relativ zum nächsten positionierten Elternteil
- `position: fixed;` → Relativ zum Viewport
- `position: sticky;` → Wechsel zwischen relative und fixed beim Scrollen

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

- `font-family:` Schriftart (z. B. Arial, sans-serif)
- `font-size:` Schriftgröße (px, em, rem)
- `font-weight:` Dicke (bold, 400, 700)
- `text-align:` Ausrichtung (left, center, right, justify)
- `line-height:` Zeilenabstand
- `color:` Textfarbe
- `webkit-text-stroke:` Textkontur
  - `paint-order: stroke;`
  - `paint-order: markers;`

---

## Einheiten

- `px` → Pixel (absolut)
- `%` → Prozent relativ zum Eltern-Element
- `em` → relativ zur Schriftgröße des Elements
- `rem` → relativ zur Schriftgröße des Root-Elements (`<html>`)
- `vw / vh` → Prozent der Viewport-Breite/-Höhe

---

## Pseudo-Klassen & Pseudo-Elemente

Für spezielle Zustände von Elementen.

- `:hover` → Beim Darüberfahren mit der Maus
- `:active` → Beim Klicken
- `:nth-child(n)` → Wählt das n-te Kind-Element
- `::before / ::after` → Fügt Inhalt vor oder nach einem Element ein

---

## Media Queries (Responsives Design)

Für unterschiedliche Bildschirmgrößen.

```css
/* Für Bildschirme ab 768px Breite */
@media (min-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

## Javascript-Beispiele für CSS-Styling

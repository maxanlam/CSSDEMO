# @media screen meets print Steckbrief {}

**Software-Anforderungen:** Visual Studio Code mit Live-Server Extension, Firefox oder Google Chrome

---

#### Based on the info of and Imagery from the software you have gathered:

## Design a hybrid page that communicates and reflects your personal experience

Try Use your “Steckbrief” as a starting point, but reinterpret it creatively rather than solely presenting raw data. Transform your findings into an fun, engaging, and designed experience.

1.  Your design must work in both screen and print versions.
    The printed and digital versions should not be identical – though still remaining somewhat consistent in theme. Highlight the differences between them & reflect on how design changes between digital/interactive and physical formats.

2.  Include at least one interaction on the website.

- This interaction can also affect or influence the printed outcome/appearance in some way.

---

# HTML

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

## Struktur (das Grundgerüst jeder Webseite)

Diese definieren den Aufbau und die Bedeutung deines Dokuments.

- `<html>` – umschließt alles
- `<head>` – Metadaten, Skripte, Styles
- `<body>` – sichtbarer Inhalt
- `<header>`, `<main>`, `<footer>` – Hauptbereiche
- `<section>`, `<article>` – gruppieren zusammengehörige Inhalte
- `<nav>` – Navigationslinks
- `<div>` – generischer Container (wird oft verwendet, aber nicht übertreiben)

---

## Text & Inhalt

Das, was Nutzer tatsächlich lesen.

- `<h1>`, `<h2>` → `<h6>` – Überschriften, gut für Struktur
- `<p>` – Absätze
- `<span>` – Inline-Container, kann html inhalte komplett unformatiert verpacken
- `<br>` – Zeilenumbruch
- `<strong>` / `<em>` – semantische Hervorhebung (besser als `<b>` / `<i>`)

---

## Links

- `<a>` – Hyperlinks
  - innerhalb es tags kann der link in `src=""` geschrieben werden. Du kannst hier auf eine andere Seite/Url verlinken die auf klick geöffnet/aktiviert wird, mit `target="_blank"` wird diese in einem neuen tab geöffnet. Man kann aber auch auf eine bestimmte [id] (#id) innerhalb der eigenen Seite verlinken, z.B: `src="#beispiel"`.

## Medien

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

## Listen

Werden ständig für Navigation, Menüs usw. verwendet.

- `<ul>` – ungeordnete Liste
- `<ol>` – geordnete Liste
- `<li>` – Listenelement

---

## Formulare (Benutzereingaben)

- `<form>` – umschließt Eingabefelder
- `<input>` – Textfelder, Checkboxen usw.
- `<textarea>` – mehrzeiliger Text
- `<button>` – klickbarer Button
- `<label>` – verbessert die Barrierefreiheit

---

## vielleicht weniger modern, aber immer noch nützlich :))

- `<table>`- Tabelle, mit:
  - `<tr>` - eine Zeile (table row)
  - `<td>` - eine normale Zelle (table data)
  - `<th>` - eine Kopfzelle (table header)
- `<hr>` - horizontale Linie

---

## Klassen & IDs

Diese Attribute sind hilfreich für weitere Katoegoriserung im **Styling und Interakton**.

## ID

- `id="..."` – eindeutiger Identifikator für ein bestimmtes Element
  - Eine ID darf **nur einmal pro HTML-Dokument vorkommen**
  - Sie darf nur **einem einzigen Element** zugewiesen werden
  - Wird im CSS mit `#` angesprochen (z. B. `#beispiel`)
  - Wird im JavaScript über `document.getElementById()` angesprochen
  - Hat im Vergleich zu `class` eine **höhere Priorität (Spezifität)** im CSS

## Klassen

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

# CSS

CSS bestimmt das Aussehen deiner HTML-Struktur. Damit Browser deine Styles erkennen, müssen diese Dateien immer die Endung `.css` haben. Traditionell wird die erste Hauptdatei `style.css` gennant. Es wird in der HTML im `<head>` verlkinkt, z.B. als `<link rel="stylesheet" href="style.css">`. Statt einer seperaten CSS-Dateikann aber auch (seltener) direkt in der html in den `<style>`-Tag geschrieben, oder innerhalb eines html-elements mit `style="..."`;

## Aufbau einer CSS-Regel

- **Selektor (Selector):** Zeigt auf das HTML-Element, das du stylen möchtest, du kannst auch unterschiedliche Elemente zusammen auswählen, wenn du mit `,` trennst.
- **Deklarationsblock (Declaration Block):** - folgt nach dem Selektor immer hinnerhab der `{}` . Enthält eine oder mehrere Deklarationen, getrennt durch `;`.
- **Eigenschaft (Property):** Das Stil-Attribut, das du ändern möchtest (z. B. `color:`).
- **Wert (Value):** Der Wert für diese Eigenschaft (z. B. `red`).

![](/screenshots/8240b8b44c51e10c7baef0329a8837073774854c84505a8303cff20a589fa96709bfff22de4986c35ff635e2e9e0510d1f5f07cd1fcac0c72ffcd784d358046b.png)

---

## Die häufigsten Selektoren

Selektoren werden verwendet, um HTML-Elemente zu „finden“.

| Selektor      | Beispiel             | Beschreibung                                                                       |
| ------------- | -------------------- | ---------------------------------------------------------------------------------- |
| Element       | `p { ... }`          | Wählt alle `<p>`-Elemente aus                                                      |
| ID            | `#logo { ... }`      | Wählt das eindeutige Element mit `id="logo"`                                       |
| Klasse        | `.btn { ... }`       | Wählt alle Elemente mit der Klasse `btn`                                           |
| Universal     | `* { ... }`          | Wählt alle Elemente auf der Seite                                                  |
| Attribut      | `input[type="text"]` | Wählt Elemente dem ein bestimmtes Attribut gegeben wurde wie `<input type="text">` |
| Nachfahre     | `div p`              | Wählt alle `<p>` innerhalb eines `<div>`                                           |
| Direktes Kind | `ul > li`            | Wählt `<li>`, die direkte Kinder von `<ul>` sind                                   |

---

## Einheiten

- `px` - Pixel (absolut)
- `%` - Prozent relativ zum Eltern-Element
- `em` - relativ zur Schriftgröße des Elements
- `rem` - relativ zur Schriftgröße des Root-Elements (`<html>`)
- `vw / vh` - Prozent der Viewport-Breite/-Höhe

### calc()

- Berechnungen mit `calc()` kombinieren verschiedene Einheiten (z. B. px, %, vh)
- hilft bei flexiblen Layouts

**Beispiel:**

```css
width: calc(100% - 40px);
```

---

## Farbe

Farben bestimmen Text- und Hintergrundgestaltung.

- `background-color:` – Hintergrundfarbe
- `color:` – Textfarbe

---

### Farbwerte in CSS

#### Hex

```css id="c1"
color: #ff0000;
```

→ Rot

#### RGB

```css id="c2"
color: rgb(255, 0, 0);
```

→ Rot (Rot, Grün, Blau Werte 0–255)

#### RGBA (mit Transparenz)

```css id="c3"
color: rgba(255, 0, 0, 0.5);
```

→ halbtransparent

#### HSL

```css id="c4"
color: hsl(0, 100%, 50%);
```

→ Farbe über Farbton, Sättigung, Helligkeit

#### Farbnamen

```css id="c5"
color: red;
```

---

## Das CSS-Box-Modell

Jedes Element im Web wird als rechteckige Box betrachtet. Das Box-Modell ist entscheidend für Layouts.

![](/screenshots/CSS-Box-Modell.png)

- `padding:` Transparenter Bereich um den Inhalt (innerhalb des Rahmens)
- `border`: Linie um Padding und Inhalt
- `margin`: Transparenter Bereich außerhalb des
- `width:` - bestimmt die Breite eines Elements
- `height:` - bestimmt die Höhe eines Elements
- `border-radius` - Rundung der Box-Ecken

### Padding (Innenabstand)

Padding ist der **transparente Bereich innerhalb des Rahmens**, der den Inhalt umgibt.

- `padding-top:` – Abstand oben innerhalb des Elements
- `padding-right:` – Abstand rechts innerhalb des Elements
- `padding-bottom:` – Abstand unten innerhalb des Elements
- `padding-left:` – Abstand links innerhalb des Elements

---

### Border (Rahmen/Kontur)

Der Border ist die **Kontur um Padding und Inhalt**. Hierbei nennt man erstmal die dicke, den Border Stil und dann die Farbe.

**Beispiele für Border-Stile:**

- `solid` - durchgezogene Linie
- `dashed` - gestrichelte Linie
- `dotted` - gepunktete Linie
- `double` - doppelte Linie

z.B. für eine durchgezogene Linie:

```css
div {
  border: 2rem solid black;
}
```

oder für eine gestrichelte

```css
div {
  border: 2rem dashed black;
}
```

- `border-top:` – Kontur oben
- `border-right:` – Kontur rechts
- `border-bottom:` – Kontur unten
- `border-left:` – Kontur links

---

### Margin (Außenabstand)

Margin ist der **transparente Bereich außerhalb des Rahmens**, also der Abstand zu anderen Elementen.

- `margin-top:` – Abstand nach oben
- `margin-right:` – Abstand nach rechts
- `margin-bottom:` – Abstand nach unten
- `margin-left:` – Abstand nach links

### Border-Radius

Border-Radius ermöglicht Kurven an den Ecken der Boxen zu erzeugen.

- kleinere fixen werte wie z.B. `border-radius: 2rem` erzeugt runde Ecken
- `border-radius: 100%` macht die Box zum Kreis
- `border-radius: 3rem 2rem 0rem 1rem` erzeugt unterschiedliche Rundungen für jede Ecke.
  Einzelne Ecken können auch direkt angesprochen werden, z. B. mit `border-top-right-radius: 1rem`

---

man könnte also eine Box z.B. so stylen:

```css
div {
  width: 300px;
  height: 250px;
  padding: 20px;
  border: 5px solid black; /* schwarze Kontur */
  margin: 10px;
  box-sizing: border-box; /* Padding und Border erhöhen die Breite nicht */
  border-radius: 2rem; /* runde Ecken */
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

- `position: static;` - Standard (keine spezielle Positionierung)

- `position: relative;` - Verschiebung relativ zur ursprünglichen Position

- `position: absolute;` - Positioniert relativ zum nächsten **positionierten** Eltern-Element (nicht `static`)

- `position: fixed;` - Fixiert relativ zum **Viewport** (bleibt beim Scrollen stehen)

- `position: sticky;` - Mischung aus `relative` und `fixed` (bleibt beim Scrollen „kleben“)

#### Positionswerte (`top`, `right`, `bottom`, `left`)

Diese Eigenschaften funktionieren nur bei:
`relative`, `absolute`, `fixed`, `sticky`

Sie bestimmen den Abstand zu einer Kante.

- `top:` - Abstand **von oben**
- `bottom:` - Abstand **von unten**

- `left:` - Abstand **von links**

- `right:` - Abstand **von rechts**

---

## Breite & Höhe (`width` & `height`)

Diese Eigenschaften definieren die Dimensionen eines HTML-Elements.  
Standardmäßig beziehen sie sich auf den **Inhaltsbereich** der Box.

### Basiseigenschaften

- `width:` – legt die Breite des Elements fest
- `height:` – legt die Höhe des Elements fest

- `max-width:` / `max-height:` - verhindern, dass ein Element größer als ein bestimmter Wert wird

- `min-width:` / `min-height:` - garantieren eine Mindestgröße, auch bei wenig Inhalt

### Wichtige Einheiten

| Einheit     | Typ         | Beschreibung                                                    |
| ----------- | ----------- | --------------------------------------------------------------- |
| `px`        | Absolut     | Feste Größe (z. B. `300px`)                                     |
| `%`         | Relativ     | Anteil an der Größe des Eltern-Elements                         |
| `vw` / `vh` | Relativ     | Prozent der Viewport-Breite bzw. -Höhe vom Browser-Fenster      |
| `auto`      | Automatisch | Browser berechnet die Größe basierend auf dem Inhalt (Standard) |

---

## Opacity & Transform

Die ?roperties Opacity und Transfrom werden gerne mal für Animationen, Hover-Effekte, Overlays, Fade-Animationen und andere UI-Interaktionen genutzt.

### Opacity

`opacity` steuert die **Durchsichtigkeit eines Elements**.

- `opacity: 1;` - komplett sichtbar
- `opacity: 0;` - komplett unsichtbar
- `opacity: 0.5;` - halb transparent

---

### Transform (Verformung / Bewegung)

`transform` verändert die **Darstellung eines Elements**, ohne dabei den Layout-Fluss zu beeinflussen.

**Häufige Werte:**

- `translate(x, y)` - verschiebt das Element
- `scale(n)` - vergrößert/verkleinert das Element
- `rotate(angle)` - dreht das Element
- `skew(x, y)` - kippt das Element

**Beispiele:**

- `transform: translate(20px, 10px);`
- `transform: scale(1.2);`
- `transform: rotate(45deg);`

## Typografie & Text

- `font-family:` - Schriftart (z. B. Arial, sans-serif)
  - **fonts verlinken**:
    1. Schriftdateien (z. B. `.woff2`, `.woff`) in dein Projekt legen (z. B. `/fonts/` Ordner).
    2. In deiner CSS-Datei `@font-face` definieren:

    ```css
    @font-face {
      font-family: "MeineFont"; /* ausgedachter name mit dem du dann arbeitest*/
      src:
        url("/fonts/meinefont.woff2") format("woff2"),
        url("/fonts/meinefont.woff") format("woff");
      font-weight: normal;
      font-style: normal;
    }
    ```

    3. Schrift in deinem CSS verwenden:

    ```css
    p {
      font-family:
        "MeineFont", sans-serif; /* ausgedachter Name dann für bestimmte elemente via css "font-family:" zuschreiben um sie zu benutzen */
    }
    ```

- `font-size:` - Schriftgröße (px, em, rem oder seltener vw für große, skalierende Headlines, die sich an die Fenstergröße anpassen)
- `font-weight:` - Dicke (bold, 400, 700)
- `text-align:` - Ausrichtung (left, center, right, justify)
- `line-height:` - Zeilenabstand
- `webkit-text-stroke:` - Textkontur
  - `paint-order: stroke;` - die Kontur (stroke) wird zuerst gezeichnet (liegt “unten”) = Kontur außen
  - `paint-order: markers;` - Marker (z. B. Pfeile an Linienenden) werden zuerst gezeichnet = Kontur zentriert

---

## Columns

Eher geeignet für Fließtext, der automatisch in mehrere Spalten aufgeteilt werden soll.

```css
column-count: 3; /* Anzahl der Spalten */
column-gap: 20px; /* Abstand zwischen Spalten */
```

## Flexbox & Grid (Moderne Layouts)

### Grid (Zweidimensional) Für Reihen UND Spalten.

css
display: grid;
grid-template-columns: 1fr 1fr 1fr; /_ drei gleich große Spalten _/
gap: 10px; /_ Abstand zwischen Elementen _/

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

# Pseudo-Klassen & Pseudo-Elemente

Pseudo-Klassen und Pseudo-Elemente werden genutzt, um **Zustände von Elementen** oder **bestimmte Teile eines Elements** direkt in CSS anzusprechen – ohne zusätzliche Klassen im HTML.

## Pseudo-Klassen

Pseudo-Klassen beschreiben den **Zustand eines Elements**.

- `:hover` – aktiv, wenn die Maus über einem Element ist, z. B. für visuelle Effekte beim Darüberfahren
- `:active` – aktiv, während ein Element gedrückt wird, z. B. beim Klicken eines Buttons
- `:not(selector)` – schließt bestimmte Elemente aus, `selector` beschreibt, was ausgeschlossen werden soll
- `:nth-child(n)` – wählt ein Element nach seiner Position im Eltern-Element  
  der wert `n` kann z.B. sein:
  - Zahl (`1`, `2`, `3` …)
  - `odd` (ungerade Positionen)
  - `even` (gerade Positionen)
- `:nth-of-type(n)` – wie `nth-child`, aber nur für denselben Elementtyp, ignoriert andere HTML-Tags im gleichen Container
- `:has(selector)` – wählt ein Element, das ein bestimmtes Kind enthäl, `selector` beschreibt das Kind-Element
- `:is(selector, selector, ...)` – fasst mehrere Selektoren zusammen, statt `h1, h2, h3` kann man `:is(h1, h2, h3)` schreiben

## Pseudo-Elemente

Pseudo-Elemente sprechen Teile eines Elements an.

- `::before` – erzeugt Inhalt **vor dem eigentlichen Inhalt** eines Elements
- `::after` – erzeugt Inhalt **nach dem eigentlichen Inhalt**

## Interaktionen

### Hover & Ative

für gewisse Interaktionen Kann man den zustand des Elements verändern:

- `:hover` – Zustand beim Überfahren mit der Maus
- `:active` – Zustand solange man klickt bzw. das klicken hält

Auch diese Zustände können gestylt werden und dadurch visuell vom Normalzustand abweichen.

Mit `transition:` lassen sich solche Änderungen weich animieren.
Die Dauer wird in Sekunden (`s`) angegeben – z. B. bewirkt `transition: 1s`, dass alle Stiländerungen innerhalb von 1 Sekunde übergehen.
Gibt man zusätzlich eine CSS-Property an, etwa `transition: opacity 1s`, gilt die Animation nur für diese Eigenschaft.

Mehrere Eigenschaften können mit Kommas getrennt werden.

### Easing

Nach der Sekundenangabe kann man auch noch `easeing` Hinzufügen. Es beschreibt die zeitliche Veränderung einer Animation – also wie schnell oder langsam ein Übergang beginnt, verläuft und endet.

Nach der Dauer kann ein Easing-Wert angegeben werden, z. B. `transition: opacity 1s ease`.

Gängige Easing-Arten:

- `linear` – gleichmäßige Geschwindigkeit
- `ease` – langsam starten und enden (Standard)
- `ease-in` – langsam starten, dann schneller werden
- `ease-out` – schnell starten, dann langsamer werden
- `ease-in-out` – langsam starten und enden, schnell in der Mitte
- `cubic-bezier(...)` – individuelle Kurve definieren

hier mal ein finales Beispiel wenn ich ein Element hover bzw. klicken würde bsp.:

```css
/* originaler Zustand*/
a {
  color: blue;
  background-color: grey;
}

/* Hover-State & Active-State */
a:hover,
a:active {
  color: red;
  background-color: black;
color 1s ease-in-out, /* startet langsam, wird schneller, endet wieder langsam */
background-color 1s ease-in; /* startet langsam und beschleunigt dann */
}
```

### Open

- `:open` – beschreibt Elemente im geöffneten Zustand
- wird bei `<details>` verwendet
  - `<details>` ist ein HTML-Element für ausklappbare Inhalte
    es ist standardmäßig geschlossen
    mit einem Klick auf <summary> wird es geöffnet oder geschlossen
  - greift, wenn das Element das `open`-Attribut hat

**Beispiel:**

```html
<details>
  <summary>Mehr anzeigen</summary>
  <p>Das ist der ausgeklappte Inhalt.</p>
</details>
```

```css
details:open {
  background-color: lightgrey;
}
```

Beim Klick auf „Mehr anzeigen“ wird das Element geöffnet und `:open` greift.

## Animation

CSS Animationen arbeiten mit `@keyframes`:

- `@keyframes name {}` – definiert den Verlauf der Animation  
  → `from` / `to` oder Prozentwerte (`0%`, `100%`)

- `animation: name duration timing;`  
  → verbindet ein Element mit einer Animation  
  → `duration` = Dauer  
  → `timing` = Verlauf (z. B. linear, ease)

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

| **Chrome**                                                                                                                       | **Firefox**                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| DevTools öffnen (`F12` oder `option + command + I`)                                                                              | DevTools öffnen (`F12` oder `option + command + I`)                                                   |
| Command Menu öffnen (`control + shift + P`), „Rendering“ eingeben → Rendering Panel öffnen<br>![image](/screenshots/chrome1.png) | Im DevTools-Menü „Druckmedien simulieren“ (print) auswählen<br>![image](/screenshots/firefox1.png)    |
| Bei _Emulate CSS media type_ → **print** auswählen<br>![image](/screenshots/chrome2.png)                                         | Responsive Mode einschalten<br>![image](/screenshots/firefox2.png)                                    |
| Responsive Mode einschalten<br>![image](/screenshots/chrome3.png)                                                                | Liste der Geräte ansehen und bearbeiten<br>![image](/screenshots/firefox3.png)                        |
| Liste der Geräte ansehen und bearbeiten<br>![image](/screenshots/chrome4.png)                                                    | Neues Gerät hinzufügen<br>![image](/screenshots/firefox4.png)                                         |
| Neues Gerät hinzufügen<br>![image](/screenshots/chrome5.png)                                                                     | Maße in Pixel eingeben (z. B. A4 = 595 × 842)<br>![image](/screenshots/firefox5.png)                  |
| Maße in Pixel eingeben (z. B. A4 = 595 × 842)<br>![image](/screenshots/chrome6.png)                                              | Custom Format erscheint in der Liste und kann verwendet werden<br>![image](/screenshots/firefox6.png) |
| Custom Format erscheint in der Liste und kann verwendet werden<br>![image](/screenshots/chrome7.png)                             |                                                                                                       |

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

## Nachschlage-Werke:

**Glossare/Docs:**

- **[MDN Web Docs](https://developer.mozilla.org/)** – Beste Referenz: verständlich, aktuell & mit Beispielen

- **[W3C](https://www.w3.org/)** – Offizielle Standards

**Kurse:**

- **[freeCodeCamp](https://www.freecodecamp.org/)**

**Beilspiele:**

- **[CodePen](https://codepen.io/)** – Direkt im Browser ausprobieren

- **[CSS-Tricks](https://css-tricks.com/)** – Praxisnahe Erklärungen & Guides

**Foren:**

- **[Stack Overflow](https://stackoverflow.com/)** – Hilfe bei konkreten Problemen

**Spiele/Übungen**

- **[CSS Battle](https://cssbattle.dev/)**
  Daily challenges aber auch CSS-Kurse

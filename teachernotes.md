# 3-Hour CSS Intro Tutorial

---

## Setup (10 min)

- Create `index.html`, `style.css`, `/images`, `/fonts`
- Emmet `!` in the html file
- Link CSS in `<head>`: `<link rel="stylesheet" href="style.css">`
- Download a serif and sans-serif from either velvetyne, usemodify.com, typotheque.genderfluid.space or , put `.woff2` files in `/fonts`, link with `@font-face` in CSS
- Build the HTML skeleton together:

```html
<body>
  <header>
    <nav>
      <span class="logo">My Blog</span>
      <ul>
        <li><a href="#post1">Post 1</a></li>
        <li><a href="#post2">Post 2</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Things I Think About</h1>
      <p>A blog about whatever.</p>
    </section>

    <div id="post1" class="post">
      <span class="badge">New</span>
      <img src="images/image1.jpg" alt="description" />
      <div class="post-content">
        <h2>First Post Title</h2>
        <p>Some longer text here.</p>
      </div>
    </div>

    <div id="post2" class="post">
      <span class="badge">New</span>
      <img src="images/image2.jpg" alt="description" />
      <div class="post-content">
        <h2>Second Post Title</h2>
        <p>Some longer text here.</p>
      </div>
    </div>
  </main>

  <footer>
    <p>Made by me, 2025</p>
  </footer>
</body>
```

Point out semantic tags & divs with . Show nav anchor links jumping to posts before any CSS exists.

---

## Block 1 — Selectors & First Styles (15 min)

- Show element, class, ID selector on the same element
- Explain specificity in one sentence: ID beats class beats element

```css
body {
  background-color: #f5f0eb;
  color: #1a1a1a;
}

div {
  background-color: white;
} /* element */
.post {
  background-color: white;
} /* class */
#post1 {
  background-color: white;
} /* ID */
```

---

## Block 2 — Box Model (20 min)

- Add one property at a time, pause after each, ask what changed
- Open DevTools after each line and show the box model diagram live

```css
.post {
  width: 600px;
  background-color: white;
  padding: 24px;
  border: 2px solid black;
  margin: 40px auto;
  border-radius: 12px;
}
```

- `padding` pushes inward, `margin` pushes away
- `margin: auto` centers the card
- Show padding shorthand: all sides, top+bottom/left+right, clockwise

---

## Block 3 — Fonts & Typography (20 min)

- Go to fonts.google.com, pick one serif + one sans-serif
- Click Download Family, put `.woff2` files in `/fonts`
- Link with `@font-face`:

```css
@font-face {
  font-family: "MySerif";
  src: url("/fonts/myserif.woff2") format("woff2");
  font-weight: 400;
}

@font-face {
  font-family: "MySans";
  src: url("/fonts/mysans.woff2") format("woff2");
  font-weight: 400;
}
```

- Style headings and body text:

```css
h1,
h2 {
  font-family: "MySerif", serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

p {
  font-family: "MySans", sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 60ch;
}
```

- Show `text-transform`, `letter-spacing` on the logo
- Show outlined text as a fun extra:

```css
h1 {
  -webkit-text-stroke: 2px black;
  color: transparent;
}
```

---

## Block 4 — Images (15 min)

- Show raw unstyled image first — probably broken
- Fix with the two essential rules:

```css
img {
  max-width: 100%;
  display: block;
}
```

- Then crop with `object-fit`:

```css
.post img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px 8px 0 0;
}
```

- Show `cover` vs `contain` live

---

## Block 5 — Flexbox (20 min)

- Start with the nav — obviously broken, fix it with flex:

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 24px;
}
```

- Walk through `justify-content` values live
- Then center the hero:

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 24px;
  gap: 16px;
}
```

- Show `flex-direction: row` vs `column`
- Point out `gap` is cleaner than margins on every child

---

## Block 6 — Position (20 min)

- `relative` — nudge without leaving flow, also anchors absolute children
- `absolute` — finally style the badge:

```css
.post {
  position: relative;
}

.badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: black;
  color: white;
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.75rem;
}
```

- `fixed` — make the nav stick:

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

main {
  padding-top: 80px;
}
```

- Show what happens without `z-index`
- `sticky` — on the h2, scroll slowly and watch it stick then release:

```css
h2 {
  position: sticky;
  top: 80px;
}
```

---

## Block 7 — Hover, Active & Transition (20 min)

- Always build in three steps: base → hover state → add transition

```css
nav a {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  transition: color 0.2s ease;
}

nav a:hover {
  color: #888;
}
```

- Then on the post card:

```css
.post {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.post:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.post:active {
  transform: scale(0.98);
}
```

- Walk through easing values live: `ease`, `ease-in`, `ease-out`, `linear`
- Change duration values so students feel the difference

---

## Block 8 — Animation (15 min)

- Explain `@keyframes` defines the sequence, `animation` applies it
- Hero fade-in on load:

```css
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero h1 {
  animation: fadeUp 0.8s ease-out forwards;
}

.hero p {
  animation: fadeUp 0.8s ease-out 0.2s forwards;
  opacity: 0;
}
```

- Point out the stagger delay on the paragraph
- Looping badge pulse:

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}

.badge {
  animation: pulse 2s ease-in-out infinite;
}
```

- Walk through the shorthand: name, duration, easing, delay, iteration-count
- Change `infinite` to `1` so they see the difference

---

## Block 9 — CSS-Only Interaction with details (15 min)

- Show it working completely unstyled first — browser handles open/close for free
- Style the closed state:

```css
details {
  border-top: 1px solid #e0e0e0;
  margin-top: 16px;
  padding-top: 8px;
}

details summary {
  cursor: pointer;
  font-weight: 600;
  list-style: none;
  padding: 10px 0;
  transition: color 0.2s ease;
}

details summary:hover {
  color: #888;
}
```

- Then target the open state — this is the key moment:

```css
details:open {
  background-color: #fafafa;
  padding: 16px;
  border-radius: 8px;
}

details:open summary {
  color: #888;
  margin-bottom: 12px;
}
```

- Explain the concept: the browser adds and removes the `open` attribute on click, CSS just responds to it — no JavaScript needed
- Mention `details[open]` works identically, just an attribute selector instead of a pseudo-class

---

## Wrap-Up (10 min)

- Show finished blog next to raw HTML from the start
- Connect to the assignment:
  - hover, transition, animation → turn off in print with `@media print`
  - `details` content → visible in print regardless of open state, worth thinking about
  - `@media print` is just another selector context like `:hover` — styles based on a condition, here the medium
- Two questions to start their own work:
  - What do you care about enough to write two real posts about?
  - What needs to change between screen and printed version, and why?

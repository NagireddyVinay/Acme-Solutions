# Acme Solutions — Business Website (Frontend)

## Overview
Simple multi-page business website built with HTML, SASS, and vanilla JavaScript.
Focuses: Responsive layouts (Flexbox & Grid), SASS component library, accessibility, cross-browser basics.

## How to run
1. Download / clone the folder.
2. Open `index.html` in a browser.

## Optional: Compile SASS (if you want to edit styles)
Install `sass`:
```
npm i -g sass
```
Compile:
```
sass scss/main.scss css/main.css --style=compressed
```

## Files
- `index.html`, `about.html`, `services.html`, `contact.html`
- `scss/` - SASS source files
- `css/main.css` - compiled
- `js/main.js` - front-end interactions
- `assets/` - images and logo

## Accessibility notes
- Skip link included
- ARIA attributes on nav and slider
- Form uses `aria-live` status
- Color contrast: check with a contrast tool and adjust tokens in `_variables.scss`

/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/Orbitron-Regular.ttf */ "./src/font/Orbitron-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    /* https://fonts.google.com/specimen/Orbitron */
    font-family: "Orbitron";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("TrueType");
}

/* ! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com */

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

html {
      font-family: "Orbitron", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;
    }

*, ::before, ::after {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
    --tw-ring-shadow: 0 0 rgba(0,0,0,0);
    --tw-shadow: 0 0 rgba(0,0,0,0);
    --tw-shadow-colored: 0 0 rgba(0,0,0,0);
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  ;
}

::backdrop {
    --tw-border-spacing-x: 0;
    --tw-border-spacing-y: 0;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    --tw-pan-x:  ;
    --tw-pan-y:  ;
    --tw-pinch-zoom:  ;
    --tw-scroll-snap-strictness: proximity;
    --tw-gradient-from-position:  ;
    --tw-gradient-via-position:  ;
    --tw-gradient-to-position:  ;
    --tw-ordinal:  ;
    --tw-slashed-zero:  ;
    --tw-numeric-figure:  ;
    --tw-numeric-spacing:  ;
    --tw-numeric-fraction:  ;
    --tw-ring-inset:  ;
    --tw-ring-offset-width: 0px;
    --tw-ring-offset-color: #fff;
    --tw-ring-color: rgba(59, 130, 246, 0.5);
    --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
    --tw-ring-shadow: 0 0 rgba(0,0,0,0);
    --tw-shadow: 0 0 rgba(0,0,0,0);
    --tw-shadow-colored: 0 0 rgba(0,0,0,0);
    --tw-blur:  ;
    --tw-brightness:  ;
    --tw-contrast:  ;
    --tw-grayscale:  ;
    --tw-hue-rotate:  ;
    --tw-invert:  ;
    --tw-saturate:  ;
    --tw-sepia:  ;
    --tw-drop-shadow:  ;
    --tw-backdrop-blur:  ;
    --tw-backdrop-brightness:  ;
    --tw-backdrop-contrast:  ;
    --tw-backdrop-grayscale:  ;
    --tw-backdrop-hue-rotate:  ;
    --tw-backdrop-invert:  ;
    --tw-backdrop-opacity:  ;
    --tw-backdrop-saturate:  ;
    --tw-backdrop-sepia:  ;
    --tw-contain-size:  ;
    --tw-contain-layout:  ;
    --tw-contain-paint:  ;
    --tw-contain-style:  ;
}
.absolute {
    position: absolute;
}
.right-3 {
    right: 0.75rem;
}
.top-1\\/2 {
    top: 50%;
}
.top-2 {
    top: 0.5rem;
}
.mb-2 {
    margin-bottom: 0.5rem;
}
.mr-\\[45px\\] {
    margin-right: 45px;
}
.mt-0 {
    margin-top: 0px;
}
.mt-0\\.5 {
    margin-top: 0.125rem;
}
.flex {
    display: flex;
}
.grid {
    display: grid;
}
.hidden {
    display: none;
}
.h-10 {
    height: 2.5rem;
}
.h-8 {
    height: 2rem;
}
.h-\\[10vh\\] {
    height: 10vh;
}
.h-\\[15vh\\] {
    height: 15vh;
}
.h-\\[20\\%\\] {
    height: 20%;
}
.h-\\[200px\\] {
    height: 200px;
}
.h-\\[20vh\\] {
    height: 20vh;
}
.h-\\[28vh\\] {
    height: 28vh;
}
.h-\\[46vh\\] {
    height: 46vh;
}
.h-\\[50vh\\] {
    height: 50vh;
}
.h-full {
    height: 100%;
}
.h-screen {
    height: 100vh;
}
.w-8 {
    width: 2rem;
}
.w-\\[150px\\] {
    width: 150px;
}
.w-\\[20vh\\] {
    width: 20vh;
}
.w-\\[28vh\\] {
    width: 28vh;
}
.w-\\[30\\%\\] {
    width: 30%;
}
.w-\\[30vh\\] {
    width: 30vh;
}
.w-\\[400px\\] {
    width: 400px;
}
.w-\\[46vh\\] {
    width: 46vh;
}
.w-\\[500px\\] {
    width: 500px;
}
.w-\\[50vh\\] {
    width: 50vh;
}
.w-full {
    width: 100%;
}
.w-screen {
    width: 100vw;
}
.translate-y-\\[-50\\%\\] {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.select-none {
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
}
.grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
}
.flex-row {
    flex-direction: row;
}
.flex-row-reverse {
    flex-direction: row-reverse;
}
.flex-col {
    flex-direction: column;
}
.items-center {
    align-items: center;
}
.justify-center {
    justify-content: center;
}
.justify-between {
    justify-content: space-between;
}
.justify-around {
    justify-content: space-around;
}
.justify-evenly {
    justify-content: space-evenly;
}
.gap-3 {
    gap: 0.75rem;
}
.gap-\\[1vw\\] {
    gap: 1vw;
}
.gap-\\[20px\\] {
    gap: 20px;
}
.gap-\\[5vw\\] {
    gap: 5vw;
}
.self-end {
    align-self: flex-end;
}
.rounded-2xl {
    border-radius: 1rem;
}
.rounded-lg {
    border-radius: 0.5rem;
}
.rounded-md {
    border-radius: 0.375rem;
}
.rounded-b-lg {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
}
.rounded-t-lg {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}
.rounded-tl-lg {
    border-top-left-radius: 0.5rem;
}
.rounded-tr-lg {
    border-top-right-radius: 0.5rem;
}
.border-2 {
    border-width: 2px;
}
.border-slate-400 {
    --tw-border-opacity: 1;
    border-color: rgba(148, 163, 184, 1);
    border-color: rgba(148, 163, 184, var(--tw-border-opacity));
}
.bg-slate-200 {
    --tw-bg-opacity: 1;
    background-color: rgba(226, 232, 240, 1);
    background-color: rgba(226, 232, 240, var(--tw-bg-opacity));
}
.bg-slate-400 {
    --tw-bg-opacity: 1;
    background-color: rgba(148, 163, 184, 1);
    background-color: rgba(148, 163, 184, var(--tw-bg-opacity));
}
.bg-slate-600 {
    --tw-bg-opacity: 1;
    background-color: rgba(71, 85, 105, 1);
    background-color: rgba(71, 85, 105, var(--tw-bg-opacity));
}
.bg-transparent {
    background-color: transparent;
}
.bg-gradient-to-l {
    background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-slate-400 {
    --tw-gradient-from: #94a3b8 var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(148, 163, 184, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-slate-500 {
    --tw-gradient-from: #64748b var(--tw-gradient-from-position);
    --tw-gradient-to: rgba(100, 116, 139, 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-slate-500 {
    --tw-gradient-to: #64748b var(--tw-gradient-to-position);
}
.to-slate-600 {
    --tw-gradient-to: #475569 var(--tw-gradient-to-position);
}
.p-3 {
    padding: 0.75rem;
}
.p-\\[1vh\\] {
    padding: 1vh;
}
.p-\\[2vh\\] {
    padding: 2vh;
}
.px-\\[2vh\\] {
    padding-left: 2vh;
    padding-right: 2vh;
}
.pt-\\[1\\.5vh\\] {
    padding-top: 1.5vh;
}
.indent-2 {
    text-indent: 0.5rem;
}
.text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
}
.text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
}
.text-5xl {
    font-size: 3rem;
    line-height: 1;
}
.text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
}
.text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
}
.text-green-700 {
    --tw-text-opacity: 1;
    color: rgba(21, 128, 61, 1);
    color: rgba(21, 128, 61, var(--tw-text-opacity));
}
.text-red-700 {
    --tw-text-opacity: 1;
    color: rgba(185, 28, 28, 1);
    color: rgba(185, 28, 28, var(--tw-text-opacity));
}
.text-slate-200 {
    --tw-text-opacity: 1;
    color: rgba(226, 232, 240, 1);
    color: rgba(226, 232, 240, var(--tw-text-opacity));
}
.opacity-80 {
    opacity: 0.8;
}
.outline {
    outline-style: solid;
}
.outline-offset-\\[-4\\.5px\\] {
    outline-offset: -4.5px;
}
.outline-offset-\\[-4px\\] {
    outline-offset: -4px;
}
.outline-green-700 {
    outline-color: #15803d;
}
.outline-red-700 {
    outline-color: #b91c1c;
}
.outline-slate-600 {
    outline-color: #475569;
}

.tw-box-shadow-1110 {
    box-shadow: 1px 1px 10px hsl(0, 0%, 30%);
}

.tw-text-shadow-1110 {
    text-shadow: 1px 1px 10px black;
}

.backdrop\\:backdrop-blur-sm::backdrop {
    --tw-backdrop-blur: blur(4px);
    -webkit-backdrop-filter: blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.hover\\:bg-slate-400:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(148, 163, 184, 1);
    background-color: rgba(148, 163, 184, var(--tw-bg-opacity));
}

.hover\\:bg-slate-500:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(100, 116, 139, 1);
    background-color: rgba(100, 116, 139, var(--tw-bg-opacity));
}

.hover\\:text-slate-200:hover {
    --tw-text-opacity: 1;
    color: rgba(226, 232, 240, 1);
    color: rgba(226, 232, 240, var(--tw-text-opacity));
}

.hover\\:outline-dashed:hover {
    outline-style: dashed;
}

.hover\\:outline-yellow-500:hover {
    outline-color: #eab308;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    /* https://fonts.google.com/specimen/Orbitron */\n    font-family: \"Orbitron\";\n    src: url(./font/Orbitron-Regular.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n    html {\n      font-family: \"Orbitron\", system-ui, sans-serif;\n    }\n}\n\n.tw-box-shadow-1110 {\n    box-shadow: 1px 1px 10px hsl(0, 0%, 30%);\n}\n\n.tw-text-shadow-1110 {\n    text-shadow: 1px 1px 10px black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/module-back-end/board.js":
/*!**************************************!*\
  !*** ./src/module-back-end/board.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship.js */ "./src/module-back-end/ship.js");
const getRandomInt = __webpack_require__(/*! ./helper.js */ "./src/module-back-end/helper.js");

class Board {
    constructor() {
        this.height = 10;
        this.ships = this.createShips();
        this.mapShips = this.createMapShips();
        this.mapAttacks = new Map();
    }

    createShips() {
        const carrier = new Ship("Carrier", 5);
        const battleship = new Ship("Battleship", 4);
        const destroyer = new Ship("Destroyer", 3);
        const submarine = new Ship("Submarine", 3);
        const patrolBoat = new Ship("Patrol Boat", 2);

        return [carrier, battleship, destroyer, submarine, patrolBoat];
    }

    createMapShips() {
        const map = new Map();

        this.ships.forEach(ship => {
            const coordinates = this.getCoordinates(ship, map);
            ship.setCoordinates(coordinates);
            coordinates.forEach(coordinate => {
                map.set(`${coordinate[0]}${coordinate[1]}`, ship);
            })
        })

        return map;
    }

    getCoordinates(ship, map) {
        let coordinates = null;

        while (!this.isValidCoordinates(coordinates, map)) {
            coordinates = this.generateCoordinates(ship.axis, ship.length);
        }
        
        return coordinates;
    }

    generateCoordinates(axis, length) {
        let x = getRandomInt(this.height);
        let y = getRandomInt(this.height);
        let head = [x, y];
        let coordinates = [head];

        if (axis === "x") {
            for (let i = 0; i < length - 1; i++) {
                x += 1;
                coordinates.push([x, y]);
            }
        } else {
            for (let i = 0; i < length - 1; i++) {
                y -= 1;
                coordinates.push([x, y]);
            }
        }

        return coordinates;
    }

    isValidCoordinates(coordinates, map) {
        if (coordinates === null) return false;

        let mapShips = null;
        if (arguments.length === 2) mapShips = map;
        else mapShips = this.mapShips;

        let bool = [];

        coordinates.forEach(coordinate => {
            let x = coordinate[0];
            let y = coordinate[1];

            if (this.isOutOfBound(x, y) || mapShips.has(`${x}${y}`)) {
                bool.push(false);
            }
        })

        if (bool.includes(false)) return false;
        return true;
    }

    isOutOfBound(x, y) {
        if (x > this.height - 1 || x < 0) return true;
        if (y > this.height - 1 || y < 0) return true;
        return false;
    }

    receiveAttack(x, y) {
        const key = `${x}${y}`;
        const ship = this.mapShips.get(key);

        if (Boolean(ship)) {
            ship.hit();
            this.mapAttacks.set(key, 1);
        } else this.mapAttacks.set(key, 0);
    }
}

module.exports = Board;

/***/ }),

/***/ "./src/module-back-end/helper.js":
/*!***************************************!*\
  !*** ./src/module-back-end/helper.js ***!
  \***************************************/
/***/ ((module) => {

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

module.exports = getRandomInt;

/***/ }),

/***/ "./src/module-back-end/player.js":
/*!***************************************!*\
  !*** ./src/module-back-end/player.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Board = __webpack_require__(/*! ./board.js */ "./src/module-back-end/board.js");
const getRandomInt = __webpack_require__(/*! ./helper.js */ "./src/module-back-end/helper.js");

class Player {
    constructor(name) {
        this.name = name;
        this.board = new Board();
        this.ships = this.board.ships;
        this.life = this.ships.length;
    }

    updateLife() {
        let life = 0;
        this.ships.forEach(ship => {
            if (!ship.isSunk()) life += 1;
        })
        this.life = life;
    }

    receiveAttack([x, y]) {
        this.board.receiveAttack(x, y);
        this.updateLife();
    }

    // AI
    giveAttack(map) {
        let attack = null;
        while (!this.isValidCoordinate(attack, map)) {
            attack = this.generateAttack();
        }
        return attack;
    }

    generateAttack() {
        const height = this.board.height;
        let x = getRandomInt(height);
        let y = getRandomInt(height);
        return [x, y];
    }

    isValidCoordinate(coordinate, map) {
        if (coordinate === null) return false;
        if (map.has(`${coordinate[0]}${coordinate[1]}`)) return false;
        return true;
    }
}

module.exports = Player;

/***/ }),

/***/ "./src/module-back-end/ship.js":
/*!*************************************!*\
  !*** ./src/module-back-end/ship.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const getRandomInt = __webpack_require__(/*! ./helper.js */ "./src/module-back-end/helper.js");

class Ship {
    constructor(name, length) {
        this.name = name;
        this.axis = this.setAxis();
        this.length = length;
        this.coordinates = null;
        this.hp = this.length;
        this.alive = true;
    }

    setAxis() {
        const n = getRandomInt(2);
        if (n === 0) return "x";
        return "y";
    }

    changeAxis() {
        if (this.axis === "x") this.axis = "y";
        else this.axis = "x";
    }

    setCoordinates(coordinates) {
        this.coordinates = coordinates;
    }

    hit() {
        this.hp -= 1;
        if (this.hp === 0) this.alive = false;
    }

    isSunk() {
        return !this.alive;
    }
}

module.exports = Ship;

/***/ }),

/***/ "./src/module-front-end/blocker.js":
/*!*****************************************!*\
  !*** ./src/module-front-end/blocker.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blocker: () => (/* binding */ blocker)
/* harmony export */ });
const blocker = (() => {
    const blockBoard = document.querySelector("#block-board");
    const blockScreen = document.querySelector("#block-screen");

    function activateBlock(string) {
        let element = null;
        if (string === "board") element = blockBoard;
        else if (string === "screen") element = blockScreen;
        element.classList.remove("hidden");
    }

    function deactivateBlock(string) {
        let element = null;
        if (string === "board") element = blockBoard;
        else if (string === "screen") element = blockScreen;
        element.classList.add("hidden");
    }

    function reset() {
        blockBoard.classList.add("hidden");
        blockScreen.classList.add("hidden");
    }

    return { activateBlock, deactivateBlock, reset };
})()



/***/ }),

/***/ "./src/module-front-end/board-dom.js":
/*!*******************************************!*\
  !*** ./src/module-front-end/board-dom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardDOM: () => (/* binding */ boardDOM)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/module-front-end/game.js");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocker */ "./src/module-front-end/blocker.js");



const boardDOM = (() => {
    const boardShip1 = document.querySelector("#board-ship-1");
    const boardShip2 = document.querySelector("#board-ship-2");
    const boardAttack1 = document.querySelector("#board-attack-1");
    const boardAttack2 = document.querySelector("#board-attack-2");
    
    const boardShipWrapper1 = document.querySelector("#board-ship-wrapper-1");
    const boardShipWrapper2 = document.querySelector("#board-ship-wrapper-2");
    const boardAttackWrapper1 = document.querySelector("#board-attack-wrapper-1");
    const boardAttackWrapper2 = document.querySelector("#board-attack-wrapper-2");

    const boardShipWrappers = [boardShipWrapper1, boardShipWrapper2];
    const boardAttackWrappers = [boardAttackWrapper1, boardAttackWrapper2];

    function initBoard(mode, player1, player2) {
        _createBoardShip(player1, boardShip1);

        if (mode === 1) _createEmptyBoardShip(player2, boardShip2);
        else _createBoardShip(player2, boardShip2);

        _createBoardAttack(player1, boardAttack1, player2.board.mapShips, boardShip2);
        _createBoardAttack(player2, boardAttack2, player1.board.mapShips, boardShip1);
    }

    function activate(turn) {
        boardShipWrappers[turn].classList.remove("hidden");
        boardAttackWrappers[turn].classList.remove("hidden");
    }

    function deactivate(notTurn) {
        boardShipWrappers[notTurn].classList.add("hidden");
        boardAttackWrappers[notTurn].classList.add("hidden");
    }

    function simulateAIClick([x, y], turn) {
        const board = document.querySelector(`#board-attack-${turn + 1}`);
        _getBox(`${x}${y}`, board).click();
    }

    function reset() {
        const boards = [boardShip1, boardShip2, boardAttack1, boardAttack2];
        boards.forEach(board => {
            while (board.children.length > 0) board.removeChild(board.lastChild);
        })
    }

    // Private functions
    function _createBoardShip(player, board) {
        const height = player.board.height;
        for (let i = 0; i < Math.pow(height, 2); i++) {
            const box = document.createElement("div");
            box.classList.add("border-2", "flex", "justify-center", "items-center", "outline-offset-[-4.5px]");
            box.id = _assignBoxID(i, height);
            box.textContent = _assignShipText(box, player.board.mapShips);
            board.append(box);
        }
    }

    function _createEmptyBoardShip(player, board) {
        const height = player.board.height;
        for (let i = 0; i < Math.pow(height, 2); i++) {
            const box = document.createElement("div");
            box.classList.add("border-2", "outline-offset-[-4.5px]");
            box.id = _assignBoxID(i, height);
            board.append(box);
        }
    }

    function _createBoardAttack(player, board, mapShipEnemy, boardShipEnemy) {
        const height = player.board.height;
        for (let i = 0; i < Math.pow(height, 2); i++) {
            const box = document.createElement("div");
            box.classList.add("border-2", "flex", "justify-center", "items-center", "outline-offset-[-4px]", "hover:outline-dashed", "hover:outline-yellow-500");
            box.id = _assignBoxID(i, height);
            _addBoxListener(box, mapShipEnemy, boardShipEnemy);
            board.append(box);
        }
    }

    function _assignBoxID(i, height) {
        const x = i % height;
        const y = -(Math.floor(i / height) - (height - 1));
        return `${x}${y}`;
    }

    function _assignShipText(box, map) {
        const ship = map.get(box.id);
        if (!ship) return "";
        box.classList.add("bg-slate-600");
        return ship.name[0]; 
    }

    function _addBoxListener(box, mapShipEnemy, boardShipEnemy) {
        box.addEventListener("click", function() {
            _blocker__WEBPACK_IMPORTED_MODULE_1__.blocker.activateBlock("board");
            box.classList.remove("hover:outline-dashed", "hover:outline-yellow-500");
            
            if (mapShipEnemy.has(box.id)) {
                _placeHitMark(box, 1);
                _placeHitMark(_getBox(box.id, boardShipEnemy), 0);
            } else {
                _placeMissMark(box, 1);
                _placeMissMark(_getBox(box.id, boardShipEnemy), 0);
            }

            _game__WEBPACK_IMPORTED_MODULE_0__.game.update(box.id);
        }, {once: true})
    }

    function _getBox(boxID, board) {
        return board.querySelector(`[id = "${boxID}"]`);
    }

    function _placeHitMark(box, n) {
        box.classList.add("outline", "outline-red-700", "text-red-700");
        if (n) {
            box.classList.add("text-2xl");
            box.textContent = "!";
        }
    }

    function _placeMissMark(box, n) {
        box.classList.add("outline", "outline-green-700", "text-green-700");
        if (n) {
            box.classList.add("text-2xl");
            box.textContent = "/";
        }
    }

    return { initBoard, activate, deactivate, simulateAIClick, reset };
})()



/***/ }),

/***/ "./src/module-front-end/dom.js":
/*!*************************************!*\
  !*** ./src/module-front-end/dom.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dom: () => (/* binding */ dom)
/* harmony export */ });
/* harmony import */ var _icon_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icon/github-mark-white.png */ "./src/icon/github-mark-white.png");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab */ "./src/module-front-end/tab.js");
/* harmony import */ var _board_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-dom */ "./src/module-front-end/board-dom.js");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocker */ "./src/module-front-end/blocker.js");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome */ "./src/module-front-end/welcome.js");







const dom = (() => {
    const test = document.querySelector("#test");
    const end = document.querySelector("#main-end");
    const rematch = document.querySelector("#button-rematch");
    const mainMenu = document.querySelector("#button-main-menu");

    let mode = null;

    function init(n, ... players) {
        mode = n;
        _initImg();
        _tab__WEBPACK_IMPORTED_MODULE_1__.tab.init(... players);
        _board_dom__WEBPACK_IMPORTED_MODULE_2__.boardDOM.initBoard(mode, ... players);

        // Test
        test.onclick = () => {
            _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.activateBlock("screen");
            end.classList.remove("hidden");
        }

        rematch.onclick = () => {
            _reset();
            _welcome__WEBPACK_IMPORTED_MODULE_4__.welcome.rematch(mode);
        }

        mainMenu.onclick = () => {
            _reset();
            _welcome__WEBPACK_IMPORTED_MODULE_4__.welcome.show();
        }
    }

    function activatePlayer(turn, notTurn) {
        _deactivate(notTurn);
        _activate(turn);
    }

    // Private functions
    function _initImg() {
        const imgGitHub = document.querySelector("#icon-github");
        imgGitHub.src = _icon_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__;
    }

    function _activate(turn) {
        _tab__WEBPACK_IMPORTED_MODULE_1__.tab.activate(turn);
        _board_dom__WEBPACK_IMPORTED_MODULE_2__.boardDOM.activate(turn);
    }

    function _deactivate(notTurn) {
        _tab__WEBPACK_IMPORTED_MODULE_1__.tab.deactivate(notTurn);
        _board_dom__WEBPACK_IMPORTED_MODULE_2__.boardDOM.deactivate(notTurn);
    }

    function _reset() {
        _board_dom__WEBPACK_IMPORTED_MODULE_2__.boardDOM.reset();
        _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.reset();
        end.classList.add("hidden");
    }

    return { init, activatePlayer };
})()



/***/ }),

/***/ "./src/module-front-end/game.js":
/*!**************************************!*\
  !*** ./src/module-front-end/game.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/module-front-end/dom.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab */ "./src/module-front-end/tab.js");
/* harmony import */ var _board_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board-dom */ "./src/module-front-end/board-dom.js");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocker */ "./src/module-front-end/blocker.js");





const Player = __webpack_require__(/*! ../module-back-end/player.js */ "./src/module-back-end/player.js");

const game = (() => {
    let players = null;
    let turn = null;
    let notTurn = null;

    function createGame(name1, name2, mode) {
        _initPlayers(name1, name2);
        _dom__WEBPACK_IMPORTED_MODULE_0__.dom.init(mode, ... players);
        _AImove();
    }

    function update(id) {
        const xy = id.split("");
        players[notTurn].receiveAttack([+xy[0], +xy[1]]);
        _tab__WEBPACK_IMPORTED_MODULE_1__.tab.updateLife(players[notTurn], notTurn);
        setTimeout(() => {
            if (_isGame()) {
                alert(`${players[turn].name} wins!`);
                return;
            };
    
            _updateTurn();
            _dom__WEBPACK_IMPORTED_MODULE_0__.dom.activatePlayer(turn, notTurn);
            if (players[turn].name !== "AI") _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.deactivateBlock("board");
    
            _AImove();
        }, 1000)
    }

    // Private functions
    function _initPlayers(name1, name2) {
        const player1 = new Player(name1);
        const player2 = new Player(name2);
        players = [player1, player2];
        turn = 0;
        notTurn = 1;
    }
    
    function _AImove() {
        if (players[turn].name === "AI") {
            setTimeout(() => {
                const map = players[notTurn].board.mapAttacks;
                const attack = players[turn].giveAttack(map);
                _board_dom__WEBPACK_IMPORTED_MODULE_2__.boardDOM.simulateAIClick(attack, turn);
            }, 1000);
        }
    }

    function _isGame() {
        for (const player of players) {
            if (player.life === 0) return true;
        }
        return false;
    }

    function _updateTurn() {
        const temp = turn;
        turn = +!turn;
        notTurn = temp;
    }

    return { createGame, update };
})()



/***/ }),

/***/ "./src/module-front-end/tab.js":
/*!*************************************!*\
  !*** ./src/module-front-end/tab.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tab: () => (/* binding */ tab)
/* harmony export */ });
const tab = (() => {
    const tab1 = document.querySelector("#tab-1");
    const tab2 = document.querySelector("#tab-2");
    const name1= document.querySelector("#name-1");
    const name2= document.querySelector("#name-2");
    const life1 = document.querySelector("#life-1");
    const life2 = document.querySelector("#life-2");

    const tabs = [tab1, tab2];
    const lives = [life1, life2];

    function init(player1, player2) {
        _initName(player1, name1);
        _initName(player2, name2);
        updateLife(player1, 0);
        updateLife(player2, 1);
    }

    function updateLife(player, turn) {
        lives[turn].textContent = player.life;
    }

    function activate(turn) {
        tabs[turn].classList.remove("mb-2", "bg-slate-400");
        tabs[turn].classList.add("bg-slate-200");
    }

    function deactivate(notTurn) {
        tabs[notTurn].classList.remove("bg-slate-200");
        tabs[notTurn].classList.add("mb-2", "bg-slate-400");
    }

    // Private functions
    function _initName(player, name) {
        name.textContent = player.name;
    }

    return { init, updateLife, activate, deactivate };
})()



/***/ }),

/***/ "./src/module-front-end/welcome.js":
/*!*****************************************!*\
  !*** ./src/module-front-end/welcome.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   welcome: () => (/* binding */ welcome)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/module-front-end/game.js");


const welcome = (() => {
    const screenWelcome = document.querySelector("#welcome");
    const screenMain = document.querySelector("#main");
    
    const buttonPVAI = document.querySelector("#button-pvai");
    const buttonPVP = document.querySelector("#button-pvp");
    
    const dialogPVAI = document.querySelector("#dialog-pvai");
    const namePVAI1 = document.querySelector("#name-pvai-1");
    const okPVAI = document.querySelector("#ok-pvai");
    const closePVAI = document.querySelector("#close-pvai");

    const dialogPVP = document.querySelector("#dialog-pvp");
    const namePVP1 = document.querySelector("#name-pvp-1");
    const namePVP2 = document.querySelector("#name-pvp-1");
    const okPVP = document.querySelector("#ok-pvp");
    const closePVP = document.querySelector("#close-pvp");
    
    function init() {
        _initPVAI();
        _initPVP();
    }

    function show() {
        screenWelcome.classList.remove("hidden");
    }

    function rematch(mode) {
        if (mode === 1) okPVAI.click();
        else if (mode === 2) okPVP.click();
    }

    // Private functions
    function _initPVAI() {
        buttonPVAI.onclick = () => { dialogPVAI.showModal(); }
        closePVAI.onclick = () => { dialogPVAI.close(); }
        okPVAI.onclick = () => {
            _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVAI1.value || "Player 1", "AI", 1);
            namePVAI1.value = "";
            screenWelcome.classList.add("hidden");
            screenMain.classList.remove("hidden");
        }
    }

    function _initPVP() {
        buttonPVP.onclick = () => { dialogPVP.showModal(); }
        closePVP.onclick = () => { dialogPVP.close(); }
        okPVP.onclick = () => {
            _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVP1.value || "Player 1", namePVP2.value || "Player 2", 2);
            namePVP1.value = "";
            namePVP2.value = "";
            screenWelcome.classList.add("hidden");
            screenMain.classList.remove("hidden");
        }
    }

    return { init, show, rematch }
})()



/***/ }),

/***/ "./src/font/Orbitron-Regular.ttf":
/*!***************************************!*\
  !*** ./src/font/Orbitron-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1f498717ba081693370a.ttf";

/***/ }),

/***/ "./src/icon/github-mark-white.png":
/*!****************************************!*\
  !*** ./src/icon/github-mark-white.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _module_front_end_welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-front-end/welcome */ "./src/module-front-end/welcome.js");



_module_front_end_welcome__WEBPACK_IMPORTED_MODULE_1__.welcome.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxzQ0FBc0Msc0ZBQXNGLGlFQUFpRSxHQUFHLG1CQUFtQix1QkFBdUIsc0JBQXNCLGlCQUFpQixZQUFZLHlEQUF5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V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0M7O0FBRXJELDhEQUFPLFEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzkwMTEiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL2JvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtYmFjay1lbmQvaGVscGVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtYmFjay1lbmQvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtYmFjay1lbmQvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC9ibG9ja2VyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL2JvYXJkLWRvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC9kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvZ2FtZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC90YWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvd2VsY29tZS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250L09yYml0cm9uLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vT3JiaXRyb24gKi9cbiAgICBmb250LWZhbWlseTogXCJPcmJpdHJvblwiO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIlRydWVUeXBlXCIpO1xufVxuXG4vKiAhIHRhaWx3aW5kY3NzIHYzLjQuMyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi9cblxuLypcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcbiovXG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xufVxuXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICAtLXR3LWNvbnRlbnQ6ICcnO1xufVxuXG4vKlxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYHNhbnNcXGAgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZlYXR1cmUtc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LXZhcmlhdGlvbi1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNy4gRGlzYWJsZSB0YXAgaGlnaGxpZ2h0cyBvbiBpT1NcbiovXG5cbmh0bWwsXG46aG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgLW8tdGFiLXNpemU6IDQ7XG4gICAgIHRhYi1zaXplOiA0OyAvKiAzICovXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIFVidW50dSwgQ2FudGFyZWxsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjsgLyogNCAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IG5vcm1hbDsgLyogNSAqL1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogbm9ybWFsOyAvKiA2ICovXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDcgKi9cbn1cblxuLypcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBcXGBodG1sXFxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBcXGBodG1sXFxgIGVsZW1lbnQuXG4qL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXG4qL1xuXG5ociB7XG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuKi9cblxuYWJicjp3aGVyZShbdGl0bGVdKSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XG59XG5cbi8qXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxuKi9cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxuLypcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXG4qL1xuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXG4qL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLypcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgbW9ub1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuMi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuMy4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG40LiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuY29kZSxcbmtiZCxcbnNhbXAsXG5wcmUge1xuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiAyICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDMgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDQgKi9cbn1cblxuLypcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLypcblByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXG4qL1xuXG50YWJsZSB7XG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXG59XG5cbi8qXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBmb250LXdlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xuICBsZXR0ZXItc3BhY2luZzogaW5oZXJpdDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxuKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cbiovXG5cbmJ1dHRvbixcbmlucHV0OndoZXJlKFt0eXBlPSdidXR0b24nXSksXG5pbnB1dDp3aGVyZShbdHlwZT0ncmVzZXQnXSksXG5pbnB1dDp3aGVyZShbdHlwZT0nc3VibWl0J10pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xufVxuXG4vKlxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cbiovXG5cbjotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG5cbi8qXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgXFxgOmludmFsaWRcXGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcbiovXG5cbjotbW96LXVpLWludmFsaWQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXG4qL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLypcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4qL1xuXG5bdHlwZT0nc2VhcmNoJ10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKlxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuKi9cblxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4qL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4qL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKlxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxuKi9cblxuYmxvY2txdW90ZSxcbmRsLFxuZGQsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5ocixcbmZpZ3VyZSxcbnAsXG5wcmUge1xuICBtYXJnaW46IDA7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5sZWdlbmQge1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbCxcbnVsLFxubWVudSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblJlc2V0IGRlZmF1bHQgc3R5bGluZyBmb3IgZGlhbG9ncy5cbiovXG5cbmRpYWxvZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cbiovXG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLypcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxuKi9cblxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIsIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xufVxuXG5pbnB1dDo6cGxhY2Vob2xkZXIsXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbi8qXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxuKi9cblxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxuKi9cblxuOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vKlxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBcXGBkaXNwbGF5OiBibG9ja1xcYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbjIuIEFkZCBcXGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXFxgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cbiovXG5cbmltZyxcbnN2ZyxcbnZpZGVvLFxuY2FudmFzLFxuYXVkaW8sXG5pZnJhbWUsXG5lbWJlZCxcbm9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cbn1cblxuLypcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcbiovXG5cbmltZyxcbnZpZGVvIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qIE1ha2UgZWxlbWVudHMgd2l0aCB0aGUgSFRNTCBoaWRkZW4gYXR0cmlidXRlIHN0YXkgaGlkZGVuIGJ5IGRlZmF1bHQgKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gICAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgICAtLXR3LXJvdGF0ZTogMDtcbiAgICAtLXR3LXNrZXcteDogMDtcbiAgICAtLXR3LXNrZXcteTogMDtcbiAgICAtLXR3LXNjYWxlLXg6IDE7XG4gICAgLS10dy1zY2FsZS15OiAxO1xuICAgIC0tdHctcGFuLXg6ICA7XG4gICAgLS10dy1wYW4teTogIDtcbiAgICAtLXR3LXBpbmNoLXpvb206ICA7XG4gICAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gICAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAgIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAgIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gICAgLS10dy1vcmRpbmFsOiAgO1xuICAgIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAgIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gICAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gICAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAgIC0tdHctcmluZy1pbnNldDogIDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gICAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAgIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gICAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gICAgLS10dy1ibHVyOiAgO1xuICAgIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgICAtLXR3LWNvbnRyYXN0OiAgO1xuICAgIC0tdHctZ3JheXNjYWxlOiAgO1xuICAgIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgICAtLXR3LWludmVydDogIDtcbiAgICAtLXR3LXNhdHVyYXRlOiAgO1xuICAgIC0tdHctc2VwaWE6ICA7XG4gICAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gICAgLS10dy1jb250YWluLXNpemU6ICA7XG4gICAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gICAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuXG46OmJhY2tkcm9wIHtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXg6IDA7XG4gICAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAgIC0tdHctdHJhbnNsYXRlLXg6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteTogMDtcbiAgICAtLXR3LXJvdGF0ZTogMDtcbiAgICAtLXR3LXNrZXcteDogMDtcbiAgICAtLXR3LXNrZXcteTogMDtcbiAgICAtLXR3LXNjYWxlLXg6IDE7XG4gICAgLS10dy1zY2FsZS15OiAxO1xuICAgIC0tdHctcGFuLXg6ICA7XG4gICAgLS10dy1wYW4teTogIDtcbiAgICAtLXR3LXBpbmNoLXpvb206ICA7XG4gICAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XG4gICAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAgIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xuICAgIC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb246ICA7XG4gICAgLS10dy1vcmRpbmFsOiAgO1xuICAgIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xuICAgIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XG4gICAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gICAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xuICAgIC0tdHctcmluZy1pbnNldDogIDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gICAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcbiAgICAtLXR3LXJpbmctY29sb3I6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjUpO1xuICAgIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXJpbmctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gICAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gICAgLS10dy1ibHVyOiAgO1xuICAgIC0tdHctYnJpZ2h0bmVzczogIDtcbiAgICAtLXR3LWNvbnRyYXN0OiAgO1xuICAgIC0tdHctZ3JheXNjYWxlOiAgO1xuICAgIC0tdHctaHVlLXJvdGF0ZTogIDtcbiAgICAtLXR3LWludmVydDogIDtcbiAgICAtLXR3LXNhdHVyYXRlOiAgO1xuICAgIC0tdHctc2VwaWE6ICA7XG4gICAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gICAgLS10dy1jb250YWluLXNpemU6ICA7XG4gICAgLS10dy1jb250YWluLWxheW91dDogIDtcbiAgICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gICAgLS10dy1jb250YWluLXN0eWxlOiAgO1xufVxuLmFic29sdXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucmlnaHQtMyB7XG4gICAgcmlnaHQ6IDAuNzVyZW07XG59XG4udG9wLTFcXFxcLzIge1xuICAgIHRvcDogNTAlO1xufVxuLnRvcC0yIHtcbiAgICB0b3A6IDAuNXJlbTtcbn1cbi5tYi0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubXItXFxcXFs0NXB4XFxcXF0ge1xuICAgIG1hcmdpbi1yaWdodDogNDVweDtcbn1cbi5tdC0wIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG4ubXQtMFxcXFwuNSB7XG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG59XG4uZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5oLTEwIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5oLTgge1xuICAgIGhlaWdodDogMnJlbTtcbn1cbi5oLVxcXFxbMTB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDEwdmg7XG59XG4uaC1cXFxcWzE1dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuLmgtXFxcXFsyMFxcXFwlXFxcXF0ge1xuICAgIGhlaWdodDogMjAlO1xufVxuLmgtXFxcXFsyMDBweFxcXFxdIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuLmgtXFxcXFsyMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMjB2aDtcbn1cbi5oLVxcXFxbMjh2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDI4dmg7XG59XG4uaC1cXFxcWzQ2dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiA0NnZoO1xufVxuLmgtXFxcXFs1MHZoXFxcXF0ge1xuICAgIGhlaWdodDogNTB2aDtcbn1cbi5oLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5oLXNjcmVlbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi53LTgge1xuICAgIHdpZHRoOiAycmVtO1xufVxuLnctXFxcXFsxNTBweFxcXFxdIHtcbiAgICB3aWR0aDogMTUwcHg7XG59XG4udy1cXFxcWzIwdmhcXFxcXSB7XG4gICAgd2lkdGg6IDIwdmg7XG59XG4udy1cXFxcWzI4dmhcXFxcXSB7XG4gICAgd2lkdGg6IDI4dmg7XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi53LVxcXFxbMzB2aFxcXFxdIHtcbiAgICB3aWR0aDogMzB2aDtcbn1cbi53LVxcXFxbNDAwcHhcXFxcXSB7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuLnctXFxcXFs0NnZoXFxcXF0ge1xuICAgIHdpZHRoOiA0NnZoO1xufVxuLnctXFxcXFs1MDBweFxcXFxdIHtcbiAgICB3aWR0aDogNTAwcHg7XG59XG4udy1cXFxcWzUwdmhcXFxcXSB7XG4gICAgd2lkdGg6IDUwdmg7XG59XG4udy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi53LXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2VsZWN0LW5vbmUge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmdyaWQtY29scy0xMCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKTtcbn1cbi5ncmlkLXJvd3MtMTAge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBtaW5tYXgoMCwgMWZyKSk7XG59XG4uZmxleC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMyB7XG4gICAgZ2FwOiAwLjc1cmVtO1xufVxuLmdhcC1cXFxcWzF2d1xcXFxdIHtcbiAgICBnYXA6IDF2dztcbn1cbi5nYXAtXFxcXFsyMHB4XFxcXF0ge1xuICAgIGdhcDogMjBweDtcbn1cbi5nYXAtXFxcXFs1dndcXFxcXSB7XG4gICAgZ2FwOiA1dnc7XG59XG4uc2VsZi1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLnJvdW5kZWQtMnhsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLnJvdW5kZWQtbGcge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbn1cbi5yb3VuZGVkLWItbGcge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtdC1sZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC10bC1sZyB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtdHItbGcge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG4uYm9yZGVyLTIge1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmJvcmRlci1zbGF0ZS00MDAge1xuICAgIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTIwMCB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtNDAwIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS02MDAge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCA4NSwgMTA1LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCA4NSwgMTA1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdHJhbnNwYXJlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLmJnLWdyYWRpZW50LXRvLWwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xufVxuLmJnLWdyYWRpZW50LXRvLXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcbn1cbi5mcm9tLXNsYXRlLTQwMCB7XG4gICAgLS10dy1ncmFkaWVudC1mcm9tOiAjOTRhM2I4IHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xuICAgIC0tdHctZ3JhZGllbnQtdG86IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xuICAgIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XG59XG4uZnJvbS1zbGF0ZS01MDAge1xuICAgIC0tdHctZ3JhZGllbnQtZnJvbTogIzY0NzQ4YiB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgICAtLXR3LWdyYWRpZW50LXRvOiByZ2JhKDEwMCwgMTE2LCAxMzksIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbiAgICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuLnRvLXNsYXRlLTUwMCB7XG4gICAgLS10dy1ncmFkaWVudC10bzogIzY0NzQ4YiB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG59XG4udG8tc2xhdGUtNjAwIHtcbiAgICAtLXR3LWdyYWRpZW50LXRvOiAjNDc1NTY5IHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbn1cbi5wLTMge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG59XG4ucC1cXFxcWzF2aFxcXFxdIHtcbiAgICBwYWRkaW5nOiAxdmg7XG59XG4ucC1cXFxcWzJ2aFxcXFxdIHtcbiAgICBwYWRkaW5nOiAydmg7XG59XG4ucHgtXFxcXFsydmhcXFxcXSB7XG4gICAgcGFkZGluZy1sZWZ0OiAydmg7XG4gICAgcGFkZGluZy1yaWdodDogMnZoO1xufVxuLnB0LVxcXFxbMVxcXFwuNXZoXFxcXF0ge1xuICAgIHBhZGRpbmctdG9wOiAxLjV2aDtcbn1cbi5pbmRlbnQtMiB7XG4gICAgdGV4dC1pbmRlbnQ6IDAuNXJlbTtcbn1cbi50ZXh0LTJ4bCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4udGV4dC0zeGwge1xuICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG59XG4udGV4dC01eGwge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbn1cbi50ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQteGwge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LWdyZWVuLTcwMCB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMjEsIDEyOCwgNjEsIDEpO1xuICAgIGNvbG9yOiByZ2JhKDIxLCAxMjgsIDYxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXJlZC03MDAge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2JhKDE4NSwgMjgsIDI4LCAxKTtcbiAgICBjb2xvcjogcmdiYSgxODUsIDI4LCAyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1zbGF0ZS0yMDAge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLm9wYWNpdHktODAge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cbi5vdXRsaW5lIHtcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbn1cbi5vdXRsaW5lLW9mZnNldC1cXFxcWy00XFxcXC41cHhcXFxcXSB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC00LjVweDtcbn1cbi5vdXRsaW5lLW9mZnNldC1cXFxcWy00cHhcXFxcXSB7XG4gICAgb3V0bGluZS1vZmZzZXQ6IC00cHg7XG59XG4ub3V0bGluZS1ncmVlbi03MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICMxNTgwM2Q7XG59XG4ub3V0bGluZS1yZWQtNzAwIHtcbiAgICBvdXRsaW5lLWNvbG9yOiAjYjkxYzFjO1xufVxuLm91dGxpbmUtc2xhdGUtNjAwIHtcbiAgICBvdXRsaW5lLWNvbG9yOiAjNDc1NTY5O1xufVxuXG4udHctYm94LXNoYWRvdy0xMTEwIHtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggaHNsKDAsIDAlLCAzMCUpO1xufVxuXG4udHctdGV4dC1zaGFkb3ctMTExMCB7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcbn1cblxuLmJhY2tkcm9wXFxcXDpiYWNrZHJvcC1ibHVyLXNtOjpiYWNrZHJvcCB7XG4gICAgLS10dy1iYWNrZHJvcC1ibHVyOiBibHVyKDRweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdHctYmFja2Ryb3AtYmx1cikgdmFyKC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzcykgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xufVxuXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTQwMDpob3ZlciB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6Ymctc2xhdGUtNTAwOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDp0ZXh0LXNsYXRlLTIwMDpob3ZlciB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6b3V0bGluZS1kYXNoZWQ6aG92ZXIge1xuICAgIG91dGxpbmUtc3R5bGU6IGRhc2hlZDtcbn1cblxuLmhvdmVyXFxcXDpvdXRsaW5lLXllbGxvdy01MDA6aG92ZXIge1xuICAgIG91dGxpbmUtY29sb3I6ICNlYWIzMDg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksK0NBQStDO0lBQy9DLHVCQUF1QjtJQUN2QiwrREFBd0Q7QUFDNUQ7O0FBRUEsaUVBQWM7O0FBQWQ7OztDQUFjOztBQUFkOzs7RUFBQSxzQkFBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG1CQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7Ozs7Ozs7O0NBQWM7O0FBQWQ7O0VBQUEsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYztLQUFkLFdBQWMsRUFBZCxNQUFjO0VBQWQsOExBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsd0NBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsU0FBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsMEJBQWM7RUFBZCx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7Ozs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwrR0FBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGNBQWM7RUFBZCxjQUFjO0VBQWQsa0JBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkO0VBQUEsV0FBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHFCQUFjLEVBQWQsTUFBYztFQUFkLHlCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7O0VBQUEsb0JBQWMsRUFBZCxNQUFjO0VBQWQsOEJBQWMsRUFBZCxNQUFjO0VBQWQsZ0NBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7RUFBZCx1QkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztFQUFkLFNBQWMsRUFBZCxNQUFjO0VBQWQsVUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxvQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDs7OztFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsWUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDZCQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCxhQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsa0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7Ozs7Ozs7OztFQUFBLFNBQWM7QUFBQTs7QUFBZDtFQUFBLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7OztFQUFBLGdCQUFjO0VBQWQsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7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bUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLGlCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLG1CQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLGVBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsbUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsa0JBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsb0JBQW1CO0lBQW5CLDJCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLG9CQUFtQjtJQUFuQiwyQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxvQkFBbUI7SUFBbkIsNkJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7O0FBUW5CO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DOztBQXRCQTtJQUFBLDZCQXNCQztJQXRCRCxpUUFzQkM7WUF0QkQseVBBc0JDO0lBdEJELCtRQXNCQztZQXRCRDtBQXNCQzs7QUF0QkQ7SUFBQSxrQkFzQkM7SUF0QkQsd0NBc0JDO0lBdEJEO0FBc0JDOztBQXRCRDtJQUFBLGtCQXNCQztJQXRCRCx3Q0FzQkM7SUF0QkQ7QUFzQkM7O0FBdEJEO0lBQUEsb0JBc0JDO0lBdEJELDZCQXNCQztJQXRCRDtBQXNCQzs7QUF0QkQ7SUFBQTtBQXNCQzs7QUF0QkQ7SUFBQTtBQXNCQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL09yYml0cm9uICovXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiO1xcbiAgICBzcmM6IHVybCguL2ZvbnQvT3JiaXRyb24tUmVndWxhci50dGYpIGZvcm1hdChcXFwiVHJ1ZVR5cGVcXFwiKTtcXG59XFxuXFxuQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5AbGF5ZXIgYmFzZSB7XFxuICAgIGh0bWwge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiT3JiaXRyb25cXFwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxuICAgIH1cXG59XFxuXFxuLnR3LWJveC1zaGFkb3ctMTExMCB7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBoc2woMCwgMCUsIDMwJSk7XFxufVxcblxcbi50dy10ZXh0LXNoYWRvdy0xMTEwIHtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBTaGlwcyA9IHRoaXMuY3JlYXRlTWFwU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBBdHRhY2tzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoXCJDYXJyaWVyXCIsIDUpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcChcIkRlc3Ryb3llclwiLCAzKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoXCJTdWJtYXJpbmVcIiwgMyk7XG4gICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0XCIsIDIpO1xuXG4gICAgICAgIHJldHVybiBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgIH1cblxuICAgIGNyZWF0ZU1hcFNoaXBzKCkge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLmdldENvb3JkaW5hdGVzKHNoaXAsIG1hcCk7XG4gICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwLnNldChgJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX1gLCBzaGlwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcyhzaGlwLCBtYXApIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuZ2VuZXJhdGVDb29yZGluYXRlcyhzaGlwLmF4aXMsIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29vcmRpbmF0ZXMoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgaGVhZCA9IFt4LCB5XTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW2hlYWRdO1xuXG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ICs9IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB5IC09IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlcyA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGxldCBtYXBTaGlwcyA9IG51bGw7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSBtYXBTaGlwcyA9IG1hcDtcbiAgICAgICAgZWxzZSBtYXBTaGlwcyA9IHRoaXMubWFwU2hpcHM7XG5cbiAgICAgICAgbGV0IGJvb2wgPSBbXTtcblxuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmQoeCwgeSkgfHwgbWFwU2hpcHMuaGFzKGAke3h9JHt5fWApKSB7XG4gICAgICAgICAgICAgICAgYm9vbC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYm9vbC5pbmNsdWRlcyhmYWxzZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaXNPdXRPZkJvdW5kKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiB0aGlzLmhlaWdodCAtIDEgfHwgeCA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoeSA+IHRoaXMuaGVpZ2h0IC0gMSB8fCB5IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0ke3l9YDtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMubWFwU2hpcHMuZ2V0KGtleSk7XG5cbiAgICAgICAgaWYgKEJvb2xlYW4oc2hpcCkpIHtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLm1hcEF0dGFja3Muc2V0KGtleSwgMSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLm1hcEF0dGFja3Muc2V0KGtleSwgMCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhbmRvbUludDsiLCJjb25zdCBCb2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmJvYXJkLnNoaXBzO1xuICAgICAgICB0aGlzLmxpZmUgPSB0aGlzLnNoaXBzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB1cGRhdGVMaWZlKCkge1xuICAgICAgICBsZXQgbGlmZSA9IDA7XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgbGlmZSArPSAxO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxpZmUgPSBsaWZlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKCk7XG4gICAgfVxuXG4gICAgLy8gQUlcbiAgICBnaXZlQXR0YWNrKG1hcCkge1xuICAgICAgICBsZXQgYXR0YWNrID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKGF0dGFjaywgbWFwKSkge1xuICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5nZW5lcmF0ZUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBdHRhY2soKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm9hcmQuaGVpZ2h0O1xuICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludChoZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IGdldFJhbmRvbUludChoZWlnaHQpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZGluYXRlKGNvb3JkaW5hdGUsIG1hcCkge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAobWFwLmhhcyhgJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX1gKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsImNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF4aXMgPSB0aGlzLnNldEF4aXMoKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhwID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldEF4aXMoKSB7XG4gICAgICAgIGNvbnN0IG4gPSBnZXRSYW5kb21JbnQoMik7XG4gICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gXCJ4XCI7XG4gICAgICAgIHJldHVybiBcInlcIjtcbiAgICB9XG5cbiAgICBjaGFuZ2VBeGlzKCkge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSBcInhcIikgdGhpcy5heGlzID0gXCJ5XCI7XG4gICAgICAgIGVsc2UgdGhpcy5heGlzID0gXCJ4XCI7XG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5ocCAtPSAxO1xuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCkgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmFsaXZlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyIsImNvbnN0IGJsb2NrZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2NrLWJvYXJkXCIpO1xuICAgIGNvbnN0IGJsb2NrU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9jay1zY3JlZW5cIik7XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJsb2NrKHN0cmluZykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIGlmIChzdHJpbmcgPT09IFwiYm9hcmRcIikgZWxlbWVudCA9IGJsb2NrQm9hcmQ7XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJzY3JlZW5cIikgZWxlbWVudCA9IGJsb2NrU2NyZWVuO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUJsb2NrKHN0cmluZykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIGlmIChzdHJpbmcgPT09IFwiYm9hcmRcIikgZWxlbWVudCA9IGJsb2NrQm9hcmQ7XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJzY3JlZW5cIikgZWxlbWVudCA9IGJsb2NrU2NyZWVuO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGJsb2NrQm9hcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgYmxvY2tTY3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhY3RpdmF0ZUJsb2NrLCBkZWFjdGl2YXRlQmxvY2ssIHJlc2V0IH07XG59KSgpXG5cbmV4cG9ydCB7IGJsb2NrZXIgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgYmxvY2tlciB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcblxuY29uc3QgYm9hcmRET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkU2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNoaXAtMVwiKTtcbiAgICBjb25zdCBib2FyZFNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1zaGlwLTJcIik7XG4gICAgY29uc3QgYm9hcmRBdHRhY2sxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1hdHRhY2stMVwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFjazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay0yXCIpO1xuICAgIFxuICAgIGNvbnN0IGJvYXJkU2hpcFdyYXBwZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1zaGlwLXdyYXBwZXItMVwiKTtcbiAgICBjb25zdCBib2FyZFNoaXBXcmFwcGVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtc2hpcC13cmFwcGVyLTJcIik7XG4gICAgY29uc3QgYm9hcmRBdHRhY2tXcmFwcGVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtYXR0YWNrLXdyYXBwZXItMVwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFja1dyYXBwZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1hdHRhY2std3JhcHBlci0yXCIpO1xuXG4gICAgY29uc3QgYm9hcmRTaGlwV3JhcHBlcnMgPSBbYm9hcmRTaGlwV3JhcHBlcjEsIGJvYXJkU2hpcFdyYXBwZXIyXTtcbiAgICBjb25zdCBib2FyZEF0dGFja1dyYXBwZXJzID0gW2JvYXJkQXR0YWNrV3JhcHBlcjEsIGJvYXJkQXR0YWNrV3JhcHBlcjJdO1xuXG4gICAgZnVuY3Rpb24gaW5pdEJvYXJkKG1vZGUsIHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIxLCBib2FyZFNoaXAxKTtcblxuICAgICAgICBpZiAobW9kZSA9PT0gMSkgX2NyZWF0ZUVtcHR5Qm9hcmRTaGlwKHBsYXllcjIsIGJvYXJkU2hpcDIpO1xuICAgICAgICBlbHNlIF9jcmVhdGVCb2FyZFNoaXAocGxheWVyMiwgYm9hcmRTaGlwMik7XG5cbiAgICAgICAgX2NyZWF0ZUJvYXJkQXR0YWNrKHBsYXllcjEsIGJvYXJkQXR0YWNrMSwgcGxheWVyMi5ib2FyZC5tYXBTaGlwcywgYm9hcmRTaGlwMik7XG4gICAgICAgIF9jcmVhdGVCb2FyZEF0dGFjayhwbGF5ZXIyLCBib2FyZEF0dGFjazIsIHBsYXllcjEuYm9hcmQubWFwU2hpcHMsIGJvYXJkU2hpcDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICAgICAgYm9hcmRTaGlwV3JhcHBlcnNbdHVybl0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgYm9hcmRBdHRhY2tXcmFwcGVyc1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICBib2FyZFNoaXBXcmFwcGVyc1tub3RUdXJuXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBib2FyZEF0dGFja1dyYXBwZXJzW25vdFR1cm5dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2ltdWxhdGVBSUNsaWNrKFt4LCB5XSwgdHVybikge1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib2FyZC1hdHRhY2stJHt0dXJuICsgMX1gKTtcbiAgICAgICAgX2dldEJveChgJHt4fSR7eX1gLCBib2FyZCkuY2xpY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRzID0gW2JvYXJkU2hpcDEsIGJvYXJkU2hpcDIsIGJvYXJkQXR0YWNrMSwgYm9hcmRBdHRhY2syXTtcbiAgICAgICAgYm9hcmRzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGJvYXJkLmNoaWxkcmVuLmxlbmd0aCA+IDApIGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmxhc3RDaGlsZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfY3JlYXRlQm9hcmRTaGlwKHBsYXllciwgYm9hcmQpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGxheWVyLmJvYXJkLmhlaWdodDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnBvdyhoZWlnaHQsIDIpOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJvcmRlci0yXCIsIFwiZmxleFwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiaXRlbXMtY2VudGVyXCIsIFwib3V0bGluZS1vZmZzZXQtWy00LjVweF1cIik7XG4gICAgICAgICAgICBib3guaWQgPSBfYXNzaWduQm94SUQoaSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IF9hc3NpZ25TaGlwVGV4dChib3gsIHBsYXllci5ib2FyZC5tYXBTaGlwcyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVFbXB0eUJvYXJkU2hpcChwbGF5ZXIsIGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItMlwiLCBcIm91dGxpbmUtb2Zmc2V0LVstNC41cHhdXCIpO1xuICAgICAgICAgICAgYm94LmlkID0gX2Fzc2lnbkJveElEKGksIGhlaWdodCk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVCb2FyZEF0dGFjayhwbGF5ZXIsIGJvYXJkLCBtYXBTaGlwRW5lbXksIGJvYXJkU2hpcEVuZW15KSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItMlwiLCBcImZsZXhcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIm91dGxpbmUtb2Zmc2V0LVstNHB4XVwiLCBcImhvdmVyOm91dGxpbmUtZGFzaGVkXCIsIFwiaG92ZXI6b3V0bGluZS15ZWxsb3ctNTAwXCIpO1xuICAgICAgICAgICAgYm94LmlkID0gX2Fzc2lnbkJveElEKGksIGhlaWdodCk7XG4gICAgICAgICAgICBfYWRkQm94TGlzdGVuZXIoYm94LCBtYXBTaGlwRW5lbXksIGJvYXJkU2hpcEVuZW15KTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChib3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2Fzc2lnbkJveElEKGksIGhlaWdodCkge1xuICAgICAgICBjb25zdCB4ID0gaSAlIGhlaWdodDtcbiAgICAgICAgY29uc3QgeSA9IC0oTWF0aC5mbG9vcihpIC8gaGVpZ2h0KSAtIChoZWlnaHQgLSAxKSk7XG4gICAgICAgIHJldHVybiBgJHt4fSR7eX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3NpZ25TaGlwVGV4dChib3gsIG1hcCkge1xuICAgICAgICBjb25zdCBzaGlwID0gbWFwLmdldChib3guaWQpO1xuICAgICAgICBpZiAoIXNoaXApIHJldHVybiBcIlwiO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJnLXNsYXRlLTYwMFwiKTtcbiAgICAgICAgcmV0dXJuIHNoaXAubmFtZVswXTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEJveExpc3RlbmVyKGJveCwgbWFwU2hpcEVuZW15LCBib2FyZFNoaXBFbmVteSkge1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYmxvY2tlci5hY3RpdmF0ZUJsb2NrKFwiYm9hcmRcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyOm91dGxpbmUtZGFzaGVkXCIsIFwiaG92ZXI6b3V0bGluZS15ZWxsb3ctNTAwXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobWFwU2hpcEVuZW15Lmhhcyhib3guaWQpKSB7XG4gICAgICAgICAgICAgICAgX3BsYWNlSGl0TWFyayhib3gsIDEpO1xuICAgICAgICAgICAgICAgIF9wbGFjZUhpdE1hcmsoX2dldEJveChib3guaWQsIGJvYXJkU2hpcEVuZW15KSwgMCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9wbGFjZU1pc3NNYXJrKGJveCwgMSk7XG4gICAgICAgICAgICAgICAgX3BsYWNlTWlzc01hcmsoX2dldEJveChib3guaWQsIGJvYXJkU2hpcEVuZW15KSwgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdhbWUudXBkYXRlKGJveC5pZCk7XG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0Qm94KGJveElELCBib2FyZCkge1xuICAgICAgICByZXR1cm4gYm9hcmQucXVlcnlTZWxlY3RvcihgW2lkID0gXCIke2JveElEfVwiXWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wbGFjZUhpdE1hcmsoYm94LCBuKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZVwiLCBcIm91dGxpbmUtcmVkLTcwMFwiLCBcInRleHQtcmVkLTcwMFwiKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIik7XG4gICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBcIiFcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wbGFjZU1pc3NNYXJrKGJveCwgbikge1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm91dGxpbmVcIiwgXCJvdXRsaW5lLWdyZWVuLTcwMFwiLCBcInRleHQtZ3JlZW4tNzAwXCIpO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiKTtcbiAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdEJvYXJkLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgc2ltdWxhdGVBSUNsaWNrLCByZXNldCB9O1xufSkoKVxuXG5leHBvcnQgeyBib2FyZERPTSB9IiwiaW1wb3J0IGljb25HaXRIdWIgZnJvbSAnLi4vaWNvbi9naXRodWItbWFyay13aGl0ZS5wbmcnO1xuXG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuL3RhYic7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gJy4vYm9hcmQtZG9tJztcbmltcG9ydCB7IGJsb2NrZXIgfSBmcm9tICcuL2Jsb2NrZXInO1xuaW1wb3J0IHsgd2VsY29tZSB9IGZyb20gJy4vd2VsY29tZSc7XG5cbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdFwiKTtcbiAgICBjb25zdCBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZW5kXCIpO1xuICAgIGNvbnN0IHJlbWF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1yZW1hdGNoXCIpO1xuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tbWFpbi1tZW51XCIpO1xuXG4gICAgbGV0IG1vZGUgPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gaW5pdChuLCAuLi4gcGxheWVycykge1xuICAgICAgICBtb2RlID0gbjtcbiAgICAgICAgX2luaXRJbWcoKTtcbiAgICAgICAgdGFiLmluaXQoLi4uIHBsYXllcnMpO1xuICAgICAgICBib2FyZERPTS5pbml0Qm9hcmQobW9kZSwgLi4uIHBsYXllcnMpO1xuXG4gICAgICAgIC8vIFRlc3RcbiAgICAgICAgdGVzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYmxvY2tlci5hY3RpdmF0ZUJsb2NrKFwic2NyZWVuXCIpO1xuICAgICAgICAgICAgZW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZW1hdGNoLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBfcmVzZXQoKTtcbiAgICAgICAgICAgIHdlbGNvbWUucmVtYXRjaChtb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1haW5NZW51Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBfcmVzZXQoKTtcbiAgICAgICAgICAgIHdlbGNvbWUuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVQbGF5ZXIodHVybiwgbm90VHVybikge1xuICAgICAgICBfZGVhY3RpdmF0ZShub3RUdXJuKTtcbiAgICAgICAgX2FjdGl2YXRlKHR1cm4pO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2luaXRJbWcoKSB7XG4gICAgICAgIGNvbnN0IGltZ0dpdEh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbi1naXRodWJcIik7XG4gICAgICAgIGltZ0dpdEh1Yi5zcmMgPSBpY29uR2l0SHViO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hY3RpdmF0ZSh0dXJuKSB7XG4gICAgICAgIHRhYi5hY3RpdmF0ZSh0dXJuKTtcbiAgICAgICAgYm9hcmRET00uYWN0aXZhdGUodHVybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICB0YWIuZGVhY3RpdmF0ZShub3RUdXJuKTtcbiAgICAgICAgYm9hcmRET00uZGVhY3RpdmF0ZShub3RUdXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVzZXQoKSB7XG4gICAgICAgIGJvYXJkRE9NLnJlc2V0KCk7XG4gICAgICAgIGJsb2NrZXIucmVzZXQoKTtcbiAgICAgICAgZW5kLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdCwgYWN0aXZhdGVQbGF5ZXIgfTtcbn0pKClcblxuZXhwb3J0IHsgZG9tIH07IiwiaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgYm9hcmRET00gfSBmcm9tICcuL2JvYXJkLWRvbSc7XG5pbXBvcnQgeyBibG9ja2VyIH0gZnJvbSAnLi9ibG9ja2VyJztcblxuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi4vbW9kdWxlLWJhY2stZW5kL3BsYXllci5qcycpO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgcGxheWVycyA9IG51bGw7XG4gICAgbGV0IHR1cm4gPSBudWxsO1xuICAgIGxldCBub3RUdXJuID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdhbWUobmFtZTEsIG5hbWUyLCBtb2RlKSB7XG4gICAgICAgIF9pbml0UGxheWVycyhuYW1lMSwgbmFtZTIpO1xuICAgICAgICBkb20uaW5pdChtb2RlLCAuLi4gcGxheWVycyk7XG4gICAgICAgIF9BSW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoaWQpIHtcbiAgICAgICAgY29uc3QgeHkgPSBpZC5zcGxpdChcIlwiKTtcbiAgICAgICAgcGxheWVyc1tub3RUdXJuXS5yZWNlaXZlQXR0YWNrKFsreHlbMF0sICt4eVsxXV0pO1xuICAgICAgICB0YWIudXBkYXRlTGlmZShwbGF5ZXJzW25vdFR1cm5dLCBub3RUdXJuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoX2lzR2FtZSgpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYCR7cGxheWVyc1t0dXJuXS5uYW1lfSB3aW5zIWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH07XG4gICAgXG4gICAgICAgICAgICBfdXBkYXRlVHVybigpO1xuICAgICAgICAgICAgZG9tLmFjdGl2YXRlUGxheWVyKHR1cm4sIG5vdFR1cm4pO1xuICAgICAgICAgICAgaWYgKHBsYXllcnNbdHVybl0ubmFtZSAhPT0gXCJBSVwiKSBibG9ja2VyLmRlYWN0aXZhdGVCbG9jayhcImJvYXJkXCIpO1xuICAgIFxuICAgICAgICAgICAgX0FJbW92ZSgpO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2luaXRQbGF5ZXJzKG5hbWUxLCBuYW1lMikge1xuICAgICAgICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihuYW1lMSk7XG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKG5hbWUyKTtcbiAgICAgICAgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyXTtcbiAgICAgICAgdHVybiA9IDA7XG4gICAgICAgIG5vdFR1cm4gPSAxO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBfQUltb3ZlKCkge1xuICAgICAgICBpZiAocGxheWVyc1t0dXJuXS5uYW1lID09PSBcIkFJXCIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IHBsYXllcnNbbm90VHVybl0uYm9hcmQubWFwQXR0YWNrcztcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2sgPSBwbGF5ZXJzW3R1cm5dLmdpdmVBdHRhY2sobWFwKTtcbiAgICAgICAgICAgICAgICBib2FyZERPTS5zaW11bGF0ZUFJQ2xpY2soYXR0YWNrLCB0dXJuKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lzR2FtZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgICAgICAgaWYgKHBsYXllci5saWZlID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3VwZGF0ZVR1cm4oKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0dXJuO1xuICAgICAgICB0dXJuID0gKyF0dXJuO1xuICAgICAgICBub3RUdXJuID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVHYW1lLCB1cGRhdGUgfTtcbn0pKClcblxuZXhwb3J0IHsgZ2FtZSB9OyIsImNvbnN0IHRhYiA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLTFcIik7XG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLTJcIik7XG4gICAgY29uc3QgbmFtZTE9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS0xXCIpO1xuICAgIGNvbnN0IG5hbWUyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtMlwiKTtcbiAgICBjb25zdCBsaWZlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlmZS0xXCIpO1xuICAgIGNvbnN0IGxpZmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWZlLTJcIik7XG5cbiAgICBjb25zdCB0YWJzID0gW3RhYjEsIHRhYjJdO1xuICAgIGNvbnN0IGxpdmVzID0gW2xpZmUxLCBsaWZlMl07XG5cbiAgICBmdW5jdGlvbiBpbml0KHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgX2luaXROYW1lKHBsYXllcjEsIG5hbWUxKTtcbiAgICAgICAgX2luaXROYW1lKHBsYXllcjIsIG5hbWUyKTtcbiAgICAgICAgdXBkYXRlTGlmZShwbGF5ZXIxLCAwKTtcbiAgICAgICAgdXBkYXRlTGlmZShwbGF5ZXIyLCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMaWZlKHBsYXllciwgdHVybikge1xuICAgICAgICBsaXZlc1t0dXJuXS50ZXh0Q29udGVudCA9IHBsYXllci5saWZlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICAgICAgdGFic1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwibWItMlwiLCBcImJnLXNsYXRlLTQwMFwiKTtcbiAgICAgICAgdGFic1t0dXJuXS5jbGFzc0xpc3QuYWRkKFwiYmctc2xhdGUtMjAwXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICB0YWJzW25vdFR1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1zbGF0ZS0yMDBcIik7XG4gICAgICAgIHRhYnNbbm90VHVybl0uY2xhc3NMaXN0LmFkZChcIm1iLTJcIiwgXCJiZy1zbGF0ZS00MDBcIik7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfaW5pdE5hbWUocGxheWVyLCBuYW1lKSB7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXIubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCB1cGRhdGVMaWZlLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9O1xufSkoKVxuXG5leHBvcnQgeyB0YWIgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCB3ZWxjb21lID0gKCgpID0+IHtcbiAgICBjb25zdCBzY3JlZW5XZWxjb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWxjb21lXCIpO1xuICAgIGNvbnN0IHNjcmVlbk1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXB2YWlcIik7XG4gICAgY29uc3QgYnV0dG9uUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tcHZwXCIpO1xuICAgIFxuICAgIGNvbnN0IGRpYWxvZ1BWQUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpYWxvZy1wdmFpXCIpO1xuICAgIGNvbnN0IG5hbWVQVkFJMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdmFpLTFcIik7XG4gICAgY29uc3Qgb2tQVkFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvay1wdmFpXCIpO1xuICAgIGNvbnN0IGNsb3NlUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHZhaVwiKTtcblxuICAgIGNvbnN0IGRpYWxvZ1BWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLXB2cFwiKTtcbiAgICBjb25zdCBuYW1lUFZQMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdnAtMVwiKTtcbiAgICBjb25zdCBuYW1lUFZQMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdnAtMVwiKTtcbiAgICBjb25zdCBva1BWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2stcHZwXCIpO1xuICAgIGNvbnN0IGNsb3NlUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wdnBcIik7XG4gICAgXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgX2luaXRQVkFJKCk7XG4gICAgICAgIF9pbml0UFZQKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgICAgc2NyZWVuV2VsY29tZS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbWF0Y2gobW9kZSkge1xuICAgICAgICBpZiAobW9kZSA9PT0gMSkgb2tQVkFJLmNsaWNrKCk7XG4gICAgICAgIGVsc2UgaWYgKG1vZGUgPT09IDIpIG9rUFZQLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfaW5pdFBWQUkoKSB7XG4gICAgICAgIGJ1dHRvblBWQUkub25jbGljayA9ICgpID0+IHsgZGlhbG9nUFZBSS5zaG93TW9kYWwoKTsgfVxuICAgICAgICBjbG9zZVBWQUkub25jbGljayA9ICgpID0+IHsgZGlhbG9nUFZBSS5jbG9zZSgpOyB9XG4gICAgICAgIG9rUFZBSS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5jcmVhdGVHYW1lKG5hbWVQVkFJMS52YWx1ZSB8fCBcIlBsYXllciAxXCIsIFwiQUlcIiwgMSk7XG4gICAgICAgICAgICBuYW1lUFZBSTEudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgc2NyZWVuV2VsY29tZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgc2NyZWVuTWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaXRQVlAoKSB7XG4gICAgICAgIGJ1dHRvblBWUC5vbmNsaWNrID0gKCkgPT4geyBkaWFsb2dQVlAuc2hvd01vZGFsKCk7IH1cbiAgICAgICAgY2xvc2VQVlAub25jbGljayA9ICgpID0+IHsgZGlhbG9nUFZQLmNsb3NlKCk7IH1cbiAgICAgICAgb2tQVlAub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuY3JlYXRlR2FtZShuYW1lUFZQMS52YWx1ZSB8fCBcIlBsYXllciAxXCIsIG5hbWVQVlAyLnZhbHVlIHx8IFwiUGxheWVyIDJcIiwgMik7XG4gICAgICAgICAgICBuYW1lUFZQMS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBuYW1lUFZQMi52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBzY3JlZW5XZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBzY3JlZW5NYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCBzaG93LCByZW1hdGNoIH1cbn0pKClcblxuZXhwb3J0IHsgd2VsY29tZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgd2VsY29tZSB9IGZyb20gJy4vbW9kdWxlLWZyb250LWVuZC93ZWxjb21lJztcblxud2VsY29tZS5pbml0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
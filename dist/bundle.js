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
.top-2 {
    top: 0.5rem;
}
.top-1\\/2 {
    top: 50%;
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
.h-\\[15vh\\] {
    height: 15vh;
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
.w-screen {
    width: 100vw;
}
.w-full {
    width: 100%;
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
.gap-\\[5vw\\] {
    gap: 5vw;
}
.gap-\\[20px\\] {
    gap: 20px;
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

    return { activateBlock, deactivateBlock };
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

            setTimeout(() => {
                _game__WEBPACK_IMPORTED_MODULE_0__.game.update(box.id);
            }, 1000);
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

    return { initBoard, activate, deactivate, simulateAIClick };
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






const dom = (() => {
    function init(mode, ... players) {
        _initImg();
        _tab__WEBPACK_IMPORTED_MODULE_1__.tab.init(... players);
        _board_dom__WEBPACK_IMPORTED_MODULE_2__.boardDOM.initBoard(mode, ... players);

        const test = document.querySelector("#test");
        const end = document.querySelector("#main-end");
        test.onclick = () => {
            _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.activateBlock("screen");
            end.classList.remove("hidden");
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
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ "./src/module-front-end/welcome.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/module-front-end/dom.js");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab */ "./src/module-front-end/tab.js");
/* harmony import */ var _board_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-dom */ "./src/module-front-end/board-dom.js");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocker */ "./src/module-front-end/blocker.js");






const Player = __webpack_require__(/*! ../module-back-end/player.js */ "./src/module-back-end/player.js");

const game = (() => {
    let players = null;
    let turn = null;
    let notTurn = null;

    function init() {
        _welcome__WEBPACK_IMPORTED_MODULE_0__.welcome.init();
    }

    function createGame(name1, name2, mode) {
        _initPlayers(name1, name2);
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.init(mode, ... players);
        _AImove();
    }

    function update(id) {
        const xy = id.split("");
        players[notTurn].receiveAttack([+xy[0], +xy[1]]);
        _tab__WEBPACK_IMPORTED_MODULE_2__.tab.updateLife(players[notTurn], notTurn);

        if (_isGame()) {
            alert(`${players[turn].name} wins!`);
            return;
        };

        _updateTurn();
        _dom__WEBPACK_IMPORTED_MODULE_1__.dom.activatePlayer(turn, notTurn);
        if (players[turn].name !== "AI") _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.deactivateBlock("board");

        _AImove();
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
                _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.simulateAIClick(attack, turn);
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

    return { init, createGame, update };
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

    // Private functions
    function _initPVAI() {
        buttonPVAI.onclick = () => { dialogPVAI.showModal(); }
        closePVAI.onclick = () => { dialogPVAI.close(); }
        okPVAI.onclick = () => {
            _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVAI1.value || "Player 1", "AI", 1);
            screenWelcome.classList.add("hidden");
            screenMain.classList.remove("hidden");
        }
    }

    function _initPVP() {
        buttonPVP.onclick = () => { dialogPVP.showModal(); }
        closePVP.onclick = () => { dialogPVP.close(); }
        okPVP.onclick = () => {
            _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVP1.value || "Player 1", namePVP2.value || "Player 2", 2);
            screenWelcome.classList.add("hidden");
            screenMain.classList.remove("hidden");
        }
    }

    return { init }
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
/* harmony import */ var _module_front_end_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-front-end/game */ "./src/module-front-end/game.js");



_module_front_end_game__WEBPACK_IMPORTED_MODULE_1__.game.init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxPQUFPLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sV0FBVyxNQUFNLFlBQVksTUFBTSxNQUFNLHFCQUFxQixxQkFBcUIscUJBQXFCLFVBQVUsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sU0FBUyxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sUUFBUSxNQUFNLFlBQVksb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLFlBQVksS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxzQ0FBc0Msc0ZBQXNGLGlFQUFpRSxHQUFHLG1CQUFtQix1QkFBdUIsc0JBQXNCLGlCQUFpQixZQUFZLHlEQUF5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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUMwQjs7QUFFL0Msd0RBQUksUSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/OTAxMSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtYmFjay1lbmQvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1iYWNrLWVuZC9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1iYWNrLWVuZC9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1iYWNrLWVuZC9zaGlwLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL2Jsb2NrZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvYm9hcmQtZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL2RvbS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC9nYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL3RhYi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC93ZWxjb21lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvT3JiaXRyb24tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9PcmJpdHJvbiAqL1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwge1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAgIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHctcm90YXRlOiAwO1xuICAgIC0tdHctc2tldy14OiAwO1xuICAgIC0tdHctc2tldy15OiAwO1xuICAgIC0tdHctc2NhbGUteDogMTtcbiAgICAtLXR3LXNjYWxlLXk6IDE7XG4gICAgLS10dy1wYW4teDogIDtcbiAgICAtLXR3LXBhbi15OiAgO1xuICAgIC0tdHctcGluY2gtem9vbTogIDtcbiAgICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgICAtLXR3LW9yZGluYWw6ICA7XG4gICAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gICAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gICAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAgIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAgIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gICAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LWJsdXI6ICA7XG4gICAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctY29udHJhc3Q6ICA7XG4gICAgLS10dy1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctaW52ZXJ0OiAgO1xuICAgIC0tdHctc2F0dXJhdGU6ICA7XG4gICAgLS10dy1zZXBpYTogIDtcbiAgICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAgIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAgIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHctcm90YXRlOiAwO1xuICAgIC0tdHctc2tldy14OiAwO1xuICAgIC0tdHctc2tldy15OiAwO1xuICAgIC0tdHctc2NhbGUteDogMTtcbiAgICAtLXR3LXNjYWxlLXk6IDE7XG4gICAgLS10dy1wYW4teDogIDtcbiAgICAtLXR3LXBhbi15OiAgO1xuICAgIC0tdHctcGluY2gtem9vbTogIDtcbiAgICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgICAtLXR3LW9yZGluYWw6ICA7XG4gICAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gICAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gICAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAgIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAgIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gICAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LWJsdXI6ICA7XG4gICAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctY29udHJhc3Q6ICA7XG4gICAgLS10dy1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctaW52ZXJ0OiAgO1xuICAgIC0tdHctc2F0dXJhdGU6ICA7XG4gICAgLS10dy1zZXBpYTogIDtcbiAgICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAgIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAgIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4uYWJzb2x1dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yaWdodC0zIHtcbiAgICByaWdodDogMC43NXJlbTtcbn1cbi50b3AtMiB7XG4gICAgdG9wOiAwLjVyZW07XG59XG4udG9wLTFcXFxcLzIge1xuICAgIHRvcDogNTAlO1xufVxuLm1iLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5tci1cXFxcWzQ1cHhcXFxcXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xufVxuLm10LTAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tdC0wXFxcXC41IHtcbiAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbn1cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmgtMTAge1xuICAgIGhlaWdodDogMi41cmVtO1xufVxuLmgtOCB7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuLmgtXFxcXFsxMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMTB2aDtcbn1cbi5oLVxcXFxbMjBcXFxcJVxcXFxdIHtcbiAgICBoZWlnaHQ6IDIwJTtcbn1cbi5oLVxcXFxbMjAwcHhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbn1cbi5oLVxcXFxbMjB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG59XG4uaC1cXFxcWzI4dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyOHZoO1xufVxuLmgtXFxcXFs0NnZoXFxcXF0ge1xuICAgIGhlaWdodDogNDZ2aDtcbn1cbi5oLVxcXFxbNTB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG59XG4uaC1mdWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaC1zY3JlZW4ge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uaC1cXFxcWzE1dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAxNXZoO1xufVxuLnctOCB7XG4gICAgd2lkdGg6IDJyZW07XG59XG4udy1cXFxcWzE1MHB4XFxcXF0ge1xuICAgIHdpZHRoOiAxNTBweDtcbn1cbi53LVxcXFxbMjB2aFxcXFxdIHtcbiAgICB3aWR0aDogMjB2aDtcbn1cbi53LVxcXFxbMjh2aFxcXFxdIHtcbiAgICB3aWR0aDogMjh2aDtcbn1cbi53LVxcXFxbMzBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogMzAlO1xufVxuLnctXFxcXFszMHZoXFxcXF0ge1xuICAgIHdpZHRoOiAzMHZoO1xufVxuLnctXFxcXFs0MDBweFxcXFxdIHtcbiAgICB3aWR0aDogNDAwcHg7XG59XG4udy1cXFxcWzQ2dmhcXFxcXSB7XG4gICAgd2lkdGg6IDQ2dmg7XG59XG4udy1cXFxcWzUwMHB4XFxcXF0ge1xuICAgIHdpZHRoOiA1MDBweDtcbn1cbi53LVxcXFxbNTB2aFxcXFxdIHtcbiAgICB3aWR0aDogNTB2aDtcbn1cbi53LXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuLnctZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udHJhbnNsYXRlLXktXFxcXFstNTBcXFxcJVxcXFxdIHtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgLTUwJSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbi5zZWxlY3Qtbm9uZSB7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uZ3JpZC1jb2xzLTEwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDAsIDFmcikpO1xufVxuLmdyaWQtcm93cy0xMCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKTtcbn1cbi5mbGV4LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi5mbGV4LXJvdy1yZXZlcnNlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG4uZmxleC1jb2wge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmp1c3RpZnktY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5qdXN0aWZ5LWFyb3VuZCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uanVzdGlmeS1ldmVubHkge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmdhcC0zIHtcbiAgICBnYXA6IDAuNzVyZW07XG59XG4uZ2FwLVxcXFxbMXZ3XFxcXF0ge1xuICAgIGdhcDogMXZ3O1xufVxuLmdhcC1cXFxcWzV2d1xcXFxdIHtcbiAgICBnYXA6IDV2dztcbn1cbi5nYXAtXFxcXFsyMHB4XFxcXF0ge1xuICAgIGdhcDogMjBweDtcbn1cbi5zZWxmLWVuZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ucm91bmRlZC0yeGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG4ucm91bmRlZC1sZyB7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtbWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLnJvdW5kZWQtYi1sZyB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC10LWxnIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXRsLWxnIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC10ci1sZyB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5ib3JkZXItMiB7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG59XG4uYm9yZGVyLXNsYXRlLTQwMCB7XG4gICAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtMjAwIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS00MDAge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTYwMCB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDg1LCAxMDUsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDg1LCAxMDUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy10cmFuc3BhcmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uYmctZ3JhZGllbnQtdG8tbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG59XG4uYmctZ3JhZGllbnQtdG8tciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xufVxuLmZyb20tc2xhdGUtNDAwIHtcbiAgICAtLXR3LWdyYWRpZW50LWZyb206ICM5NGEzYjggdmFyKC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbik7XG4gICAgLS10dy1ncmFkaWVudC10bzogcmdiYSgxNDgsIDE2MywgMTg0LCAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG4gICAgLS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcbn1cbi5mcm9tLXNsYXRlLTUwMCB7XG4gICAgLS10dy1ncmFkaWVudC1mcm9tOiAjNjQ3NDhiIHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xuICAgIC0tdHctZ3JhZGllbnQtdG86IHJnYmEoMTAwLCAxMTYsIDEzOSwgMCkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xuICAgIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XG59XG4udG8tc2xhdGUtNTAwIHtcbiAgICAtLXR3LWdyYWRpZW50LXRvOiAjNjQ3NDhiIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbn1cbi50by1zbGF0ZS02MDAge1xuICAgIC0tdHctZ3JhZGllbnQtdG86ICM0NzU1NjkgdmFyKC0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb24pO1xufVxuLnAtMyB7XG4gICAgcGFkZGluZzogMC43NXJlbTtcbn1cbi5wLVxcXFxbMXZoXFxcXF0ge1xuICAgIHBhZGRpbmc6IDF2aDtcbn1cbi5wLVxcXFxbMnZoXFxcXF0ge1xuICAgIHBhZGRpbmc6IDJ2aDtcbn1cbi5weC1cXFxcWzJ2aFxcXFxdIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDJ2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAydmg7XG59XG4ucHQtXFxcXFsxXFxcXC41dmhcXFxcXSB7XG4gICAgcGFkZGluZy10b3A6IDEuNXZoO1xufVxuLmluZGVudC0yIHtcbiAgICB0ZXh0LWluZGVudDogMC41cmVtO1xufVxuLnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50ZXh0LTN4bCB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbn1cbi50ZXh0LTV4bCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxuLnRleHQtbGcge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4udGV4dC14bCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xufVxuLnRleHQtZ3JlZW4tNzAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgyMSwgMTI4LCA2MSwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjEsIDEyOCwgNjEsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtcmVkLTcwMCB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMTg1LCAyOCwgMjgsIDEpO1xuICAgIGNvbG9yOiByZ2JhKDE4NSwgMjgsIDI4LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXNsYXRlLTIwMCB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4ub3BhY2l0eS04MCB7XG4gICAgb3BhY2l0eTogMC44O1xufVxuLm91dGxpbmUge1xuICAgIG91dGxpbmUtc3R5bGU6IHNvbGlkO1xufVxuLm91dGxpbmUtb2Zmc2V0LVxcXFxbLTRcXFxcLjVweFxcXFxdIHtcbiAgICBvdXRsaW5lLW9mZnNldDogLTQuNXB4O1xufVxuLm91dGxpbmUtb2Zmc2V0LVxcXFxbLTRweFxcXFxdIHtcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcbn1cbi5vdXRsaW5lLWdyZWVuLTcwMCB7XG4gICAgb3V0bGluZS1jb2xvcjogIzE1ODAzZDtcbn1cbi5vdXRsaW5lLXJlZC03MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICNiOTFjMWM7XG59XG4ub3V0bGluZS1zbGF0ZS02MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICM0NzU1Njk7XG59XG5cbi50dy1ib3gtc2hhZG93LTExMTAge1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCBoc2woMCwgMCUsIDMwJSk7XG59XG5cbi50dy10ZXh0LXNoYWRvdy0xMTEwIHtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IGJsYWNrO1xufVxuXG4uYmFja2Ryb3BcXFxcOmJhY2tkcm9wLWJsdXItc206OmJhY2tkcm9wIHtcbiAgICAtLXR3LWJhY2tkcm9wLWJsdXI6IGJsdXIoNHB4KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdHctYmFja2Ryb3AtYmx1cikgdmFyKC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzcykgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xuICAgICAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS10dy1iYWNrZHJvcC1ibHVyKSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG59XG5cbi5ob3ZlclxcXFw6Ymctc2xhdGUtNDAwOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDpiZy1zbGF0ZS01MDA6aG92ZXIge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCAxMTYsIDEzOSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOnRleHQtc2xhdGUtMjAwOmhvdmVyIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDpvdXRsaW5lLWRhc2hlZDpob3ZlciB7XG4gICAgb3V0bGluZS1zdHlsZTogZGFzaGVkO1xufVxuXG4uaG92ZXJcXFxcOm91dGxpbmUteWVsbG93LTUwMDpob3ZlciB7XG4gICAgb3V0bGluZS1jb2xvcjogI2VhYjMwODtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQ0FBK0M7SUFDL0MsdUJBQXVCO0lBQ3ZCLCtEQUF3RDtBQUM1RDs7QUFFQSxpRUFBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw4TEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQ0FBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLHVCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztFQUFkLFlBQWM7QUFBQTs7QUFBZCx3RUFBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtNQUFBLDZHQUFjO0lBQUE7O0FBQWQ7SUFBQSx3QkFBYztJQUFkLHdCQUFjO0lBQWQsbUJBQWM7SUFBZCxtQkFBYztJQUFkLGNBQWM7SUFBZCxjQUFjO0lBQWQsY0FBYztJQUFkLGVBQWM7SUFBZCxlQUFjO0lBQWQsYUFBYztJQUFkLGFBQWM7SUFBZCxrQkFBYztJQUFkLHNDQUFjO0lBQWQsOEJBQWM7SUFBZCw2QkFBYztJQUFkLDRCQUFjO0lBQWQsZUFBYztJQUFkLG9CQUFjO0lBQWQsc0JBQWM7SUFBZCx1QkFBYztJQUFkLHdCQUFjO0lBQWQsa0JBQWM7SUFBZCwyQkFBYztJQUFkLDRCQUFjO0lBQWQsd0NBQWM7SUFBZCwwQ0FBYztJQUFkLG1DQUFjO0lBQWQsOEJBQWM7SUFBZCxzQ0FBYztJQUFkLFlBQWM7SUFBZCxrQkFBYztJQUFkLGdCQUFjO0lBQWQsaUJBQWM7SUFBZCxrQkFBYztJQUFkLGNBQWM7SUFBZCxnQkFBYztJQUFkLGFBQWM7SUFBZCxtQkFBYztJQUFkLHFCQUFjO0lBQWQsMkJBQWM7SUFBZCx5QkFBYztJQUFkLDBCQUFjO0lBQWQsMkJBQWM7SUFBZCx1QkFBYztJQUFkLHdCQUFjO0lBQWQseUJBQWM7SUFBZCxzQkFBYztJQUFkLG9CQUFjO0lBQWQsc0JBQWM7SUFBZCxxQkFBYztJQUFkO0FBQWM7O0FBQWQ7SUFBQSx3QkFBYztJQUFkLHdCQUFjO0lBQWQsbUJBQWM7SUFBZCxtQkFBYztJQUFkLGNBQWM7SUFBZCxjQUFjO0lBQWQsY0FBYztJQUFkLGVBQWM7SUFBZCxlQUFjO0lBQWQsYUFBYztJQUFkLGFBQWM7SUFBZCxrQkFBYztJQUFkLHNDQUFjO0lBQWQsOEJBQWM7SUFBZCw2QkFBYztJQUFkLDRCQUFjO0lBQWQsZUFBYztJQUFkLG9CQUFjO0lBQWQsc0JBQWM7SUFBZCx1QkFBYztJQUFkLHdCQUFjO0lBQWQsa0JBQWM7SUFBZCwyQkFBYztJQUFkLDRCQUFjO0lBQWQsd0NBQWM7SUFBZCwwQ0FBYztJQUFkLG1DQUFjO0lBQWQsOEJBQWM7SUFBZCxzQ0FBYztJQUFkLFlBQWM7SUFBZCxrQkFBYztJQUFkLGdCQUFjO0lBQWQsaUJBQWM7SUFBZCxrQkFBYztJQUFkLGNBQWM7SUFBZCxnQkFBYztJQUFkLGFBQWM7SUFBZCxtQkFBYztJQUFkLHFCQUFjO0lBQWQsMkJBQWM7SUFBZCx5QkFBYztJQUFkLDBCQUFjO0lBQWQsMkJBQWM7SUFBZCx1QkFBYztJQUFkLHdCQUFjO0lBQWQseUJBQWM7SUFBZCxzQkFBYztJQUFkLG9CQUFjO0lBQWQsc0JBQWM7SUFBZCxxQkFBYztJQUFkO0FBQWM7QUFFZDtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSxzQkFBbUI7SUFBbkIsOEtBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEseUJBQW1CO09BQW5CLHNCQUFtQjtZQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLGtDQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLDhCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLHNCQUFtQjtJQUFuQixvQ0FBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxrQkFBbUI7SUFBbkIsd0NBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsa0JBQW1CO0lBQW5CLHdDQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLGtCQUFtQjtJQUFuQixzQ0FBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSw0REFBbUI7SUFBbkIsdUVBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsNERBQW1CO0lBQW5CLHVFQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSxpQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsaUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsbUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsZUFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxtQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxrQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxvQkFBbUI7SUFBbkIsMkJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsb0JBQW1CO0lBQW5CLDJCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLG9CQUFtQjtJQUFuQiw2QkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjs7QUFRbkI7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBdEJBO0lBQUEsNkJBc0JDO0lBdEJELGlRQXNCQztZQXRCRCx5UEFzQkM7SUF0QkQsK1FBc0JDO1lBdEJEO0FBc0JDOztBQXRCRDtJQUFBLGtCQXNCQztJQXRCRCx3Q0FzQkM7SUF0QkQ7QUFzQkM7O0FBdEJEO0lBQUEsa0JBc0JDO0lBdEJELHdDQXNCQztJQXRCRDtBQXNCQzs7QUF0QkQ7SUFBQSxvQkFzQkM7SUF0QkQsNkJBc0JDO0lBdEJEO0FBc0JDOztBQXRCRDtJQUFBO0FBc0JDOztBQXRCRDtJQUFBO0FBc0JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vT3JiaXRyb24gKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udC9PcmJpdHJvbi1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG5AdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBsYXllciBiYXNlIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gICAgfVxcbn1cXG5cXG4udHctYm94LXNoYWRvdy0xMTEwIHtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IGhzbCgwLCAwJSwgMzAlKTtcXG59XFxuXFxuLnR3LXRleHQtc2hhZG93LTExMTAge1xcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoJy4vc2hpcC5qcycpO1xuY29uc3QgZ2V0UmFuZG9tSW50ID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuY2xhc3MgQm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEwO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5jcmVhdGVTaGlwcygpO1xuICAgICAgICB0aGlzLm1hcFNoaXBzID0gdGhpcy5jcmVhdGVNYXBTaGlwcygpO1xuICAgICAgICB0aGlzLm1hcEF0dGFja3MgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IGNhcnJpZXIgPSBuZXcgU2hpcChcIkNhcnJpZXJcIiwgNSk7XG4gICAgICAgIGNvbnN0IGJhdHRsZXNoaXAgPSBuZXcgU2hpcChcIkJhdHRsZXNoaXBcIiwgNCk7XG4gICAgICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKFwiRGVzdHJveWVyXCIsIDMpO1xuICAgICAgICBjb25zdCBzdWJtYXJpbmUgPSBuZXcgU2hpcChcIlN1Ym1hcmluZVwiLCAzKTtcbiAgICAgICAgY29uc3QgcGF0cm9sQm9hdCA9IG5ldyBTaGlwKFwiUGF0cm9sIEJvYXRcIiwgMik7XG5cbiAgICAgICAgcmV0dXJuIFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG4gICAgfVxuXG4gICAgY3JlYXRlTWFwU2hpcHMoKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuZ2V0Q29vcmRpbmF0ZXMoc2hpcCwgbWFwKTtcbiAgICAgICAgICAgIHNoaXAuc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0KGAke2Nvb3JkaW5hdGVbMF19JHtjb29yZGluYXRlWzFdfWAsIHNoaXApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gbWFwO1xuICAgIH1cblxuICAgIGdldENvb3JkaW5hdGVzKHNoaXAsIG1hcCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBudWxsO1xuXG4gICAgICAgIHdoaWxlICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIG1hcCkpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gdGhpcy5nZW5lcmF0ZUNvb3JkaW5hdGVzKHNoaXAuYXhpcywgc2hpcC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb29yZGluYXRlcyhheGlzLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IHggPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IGdldFJhbmRvbUludCh0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCBoZWFkID0gW3gsIHldO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbaGVhZF07XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHggKz0gMTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgICAgIHkgLT0gMTtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGVzID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgbGV0IG1hcFNoaXBzID0gbnVsbDtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIG1hcFNoaXBzID0gbWFwO1xuICAgICAgICBlbHNlIG1hcFNoaXBzID0gdGhpcy5tYXBTaGlwcztcblxuICAgICAgICBsZXQgYm9vbCA9IFtdO1xuXG4gICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZCh4LCB5KSB8fCBtYXBTaGlwcy5oYXMoYCR7eH0ke3l9YCkpIHtcbiAgICAgICAgICAgICAgICBib29sLnB1c2goZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGlmIChib29sLmluY2x1ZGVzKGZhbHNlKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc091dE9mQm91bmQoeCwgeSkge1xuICAgICAgICBpZiAoeCA+IHRoaXMuaGVpZ2h0IC0gMSB8fCB4IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGlmICh5ID4gdGhpcy5oZWlnaHQgLSAxIHx8IHkgPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHt4fSR7eX1gO1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5tYXBTaGlwcy5nZXQoa2V5KTtcblxuICAgICAgICBpZiAoQm9vbGVhbihzaGlwKSkge1xuICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMubWFwQXR0YWNrcy5zZXQoa2V5LCAxKTtcbiAgICAgICAgfSBlbHNlIHRoaXMubWFwQXR0YWNrcy5zZXQoa2V5LCAwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7IiwiZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG4pIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmFuZG9tSW50OyIsImNvbnN0IEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qcycpO1xuY29uc3QgZ2V0UmFuZG9tSW50ID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuYm9hcmQuc2hpcHM7XG4gICAgICAgIHRoaXMubGlmZSA9IHRoaXMuc2hpcHMubGVuZ3RoO1xuICAgIH1cblxuICAgIHVwZGF0ZUxpZmUoKSB7XG4gICAgICAgIGxldCBsaWZlID0gMDtcbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgaWYgKCFzaGlwLmlzU3VuaygpKSBsaWZlICs9IDE7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubGlmZSA9IGxpZmU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhbeCwgeV0pIHtcbiAgICAgICAgdGhpcy5ib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxpZmUoKTtcbiAgICB9XG5cbiAgICAvLyBBSVxuICAgIGdpdmVBdHRhY2sobWFwKSB7XG4gICAgICAgIGxldCBhdHRhY2sgPSBudWxsO1xuICAgICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGUoYXR0YWNrLCBtYXApKSB7XG4gICAgICAgICAgICBhdHRhY2sgPSB0aGlzLmdlbmVyYXRlQXR0YWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0dGFjaztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUF0dGFjaygpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KGhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KGhlaWdodCk7XG4gICAgICAgIHJldHVybiBbeCwgeV07XG4gICAgfVxuXG4gICAgaXNWYWxpZENvb3JkaW5hdGUoY29vcmRpbmF0ZSwgbWFwKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChtYXAuaGFzKGAke2Nvb3JkaW5hdGVbMF19JHtjb29yZGluYXRlWzFdfWApKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7IiwiY29uc3QgZ2V0UmFuZG9tSW50ID0gcmVxdWlyZSgnLi9oZWxwZXIuanMnKTtcblxuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYXhpcyA9IHRoaXMuc2V0QXhpcygpO1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IG51bGw7XG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5hbGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0QXhpcygpIHtcbiAgICAgICAgY29uc3QgbiA9IGdldFJhbmRvbUludCgyKTtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBcInhcIjtcbiAgICAgICAgcmV0dXJuIFwieVwiO1xuICAgIH1cblxuICAgIGNoYW5nZUF4aXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmF4aXMgPT09IFwieFwiKSB0aGlzLmF4aXMgPSBcInlcIjtcbiAgICAgICAgZWxzZSB0aGlzLmF4aXMgPSBcInhcIjtcbiAgICB9XG5cbiAgICBzZXRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhwIC09IDE7XG4gICAgICAgIGlmICh0aGlzLmhwID09PSAwKSB0aGlzLmFsaXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuYWxpdmU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7IiwiY29uc3QgYmxvY2tlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgYmxvY2tCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvY2stYm9hcmRcIik7XG4gICAgY29uc3QgYmxvY2tTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2NrLXNjcmVlblwiKTtcblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmxvY2soc3RyaW5nKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgaWYgKHN0cmluZyA9PT0gXCJib2FyZFwiKSBlbGVtZW50ID0gYmxvY2tCb2FyZDtcbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nID09PSBcInNjcmVlblwiKSBlbGVtZW50ID0gYmxvY2tTY3JlZW47XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWFjdGl2YXRlQmxvY2soc3RyaW5nKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgaWYgKHN0cmluZyA9PT0gXCJib2FyZFwiKSBlbGVtZW50ID0gYmxvY2tCb2FyZDtcbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nID09PSBcInNjcmVlblwiKSBlbGVtZW50ID0gYmxvY2tTY3JlZW47XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhY3RpdmF0ZUJsb2NrLCBkZWFjdGl2YXRlQmxvY2sgfTtcbn0pKClcblxuZXhwb3J0IHsgYmxvY2tlciB9OyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBibG9ja2VyIH0gZnJvbSBcIi4vYmxvY2tlclwiO1xuXG5jb25zdCBib2FyZERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRTaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtc2hpcC0xXCIpO1xuICAgIGNvbnN0IGJvYXJkU2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNoaXAtMlwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFjazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay0xXCIpO1xuICAgIGNvbnN0IGJvYXJkQXR0YWNrMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtYXR0YWNrLTJcIik7XG4gICAgXG4gICAgY29uc3QgYm9hcmRTaGlwV3JhcHBlcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNoaXAtd3JhcHBlci0xXCIpO1xuICAgIGNvbnN0IGJvYXJkU2hpcFdyYXBwZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1zaGlwLXdyYXBwZXItMlwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFja1dyYXBwZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1hdHRhY2std3JhcHBlci0xXCIpO1xuICAgIGNvbnN0IGJvYXJkQXR0YWNrV3JhcHBlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay13cmFwcGVyLTJcIik7XG5cbiAgICBjb25zdCBib2FyZFNoaXBXcmFwcGVycyA9IFtib2FyZFNoaXBXcmFwcGVyMSwgYm9hcmRTaGlwV3JhcHBlcjJdO1xuICAgIGNvbnN0IGJvYXJkQXR0YWNrV3JhcHBlcnMgPSBbYm9hcmRBdHRhY2tXcmFwcGVyMSwgYm9hcmRBdHRhY2tXcmFwcGVyMl07XG5cbiAgICBmdW5jdGlvbiBpbml0Qm9hcmQobW9kZSwgcGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICBfY3JlYXRlQm9hcmRTaGlwKHBsYXllcjEsIGJvYXJkU2hpcDEpO1xuXG4gICAgICAgIGlmIChtb2RlID09PSAxKSBfY3JlYXRlRW1wdHlCb2FyZFNoaXAocGxheWVyMiwgYm9hcmRTaGlwMik7XG4gICAgICAgIGVsc2UgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIyLCBib2FyZFNoaXAyKTtcblxuICAgICAgICBfY3JlYXRlQm9hcmRBdHRhY2socGxheWVyMSwgYm9hcmRBdHRhY2sxLCBwbGF5ZXIyLmJvYXJkLm1hcFNoaXBzLCBib2FyZFNoaXAyKTtcbiAgICAgICAgX2NyZWF0ZUJvYXJkQXR0YWNrKHBsYXllcjIsIGJvYXJkQXR0YWNrMiwgcGxheWVyMS5ib2FyZC5tYXBTaGlwcywgYm9hcmRTaGlwMSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUodHVybikge1xuICAgICAgICBib2FyZFNoaXBXcmFwcGVyc1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICBib2FyZEF0dGFja1dyYXBwZXJzW3R1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZShub3RUdXJuKSB7XG4gICAgICAgIGJvYXJkU2hpcFdyYXBwZXJzW25vdFR1cm5dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGJvYXJkQXR0YWNrV3JhcHBlcnNbbm90VHVybl0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaW11bGF0ZUFJQ2xpY2soW3gsIHldLCB0dXJuKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JvYXJkLWF0dGFjay0ke3R1cm4gKyAxfWApO1xuICAgICAgICBfZ2V0Qm94KGAke3h9JHt5fWAsIGJvYXJkKS5jbGljaygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIsIGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItMlwiLCBcImZsZXhcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIm91dGxpbmUtb2Zmc2V0LVstNC41cHhdXCIpO1xuICAgICAgICAgICAgYm94LmlkID0gX2Fzc2lnbkJveElEKGksIGhlaWdodCk7XG4gICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBfYXNzaWduU2hpcFRleHQoYm94LCBwbGF5ZXIuYm9hcmQubWFwU2hpcHMpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlRW1wdHlCb2FyZFNoaXAocGxheWVyLCBib2FyZCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBwbGF5ZXIuYm9hcmQuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KGhlaWdodCwgMik7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLTJcIiwgXCJvdXRsaW5lLW9mZnNldC1bLTQuNXB4XVwiKTtcbiAgICAgICAgICAgIGJveC5pZCA9IF9hc3NpZ25Cb3hJRChpLCBoZWlnaHQpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlQm9hcmRBdHRhY2socGxheWVyLCBib2FyZCwgbWFwU2hpcEVuZW15LCBib2FyZFNoaXBFbmVteSkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBwbGF5ZXIuYm9hcmQuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KGhlaWdodCwgMik7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLTJcIiwgXCJmbGV4XCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJvdXRsaW5lLW9mZnNldC1bLTRweF1cIiwgXCJob3ZlcjpvdXRsaW5lLWRhc2hlZFwiLCBcImhvdmVyOm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgIGJveC5pZCA9IF9hc3NpZ25Cb3hJRChpLCBoZWlnaHQpO1xuICAgICAgICAgICAgX2FkZEJveExpc3RlbmVyKGJveCwgbWFwU2hpcEVuZW15LCBib2FyZFNoaXBFbmVteSk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3NpZ25Cb3hJRChpLCBoZWlnaHQpIHtcbiAgICAgICAgY29uc3QgeCA9IGkgJSBoZWlnaHQ7XG4gICAgICAgIGNvbnN0IHkgPSAtKE1hdGguZmxvb3IoaSAvIGhlaWdodCkgLSAoaGVpZ2h0IC0gMSkpO1xuICAgICAgICByZXR1cm4gYCR7eH0ke3l9YDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXNzaWduU2hpcFRleHQoYm94LCBtYXApIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG1hcC5nZXQoYm94LmlkKTtcbiAgICAgICAgaWYgKCFzaGlwKSByZXR1cm4gXCJcIjtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS02MDBcIik7XG4gICAgICAgIHJldHVybiBzaGlwLm5hbWVbMF07IFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRCb3hMaXN0ZW5lcihib3gsIG1hcFNoaXBFbmVteSwgYm9hcmRTaGlwRW5lbXkpIHtcbiAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGJsb2NrZXIuYWN0aXZhdGVCbG9jayhcImJvYXJkXCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcjpvdXRsaW5lLWRhc2hlZFwiLCBcImhvdmVyOm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKG1hcFNoaXBFbmVteS5oYXMoYm94LmlkKSkge1xuICAgICAgICAgICAgICAgIF9wbGFjZUhpdE1hcmsoYm94LCAxKTtcbiAgICAgICAgICAgICAgICBfcGxhY2VIaXRNYXJrKF9nZXRCb3goYm94LmlkLCBib2FyZFNoaXBFbmVteSksIDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfcGxhY2VNaXNzTWFyayhib3gsIDEpO1xuICAgICAgICAgICAgICAgIF9wbGFjZU1pc3NNYXJrKF9nZXRCb3goYm94LmlkLCBib2FyZFNoaXBFbmVteSksIDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBnYW1lLnVwZGF0ZShib3guaWQpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0Qm94KGJveElELCBib2FyZCkge1xuICAgICAgICByZXR1cm4gYm9hcmQucXVlcnlTZWxlY3RvcihgW2lkID0gXCIke2JveElEfVwiXWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wbGFjZUhpdE1hcmsoYm94LCBuKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZVwiLCBcIm91dGxpbmUtcmVkLTcwMFwiLCBcInRleHQtcmVkLTcwMFwiKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIik7XG4gICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBcIiFcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wbGFjZU1pc3NNYXJrKGJveCwgbikge1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm91dGxpbmVcIiwgXCJvdXRsaW5lLWdyZWVuLTcwMFwiLCBcInRleHQtZ3JlZW4tNzAwXCIpO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiKTtcbiAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdEJvYXJkLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSwgc2ltdWxhdGVBSUNsaWNrIH07XG59KSgpXG5cbmV4cG9ydCB7IGJvYXJkRE9NIH0iLCJpbXBvcnQgaWNvbkdpdEh1YiBmcm9tICcuLi9pY29uL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZyc7XG5cbmltcG9ydCB7IHRhYiB9IGZyb20gJy4vdGFiJztcbmltcG9ydCB7IGJvYXJkRE9NIH0gZnJvbSAnLi9ib2FyZC1kb20nO1xuaW1wb3J0IHsgYmxvY2tlciB9IGZyb20gJy4vYmxvY2tlcic7XG5cbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaW5pdChtb2RlLCAuLi4gcGxheWVycykge1xuICAgICAgICBfaW5pdEltZygpO1xuICAgICAgICB0YWIuaW5pdCguLi4gcGxheWVycyk7XG4gICAgICAgIGJvYXJkRE9NLmluaXRCb2FyZChtb2RlLCAuLi4gcGxheWVycyk7XG5cbiAgICAgICAgY29uc3QgdGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdFwiKTtcbiAgICAgICAgY29uc3QgZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWVuZFwiKTtcbiAgICAgICAgdGVzdC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgYmxvY2tlci5hY3RpdmF0ZUJsb2NrKFwic2NyZWVuXCIpO1xuICAgICAgICAgICAgZW5kLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVBsYXllcih0dXJuLCBub3RUdXJuKSB7XG4gICAgICAgIF9kZWFjdGl2YXRlKG5vdFR1cm4pO1xuICAgICAgICBfYWN0aXZhdGUodHVybik7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfaW5pdEltZygpIHtcbiAgICAgICAgY29uc3QgaW1nR2l0SHViID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uLWdpdGh1YlwiKTtcbiAgICAgICAgaW1nR2l0SHViLnNyYyA9IGljb25HaXRIdWI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FjdGl2YXRlKHR1cm4pIHtcbiAgICAgICAgdGFiLmFjdGl2YXRlKHR1cm4pO1xuICAgICAgICBib2FyZERPTS5hY3RpdmF0ZSh0dXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZGVhY3RpdmF0ZShub3RUdXJuKSB7XG4gICAgICAgIHRhYi5kZWFjdGl2YXRlKG5vdFR1cm4pO1xuICAgICAgICBib2FyZERPTS5kZWFjdGl2YXRlKG5vdFR1cm4pO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIGFjdGl2YXRlUGxheWVyIH07XG59KSgpXG5cbmV4cG9ydCB7IGRvbSB9OyIsImltcG9ydCB7IHdlbGNvbWUgfSBmcm9tICcuL3dlbGNvbWUnO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgYm9hcmRET00gfSBmcm9tICcuL2JvYXJkLWRvbSc7XG5pbXBvcnQgeyBibG9ja2VyIH0gZnJvbSAnLi9ibG9ja2VyJztcblxuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi4vbW9kdWxlLWJhY2stZW5kL3BsYXllci5qcycpO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgcGxheWVycyA9IG51bGw7XG4gICAgbGV0IHR1cm4gPSBudWxsO1xuICAgIGxldCBub3RUdXJuID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHdlbGNvbWUuaW5pdCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUdhbWUobmFtZTEsIG5hbWUyLCBtb2RlKSB7XG4gICAgICAgIF9pbml0UGxheWVycyhuYW1lMSwgbmFtZTIpO1xuICAgICAgICBkb20uaW5pdChtb2RlLCAuLi4gcGxheWVycyk7XG4gICAgICAgIF9BSW1vdmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGUoaWQpIHtcbiAgICAgICAgY29uc3QgeHkgPSBpZC5zcGxpdChcIlwiKTtcbiAgICAgICAgcGxheWVyc1tub3RUdXJuXS5yZWNlaXZlQXR0YWNrKFsreHlbMF0sICt4eVsxXV0pO1xuICAgICAgICB0YWIudXBkYXRlTGlmZShwbGF5ZXJzW25vdFR1cm5dLCBub3RUdXJuKTtcblxuICAgICAgICBpZiAoX2lzR2FtZSgpKSB7XG4gICAgICAgICAgICBhbGVydChgJHtwbGF5ZXJzW3R1cm5dLm5hbWV9IHdpbnMhYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG5cbiAgICAgICAgX3VwZGF0ZVR1cm4oKTtcbiAgICAgICAgZG9tLmFjdGl2YXRlUGxheWVyKHR1cm4sIG5vdFR1cm4pO1xuICAgICAgICBpZiAocGxheWVyc1t0dXJuXS5uYW1lICE9PSBcIkFJXCIpIGJsb2NrZXIuZGVhY3RpdmF0ZUJsb2NrKFwiYm9hcmRcIik7XG5cbiAgICAgICAgX0FJbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2luaXRQbGF5ZXJzKG5hbWUxLCBuYW1lMikge1xuICAgICAgICBjb25zdCBwbGF5ZXIxID0gbmV3IFBsYXllcihuYW1lMSk7XG4gICAgICAgIGNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKG5hbWUyKTtcbiAgICAgICAgcGxheWVycyA9IFtwbGF5ZXIxLCBwbGF5ZXIyXTtcbiAgICAgICAgdHVybiA9IDA7XG4gICAgICAgIG5vdFR1cm4gPSAxO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBfQUltb3ZlKCkge1xuICAgICAgICBpZiAocGxheWVyc1t0dXJuXS5uYW1lID09PSBcIkFJXCIpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcCA9IHBsYXllcnNbbm90VHVybl0uYm9hcmQubWFwQXR0YWNrcztcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRhY2sgPSBwbGF5ZXJzW3R1cm5dLmdpdmVBdHRhY2sobWFwKTtcbiAgICAgICAgICAgICAgICBib2FyZERPTS5zaW11bGF0ZUFJQ2xpY2soYXR0YWNrLCB0dXJuKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2lzR2FtZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgcGxheWVycykge1xuICAgICAgICAgICAgaWYgKHBsYXllci5saWZlID09PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3VwZGF0ZVR1cm4oKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSB0dXJuO1xuICAgICAgICB0dXJuID0gKyF0dXJuO1xuICAgICAgICBub3RUdXJuID0gdGVtcDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCBjcmVhdGVHYW1lLCB1cGRhdGUgfTtcbn0pKClcblxuZXhwb3J0IHsgZ2FtZSB9OyIsImNvbnN0IHRhYiA9ICgoKSA9PiB7XG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLTFcIik7XG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLTJcIik7XG4gICAgY29uc3QgbmFtZTE9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS0xXCIpO1xuICAgIGNvbnN0IG5hbWUyPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtMlwiKTtcbiAgICBjb25zdCBsaWZlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlmZS0xXCIpO1xuICAgIGNvbnN0IGxpZmUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWZlLTJcIik7XG5cbiAgICBjb25zdCB0YWJzID0gW3RhYjEsIHRhYjJdO1xuICAgIGNvbnN0IGxpdmVzID0gW2xpZmUxLCBsaWZlMl07XG5cbiAgICBmdW5jdGlvbiBpbml0KHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgX2luaXROYW1lKHBsYXllcjEsIG5hbWUxKTtcbiAgICAgICAgX2luaXROYW1lKHBsYXllcjIsIG5hbWUyKTtcbiAgICAgICAgdXBkYXRlTGlmZShwbGF5ZXIxLCAwKTtcbiAgICAgICAgdXBkYXRlTGlmZShwbGF5ZXIyLCAxKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMaWZlKHBsYXllciwgdHVybikge1xuICAgICAgICBsaXZlc1t0dXJuXS50ZXh0Q29udGVudCA9IHBsYXllci5saWZlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICAgICAgdGFic1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwibWItMlwiLCBcImJnLXNsYXRlLTQwMFwiKTtcbiAgICAgICAgdGFic1t0dXJuXS5jbGFzc0xpc3QuYWRkKFwiYmctc2xhdGUtMjAwXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICB0YWJzW25vdFR1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy1zbGF0ZS0yMDBcIik7XG4gICAgICAgIHRhYnNbbm90VHVybl0uY2xhc3NMaXN0LmFkZChcIm1iLTJcIiwgXCJiZy1zbGF0ZS00MDBcIik7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfaW5pdE5hbWUocGxheWVyLCBuYW1lKSB7XG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXIubmFtZTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCB1cGRhdGVMaWZlLCBhY3RpdmF0ZSwgZGVhY3RpdmF0ZSB9O1xufSkoKVxuXG5leHBvcnQgeyB0YWIgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCB3ZWxjb21lID0gKCgpID0+IHtcbiAgICBjb25zdCBzY3JlZW5XZWxjb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWxjb21lXCIpO1xuICAgIGNvbnN0IHNjcmVlbk1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgXG4gICAgY29uc3QgYnV0dG9uUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXB2YWlcIik7XG4gICAgY29uc3QgYnV0dG9uUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tcHZwXCIpO1xuICAgIFxuICAgIGNvbnN0IGRpYWxvZ1BWQUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpYWxvZy1wdmFpXCIpO1xuICAgIGNvbnN0IG5hbWVQVkFJMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdmFpLTFcIik7XG4gICAgY29uc3Qgb2tQVkFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvay1wdmFpXCIpO1xuICAgIGNvbnN0IGNsb3NlUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHZhaVwiKTtcblxuICAgIGNvbnN0IGRpYWxvZ1BWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLXB2cFwiKTtcbiAgICBjb25zdCBuYW1lUFZQMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdnAtMVwiKTtcbiAgICBjb25zdCBuYW1lUFZQMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdnAtMVwiKTtcbiAgICBjb25zdCBva1BWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2stcHZwXCIpO1xuICAgIGNvbnN0IGNsb3NlUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wdnBcIik7XG4gICAgXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgX2luaXRQVkFJKCk7XG4gICAgICAgIF9pbml0UFZQKCk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfaW5pdFBWQUkoKSB7XG4gICAgICAgIGJ1dHRvblBWQUkub25jbGljayA9ICgpID0+IHsgZGlhbG9nUFZBSS5zaG93TW9kYWwoKTsgfVxuICAgICAgICBjbG9zZVBWQUkub25jbGljayA9ICgpID0+IHsgZGlhbG9nUFZBSS5jbG9zZSgpOyB9XG4gICAgICAgIG9rUFZBSS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5jcmVhdGVHYW1lKG5hbWVQVkFJMS52YWx1ZSB8fCBcIlBsYXllciAxXCIsIFwiQUlcIiwgMSk7XG4gICAgICAgICAgICBzY3JlZW5XZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBzY3JlZW5NYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5pdFBWUCgpIHtcbiAgICAgICAgYnV0dG9uUFZQLm9uY2xpY2sgPSAoKSA9PiB7IGRpYWxvZ1BWUC5zaG93TW9kYWwoKTsgfVxuICAgICAgICBjbG9zZVBWUC5vbmNsaWNrID0gKCkgPT4geyBkaWFsb2dQVlAuY2xvc2UoKTsgfVxuICAgICAgICBva1BWUC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5jcmVhdGVHYW1lKG5hbWVQVlAxLnZhbHVlIHx8IFwiUGxheWVyIDFcIiwgbmFtZVBWUDIudmFsdWUgfHwgXCJQbGF5ZXIgMlwiLCAyKTtcbiAgICAgICAgICAgIHNjcmVlbldlbGNvbWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHNjcmVlbk1haW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQgfVxufSkoKVxuXG5leHBvcnQgeyB3ZWxjb21lIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9tb2R1bGUtZnJvbnQtZW5kL2dhbWUnO1xuXG5nYW1lLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
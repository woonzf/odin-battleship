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
.fixed {
  position: fixed;
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
.mr-12 {
  margin-right: 3rem;
}
.mt-0 {
  margin-top: 0px;
}
.mt-0\\.5 {
  margin-top: 0.125rem;
}
.block {
  display: block;
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
.h-\\[10vw\\] {
  height: 10vw;
}
.h-\\[15vh\\] {
  height: 15vh;
}
.h-\\[20\\%\\] {
  height: 20%;
}
.h-\\[20vh\\] {
  height: 20vh;
}
.h-\\[30vh\\] {
  height: 30vh;
}
.h-\\[5vh\\] {
  height: 5vh;
}
.h-\\[60\\%\\] {
  height: 60%;
}
.h-\\[76vw\\] {
  height: 76vw;
}
.h-\\[80vw\\] {
  height: 80vw;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.min-h-screen {
  min-height: 100vh;
}
.w-8 {
  width: 2rem;
}
.w-\\[150px\\] {
  width: 150px;
}
.w-\\[30\\%\\] {
  width: 30%;
}
.w-\\[40\\%\\] {
  width: 40%;
}
.w-\\[45\\%\\] {
  width: 45%;
}
.w-\\[76vw\\] {
  width: 76vw;
}
.w-\\[80\\%\\] {
  width: 80%;
}
.w-\\[80vw\\] {
  width: 80vw;
}
.w-\\[90vw\\] {
  width: 90vw;
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
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
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
.gap-\\[10\\%\\] {
  gap: 10%;
}
.gap-\\[10px\\] {
  gap: 10px;
}
.gap-\\[20px\\] {
  gap: 20px;
}
.gap-\\[5vh\\] {
  gap: 5vh;
}
.self-end {
  align-self: flex-end;
}
.overflow-hidden {
  overflow: hidden;
}
.text-ellipsis {
  text-overflow: ellipsis;
}
.text-nowrap {
  text-wrap: nowrap;
}
.text-balance {
  text-wrap: balance;
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
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-slate-500 {
  --tw-gradient-from: #64748b var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(100, 116, 139, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.to-slate-600 {
  --tw-gradient-to: #475569 var(--tw-gradient-to-position);
}
.p-3 {
  padding: 0.75rem;
}
.p-\\[2vw\\] {
  padding: 2vw;
}
.px-\\[5\\%\\] {
  padding-left: 5%;
  padding-right: 5%;
}
.pt-\\[4\\%\\] {
  padding-top: 4%;
}
.text-center {
  text-align: center;
}
.text-end {
  text-align: right;
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
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.font-bold {
  font-weight: 700;
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
.shadow-1110 {
  --tw-shadow: 1px 1px 10px hsl(0, 0%, 30%);
  --tw-shadow-colored: 1px 1px 10px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 1px 1px 10px hsl(0, 0%, 30%);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.outline-dashed {
  outline-style: dashed;
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
.outline-yellow-500 {
  outline-color: #eab308;
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
}

.disabled\\:bg-slate-400:disabled {
  --tw-bg-opacity: 1;
  background-color: rgba(148, 163, 184, 1);
  background-color: rgba(148, 163, 184, var(--tw-bg-opacity));
}

.disabled\\:bg-transparent:disabled {
  background-color: transparent;
}

.disabled\\:text-slate-200:disabled {
  --tw-text-opacity: 1;
  color: rgba(226, 232, 240, 1);
  color: rgba(226, 232, 240, var(--tw-text-opacity));
}

.disabled\\:text-transparent:disabled {
  color: transparent;
}

@media (min-width: 1024px) {

  .lg\\:h-\\[200px\\] {
    height: 200px;
  }

  .lg\\:h-\\[46vh\\] {
    height: 46vh;
  }

  .lg\\:h-\\[50vh\\] {
    height: 50vh;
  }

  .lg\\:h-\\[5vh\\] {
    height: 5vh;
  }

  .lg\\:h-screen {
    height: 100vh;
  }

  .lg\\:w-\\[400px\\] {
    width: 400px;
  }

  .lg\\:w-\\[46vh\\] {
    width: 46vh;
  }

  .lg\\:w-\\[500px\\] {
    width: 500px;
  }

  .lg\\:w-\\[50vh\\] {
    width: 50vh;
  }

  .lg\\:flex-row {
    flex-direction: row;
  }

  .lg\\:gap-\\[5vw\\] {
    gap: 5vw;
  }

  .lg\\:p-\\[2vh\\] {
    padding: 2vh;
  }

  .lg\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .lg\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  /* https://fonts.google.com/specimen/Orbitron */\n  font-family: \"Orbitron\";\n  src: url(./font/Orbitron-Regular.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  html {\n    font-family: \"Orbitron\", system-ui, sans-serif;\n  }\n}\n\n.tw-text-shadow-1110 {\n  text-shadow: 1px 1px 10px black;\n}\n"],"sourceRoot":""}]);
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

    this.ships.forEach((ship) => {
      const coordinates = this.getCoordinates(ship, map);
      ship.setCoordinates(coordinates);
      coordinates.forEach((coordinate) => {
        map.set(`${coordinate[0]}${coordinate[1]}`, ship);
      });
    });

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

    coordinates.forEach((coordinate) => {
      let x = coordinate[0];
      let y = coordinate[1];

      if (this.isOutOfBound(x, y) || mapShips.has(`${x}${y}`)) {
        bool.push(false);
      }
    });

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

  generateBoard() {
    this.board = new Board();
    this.ships = this.board.ships;
    this.life = this.ships.length;
  }

  updateLife() {
    let life = 0;
    this.ships.forEach((ship) => {
      if (!ship.isSunk()) life += 1;
    });
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
  const blockRandomize = document.querySelector("#block-randomize");

  const blocks = [blockBoard, blockScreen, blockRandomize];

  function activate(string) {
    let element = null;
    if (string === "board") element = blockBoard;
    else if (string === "screen") element = blockScreen;
    else if (string === "randomize") element = blockRandomize;
    element.classList.remove("hidden");
  }

  function deactivate(string) {
    let element = null;
    if (string === "board") element = blockBoard;
    else if (string === "screen") element = blockScreen;
    else if (string === "randomize") element = blockRandomize;
    element.classList.add("hidden");
  }

  function reset() {
    blocks.forEach((block) => {
      block.classList.add("hidden");
    });
  }

  return { activate, deactivate, reset };
})();




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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");




const boardDOM = (() => {
  const boardShip1 = document.querySelector("#board-ship-1");
  const boardShip2 = document.querySelector("#board-ship-2");
  const boardAttack1 = document.querySelector("#board-attack-1");
  const boardAttack2 = document.querySelector("#board-attack-2");
  const boardWrapper1 = document.querySelector("#board-wrapper-1");
  const boardWrapper2 = document.querySelector("#board-wrapper-2");

  const boardShips = [boardShip1, boardShip2];
  const boardAttacks = [boardAttack1, boardAttack2];
  const boardWrappers = [boardWrapper1, boardWrapper2];

  function initBoardPre(player1, player2) {
    _createBoardShip(player1, boardShip1);
    _createBoardShip(player2, boardShip2);
  }

  function getNewBoard(player, n) {
    player.generateBoard();
    if (n === 1) {
      _resetBoard(boardShip1);
      _createBoardShip(player, boardShip1);
    } else if (n === 2) {
      _resetBoard(boardShip2);
      _createBoardShip(player, boardShip2);
    }
  }

  function initBoard(player1, player2) {
    _createBoardAttack(
      player1,
      boardAttack1,
      player2.board.mapShips,
      boardShip2,
    );
    _createBoardAttack(
      player2,
      boardAttack2,
      player1.board.mapShips,
      boardShip1,
    );
  }

  function activatePre() {
    boardShips.forEach((board) => {
      board.classList.add("hidden");
    });

    boardAttacks.forEach((board) => {
      board.classList.remove("hidden");
    });
  }

  function activate(turn) {
    boardWrappers[turn].classList.remove("hidden");
  }

  function deactivate(notTurn) {
    boardWrappers[notTurn].classList.add("hidden");
  }

  function viewShip(n) {
    boardShips[n].classList.remove("hidden");
    boardAttacks[n].classList.add("hidden");
  }

  function viewAttack(n) {
    boardShips[n].classList.add("hidden");
    boardAttacks[n].classList.remove("hidden");
  }

  function simulateAIClick([x, y], turn) {
    const board = document.querySelector(`#board-attack-${turn + 1}`);
    _getBox(`${x}${y}`, board).click();
  }

  function reset() {
    const boards = [...boardShips, ...boardAttacks];
    boards.forEach((board) => {
      _resetBoard(board);
    });

    boardAttacks.forEach((board) => {
      board.classList.add("hidden");
    });

    boardShips.forEach((board) => {
      board.classList.remove("hidden");
    });
  }

  // Private functions
  function _createBoardShip(player, board) {
    const height = player.board.height;
    for (let i = 0; i < Math.pow(height, 2); i++) {
      const box = document.createElement("div");
      box.classList.add(
        "border-2",
        "flex",
        "justify-center",
        "items-center",
        "outline-offset-[-4.5px]",
      );
      box.id = _assignBoxID(i, height);
      box.textContent = _assignShipText(box, player.board.mapShips);
      board.append(box);
    }
  }

  function _createBoardAttack(player, board, mapShipEnemy, boardShipEnemy) {
    const height = player.board.height;
    for (let i = 0; i < Math.pow(height, 2); i++) {
      const box = document.createElement("div");
      box.classList.add(
        "border-2",
        "flex",
        "justify-center",
        "items-center",
        "outline-offset-[-4px]",
        "hover:outline-dashed",
        "hover:outline-yellow-500",
      );
      box.id = _assignBoxID(i, height);
      _addBoxListener(box, player, mapShipEnemy, boardShipEnemy);
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

  function _addBoxListener(box, player, mapShipEnemy, boardShipEnemy) {
    const xy = box.id.split("");
    box.addEventListener(
      "click",
      function () {
        _blocker__WEBPACK_IMPORTED_MODULE_1__.blocker.activate("board");
        _log__WEBPACK_IMPORTED_MODULE_2__.log.message(
          `${player.name} launches a missile to [ ${xy[0]} , ${xy[1]} ]`,
          1,
        );

        box.classList.remove(
          "hover:outline-dashed",
          "hover:outline-yellow-500",
        );
        box.classList.add("outline-dashed", "outline-yellow-500");

        setTimeout(() => {
          const ship = mapShipEnemy.get(box.id);

          if (ship) {
            box.classList.remove("outline-dashed", "outline-yellow-500");
            _placeHitMark(box, 1);
            _placeHitMark(_getBox(box.id, boardShipEnemy), 0);
            _log__WEBPACK_IMPORTED_MODULE_2__.log.message("H I T", 2);

            if (ship.hp === 1)
              _log__WEBPACK_IMPORTED_MODULE_2__.log.message(`${player.name} sunk a ${ship.name}!`, 1);
          } else {
            box.classList.remove("outline-dashed", "outline-yellow-500");
            _placeMissMark(box, 1);
            _placeMissMark(_getBox(box.id, boardShipEnemy), 0);
            _log__WEBPACK_IMPORTED_MODULE_2__.log.message("M I S S", 2);
          }

          _game__WEBPACK_IMPORTED_MODULE_0__.game.update(box.id);
        }, 500);
      },
      { once: true },
    );
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

  function _resetBoard(board) {
    while (board.children.length > 0) board.removeChild(board.lastChild);
  }

  return {
    initBoardPre,
    getNewBoard,
    initBoard,
    activatePre,
    activate,
    deactivate,
    viewShip,
    viewAttack,
    simulateAIClick,
    reset,
  };
})();




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
/* harmony import */ var _icon_loading_custom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/loading-custom.png */ "./src/icon/loading-custom.png");
/* harmony import */ var _tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab */ "./src/module-front-end/tab.js");
/* harmony import */ var _board_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-dom */ "./src/module-front-end/board-dom.js");
/* harmony import */ var _blocker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocker */ "./src/module-front-end/blocker.js");
/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome */ "./src/module-front-end/welcome.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game */ "./src/module-front-end/game.js");










const dom = (() => {
  const imgLoading1 = document.querySelector("#loading-1");
  const imgLoading2 = document.querySelector("#loading-2");

  const end = document.querySelector("#main-end");
  const winner = document.querySelector("#winner");
  const rematch = document.querySelector("#button-rematch");
  const mainMenu = document.querySelector("#button-main-menu");
  const view1 = document.querySelector("#view-1");
  const view2 = document.querySelector("#view-2");

  const randomize1 = document.querySelector("#randomize-1");
  const randomize2 = document.querySelector("#randomize-2");
  const okRandomize1 = document.querySelector("#ok-randomize-1");
  const okRandomize2 = document.querySelector("#ok-randomize-2");
  const randomInnerWrapper1 = document.querySelector("#random-inner-wrapper-1");
  const randomInnerWrapper2 = document.querySelector("#random-inner-wrapper-2");
  const randomWrapper = document.querySelector("#random-wrapper");
  const viewWrapper = document.querySelector("#view-wrapper");

  const spanOK1 = document.querySelector("#ok-randomize-1 > span");
  const spanOK2 = document.querySelector("#ok-randomize-2 > span");

  const imgLoadings = [imgLoading1, imgLoading2];
  const views = [view1, view2];
  const okRandomizes = [okRandomize1, okRandomize2];
  const randomInnerWrappers = [randomInnerWrapper1, randomInnerWrapper2];
  const spanOKs = [spanOK1, spanOK2];

  let mode = null;
  let players = null;

  function init() {
    _initImg();
    _initListeners();
  }

  function initPreGame(n, ...arr) {
    mode = n;
    players = [...arr];
    _tab__WEBPACK_IMPORTED_MODULE_2__.tab.init(...players);
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.initBoardPre(...players);
  }

  function activatePlayer(turn, notTurn) {
    _deactivate(notTurn);
    _activate(turn);
  }

  function endGame(name) {
    _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.deactivate("board");
    _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.activate("screen");
    winner.textContent = `${name} wins!`;
    end.classList.remove("hidden");
  }

  // Private functions
  function _initImg() {
    const imgGitHub = document.querySelector("#icon-github");

    imgGitHub.src = _icon_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__;
    imgLoadings.forEach((img) => {
      img.src = _icon_loading_custom_png__WEBPACK_IMPORTED_MODULE_1__;
    });
  }

  function _initListeners() {
    rematch.onclick = () => {
      _reset();
      _welcome__WEBPACK_IMPORTED_MODULE_5__.welcome.rematch(mode);
    };

    mainMenu.onclick = () => {
      _reset();
      _welcome__WEBPACK_IMPORTED_MODULE_5__.welcome.hide("main");
      _welcome__WEBPACK_IMPORTED_MODULE_5__.welcome.show("welcome");
    };

    view1.onpointerdown = () => {
      _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewShip(0);
    };
    view1.onpointerup = () => {
      _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewAttack(0);
    };

    randomize1.onclick = () => {
      _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.getNewBoard([...players][0], 1);
    };
    randomize2.onclick = () => {
      _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.getNewBoard([...players][1], 2);
    };

    okRandomize1.onclick = () => {
      if (mode === 1) {
        _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.activate("randomize");
        okRandomize1.disabled = true;
        spanOK1.classList.add("hidden");
        imgLoading1.classList.remove("hidden");
        _countDownToGame();
      } else _activatePlayerPre(1);
    };

    okRandomize2.onclick = () => {
      _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.activate("randomize");
      okRandomize2.disabled = true;
      spanOK2.classList.add("hidden");
      imgLoading2.classList.remove("hidden");
      _countDownToGame();
    };
  }

  function _countDownToGame(n = 3) {
    _log__WEBPACK_IMPORTED_MODULE_6__.log.message("Game starting in", 1);
    _log__WEBPACK_IMPORTED_MODULE_6__.log.message(`${n}`, 2);
    const startInterval = setInterval(() => {
      n--;
      if (n === 0) {
        clearInterval(startInterval);
        _initGame(...players);
      } else _log__WEBPACK_IMPORTED_MODULE_6__.log.message(`${n}`, 2);
    }, 1000);
  }

  function _initGame(...players) {
    randomWrapper.classList.add("hidden");
    viewWrapper.classList.remove("hidden");

    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.activatePre();
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.initBoard(...players);

    if (mode === 1) {
      view2.disabled = true;
      view2.removeEventListener("onpointerdown", _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewShip);
      view2.removeEventListener("onpointerup", _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewAttack);
    } else if (mode === 2) {
      view2.disabled = false;
      view2.onpointerdown = () => {
        _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewShip(1);
      };
      view2.onpointerup = () => {
        _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewAttack(1);
      };
    }

    _game__WEBPACK_IMPORTED_MODULE_7__.game.run();
  }

  function _activatePlayerPre(n) {
    _deactivatePre(+!n);
    _activatePre(n);
  }

  function _activatePre(n) {
    _tab__WEBPACK_IMPORTED_MODULE_2__.tab.activate(n);
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.activate(n);
    randomInnerWrappers[n].classList.remove("hidden");
  }

  function _deactivatePre(n) {
    _tab__WEBPACK_IMPORTED_MODULE_2__.tab.deactivate(n);
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.deactivate(n);
    randomInnerWrappers[n].classList.add("hidden");
  }

  function _activate(turn) {
    _tab__WEBPACK_IMPORTED_MODULE_2__.tab.activate(turn);
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.activate(turn);
    views[turn].classList.remove("hidden");
  }

  function _deactivate(notTurn) {
    _tab__WEBPACK_IMPORTED_MODULE_2__.tab.deactivate(notTurn);
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.deactivate(notTurn);
    views[notTurn].classList.add("hidden");
  }

  function _reset() {
    _resetOK();
    _resetWrappers();
    _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.reset();
    _log__WEBPACK_IMPORTED_MODULE_6__.log.reset();
    _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.reset();
    end.classList.add("hidden");
  }

  function _resetWrappers() {
    viewWrapper.classList.add("hidden");
    randomWrapper.classList.remove("hidden");
    _activatePlayerPre(0);
  }

  function _resetOK() {
    okRandomizes.forEach((button) => {
      button.disabled = false;
    });
    spanOKs.forEach((span) => {
      span.classList.remove("hidden");
    });
    imgLoadings.forEach((img) => {
      img.classList.add("hidden");
    });
  }

  return { init, initPreGame, activatePlayer, endGame };
})();




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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");






const Player = __webpack_require__(/*! ../module-back-end/player.js */ "./src/module-back-end/player.js");
const getRandomInt = __webpack_require__(/*! ../module-back-end/helper.js */ "./src/module-back-end/helper.js");

const game = (() => {
  let players = null;
  let turn = null;
  let notTurn = null;

  function createGame(name1, name2, mode) {
    _initPlayers(name1, name2);
    _dom__WEBPACK_IMPORTED_MODULE_0__.dom.initPreGame(mode, ...players);
    _log__WEBPACK_IMPORTED_MODULE_4__.log.reset();
  }

  function run() {
    _log__WEBPACK_IMPORTED_MODULE_4__.log.message("Weapon's free!", 1);
    _activateTurn();
    _AImove();
  }

  function update(id) {
    const xy = id.split("");
    players[notTurn].receiveAttack([+xy[0], +xy[1]]);
    // players[notTurn].life = 0; // test
    _tab__WEBPACK_IMPORTED_MODULE_1__.tab.updateLife(players[notTurn], notTurn);

    setTimeout(() => {
      if (_isGame()) {
        _log__WEBPACK_IMPORTED_MODULE_4__.log.message(`${players[turn].name} wins!`, 1);
        _dom__WEBPACK_IMPORTED_MODULE_0__.dom.endGame(players[turn].name);
        return;
      }

      _updateTurn();
      _activateTurn();
      _AImove();
    }, 1000);
  }

  // Private functions
  function _initPlayers(name1, name2) {
    const player1 = new Player(name1);
    const player2 = new Player(name2);
    players = [player1, player2];
    turn = getRandomInt(2);
    notTurn = +!turn;
  }

  function _activateTurn() {
    _dom__WEBPACK_IMPORTED_MODULE_0__.dom.activatePlayer(turn, notTurn);
    if (players[turn].name !== "AI") _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.deactivate("board");
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

  return { createGame, run, update };
})();




/***/ }),

/***/ "./src/module-front-end/log.js":
/*!*************************************!*\
  !*** ./src/module-front-end/log.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log)
/* harmony export */ });
const log = (() => {
  const logDiv1 = document.querySelector("#log-1");
  const logDiv2 = document.querySelector("#log-2");

  function message(string, n) {
    if (n === 1) {
      reset();
      logDiv1.textContent = string;
    } else if (n === 2) logDiv2.textContent = string;
  }

  function reset() {
    logDiv1.textContent = "Please choose your preferred formation";
    logDiv2.textContent = "...";
  }

  return { message, reset };
})();




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
  const name1 = document.querySelector("#name-1");
  const name2 = document.querySelector("#name-2");
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
})();




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
  const namePVP2 = document.querySelector("#name-pvp-2");
  const okPVP = document.querySelector("#ok-pvp");
  const closePVP = document.querySelector("#close-pvp");

  function init() {
    _initPVAI();
    _initPVP();
  }

  function show(string) {
    let screen = null;
    if (string === "welcome") screen = screenWelcome;
    else if (string === "main") screen = screenMain;
    screen.classList.remove("hidden");
  }

  function hide(string) {
    let screen = null;
    if (string === "welcome") screen = screenWelcome;
    else if (string === "main") screen = screenMain;
    screen.classList.add("hidden");
  }

  function rematch(mode) {
    if (mode === 1) okPVAI.click();
    else if (mode === 2) okPVP.click();
  }

  // Private functions
  function _initPVAI() {
    buttonPVAI.onclick = () => {
      dialogPVAI.showModal();
    };
    closePVAI.onclick = () => {
      dialogPVAI.close();
    };
    okPVAI.onclick = () => {
      _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVAI1.value || "Player 1", "AI", 1);
      namePVAI1.value = "";
      _hideWelcome();
    };
  }

  function _initPVP() {
    buttonPVP.onclick = () => {
      dialogPVP.showModal();
    };
    closePVP.onclick = () => {
      dialogPVP.close();
    };
    okPVP.onclick = () => {
      _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(
        namePVP1.value || "Player 1",
        namePVP2.value || "Player 2",
        2,
      );
      namePVP1.value = "";
      namePVP2.value = "";
      _hideWelcome();
    };
  }

  function _hideWelcome() {
    screenWelcome.classList.add("hidden");
    screenMain.classList.remove("hidden");
  }

  return { init, show, hide, rematch };
})();




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

/***/ }),

/***/ "./src/icon/loading-custom.png":
/*!*************************************!*\
  !*** ./src/icon/loading-custom.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "05cb90db30b7f8c923c6.png";

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
/* harmony import */ var _module_front_end_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-front-end/dom */ "./src/module-front-end/dom.js");




_module_front_end_dom__WEBPACK_IMPORTED_MODULE_2__.dom.init();
_module_front_end_welcome__WEBPACK_IMPORTED_MODULE_1__.welcome.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1c7QUFDTTtBQUNSOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBELFNBQVM7QUFDbkUsZUFBZSxFQUFFLEVBQUUsRUFBRTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNnQztBQUNSOztBQUU3QyxzREFBRztBQUNILDhEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1iYWNrLWVuZC9ib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvYmxvY2tlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC9ib2FyZC1kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvbG9nLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL3RhYi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC93ZWxjb21lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvT3JiaXRyb24tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vT3JiaXRyb24gKi9cbiAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZjtcbiAgfVxuXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cblxuOjpiYWNrZHJvcCB7XG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAtLXR3LXJvdGF0ZTogMDtcbiAgLS10dy1za2V3LXg6IDA7XG4gIC0tdHctc2tldy15OiAwO1xuICAtLXR3LXNjYWxlLXg6IDE7XG4gIC0tdHctc2NhbGUteTogMTtcbiAgLS10dy1wYW4teDogIDtcbiAgLS10dy1wYW4teTogIDtcbiAgLS10dy1waW5jaC16b29tOiAgO1xuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xuICAtLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvbjogIDtcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgLS10dy1vcmRpbmFsOiAgO1xuICAtLXR3LXNsYXNoZWQtemVybzogIDtcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XG4gIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwIHJnYmEoMCwwLDAsMCk7XG4gIC0tdHctYmx1cjogIDtcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAtLXR3LWNvbnRyYXN0OiAgO1xuICAtLXR3LWdyYXlzY2FsZTogIDtcbiAgLS10dy1odWUtcm90YXRlOiAgO1xuICAtLXR3LWludmVydDogIDtcbiAgLS10dy1zYXR1cmF0ZTogIDtcbiAgLS10dy1zZXBpYTogIDtcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XG4gIC0tdHctY29udGFpbi1zaXplOiAgO1xuICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAtLXR3LWNvbnRhaW4tcGFpbnQ6ICA7XG4gIC0tdHctY29udGFpbi1zdHlsZTogIDtcbn1cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yaWdodC0zIHtcbiAgcmlnaHQ6IDAuNzVyZW07XG59XG4udG9wLTFcXFxcLzIge1xuICB0b3A6IDUwJTtcbn1cbi50b3AtMiB7XG4gIHRvcDogMC41cmVtO1xufVxuLm1iLTIge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ubXItMTIge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG4ubXQtMCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tdC0wXFxcXC41IHtcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG59XG4uYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmgtMTAge1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1cbi5oLTgge1xuICBoZWlnaHQ6IDJyZW07XG59XG4uaC1cXFxcWzEwdmhcXFxcXSB7XG4gIGhlaWdodDogMTB2aDtcbn1cbi5oLVxcXFxbMTB2d1xcXFxdIHtcbiAgaGVpZ2h0OiAxMHZ3O1xufVxuLmgtXFxcXFsxNXZoXFxcXF0ge1xuICBoZWlnaHQ6IDE1dmg7XG59XG4uaC1cXFxcWzIwXFxcXCVcXFxcXSB7XG4gIGhlaWdodDogMjAlO1xufVxuLmgtXFxcXFsyMHZoXFxcXF0ge1xuICBoZWlnaHQ6IDIwdmg7XG59XG4uaC1cXFxcWzMwdmhcXFxcXSB7XG4gIGhlaWdodDogMzB2aDtcbn1cbi5oLVxcXFxbNXZoXFxcXF0ge1xuICBoZWlnaHQ6IDV2aDtcbn1cbi5oLVxcXFxbNjBcXFxcJVxcXFxdIHtcbiAgaGVpZ2h0OiA2MCU7XG59XG4uaC1cXFxcWzc2dndcXFxcXSB7XG4gIGhlaWdodDogNzZ2dztcbn1cbi5oLVxcXFxbODB2d1xcXFxdIHtcbiAgaGVpZ2h0OiA4MHZ3O1xufVxuLmgtZnVsbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5oLXNjcmVlbiB7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubWluLWgtc2NyZWVuIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4udy04IHtcbiAgd2lkdGg6IDJyZW07XG59XG4udy1cXFxcWzE1MHB4XFxcXF0ge1xuICB3aWR0aDogMTUwcHg7XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiAzMCU7XG59XG4udy1cXFxcWzQwXFxcXCVcXFxcXSB7XG4gIHdpZHRoOiA0MCU7XG59XG4udy1cXFxcWzQ1XFxcXCVcXFxcXSB7XG4gIHdpZHRoOiA0NSU7XG59XG4udy1cXFxcWzc2dndcXFxcXSB7XG4gIHdpZHRoOiA3NnZ3O1xufVxuLnctXFxcXFs4MFxcXFwlXFxcXF0ge1xuICB3aWR0aDogODAlO1xufVxuLnctXFxcXFs4MHZ3XFxcXF0ge1xuICB3aWR0aDogODB2dztcbn1cbi53LVxcXFxbOTB2d1xcXFxdIHtcbiAgd2lkdGg6IDkwdnc7XG59XG4udy1mdWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udy1zY3JlZW4ge1xuICB3aWR0aDogMTAwdnc7XG59XG4udHJhbnNsYXRlLXktXFxcXFstNTBcXFxcJVxcXFxdIHtcbiAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCAtNTAlKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi5hbmltYXRlLXNwaW4ge1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuLnNlbGVjdC1ub25lIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5ncmlkLWNvbHMtMTAge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgbWlubWF4KDAsIDFmcikpO1xufVxuLmdyaWQtcm93cy0xMCB7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBtaW5tYXgoMCwgMWZyKSk7XG59XG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5mbGV4LWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uaXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5qdXN0aWZ5LWFyb3VuZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTMge1xuICBnYXA6IDAuNzVyZW07XG59XG4uZ2FwLVxcXFxbMTBcXFxcJVxcXFxdIHtcbiAgZ2FwOiAxMCU7XG59XG4uZ2FwLVxcXFxbMTBweFxcXFxdIHtcbiAgZ2FwOiAxMHB4O1xufVxuLmdhcC1cXFxcWzIwcHhcXFxcXSB7XG4gIGdhcDogMjBweDtcbn1cbi5nYXAtXFxcXFs1dmhcXFxcXSB7XG4gIGdhcDogNXZoO1xufVxuLnNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ub3ZlcmZsb3ctaGlkZGVuIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50ZXh0LWVsbGlwc2lzIHtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGV4dC1ub3dyYXAge1xuICB0ZXh0LXdyYXA6IG5vd3JhcDtcbn1cbi50ZXh0LWJhbGFuY2Uge1xuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XG59XG4ucm91bmRlZC0yeGwge1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLnJvdW5kZWQtbGcge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC1tZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xufVxuLnJvdW5kZWQtYi1sZyB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXQtbGcge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC10bC1sZyB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXRyLWxnIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5ib3JkZXItMiB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xufVxuLmJvcmRlci1zbGF0ZS00MDAge1xuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTIwMCB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtNDAwIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS02MDAge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzEsIDg1LCAxMDUsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcxLCA4NSwgMTA1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5iZy1ncmFkaWVudC10by1yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS10dy1ncmFkaWVudC1zdG9wcykpO1xufVxuLmZyb20tc2xhdGUtNTAwIHtcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjNjQ3NDhiIHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xuICAtLXR3LWdyYWRpZW50LXRvOiByZ2JhKDEwMCwgMTE2LCAxMzksIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbiAgLS10dy1ncmFkaWVudC1zdG9wczogdmFyKC0tdHctZ3JhZGllbnQtZnJvbSksIHZhcigtLXR3LWdyYWRpZW50LXRvKTtcbn1cbi50by1zbGF0ZS02MDAge1xuICAtLXR3LWdyYWRpZW50LXRvOiAjNDc1NTY5IHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbn1cbi5wLTMge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuLnAtXFxcXFsydndcXFxcXSB7XG4gIHBhZGRpbmc6IDJ2dztcbn1cbi5weC1cXFxcWzVcXFxcJVxcXFxdIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgcGFkZGluZy1yaWdodDogNSU7XG59XG4ucHQtXFxcXFs0XFxcXCVcXFxcXSB7XG4gIHBhZGRpbmctdG9wOiA0JTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LWVuZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmluZGVudC0yIHtcbiAgdGV4dC1pbmRlbnQ6IDAuNXJlbTtcbn1cbi50ZXh0LTJ4bCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50ZXh0LTN4bCB7XG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuLnRleHQtNHhsIHtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xufVxuLnRleHQtbGcge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG59XG4udGV4dC14bCB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4uZm9udC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi50ZXh0LWdyZWVuLTcwMCB7XG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICBjb2xvcjogcmdiYSgyMSwgMTI4LCA2MSwgMSk7XG4gIGNvbG9yOiByZ2JhKDIxLCAxMjgsIDYxLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXJlZC03MDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMTg1LCAyOCwgMjgsIDEpO1xuICBjb2xvcjogcmdiYSgxODUsIDI4LCAyOCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1zbGF0ZS0yMDAge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnNoYWRvdy0xMTEwIHtcbiAgLS10dy1zaGFkb3c6IDFweCAxcHggMTBweCBoc2woMCwgMCUsIDMwJSk7XG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDFweCAxcHggMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKSwgMCAwIHJnYmEoMCwwLDAsMCksIDFweCAxcHggMTBweCBoc2woMCwgMCUsIDMwJSk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwIHJnYmEoMCwwLDAsMCkpLCB2YXIoLS10dy1zaGFkb3cpO1xufVxuLm91dGxpbmUge1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbn1cbi5vdXRsaW5lLWRhc2hlZCB7XG4gIG91dGxpbmUtc3R5bGU6IGRhc2hlZDtcbn1cbi5vdXRsaW5lLW9mZnNldC1cXFxcWy00XFxcXC41cHhcXFxcXSB7XG4gIG91dGxpbmUtb2Zmc2V0OiAtNC41cHg7XG59XG4ub3V0bGluZS1vZmZzZXQtXFxcXFstNHB4XFxcXF0ge1xuICBvdXRsaW5lLW9mZnNldDogLTRweDtcbn1cbi5vdXRsaW5lLWdyZWVuLTcwMCB7XG4gIG91dGxpbmUtY29sb3I6ICMxNTgwM2Q7XG59XG4ub3V0bGluZS1yZWQtNzAwIHtcbiAgb3V0bGluZS1jb2xvcjogI2I5MWMxYztcbn1cbi5vdXRsaW5lLXNsYXRlLTYwMCB7XG4gIG91dGxpbmUtY29sb3I6ICM0NzU1Njk7XG59XG4ub3V0bGluZS15ZWxsb3ctNTAwIHtcbiAgb3V0bGluZS1jb2xvcjogI2VhYjMwODtcbn1cblxuLnR3LXRleHQtc2hhZG93LTExMTAge1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IGJsYWNrO1xufVxuXG4uYmFja2Ryb3BcXFxcOmJhY2tkcm9wLWJsdXItc206OmJhY2tkcm9wIHtcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiBibHVyKDRweCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCkgdmFyKC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzcykgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbn1cblxuLmhvdmVyXFxcXDpiZy1zbGF0ZS00MDA6aG92ZXIge1xuICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTUwMDpob3ZlciB7XG4gIC0tdHctYmctb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6dGV4dC1zbGF0ZS0yMDA6aG92ZXIge1xuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG4uaG92ZXJcXFxcOm91dGxpbmUtZGFzaGVkOmhvdmVyIHtcbiAgb3V0bGluZS1zdHlsZTogZGFzaGVkO1xufVxuXG4uaG92ZXJcXFxcOm91dGxpbmUteWVsbG93LTUwMDpob3ZlciB7XG4gIG91dGxpbmUtY29sb3I6ICNlYWIzMDg7XG59XG5cbi5kaXNhYmxlZFxcXFw6Ymctc2xhdGUtNDAwOmRpc2FibGVkIHtcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmRpc2FibGVkXFxcXDpiZy10cmFuc3BhcmVudDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZGlzYWJsZWRcXFxcOnRleHQtc2xhdGUtMjAwOmRpc2FibGVkIHtcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmRpc2FibGVkXFxcXDp0ZXh0LXRyYW5zcGFyZW50OmRpc2FibGVkIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmxnXFxcXDpoLVxcXFxbMjAwcHhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxuXG4gIC5sZ1xcXFw6aC1cXFxcWzQ2dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiA0NnZoO1xuICB9XG5cbiAgLmxnXFxcXDpoLVxcXFxbNTB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gIH1cblxuICAubGdcXFxcOmgtXFxcXFs1dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiA1dmg7XG4gIH1cblxuICAubGdcXFxcOmgtc2NyZWVuIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLmxnXFxcXDp3LVxcXFxbNDAwcHhcXFxcXSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG5cbiAgLmxnXFxcXDp3LVxcXFxbNDZ2aFxcXFxdIHtcbiAgICB3aWR0aDogNDZ2aDtcbiAgfVxuXG4gIC5sZ1xcXFw6dy1cXFxcWzUwMHB4XFxcXF0ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuXG4gIC5sZ1xcXFw6dy1cXFxcWzUwdmhcXFxcXSB7XG4gICAgd2lkdGg6IDUwdmg7XG4gIH1cblxuICAubGdcXFxcOmZsZXgtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG5cbiAgLmxnXFxcXDpnYXAtXFxcXFs1dndcXFxcXSB7XG4gICAgZ2FwOiA1dnc7XG4gIH1cblxuICAubGdcXFxcOnAtXFxcXFsydmhcXFxcXSB7XG4gICAgcGFkZGluZzogMnZoO1xuICB9XG5cbiAgLmxnXFxcXDp0ZXh0LTV4bCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5cbiAgLmxnXFxcXDp0ZXh0LWxnIHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQ0FBK0M7RUFDL0MsdUJBQXVCO0VBQ3ZCLCtEQUF3RDtBQUMxRDs7QUFFQSxpRUFBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7OztFQUFBLHNCQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsbUJBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7Ozs7Ozs7Q0FBYzs7QUFBZDs7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw4TEFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7RUFBZCx3Q0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSwwQkFBYztFQUFkLHlDQUFjO1VBQWQsaUNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7Ozs7O0VBQUEsa0JBQWM7RUFBZCxvQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsY0FBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsbUJBQWM7QUFBQTs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDs7OztFQUFBLCtHQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsY0FBYztFQUFkLGNBQWM7RUFBZCxrQkFBYztFQUFkLHdCQUFjO0FBQUE7O0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7RUFBQSxXQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0VBQWQseUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7RUFBQSxvQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQ0FBYyxFQUFkLE1BQWM7RUFBZCxlQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztFQUFkLHVCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQsU0FBYyxFQUFkLE1BQWM7RUFBZCxVQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG9CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxhQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxZQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsNkJBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjLEVBQWQsTUFBYztFQUFkLGFBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxrQkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7Ozs7Ozs7O0VBQUEsU0FBYztBQUFBOztBQUFkO0VBQUEsU0FBYztFQUFkLFVBQWM7QUFBQTs7QUFBZDtFQUFBLFVBQWM7QUFBQTs7QUFBZDs7O0VBQUEsZ0JBQWM7RUFBZCxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZ0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0VBQUEsVUFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7Ozs7OztFQUFBLGNBQWMsRUFBZCxNQUFjO0VBQWQsc0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztFQUFkLFlBQWM7QUFBQTs7QUFBZCx3RUFBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtJQUFBLDZHQUFjO0VBQUE7O0FBQWQ7RUFBQSx3QkFBYztFQUFkLHdCQUFjO0VBQWQsbUJBQWM7RUFBZCxtQkFBYztFQUFkLGNBQWM7RUFBZCxjQUFjO0VBQWQsY0FBYztFQUFkLGVBQWM7RUFBZCxlQUFjO0VBQWQs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QUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBO0VBbUJBOztFQW5CQTtJQUFBLGVBbUJBO0lBbkJBO0VBbUJBOztFQW5CQTtJQUFBLG1CQW1CQTtJQW5CQTtFQW1CQTtBQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgLyogaHR0cHM6Ly9mb250cy5nb29nbGUuY29tL3NwZWNpbWVuL09yYml0cm9uICovXFxuICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXG4gIHNyYzogdXJsKC4vZm9udC9PcmJpdHJvbi1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG5AdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBsYXllciBiYXNlIHtcXG4gIGh0bWwge1xcbiAgICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgfVxcbn1cXG5cXG4udHctdGV4dC1zaGFkb3ctMTExMCB7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxMHB4IGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU2hpcCA9IHJlcXVpcmUoXCIuL3NoaXAuanNcIik7XG5jb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKFwiLi9oZWxwZXIuanNcIik7XG5cbmNsYXNzIEJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICB0aGlzLnNoaXBzID0gdGhpcy5jcmVhdGVTaGlwcygpO1xuICAgIHRoaXMubWFwU2hpcHMgPSB0aGlzLmNyZWF0ZU1hcFNoaXBzKCk7XG4gICAgdGhpcy5tYXBBdHRhY2tzID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgY3JlYXRlU2hpcHMoKSB7XG4gICAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKFwiQ2FycmllclwiLCA1KTtcbiAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpO1xuICAgIGNvbnN0IGRlc3Ryb3llciA9IG5ldyBTaGlwKFwiRGVzdHJveWVyXCIsIDMpO1xuICAgIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKFwiU3VibWFyaW5lXCIsIDMpO1xuICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0XCIsIDIpO1xuXG4gICAgcmV0dXJuIFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdF07XG4gIH1cblxuICBjcmVhdGVNYXBTaGlwcygpIHtcbiAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5nZXRDb29yZGluYXRlcyhzaGlwLCBtYXApO1xuICAgICAgc2hpcC5zZXRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIG1hcC5zZXQoYCR7Y29vcmRpbmF0ZVswXX0ke2Nvb3JkaW5hdGVbMV19YCwgc2hpcCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICBnZXRDb29yZGluYXRlcyhzaGlwLCBtYXApIHtcbiAgICBsZXQgY29vcmRpbmF0ZXMgPSBudWxsO1xuXG4gICAgd2hpbGUgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSkge1xuICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmdlbmVyYXRlQ29vcmRpbmF0ZXMoc2hpcC5heGlzLCBzaGlwLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgZ2VuZXJhdGVDb29yZGluYXRlcyhheGlzLCBsZW5ndGgpIHtcbiAgICBsZXQgeCA9IGdldFJhbmRvbUludCh0aGlzLmhlaWdodCk7XG4gICAgbGV0IHkgPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgIGxldCBoZWFkID0gW3gsIHldO1xuICAgIGxldCBjb29yZGluYXRlcyA9IFtoZWFkXTtcblxuICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgeCArPSAxO1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKFt4LCB5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIHkgLT0gMTtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgfVxuXG4gIGlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSB7XG4gICAgaWYgKGNvb3JkaW5hdGVzID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsZXQgbWFwU2hpcHMgPSBudWxsO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSBtYXBTaGlwcyA9IG1hcDtcbiAgICBlbHNlIG1hcFNoaXBzID0gdGhpcy5tYXBTaGlwcztcblxuICAgIGxldCBib29sID0gW107XG5cbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMF07XG4gICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMV07XG5cbiAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZCh4LCB5KSB8fCBtYXBTaGlwcy5oYXMoYCR7eH0ke3l9YCkpIHtcbiAgICAgICAgYm9vbC5wdXNoKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChib29sLmluY2x1ZGVzKGZhbHNlKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaXNPdXRPZkJvdW5kKHgsIHkpIHtcbiAgICBpZiAoeCA+IHRoaXMuaGVpZ2h0IC0gMSB8fCB4IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgaWYgKHkgPiB0aGlzLmhlaWdodCAtIDEgfHwgeSA8IDApIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCwgeSkge1xuICAgIGNvbnN0IGtleSA9IGAke3h9JHt5fWA7XG4gICAgY29uc3Qgc2hpcCA9IHRoaXMubWFwU2hpcHMuZ2V0KGtleSk7XG5cbiAgICBpZiAoQm9vbGVhbihzaGlwKSkge1xuICAgICAgc2hpcC5oaXQoKTtcbiAgICAgIHRoaXMubWFwQXR0YWNrcy5zZXQoa2V5LCAxKTtcbiAgICB9IGVsc2UgdGhpcy5tYXBBdHRhY2tzLnNldChrZXksIDApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG4iLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobikge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmFuZG9tSW50O1xuIiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKFwiLi9ib2FyZC5qc1wiKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoXCIuL2hlbHBlci5qc1wiKTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgIHRoaXMuc2hpcHMgPSB0aGlzLmJvYXJkLnNoaXBzO1xuICAgIHRoaXMubGlmZSA9IHRoaXMuc2hpcHMubGVuZ3RoO1xuICB9XG5cbiAgZ2VuZXJhdGVCb2FyZCgpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgdGhpcy5zaGlwcyA9IHRoaXMuYm9hcmQuc2hpcHM7XG4gICAgdGhpcy5saWZlID0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gIH1cblxuICB1cGRhdGVMaWZlKCkge1xuICAgIGxldCBsaWZlID0gMDtcbiAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgbGlmZSArPSAxO1xuICAgIH0pO1xuICAgIHRoaXMubGlmZSA9IGxpZmU7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgIHRoaXMuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICB0aGlzLnVwZGF0ZUxpZmUoKTtcbiAgfVxuXG4gIC8vIEFJXG4gIGdpdmVBdHRhY2sobWFwKSB7XG4gICAgbGV0IGF0dGFjayA9IG51bGw7XG4gICAgd2hpbGUgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKGF0dGFjaywgbWFwKSkge1xuICAgICAgYXR0YWNrID0gdGhpcy5nZW5lcmF0ZUF0dGFjaygpO1xuICAgIH1cbiAgICByZXR1cm4gYXR0YWNrO1xuICB9XG5cbiAgZ2VuZXJhdGVBdHRhY2soKSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5ib2FyZC5oZWlnaHQ7XG4gICAgbGV0IHggPSBnZXRSYW5kb21JbnQoaGVpZ2h0KTtcbiAgICBsZXQgeSA9IGdldFJhbmRvbUludChoZWlnaHQpO1xuICAgIHJldHVybiBbeCwgeV07XG4gIH1cblxuICBpc1ZhbGlkQ29vcmRpbmF0ZShjb29yZGluYXRlLCBtYXApIHtcbiAgICBpZiAoY29vcmRpbmF0ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChtYXAuaGFzKGAke2Nvb3JkaW5hdGVbMF19JHtjb29yZGluYXRlWzFdfWApKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJjb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKFwiLi9oZWxwZXIuanNcIik7XG5cbmNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXhpcyA9IHRoaXMuc2V0QXhpcygpO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIHRoaXMuaHAgPSB0aGlzLmxlbmd0aDtcbiAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgfVxuXG4gIHNldEF4aXMoKSB7XG4gICAgY29uc3QgbiA9IGdldFJhbmRvbUludCgyKTtcbiAgICBpZiAobiA9PT0gMCkgcmV0dXJuIFwieFwiO1xuICAgIHJldHVybiBcInlcIjtcbiAgfVxuXG4gIGNoYW5nZUF4aXMoKSB7XG4gICAgaWYgKHRoaXMuYXhpcyA9PT0gXCJ4XCIpIHRoaXMuYXhpcyA9IFwieVwiO1xuICAgIGVsc2UgdGhpcy5heGlzID0gXCJ4XCI7XG4gIH1cblxuICBzZXRDb29yZGluYXRlcyhjb29yZGluYXRlcykge1xuICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhwIC09IDE7XG4gICAgaWYgKHRoaXMuaHAgPT09IDApIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gIXRoaXMuYWxpdmU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiY29uc3QgYmxvY2tlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGJsb2NrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2NrLWJvYXJkXCIpO1xuICBjb25zdCBibG9ja1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvY2stc2NyZWVuXCIpO1xuICBjb25zdCBibG9ja1JhbmRvbWl6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvY2stcmFuZG9taXplXCIpO1xuXG4gIGNvbnN0IGJsb2NrcyA9IFtibG9ja0JvYXJkLCBibG9ja1NjcmVlbiwgYmxvY2tSYW5kb21pemVdO1xuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKHN0cmluZykge1xuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcbiAgICBpZiAoc3RyaW5nID09PSBcImJvYXJkXCIpIGVsZW1lbnQgPSBibG9ja0JvYXJkO1xuICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJzY3JlZW5cIikgZWxlbWVudCA9IGJsb2NrU2NyZWVuO1xuICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJyYW5kb21pemVcIikgZWxlbWVudCA9IGJsb2NrUmFuZG9taXplO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUoc3RyaW5nKSB7XG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICAgIGlmIChzdHJpbmcgPT09IFwiYm9hcmRcIikgZWxlbWVudCA9IGJsb2NrQm9hcmQ7XG4gICAgZWxzZSBpZiAoc3RyaW5nID09PSBcInNjcmVlblwiKSBlbGVtZW50ID0gYmxvY2tTY3JlZW47XG4gICAgZWxzZSBpZiAoc3RyaW5nID09PSBcInJhbmRvbWl6ZVwiKSBlbGVtZW50ID0gYmxvY2tSYW5kb21pemU7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICBibG9jay5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIHJlc2V0IH07XG59KSgpO1xuXG5leHBvcnQgeyBibG9ja2VyIH07XG4iLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgYmxvY2tlciB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZ1wiO1xuXG5jb25zdCBib2FyZERPTSA9ICgoKSA9PiB7XG4gIGNvbnN0IGJvYXJkU2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNoaXAtMVwiKTtcbiAgY29uc3QgYm9hcmRTaGlwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtc2hpcC0yXCIpO1xuICBjb25zdCBib2FyZEF0dGFjazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay0xXCIpO1xuICBjb25zdCBib2FyZEF0dGFjazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay0yXCIpO1xuICBjb25zdCBib2FyZFdyYXBwZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC13cmFwcGVyLTFcIik7XG4gIGNvbnN0IGJvYXJkV3JhcHBlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXdyYXBwZXItMlwiKTtcblxuICBjb25zdCBib2FyZFNoaXBzID0gW2JvYXJkU2hpcDEsIGJvYXJkU2hpcDJdO1xuICBjb25zdCBib2FyZEF0dGFja3MgPSBbYm9hcmRBdHRhY2sxLCBib2FyZEF0dGFjazJdO1xuICBjb25zdCBib2FyZFdyYXBwZXJzID0gW2JvYXJkV3JhcHBlcjEsIGJvYXJkV3JhcHBlcjJdO1xuXG4gIGZ1bmN0aW9uIGluaXRCb2FyZFByZShwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIxLCBib2FyZFNoaXAxKTtcbiAgICBfY3JlYXRlQm9hcmRTaGlwKHBsYXllcjIsIGJvYXJkU2hpcDIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TmV3Qm9hcmQocGxheWVyLCBuKSB7XG4gICAgcGxheWVyLmdlbmVyYXRlQm9hcmQoKTtcbiAgICBpZiAobiA9PT0gMSkge1xuICAgICAgX3Jlc2V0Qm9hcmQoYm9hcmRTaGlwMSk7XG4gICAgICBfY3JlYXRlQm9hcmRTaGlwKHBsYXllciwgYm9hcmRTaGlwMSk7XG4gICAgfSBlbHNlIGlmIChuID09PSAyKSB7XG4gICAgICBfcmVzZXRCb2FyZChib2FyZFNoaXAyKTtcbiAgICAgIF9jcmVhdGVCb2FyZFNoaXAocGxheWVyLCBib2FyZFNoaXAyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Qm9hcmQocGxheWVyMSwgcGxheWVyMikge1xuICAgIF9jcmVhdGVCb2FyZEF0dGFjayhcbiAgICAgIHBsYXllcjEsXG4gICAgICBib2FyZEF0dGFjazEsXG4gICAgICBwbGF5ZXIyLmJvYXJkLm1hcFNoaXBzLFxuICAgICAgYm9hcmRTaGlwMixcbiAgICApO1xuICAgIF9jcmVhdGVCb2FyZEF0dGFjayhcbiAgICAgIHBsYXllcjIsXG4gICAgICBib2FyZEF0dGFjazIsXG4gICAgICBwbGF5ZXIxLmJvYXJkLm1hcFNoaXBzLFxuICAgICAgYm9hcmRTaGlwMSxcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGVQcmUoKSB7XG4gICAgYm9hcmRTaGlwcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGJvYXJkQXR0YWNrcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgYm9hcmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICBib2FyZFdyYXBwZXJzW3R1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBkZWFjdGl2YXRlKG5vdFR1cm4pIHtcbiAgICBib2FyZFdyYXBwZXJzW25vdFR1cm5dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiB2aWV3U2hpcChuKSB7XG4gICAgYm9hcmRTaGlwc1tuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGJvYXJkQXR0YWNrc1tuXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdmlld0F0dGFjayhuKSB7XG4gICAgYm9hcmRTaGlwc1tuXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGJvYXJkQXR0YWNrc1tuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2ltdWxhdGVBSUNsaWNrKFt4LCB5XSwgdHVybikge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JvYXJkLWF0dGFjay0ke3R1cm4gKyAxfWApO1xuICAgIF9nZXRCb3goYCR7eH0ke3l9YCwgYm9hcmQpLmNsaWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBjb25zdCBib2FyZHMgPSBbLi4uYm9hcmRTaGlwcywgLi4uYm9hcmRBdHRhY2tzXTtcbiAgICBib2FyZHMuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIF9yZXNldEJvYXJkKGJvYXJkKTtcbiAgICB9KTtcblxuICAgIGJvYXJkQXR0YWNrcy5mb3JFYWNoKChib2FyZCkgPT4ge1xuICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9KTtcblxuICAgIGJvYXJkU2hpcHMuZm9yRWFjaCgoYm9hcmQpID0+IHtcbiAgICAgIGJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBfY3JlYXRlQm9hcmRTaGlwKHBsYXllciwgYm9hcmQpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBwbGF5ZXIuYm9hcmQuaGVpZ2h0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgIFwiYm9yZGVyLTJcIixcbiAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgIFwianVzdGlmeS1jZW50ZXJcIixcbiAgICAgICAgXCJpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgXCJvdXRsaW5lLW9mZnNldC1bLTQuNXB4XVwiLFxuICAgICAgKTtcbiAgICAgIGJveC5pZCA9IF9hc3NpZ25Cb3hJRChpLCBoZWlnaHQpO1xuICAgICAgYm94LnRleHRDb250ZW50ID0gX2Fzc2lnblNoaXBUZXh0KGJveCwgcGxheWVyLmJvYXJkLm1hcFNoaXBzKTtcbiAgICAgIGJvYXJkLmFwcGVuZChib3gpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVCb2FyZEF0dGFjayhwbGF5ZXIsIGJvYXJkLCBtYXBTaGlwRW5lbXksIGJvYXJkU2hpcEVuZW15KSB7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGxheWVyLmJvYXJkLmhlaWdodDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KGhlaWdodCwgMik7IGkrKykge1xuICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFxuICAgICAgICBcImJvcmRlci0yXCIsXG4gICAgICAgIFwiZmxleFwiLFxuICAgICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgIFwiaXRlbXMtY2VudGVyXCIsXG4gICAgICAgIFwib3V0bGluZS1vZmZzZXQtWy00cHhdXCIsXG4gICAgICAgIFwiaG92ZXI6b3V0bGluZS1kYXNoZWRcIixcbiAgICAgICAgXCJob3ZlcjpvdXRsaW5lLXllbGxvdy01MDBcIixcbiAgICAgICk7XG4gICAgICBib3guaWQgPSBfYXNzaWduQm94SUQoaSwgaGVpZ2h0KTtcbiAgICAgIF9hZGRCb3hMaXN0ZW5lcihib3gsIHBsYXllciwgbWFwU2hpcEVuZW15LCBib2FyZFNoaXBFbmVteSk7XG4gICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfYXNzaWduQm94SUQoaSwgaGVpZ2h0KSB7XG4gICAgY29uc3QgeCA9IGkgJSBoZWlnaHQ7XG4gICAgY29uc3QgeSA9IC0oTWF0aC5mbG9vcihpIC8gaGVpZ2h0KSAtIChoZWlnaHQgLSAxKSk7XG4gICAgcmV0dXJuIGAke3h9JHt5fWA7XG4gIH1cblxuICBmdW5jdGlvbiBfYXNzaWduU2hpcFRleHQoYm94LCBtYXApIHtcbiAgICBjb25zdCBzaGlwID0gbWFwLmdldChib3guaWQpO1xuICAgIGlmICghc2hpcCkgcmV0dXJuIFwiXCI7XG4gICAgYm94LmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS02MDBcIik7XG4gICAgcmV0dXJuIHNoaXAubmFtZVswXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hZGRCb3hMaXN0ZW5lcihib3gsIHBsYXllciwgbWFwU2hpcEVuZW15LCBib2FyZFNoaXBFbmVteSkge1xuICAgIGNvbnN0IHh5ID0gYm94LmlkLnNwbGl0KFwiXCIpO1xuICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBibG9ja2VyLmFjdGl2YXRlKFwiYm9hcmRcIik7XG4gICAgICAgIGxvZy5tZXNzYWdlKFxuICAgICAgICAgIGAke3BsYXllci5uYW1lfSBsYXVuY2hlcyBhIG1pc3NpbGUgdG8gWyAke3h5WzBdfSAsICR7eHlbMV19IF1gLFxuICAgICAgICAgIDEsXG4gICAgICAgICk7XG5cbiAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgXCJob3ZlcjpvdXRsaW5lLWRhc2hlZFwiLFxuICAgICAgICAgIFwiaG92ZXI6b3V0bGluZS15ZWxsb3ctNTAwXCIsXG4gICAgICAgICk7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZS1kYXNoZWRcIiwgXCJvdXRsaW5lLXllbGxvdy01MDBcIik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2hpcCA9IG1hcFNoaXBFbmVteS5nZXQoYm94LmlkKTtcblxuICAgICAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIm91dGxpbmUtZGFzaGVkXCIsIFwib3V0bGluZS15ZWxsb3ctNTAwXCIpO1xuICAgICAgICAgICAgX3BsYWNlSGl0TWFyayhib3gsIDEpO1xuICAgICAgICAgICAgX3BsYWNlSGl0TWFyayhfZ2V0Qm94KGJveC5pZCwgYm9hcmRTaGlwRW5lbXkpLCAwKTtcbiAgICAgICAgICAgIGxvZy5tZXNzYWdlKFwiSCBJIFRcIiwgMik7XG5cbiAgICAgICAgICAgIGlmIChzaGlwLmhwID09PSAxKVxuICAgICAgICAgICAgICBsb2cubWVzc2FnZShgJHtwbGF5ZXIubmFtZX0gc3VuayBhICR7c2hpcC5uYW1lfSFgLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRsaW5lLWRhc2hlZFwiLCBcIm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgIF9wbGFjZU1pc3NNYXJrKGJveCwgMSk7XG4gICAgICAgICAgICBfcGxhY2VNaXNzTWFyayhfZ2V0Qm94KGJveC5pZCwgYm9hcmRTaGlwRW5lbXkpLCAwKTtcbiAgICAgICAgICAgIGxvZy5tZXNzYWdlKFwiTSBJIFMgU1wiLCAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnYW1lLnVwZGF0ZShib3guaWQpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0Qm94KGJveElELCBib2FyZCkge1xuICAgIHJldHVybiBib2FyZC5xdWVyeVNlbGVjdG9yKGBbaWQgPSBcIiR7Ym94SUR9XCJdYCk7XG4gIH1cblxuICBmdW5jdGlvbiBfcGxhY2VIaXRNYXJrKGJveCwgbikge1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZVwiLCBcIm91dGxpbmUtcmVkLTcwMFwiLCBcInRleHQtcmVkLTcwMFwiKTtcbiAgICBpZiAobikge1xuICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiKTtcbiAgICAgIGJveC50ZXh0Q29udGVudCA9IFwiIVwiO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9wbGFjZU1pc3NNYXJrKGJveCwgbikge1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZVwiLCBcIm91dGxpbmUtZ3JlZW4tNzAwXCIsIFwidGV4dC1ncmVlbi03MDBcIik7XG4gICAgaWYgKG4pIHtcbiAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIik7XG4gICAgICBib3gudGV4dENvbnRlbnQgPSBcIi9cIjtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBfcmVzZXRCb2FyZChib2FyZCkge1xuICAgIHdoaWxlIChib2FyZC5jaGlsZHJlbi5sZW5ndGggPiAwKSBib2FyZC5yZW1vdmVDaGlsZChib2FyZC5sYXN0Q2hpbGQpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0Qm9hcmRQcmUsXG4gICAgZ2V0TmV3Qm9hcmQsXG4gICAgaW5pdEJvYXJkLFxuICAgIGFjdGl2YXRlUHJlLFxuICAgIGFjdGl2YXRlLFxuICAgIGRlYWN0aXZhdGUsXG4gICAgdmlld1NoaXAsXG4gICAgdmlld0F0dGFjayxcbiAgICBzaW11bGF0ZUFJQ2xpY2ssXG4gICAgcmVzZXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBib2FyZERPTSB9O1xuIiwiaW1wb3J0IGljb25HaXRIdWIgZnJvbSBcIi4uL2ljb24vZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5pbXBvcnQgaWNvbkxvYWRpbmcgZnJvbSBcIi4uL2ljb24vbG9hZGluZy1jdXN0b20ucG5nXCI7XG5cbmltcG9ydCB7IHRhYiB9IGZyb20gXCIuL3RhYlwiO1xuaW1wb3J0IHsgYm9hcmRET00gfSBmcm9tIFwiLi9ib2FyZC1kb21cIjtcbmltcG9ydCB7IGJsb2NrZXIgfSBmcm9tIFwiLi9ibG9ja2VyXCI7XG5pbXBvcnQgeyB3ZWxjb21lIH0gZnJvbSBcIi4vd2VsY29tZVwiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vbG9nXCI7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICBjb25zdCBpbWdMb2FkaW5nMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy0xXCIpO1xuICBjb25zdCBpbWdMb2FkaW5nMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy0yXCIpO1xuXG4gIGNvbnN0IGVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1lbmRcIik7XG4gIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xuICBjb25zdCByZW1hdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tcmVtYXRjaFwiKTtcbiAgY29uc3QgbWFpbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1tYWluLW1lbnVcIik7XG4gIGNvbnN0IHZpZXcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3LTFcIik7XG4gIGNvbnN0IHZpZXcyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3LTJcIik7XG5cbiAgY29uc3QgcmFuZG9taXplMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZG9taXplLTFcIik7XG4gIGNvbnN0IHJhbmRvbWl6ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbWl6ZS0yXCIpO1xuICBjb25zdCBva1JhbmRvbWl6ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29rLXJhbmRvbWl6ZS0xXCIpO1xuICBjb25zdCBva1JhbmRvbWl6ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29rLXJhbmRvbWl6ZS0yXCIpO1xuICBjb25zdCByYW5kb21Jbm5lcldyYXBwZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb20taW5uZXItd3JhcHBlci0xXCIpO1xuICBjb25zdCByYW5kb21Jbm5lcldyYXBwZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb20taW5uZXItd3JhcHBlci0yXCIpO1xuICBjb25zdCByYW5kb21XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb20td3JhcHBlclwiKTtcbiAgY29uc3Qgdmlld1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZXctd3JhcHBlclwiKTtcblxuICBjb25zdCBzcGFuT0sxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvay1yYW5kb21pemUtMSA+IHNwYW5cIik7XG4gIGNvbnN0IHNwYW5PSzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29rLXJhbmRvbWl6ZS0yID4gc3BhblwiKTtcblxuICBjb25zdCBpbWdMb2FkaW5ncyA9IFtpbWdMb2FkaW5nMSwgaW1nTG9hZGluZzJdO1xuICBjb25zdCB2aWV3cyA9IFt2aWV3MSwgdmlldzJdO1xuICBjb25zdCBva1JhbmRvbWl6ZXMgPSBbb2tSYW5kb21pemUxLCBva1JhbmRvbWl6ZTJdO1xuICBjb25zdCByYW5kb21Jbm5lcldyYXBwZXJzID0gW3JhbmRvbUlubmVyV3JhcHBlcjEsIHJhbmRvbUlubmVyV3JhcHBlcjJdO1xuICBjb25zdCBzcGFuT0tzID0gW3NwYW5PSzEsIHNwYW5PSzJdO1xuXG4gIGxldCBtb2RlID0gbnVsbDtcbiAgbGV0IHBsYXllcnMgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRJbWcoKTtcbiAgICBfaW5pdExpc3RlbmVycygpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFByZUdhbWUobiwgLi4uYXJyKSB7XG4gICAgbW9kZSA9IG47XG4gICAgcGxheWVycyA9IFsuLi5hcnJdO1xuICAgIHRhYi5pbml0KC4uLnBsYXllcnMpO1xuICAgIGJvYXJkRE9NLmluaXRCb2FyZFByZSguLi5wbGF5ZXJzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlUGxheWVyKHR1cm4sIG5vdFR1cm4pIHtcbiAgICBfZGVhY3RpdmF0ZShub3RUdXJuKTtcbiAgICBfYWN0aXZhdGUodHVybik7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRHYW1lKG5hbWUpIHtcbiAgICBibG9ja2VyLmRlYWN0aXZhdGUoXCJib2FyZFwiKTtcbiAgICBibG9ja2VyLmFjdGl2YXRlKFwic2NyZWVuXCIpO1xuICAgIHdpbm5lci50ZXh0Q29udGVudCA9IGAke25hbWV9IHdpbnMhYDtcbiAgICBlbmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gIGZ1bmN0aW9uIF9pbml0SW1nKCkge1xuICAgIGNvbnN0IGltZ0dpdEh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbi1naXRodWJcIik7XG5cbiAgICBpbWdHaXRIdWIuc3JjID0gaWNvbkdpdEh1YjtcbiAgICBpbWdMb2FkaW5ncy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5zcmMgPSBpY29uTG9hZGluZztcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0TGlzdGVuZXJzKCkge1xuICAgIHJlbWF0Y2gub25jbGljayA9ICgpID0+IHtcbiAgICAgIF9yZXNldCgpO1xuICAgICAgd2VsY29tZS5yZW1hdGNoKG1vZGUpO1xuICAgIH07XG5cbiAgICBtYWluTWVudS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgX3Jlc2V0KCk7XG4gICAgICB3ZWxjb21lLmhpZGUoXCJtYWluXCIpO1xuICAgICAgd2VsY29tZS5zaG93KFwid2VsY29tZVwiKTtcbiAgICB9O1xuXG4gICAgdmlldzEub25wb2ludGVyZG93biA9ICgpID0+IHtcbiAgICAgIGJvYXJkRE9NLnZpZXdTaGlwKDApO1xuICAgIH07XG4gICAgdmlldzEub25wb2ludGVydXAgPSAoKSA9PiB7XG4gICAgICBib2FyZERPTS52aWV3QXR0YWNrKDApO1xuICAgIH07XG5cbiAgICByYW5kb21pemUxLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBib2FyZERPTS5nZXROZXdCb2FyZChbLi4ucGxheWVyc11bMF0sIDEpO1xuICAgIH07XG4gICAgcmFuZG9taXplMi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYm9hcmRET00uZ2V0TmV3Qm9hcmQoWy4uLnBsYXllcnNdWzFdLCAyKTtcbiAgICB9O1xuXG4gICAgb2tSYW5kb21pemUxLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAobW9kZSA9PT0gMSkge1xuICAgICAgICBibG9ja2VyLmFjdGl2YXRlKFwicmFuZG9taXplXCIpO1xuICAgICAgICBva1JhbmRvbWl6ZTEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBzcGFuT0sxLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGltZ0xvYWRpbmcxLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIF9jb3VudERvd25Ub0dhbWUoKTtcbiAgICAgIH0gZWxzZSBfYWN0aXZhdGVQbGF5ZXJQcmUoMSk7XG4gICAgfTtcblxuICAgIG9rUmFuZG9taXplMi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgYmxvY2tlci5hY3RpdmF0ZShcInJhbmRvbWl6ZVwiKTtcbiAgICAgIG9rUmFuZG9taXplMi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICBzcGFuT0syLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBpbWdMb2FkaW5nMi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgX2NvdW50RG93blRvR2FtZSgpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBfY291bnREb3duVG9HYW1lKG4gPSAzKSB7XG4gICAgbG9nLm1lc3NhZ2UoXCJHYW1lIHN0YXJ0aW5nIGluXCIsIDEpO1xuICAgIGxvZy5tZXNzYWdlKGAke259YCwgMik7XG4gICAgY29uc3Qgc3RhcnRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIG4tLTtcbiAgICAgIGlmIChuID09PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoc3RhcnRJbnRlcnZhbCk7XG4gICAgICAgIF9pbml0R2FtZSguLi5wbGF5ZXJzKTtcbiAgICAgIH0gZWxzZSBsb2cubWVzc2FnZShgJHtufWAsIDIpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRHYW1lKC4uLnBsYXllcnMpIHtcbiAgICByYW5kb21XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgdmlld1dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgIGJvYXJkRE9NLmFjdGl2YXRlUHJlKCk7XG4gICAgYm9hcmRET00uaW5pdEJvYXJkKC4uLnBsYXllcnMpO1xuXG4gICAgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgIHZpZXcyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHZpZXcyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbnBvaW50ZXJkb3duXCIsIGJvYXJkRE9NLnZpZXdTaGlwKTtcbiAgICAgIHZpZXcyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbnBvaW50ZXJ1cFwiLCBib2FyZERPTS52aWV3QXR0YWNrKTtcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09IDIpIHtcbiAgICAgIHZpZXcyLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB2aWV3Mi5vbnBvaW50ZXJkb3duID0gKCkgPT4ge1xuICAgICAgICBib2FyZERPTS52aWV3U2hpcCgxKTtcbiAgICAgIH07XG4gICAgICB2aWV3Mi5vbnBvaW50ZXJ1cCA9ICgpID0+IHtcbiAgICAgICAgYm9hcmRET00udmlld0F0dGFjaygxKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZ2FtZS5ydW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hY3RpdmF0ZVBsYXllclByZShuKSB7XG4gICAgX2RlYWN0aXZhdGVQcmUoKyFuKTtcbiAgICBfYWN0aXZhdGVQcmUobik7XG4gIH1cblxuICBmdW5jdGlvbiBfYWN0aXZhdGVQcmUobikge1xuICAgIHRhYi5hY3RpdmF0ZShuKTtcbiAgICBib2FyZERPTS5hY3RpdmF0ZShuKTtcbiAgICByYW5kb21Jbm5lcldyYXBwZXJzW25dLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBfZGVhY3RpdmF0ZVByZShuKSB7XG4gICAgdGFiLmRlYWN0aXZhdGUobik7XG4gICAgYm9hcmRET00uZGVhY3RpdmF0ZShuKTtcbiAgICByYW5kb21Jbm5lcldyYXBwZXJzW25dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBfYWN0aXZhdGUodHVybikge1xuICAgIHRhYi5hY3RpdmF0ZSh0dXJuKTtcbiAgICBib2FyZERPTS5hY3RpdmF0ZSh0dXJuKTtcbiAgICB2aWV3c1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2RlYWN0aXZhdGUobm90VHVybikge1xuICAgIHRhYi5kZWFjdGl2YXRlKG5vdFR1cm4pO1xuICAgIGJvYXJkRE9NLmRlYWN0aXZhdGUobm90VHVybik7XG4gICAgdmlld3Nbbm90VHVybl0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9yZXNldCgpIHtcbiAgICBfcmVzZXRPSygpO1xuICAgIF9yZXNldFdyYXBwZXJzKCk7XG4gICAgYm9hcmRET00ucmVzZXQoKTtcbiAgICBsb2cucmVzZXQoKTtcbiAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgZW5kLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVzZXRXcmFwcGVycygpIHtcbiAgICB2aWV3V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJhbmRvbVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBfYWN0aXZhdGVQbGF5ZXJQcmUoMCk7XG4gIH1cblxuICBmdW5jdGlvbiBfcmVzZXRPSygpIHtcbiAgICBva1JhbmRvbWl6ZXMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBzcGFuT0tzLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgICBpbWdMb2FkaW5ncy5mb3JFYWNoKChpbWcpID0+IHtcbiAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgaW5pdFByZUdhbWUsIGFjdGl2YXRlUGxheWVyLCBlbmRHYW1lIH07XG59KSgpO1xuXG5leHBvcnQgeyBkb20gfTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgdGFiIH0gZnJvbSBcIi4vdGFiXCI7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gXCIuL2JvYXJkLWRvbVwiO1xuaW1wb3J0IHsgYmxvY2tlciB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZ1wiO1xuXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKFwiLi4vbW9kdWxlLWJhY2stZW5kL3BsYXllci5qc1wiKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoXCIuLi9tb2R1bGUtYmFjay1lbmQvaGVscGVyLmpzXCIpO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcnMgPSBudWxsO1xuICBsZXQgdHVybiA9IG51bGw7XG4gIGxldCBub3RUdXJuID0gbnVsbDtcblxuICBmdW5jdGlvbiBjcmVhdGVHYW1lKG5hbWUxLCBuYW1lMiwgbW9kZSkge1xuICAgIF9pbml0UGxheWVycyhuYW1lMSwgbmFtZTIpO1xuICAgIGRvbS5pbml0UHJlR2FtZShtb2RlLCAuLi5wbGF5ZXJzKTtcbiAgICBsb2cucmVzZXQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICBsb2cubWVzc2FnZShcIldlYXBvbidzIGZyZWUhXCIsIDEpO1xuICAgIF9hY3RpdmF0ZVR1cm4oKTtcbiAgICBfQUltb3ZlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGUoaWQpIHtcbiAgICBjb25zdCB4eSA9IGlkLnNwbGl0KFwiXCIpO1xuICAgIHBsYXllcnNbbm90VHVybl0ucmVjZWl2ZUF0dGFjayhbK3h5WzBdLCAreHlbMV1dKTtcbiAgICAvLyBwbGF5ZXJzW25vdFR1cm5dLmxpZmUgPSAwOyAvLyB0ZXN0XG4gICAgdGFiLnVwZGF0ZUxpZmUocGxheWVyc1tub3RUdXJuXSwgbm90VHVybik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChfaXNHYW1lKCkpIHtcbiAgICAgICAgbG9nLm1lc3NhZ2UoYCR7cGxheWVyc1t0dXJuXS5uYW1lfSB3aW5zIWAsIDEpO1xuICAgICAgICBkb20uZW5kR2FtZShwbGF5ZXJzW3R1cm5dLm5hbWUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF91cGRhdGVUdXJuKCk7XG4gICAgICBfYWN0aXZhdGVUdXJuKCk7XG4gICAgICBfQUltb3ZlKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICBmdW5jdGlvbiBfaW5pdFBsYXllcnMobmFtZTEsIG5hbWUyKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIobmFtZTEpO1xuICAgIGNvbnN0IHBsYXllcjIgPSBuZXcgUGxheWVyKG5hbWUyKTtcbiAgICBwbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjJdO1xuICAgIHR1cm4gPSBnZXRSYW5kb21JbnQoMik7XG4gICAgbm90VHVybiA9ICshdHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hY3RpdmF0ZVR1cm4oKSB7XG4gICAgZG9tLmFjdGl2YXRlUGxheWVyKHR1cm4sIG5vdFR1cm4pO1xuICAgIGlmIChwbGF5ZXJzW3R1cm5dLm5hbWUgIT09IFwiQUlcIikgYmxvY2tlci5kZWFjdGl2YXRlKFwiYm9hcmRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBfQUltb3ZlKCkge1xuICAgIGlmIChwbGF5ZXJzW3R1cm5dLm5hbWUgPT09IFwiQUlcIikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcCA9IHBsYXllcnNbbm90VHVybl0uYm9hcmQubWFwQXR0YWNrcztcbiAgICAgICAgY29uc3QgYXR0YWNrID0gcGxheWVyc1t0dXJuXS5naXZlQXR0YWNrKG1hcCk7XG4gICAgICAgIGJvYXJkRE9NLnNpbXVsYXRlQUlDbGljayhhdHRhY2ssIHR1cm4pO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2lzR2FtZSgpIHtcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgICBpZiAocGxheWVyLmxpZmUgPT09IDApIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBfdXBkYXRlVHVybigpIHtcbiAgICBjb25zdCB0ZW1wID0gdHVybjtcbiAgICB0dXJuID0gKyF0dXJuO1xuICAgIG5vdFR1cm4gPSB0ZW1wO1xuICB9XG5cbiAgcmV0dXJuIHsgY3JlYXRlR2FtZSwgcnVuLCB1cGRhdGUgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGdhbWUgfTtcbiIsImNvbnN0IGxvZyA9ICgoKSA9PiB7XG4gIGNvbnN0IGxvZ0RpdjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZy0xXCIpO1xuICBjb25zdCBsb2dEaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2ctMlwiKTtcblxuICBmdW5jdGlvbiBtZXNzYWdlKHN0cmluZywgbikge1xuICAgIGlmIChuID09PSAxKSB7XG4gICAgICByZXNldCgpO1xuICAgICAgbG9nRGl2MS50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgICB9IGVsc2UgaWYgKG4gPT09IDIpIGxvZ0RpdjIudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBsb2dEaXYxLnRleHRDb250ZW50ID0gXCJQbGVhc2UgY2hvb3NlIHlvdXIgcHJlZmVycmVkIGZvcm1hdGlvblwiO1xuICAgIGxvZ0RpdjIudGV4dENvbnRlbnQgPSBcIi4uLlwiO1xuICB9XG5cbiAgcmV0dXJuIHsgbWVzc2FnZSwgcmVzZXQgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGxvZyB9O1xuIiwiY29uc3QgdGFiID0gKCgpID0+IHtcbiAgY29uc3QgdGFiMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFiLTFcIik7XG4gIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RhYi0yXCIpO1xuICBjb25zdCBuYW1lMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS0xXCIpO1xuICBjb25zdCBuYW1lMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS0yXCIpO1xuICBjb25zdCBsaWZlMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlmZS0xXCIpO1xuICBjb25zdCBsaWZlMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlmZS0yXCIpO1xuXG4gIGNvbnN0IHRhYnMgPSBbdGFiMSwgdGFiMl07XG4gIGNvbnN0IGxpdmVzID0gW2xpZmUxLCBsaWZlMl07XG5cbiAgZnVuY3Rpb24gaW5pdChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgX2luaXROYW1lKHBsYXllcjEsIG5hbWUxKTtcbiAgICBfaW5pdE5hbWUocGxheWVyMiwgbmFtZTIpO1xuICAgIHVwZGF0ZUxpZmUocGxheWVyMSwgMCk7XG4gICAgdXBkYXRlTGlmZShwbGF5ZXIyLCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxpZmUocGxheWVyLCB0dXJuKSB7XG4gICAgbGl2ZXNbdHVybl0udGV4dENvbnRlbnQgPSBwbGF5ZXIubGlmZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICB0YWJzW3R1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJtYi0yXCIsIFwiYmctc2xhdGUtNDAwXCIpO1xuICAgIHRhYnNbdHVybl0uY2xhc3NMaXN0LmFkZChcImJnLXNsYXRlLTIwMFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUobm90VHVybikge1xuICAgIHRhYnNbbm90VHVybl0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXNsYXRlLTIwMFwiKTtcbiAgICB0YWJzW25vdFR1cm5dLmNsYXNzTGlzdC5hZGQoXCJtYi0yXCIsIFwiYmctc2xhdGUtNDAwXCIpO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gX2luaXROYW1lKHBsYXllciwgbmFtZSkge1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBwbGF5ZXIubmFtZTtcbiAgfVxuXG4gIHJldHVybiB7IGluaXQsIHVwZGF0ZUxpZmUsIGFjdGl2YXRlLCBkZWFjdGl2YXRlIH07XG59KSgpO1xuXG5leHBvcnQgeyB0YWIgfTtcbiIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IHdlbGNvbWUgPSAoKCkgPT4ge1xuICBjb25zdCBzY3JlZW5XZWxjb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWxjb21lXCIpO1xuICBjb25zdCBzY3JlZW5NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gIGNvbnN0IGJ1dHRvblBWQUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1wdmFpXCIpO1xuICBjb25zdCBidXR0b25QVlAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1wdnBcIik7XG5cbiAgY29uc3QgZGlhbG9nUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLXB2YWlcIik7XG4gIGNvbnN0IG5hbWVQVkFJMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS1wdmFpLTFcIik7XG4gIGNvbnN0IG9rUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2stcHZhaVwiKTtcbiAgY29uc3QgY2xvc2VQVkFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wdmFpXCIpO1xuXG4gIGNvbnN0IGRpYWxvZ1BWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLXB2cFwiKTtcbiAgY29uc3QgbmFtZVBWUDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtcHZwLTFcIik7XG4gIGNvbnN0IG5hbWVQVlAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLXB2cC0yXCIpO1xuICBjb25zdCBva1BWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2stcHZwXCIpO1xuICBjb25zdCBjbG9zZVBWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHZwXCIpO1xuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX2luaXRQVkFJKCk7XG4gICAgX2luaXRQVlAoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3coc3RyaW5nKSB7XG4gICAgbGV0IHNjcmVlbiA9IG51bGw7XG4gICAgaWYgKHN0cmluZyA9PT0gXCJ3ZWxjb21lXCIpIHNjcmVlbiA9IHNjcmVlbldlbGNvbWU7XG4gICAgZWxzZSBpZiAoc3RyaW5nID09PSBcIm1haW5cIikgc2NyZWVuID0gc2NyZWVuTWFpbjtcbiAgICBzY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGUoc3RyaW5nKSB7XG4gICAgbGV0IHNjcmVlbiA9IG51bGw7XG4gICAgaWYgKHN0cmluZyA9PT0gXCJ3ZWxjb21lXCIpIHNjcmVlbiA9IHNjcmVlbldlbGNvbWU7XG4gICAgZWxzZSBpZiAoc3RyaW5nID09PSBcIm1haW5cIikgc2NyZWVuID0gc2NyZWVuTWFpbjtcbiAgICBzY3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbWF0Y2gobW9kZSkge1xuICAgIGlmIChtb2RlID09PSAxKSBva1BWQUkuY2xpY2soKTtcbiAgICBlbHNlIGlmIChtb2RlID09PSAyKSBva1BWUC5jbGljaygpO1xuICB9XG5cbiAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gX2luaXRQVkFJKCkge1xuICAgIGJ1dHRvblBWQUkub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRpYWxvZ1BWQUkuc2hvd01vZGFsKCk7XG4gICAgfTtcbiAgICBjbG9zZVBWQUkub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRpYWxvZ1BWQUkuY2xvc2UoKTtcbiAgICB9O1xuICAgIG9rUFZBSS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZ2FtZS5jcmVhdGVHYW1lKG5hbWVQVkFJMS52YWx1ZSB8fCBcIlBsYXllciAxXCIsIFwiQUlcIiwgMSk7XG4gICAgICBuYW1lUFZBSTEudmFsdWUgPSBcIlwiO1xuICAgICAgX2hpZGVXZWxjb21lKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0UFZQKCkge1xuICAgIGJ1dHRvblBWUC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgZGlhbG9nUFZQLnNob3dNb2RhbCgpO1xuICAgIH07XG4gICAgY2xvc2VQVlAub25jbGljayA9ICgpID0+IHtcbiAgICAgIGRpYWxvZ1BWUC5jbG9zZSgpO1xuICAgIH07XG4gICAgb2tQVlAub25jbGljayA9ICgpID0+IHtcbiAgICAgIGdhbWUuY3JlYXRlR2FtZShcbiAgICAgICAgbmFtZVBWUDEudmFsdWUgfHwgXCJQbGF5ZXIgMVwiLFxuICAgICAgICBuYW1lUFZQMi52YWx1ZSB8fCBcIlBsYXllciAyXCIsXG4gICAgICAgIDIsXG4gICAgICApO1xuICAgICAgbmFtZVBWUDEudmFsdWUgPSBcIlwiO1xuICAgICAgbmFtZVBWUDIudmFsdWUgPSBcIlwiO1xuICAgICAgX2hpZGVXZWxjb21lKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9oaWRlV2VsY29tZSgpIHtcbiAgICBzY3JlZW5XZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgc2NyZWVuTWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5pdCwgc2hvdywgaGlkZSwgcmVtYXRjaCB9O1xufSkoKTtcblxuZXhwb3J0IHsgd2VsY29tZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB3ZWxjb21lIH0gZnJvbSBcIi4vbW9kdWxlLWZyb250LWVuZC93ZWxjb21lXCI7XG5pbXBvcnQgeyBkb20gfSBmcm9tIFwiLi9tb2R1bGUtZnJvbnQtZW5kL2RvbVwiO1xuXG5kb20uaW5pdCgpO1xud2VsY29tZS5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
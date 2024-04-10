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
.h-\\[40vh\\] {
    height: 40vh;
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
.overflow-y-auto {
    overflow-y: auto;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    /* https://fonts.google.com/specimen/Orbitron */\n    font-family: \"Orbitron\";\n    src: url(./font/Orbitron-Regular.ttf) format(\"TrueType\");\n}\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n    html {\n      font-family: \"Orbitron\", system-ui, sans-serif;\n    }\n}\n\n.tw-text-shadow-1110 {\n    text-shadow: 1px 1px 10px black;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");




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
        box.addEventListener("click", function() {
            _blocker__WEBPACK_IMPORTED_MODULE_1__.blocker.activateBlock("board");
            _log__WEBPACK_IMPORTED_MODULE_2__.log.message(`${player.name} => [ ${xy[0]} , ${xy[1]} ]`);
            box.classList.remove("hover:outline-dashed", "hover:outline-yellow-500");
            box.classList.add("outline-dashed", "outline-yellow-500");
            
            setTimeout(() => {
                if (mapShipEnemy.has(box.id)) {
                    box.classList.remove("outline-dashed", "outline-yellow-500");
                    _placeHitMark(box, 1);
                    _placeHitMark(_getBox(box.id, boardShipEnemy), 0);
                    _log__WEBPACK_IMPORTED_MODULE_2__.log.message("Hit!");
                } else {
                    box.classList.remove("outline-dashed", "outline-yellow-500");
                    _placeMissMark(box, 1);
                    _placeMissMark(_getBox(box.id, boardShipEnemy), 0);
                    _log__WEBPACK_IMPORTED_MODULE_2__.log.message("Miss...");
                }

                _game__WEBPACK_IMPORTED_MODULE_0__.game.update(box.id);
            }, 500)
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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");








const dom = (() => {
    const test = document.querySelector("#test");
    const end = document.querySelector("#main-end");
    const winner = document.querySelector("#winner");
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
            endGame();
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

    function endGame(name) {
        _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.deactivateBlock("board");
        _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.activateBlock("screen");
        winner.textContent = `${name} wins!`;
        end.classList.remove("hidden");
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
        _log__WEBPACK_IMPORTED_MODULE_5__.log.reset();
        _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.reset();
        end.classList.add("hidden");
    }

    return { init, activatePlayer, endGame };
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
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./src/module-front-end/log.js");






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
        players[notTurn].life = 0; // test
        _tab__WEBPACK_IMPORTED_MODULE_1__.tab.updateLife(players[notTurn], notTurn);

        setTimeout(() => {
            if (_isGame()) {
                _log_js__WEBPACK_IMPORTED_MODULE_4__.log.message(`${players[turn].name} wins!`);
                _dom__WEBPACK_IMPORTED_MODULE_0__.dom.endGame(players[turn].name);
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
    const logDiv = document.querySelector("#log");

    function message(string) {
        const span = document.createElement("span");
        span.textContent = string;
        logDiv.append(span);
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    function reset() {
        while (logDiv.children.length > 0) logDiv.removeChild(logDiv.lastChild);
    }

    return { message, reset };
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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");



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
            _log__WEBPACK_IMPORTED_MODULE_1__.log.message("Game mode: Player vs AI");
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
            _log__WEBPACK_IMPORTED_MODULE_1__.log.message("Game mode: Player vs Player");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxzQ0FBc0Msc0ZBQXNGLGlFQUFpRSxHQUFH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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQztBQUNBLFlBQVksdUNBQUk7QUFDaEI7QUFDQTtBQUNBLFlBQVkscUNBQUc7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUREO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2dDOztBQUVyRCw4REFBTyxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1iYWNrLWVuZC9ib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvYmxvY2tlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC9ib2FyZC1kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvbG9nLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL3RhYi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC93ZWxjb21lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvT3JiaXRyb24tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9PcmJpdHJvbiAqL1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwge1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAgIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHctcm90YXRlOiAwO1xuICAgIC0tdHctc2tldy14OiAwO1xuICAgIC0tdHctc2tldy15OiAwO1xuICAgIC0tdHctc2NhbGUteDogMTtcbiAgICAtLXR3LXNjYWxlLXk6IDE7XG4gICAgLS10dy1wYW4teDogIDtcbiAgICAtLXR3LXBhbi15OiAgO1xuICAgIC0tdHctcGluY2gtem9vbTogIDtcbiAgICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgICAtLXR3LW9yZGluYWw6ICA7XG4gICAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gICAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gICAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAgIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAgIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gICAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LWJsdXI6ICA7XG4gICAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctY29udHJhc3Q6ICA7XG4gICAgLS10dy1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctaW52ZXJ0OiAgO1xuICAgIC0tdHctc2F0dXJhdGU6ICA7XG4gICAgLS10dy1zZXBpYTogIDtcbiAgICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAgIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAgIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHctcm90YXRlOiAwO1xuICAgIC0tdHctc2tldy14OiAwO1xuICAgIC0tdHctc2tldy15OiAwO1xuICAgIC0tdHctc2NhbGUteDogMTtcbiAgICAtLXR3LXNjYWxlLXk6IDE7XG4gICAgLS10dy1wYW4teDogIDtcbiAgICAtLXR3LXBhbi15OiAgO1xuICAgIC0tdHctcGluY2gtem9vbTogIDtcbiAgICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgICAtLXR3LW9yZGluYWw6ICA7XG4gICAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gICAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gICAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAgIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAgIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gICAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LWJsdXI6ICA7XG4gICAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctY29udHJhc3Q6ICA7XG4gICAgLS10dy1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctaW52ZXJ0OiAgO1xuICAgIC0tdHctc2F0dXJhdGU6ICA7XG4gICAgLS10dy1zZXBpYTogIDtcbiAgICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAgIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAgIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4uYWJzb2x1dGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5yaWdodC0zIHtcbiAgICByaWdodDogMC43NXJlbTtcbn1cbi50b3AtMVxcXFwvMiB7XG4gICAgdG9wOiA1MCU7XG59XG4udG9wLTIge1xuICAgIHRvcDogMC41cmVtO1xufVxuLm1iLTIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5tci1cXFxcWzQ1cHhcXFxcXSB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xufVxuLm10LTAge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbi5tdC0wXFxcXC41IHtcbiAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcbn1cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG59XG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmgtMTAge1xuICAgIGhlaWdodDogMi41cmVtO1xufVxuLmgtOCB7XG4gICAgaGVpZ2h0OiAycmVtO1xufVxuLmgtXFxcXFsxMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMTB2aDtcbn1cbi5oLVxcXFxbMTV2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG4uaC1cXFxcWzIwXFxcXCVcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG4uaC1cXFxcWzIwMHB4XFxcXF0ge1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4uaC1cXFxcWzIwdmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMHZoO1xufVxuLmgtXFxcXFsyOHZoXFxcXF0ge1xuICAgIGhlaWdodDogMjh2aDtcbn1cbi5oLVxcXFxbNDB2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDQwdmg7XG59XG4uaC1cXFxcWzQ2dmhcXFxcXSB7XG4gICAgaGVpZ2h0OiA0NnZoO1xufVxuLmgtXFxcXFs1MHZoXFxcXF0ge1xuICAgIGhlaWdodDogNTB2aDtcbn1cbi5oLWZ1bGwge1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5oLXNjcmVlbiB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi53LTgge1xuICAgIHdpZHRoOiAycmVtO1xufVxuLnctXFxcXFsxNTBweFxcXFxdIHtcbiAgICB3aWR0aDogMTUwcHg7XG59XG4udy1cXFxcWzIwdmhcXFxcXSB7XG4gICAgd2lkdGg6IDIwdmg7XG59XG4udy1cXFxcWzI4dmhcXFxcXSB7XG4gICAgd2lkdGg6IDI4dmg7XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi53LVxcXFxbMzB2aFxcXFxdIHtcbiAgICB3aWR0aDogMzB2aDtcbn1cbi53LVxcXFxbNDAwcHhcXFxcXSB7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuLnctXFxcXFs0NnZoXFxcXF0ge1xuICAgIHdpZHRoOiA0NnZoO1xufVxuLnctXFxcXFs1MDBweFxcXFxdIHtcbiAgICB3aWR0aDogNTAwcHg7XG59XG4udy1cXFxcWzUwdmhcXFxcXSB7XG4gICAgd2lkdGg6IDUwdmg7XG59XG4udy1mdWxsIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi53LXNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG4uc2VsZWN0LW5vbmUge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmdyaWQtY29scy0xMCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKTtcbn1cbi5ncmlkLXJvd3MtMTAge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBtaW5tYXgoMCwgMWZyKSk7XG59XG4uZmxleC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLml0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LWNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uanVzdGlmeS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uanVzdGlmeS1hcm91bmQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLmp1c3RpZnktZXZlbmx5IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi5nYXAtMyB7XG4gICAgZ2FwOiAwLjc1cmVtO1xufVxuLmdhcC1cXFxcWzF2d1xcXFxdIHtcbiAgICBnYXA6IDF2dztcbn1cbi5nYXAtXFxcXFsyMHB4XFxcXF0ge1xuICAgIGdhcDogMjBweDtcbn1cbi5nYXAtXFxcXFs1dndcXFxcXSB7XG4gICAgZ2FwOiA1dnc7XG59XG4uc2VsZi1lbmQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuLm92ZXJmbG93LXktYXV0byB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5yb3VuZGVkLTJ4bCB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5yb3VuZGVkLWxnIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4ucm91bmRlZC1iLWxnIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXQtbGcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtdGwtbGcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXRyLWxnIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuLmJvcmRlci0yIHtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbn1cbi5ib3JkZXItc2xhdGUtNDAwIHtcbiAgICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAxKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS0yMDAge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTQwMCB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtNjAwIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgODUsIDEwNSwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgODUsIDEwNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5iZy1ncmFkaWVudC10by1yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG59XG4uZnJvbS1zbGF0ZS01MDAge1xuICAgIC0tdHctZ3JhZGllbnQtZnJvbTogIzY0NzQ4YiB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgICAtLXR3LWdyYWRpZW50LXRvOiByZ2JhKDEwMCwgMTE2LCAxMzksIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbiAgICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuLnRvLXNsYXRlLTYwMCB7XG4gICAgLS10dy1ncmFkaWVudC10bzogIzQ3NTU2OSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG59XG4ucC0zIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuLnAtXFxcXFsxdmhcXFxcXSB7XG4gICAgcGFkZGluZzogMXZoO1xufVxuLnAtXFxcXFsydmhcXFxcXSB7XG4gICAgcGFkZGluZzogMnZoO1xufVxuLnB4LVxcXFxbMnZoXFxcXF0ge1xuICAgIHBhZGRpbmctbGVmdDogMnZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJ2aDtcbn1cbi5wdC1cXFxcWzFcXFxcLjV2aFxcXFxdIHtcbiAgICBwYWRkaW5nLXRvcDogMS41dmg7XG59XG4uaW5kZW50LTIge1xuICAgIHRleHQtaW5kZW50OiAwLjVyZW07XG59XG4udGV4dC0yeGwge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuLnRleHQtM3hsIHtcbiAgICBmb250LXNpemU6IDEuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xufVxuLnRleHQtNXhsIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXhsIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG59XG4udGV4dC1ncmVlbi03MDAge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2JhKDIxLCAxMjgsIDYxLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyMSwgMTI4LCA2MSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1yZWQtNzAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgxODUsIDI4LCAyOCwgMSk7XG4gICAgY29sb3I6IHJnYmEoMTg1LCAyOCwgMjgsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtc2xhdGUtMjAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5vcGFjaXR5LTgwIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG4uc2hhZG93LTExMTAge1xuICAgIC0tdHctc2hhZG93OiAxcHggMXB4IDEwcHggaHNsKDAsIDAlLCAzMCUpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDFweCAxcHggMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMXB4IDFweCAxMHB4IGhzbCgwLCAwJSwgMzAlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cbi5vdXRsaW5lIHtcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbn1cbi5vdXRsaW5lLWRhc2hlZCB7XG4gICAgb3V0bGluZS1zdHlsZTogZGFzaGVkO1xufVxuLm91dGxpbmUtb2Zmc2V0LVxcXFxbLTRcXFxcLjVweFxcXFxdIHtcbiAgICBvdXRsaW5lLW9mZnNldDogLTQuNXB4O1xufVxuLm91dGxpbmUtb2Zmc2V0LVxcXFxbLTRweFxcXFxdIHtcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcbn1cbi5vdXRsaW5lLWdyZWVuLTcwMCB7XG4gICAgb3V0bGluZS1jb2xvcjogIzE1ODAzZDtcbn1cbi5vdXRsaW5lLXJlZC03MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICNiOTFjMWM7XG59XG4ub3V0bGluZS1zbGF0ZS02MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICM0NzU1Njk7XG59XG4ub3V0bGluZS15ZWxsb3ctNTAwIHtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZWFiMzA4O1xufVxuXG4udHctdGV4dC1zaGFkb3ctMTExMCB7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcbn1cblxuLmJhY2tkcm9wXFxcXDpiYWNrZHJvcC1ibHVyLXNtOjpiYWNrZHJvcCB7XG4gICAgLS10dy1iYWNrZHJvcC1ibHVyOiBibHVyKDRweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdHctYmFja2Ryb3AtYmx1cikgdmFyKC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzcykgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xufVxuXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTQwMDpob3ZlciB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6Ymctc2xhdGUtNTAwOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDp0ZXh0LXNsYXRlLTIwMDpob3ZlciB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6b3V0bGluZS1kYXNoZWQ6aG92ZXIge1xuICAgIG91dGxpbmUtc3R5bGU6IGRhc2hlZDtcbn1cblxuLmhvdmVyXFxcXDpvdXRsaW5lLXllbGxvdy01MDA6aG92ZXIge1xuICAgIG91dGxpbmUtY29sb3I6ICNlYWIzMDg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwi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QW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSxzQkFBbUI7SUFBbkIsOEtBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEseUJBQW1CO09BQW5CLHNCQUFtQjtZQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsa0NBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsOEJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsc0JBQW1CO0lBQW5CLG9DQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLGtCQUFtQjtJQUFuQix3Q0FBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxrQkFBbUI7SUFBbkIsd0NBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsa0JBQW1CO0lBQW5CLHNDQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSw0REFBbUI7SUFBbkIsdUVBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSxpQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsaUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsbUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsZUFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxtQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxrQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxvQkFBbUI7SUFBbkIsMkJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsb0JBQW1CO0lBQW5CLDJCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLG9CQUFtQjtJQUFuQiw2QkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLHlDQUFtQjtJQUFuQix3REFBbUI7SUFBbkIsOEVBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjs7QUFRbkI7SUFDSSwrQkFBK0I7QUFDbkM7O0FBbEJBO0lBQUEsNkJBa0JDO0lBbEJELGlRQWtCQztZQWxCRCx5UEFrQkM7SUFsQkQsK1FBa0JDO1lBbEJEO0FBa0JDOztBQWxCRDtJQUFBLGtCQWtCQztJQWxCRCx3Q0FrQkM7SUFsQkQ7QUFrQkM7O0FBbEJEO0lBQUEsa0JBa0JDO0lBbEJELHdDQWtCQztJQWxCRDtBQWtCQzs7QUFsQkQ7SUFBQSxvQkFrQkM7SUFsQkQsNkJBa0JDO0lBbEJEO0FBa0JDOztBQWxCRDtJQUFBO0FBa0JDOztBQWxCRDtJQUFBO0FBa0JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICAvKiBodHRwczovL2ZvbnRzLmdvb2dsZS5jb20vc3BlY2ltZW4vT3JiaXRyb24gKi9cXG4gICAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCI7XFxuICAgIHNyYzogdXJsKC4vZm9udC9PcmJpdHJvbi1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJUcnVlVHlwZVxcXCIpO1xcbn1cXG5cXG5AdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblxcbkBsYXllciBiYXNlIHtcXG4gICAgaHRtbCB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJPcmJpdHJvblxcXCIsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gICAgfVxcbn1cXG5cXG4udHctdGV4dC1zaGFkb3ctMTExMCB7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDEwcHggYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBTaGlwID0gcmVxdWlyZSgnLi9zaGlwLmpzJyk7XG5jb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBCb2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTA7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmNyZWF0ZVNoaXBzKCk7XG4gICAgICAgIHRoaXMubWFwU2hpcHMgPSB0aGlzLmNyZWF0ZU1hcFNoaXBzKCk7XG4gICAgICAgIHRoaXMubWFwQXR0YWNrcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVTaGlwcygpIHtcbiAgICAgICAgY29uc3QgY2FycmllciA9IG5ldyBTaGlwKFwiQ2FycmllclwiLCA1KTtcbiAgICAgICAgY29uc3QgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKFwiQmF0dGxlc2hpcFwiLCA0KTtcbiAgICAgICAgY29uc3QgZGVzdHJveWVyID0gbmV3IFNoaXAoXCJEZXN0cm95ZXJcIiwgMyk7XG4gICAgICAgIGNvbnN0IHN1Ym1hcmluZSA9IG5ldyBTaGlwKFwiU3VibWFyaW5lXCIsIDMpO1xuICAgICAgICBjb25zdCBwYXRyb2xCb2F0ID0gbmV3IFNoaXAoXCJQYXRyb2wgQm9hdFwiLCAyKTtcblxuICAgICAgICByZXR1cm4gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0XTtcbiAgICB9XG5cbiAgICBjcmVhdGVNYXBTaGlwcygpIHtcbiAgICAgICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5nZXRDb29yZGluYXRlcyhzaGlwLCBtYXApO1xuICAgICAgICAgICAgc2hpcC5zZXRDb29yZGluYXRlcyhjb29yZGluYXRlcyk7XG4gICAgICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5zZXQoYCR7Y29vcmRpbmF0ZVswXX0ke2Nvb3JkaW5hdGVbMV19YCwgc2hpcCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBtYXA7XG4gICAgfVxuXG4gICAgZ2V0Q29vcmRpbmF0ZXMoc2hpcCwgbWFwKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IG51bGw7XG5cbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSB0aGlzLmdlbmVyYXRlQ29vcmRpbmF0ZXMoc2hpcC5heGlzLCBzaGlwLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUNvb3JkaW5hdGVzKGF4aXMsIGxlbmd0aCkge1xuICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludCh0aGlzLmhlaWdodCk7XG4gICAgICAgIGxldCB5ID0gZ2V0UmFuZG9tSW50KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IGhlYWQgPSBbeCwgeV07XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IFtoZWFkXTtcblxuICAgICAgICBpZiAoYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeCArPSAxO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgeSAtPSAxO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLnB1c2goW3gsIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBpc1ZhbGlkQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIG1hcCkge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZXMgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICBsZXQgbWFwU2hpcHMgPSBudWxsO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgbWFwU2hpcHMgPSBtYXA7XG4gICAgICAgIGVsc2UgbWFwU2hpcHMgPSB0aGlzLm1hcFNoaXBzO1xuXG4gICAgICAgIGxldCBib29sID0gW107XG5cbiAgICAgICAgY29vcmRpbmF0ZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZVsxXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kKHgsIHkpIHx8IG1hcFNoaXBzLmhhcyhgJHt4fSR7eX1gKSkge1xuICAgICAgICAgICAgICAgIGJvb2wucHVzaChmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKGJvb2wuaW5jbHVkZXMoZmFsc2UpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzT3V0T2ZCb3VuZCh4LCB5KSB7XG4gICAgICAgIGlmICh4ID4gdGhpcy5oZWlnaHQgLSAxIHx8IHggPCAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHkgPiB0aGlzLmhlaWdodCAtIDEgfHwgeSA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4LCB5KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3h9JHt5fWA7XG4gICAgICAgIGNvbnN0IHNoaXAgPSB0aGlzLm1hcFNoaXBzLmdldChrZXkpO1xuXG4gICAgICAgIGlmIChCb29sZWFuKHNoaXApKSB7XG4gICAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5tYXBBdHRhY2tzLnNldChrZXksIDEpO1xuICAgICAgICB9IGVsc2UgdGhpcy5tYXBBdHRhY2tzLnNldChrZXksIDApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDsiLCJmdW5jdGlvbiBnZXRSYW5kb21JbnQobikge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYW5kb21JbnQ7IiwiY29uc3QgQm9hcmQgPSByZXF1aXJlKCcuL2JvYXJkLmpzJyk7XG5jb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBCb2FyZCgpO1xuICAgICAgICB0aGlzLnNoaXBzID0gdGhpcy5ib2FyZC5zaGlwcztcbiAgICAgICAgdGhpcy5saWZlID0gdGhpcy5zaGlwcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgdXBkYXRlTGlmZSgpIHtcbiAgICAgICAgbGV0IGxpZmUgPSAwO1xuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goc2hpcCA9PiB7XG4gICAgICAgICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIGxpZmUgKz0gMTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5saWZlID0gbGlmZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKFt4LCB5XSkge1xuICAgICAgICB0aGlzLmJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICAgIHRoaXMudXBkYXRlTGlmZSgpO1xuICAgIH1cblxuICAgIC8vIEFJXG4gICAgZ2l2ZUF0dGFjayhtYXApIHtcbiAgICAgICAgbGV0IGF0dGFjayA9IG51bGw7XG4gICAgICAgIHdoaWxlICghdGhpcy5pc1ZhbGlkQ29vcmRpbmF0ZShhdHRhY2ssIG1hcCkpIHtcbiAgICAgICAgICAgIGF0dGFjayA9IHRoaXMuZ2VuZXJhdGVBdHRhY2soKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXR0YWNrO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQXR0YWNrKCkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmJvYXJkLmhlaWdodDtcbiAgICAgICAgbGV0IHggPSBnZXRSYW5kb21JbnQoaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQoaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIFt4LCB5XTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkQ29vcmRpbmF0ZShjb29yZGluYXRlLCBtYXApIHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG1hcC5oYXMoYCR7Y29vcmRpbmF0ZVswXX0ke2Nvb3JkaW5hdGVbMV19YCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjsiLCJjb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuL2hlbHBlci5qcycpO1xuXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5zZXRBeGlzKCk7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gbnVsbDtcbiAgICAgICAgdGhpcy5ocCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICB0aGlzLmFsaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRBeGlzKCkge1xuICAgICAgICBjb25zdCBuID0gZ2V0UmFuZG9tSW50KDIpO1xuICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIFwieFwiO1xuICAgICAgICByZXR1cm4gXCJ5XCI7XG4gICAgfVxuXG4gICAgY2hhbmdlQXhpcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXhpcyA9PT0gXCJ4XCIpIHRoaXMuYXhpcyA9IFwieVwiO1xuICAgICAgICBlbHNlIHRoaXMuYXhpcyA9IFwieFwiO1xuICAgIH1cblxuICAgIHNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKSB7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMuaHAgPT09IDApIHRoaXMuYWxpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5hbGl2ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDsiLCJjb25zdCBibG9ja2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBibG9ja0JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9jay1ib2FyZFwiKTtcbiAgICBjb25zdCBibG9ja1NjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvY2stc2NyZWVuXCIpO1xuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCbG9jayhzdHJpbmcpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICAgICAgICBpZiAoc3RyaW5nID09PSBcImJvYXJkXCIpIGVsZW1lbnQgPSBibG9ja0JvYXJkO1xuICAgICAgICBlbHNlIGlmIChzdHJpbmcgPT09IFwic2NyZWVuXCIpIGVsZW1lbnQgPSBibG9ja1NjcmVlbjtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGVCbG9jayhzdHJpbmcpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBudWxsO1xuICAgICAgICBpZiAoc3RyaW5nID09PSBcImJvYXJkXCIpIGVsZW1lbnQgPSBibG9ja0JvYXJkO1xuICAgICAgICBlbHNlIGlmIChzdHJpbmcgPT09IFwic2NyZWVuXCIpIGVsZW1lbnQgPSBibG9ja1NjcmVlbjtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICBibG9ja0JvYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGJsb2NrU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWN0aXZhdGVCbG9jaywgZGVhY3RpdmF0ZUJsb2NrLCByZXNldCB9O1xufSkoKVxuXG5leHBvcnQgeyBibG9ja2VyIH07IiwiaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IGJsb2NrZXIgfSBmcm9tIFwiLi9ibG9ja2VyXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi9sb2dcIjtcblxuY29uc3QgYm9hcmRET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkU2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNoaXAtMVwiKTtcbiAgICBjb25zdCBib2FyZFNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1zaGlwLTJcIik7XG4gICAgY29uc3QgYm9hcmRBdHRhY2sxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1hdHRhY2stMVwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFjazIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay0yXCIpO1xuICAgIFxuICAgIGNvbnN0IGJvYXJkU2hpcFdyYXBwZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1zaGlwLXdyYXBwZXItMVwiKTtcbiAgICBjb25zdCBib2FyZFNoaXBXcmFwcGVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtc2hpcC13cmFwcGVyLTJcIik7XG4gICAgY29uc3QgYm9hcmRBdHRhY2tXcmFwcGVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtYXR0YWNrLXdyYXBwZXItMVwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFja1dyYXBwZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZC1hdHRhY2std3JhcHBlci0yXCIpO1xuXG4gICAgY29uc3QgYm9hcmRTaGlwV3JhcHBlcnMgPSBbYm9hcmRTaGlwV3JhcHBlcjEsIGJvYXJkU2hpcFdyYXBwZXIyXTtcbiAgICBjb25zdCBib2FyZEF0dGFja1dyYXBwZXJzID0gW2JvYXJkQXR0YWNrV3JhcHBlcjEsIGJvYXJkQXR0YWNrV3JhcHBlcjJdO1xuXG4gICAgZnVuY3Rpb24gaW5pdEJvYXJkKG1vZGUsIHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIxLCBib2FyZFNoaXAxKTtcblxuICAgICAgICBpZiAobW9kZSA9PT0gMSkgX2NyZWF0ZUVtcHR5Qm9hcmRTaGlwKHBsYXllcjIsIGJvYXJkU2hpcDIpO1xuICAgICAgICBlbHNlIF9jcmVhdGVCb2FyZFNoaXAocGxheWVyMiwgYm9hcmRTaGlwMik7XG5cbiAgICAgICAgX2NyZWF0ZUJvYXJkQXR0YWNrKHBsYXllcjEsIGJvYXJkQXR0YWNrMSwgcGxheWVyMi5ib2FyZC5tYXBTaGlwcywgYm9hcmRTaGlwMik7XG4gICAgICAgIF9jcmVhdGVCb2FyZEF0dGFjayhwbGF5ZXIyLCBib2FyZEF0dGFjazIsIHBsYXllcjEuYm9hcmQubWFwU2hpcHMsIGJvYXJkU2hpcDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICAgICAgYm9hcmRTaGlwV3JhcHBlcnNbdHVybl0uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgYm9hcmRBdHRhY2tXcmFwcGVyc1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICBib2FyZFNoaXBXcmFwcGVyc1tub3RUdXJuXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBib2FyZEF0dGFja1dyYXBwZXJzW25vdFR1cm5dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2ltdWxhdGVBSUNsaWNrKFt4LCB5XSwgdHVybikge1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib2FyZC1hdHRhY2stJHt0dXJuICsgMX1gKTtcbiAgICAgICAgX2dldEJveChgJHt4fSR7eX1gLCBib2FyZCkuY2xpY2soKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmRzID0gW2JvYXJkU2hpcDEsIGJvYXJkU2hpcDIsIGJvYXJkQXR0YWNrMSwgYm9hcmRBdHRhY2syXTtcbiAgICAgICAgYm9hcmRzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgd2hpbGUgKGJvYXJkLmNoaWxkcmVuLmxlbmd0aCA+IDApIGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmxhc3RDaGlsZCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfY3JlYXRlQm9hcmRTaGlwKHBsYXllciwgYm9hcmQpIHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gcGxheWVyLmJvYXJkLmhlaWdodDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLnBvdyhoZWlnaHQsIDIpOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJvcmRlci0yXCIsIFwiZmxleFwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwiaXRlbXMtY2VudGVyXCIsIFwib3V0bGluZS1vZmZzZXQtWy00LjVweF1cIik7XG4gICAgICAgICAgICBib3guaWQgPSBfYXNzaWduQm94SUQoaSwgaGVpZ2h0KTtcbiAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IF9hc3NpZ25TaGlwVGV4dChib3gsIHBsYXllci5ib2FyZC5tYXBTaGlwcyk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVFbXB0eUJvYXJkU2hpcChwbGF5ZXIsIGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItMlwiLCBcIm91dGxpbmUtb2Zmc2V0LVstNC41cHhdXCIpO1xuICAgICAgICAgICAgYm94LmlkID0gX2Fzc2lnbkJveElEKGksIGhlaWdodCk7XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQoYm94KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVCb2FyZEF0dGFjayhwbGF5ZXIsIGJvYXJkLCBtYXBTaGlwRW5lbXksIGJvYXJkU2hpcEVuZW15KSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItMlwiLCBcImZsZXhcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIm91dGxpbmUtb2Zmc2V0LVstNHB4XVwiLCBcImhvdmVyOm91dGxpbmUtZGFzaGVkXCIsIFwiaG92ZXI6b3V0bGluZS15ZWxsb3ctNTAwXCIpO1xuICAgICAgICAgICAgYm94LmlkID0gX2Fzc2lnbkJveElEKGksIGhlaWdodCk7XG4gICAgICAgICAgICBfYWRkQm94TGlzdGVuZXIoYm94LCBwbGF5ZXIsIG1hcFNoaXBFbmVteSwgYm9hcmRTaGlwRW5lbXkpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYXNzaWduQm94SUQoaSwgaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IHggPSBpICUgaGVpZ2h0O1xuICAgICAgICBjb25zdCB5ID0gLShNYXRoLmZsb29yKGkgLyBoZWlnaHQpIC0gKGhlaWdodCAtIDEpKTtcbiAgICAgICAgcmV0dXJuIGAke3h9JHt5fWA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2Fzc2lnblNoaXBUZXh0KGJveCwgbWFwKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBtYXAuZ2V0KGJveC5pZCk7XG4gICAgICAgIGlmICghc2hpcCkgcmV0dXJuIFwiXCI7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYmctc2xhdGUtNjAwXCIpO1xuICAgICAgICByZXR1cm4gc2hpcC5uYW1lWzBdOyBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkQm94TGlzdGVuZXIoYm94LCBwbGF5ZXIsIG1hcFNoaXBFbmVteSwgYm9hcmRTaGlwRW5lbXkpIHtcbiAgICAgICAgY29uc3QgeHkgPSBib3guaWQuc3BsaXQoXCJcIik7XG4gICAgICAgIGJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBibG9ja2VyLmFjdGl2YXRlQmxvY2soXCJib2FyZFwiKTtcbiAgICAgICAgICAgIGxvZy5tZXNzYWdlKGAke3BsYXllci5uYW1lfSA9PiBbICR7eHlbMF19ICwgJHt4eVsxXX0gXWApO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcjpvdXRsaW5lLWRhc2hlZFwiLCBcImhvdmVyOm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZS1kYXNoZWRcIiwgXCJvdXRsaW5lLXllbGxvdy01MDBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChtYXBTaGlwRW5lbXkuaGFzKGJveC5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRsaW5lLWRhc2hlZFwiLCBcIm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgX3BsYWNlSGl0TWFyayhib3gsIDEpO1xuICAgICAgICAgICAgICAgICAgICBfcGxhY2VIaXRNYXJrKF9nZXRCb3goYm94LmlkLCBib2FyZFNoaXBFbmVteSksIDApO1xuICAgICAgICAgICAgICAgICAgICBsb2cubWVzc2FnZShcIkhpdCFcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRsaW5lLWRhc2hlZFwiLCBcIm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgX3BsYWNlTWlzc01hcmsoYm94LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgX3BsYWNlTWlzc01hcmsoX2dldEJveChib3guaWQsIGJvYXJkU2hpcEVuZW15KSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5tZXNzYWdlKFwiTWlzcy4uLlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnYW1lLnVwZGF0ZShib3guaWQpO1xuICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICB9LCB7b25jZTogdHJ1ZX0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldEJveChib3hJRCwgYm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIGJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtpZCA9IFwiJHtib3hJRH1cIl1gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcGxhY2VIaXRNYXJrKGJveCwgbikge1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm91dGxpbmVcIiwgXCJvdXRsaW5lLXJlZC03MDBcIiwgXCJ0ZXh0LXJlZC03MDBcIik7XG4gICAgICAgIGlmIChuKSB7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInRleHQtMnhsXCIpO1xuICAgICAgICAgICAgYm94LnRleHRDb250ZW50ID0gXCIhXCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcGxhY2VNaXNzTWFyayhib3gsIG4pIHtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJvdXRsaW5lXCIsIFwib3V0bGluZS1ncmVlbi03MDBcIiwgXCJ0ZXh0LWdyZWVuLTcwMFwiKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIik7XG4gICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBcIi9cIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGluaXRCb2FyZCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIHNpbXVsYXRlQUlDbGljaywgcmVzZXQgfTtcbn0pKClcblxuZXhwb3J0IHsgYm9hcmRET00gfSIsImltcG9ydCBpY29uR2l0SHViIGZyb20gJy4uL2ljb24vZ2l0aHViLW1hcmstd2hpdGUucG5nJztcblxuaW1wb3J0IHsgdGFiIH0gZnJvbSAnLi90YWInO1xuaW1wb3J0IHsgYm9hcmRET00gfSBmcm9tICcuL2JvYXJkLWRvbSc7XG5pbXBvcnQgeyBibG9ja2VyIH0gZnJvbSAnLi9ibG9ja2VyJztcbmltcG9ydCB7IHdlbGNvbWUgfSBmcm9tICcuL3dlbGNvbWUnO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi9sb2cnO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHRlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIik7XG4gICAgY29uc3QgZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWVuZFwiKTtcbiAgICBjb25zdCB3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbm5lclwiKTtcbiAgICBjb25zdCByZW1hdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tcmVtYXRjaFwiKTtcbiAgICBjb25zdCBtYWluTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLW1haW4tbWVudVwiKTtcblxuICAgIGxldCBtb2RlID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGluaXQobiwgLi4uIHBsYXllcnMpIHtcbiAgICAgICAgbW9kZSA9IG47XG4gICAgICAgIF9pbml0SW1nKCk7XG4gICAgICAgIHRhYi5pbml0KC4uLiBwbGF5ZXJzKTtcbiAgICAgICAgYm9hcmRET00uaW5pdEJvYXJkKG1vZGUsIC4uLiBwbGF5ZXJzKTtcblxuICAgICAgICAvLyBUZXN0XG4gICAgICAgIHRlc3Qub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGVuZEdhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlbWF0Y2gub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIF9yZXNldCgpO1xuICAgICAgICAgICAgd2VsY29tZS5yZW1hdGNoKG1vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbk1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIF9yZXNldCgpO1xuICAgICAgICAgICAgd2VsY29tZS5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVBsYXllcih0dXJuLCBub3RUdXJuKSB7XG4gICAgICAgIF9kZWFjdGl2YXRlKG5vdFR1cm4pO1xuICAgICAgICBfYWN0aXZhdGUodHVybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kR2FtZShuYW1lKSB7XG4gICAgICAgIGJsb2NrZXIuZGVhY3RpdmF0ZUJsb2NrKFwiYm9hcmRcIik7XG4gICAgICAgIGJsb2NrZXIuYWN0aXZhdGVCbG9jayhcInNjcmVlblwiKTtcbiAgICAgICAgd2lubmVyLnRleHRDb250ZW50ID0gYCR7bmFtZX0gd2lucyFgO1xuICAgICAgICBlbmQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIF9pbml0SW1nKCkge1xuICAgICAgICBjb25zdCBpbWdHaXRIdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb24tZ2l0aHViXCIpO1xuICAgICAgICBpbWdHaXRIdWIuc3JjID0gaWNvbkdpdEh1YjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWN0aXZhdGUodHVybikge1xuICAgICAgICB0YWIuYWN0aXZhdGUodHVybik7XG4gICAgICAgIGJvYXJkRE9NLmFjdGl2YXRlKHR1cm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9kZWFjdGl2YXRlKG5vdFR1cm4pIHtcbiAgICAgICAgdGFiLmRlYWN0aXZhdGUobm90VHVybik7XG4gICAgICAgIGJvYXJkRE9NLmRlYWN0aXZhdGUobm90VHVybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Jlc2V0KCkge1xuICAgICAgICBib2FyZERPTS5yZXNldCgpO1xuICAgICAgICBsb2cucmVzZXQoKTtcbiAgICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgICAgICBlbmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBpbml0LCBhY3RpdmF0ZVBsYXllciwgZW5kR2FtZSB9O1xufSkoKVxuXG5leHBvcnQgeyBkb20gfTsiLCJpbXBvcnQgeyBkb20gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuL3RhYic7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gJy4vYm9hcmQtZG9tJztcbmltcG9ydCB7IGJsb2NrZXIgfSBmcm9tICcuL2Jsb2NrZXInO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi9sb2cuanMnO1xuXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuLi9tb2R1bGUtYmFjay1lbmQvcGxheWVyLmpzJyk7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJzID0gbnVsbDtcbiAgICBsZXQgdHVybiA9IG51bGw7XG4gICAgbGV0IG5vdFR1cm4gPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2FtZShuYW1lMSwgbmFtZTIsIG1vZGUpIHtcbiAgICAgICAgX2luaXRQbGF5ZXJzKG5hbWUxLCBuYW1lMik7XG4gICAgICAgIGRvbS5pbml0KG1vZGUsIC4uLiBwbGF5ZXJzKTtcbiAgICAgICAgX0FJbW92ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZShpZCkge1xuICAgICAgICBjb25zdCB4eSA9IGlkLnNwbGl0KFwiXCIpO1xuICAgICAgICBwbGF5ZXJzW25vdFR1cm5dLnJlY2VpdmVBdHRhY2soWyt4eVswXSwgK3h5WzFdXSk7XG4gICAgICAgIHBsYXllcnNbbm90VHVybl0ubGlmZSA9IDA7IC8vIHRlc3RcbiAgICAgICAgdGFiLnVwZGF0ZUxpZmUocGxheWVyc1tub3RUdXJuXSwgbm90VHVybik7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoX2lzR2FtZSgpKSB7XG4gICAgICAgICAgICAgICAgbG9nLm1lc3NhZ2UoYCR7cGxheWVyc1t0dXJuXS5uYW1lfSB3aW5zIWApO1xuICAgICAgICAgICAgICAgIGRvbS5lbmRHYW1lKHBsYXllcnNbdHVybl0ubmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICBcbiAgICAgICAgICAgIF91cGRhdGVUdXJuKCk7XG4gICAgICAgICAgICBkb20uYWN0aXZhdGVQbGF5ZXIodHVybiwgbm90VHVybik7XG4gICAgICAgICAgICBpZiAocGxheWVyc1t0dXJuXS5uYW1lICE9PSBcIkFJXCIpIGJsb2NrZXIuZGVhY3RpdmF0ZUJsb2NrKFwiYm9hcmRcIik7XG4gICAgXG4gICAgICAgICAgICBfQUltb3ZlKCk7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICBmdW5jdGlvbiBfaW5pdFBsYXllcnMobmFtZTEsIG5hbWUyKSB7XG4gICAgICAgIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKG5hbWUxKTtcbiAgICAgICAgY29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIobmFtZTIpO1xuICAgICAgICBwbGF5ZXJzID0gW3BsYXllcjEsIHBsYXllcjJdO1xuICAgICAgICB0dXJuID0gMDtcbiAgICAgICAgbm90VHVybiA9IDE7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIF9BSW1vdmUoKSB7XG4gICAgICAgIGlmIChwbGF5ZXJzW3R1cm5dLm5hbWUgPT09IFwiQUlcIikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwID0gcGxheWVyc1tub3RUdXJuXS5ib2FyZC5tYXBBdHRhY2tzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHBsYXllcnNbdHVybl0uZ2l2ZUF0dGFjayhtYXApO1xuICAgICAgICAgICAgICAgIGJvYXJkRE9NLnNpbXVsYXRlQUlDbGljayhhdHRhY2ssIHR1cm4pO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXNHYW1lKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmxpZmUgPT09IDApIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdXBkYXRlVHVybigpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHR1cm47XG4gICAgICAgIHR1cm4gPSArIXR1cm47XG4gICAgICAgIG5vdFR1cm4gPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUdhbWUsIHVwZGF0ZSB9O1xufSkoKVxuXG5leHBvcnQgeyBnYW1lIH07IiwiY29uc3QgbG9nID0gKCgpID0+IHtcbiAgICBjb25zdCBsb2dEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ1wiKTtcblxuICAgIGZ1bmN0aW9uIG1lc3NhZ2Uoc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHN0cmluZztcbiAgICAgICAgbG9nRGl2LmFwcGVuZChzcGFuKTtcbiAgICAgICAgbG9nRGl2LnNjcm9sbFRvcCA9IGxvZ0Rpdi5zY3JvbGxIZWlnaHQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIHdoaWxlIChsb2dEaXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkgbG9nRGl2LnJlbW92ZUNoaWxkKGxvZ0Rpdi5sYXN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB7IG1lc3NhZ2UsIHJlc2V0IH07XG59KSgpXG5cbmV4cG9ydCB7IGxvZyB9IiwiY29uc3QgdGFiID0gKCgpID0+IHtcbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItMVwiKTtcbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItMlwiKTtcbiAgICBjb25zdCBuYW1lMT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLTFcIik7XG4gICAgY29uc3QgbmFtZTI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS0yXCIpO1xuICAgIGNvbnN0IGxpZmUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWZlLTFcIik7XG4gICAgY29uc3QgbGlmZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpZmUtMlwiKTtcblxuICAgIGNvbnN0IHRhYnMgPSBbdGFiMSwgdGFiMl07XG4gICAgY29uc3QgbGl2ZXMgPSBbbGlmZTEsIGxpZmUyXTtcblxuICAgIGZ1bmN0aW9uIGluaXQocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICBfaW5pdE5hbWUocGxheWVyMSwgbmFtZTEpO1xuICAgICAgICBfaW5pdE5hbWUocGxheWVyMiwgbmFtZTIpO1xuICAgICAgICB1cGRhdGVMaWZlKHBsYXllcjEsIDApO1xuICAgICAgICB1cGRhdGVMaWZlKHBsYXllcjIsIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpZmUocGxheWVyLCB0dXJuKSB7XG4gICAgICAgIGxpdmVzW3R1cm5dLnRleHRDb250ZW50ID0gcGxheWVyLmxpZmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUodHVybikge1xuICAgICAgICB0YWJzW3R1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJtYi0yXCIsIFwiYmctc2xhdGUtNDAwXCIpO1xuICAgICAgICB0YWJzW3R1cm5dLmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS0yMDBcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZShub3RUdXJuKSB7XG4gICAgICAgIHRhYnNbbm90VHVybl0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXNsYXRlLTIwMFwiKTtcbiAgICAgICAgdGFic1tub3RUdXJuXS5jbGFzc0xpc3QuYWRkKFwibWItMlwiLCBcImJnLXNsYXRlLTQwMFwiKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIF9pbml0TmFtZShwbGF5ZXIsIG5hbWUpIHtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHBsYXllci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIHVwZGF0ZUxpZmUsIGFjdGl2YXRlLCBkZWFjdGl2YXRlIH07XG59KSgpXG5cbmV4cG9ydCB7IHRhYiB9OyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi9sb2dcIjtcblxuY29uc3Qgd2VsY29tZSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc2NyZWVuV2VsY29tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VsY29tZVwiKTtcbiAgICBjb25zdCBzY3JlZW5NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuICAgIFxuICAgIGNvbnN0IGJ1dHRvblBWQUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1wdmFpXCIpO1xuICAgIGNvbnN0IGJ1dHRvblBWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnV0dG9uLXB2cFwiKTtcbiAgICBcbiAgICBjb25zdCBkaWFsb2dQVkFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctcHZhaVwiKTtcbiAgICBjb25zdCBuYW1lUFZBSTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtcHZhaS0xXCIpO1xuICAgIGNvbnN0IG9rUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2stcHZhaVwiKTtcbiAgICBjb25zdCBjbG9zZVBWQUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXB2YWlcIik7XG5cbiAgICBjb25zdCBkaWFsb2dQVlAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpYWxvZy1wdnBcIik7XG4gICAgY29uc3QgbmFtZVBWUDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtcHZwLTFcIik7XG4gICAgY29uc3QgbmFtZVBWUDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWUtcHZwLTFcIik7XG4gICAgY29uc3Qgb2tQVlAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29rLXB2cFwiKTtcbiAgICBjb25zdCBjbG9zZVBWUCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtcHZwXCIpO1xuICAgIFxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIF9pbml0UFZBSSgpO1xuICAgICAgICBfaW5pdFBWUCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICAgIHNjcmVlbldlbGNvbWUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1hdGNoKG1vZGUpIHtcbiAgICAgICAgaWYgKG1vZGUgPT09IDEpIG9rUFZBSS5jbGljaygpO1xuICAgICAgICBlbHNlIGlmIChtb2RlID09PSAyKSBva1BWUC5jbGljaygpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2luaXRQVkFJKCkge1xuICAgICAgICBidXR0b25QVkFJLm9uY2xpY2sgPSAoKSA9PiB7IGRpYWxvZ1BWQUkuc2hvd01vZGFsKCk7IH1cbiAgICAgICAgY2xvc2VQVkFJLm9uY2xpY2sgPSAoKSA9PiB7IGRpYWxvZ1BWQUkuY2xvc2UoKTsgfVxuICAgICAgICBva1BWQUkub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIGdhbWUuY3JlYXRlR2FtZShuYW1lUFZBSTEudmFsdWUgfHwgXCJQbGF5ZXIgMVwiLCBcIkFJXCIsIDEpO1xuICAgICAgICAgICAgbmFtZVBWQUkxLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGxvZy5tZXNzYWdlKFwiR2FtZSBtb2RlOiBQbGF5ZXIgdnMgQUlcIik7XG4gICAgICAgICAgICBzY3JlZW5XZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBzY3JlZW5NYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5pdFBWUCgpIHtcbiAgICAgICAgYnV0dG9uUFZQLm9uY2xpY2sgPSAoKSA9PiB7IGRpYWxvZ1BWUC5zaG93TW9kYWwoKTsgfVxuICAgICAgICBjbG9zZVBWUC5vbmNsaWNrID0gKCkgPT4geyBkaWFsb2dQVlAuY2xvc2UoKTsgfVxuICAgICAgICBva1BWUC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgZ2FtZS5jcmVhdGVHYW1lKG5hbWVQVlAxLnZhbHVlIHx8IFwiUGxheWVyIDFcIiwgbmFtZVBWUDIudmFsdWUgfHwgXCJQbGF5ZXIgMlwiLCAyKTtcbiAgICAgICAgICAgIG5hbWVQVlAxLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIG5hbWVQVlAyLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGxvZy5tZXNzYWdlKFwiR2FtZSBtb2RlOiBQbGF5ZXIgdnMgUGxheWVyXCIpO1xuICAgICAgICAgICAgc2NyZWVuV2VsY29tZS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgc2NyZWVuTWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdCwgc2hvdywgcmVtYXRjaCB9XG59KSgpXG5cbmV4cG9ydCB7IHdlbGNvbWUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHdlbGNvbWUgfSBmcm9tICcuL21vZHVsZS1mcm9udC1lbmQvd2VsY29tZSc7XG5cbndlbGNvbWUuaW5pdCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
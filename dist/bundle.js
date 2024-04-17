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
.-ml-1 {
    margin-left: -0.25rem;
}
.mr-3 {
    margin-right: 0.75rem;
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
.h-5 {
    height: 1.25rem;
}
.h-\\[50\\%\\] {
    height: 50%;
}
.h-\\[75\\%\\] {
    height: 75%;
}
.h-\\[60\\%\\] {
    height: 60%;
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
.w-\\[35vw\\] {
    width: 35vw;
}
.w-\\[40\\%\\] {
    width: 40%;
}
.w-\\[76vw\\] {
    width: 76vw;
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
.w-\\[24vw\\] {
    width: 24vw;
}
.w-\\[39vw\\] {
    width: 39vw;
}
.w-\\[38vw\\] {
    width: 38vw;
}
.w-\\[45\\%\\] {
    width: 45%;
}
.w-5 {
    width: 1.25rem;
}
.max-w-\\[80\\%\\] {
    max-width: 80%;
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
.place-items-center {
    align-items: center;
    justify-items: center;
    place-items: center;
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
.gap-\\[10px\\] {
    gap: 10px;
}
.gap-\\[10vw\\] {
    gap: 10vw;
}
.gap-\\[20px\\] {
    gap: 20px;
}
.gap-\\[5vh\\] {
    gap: 5vh;
}
.gap-\\[2vw\\] {
    gap: 2vw;
}
.gap-\\[4vw\\] {
    gap: 4vw;
}
.gap-\\[10\\%\\] {
    gap: 10%;
}
.gap-\\[5\\%\\] {
    gap: 5%;
}
.self-end {
    align-self: flex-end;
}
.self-center {
    align-self: center;
}
.overflow-hidden {
    overflow: hidden;
}
.text-ellipsis {
    text-overflow: ellipsis;
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
.text-white {
    --tw-text-opacity: 1;
    color: rgba(255, 255, 255, 1);
    color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.opacity-25 {
    opacity: 0.25;
}
.opacity-75 {
    opacity: 0.75;
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

.disabled\\:bg-transparent:disabled {
    background-color: transparent;
}

.disabled\\:bg-slate-400:disabled {
    --tw-bg-opacity: 1;
    background-color: rgba(148, 163, 184, 1);
    background-color: rgba(148, 163, 184, var(--tw-bg-opacity));
}

.disabled\\:text-transparent:disabled {
    color: transparent;
}

.disabled\\:text-slate-200:disabled {
    --tw-text-opacity: 1;
    color: rgba(226, 232, 240, 1);
    color: rgba(226, 232, 240, var(--tw-text-opacity));
}

.hover\\:disabled\\:bg-slate-400:disabled:hover {
    --tw-bg-opacity: 1;
    background-color: rgba(148, 163, 184, 1);
    background-color: rgba(148, 163, 184, var(--tw-bg-opacity));
}

.hover\\:disabled\\:text-slate-200:disabled:hover {
    --tw-text-opacity: 1;
    color: rgba(226, 232, 240, 1);
    color: rgba(226, 232, 240, var(--tw-text-opacity));
}

@media (min-width: 1024px) {

    .lg\\:order-1 {
        order: 1;
    }

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

    .lg\\:w-\\[20vh\\] {
        width: 20vh;
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

    .lg\\:w-\\[19vh\\] {
        width: 19vh;
    }

    .lg\\:w-\\[24vh\\] {
        width: 24vh;
    }

    .lg\\:flex-row {
        flex-direction: row;
    }

    .lg\\:gap-\\[5vw\\] {
        gap: 5vw;
    }

    .lg\\:gap-\\[10vh\\] {
        gap: 10vh;
    }

    .lg\\:gap-\\[2vh\\] {
        gap: 2vh;
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

    generateBoard() {
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
        }
        else if (n === 2) {
            _resetBoard(boardShip2);
            _createBoardShip(player, boardShip2);
        }
    }

    function initBoard(player1, player2) {
        _createBoardAttack(player1, boardAttack1, player2.board.mapShips, boardShip2);
        _createBoardAttack(player2, boardAttack2, player1.board.mapShips, boardShip1);
    }

    function activatePre() {
        boardShips.forEach(board => {
            board.classList.add("hidden");
        })

        boardAttacks.forEach(board => {
            board.classList.remove("hidden");
        })
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
        const boards = [... boardShips, ... boardAttacks];
        boards.forEach(board => {
            _resetBoard(board);
        })

        boardAttacks.forEach(board => {
            board.classList.add("hidden");
        })

        boardShips.forEach(board => {
            board.classList.remove("hidden");
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
            _log__WEBPACK_IMPORTED_MODULE_2__.log.message(`${player.name} launches a missile to [ ${xy[0]} , ${xy[1]} ]`, 1);

            box.classList.remove("hover:outline-dashed", "hover:outline-yellow-500");
            box.classList.add("outline-dashed", "outline-yellow-500");
            
            setTimeout(() => {
                const ship = mapShipEnemy.get(box.id);

                if (ship) {
                    box.classList.remove("outline-dashed", "outline-yellow-500");
                    _placeHitMark(box, 1);
                    _placeHitMark(_getBox(box.id, boardShipEnemy), 0);
                    _log__WEBPACK_IMPORTED_MODULE_2__.log.message("H I T", 2);

                    if (ship.hp === 1) _log__WEBPACK_IMPORTED_MODULE_2__.log.message(`${player.name} sunk a ${ship.name}!`, 1);
                } else {
                    box.classList.remove("outline-dashed", "outline-yellow-500");
                    _placeMissMark(box, 1);
                    _placeMissMark(_getBox(box.id, boardShipEnemy), 0);
                    _log__WEBPACK_IMPORTED_MODULE_2__.log.message("M I S S", 2);
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

    function _resetBoard(board) {
        while (board.children.length > 0) board.removeChild(board.lastChild);
    }

    return { initBoardPre, getNewBoard, initBoard, activatePre, activate, deactivate, viewShip, viewAttack, simulateAIClick, reset };
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

    function initPreGame(n, ... arr) {
        mode = n;
        players = [... arr];
        _tab__WEBPACK_IMPORTED_MODULE_2__.tab.init(... players);
        _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.initBoardPre(... players);
    }

    function activatePlayer(turn, notTurn) {
        _deactivate(notTurn);
        _activate(turn);
    }

    function endGame(name) {
        _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.deactivateBlock("board");
        _blocker__WEBPACK_IMPORTED_MODULE_4__.blocker.activateBlock("screen");
        winner.textContent = `${name} wins!`;
        end.classList.remove("hidden");
    }

    // Private functions
    function _initImg() {
        const imgGitHub = document.querySelector("#icon-github");

        imgGitHub.src = _icon_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__;
        imgLoadings.forEach(img => {
            img.src = _icon_loading_custom_png__WEBPACK_IMPORTED_MODULE_1__;
        });
    }

    function _initListeners() {
        rematch.onclick = () => {
            _reset();
            _welcome__WEBPACK_IMPORTED_MODULE_5__.welcome.rematch(mode);
        }

        mainMenu.onclick = () => {
            _reset();
            _welcome__WEBPACK_IMPORTED_MODULE_5__.welcome.hide("main");
            _welcome__WEBPACK_IMPORTED_MODULE_5__.welcome.show("welcome");
        }

        view1.onpointerdown = () => { _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewShip(0); }
        view1.onpointerup = () => { _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewAttack(0); }

        randomize1.onclick = () => { _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.getNewBoard([... players][0], 1); }
        randomize2.onclick = () => { _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.getNewBoard([... players][1], 2); }

        okRandomize1.onclick = () => {
            if (mode === 1) {
                okRandomize1.disabled = true;
                spanOK1.classList.add("hidden");
                imgLoading1.classList.remove("hidden");
                _countDownToGame();
            }
            else _activatePlayerPre(1);
        }

        okRandomize2.onclick = () => {
            okRandomize2.disabled = true;
            spanOK2.classList.add("hidden");
            imgLoading2.classList.remove("hidden");
            _countDownToGame();
        }
    }

    function _countDownToGame(n = 3) {
        _log__WEBPACK_IMPORTED_MODULE_6__.log.message("Game starting in", 1);
        _log__WEBPACK_IMPORTED_MODULE_6__.log.message(`${n}`, 2);
        const startInterval = setInterval(() => {
            n--;
            if (n === 0) {
                clearInterval(startInterval);
                _initGame(... players);
            } else _log__WEBPACK_IMPORTED_MODULE_6__.log.message(`${n}`, 2);
        }, 1000)
    }

    function _initGame(... players) {
        randomWrapper.classList.add("hidden");
        viewWrapper.classList.remove("hidden");

        _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.activatePre();
        _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.initBoard(... players);

        if (mode === 1) {
            view2.disabled = true;
            view2.removeEventListener("onpointerdown", _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewShip);
            view2.removeEventListener("onpointerup", _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewAttack);
        }
        else if (mode === 2) {
            view2.disabled = false;
            view2.onpointerdown = () => { _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewShip(1); }
            view2.onpointerup = () => { _board_dom__WEBPACK_IMPORTED_MODULE_3__.boardDOM.viewAttack(1); }
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
        okRandomizes.forEach(button => { button.disabled = false; })
        spanOKs.forEach(span => { span.classList.remove("hidden"); })
        imgLoadings.forEach(img => { img.classList.add("hidden"); })
    }

    return { init, initPreGame, activatePlayer, endGame };
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
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log */ "./src/module-front-end/log.js");






const Player = __webpack_require__(/*! ../module-back-end/player.js */ "./src/module-back-end/player.js");
const getRandomInt = __webpack_require__(/*! ../module-back-end/helper.js */ "./src/module-back-end/helper.js");

const game = (() => {
    let players = null;
    let turn = null;
    let notTurn = null;

    function createGame(name1, name2, mode) {
        _initPlayers(name1, name2);
        _dom__WEBPACK_IMPORTED_MODULE_0__.dom.initPreGame(mode, ... players);
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
            };
    
            _updateTurn();
            _activateTurn();
            _AImove();
        }, 1000)
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
        if (players[turn].name !== "AI") _blocker__WEBPACK_IMPORTED_MODULE_3__.blocker.deactivateBlock("board");
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
    const logDiv1 = document.querySelector("#log-1");
    const logDiv2 = document.querySelector("#log-2");

    function message(string, n) {
        if (n === 1) {
            reset();
            logDiv1.textContent = string;
        }
        else if (n === 2) logDiv2.textContent = string;
    }

    function reset() {
        logDiv1.textContent = "Please choose your preferred formation";
        logDiv2.textContent = "...";
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
        buttonPVAI.onclick = () => { dialogPVAI.showModal(); }
        closePVAI.onclick = () => { dialogPVAI.close(); }
        okPVAI.onclick = () => {
            _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVAI1.value || "Player 1", "AI", 1);
            namePVAI1.value = "";
            _hideWelcome();
        }
    }

    function _initPVP() {
        buttonPVP.onclick = () => { dialogPVP.showModal(); }
        closePVP.onclick = () => { dialogPVP.close(); }
        okPVP.onclick = () => {
            _game__WEBPACK_IMPORTED_MODULE_0__.game.createGame(namePVP1.value || "Player 1", namePVP2.value || "Player 2", 2);
            namePVP1.value = "";
            namePVP2.value = "";
            _hideWelcome();
        }
    }

    function _hideWelcome() {
        screenWelcome.classList.add("hidden");
        screenMain.classList.remove("hidden");
    }

    return { init, show, hide, rematch }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxZQUFZLE1BQU0sTUFBTSxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsTUFBTSxPQUFPLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLE1BQU0sUUFBUSxNQUFNLEtBQUssb0JBQW9CLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxTQUFTLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIscUJBQXFCLE1BQU0sUUFBUSxNQUFNLFNBQVMscUJBQXFCLHFCQUFxQixxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLE1BQU0sTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE9BQU8sTUFBTSxRQUFRLHFCQUFxQixxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0saUJBQWlCLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxXQUFXLE1BQU0sT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLHFDQUFxQyxzRkFBc0YsaUVBQWlFLEdBQUcsbUJBQW1CLHVCQUF1QixzQkFBc0IsaUJBQWlCLFlBQVkseURBQXlELE9BQU8sR0FBRywwQkFBMEIsc0NBQXNDLEdBQUcsbUJBQW1CO0FBQ3BzTztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUMzakMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUE4STtBQUM5STtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDhIQUFPOzs7O0FBSXdGO0FBQ2hILE9BQU8saUVBQWUsOEhBQU8sSUFBSSw4SEFBTyxVQUFVLDhIQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDYkEsYUFBYSxtQkFBTyxDQUFDLGdEQUFXO0FBQ2hDLHFCQUFxQixtQkFBTyxDQUFDLG9EQUFhOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGNBQWMsRUFBRSxjQUFjO0FBQ3pELGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJELEVBQUUsRUFBRSxFQUFFO0FBQ2pFO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLEVBQUUsRUFBRSxFQUFFO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDekdBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ0pBLGNBQWMsbUJBQU8sQ0FBQyxrREFBWTtBQUNsQyxxQkFBcUIsbUJBQU8sQ0FBQyxvREFBYTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYyxFQUFFLGNBQWM7QUFDckQ7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckRBLHFCQUFxQixtQkFBTyxDQUFDLG9EQUFhOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjZCO0FBQ007QUFDUjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQsU0FBUztBQUN2RSxtQkFBbUIsRUFBRSxFQUFFLEVBQUU7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRSxFQUFFLEVBQUU7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkNBQU87QUFDbkIsWUFBWSxxQ0FBRyxZQUFZLGFBQWEsMEJBQTBCLE9BQU8sSUFBSSxPQUFPOztBQUVwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFHOztBQUV2Qix1Q0FBdUMscUNBQUcsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RixrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFHO0FBQ3ZCOztBQUVBLGdCQUFnQix1Q0FBSTtBQUNwQixhQUFhO0FBQ2IsU0FBUyxHQUFHLFdBQVc7QUFDdkI7O0FBRUE7QUFDQSw2Q0FBNkMsTUFBTTtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTHNEO0FBQ0Y7O0FBRXpCO0FBQ1c7QUFDSDtBQUNBO0FBQ1I7QUFDRTs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFDQUFHO0FBQ1gsUUFBUSxnREFBUTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNkNBQU87QUFDZixRQUFRLDZDQUFPO0FBQ2YsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHdEQUFVO0FBQ2xDO0FBQ0Esc0JBQXNCLHFEQUFXO0FBQ2pDLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDZDQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQSxZQUFZLDZDQUFPO0FBQ25CLFlBQVksNkNBQU87QUFDbkI7O0FBRUEsc0NBQXNDLGdEQUFRO0FBQzlDLG9DQUFvQyxnREFBUTs7QUFFNUMscUNBQXFDLGdEQUFRO0FBQzdDLHFDQUFxQyxnREFBUTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQ0FBRztBQUNYLFFBQVEscUNBQUcsWUFBWSxFQUFFO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUsscUNBQUcsWUFBWSxFQUFFO0FBQ3BDLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxnREFBUTtBQUNoQixRQUFRLGdEQUFROztBQUVoQjtBQUNBO0FBQ0EsdURBQXVELGdEQUFRO0FBQy9ELHFEQUFxRCxnREFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0RBQVE7QUFDbEQsd0NBQXdDLGdEQUFRO0FBQ2hEOztBQUVBLFFBQVEsdUNBQUk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUNBQUc7QUFDWCxRQUFRLGdEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFDQUFHO0FBQ1gsUUFBUSxnREFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQ0FBRztBQUNYLFFBQVEsZ0RBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBLFFBQVEscUNBQUc7QUFDWCxRQUFRLGdEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxnREFBUTtBQUNoQixRQUFRLHFDQUFHO0FBQ1gsUUFBUSw2Q0FBTztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5QywwQkFBMEI7QUFDbkUsa0NBQWtDLGtDQUFrQztBQUNwRSxxQ0FBcUMsOEJBQThCO0FBQ25FOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE0yQjtBQUNBO0FBQ1c7QUFDSDtBQUNSOztBQUU1QixlQUFlLG1CQUFPLENBQUMscUVBQThCO0FBQ3JELHFCQUFxQixtQkFBTyxDQUFDLHFFQUE4Qjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEscUNBQUc7QUFDWCxRQUFRLHFDQUFHO0FBQ1g7O0FBRUE7QUFDQSxRQUFRLHFDQUFHO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxRQUFRLHFDQUFHOztBQUVYO0FBQ0E7QUFDQSxnQkFBZ0IscUNBQUcsWUFBWSxvQkFBb0I7QUFDbkQsZ0JBQWdCLHFDQUFHO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxQ0FBRztBQUNYLHlDQUF5Qyw2Q0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnREFBUTtBQUN4QixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDNkI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG9DQUFvQztBQUNwQztBQUNBLFlBQVksdUNBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DO0FBQ0EsWUFBWSx1Q0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZ0M7QUFDUjs7QUFFN0Msc0RBQUc7QUFDSCw4REFBTyxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz85MDExIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1iYWNrLWVuZC9ib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWJhY2stZW5kL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvYmxvY2tlci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC9ib2FyZC1kb20uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvZG9tLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL2dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL21vZHVsZS1mcm9udC1lbmQvbG9nLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGUtZnJvbnQtZW5kL3RhYi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvbW9kdWxlLWZyb250LWVuZC93ZWxjb21lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnQvT3JiaXRyb24tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9PcmJpdHJvbiAqL1xuICAgIGZvbnQtZmFtaWx5OiBcIk9yYml0cm9uXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwiVHJ1ZVR5cGVcIik7XG59XG5cbi8qICEgdGFpbHdpbmRjc3MgdjMuNC4zIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbSAqL1xuXG4vKlxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxuKi9cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXG59XG5cbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIC0tdHctY29udGVudDogJyc7XG59XG5cbi8qXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgXFxgc2Fuc1xcYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxuNS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxuNi4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBzYW5zXFxgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG43LiBEaXNhYmxlIHRhcCBoaWdobGlnaHRzIG9uIGlPU1xuKi9cblxuaHRtbCxcbjpob3N0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xuICAtby10YWItc2l6ZTogNDtcbiAgICAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgU2Vnb2UgVUksIFJvYm90bywgVWJ1bnR1LCBDYW50YXJlbGwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyAvKiA0ICovXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogbm9ybWFsOyAvKiA1ICovXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgLyogNyAqL1xufVxuXG4vKlxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIFxcYGh0bWxcXGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIFxcYGh0bWxcXGAgZWxlbWVudC5cbiovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLypcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cbiovXG5cbmhyIHtcbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4qL1xuXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcbn1cblxuLypcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXG4qL1xuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxuXG4vKlxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cbiovXG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cbiovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKlxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBcXGBtb25vXFxgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXG4yLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC1mZWF0dXJlLXNldHRpbmdzIGJ5IGRlZmF1bHQuXG4zLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIFxcYG1vbm9cXGAgZm9udC12YXJpYXRpb24tc2V0dGluZ3MgYnkgZGVmYXVsdC5cbjQuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5jb2RlLFxua2JkLFxuc2FtcCxcbnByZSB7XG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDIgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IG5vcm1hbDsgLyogMyAqL1xuICBmb250LXNpemU6IDFlbTsgLyogNCAqL1xufVxuXG4vKlxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKlxuUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLypcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cbiovXG5cbnRhYmxlIHtcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cbn1cblxuLypcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXG4qL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXG4gIGxldHRlci1zcGFjaW5nOiBpbmhlcml0OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXG4qL1xuXG5idXR0b24sXG5zZWxlY3Qge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLypcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxuKi9cblxuYnV0dG9uLFxuaW5wdXQ6d2hlcmUoW3R5cGU9J2J1dHRvbiddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdyZXNldCddKSxcbmlucHV0OndoZXJlKFt0eXBlPSdzdWJtaXQnXSkge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXG59XG5cbi8qXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxuKi9cblxuOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cblxuLypcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBcXGA6aW52YWxpZFxcYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxuKi9cblxuOi1tb3otdWktaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cbiovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKlxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxuKi9cblxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKlxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiovXG5cblt0eXBlPSdzZWFyY2gnXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4qL1xuXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXG4qL1xuXG5ibG9ja3F1b3RlLFxuZGwsXG5kZCxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbmhyLFxuZmlndXJlLFxucCxcbnByZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuZmllbGRzZXQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmxlZ2VuZCB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbm9sLFxudWwsXG5tZW51IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKlxuUmVzZXQgZGVmYXVsdCBzdHlsaW5nIGZvciBkaWFsb2dzLlxuKi9cblxuZGlhbG9nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLypcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxuKi9cblxudGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG4vKlxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXG4qL1xuXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAxOyAvKiAxICovXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXG59XG5cbmlucHV0OjpwbGFjZWhvbGRlcixcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cbn1cblxuLypcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXG4qL1xuXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLypcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXG4qL1xuXG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi8qXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIFxcYGRpc3BsYXk6IGJsb2NrXFxgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuMi4gQWRkIFxcYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcXGAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxuKi9cblxuaW1nLFxuc3ZnLFxudmlkZW8sXG5jYW52YXMsXG5hdWRpbyxcbmlmcmFtZSxcbmVtYmVkLFxub2JqZWN0IHtcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xufVxuXG4vKlxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxuKi9cblxuaW1nLFxudmlkZW8ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwge1xuICAgICAgZm9udC1mYW1pbHk6IFwiT3JiaXRyb25cIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBTZWdvZSBVSSwgUm9ib3RvLCBVYnVudHUsIENhbnRhcmVsbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAgIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHctcm90YXRlOiAwO1xuICAgIC0tdHctc2tldy14OiAwO1xuICAgIC0tdHctc2tldy15OiAwO1xuICAgIC0tdHctc2NhbGUteDogMTtcbiAgICAtLXR3LXNjYWxlLXk6IDE7XG4gICAgLS10dy1wYW4teDogIDtcbiAgICAtLXR3LXBhbi15OiAgO1xuICAgIC0tdHctcGluY2gtem9vbTogIDtcbiAgICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgICAtLXR3LW9yZGluYWw6ICA7XG4gICAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gICAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gICAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAgIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAgIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gICAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LWJsdXI6ICA7XG4gICAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctY29udHJhc3Q6ICA7XG4gICAgLS10dy1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctaW52ZXJ0OiAgO1xuICAgIC0tdHctc2F0dXJhdGU6ICA7XG4gICAgLS10dy1zZXBpYTogIDtcbiAgICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAgIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAgIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG5cbjo6YmFja2Ryb3Age1xuICAgIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcbiAgICAtLXR3LWJvcmRlci1zcGFjaW5nLXk6IDA7XG4gICAgLS10dy10cmFuc2xhdGUteDogMDtcbiAgICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xuICAgIC0tdHctcm90YXRlOiAwO1xuICAgIC0tdHctc2tldy14OiAwO1xuICAgIC0tdHctc2tldy15OiAwO1xuICAgIC0tdHctc2NhbGUteDogMTtcbiAgICAtLXR3LXNjYWxlLXk6IDE7XG4gICAgLS10dy1wYW4teDogIDtcbiAgICAtLXR3LXBhbi15OiAgO1xuICAgIC0tdHctcGluY2gtem9vbTogIDtcbiAgICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcbiAgICAtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XG4gICAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcbiAgICAtLXR3LW9yZGluYWw6ICA7XG4gICAgLS10dy1zbGFzaGVkLXplcm86ICA7XG4gICAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcbiAgICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcbiAgICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XG4gICAgLS10dy1yaW5nLWluc2V0OiAgO1xuICAgIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcbiAgICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xuICAgIC0tdHctcmluZy1jb2xvcjogcmdiYSg1OSwgMTMwLCAyNDYsIDAuNSk7XG4gICAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctcmluZy1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApO1xuICAgIC0tdHctc2hhZG93OiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgcmdiYSgwLDAsMCwwKTtcbiAgICAtLXR3LWJsdXI6ICA7XG4gICAgLS10dy1icmlnaHRuZXNzOiAgO1xuICAgIC0tdHctY29udHJhc3Q6ICA7XG4gICAgLS10dy1ncmF5c2NhbGU6ICA7XG4gICAgLS10dy1odWUtcm90YXRlOiAgO1xuICAgIC0tdHctaW52ZXJ0OiAgO1xuICAgIC0tdHctc2F0dXJhdGU6ICA7XG4gICAgLS10dy1zZXBpYTogIDtcbiAgICAtLXR3LWRyb3Atc2hhZG93OiAgO1xuICAgIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcbiAgICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xuICAgIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XG4gICAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcbiAgICAtLXR3LWNvbnRhaW4tc2l6ZTogIDtcbiAgICAtLXR3LWNvbnRhaW4tbGF5b3V0OiAgO1xuICAgIC0tdHctY29udGFpbi1wYWludDogIDtcbiAgICAtLXR3LWNvbnRhaW4tc3R5bGU6ICA7XG59XG4uZml4ZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5hYnNvbHV0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLnJpZ2h0LTMge1xuICAgIHJpZ2h0OiAwLjc1cmVtO1xufVxuLnRvcC0xXFxcXC8yIHtcbiAgICB0b3A6IDUwJTtcbn1cbi50b3AtMiB7XG4gICAgdG9wOiAwLjVyZW07XG59XG4ubWItMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLm1yLTEyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG59XG4ubXQtMCB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm10LTBcXFxcLjUge1xuICAgIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xufVxuLi1tbC0xIHtcbiAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW07XG59XG4ubXItMyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xufVxuLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uaC0xMCB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG59XG4uaC04IHtcbiAgICBoZWlnaHQ6IDJyZW07XG59XG4uaC1cXFxcWzEwdmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAxMHZoO1xufVxuLmgtXFxcXFsxMHZ3XFxcXF0ge1xuICAgIGhlaWdodDogMTB2dztcbn1cbi5oLVxcXFxbMTV2aFxcXFxdIHtcbiAgICBoZWlnaHQ6IDE1dmg7XG59XG4uaC1cXFxcWzIwXFxcXCVcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMCU7XG59XG4uaC1cXFxcWzIwdmhcXFxcXSB7XG4gICAgaGVpZ2h0OiAyMHZoO1xufVxuLmgtXFxcXFszMHZoXFxcXF0ge1xuICAgIGhlaWdodDogMzB2aDtcbn1cbi5oLVxcXFxbNXZoXFxcXF0ge1xuICAgIGhlaWdodDogNXZoO1xufVxuLmgtXFxcXFs3NnZ3XFxcXF0ge1xuICAgIGhlaWdodDogNzZ2dztcbn1cbi5oLVxcXFxbODB2d1xcXFxdIHtcbiAgICBoZWlnaHQ6IDgwdnc7XG59XG4uaC1mdWxsIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uaC1zY3JlZW4ge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uaC01IHtcbiAgICBoZWlnaHQ6IDEuMjVyZW07XG59XG4uaC1cXFxcWzUwXFxcXCVcXFxcXSB7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG4uaC1cXFxcWzc1XFxcXCVcXFxcXSB7XG4gICAgaGVpZ2h0OiA3NSU7XG59XG4uaC1cXFxcWzYwXFxcXCVcXFxcXSB7XG4gICAgaGVpZ2h0OiA2MCU7XG59XG4ubWluLWgtc2NyZWVuIHtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cbi53LTgge1xuICAgIHdpZHRoOiAycmVtO1xufVxuLnctXFxcXFsxNTBweFxcXFxdIHtcbiAgICB3aWR0aDogMTUwcHg7XG59XG4udy1cXFxcWzMwXFxcXCVcXFxcXSB7XG4gICAgd2lkdGg6IDMwJTtcbn1cbi53LVxcXFxbMzV2d1xcXFxdIHtcbiAgICB3aWR0aDogMzV2dztcbn1cbi53LVxcXFxbNDBcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNDAlO1xufVxuLnctXFxcXFs3NnZ3XFxcXF0ge1xuICAgIHdpZHRoOiA3NnZ3O1xufVxuLnctXFxcXFs4MHZ3XFxcXF0ge1xuICAgIHdpZHRoOiA4MHZ3O1xufVxuLnctXFxcXFs5MHZ3XFxcXF0ge1xuICAgIHdpZHRoOiA5MHZ3O1xufVxuLnctZnVsbCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udy1zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbn1cbi53LVxcXFxbMjR2d1xcXFxdIHtcbiAgICB3aWR0aDogMjR2dztcbn1cbi53LVxcXFxbMzl2d1xcXFxdIHtcbiAgICB3aWR0aDogMzl2dztcbn1cbi53LVxcXFxbMzh2d1xcXFxdIHtcbiAgICB3aWR0aDogMzh2dztcbn1cbi53LVxcXFxbNDVcXFxcJVxcXFxdIHtcbiAgICB3aWR0aDogNDUlO1xufVxuLnctNSB7XG4gICAgd2lkdGg6IDEuMjVyZW07XG59XG4ubWF4LXctXFxcXFs4MFxcXFwlXFxcXF0ge1xuICAgIG1heC13aWR0aDogODAlO1xufVxuLnRyYW5zbGF0ZS15LVxcXFxbLTUwXFxcXCVcXFxcXSB7XG4gICAgLS10dy10cmFuc2xhdGUteTogLTUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIC01MCUpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0tdHctdHJhbnNsYXRlLXgpLCB2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XG59XG5Aa2V5ZnJhbWVzIHNwaW4ge1xuXG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cbi5hbmltYXRlLXNwaW4ge1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG4uc2VsZWN0LW5vbmUge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmdyaWQtY29scy0xMCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIG1pbm1heCgwLCAxZnIpKTtcbn1cbi5ncmlkLXJvd3MtMTAge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCBtaW5tYXgoMCwgMWZyKSk7XG59XG4uZmxleC1yb3ctcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmZsZXgtY29sIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBsYWNlLWl0ZW1zLWNlbnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtcy1jZW50ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uanVzdGlmeS1jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmp1c3RpZnktYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmp1c3RpZnktYXJvdW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5qdXN0aWZ5LWV2ZW5seSB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4uZ2FwLTMge1xuICAgIGdhcDogMC43NXJlbTtcbn1cbi5nYXAtXFxcXFsxMHB4XFxcXF0ge1xuICAgIGdhcDogMTBweDtcbn1cbi5nYXAtXFxcXFsxMHZ3XFxcXF0ge1xuICAgIGdhcDogMTB2dztcbn1cbi5nYXAtXFxcXFsyMHB4XFxcXF0ge1xuICAgIGdhcDogMjBweDtcbn1cbi5nYXAtXFxcXFs1dmhcXFxcXSB7XG4gICAgZ2FwOiA1dmg7XG59XG4uZ2FwLVxcXFxbMnZ3XFxcXF0ge1xuICAgIGdhcDogMnZ3O1xufVxuLmdhcC1cXFxcWzR2d1xcXFxdIHtcbiAgICBnYXA6IDR2dztcbn1cbi5nYXAtXFxcXFsxMFxcXFwlXFxcXF0ge1xuICAgIGdhcDogMTAlO1xufVxuLmdhcC1cXFxcWzVcXFxcJVxcXFxdIHtcbiAgICBnYXA6IDUlO1xufVxuLnNlbGYtZW5kIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cbi5zZWxmLWNlbnRlciB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm92ZXJmbG93LWhpZGRlbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi50ZXh0LWVsbGlwc2lzIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi50ZXh0LWJhbGFuY2Uge1xuICAgIHRleHQtd3JhcDogYmFsYW5jZTtcbn1cbi5yb3VuZGVkLTJ4bCB7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi5yb3VuZGVkLWxnIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4ucm91bmRlZC1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG59XG4ucm91bmRlZC1iLWxnIHtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXQtbGcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuLnJvdW5kZWQtdGwtbGcge1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5yb3VuZGVkLXRyLWxnIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuLmJvcmRlci0yIHtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbn1cbi5ib3JkZXItc2xhdGUtNDAwIHtcbiAgICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAxKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcbn1cbi5iZy1zbGF0ZS0yMDAge1xuICAgIC0tdHctYmctb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXNsYXRlLTQwMCB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG4uYmctc2xhdGUtNjAwIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgODUsIDEwNSwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MSwgODUsIDEwNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xufVxuLmJnLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5iZy1ncmFkaWVudC10by1yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLXR3LWdyYWRpZW50LXN0b3BzKSk7XG59XG4uZnJvbS1zbGF0ZS01MDAge1xuICAgIC0tdHctZ3JhZGllbnQtZnJvbTogIzY0NzQ4YiB2YXIoLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uKTtcbiAgICAtLXR3LWdyYWRpZW50LXRvOiByZ2JhKDEwMCwgMTE2LCAxMzksIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcbiAgICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xufVxuLnRvLXNsYXRlLTYwMCB7XG4gICAgLS10dy1ncmFkaWVudC10bzogIzQ3NTU2OSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XG59XG4ucC0zIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xufVxuLnAtXFxcXFsydndcXFxcXSB7XG4gICAgcGFkZGluZzogMnZ3O1xufVxuLnB4LVxcXFxbNVxcXFwlXFxcXF0ge1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7XG59XG4ucHQtXFxcXFs0XFxcXCVcXFxcXSB7XG4gICAgcGFkZGluZy10b3A6IDQlO1xufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1lbmQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmluZGVudC0yIHtcbiAgICB0ZXh0LWluZGVudDogMC41cmVtO1xufVxuLnRleHQtMnhsIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi50ZXh0LTN4bCB7XG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbn1cbi50ZXh0LTR4bCB7XG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG59XG4udGV4dC1sZyB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi50ZXh0LXNtIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xufVxuLnRleHQteGwge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbn1cbi5mb250LWJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udGV4dC1ncmVlbi03MDAge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2JhKDIxLCAxMjgsIDYxLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyMSwgMTI4LCA2MSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG4udGV4dC1yZWQtNzAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgxODUsIDI4LCAyOCwgMSk7XG4gICAgY29sb3I6IHJnYmEoMTg1LCAyOCwgMjgsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuLnRleHQtc2xhdGUtMjAwIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi50ZXh0LXdoaXRlIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cbi5vcGFjaXR5LTI1IHtcbiAgICBvcGFjaXR5OiAwLjI1O1xufVxuLm9wYWNpdHktNzUge1xuICAgIG9wYWNpdHk6IDAuNzU7XG59XG4uc2hhZG93LTExMTAge1xuICAgIC0tdHctc2hhZG93OiAxcHggMXB4IDEwcHggaHNsKDAsIDAlLCAzMCUpO1xuICAgIC0tdHctc2hhZG93LWNvbG9yZWQ6IDFweCAxcHggMTBweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IDAgMCByZ2JhKDAsMCwwLDApLCAwIDAgcmdiYSgwLDAsMCwwKSwgMXB4IDFweCAxMHB4IGhzbCgwLCAwJSwgMzAlKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCByZ2JhKDAsMCwwLDApKSwgdmFyKC0tdHctc2hhZG93KTtcbn1cbi5vdXRsaW5lIHtcbiAgICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbn1cbi5vdXRsaW5lLWRhc2hlZCB7XG4gICAgb3V0bGluZS1zdHlsZTogZGFzaGVkO1xufVxuLm91dGxpbmUtb2Zmc2V0LVxcXFxbLTRcXFxcLjVweFxcXFxdIHtcbiAgICBvdXRsaW5lLW9mZnNldDogLTQuNXB4O1xufVxuLm91dGxpbmUtb2Zmc2V0LVxcXFxbLTRweFxcXFxdIHtcbiAgICBvdXRsaW5lLW9mZnNldDogLTRweDtcbn1cbi5vdXRsaW5lLWdyZWVuLTcwMCB7XG4gICAgb3V0bGluZS1jb2xvcjogIzE1ODAzZDtcbn1cbi5vdXRsaW5lLXJlZC03MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICNiOTFjMWM7XG59XG4ub3V0bGluZS1zbGF0ZS02MDAge1xuICAgIG91dGxpbmUtY29sb3I6ICM0NzU1Njk7XG59XG4ub3V0bGluZS15ZWxsb3ctNTAwIHtcbiAgICBvdXRsaW5lLWNvbG9yOiAjZWFiMzA4O1xufVxuXG4udHctdGV4dC1zaGFkb3ctMTExMCB7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcbn1cblxuLmJhY2tkcm9wXFxcXDpiYWNrZHJvcC1ibHVyLXNtOjpiYWNrZHJvcCB7XG4gICAgLS10dy1iYWNrZHJvcC1ibHVyOiBibHVyKDRweCk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG4gICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KSB2YXIoLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzKSB2YXIoLS10dy1iYWNrZHJvcC1jb250cmFzdCkgdmFyKC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlKSB2YXIoLS10dy1iYWNrZHJvcC1odWUtcm90YXRlKSB2YXIoLS10dy1iYWNrZHJvcC1pbnZlcnQpIHZhcigtLXR3LWJhY2tkcm9wLW9wYWNpdHkpIHZhcigtLXR3LWJhY2tkcm9wLXNhdHVyYXRlKSB2YXIoLS10dy1iYWNrZHJvcC1zZXBpYSk7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IHZhcigtLXR3LWJhY2tkcm9wLWJsdXIpIHZhcigtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3MpIHZhcigtLXR3LWJhY2tkcm9wLWNvbnRyYXN0KSB2YXIoLS10dy1iYWNrZHJvcC1ncmF5c2NhbGUpIHZhcigtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGUpIHZhcigtLXR3LWJhY2tkcm9wLWludmVydCkgdmFyKC0tdHctYmFja2Ryb3Atb3BhY2l0eSkgdmFyKC0tdHctYmFja2Ryb3Atc2F0dXJhdGUpIHZhcigtLXR3LWJhY2tkcm9wLXNlcGlhKTtcbiAgICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogdmFyKC0tdHctYmFja2Ryb3AtYmx1cikgdmFyKC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzcykgdmFyKC0tdHctYmFja2Ryb3AtY29udHJhc3QpIHZhcigtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZSkgdmFyKC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZSkgdmFyKC0tdHctYmFja2Ryb3AtaW52ZXJ0KSB2YXIoLS10dy1iYWNrZHJvcC1vcGFjaXR5KSB2YXIoLS10dy1iYWNrZHJvcC1zYXR1cmF0ZSkgdmFyKC0tdHctYmFja2Ryb3Atc2VwaWEpO1xufVxuXG4uaG92ZXJcXFxcOmJnLXNsYXRlLTQwMDpob3ZlciB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6Ymctc2xhdGUtNTAwOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDExNiwgMTM5LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTE2LCAxMzksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDp0ZXh0LXNsYXRlLTIwMDpob3ZlciB7XG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgMSk7XG4gICAgY29sb3I6IHJnYmEoMjI2LCAyMzIsIDI0MCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XG59XG5cbi5ob3ZlclxcXFw6b3V0bGluZS1kYXNoZWQ6aG92ZXIge1xuICAgIG91dGxpbmUtc3R5bGU6IGRhc2hlZDtcbn1cblxuLmhvdmVyXFxcXDpvdXRsaW5lLXllbGxvdy01MDA6aG92ZXIge1xuICAgIG91dGxpbmUtY29sb3I6ICNlYWIzMDg7XG59XG5cbi5kaXNhYmxlZFxcXFw6YmctdHJhbnNwYXJlbnQ6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZGlzYWJsZWRcXFxcOmJnLXNsYXRlLTQwMDpkaXNhYmxlZCB7XG4gICAgLS10dy1iZy1vcGFjaXR5OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ4LCAxNjMsIDE4NCwgMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XG59XG5cbi5kaXNhYmxlZFxcXFw6dGV4dC10cmFuc3BhcmVudDpkaXNhYmxlZCB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uZGlzYWJsZWRcXFxcOnRleHQtc2xhdGUtMjAwOmRpc2FibGVkIHtcbiAgICAtLXR3LXRleHQtb3BhY2l0eTogMTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCAxKTtcbiAgICBjb2xvcjogcmdiYSgyMjYsIDIzMiwgMjQwLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDpkaXNhYmxlZFxcXFw6Ymctc2xhdGUtNDAwOmRpc2FibGVkOmhvdmVyIHtcbiAgICAtLXR3LWJnLW9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDgsIDE2MywgMTg0LCAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcbn1cblxuLmhvdmVyXFxcXDpkaXNhYmxlZFxcXFw6dGV4dC1zbGF0ZS0yMDA6ZGlzYWJsZWQ6aG92ZXIge1xuICAgIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIDEpO1xuICAgIGNvbG9yOiByZ2JhKDIyNiwgMjMyLCAyNDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAubGdcXFxcOm9yZGVyLTEge1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG5cbiAgICAubGdcXFxcOmgtXFxcXFsyMDBweFxcXFxdIHtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG5cbiAgICAubGdcXFxcOmgtXFxcXFs0NnZoXFxcXF0ge1xuICAgICAgICBoZWlnaHQ6IDQ2dmg7XG4gICAgfVxuXG4gICAgLmxnXFxcXDpoLVxcXFxbNTB2aFxcXFxdIHtcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xuICAgIH1cblxuICAgIC5sZ1xcXFw6aC1cXFxcWzV2aFxcXFxdIHtcbiAgICAgICAgaGVpZ2h0OiA1dmg7XG4gICAgfVxuXG4gICAgLmxnXFxcXDpoLXNjcmVlbiB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxuXG4gICAgLmxnXFxcXDp3LVxcXFxbMjB2aFxcXFxdIHtcbiAgICAgICAgd2lkdGg6IDIwdmg7XG4gICAgfVxuXG4gICAgLmxnXFxcXDp3LVxcXFxbNDAwcHhcXFxcXSB7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICB9XG5cbiAgICAubGdcXFxcOnctXFxcXFs0NnZoXFxcXF0ge1xuICAgICAgICB3aWR0aDogNDZ2aDtcbiAgICB9XG5cbiAgICAubGdcXFxcOnctXFxcXFs1MDBweFxcXFxdIHtcbiAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgIH1cblxuICAgIC5sZ1xcXFw6dy1cXFxcWzUwdmhcXFxcXSB7XG4gICAgICAgIHdpZHRoOiA1MHZoO1xuICAgIH1cblxuICAgIC5sZ1xcXFw6dy1cXFxcWzE5dmhcXFxcXSB7XG4gICAgICAgIHdpZHRoOiAxOXZoO1xuICAgIH1cblxuICAgIC5sZ1xcXFw6dy1cXFxcWzI0dmhcXFxcXSB7XG4gICAgICAgIHdpZHRoOiAyNHZoO1xuICAgIH1cblxuICAgIC5sZ1xcXFw6ZmxleC1yb3cge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cblxuICAgIC5sZ1xcXFw6Z2FwLVxcXFxbNXZ3XFxcXF0ge1xuICAgICAgICBnYXA6IDV2dztcbiAgICB9XG5cbiAgICAubGdcXFxcOmdhcC1cXFxcWzEwdmhcXFxcXSB7XG4gICAgICAgIGdhcDogMTB2aDtcbiAgICB9XG5cbiAgICAubGdcXFxcOmdhcC1cXFxcWzJ2aFxcXFxdIHtcbiAgICAgICAgZ2FwOiAydmg7XG4gICAgfVxuXG4gICAgLmxnXFxcXDpwLVxcXFxbMnZoXFxcXF0ge1xuICAgICAgICBwYWRkaW5nOiAydmg7XG4gICAgfVxuXG4gICAgLmxnXFxcXDp0ZXh0LTV4bCB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG4gICAgLmxnXFxcXDp0ZXh0LWxnIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtDQUErQztJQUMvQyx1QkFBdUI7SUFDdkIsK0RBQXdEO0FBQzVEOztBQUVBLGlFQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7OztDQUFjOztBQUFkOztFQUFBLGdCQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdCQUFjLEVBQWQsTUFBYztFQUFkLGNBQWM7S0FBZCxXQUFjLEVBQWQsTUFBYztFQUFkLDhMQUFjLEVBQWQsTUFBYztFQUFkLDZCQUFjLEVBQWQsTUFBYztFQUFkLCtCQUFjLEVBQWQsTUFBYztFQUFkLHdDQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDtFQUFBLFNBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLDBCQUFjO0VBQWQseUNBQWM7VUFBZCxpQ0FBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOzs7Ozs7RUFBQSxrQkFBYztFQUFkLG9CQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxjQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxtQkFBYztBQUFBOztBQUFkOzs7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsNkJBQWMsRUFBZCxNQUFjO0VBQWQsK0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLDhCQUFjLEVBQWQsTUFBYztFQUFkLGdDQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsdUJBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkO0VBQUEsZUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7Ozs7Ozs7O0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxlQUFjO0VBQWQsWUFBYztBQUFBOztBQUFkLHdFQUFjOztBQUFkO0VBQUEsYUFBYztBQUFBOztBQUFkO01BQUEsNkdBQWM7SUFBQTs7QUFBZDtJQUFBLHdCQUFjO0lBQWQsd0JBQWM7SUFBZCxtQkFBYztJQUFkLG1CQUFjO0lBQWQsY0FBYztJQUFkLGNBQWM7SUFBZCxjQUFjO0lBQWQsZUFBYztJQUFkLGVBQWM7SUFBZCxhQUFjO0lBQWQsYUFBYztJQUFkLGtCQUFjO0lBQWQsc0NBQWM7SUFBZCw4QkFBYztJQUFkLDZCQUFjO0lBQWQsNEJBQWM7SUFBZCxlQUFjO0lBQWQsb0JBQWM7SUFBZCxzQkFBYztJQUFkLHVCQUFjO0lBQWQsd0JBQWM7SUFBZCxrQkFBYztJQUFkLDJCQUFjO0lBQWQsNEJBQWM7SUFBZCx3Q0FBYztJQUFkLDBDQUFjO0lBQWQsbUNBQWM7SUFBZCw4QkFBYztJQUFkLHNDQUFjO0lBQWQsWUFBYztJQUFkLGtCQUFjO0lBQWQsZ0JBQWM7SUFBZCxpQkFBYztJQUFkLGtCQUFjO0lBQWQsY0FBYztJQUFkLGdCQUFjO0lBQWQsYUFBYztJQUFkLG1CQUFjO0lBQWQscUJBQWM7SUFBZCwyQkFBYztJQUFkLHlCQUFjO0lBQWQsMEJBQWM7SUFBZCwyQkFBYztJQUFkLHVCQUFjO0lBQWQsd0JBQWM7SUFBZCx5QkFBYztJQUFkLHNCQUFjO0lBQWQsb0JBQWM7SUFBZCxzQkFBYztJQUFkLHFCQUFjO0lBQWQ7QUFBYzs7QUFBZDtJQUFBLHdCQUFjO0lBQWQsd0JBQWM7SUFBZCxtQkFBYztJQUFkLG1CQUFjO0lBQWQsY0FBYztJQUFkLGNBQWM7SUFBZCxjQUFjO0lBQWQsZUFBYztJQUFkLGVBQWM7SUFBZCxhQUFjO0lBQWQsYUFBYztJQUFkLGtCQUFjO0lBQWQsc0NBQWM7SUFBZCw4QkFBYztJQUFkLDZCQUFjO0lBQWQsNEJBQWM7SUFBZCxlQUFjO0lBQWQsb0JBQWM7SUFBZCxzQkFBYztJQUFkLHVCQUFjO0lBQWQsd0JBQWM7SUFBZCxrQkFBYztJQUFkLDJCQUFjO0lBQWQsNEJBQWM7SUFBZCx3Q0FBYztJQUFkLDBDQUFjO0lBQWQsbUNBQWM7SUFBZCw4QkFBYztJQUFkLHNDQUFjO0lBQWQsWUFBYztJQUFkLGtCQUFjO0lBQWQsZ0JBQWM7SUFBZCxpQkFBYztJQUFkLGtCQUFjO0lBQWQsY0FBYztJQUFkLGdCQUFjO0lBQWQsYUFBYztJQUFkLG1CQUFjO0lBQWQscUJBQWM7SUFBZCwyQkFBYztJQUFkLHlCQUFjO0lBQWQsMEJBQWM7SUFBZCwyQkFBYztJQUFkLHVCQUFjO0lBQWQsd0JBQWM7SUFBZCx5QkFBYztJQUFkLHNCQUFjO0lBQWQsb0JBQWM7SUFBZCxzQkFBYztJQUFkLHFCQUFjO0lBQWQ7QUFBYztBQUVkO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsc0JBQW1CO0lBQW5CLDhLQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjs7SUFBQTtRQUFBO0lBQW1CO0FBQUE7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLHlCQUFtQjtPQUFuQixzQkFBbUI7WUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLG1CQUFtQjtJQUFuQixxQkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLGtDQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLDhCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLHNCQUFtQjtJQUFuQixvQ0FBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxrQkFBbUI7SUFBbkIsd0NBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsa0JBQW1CO0lBQW5CLHdDQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLGtCQUFtQjtJQUFuQixzQ0FBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsNERBQW1CO0lBQW5CLHVFQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLGdCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUEsaUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsbUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsa0JBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsbUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsbUJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsa0JBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQSxvQkFBbUI7SUFBbkIsMkJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUEsb0JBQW1CO0lBQW5CLDJCQUFtQjtJQUFuQjtBQUFtQjtBQUFuQjtJQUFBLG9CQUFtQjtJQUFuQiw2QkFBbUI7SUFBbkI7QUFBbUI7QUFBbkI7SUFBQSxvQkFBbUI7SUFBbkIsNkJBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBLHlDQUFtQjtJQUFuQix3REFBbUI7SUFBbkIsOEVBQW1CO0lBQW5CO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjtBQUFuQjtJQUFBO0FBQW1CO0FBQW5CO0lBQUE7QUFBbUI7QUFBbkI7SUFBQTtBQUFtQjs7QUFRbkI7SUFDSSwrQkFBK0I7QUFDbkM7O0FBbEJBO0lBQUEsNkJBa0JDO0lBbEJELGlRQWtCQztZQWxCRCx5UEFrQkM7SUFsQkQsK1FBa0JDO1lBbEJEO0FBa0JDOztBQWxCRDtJQUFBLGtCQWtCQztJQWxCRCx3Q0FrQkM7SUFsQkQ7QUFrQkM7O0FBbEJEO0lBQUEsa0JBa0JDO0lBbEJELHdDQWtCQztJQWxCRDtBQWtCQzs7QUFsQkQ7SUFBQSxvQkFrQkM7SUFsQkQsNkJBa0JDO0lBbEJEO0FBa0JDOztBQWxCRDtJQUFBO0FBa0JDOztBQWxCRDtJQUFBO0FBa0JDOztBQWxCRDtJQUFBO0FBa0JDOztBQWxCRDtJQUFBLGtCQWtCQztJQWxCRCx3Q0FrQkM7SUFsQkQ7QUFrQkM7O0FBbEJEO0lBQUE7QUFrQkM7O0FBbEJEO0lBQUEsb0JBa0JDO0lBbEJELDZCQWtCQztJQWxCRDtBQWtCQzs7QUFsQkQ7SUFBQSxrQkFrQkM7SUFsQkQsd0NBa0JDO0lBbEJEO0FBa0JDOztBQWxCRDtJQUFBLG9CQWtCQztJQWxCRCw2QkFrQkM7SUFsQkQ7QUFrQkM7O0FBbEJEOztJQUFBO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUE7SUFrQkM7O0lBbEJEO1FBQUEsZUFrQkM7UUFsQkQ7SUFrQkM7O0lBbEJEO1FBQUEsbUJBa0JDO1FBbEJEO0lBa0JDO0FBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIC8qIGh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9PcmJpdHJvbiAqL1xcbiAgICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIjtcXG4gICAgc3JjOiB1cmwoLi9mb250L09yYml0cm9uLVJlZ3VsYXIudHRmKSBmb3JtYXQoXFxcIlRydWVUeXBlXFxcIik7XFxufVxcblxcbkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuQGxheWVyIGJhc2Uge1xcbiAgICBodG1sIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIk9yYml0cm9uXFxcIiwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxufVxcblxcbi50dy10ZXh0LXNoYWRvdy0xMTEwIHtcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMTBweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNoaXAgPSByZXF1aXJlKCcuL3NoaXAuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIEJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDtcbiAgICAgICAgdGhpcy5zaGlwcyA9IHRoaXMuY3JlYXRlU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBTaGlwcyA9IHRoaXMuY3JlYXRlTWFwU2hpcHMoKTtcbiAgICAgICAgdGhpcy5tYXBBdHRhY2tzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIGNyZWF0ZVNoaXBzKCkge1xuICAgICAgICBjb25zdCBjYXJyaWVyID0gbmV3IFNoaXAoXCJDYXJyaWVyXCIsIDUpO1xuICAgICAgICBjb25zdCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpO1xuICAgICAgICBjb25zdCBkZXN0cm95ZXIgPSBuZXcgU2hpcChcIkRlc3Ryb3llclwiLCAzKTtcbiAgICAgICAgY29uc3Qgc3VibWFyaW5lID0gbmV3IFNoaXAoXCJTdWJtYXJpbmVcIiwgMyk7XG4gICAgICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBuZXcgU2hpcChcIlBhdHJvbCBCb2F0XCIsIDIpO1xuXG4gICAgICAgIHJldHVybiBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXRdO1xuICAgIH1cblxuICAgIGNyZWF0ZU1hcFNoaXBzKCkge1xuICAgICAgICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5mb3JFYWNoKHNoaXAgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSB0aGlzLmdldENvb3JkaW5hdGVzKHNoaXAsIG1hcCk7XG4gICAgICAgICAgICBzaGlwLnNldENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwLnNldChgJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX1gLCBzaGlwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG1hcDtcbiAgICB9XG5cbiAgICBnZXRDb29yZGluYXRlcyhzaGlwLCBtYXApIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gbnVsbDtcblxuICAgICAgICB3aGlsZSAoIXRoaXMuaXNWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlcyA9IHRoaXMuZ2VuZXJhdGVDb29yZGluYXRlcyhzaGlwLmF4aXMsIHNoaXAubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29vcmRpbmF0ZXMoYXhpcywgbGVuZ3RoKSB7XG4gICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tSW50KHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgbGV0IHkgPSBnZXRSYW5kb21JbnQodGhpcy5oZWlnaHQpO1xuICAgICAgICBsZXQgaGVhZCA9IFt4LCB5XTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gW2hlYWRdO1xuXG4gICAgICAgIGlmIChheGlzID09PSBcInhcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB4ICs9IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICB5IC09IDE7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMucHVzaChbeCwgeV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSB7XG4gICAgICAgIGlmIChjb29yZGluYXRlcyA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGxldCBtYXBTaGlwcyA9IG51bGw7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSBtYXBTaGlwcyA9IG1hcDtcbiAgICAgICAgZWxzZSBtYXBTaGlwcyA9IHRoaXMubWFwU2hpcHM7XG5cbiAgICAgICAgbGV0IGJvb2wgPSBbXTtcblxuICAgICAgICBjb29yZGluYXRlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHggPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlWzFdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmQoeCwgeSkgfHwgbWFwU2hpcHMuaGFzKGAke3h9JHt5fWApKSB7XG4gICAgICAgICAgICAgICAgYm9vbC5wdXNoKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYm9vbC5pbmNsdWRlcyhmYWxzZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaXNPdXRPZkJvdW5kKHgsIHkpIHtcbiAgICAgICAgaWYgKHggPiB0aGlzLmhlaWdodCAtIDEgfHwgeCA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICBpZiAoeSA+IHRoaXMuaGVpZ2h0IC0gMSB8fCB5IDwgMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7eH0ke3l9YDtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHRoaXMubWFwU2hpcHMuZ2V0KGtleSk7XG5cbiAgICAgICAgaWYgKEJvb2xlYW4oc2hpcCkpIHtcbiAgICAgICAgICAgIHNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLm1hcEF0dGFja3Muc2V0KGtleSwgMSk7XG4gICAgICAgIH0gZWxzZSB0aGlzLm1hcEF0dGFja3Muc2V0KGtleSwgMCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJvYXJkOyIsImZ1bmN0aW9uIGdldFJhbmRvbUludChuKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhbmRvbUludDsiLCJjb25zdCBCb2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQuanMnKTtcbmNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmJvYXJkLnNoaXBzO1xuICAgICAgICB0aGlzLmxpZmUgPSB0aGlzLnNoaXBzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJvYXJkKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSB0aGlzLmJvYXJkLnNoaXBzO1xuICAgICAgICB0aGlzLmxpZmUgPSB0aGlzLnNoaXBzLmxlbmd0aDtcbiAgICB9XG5cbiAgICB1cGRhdGVMaWZlKCkge1xuICAgICAgICBsZXQgbGlmZSA9IDA7XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaChzaGlwID0+IHtcbiAgICAgICAgICAgIGlmICghc2hpcC5pc1N1bmsoKSkgbGlmZSArPSAxO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxpZmUgPSBsaWZlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soW3gsIHldKSB7XG4gICAgICAgIHRoaXMuYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgdGhpcy51cGRhdGVMaWZlKCk7XG4gICAgfVxuXG4gICAgLy8gQUlcbiAgICBnaXZlQXR0YWNrKG1hcCkge1xuICAgICAgICBsZXQgYXR0YWNrID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKCF0aGlzLmlzVmFsaWRDb29yZGluYXRlKGF0dGFjaywgbWFwKSkge1xuICAgICAgICAgICAgYXR0YWNrID0gdGhpcy5nZW5lcmF0ZUF0dGFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdHRhY2s7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBdHRhY2soKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuYm9hcmQuaGVpZ2h0O1xuICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUludChoZWlnaHQpO1xuICAgICAgICBsZXQgeSA9IGdldFJhbmRvbUludChoZWlnaHQpO1xuICAgICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cblxuICAgIGlzVmFsaWRDb29yZGluYXRlKGNvb3JkaW5hdGUsIG1hcCkge1xuICAgICAgICBpZiAoY29vcmRpbmF0ZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAobWFwLmhhcyhgJHtjb29yZGluYXRlWzBdfSR7Y29vcmRpbmF0ZVsxXX1gKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGxheWVyOyIsImNvbnN0IGdldFJhbmRvbUludCA9IHJlcXVpcmUoJy4vaGVscGVyLmpzJyk7XG5cbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF4aXMgPSB0aGlzLnNldEF4aXMoKTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBudWxsO1xuICAgICAgICB0aGlzLmhwID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuYWxpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldEF4aXMoKSB7XG4gICAgICAgIGNvbnN0IG4gPSBnZXRSYW5kb21JbnQoMik7XG4gICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gXCJ4XCI7XG4gICAgICAgIHJldHVybiBcInlcIjtcbiAgICB9XG5cbiAgICBjaGFuZ2VBeGlzKCkge1xuICAgICAgICBpZiAodGhpcy5heGlzID09PSBcInhcIikgdGhpcy5heGlzID0gXCJ5XCI7XG4gICAgICAgIGVsc2UgdGhpcy5heGlzID0gXCJ4XCI7XG4gICAgfVxuXG4gICAgc2V0Q29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5ocCAtPSAxO1xuICAgICAgICBpZiAodGhpcy5ocCA9PT0gMCkgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmFsaXZlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyIsImNvbnN0IGJsb2NrZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGJsb2NrQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2NrLWJvYXJkXCIpO1xuICAgIGNvbnN0IGJsb2NrU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9jay1zY3JlZW5cIik7XG5cbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJsb2NrKHN0cmluZykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIGlmIChzdHJpbmcgPT09IFwiYm9hcmRcIikgZWxlbWVudCA9IGJsb2NrQm9hcmQ7XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJzY3JlZW5cIikgZWxlbWVudCA9IGJsb2NrU2NyZWVuO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUJsb2NrKHN0cmluZykge1xuICAgICAgICBsZXQgZWxlbWVudCA9IG51bGw7XG4gICAgICAgIGlmIChzdHJpbmcgPT09IFwiYm9hcmRcIikgZWxlbWVudCA9IGJsb2NrQm9hcmQ7XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJzY3JlZW5cIikgZWxlbWVudCA9IGJsb2NrU2NyZWVuO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGJsb2NrQm9hcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgYmxvY2tTY3JlZW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhY3RpdmF0ZUJsb2NrLCBkZWFjdGl2YXRlQmxvY2ssIHJlc2V0IH07XG59KSgpXG5cbmV4cG9ydCB7IGJsb2NrZXIgfTsiLCJpbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgYmxvY2tlciB9IGZyb20gXCIuL2Jsb2NrZXJcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuL2xvZ1wiO1xuXG5jb25zdCBib2FyZERPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgYm9hcmRTaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtc2hpcC0xXCIpO1xuICAgIGNvbnN0IGJvYXJkU2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXNoaXAtMlwiKTtcbiAgICBjb25zdCBib2FyZEF0dGFjazEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLWF0dGFjay0xXCIpO1xuICAgIGNvbnN0IGJvYXJkQXR0YWNrMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtYXR0YWNrLTJcIik7XG4gICAgY29uc3QgYm9hcmRXcmFwcGVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9hcmQtd3JhcHBlci0xXCIpO1xuICAgIGNvbnN0IGJvYXJkV3JhcHBlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkLXdyYXBwZXItMlwiKTtcblxuICAgIGNvbnN0IGJvYXJkU2hpcHMgPSBbYm9hcmRTaGlwMSwgYm9hcmRTaGlwMl07XG4gICAgY29uc3QgYm9hcmRBdHRhY2tzID0gW2JvYXJkQXR0YWNrMSwgYm9hcmRBdHRhY2syXTtcbiAgICBjb25zdCBib2FyZFdyYXBwZXJzID0gW2JvYXJkV3JhcHBlcjEsIGJvYXJkV3JhcHBlcjJdO1xuXG4gICAgZnVuY3Rpb24gaW5pdEJvYXJkUHJlKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIxLCBib2FyZFNoaXAxKTtcbiAgICAgICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIyLCBib2FyZFNoaXAyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXROZXdCb2FyZChwbGF5ZXIsIG4pIHtcbiAgICAgICAgcGxheWVyLmdlbmVyYXRlQm9hcmQoKTtcbiAgICAgICAgaWYgKG4gPT09IDEpIHtcbiAgICAgICAgICAgIF9yZXNldEJvYXJkKGJvYXJkU2hpcDEpO1xuICAgICAgICAgICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIsIGJvYXJkU2hpcDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG4gPT09IDIpIHtcbiAgICAgICAgICAgIF9yZXNldEJvYXJkKGJvYXJkU2hpcDIpO1xuICAgICAgICAgICAgX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIsIGJvYXJkU2hpcDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEJvYXJkKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgX2NyZWF0ZUJvYXJkQXR0YWNrKHBsYXllcjEsIGJvYXJkQXR0YWNrMSwgcGxheWVyMi5ib2FyZC5tYXBTaGlwcywgYm9hcmRTaGlwMik7XG4gICAgICAgIF9jcmVhdGVCb2FyZEF0dGFjayhwbGF5ZXIyLCBib2FyZEF0dGFjazIsIHBsYXllcjEuYm9hcmQubWFwU2hpcHMsIGJvYXJkU2hpcDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlUHJlKCkge1xuICAgICAgICBib2FyZFNoaXBzLmZvckVhY2goYm9hcmQgPT4ge1xuICAgICAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICBib2FyZEF0dGFja3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlKHR1cm4pIHtcbiAgICAgICAgYm9hcmRXcmFwcGVyc1t0dXJuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICBib2FyZFdyYXBwZXJzW25vdFR1cm5dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmlld1NoaXAobikge1xuICAgICAgICBib2FyZFNoaXBzW25dLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGJvYXJkQXR0YWNrc1tuXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZpZXdBdHRhY2sobikge1xuICAgICAgICBib2FyZFNoaXBzW25dLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGJvYXJkQXR0YWNrc1tuXS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNpbXVsYXRlQUlDbGljayhbeCwgeV0sIHR1cm4pIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYm9hcmQtYXR0YWNrLSR7dHVybiArIDF9YCk7XG4gICAgICAgIF9nZXRCb3goYCR7eH0ke3l9YCwgYm9hcmQpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkcyA9IFsuLi4gYm9hcmRTaGlwcywgLi4uIGJvYXJkQXR0YWNrc107XG4gICAgICAgIGJvYXJkcy5mb3JFYWNoKGJvYXJkID0+IHtcbiAgICAgICAgICAgIF9yZXNldEJvYXJkKGJvYXJkKTtcbiAgICAgICAgfSlcblxuICAgICAgICBib2FyZEF0dGFja3MuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGJvYXJkU2hpcHMuZm9yRWFjaChib2FyZCA9PiB7XG4gICAgICAgICAgICBib2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUJvYXJkU2hpcChwbGF5ZXIsIGJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHBsYXllci5ib2FyZC5oZWlnaHQ7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5wb3coaGVpZ2h0LCAyKTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJib3JkZXItMlwiLCBcImZsZXhcIiwgXCJqdXN0aWZ5LWNlbnRlclwiLCBcIml0ZW1zLWNlbnRlclwiLCBcIm91dGxpbmUtb2Zmc2V0LVstNC41cHhdXCIpO1xuICAgICAgICAgICAgYm94LmlkID0gX2Fzc2lnbkJveElEKGksIGhlaWdodCk7XG4gICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBfYXNzaWduU2hpcFRleHQoYm94LCBwbGF5ZXIuYm9hcmQubWFwU2hpcHMpO1xuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKGJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlQm9hcmRBdHRhY2socGxheWVyLCBib2FyZCwgbWFwU2hpcEVuZW15LCBib2FyZFNoaXBFbmVteSkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBwbGF5ZXIuYm9hcmQuaGVpZ2h0O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE1hdGgucG93KGhlaWdodCwgMik7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiYm9yZGVyLTJcIiwgXCJmbGV4XCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJvdXRsaW5lLW9mZnNldC1bLTRweF1cIiwgXCJob3ZlcjpvdXRsaW5lLWRhc2hlZFwiLCBcImhvdmVyOm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgIGJveC5pZCA9IF9hc3NpZ25Cb3hJRChpLCBoZWlnaHQpO1xuICAgICAgICAgICAgX2FkZEJveExpc3RlbmVyKGJveCwgcGxheWVyLCBtYXBTaGlwRW5lbXksIGJvYXJkU2hpcEVuZW15KTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChib3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2Fzc2lnbkJveElEKGksIGhlaWdodCkge1xuICAgICAgICBjb25zdCB4ID0gaSAlIGhlaWdodDtcbiAgICAgICAgY29uc3QgeSA9IC0oTWF0aC5mbG9vcihpIC8gaGVpZ2h0KSAtIChoZWlnaHQgLSAxKSk7XG4gICAgICAgIHJldHVybiBgJHt4fSR7eX1gO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hc3NpZ25TaGlwVGV4dChib3gsIG1hcCkge1xuICAgICAgICBjb25zdCBzaGlwID0gbWFwLmdldChib3guaWQpO1xuICAgICAgICBpZiAoIXNoaXApIHJldHVybiBcIlwiO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImJnLXNsYXRlLTYwMFwiKTtcbiAgICAgICAgcmV0dXJuIHNoaXAubmFtZVswXTsgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FkZEJveExpc3RlbmVyKGJveCwgcGxheWVyLCBtYXBTaGlwRW5lbXksIGJvYXJkU2hpcEVuZW15KSB7XG4gICAgICAgIGNvbnN0IHh5ID0gYm94LmlkLnNwbGl0KFwiXCIpO1xuICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgYmxvY2tlci5hY3RpdmF0ZUJsb2NrKFwiYm9hcmRcIik7XG4gICAgICAgICAgICBsb2cubWVzc2FnZShgJHtwbGF5ZXIubmFtZX0gbGF1bmNoZXMgYSBtaXNzaWxlIHRvIFsgJHt4eVswXX0gLCAke3h5WzFdfSBdYCwgMSk7XG5cbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXI6b3V0bGluZS1kYXNoZWRcIiwgXCJob3ZlcjpvdXRsaW5lLXllbGxvdy01MDBcIik7XG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm91dGxpbmUtZGFzaGVkXCIsIFwib3V0bGluZS15ZWxsb3ctNTAwXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gbWFwU2hpcEVuZW15LmdldChib3guaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJvdXRsaW5lLWRhc2hlZFwiLCBcIm91dGxpbmUteWVsbG93LTUwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgX3BsYWNlSGl0TWFyayhib3gsIDEpO1xuICAgICAgICAgICAgICAgICAgICBfcGxhY2VIaXRNYXJrKF9nZXRCb3goYm94LmlkLCBib2FyZFNoaXBFbmVteSksIDApO1xuICAgICAgICAgICAgICAgICAgICBsb2cubWVzc2FnZShcIkggSSBUXCIsIDIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwLmhwID09PSAxKSBsb2cubWVzc2FnZShgJHtwbGF5ZXIubmFtZX0gc3VuayBhICR7c2hpcC5uYW1lfSFgLCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIm91dGxpbmUtZGFzaGVkXCIsIFwib3V0bGluZS15ZWxsb3ctNTAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBfcGxhY2VNaXNzTWFyayhib3gsIDEpO1xuICAgICAgICAgICAgICAgICAgICBfcGxhY2VNaXNzTWFyayhfZ2V0Qm94KGJveC5pZCwgYm9hcmRTaGlwRW5lbXkpLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgbG9nLm1lc3NhZ2UoXCJNIEkgUyBTXCIsIDIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdhbWUudXBkYXRlKGJveC5pZCk7XG4gICAgICAgICAgICB9LCA1MDApXG4gICAgICAgIH0sIHtvbmNlOiB0cnVlfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0Qm94KGJveElELCBib2FyZCkge1xuICAgICAgICByZXR1cm4gYm9hcmQucXVlcnlTZWxlY3RvcihgW2lkID0gXCIke2JveElEfVwiXWApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wbGFjZUhpdE1hcmsoYm94LCBuKSB7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwib3V0bGluZVwiLCBcIm91dGxpbmUtcmVkLTcwMFwiLCBcInRleHQtcmVkLTcwMFwiKTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwidGV4dC0yeGxcIik7XG4gICAgICAgICAgICBib3gudGV4dENvbnRlbnQgPSBcIiFcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9wbGFjZU1pc3NNYXJrKGJveCwgbikge1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm91dGxpbmVcIiwgXCJvdXRsaW5lLWdyZWVuLTcwMFwiLCBcInRleHQtZ3JlZW4tNzAwXCIpO1xuICAgICAgICBpZiAobikge1xuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LTJ4bFwiKTtcbiAgICAgICAgICAgIGJveC50ZXh0Q29udGVudCA9IFwiL1wiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3Jlc2V0Qm9hcmQoYm9hcmQpIHtcbiAgICAgICAgd2hpbGUgKGJvYXJkLmNoaWxkcmVuLmxlbmd0aCA+IDApIGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmxhc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgaW5pdEJvYXJkUHJlLCBnZXROZXdCb2FyZCwgaW5pdEJvYXJkLCBhY3RpdmF0ZVByZSwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIHZpZXdTaGlwLCB2aWV3QXR0YWNrLCBzaW11bGF0ZUFJQ2xpY2ssIHJlc2V0IH07XG59KSgpXG5cbmV4cG9ydCB7IGJvYXJkRE9NIH0iLCJpbXBvcnQgaWNvbkdpdEh1YiBmcm9tICcuLi9pY29uL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZyc7XG5pbXBvcnQgaWNvbkxvYWRpbmcgZnJvbSAnLi4vaWNvbi9sb2FkaW5nLWN1c3RvbS5wbmcnO1xuXG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuL3RhYic7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gJy4vYm9hcmQtZG9tJztcbmltcG9ydCB7IGJsb2NrZXIgfSBmcm9tICcuL2Jsb2NrZXInO1xuaW1wb3J0IHsgd2VsY29tZSB9IGZyb20gJy4vd2VsY29tZSc7XG5pbXBvcnQgeyBsb2cgfSBmcm9tICcuL2xvZyc7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSAnLi9nYW1lJztcblxuY29uc3QgZG9tID0gKCgpID0+IHtcbiAgICBjb25zdCBpbWdMb2FkaW5nMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy0xXCIpO1xuICAgIGNvbnN0IGltZ0xvYWRpbmcyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2FkaW5nLTJcIik7XG5cbiAgICBjb25zdCBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZW5kXCIpO1xuICAgIGNvbnN0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2lubmVyXCIpO1xuICAgIGNvbnN0IHJlbWF0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1yZW1hdGNoXCIpO1xuICAgIGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tbWFpbi1tZW51XCIpO1xuICAgIGNvbnN0IHZpZXcxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3LTFcIik7XG4gICAgY29uc3QgdmlldzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZXctMlwiKTtcblxuICAgIGNvbnN0IHJhbmRvbWl6ZTEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbWl6ZS0xXCIpO1xuICAgIGNvbnN0IHJhbmRvbWl6ZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbWl6ZS0yXCIpO1xuICAgIGNvbnN0IG9rUmFuZG9taXplMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2stcmFuZG9taXplLTFcIik7XG4gICAgY29uc3Qgb2tSYW5kb21pemUyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvay1yYW5kb21pemUtMlwiKTtcbiAgICBjb25zdCByYW5kb21Jbm5lcldyYXBwZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyYW5kb20taW5uZXItd3JhcHBlci0xXCIpO1xuICAgIGNvbnN0IHJhbmRvbUlubmVyV3JhcHBlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JhbmRvbS1pbm5lci13cmFwcGVyLTJcIik7XG4gICAgY29uc3QgcmFuZG9tV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFuZG9tLXdyYXBwZXJcIik7XG4gICAgY29uc3Qgdmlld1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZXctd3JhcHBlclwiKTtcblxuICAgIGNvbnN0IHNwYW5PSzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29rLXJhbmRvbWl6ZS0xID4gc3BhblwiKTtcbiAgICBjb25zdCBzcGFuT0syID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvay1yYW5kb21pemUtMiA+IHNwYW5cIik7XG5cbiAgICBjb25zdCBpbWdMb2FkaW5ncyA9IFtpbWdMb2FkaW5nMSwgaW1nTG9hZGluZzJdO1xuICAgIGNvbnN0IHZpZXdzID0gW3ZpZXcxLCB2aWV3Ml07XG4gICAgY29uc3Qgb2tSYW5kb21pemVzID0gW29rUmFuZG9taXplMSwgb2tSYW5kb21pemUyXTtcbiAgICBjb25zdCByYW5kb21Jbm5lcldyYXBwZXJzID0gW3JhbmRvbUlubmVyV3JhcHBlcjEsIHJhbmRvbUlubmVyV3JhcHBlcjJdO1xuICAgIGNvbnN0IHNwYW5PS3MgPSBbc3Bhbk9LMSwgc3Bhbk9LMl07XG4gICAgXG4gICAgbGV0IG1vZGUgPSBudWxsO1xuICAgIGxldCBwbGF5ZXJzID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIF9pbml0SW1nKCk7XG4gICAgICAgIF9pbml0TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdFByZUdhbWUobiwgLi4uIGFycikge1xuICAgICAgICBtb2RlID0gbjtcbiAgICAgICAgcGxheWVycyA9IFsuLi4gYXJyXTtcbiAgICAgICAgdGFiLmluaXQoLi4uIHBsYXllcnMpO1xuICAgICAgICBib2FyZERPTS5pbml0Qm9hcmRQcmUoLi4uIHBsYXllcnMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlUGxheWVyKHR1cm4sIG5vdFR1cm4pIHtcbiAgICAgICAgX2RlYWN0aXZhdGUobm90VHVybik7XG4gICAgICAgIF9hY3RpdmF0ZSh0dXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmRHYW1lKG5hbWUpIHtcbiAgICAgICAgYmxvY2tlci5kZWFjdGl2YXRlQmxvY2soXCJib2FyZFwiKTtcbiAgICAgICAgYmxvY2tlci5hY3RpdmF0ZUJsb2NrKFwic2NyZWVuXCIpO1xuICAgICAgICB3aW5uZXIudGV4dENvbnRlbnQgPSBgJHtuYW1lfSB3aW5zIWA7XG4gICAgICAgIGVuZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gX2luaXRJbWcoKSB7XG4gICAgICAgIGNvbnN0IGltZ0dpdEh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvbi1naXRodWJcIik7XG5cbiAgICAgICAgaW1nR2l0SHViLnNyYyA9IGljb25HaXRIdWI7XG4gICAgICAgIGltZ0xvYWRpbmdzLmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpY29uTG9hZGluZztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2luaXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJlbWF0Y2gub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIF9yZXNldCgpO1xuICAgICAgICAgICAgd2VsY29tZS5yZW1hdGNoKG1vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbk1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIF9yZXNldCgpO1xuICAgICAgICAgICAgd2VsY29tZS5oaWRlKFwibWFpblwiKTtcbiAgICAgICAgICAgIHdlbGNvbWUuc2hvdyhcIndlbGNvbWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3MS5vbnBvaW50ZXJkb3duID0gKCkgPT4geyBib2FyZERPTS52aWV3U2hpcCgwKTsgfVxuICAgICAgICB2aWV3MS5vbnBvaW50ZXJ1cCA9ICgpID0+IHsgYm9hcmRET00udmlld0F0dGFjaygwKTsgfVxuXG4gICAgICAgIHJhbmRvbWl6ZTEub25jbGljayA9ICgpID0+IHsgYm9hcmRET00uZ2V0TmV3Qm9hcmQoWy4uLiBwbGF5ZXJzXVswXSwgMSk7IH1cbiAgICAgICAgcmFuZG9taXplMi5vbmNsaWNrID0gKCkgPT4geyBib2FyZERPTS5nZXROZXdCb2FyZChbLi4uIHBsYXllcnNdWzFdLCAyKTsgfVxuXG4gICAgICAgIG9rUmFuZG9taXplMS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBva1JhbmRvbWl6ZTEuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNwYW5PSzEuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgICBpbWdMb2FkaW5nMS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgICAgIF9jb3VudERvd25Ub0dhbWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgX2FjdGl2YXRlUGxheWVyUHJlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgb2tSYW5kb21pemUyLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBva1JhbmRvbWl6ZTIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgc3Bhbk9LMi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgaW1nTG9hZGluZzIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgIF9jb3VudERvd25Ub0dhbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jb3VudERvd25Ub0dhbWUobiA9IDMpIHtcbiAgICAgICAgbG9nLm1lc3NhZ2UoXCJHYW1lIHN0YXJ0aW5nIGluXCIsIDEpO1xuICAgICAgICBsb2cubWVzc2FnZShgJHtufWAsIDIpO1xuICAgICAgICBjb25zdCBzdGFydEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHN0YXJ0SW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIF9pbml0R2FtZSguLi4gcGxheWVycyk7XG4gICAgICAgICAgICB9IGVsc2UgbG9nLm1lc3NhZ2UoYCR7bn1gLCAyKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaW5pdEdhbWUoLi4uIHBsYXllcnMpIHtcbiAgICAgICAgcmFuZG9tV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB2aWV3V3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gICAgICAgIGJvYXJkRE9NLmFjdGl2YXRlUHJlKCk7XG4gICAgICAgIGJvYXJkRE9NLmluaXRCb2FyZCguLi4gcGxheWVycyk7XG5cbiAgICAgICAgaWYgKG1vZGUgPT09IDEpIHtcbiAgICAgICAgICAgIHZpZXcyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZpZXcyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbnBvaW50ZXJkb3duXCIsIGJvYXJkRE9NLnZpZXdTaGlwKTtcbiAgICAgICAgICAgIHZpZXcyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbnBvaW50ZXJ1cFwiLCBib2FyZERPTS52aWV3QXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RlID09PSAyKSB7XG4gICAgICAgICAgICB2aWV3Mi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmlldzIub25wb2ludGVyZG93biA9ICgpID0+IHsgYm9hcmRET00udmlld1NoaXAoMSk7IH1cbiAgICAgICAgICAgIHZpZXcyLm9ucG9pbnRlcnVwID0gKCkgPT4geyBib2FyZERPTS52aWV3QXR0YWNrKDEpOyB9XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lLnJ1bigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hY3RpdmF0ZVBsYXllclByZShuKSB7XG4gICAgICAgIF9kZWFjdGl2YXRlUHJlKCshbik7XG4gICAgICAgIF9hY3RpdmF0ZVByZShuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWN0aXZhdGVQcmUobikge1xuICAgICAgICB0YWIuYWN0aXZhdGUobik7XG4gICAgICAgIGJvYXJkRE9NLmFjdGl2YXRlKG4pO1xuICAgICAgICByYW5kb21Jbm5lcldyYXBwZXJzW25dLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGVQcmUobikge1xuICAgICAgICB0YWIuZGVhY3RpdmF0ZShuKTtcbiAgICAgICAgYm9hcmRET00uZGVhY3RpdmF0ZShuKTtcbiAgICAgICAgcmFuZG9tSW5uZXJXcmFwcGVyc1tuXS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hY3RpdmF0ZSh0dXJuKSB7XG4gICAgICAgIHRhYi5hY3RpdmF0ZSh0dXJuKTtcbiAgICAgICAgYm9hcmRET00uYWN0aXZhdGUodHVybik7XG4gICAgICAgIHZpZXdzW3R1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2RlYWN0aXZhdGUobm90VHVybikge1xuICAgICAgICB0YWIuZGVhY3RpdmF0ZShub3RUdXJuKTtcbiAgICAgICAgYm9hcmRET00uZGVhY3RpdmF0ZShub3RUdXJuKTtcbiAgICAgICAgdmlld3Nbbm90VHVybl0uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVzZXQoKSB7XG4gICAgICAgIF9yZXNldE9LKCk7XG4gICAgICAgIF9yZXNldFdyYXBwZXJzKCk7XG4gICAgICAgIGJvYXJkRE9NLnJlc2V0KCk7XG4gICAgICAgIGxvZy5yZXNldCgpO1xuICAgICAgICBibG9ja2VyLnJlc2V0KCk7XG4gICAgICAgIGVuZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9yZXNldFdyYXBwZXJzKCkge1xuICAgICAgICB2aWV3V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICByYW5kb21XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIF9hY3RpdmF0ZVBsYXllclByZSgwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVzZXRPSygpIHtcbiAgICAgICAgb2tSYW5kb21pemVzLmZvckVhY2goYnV0dG9uID0+IHsgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7IH0pXG4gICAgICAgIHNwYW5PS3MuZm9yRWFjaChzcGFuID0+IHsgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpOyB9KVxuICAgICAgICBpbWdMb2FkaW5ncy5mb3JFYWNoKGltZyA9PiB7IGltZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpOyB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIGluaXRQcmVHYW1lLCBhY3RpdmF0ZVBsYXllciwgZW5kR2FtZSB9O1xufSkoKVxuXG5leHBvcnQgeyBkb20gfTsiLCJpbXBvcnQgeyBkb20gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyB0YWIgfSBmcm9tICcuL3RhYic7XG5pbXBvcnQgeyBib2FyZERPTSB9IGZyb20gJy4vYm9hcmQtZG9tJztcbmltcG9ydCB7IGJsb2NrZXIgfSBmcm9tICcuL2Jsb2NrZXInO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSAnLi9sb2cnO1xuXG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuLi9tb2R1bGUtYmFjay1lbmQvcGxheWVyLmpzJyk7XG5jb25zdCBnZXRSYW5kb21JbnQgPSByZXF1aXJlKCcuLi9tb2R1bGUtYmFjay1lbmQvaGVscGVyLmpzJyk7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJzID0gbnVsbDtcbiAgICBsZXQgdHVybiA9IG51bGw7XG4gICAgbGV0IG5vdFR1cm4gPSBudWxsO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlR2FtZShuYW1lMSwgbmFtZTIsIG1vZGUpIHtcbiAgICAgICAgX2luaXRQbGF5ZXJzKG5hbWUxLCBuYW1lMik7XG4gICAgICAgIGRvbS5pbml0UHJlR2FtZShtb2RlLCAuLi4gcGxheWVycyk7XG4gICAgICAgIGxvZy5yZXNldCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bigpIHtcbiAgICAgICAgbG9nLm1lc3NhZ2UoXCJXZWFwb24ncyBmcmVlIVwiLCAxKTtcbiAgICAgICAgX2FjdGl2YXRlVHVybigpO1xuICAgICAgICBfQUltb3ZlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlKGlkKSB7XG4gICAgICAgIGNvbnN0IHh5ID0gaWQuc3BsaXQoXCJcIik7XG4gICAgICAgIHBsYXllcnNbbm90VHVybl0ucmVjZWl2ZUF0dGFjayhbK3h5WzBdLCAreHlbMV1dKTtcbiAgICAgICAgLy8gcGxheWVyc1tub3RUdXJuXS5saWZlID0gMDsgLy8gdGVzdFxuICAgICAgICB0YWIudXBkYXRlTGlmZShwbGF5ZXJzW25vdFR1cm5dLCBub3RUdXJuKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChfaXNHYW1lKCkpIHtcbiAgICAgICAgICAgICAgICBsb2cubWVzc2FnZShgJHtwbGF5ZXJzW3R1cm5dLm5hbWV9IHdpbnMhYCwgMSk7XG4gICAgICAgICAgICAgICAgZG9tLmVuZEdhbWUocGxheWVyc1t0dXJuXS5uYW1lKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgX3VwZGF0ZVR1cm4oKTtcbiAgICAgICAgICAgIF9hY3RpdmF0ZVR1cm4oKTtcbiAgICAgICAgICAgIF9BSW1vdmUoKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIF9pbml0UGxheWVycyhuYW1lMSwgbmFtZTIpIHtcbiAgICAgICAgY29uc3QgcGxheWVyMSA9IG5ldyBQbGF5ZXIobmFtZTEpO1xuICAgICAgICBjb25zdCBwbGF5ZXIyID0gbmV3IFBsYXllcihuYW1lMik7XG4gICAgICAgIHBsYXllcnMgPSBbcGxheWVyMSwgcGxheWVyMl07XG4gICAgICAgIHR1cm4gPSBnZXRSYW5kb21JbnQoMik7XG4gICAgICAgIG5vdFR1cm4gPSArIXR1cm47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2FjdGl2YXRlVHVybigpIHtcbiAgICAgICAgZG9tLmFjdGl2YXRlUGxheWVyKHR1cm4sIG5vdFR1cm4pO1xuICAgICAgICBpZiAocGxheWVyc1t0dXJuXS5uYW1lICE9PSBcIkFJXCIpIGJsb2NrZXIuZGVhY3RpdmF0ZUJsb2NrKFwiYm9hcmRcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIF9BSW1vdmUoKSB7XG4gICAgICAgIGlmIChwbGF5ZXJzW3R1cm5dLm5hbWUgPT09IFwiQUlcIikge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwID0gcGxheWVyc1tub3RUdXJuXS5ib2FyZC5tYXBBdHRhY2tzO1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dGFjayA9IHBsYXllcnNbdHVybl0uZ2l2ZUF0dGFjayhtYXApO1xuICAgICAgICAgICAgICAgIGJvYXJkRE9NLnNpbXVsYXRlQUlDbGljayhhdHRhY2ssIHR1cm4pO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXNHYW1lKCkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBwbGF5ZXJzKSB7XG4gICAgICAgICAgICBpZiAocGxheWVyLmxpZmUgPT09IDApIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdXBkYXRlVHVybigpIHtcbiAgICAgICAgY29uc3QgdGVtcCA9IHR1cm47XG4gICAgICAgIHR1cm4gPSArIXR1cm47XG4gICAgICAgIG5vdFR1cm4gPSB0ZW1wO1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUdhbWUsIHJ1biwgdXBkYXRlIH07XG59KSgpXG5cbmV4cG9ydCB7IGdhbWUgfTsiLCJjb25zdCBsb2cgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGxvZ0RpdjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZy0xXCIpO1xuICAgIGNvbnN0IGxvZ0RpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZy0yXCIpO1xuXG4gICAgZnVuY3Rpb24gbWVzc2FnZShzdHJpbmcsIG4pIHtcbiAgICAgICAgaWYgKG4gPT09IDEpIHtcbiAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICBsb2dEaXYxLnRleHRDb250ZW50ID0gc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG4gPT09IDIpIGxvZ0RpdjIudGV4dENvbnRlbnQgPSBzdHJpbmc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGxvZ0RpdjEudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBjaG9vc2UgeW91ciBwcmVmZXJyZWQgZm9ybWF0aW9uXCI7XG4gICAgICAgIGxvZ0RpdjIudGV4dENvbnRlbnQgPSBcIi4uLlwiO1xuICAgIH1cblxuICAgIHJldHVybiB7IG1lc3NhZ2UsIHJlc2V0IH07XG59KSgpXG5cbmV4cG9ydCB7IGxvZyB9IiwiY29uc3QgdGFiID0gKCgpID0+IHtcbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItMVwiKTtcbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YWItMlwiKTtcbiAgICBjb25zdCBuYW1lMT0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLTFcIik7XG4gICAgY29uc3QgbmFtZTI9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmFtZS0yXCIpO1xuICAgIGNvbnN0IGxpZmUxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaWZlLTFcIik7XG4gICAgY29uc3QgbGlmZTIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpZmUtMlwiKTtcblxuICAgIGNvbnN0IHRhYnMgPSBbdGFiMSwgdGFiMl07XG4gICAgY29uc3QgbGl2ZXMgPSBbbGlmZTEsIGxpZmUyXTtcblxuICAgIGZ1bmN0aW9uIGluaXQocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICBfaW5pdE5hbWUocGxheWVyMSwgbmFtZTEpO1xuICAgICAgICBfaW5pdE5hbWUocGxheWVyMiwgbmFtZTIpO1xuICAgICAgICB1cGRhdGVMaWZlKHBsYXllcjEsIDApO1xuICAgICAgICB1cGRhdGVMaWZlKHBsYXllcjIsIDEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpZmUocGxheWVyLCB0dXJuKSB7XG4gICAgICAgIGxpdmVzW3R1cm5dLnRleHRDb250ZW50ID0gcGxheWVyLmxpZmU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUodHVybikge1xuICAgICAgICB0YWJzW3R1cm5dLmNsYXNzTGlzdC5yZW1vdmUoXCJtYi0yXCIsIFwiYmctc2xhdGUtNDAwXCIpO1xuICAgICAgICB0YWJzW3R1cm5dLmNsYXNzTGlzdC5hZGQoXCJiZy1zbGF0ZS0yMDBcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVhY3RpdmF0ZShub3RUdXJuKSB7XG4gICAgICAgIHRhYnNbbm90VHVybl0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXNsYXRlLTIwMFwiKTtcbiAgICAgICAgdGFic1tub3RUdXJuXS5jbGFzc0xpc3QuYWRkKFwibWItMlwiLCBcImJnLXNsYXRlLTQwMFwiKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIF9pbml0TmFtZShwbGF5ZXIsIG5hbWUpIHtcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IHBsYXllci5uYW1lO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIHVwZGF0ZUxpZmUsIGFjdGl2YXRlLCBkZWFjdGl2YXRlIH07XG59KSgpXG5cbmV4cG9ydCB7IHRhYiB9OyIsImltcG9ydCB7IGdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG5cbmNvbnN0IHdlbGNvbWUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmVlbldlbGNvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlbGNvbWVcIik7XG4gICAgY29uc3Qgc2NyZWVuTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbiAgICBcbiAgICBjb25zdCBidXR0b25QVkFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidXR0b24tcHZhaVwiKTtcbiAgICBjb25zdCBidXR0b25QVlAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1wdnBcIik7XG4gICAgXG4gICAgY29uc3QgZGlhbG9nUFZBSSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nLXB2YWlcIik7XG4gICAgY29uc3QgbmFtZVBWQUkxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLXB2YWktMVwiKTtcbiAgICBjb25zdCBva1BWQUkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29rLXB2YWlcIik7XG4gICAgY29uc3QgY2xvc2VQVkFJID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1wdmFpXCIpO1xuXG4gICAgY29uc3QgZGlhbG9nUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWFsb2ctcHZwXCIpO1xuICAgIGNvbnN0IG5hbWVQVlAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLXB2cC0xXCIpO1xuICAgIGNvbnN0IG5hbWVQVlAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lLXB2cC0yXCIpO1xuICAgIGNvbnN0IG9rUFZQID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvay1wdnBcIik7XG4gICAgY29uc3QgY2xvc2VQVlAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXB2cFwiKTtcbiAgICBcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBfaW5pdFBWQUkoKTtcbiAgICAgICAgX2luaXRQVlAoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93KHN0cmluZykge1xuICAgICAgICBsZXQgc2NyZWVuID0gbnVsbDtcbiAgICAgICAgaWYgKHN0cmluZyA9PT0gXCJ3ZWxjb21lXCIpIHNjcmVlbiA9IHNjcmVlbldlbGNvbWU7XG4gICAgICAgIGVsc2UgaWYgKHN0cmluZyA9PT0gXCJtYWluXCIpIHNjcmVlbiA9IHNjcmVlbk1haW47XG4gICAgICAgIHNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGUoc3RyaW5nKSB7XG4gICAgICAgIGxldCBzY3JlZW4gPSBudWxsO1xuICAgICAgICBpZiAoc3RyaW5nID09PSBcIndlbGNvbWVcIikgc2NyZWVuID0gc2NyZWVuV2VsY29tZTtcbiAgICAgICAgZWxzZSBpZiAoc3RyaW5nID09PSBcIm1haW5cIikgc2NyZWVuID0gc2NyZWVuTWFpbjtcbiAgICAgICAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtYXRjaChtb2RlKSB7XG4gICAgICAgIGlmIChtb2RlID09PSAxKSBva1BWQUkuY2xpY2soKTtcbiAgICAgICAgZWxzZSBpZiAobW9kZSA9PT0gMikgb2tQVlAuY2xpY2soKTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIGZ1bmN0aW9uIF9pbml0UFZBSSgpIHtcbiAgICAgICAgYnV0dG9uUFZBSS5vbmNsaWNrID0gKCkgPT4geyBkaWFsb2dQVkFJLnNob3dNb2RhbCgpOyB9XG4gICAgICAgIGNsb3NlUFZBSS5vbmNsaWNrID0gKCkgPT4geyBkaWFsb2dQVkFJLmNsb3NlKCk7IH1cbiAgICAgICAgb2tQVkFJLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmNyZWF0ZUdhbWUobmFtZVBWQUkxLnZhbHVlIHx8IFwiUGxheWVyIDFcIiwgXCJBSVwiLCAxKTtcbiAgICAgICAgICAgIG5hbWVQVkFJMS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICBfaGlkZVdlbGNvbWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9pbml0UFZQKCkge1xuICAgICAgICBidXR0b25QVlAub25jbGljayA9ICgpID0+IHsgZGlhbG9nUFZQLnNob3dNb2RhbCgpOyB9XG4gICAgICAgIGNsb3NlUFZQLm9uY2xpY2sgPSAoKSA9PiB7IGRpYWxvZ1BWUC5jbG9zZSgpOyB9XG4gICAgICAgIG9rUFZQLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBnYW1lLmNyZWF0ZUdhbWUobmFtZVBWUDEudmFsdWUgfHwgXCJQbGF5ZXIgMVwiLCBuYW1lUFZQMi52YWx1ZSB8fCBcIlBsYXllciAyXCIsIDIpO1xuICAgICAgICAgICAgbmFtZVBWUDEudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgbmFtZVBWUDIudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgX2hpZGVXZWxjb21lKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaGlkZVdlbGNvbWUoKSB7XG4gICAgICAgIHNjcmVlbldlbGNvbWUuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgc2NyZWVuTWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGluaXQsIHNob3csIGhpZGUsIHJlbWF0Y2ggfVxufSkoKVxuXG5leHBvcnQgeyB3ZWxjb21lIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB3ZWxjb21lIH0gZnJvbSAnLi9tb2R1bGUtZnJvbnQtZW5kL3dlbGNvbWUnO1xuaW1wb3J0IHsgZG9tIH0gZnJvbSAnLi9tb2R1bGUtZnJvbnQtZW5kL2RvbSc7XG5cbmRvbS5pbml0KCk7XG53ZWxjb21lLmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
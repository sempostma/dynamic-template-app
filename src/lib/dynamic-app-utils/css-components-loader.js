export default ({
    primaryThemeColor,
    secondaryThemeColor
}) => {
    console.log(primaryThemeColor);
    return `/* Custom Theme for Onsen UI 2.10.8 */

    /*!
     * Copyright 2013-2017 ASIAL CORPORATION
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *    http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     */
    /*!
     * Copyright 2012 Adobe Systems Inc.;
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     */
    
    :root {
      /* variables for iOS components */
    
      /* variables for Material Design components */
    
      /* others */
    }
    html {
      height: 100%;
      width: 100%;
    }
    body {
      position: absolute;
      overflow: hidden;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      margin: 0;
      -webkit-text-size-adjust: 100%;
      touch-action: manipulation;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
    }
    input, textarea, select {
      -webkit-user-select: auto;
          -ms-user-select: auto;
              user-select: auto;
      -moz-user-select: text;
      -webkit-touch-callout: none;
    }
    a, button, input, textarea, select {
      touch-action: manipulation;
    }
    input:active, input:focus, textarea:active, textarea:focus, select:active, select:focus {
      outline: none;
    }
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 24px;
    }
    h4, h5, h6 {
      font-size: 18px;
    }
    :root {
    }
    .page {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      background-color: #efeff4;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow-x: visible;
      overflow-y: hidden;
      color: #1f1f21;
      -ms-overflow-style: none;
      -webkit-font-smoothing: antialiased;
    }
    .page::-webkit-scrollbar {
      display: none;
    }
    .page__content {
      background-color: #efeff4;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
    }
    .page__background {
      background-color: #efeff4;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
    }
    .page--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      background-color: #eceff1;
    }
    .page--material__content {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-weight: 400;
    }
    .page__content h1,
    .page__content h2,
    .page__content h3,
    .page__content h4,
    .page__content h5 {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-weight: 500;
      margin: 0.6em 0;
      padding: 0;
    }
    .page__content h1 {
      font-size: 28px;
    }
    .page__content h2 {
      font-size: 24px;
    }
    .page__content h3 {
      font-size: 20px;
    }
    .page--material__content h1,
    .page--material__content h2,
    .page--material__content h3,
    .page--material__content h4,
    .page--material__content h5 {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-weight: 500;
      margin: 0.6em 0;
      padding: 0;
    }
    .page--material__content h1 {
      font-size: 28px;
    }
    .page--material__content h2 {
      font-size: 24px;
    }
    .page--material__content h3 {
      font-size: 20px;
    }
    .page--material__background {
      background-color: #eceff1;
    }
    :root { /* background color active */
    }
    /*~
      name: Switch
      category: Switch
      elements: ons-switch
      markup: |
        <label class="switch">
          <input type="checkbox" class="switch__input">
          <div class="switch__toggle">
            <div class="switch__handle"></div>
          </div>
        </label>
        <label class="switch">
          <input type="checkbox" class="switch__input" checked>
          <div class="switch__toggle">
            <div class="switch__handle"></div>
          </div>
        </label>
        <label class="switch">
          <input type="checkbox" class="switch__input" disabled>
          <div class="switch__toggle">
            <div class="switch__handle"></div>
          </div>
        </label>
    */
    .switch {
      display: inline-block;
      vertical-align: top;
      box-sizing: border-box;
      background-clip: padding-box;
      position: relative;
      min-width: 51px;
      font-size: 17px;
      padding: 0 20px;
      border: none;
      overflow: visible;
      width: 51px;
      height: 32px;
      z-index: 0;
      text-align: left;
    }
    .switch__input {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      z-index: 0;
    }
    /* switch toggle background */
    .switch__toggle {
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 30px;
      transition-property: all;
      transition-duration: 0.35s;
      transition-timing-function: ease-out;
      box-shadow: inset 0 0 0 2px #e5e5e5;
    }
    /* switch toggle circle */
    .switch__handle {
      box-sizing: border-box;
      background-clip: padding-box;
      position: absolute;
      content: '';
      border-radius: 28px;
      height: 28px;
      width: 28px;
      background-color: white;
      left: 1px;
      top: 2px;
      transition-property: all;
      transition-duration: 0.35s;
      transition-timing-function: cubic-bezier(.59, .01, .5, .99);
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, .25), 0 3px 2px rgba(0, 0, 0, .25);
    }
    .switch--active__handle {
      transition: none;
    }
    :checked + .switch__toggle {
      box-shadow: inset 0 0 0 2px ${primaryThemeColor};
      background-color: ${primaryThemeColor};
    }
    :checked + .switch__toggle > .switch__handle {
      left: 21px;
      box-shadow: 0 3px 2px rgba(0, 0, 0, .25);
    }
    :disabled + .switch__toggle {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .switch__touch {
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -10px;
      right: -10px;
    }
    /*~
      name: Material Switch
      category: Switch
      elements: ons-switch
      markup: |
        <label class="switch switch--material">
          <input type="checkbox" class="switch__input switch--material__input">
          <div class="switch__toggle switch--material__toggle">
            <div class="switch__handle switch--material__handle">
            </div>
          </div>
        </label>
        <label class="switch switch--material">
          <input type="checkbox" class="switch__input switch--material__input" checked>
          <div class="switch__toggle switch--material__toggle">
            <div class="switch__handle switch--material__handle">
            </div>
          </div>
        </label>
        <label class="switch switch--material">
          <input type="checkbox" class="switch__input switch--material__input" disabled>
          <div class="switch__toggle switch--material__toggle">
            <div class="switch__handle switch--material__handle">
            </div>
          </div>
        </label>
    */
    .switch--material {
      width: 36px;
      height: 24px;
      padding: 0 10px;
      min-width: 36px;
    }
    .switch--material__toggle {
      background-color: #9b9b9b;
      background-color: rgba(155, 155, 155, 1);
      margin-top: 5px;
      height: 14px;
      box-shadow: none;
    }
    .switch--material__input {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      z-index: 0;
    }
    .switch--material__handle {
      background-color: #f1f1f1;
      left: 0;
      margin-top: -5px;
      width: 20px;
      height: 20px;
      box-shadow:
          0 4px 5px 0 rgba(0, 0, 0, .14),
          0 1px 10px 0 rgba(0, 0, 0, .12),
          0 2px 4px -1px rgba(0, 0, 0, .4);
    }
    :checked + .switch--material__toggle {
      background-color: #37474f;
      background-color: rgba(55, 71, 79, 0.5);
      box-shadow: none;
    }
    :checked + .switch--material__toggle > .switch--material__handle {
      left: 16px;
      background-color: ${primaryThemeColor};
      box-shadow:
          0 2px 2px 0 rgba(0, 0, 0, .14),
          0 1px 5px 0 rgba(0, 0, 0, .12),
          0 3px 1px -2px rgba(0, 0, 0, .2);
    }
    :disabled + .switch--material__toggle {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .switch--material__handle:before {
      background: transparent;
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: 0;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, .12);
      transition: box-shadow 0.1s linear;
    }
    .switch--material__toggle > .switch--active__handle:before {
      box-shadow: 0 0 0 14px rgba(0, 0, 0, .12);
    }
    :checked + .switch--material__toggle > .switch--active__handle:before {
      box-shadow: 0 0 0 14px rgba(0, 98, 130, 0.2);
    }
    .switch--material__touch {
      position: absolute;
      top: -10px;
      bottom: -10px;
      left: -15px;
      right: -15px;
    }
    /*~
      name: Range
      category: Range
      elements: ons-range
      markup: |
        <div class="range">
          <input type="range" class="range__input">
          <input type="range" class="range__focus-ring">
        </div>
    
        <div class="range range--disabled">
          <input type="range" class="range__input" disabled>
          <input type="range" class="range__focus-ring" disabled>
        </div>
    */
    .range {
      display: inline-block;
      position: relative;
      width: 100px;
      height: 30px;
      margin: 0;
      padding: 0;
      background-image: linear-gradient(#a4aab3, #a4aab3);
      background-position: left center;
      background-size: 100% 2px;
      background-repeat: no-repeat;
      background-color: transparent;
    }
    .range__input {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      background-image: linear-gradient(${primaryThemeColor}, ${primaryThemeColor});
      background-position: left center;
      background-size: 0% 2px;
      background-repeat: no-repeat;
      height: 30px;
      position: relative;
      z-index: 1;
      width: 100%;
    }
    .range__input::-moz-range-track {
      position: relative;
      border: none;
      background: none;
      box-shadow: none;
      top: 0;
      margin: 0;
      padding: 0;
    }
    .range__input::-ms-track {
      position: relative;
      border: none;
      background-color: #a4aab3;
      height: 0;
      border-radius: 50%;
    }
    .range__input::-webkit-slider-thumb {
      cursor: pointer;
      position: relative;
      height: 28px;
      width: 28px;
      background-color: #fff;
      border: none;
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, .25), 0 3px 2px rgba(0, 0, 0, .25);
      border-radius: 50%;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-appearance: none;
              appearance: none;
      top: 0;
      z-index: 1;
    }
    .range__input::-moz-range-thumb {
      cursor: pointer;
      position: relative;
      height: 28px;
      width: 28px;
      background-color: #fff;
      border: none;
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, .25), 0 3px 2px rgba(0, 0, 0, .25);
      border-radius: 50%;
      margin: 0;
      padding: 0;
    }
    .range__input::-ms-thumb {
      cursor: pointer;
      position: relative;
      height: 28px;
      width: 28px;
      background-color: #fff;
      border: none;
      box-shadow: 0 0 1px 0 rgba(0, 0, 0, .25), 0 3px 2px rgba(0, 0, 0, .25);
      border-radius: 50%;
      margin: 0;
      padding: 0;
      top: 0;
    }
    .range__input::-ms-fill-lower {
      height: 2px;
      background-color: ${primaryThemeColor};
    }
    .range__input::-ms-tooltip {
      display: none;
    }
    .range__input:disabled {
      opacity: 1;
      pointer-events: none;
    }
    .range__focus-ring {
      pointer-events: none;
      top: 0;
      left: 0;
      display: none;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      background: none;
      height: 30px;
      position: absolute;
      z-index: 0;
      width: 100%;
    }
    .range--disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
      pointer-events: none;
    }
    /*~
      name: Material Range
      category: Range
      elements: ons-range
      markup: |
        <div class="range range--material">
          <input type="range" class="range__input range--material__input" min="0" max="100">
          <!-- <input type="range" class="range__focus-ring range--material__focus-ring"> -->
        </div>
    
        <div class="range range--material range--disabled">
          <input type="range" class="range__input range--material__input" disabled>
          <!-- <input type="range" class="range__focus-ring range--material__focus-ring" disabled> -->
        </div>
    */
    .range--material {
      position: relative;
      background-image: linear-gradient(#bdbdbd, #bdbdbd);
    }
    .range--material__input {
      background-image: linear-gradient(#31313a, #31313a);
      background-position: center left;
      background-size: 0% 2px;
    }
    .range--material__focus-ring {
      display: block;
    }
    .range--material__focus-ring::-webkit-slider-thumb {
      -webkit-appearance: none;
              appearance: none;
      width: 14px;
      height: 14px;
      border: none;
      box-shadow: 0 0 0 9px #31313a;
      background-color: #31313a;
      border-radius: 50%;
      opacity: 0;
      transition: opacity 0.25s ease-out, -webkit-transform 0.25s ease-out;
      transition: opacity 0.25s ease-out, transform 0.25s ease-out;
      transition: opacity 0.25s ease-out, transform 0.25s ease-out, -webkit-transform 0.25s ease-out;
    }
    .range--material__input.range__input--active + .range--material__focus-ring::-webkit-slider-thumb {
      opacity: 0.2;
      -webkit-transform: scale(1.5, 1.5, 1.5);
              transform: scale(1.5, 1.5, 1.5);
    }
    .range--material__input::-webkit-slider-thumb {
      position: relative;
      box-sizing: border-box;
      border: none;
      background-color: transparent;
      width: 14px;
      height: 32px;
      border-radius: 0;
      box-shadow: none;
      background-image: radial-gradient(circle farthest-corner, #31313a 0%, #31313a 6.6px, transparent 7px);
      transition: -webkit-transform 0.1s linear;
      transition: transform 0.1s linear;
      transition: transform 0.1s linear, -webkit-transform 0.1s linear;
      overflow: visible;
    }
    .range--material__input[_zero]::-webkit-slider-thumb {
      background-image: radial-gradient(circle farthest-corner, #f2f2f2 0%, #f2f2f2 4px, #bdbdbd 4px, #bdbdbd 6.4px, transparent 7px);
    }
    .range--material__input[_zero] + .range--material__focus-ring::-webkit-slider-thumb {
      box-shadow: 0 0 0 9px #bdbdbd;
    }
    .range--material__input::-moz-range-track {
      background: none;
    }
    .range--material__input::-moz-range-thumb,
    .range--material__input:focus::-moz-range-thumb {
      box-sizing: border-box;
      border: none;
      width: 14px;
      height: 32px;
      border-radius: 0;
      background-color: transparent;
      background-image: -moz-radial-gradient(circle farthest-corner, #31313a 0%, #31313a 6.6px, transparent 7px); /* stylelint-disable-line */
      box-shadow: none;
    }
    .range--material__input:active::-webkit-slider-thumb,
    .range--material__input.range__input--active::-webkit-slider-thumb { /* NOTICE: ":active" does not work on Android Chrome. */
      -webkit-transform: scale(1.5);
              transform: scale(1.5);
      transition: -webkit-transform 0.1s linear;
      transition: transform 0.1s linear;
      transition: transform 0.1s linear, -webkit-transform 0.1s linear;
    }
    /* stylelint-disable */
    .range--disabled.range--material { /* stylelint-enable */
      opacity: 1;
    }
    /* stylelint-disable */
    .range--disabled > .range--material__input { /* stylelint-enable */
      background-image: none;
    }
    .range--material__input:disabled::-webkit-slider-thumb {
      background-image: radial-gradient(circle farthest-corner, #b0b0b0 0%, #b0b0b0 4px, #eeeeee 4.4px, #eeeeee 7.6px, transparent 7.6px);
      transition: none;
    }
    .range--material__input:disabled::-moz-range-thumb {
      background-image: -moz-radial-gradient(circle farthest-corner, #b0b0b0 0%, #b0b0b0 4px, #eeeeee 4.4px, #eeeeee 7.6px, transparent 7.6px); /* stylelint-disable-line */
      transition: none;
    }
    /*~
      name: Notification
      category: Notification
      markup: |
        <span class="notification">1</span>
        <span class="notification">10</span>
        <span class="notification">999</span>
    */
    .notification {
      position: relative;
      display: inline-block;
      vertical-align: top;
      font: inherit;
      border: none;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-decoration: none;
      margin: 0;
      padding: 0 4px;
      width: auto;
      height: 19px;
      border-radius: 19px;
      background-color: ${primaryThemeColor};
      color: white;
      text-align: center;
      font-size: 16px;
      min-width: 19px;
      line-height: 19px;
      font-weight: 400;
    }
    .notification:empty {
      display: none;
    }
    /*~
      name: Material Notification
      category: Notification
      markup: |
        <span class="notification notification--material">1</span>
        <span class="notification notification--material">10</span>
        <span class="notification notification--material">999</span>
    */
    .notification--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      background-color: ${primaryThemeColor};
      font-size: 16px;
      font-weight: 500;
      color: white;
    }
    /*~
      name: Toolbar
      category: Toolbar
      elements: ons-toolbar
      markup: |
        <div class="toolbar">
          <div class="toolbar__center">Navigation Bar</div>
        </div>
    */
    .toolbar {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      box-sizing: border-box;
      background-clip: padding-box;
      white-space: nowrap;
      overflow: hidden;
      word-spacing: 0;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      z-index: 2;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
              align-items: stretch;
      -webkit-flex-wrap: nowrap;
              flex-wrap: nowrap;
      height: 44px;
      padding-left: 0;
      padding-right: 0;
      background: ${primaryThemeColor};
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      box-shadow: none;
      font-weight: 400;
      width: 100%;
      white-space: nowrap;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .toolbar {
        background-image: linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%);
      }
    }
    .toolbar__bg {
      background: ${primaryThemeColor};
    }
    .toolbar__item {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      height: 44px;
      overflow: visible;
      display: block;
      vertical-align: middle;
    }
    .toolbar__left {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      max-width: 50%;
      width: 27%;
      text-align: left;
      line-height: 44px;
    }
    .toolbar__right {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      max-width: 50%;
      width: 27%;
      text-align: right;
      line-height: 44px;
    }
    .toolbar__center {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      width: 46%;
      text-align: center;
      line-height: 44px;
      font-size: 17px;
      font-weight: 500;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
    }
    .toolbar__title {
      line-height: 44px;
      font-size: 17px;
      font-weight: 500;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      margin: 0;
      padding: 0;
      overflow: visible;
    }
    .toolbar__center:first-child:last-child {
      width: 100%;
    }
    /*~
      name: Toolbar Item
      category: Toolbar
      elements: ons-toolbar ons-toolbar-button
      markup: |
        <div class="toolbar">
          <div class="toolbar__left">
            <span class="toolbar-button">
              <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
            </span>
          </div>
    
          <div class="toolbar__center">
            Navigation Bar
          </div>
    
          <div class="toolbar__right">
            <span class="toolbar-button">Label</span>
          </div>
        </div>
    */
    /*~
      name: Toolbar with Outline Button
      category: Toolbar
      elements: ons-toolbar ons-toolbar-button
      markup: |
        <!-- Prerequisite=This example use ionicons(http://ionicons.com) to display icons. -->
        <div class="toolbar">
          <div class="toolbar__left">
            <span class="toolbar-button toolbar-button--outline">
              <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
            </span>
          </div>
    
          <div class="toolbar__center">
            Title
          </div>
    
          <div class="toolbar__right">
            <span class="toolbar-button toolbar-button--outline">Button</span>
          </div>
        </div>
    */
    /*~
      name: Bottom Bar
      category: Toolbar
      elements: ons-bottom-toolbar
      markup: |
        <div class="bottom-bar">
          <div class="bottom-bar__line-height" style="text-align:center">Bottom Toolbar</div>
        </div>
    */
    .bottom-bar {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      box-sizing: border-box;
      background-clip: padding-box;
      white-space: nowrap;
      overflow: hidden;
      word-spacing: 0;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      z-index: 2;
      display: block;
      height: 44px;
      padding-left: 0;
      padding-right: 0;
      background: ${primaryThemeColor};
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      box-shadow: none;
      font-weight: 400;
      border-bottom: none;
      border-top: 1px solid #b2b2b2;
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      border-top: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: top;
      background-image: linear-gradient(180deg, #b2b2b2, #b2b2b2 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .bottom-bar {
        background-image: linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%);
      }
    }
    .bottom-bar__line-height {
      line-height: 44px;
      padding-bottom: 0;
      padding-top: 0;
    }
    .bottom-bar--aligned {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: nowrap;
              flex-wrap: nowrap;
      line-height: 44px;
    }
    .bottom-bar--transparent {
      background-color: transparent;
      background-image: none;
      border: none;
    }
    /*~
      name: Toolbar with Segment
      category: Toolbar
      elements: ons-toolbar
      markup: |
        <div class="toolbar">
          <div class="toolbar__center">
            <div class="segment" style="width:200px;margin:7px 50px;">
              <div class="segment__item">
                <input type="radio" class="segment__input" name="navi-segment-a" checked>
                <div class="segment__button">One</div>
              </div>
    
              <div class="segment__item">
                <input type="radio" class="segment__input" name="navi-segment-a">
                <div class="segment__button">Two</div>
              </div>
            </div>
          </div>
        </div>
    */
    /*~
      name: Material Toolbar
      category: Toolbar
      elements: ons-toolbar
      markup: |
        <div class="toolbar toolbar--material">
          <div class="toolbar__center toolbar--material__center">
            Title
          </div>
        </div>
    */
    .toolbar--material {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: nowrap;
              flex-wrap: nowrap;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
              justify-content: space-between;
      height: 56px;
      border-bottom: 0;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
      padding: 0;
      background-color: ${primaryThemeColor};
      background-size: 0;
    }
    /*~
      name: No Shadow Toolbar
      category: Toolbar
      elements: ons-toolbar
      markup: |
        <div class="toolbar toolbar--noshadow">
          <div class="toolbar__left">
            <span class="toolbar-button">
              <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
            </span>
          </div>
          <div class="toolbar__center">
            Navigation Bar
          </div>
          <div class="toolbar__right">
            <span class="toolbar-button">Label</span>
          </div>
        </div>
    */
    .toolbar--noshadow {
      box-shadow: none;
      background-image: none;
      border-bottom: none;
    }
    .toolbar--material__left, .toolbar--material__right {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-size: 20px;
      font-weight: 500;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      height: 56px;
      min-width: 72px;
      width: auto;
      line-height: 56px;
    }
    .toolbar--material__center {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-size: 20px;
      font-weight: 500;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      height: 56px;
      width: auto;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
              flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      line-height: 56px;
    }
    .toolbar--material__center:first-child {
      margin-left: 16px;
    }
    .toolbar--material__center:last-child {
      margin-right: 16px;
    }
    .toolbar--material__left:empty, .toolbar--material__right:empty {
      min-width: 16px;
    }
    /*~
      name: Material Toolbar with Icons
      category: Toolbar
      elements: ons-toolbar
      markup: |
        <div class="toolbar toolbar--material">
          <div class="toolbar__left toolbar--material__left">
            <span class="toolbar-button toolbar-button--material">
              <i class="zmdi zmdi-menu"></i>
            </span>
          </div>
          <div class="toolbar__center toolbar--material__center">
            Title
          </div>
          <div class="toolbar__right toolbar--material__right">
            <span class="toolbar-button toolbar-button--material">
              <i class="zmdi zmdi-search"></i>
            </span>
            <span class="toolbar-button toolbar-button--material">
              <i class="zmdi zmdi-favorite"></i>
            </span>
            <span class="toolbar-button toolbar-button--material">
              <i class="zmdi zmdi-more-vert"></i>
            </span>
          </div>
        </div>
    */
    /*~
      name: Transparent Toolbar
      category: Toolbar
      elements: ons-toolbar
      markup: |
        <div class="toolbar toolbar--transparent">
          <div class="toolbar__left">
            <span class="toolbar-button">
              <i class="ion-navicon" style="font-size:32px; vertical-align:-6px;"></i>
            </span>
          </div>
          <div class="toolbar__center">
            Navigation Bar
          </div>
          <div class="toolbar__right">
            <span class="toolbar-button">Label</span>
          </div>
        </div>
    */
    .toolbar--transparent {
      background-color: transparent;
      box-shadow: none;
      background-image: none;
      border-bottom: none;
    }
    /*~
      name: Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button">Button</button>
        <button class="button" disabled>Button</button>
    */
    .button {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
    }
    .button::-moz-focus-inner {
      outline: 0;
    }
    .button:hover {
      transition: none;
    }
    .button:active {
      background-color: ${primaryThemeColor};
      transition: none;
      opacity: 0.2;
    }
    .button:focus {
      outline: 0;
    }
    .button:disabled, .button[disabled] {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    /*~
      name: Outline Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button button--outline">Button</button>
        <button class="button button--outline" disabled>Button</button>
    */
    .button--outline {
      background-color: transparent;
      border: 1px solid ${primaryThemeColor};
      color: ${primaryThemeColor};
    }
    .button--outline:active {
      background-color: rgb(179, 208, 218);
      border: 1px solid ${primaryThemeColor};
      color: ${primaryThemeColor};
      opacity: 1;
    }
    .button--outline:hover {
      border: 1px solid ${primaryThemeColor};
      transition: 0;
    }
    /*~
      name: Light Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button button--light">Button</button>
        <button class="button button--light" disabled>Button</button>
    */
    .button--light {
      background-color: transparent;
      color: #000000;
      color: rgba(0, 0, 0, 0.4);
      border: 1px solid #000000;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .button--light:active {
      background-color: #000000;
      background-color: rgba(0, 0, 0, 0.05);
      color: #000000;
      color: rgba(0, 0, 0, 0.4);
      border: 1px solid #000000;
      border: 1px solid rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
    /*~
      name: Quiet Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button--quiet">Button</button>
        <button class="button--quiet" disabled>Button</button>
    */
    .button--quiet {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
      background: transparent;
      border: 1px solid transparent;
      box-shadow: none;
      background: transparent;
      color: ${primaryThemeColor};
      border: none;
    }
    .button--quiet:disabled,
    .button--quiet[disabled] {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
      border: none;
    }
    .button--quiet:hover {
      transition: none;
    }
    .button--quiet:focus {
      outline: 0;
    }
    .button--quiet:active {
      background-color: transparent;
      border: none;
      transition: none;
      opacity: 0.2;
      color: ${primaryThemeColor};
    }
    /*~
      name: Call To Action Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button--cta">Button</button>
        <button class="button--cta" disabled>Button</button>
    */
    .button--cta {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
      border: none;
      background-color: ${primaryThemeColor};
      color: white;
    }
    .button--cta:hover {
      transition: none;
    }
    .button--cta:focus {
      outline: 0;
    }
    .button--cta:active {
      color: white;
      background-color: ${primaryThemeColor};
      transition: none;
      opacity: 0.2;
    }
    .button--cta:disabled,
    .button--cta[disabled] {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    /*
      name: Large Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button button--large" style="width: 95%; margin: 0 auto;">Button</button>
    */
    .button--large {
      font-size: 17px;
      font-weight: 500;
      line-height: 36px;
      padding: 4px 12px;
      display: block;
      width: 100%;
      text-align: center;
    }
    .button--large:active {
      background-color: ${primaryThemeColor};
      transition: none;
      opacity: 0.2;
      transition: none;
    }
    .button--large:disabled,
    .button--large[disabled] {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .button--large:hover {
      transition: none;
    }
    .button--large:focus {
      outline: 0;
    }
    /*~
      name: Large Quiet Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button--large--quiet" style="width: 95%; margin: 0 auto;">Button</button>
    */
    .button--large--quiet { /* stylelint-disable-line */
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
      font-size: 17px;
      font-weight: 500;
      line-height: 36px;
      padding: 4px 12px;
      display: block;
      width: 100%;
      background: transparent;
      border: 1px solid transparent;
      box-shadow: none;
      color: ${primaryThemeColor};
      text-align: center;
    }
    .button--large--quiet:active { /* stylelint-disable-line */
      transition: none;
      opacity: 0.2;
      color: ${primaryThemeColor};
      background: transparent;
      border: 1px solid transparent;
      box-shadow: none;
    }
    .button--large--quiet:disabled, .button--large--quiet[disabled] { /* stylelint-disable-line */
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .button--large--quiet:hover { /* stylelint-disable-line */
      transition: none;
    }
    .button--large--quiet:focus { /* stylelint-disable-line */
      outline: 0;
    }
    /*~
      name: Large Call To Action Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button--large--cta" style="width: 95%; margin: 0 auto;">Button</button>
    */
    .button--large--cta { /* stylelint-disable-line */
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
      border: none;
      background-color: ${primaryThemeColor};
      color: white;
      font-size: 17px;
      font-weight: 500;
      line-height: 36px;
      padding: 4px 12px;
      width: 100%;
      text-align: center;
      display: block;
    }
    .button--large--cta:hover { /* stylelint-disable-line */
      transition: none;
    }
    .button--large--cta:focus { /* stylelint-disable-line */
      outline: 0;
    }
    .button--large--cta:active { /* stylelint-disable-line */
      color: white;
      background-color: ${primaryThemeColor};
      transition: none;
      opacity: 0.2;
    }
    .button--large--cta:disabled, .button--large--cta[disabled] { /* stylelint-disable-line */
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    /*~
      name: Material Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button button--material">BUTTON</button>
        <button class="button button--material" disabled>DISABLED</button>
    */
    .button--material {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
      box-shadow:
          0 2px 2px 0 rgba(0, 0, 0, .14),
          0 1px 5px 0 rgba(0, 0, 0, .12),
          0 3px 1px -2px rgba(0, 0, 0, .2);
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      min-height: 36px;
      line-height: 36px;
      padding: 0 16px;
      text-align: center;
      font-size: 14px;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
      text-transform: uppercase;
      background-color: ${primaryThemeColor};
      color: #ffffff;
      font-weight: 500;
      transition: background-color 0.25s linear;
      opacity: 1;
      transition: all 0.25s linear;
    }
    .button--material:hover {
      transition: all 0.25s linear;
    }
    .button--material:active {
      box-shadow:
          0 6px 10px 0 rgba(0, 0, 0, .14),
          0 1px 18px 0 rgba(0, 0, 0, .12),
          0 3px 5px -1px rgba(0, 0, 0, .4);
      background-color: ${primaryThemeColor};
      opacity: 0.9;
      transition: all 0.25s linear;
    }
    .button--material:focus {
      outline: 0;
    }
    .button--material:disabled,
    .button--material[disabled] {
      transition: none;
      box-shadow: none;
      background-color: #4f4f4f;
      background-color: rgba(79, 79, 79, 0.26);
      color: #000000;
      color: rgba(0, 0, 0, 0.26);
      opacity: 1;
    }
    /*~
      name: Material Flat Button
      category: Button
      elements: ons-button
      markup: |
        <button class="button button--material--flat">BUTTON</button>
        <button class="button button--material--flat" disabled>DISABLED</button>
    */
    .button--material--flat { /* stylelint-disable-line */
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      height: auto;
      text-decoration: none;
      padding: 4px 10px;
      font-size: 17px;
      line-height: 32px;
      letter-spacing: 0;
      color: white;
      vertical-align: middle;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 3px;
      transition: none;
      box-shadow:
          0 2px 2px 0 rgba(0, 0, 0, .14),
          0 1px 5px 0 rgba(0, 0, 0, .12),
          0 3px 1px -2px rgba(0, 0, 0, .2);
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      min-height: 36px;
      line-height: 36px;
      padding: 0 16px;
      text-align: center;
      font-size: 14px;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
      text-transform: uppercase;
      background-color: ${primaryThemeColor};
      color: #ffffff;
      font-weight: 500;
      transition: background-color 0.25s linear;
      box-shadow: none;
      background-color: transparent;
      color: ${primaryThemeColor};
      transition: all 0.25s linear;
    }
    .button--material--flat:hover { /* stylelint-disable-line */
      transition: all 0.25s linear;
    }
    .button--material--flat:focus { /* stylelint-disable-line */
      box-shadow: none;
      background-color: transparent;
      color: ${primaryThemeColor};
      outline: 0;
      opacity: 1;
      border: none;
    }
    .button--material--flat:active { /* stylelint-disable-line */
      box-shadow: none;
      outline: 0;
      opacity: 1;
      border: none;
      background-color: #999999;
      background-color: rgba(153, 153, 153, 0.2);
      color: ${primaryThemeColor};
      transition: all 0.25s linear;
    }
    .button--material--flat:disabled, .button--material--flat[disabled] {/* stylelint-disable-line */
      transition: none;
      opacity: 1;
      box-shadow: none;
      background-color: transparent;
      color: #000000;
      color: rgba(0, 0, 0, 0.26);
    }
    /*~
      name: Button Bar
      category: Segment
      markup: |
        <div class="button-bar" style="width:280px;">
          <div class="button-bar__item">
            <button class="button-bar__button">One</button>
          </div>
          <div class="button-bar__item">
            <button class="button-bar__button">Two</button>
          </div>
          <div class="button-bar__item">
            <button class="button-bar__button">Three</button>
          </div>
        </div>
    */
    .button-bar {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: inline-flex;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
              align-items: stretch;
      -webkit-align-content: stretch;
              align-content: stretch;
      -webkit-flex-wrap: nowrap;
              flex-wrap: nowrap;
      margin: 0;
      padding: 0;
      border: none;
    }
    .button-bar__item {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border-radius: 0;
      width: 100%;
      padding: 0;
      margin: 0;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }
    .button-bar__button {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border-radius: 0;
      background-color: transparent;
      color: ${primaryThemeColor};
      border: 1px solid ${primaryThemeColor};
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-right-width: 1px;
      border-left-width: 0;
      font-weight: 400;
      padding: 0;
      font-size: 13px;
      height: 27px;
      line-height: 27px;
      width: 100%;
      transition: background-color 0.2s linear, color 0.2s linear;
      box-sizing: border-box;
    }
    .button-bar__button:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .button-bar__button:hover {
      transition: none;
    }
    .button-bar__button:focus {
      outline: 0;
    }
    :checked + .button-bar__button {
      background-color: ${primaryThemeColor};
      color: #fff;
      transition: none;
    }
    .button-bar__button:active,
    :active + .button-bar__button {
      background-color: ${primaryThemeColor};
      background-color: rgba(0, 98, 130, .68);
      border: 0 solid ${primaryThemeColor};
      border-top: 1px solid ${primaryThemeColor};
      border-bottom: 1px solid ${primaryThemeColor};
      border-right: 1px solid ${primaryThemeColor};
      font-size: 13px;
      width: 100%;
      transition: none;
    }
    .button-bar__item:first-child > .button-bar__button {
      border-left-width: 1px;
      border-radius: 4px 0 0 4px;
    }
    .button-bar__item:last-child > .button-bar__button {
      border-right-width: 1px;
      border-radius: 0 4px 4px 0;
    }
    /*~
      name: Segment
      category: Segment
      markup: |
        <div class="segment" style="width: 280px; margin: 0 auto;">
          <div class="segment__item">
            <input type="radio" class="segment__input" name="segment-a" checked>
            <div class="segment__button">One</div>
          </div>
          <div class="segment__item">
            <input type="radio" class="segment__input" name="segment-a">
            <div class="segment__button">Two</div>
          </div>
          <div class="segment__item">
            <input type="radio" class="segment__input" name="segment-a">
            <div class="segment__button">Three</div>
          </div>
        </div>
    */
    .segment {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: inline-flex;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
              align-items: stretch;
      -webkit-align-content: stretch;
              align-content: stretch;
      -webkit-flex-wrap: nowrap;
              flex-wrap: nowrap;
      margin: 0;
      padding: 0;
      border: none;
    }
    .segment__item {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border-radius: 0;
      width: 100%;
      padding: 0;
      margin: 0;
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: block;
      background-color: transparent;
      border: none;
    }
    .segment__input {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    .segment__button {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border-radius: 0;
      background-color: transparent;
      color: ${primaryThemeColor};
      border: 1px solid ${primaryThemeColor};
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-right-width: 1px;
      border-left-width: 0;
      font-weight: 400;
      padding: 0;
      font-size: 13px;
      height: 29px;
      line-height: 29px;
      width: 100%;
      transition: background-color 0.2s linear, color 0.2s linear;
      box-sizing: border-box;
      text-align: center;
    }
    .segment__item:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .segment__button:hover {
      transition: none;
    }
    .segment__button:focus {
      outline: 0;
    }
    :active + .segment__button {
      background-color: rgb(179, 208, 218);
      border: 0 solid ${primaryThemeColor};
      border-top: 1px solid ${primaryThemeColor};
      border-bottom: 1px solid ${primaryThemeColor};
      border-right: 1px solid ${primaryThemeColor};
      font-size: 13px;
      width: 100%;
      transition: none;
    }
    :checked + .segment__button {
      background-color: ${primaryThemeColor};
      color: #fff;
      transition: none;
    }
    .segment__item:first-child > .segment__button {
      border-left-width: 1px;
      border-radius: 4px 0 0 4px;
    }
    .segment__item:last-child > .segment__button {
      border-right-width: 1px;
      border-radius: 0 4px 4px 0;
    }
    /*~
      name: Material Segment
      category: Segment
      markup: |
        <div class="segment segment--material" style="width: 280px; margin: 0 auto;">
          <div class="segment__item segment--material__item">
            <input type="radio" class="segment__input segment--material__input" name="segment-b" checked>
            <div class="segment__button segment--material__button">One</div>
          </div>
          <div class="segment__item segment--material__item">
            <input type="radio" class="segment__input segment--material__input" name="segment-b">
            <div class="segment__button segment--material__button">Two</div>
          </div>
          <div class="segment__item segment--material__item">
            <input type="radio" class="segment__input segment--material__input" name="segment-b">
            <div class="segment__button segment--material__button">Three</div>
          </div>
        </div>
    */
    .segment--material {
      border-radius: 2px;
      overflow: hidden;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .24);
    }
    .segment--material__button {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-size: 14px;
      height: 32px;
      line-height: 32px;
      border-width: 0;
      color: #000000;
      color: rgba(0, 0, 0, 0.38);
      border-radius: 0;
      background-color: #fafafa;
    }
    :active + .segment--material__button {
      background-color: #fafafa;
      border-radius: 0;
      border-width: 0;
      font-size: 14px;
      transition: none;
      color: #000000;
      color: rgba(0, 0, 0, 0.38);
    }
    :checked + .segment--material__button {
      background-color: #c8c8c8;
      color: #353535;
      border-radius: 0;
      border-width: 0;
    }
    .segment--material__item:first-child > .segment--material__button,
    .segment--material__item:last-child > .segment--material__button {
      border-radius: 0;
      border-width: 0;
    }
    :root { /* Text color */ /* Text color active */
    }
    /*~
      name: Icon Tabbar
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <!-- Prerequisite=This example use ionicons(http://ionicons.com) to display icons. -->
        <div class="tabbar">
          <label class="tabbar__item">
            <input type="radio" name="tabbar-a" checked="checked">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-stop"></i>
              <div class="tabbar__label">One</div>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="tabbar-a">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-record"></i>
              <div class="tabbar__label">Two</div>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="tabbar-a">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-star"></i>
              <div class="tabbar__label">Three</div>
            </button>
          </label>
        </div>
    */
    /*~
      name: Tabbar
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <div class="tabbar">
          <label class="tabbar__item">
            <input type="radio" name="tabbar-c" checked="checked">
            <button class="tabbar__button">
              <div class="tabbar__label">One</div>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="tabbar-c">
            <button class="tabbar__button">
              <div class="tabbar__label">Two</div>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="tabbar-c">
            <button class="tabbar__button">
              <div class="tabbar__label">Three</div>
            </button>
          </label>
        </div>
    */
    .tabbar {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      white-space: nowrap;
      margin: 0;
      padding: 0;
      height: 49px;
      background-color: #fafafa;
      border-top: 1px solid #ccc;
      width: 100%;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .tabbar {
        border-top: none;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top;
        background-image: linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%);
      }
    }
    .tabbar__item {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
              flex-grow: 1;
      -webkit-flex-basis: 0;
              flex-basis: 0;
      width: auto;
      border-radius: 0;
    }
    .tabbar__item > input {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    .tabbar__button {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      display: inline-block;
      text-decoration: none;
      padding: 0;
      height: 49px;
      letter-spacing: 0;
      color: #999;
      vertical-align: top;
      background-color: transparent;
      border-top: none;
      width: 100%;
      font-weight: 400;
      line-height: 49px;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .tabbar__button {
        border-top: none;
      }
    }
    .tabbar__icon {
      font-size: 24px;
      padding: 0;
      margin: 0;
      line-height: 26px;
      display: block !important; /* stylelint-disable-line declaration-no-important */
      height: 28px;
    }
    .tabbar__label {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: inline-block;
    }
    .tabbar__badge.notification {
      vertical-align: text-bottom;
      top: -1px;
      margin-left: 5px;
      z-index: 10;
      font-size: 12px;
      height: 16px;
      min-width: 16px;
      line-height: 16px;
      border-radius: 8px;
    }
    .tabbar__icon ~ .tabbar__badge.notification {
      position: absolute;
      top: 5px;
      margin-left: 0;
    }
    .tabbar__icon + .tabbar__label {
      display: block;
      font-size: 10px;
      line-height: 1;
      margin: 0;
      font-weight: 400;
    }
    .tabbar__label:first-child {
      font-size: 16px;
      line-height: 49px;
      margin: 0;
      padding: 0;
    }
    :checked + .tabbar__button {
      color: ${primaryThemeColor};
      background-color: transparent;
      box-shadow: none;
      border-top: none;
    }
    .tabbar__button:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .tabbar__button:focus {
      z-index: 1;
      border-top: none;
      box-shadow: none;
      outline: 0;
    }
    .tabbar__content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 49px;
      z-index: 0;
    }
    .tabbar--autogrow .tabbar__item {
      -webkit-flex-basis: auto;
              flex-basis: auto;
    }
    /*~
      name: Icon Only Tabbar
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <!-- Prerequisite=This example use ionicons(http://ionicons.com) to display icons. -->
        <div class="tabbar">
          <label class="tabbar__item">
            <input type="radio" name="tabbar-b" checked="checked">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-stop"></i>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="tabbar-b">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-record"></i>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="tabbar-b">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-star"></i>
            </button>
          </label>
    
        </div>
    */
    /*~
      name: Top Tabbar
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <div class="tabbar tabbar--top">
          <label class="tabbar__item">
            <input type="radio" name="top-tabbar-a" checked="checked">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-stop"></i>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="top-tabbar-a">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-record"></i>
            </button>
          </label>
    
          <label class="tabbar__item">
            <input type="radio" name="top-tabbar-a">
            <button class="tabbar__button">
              <i class="tabbar__icon ion-star"></i>
            </button>
          </label>
        </div>
    */
    .tabbar--top {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: auto;
      border-top: none;
      border-bottom: 1px solid #ccc;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .tabbar--top {
        border-bottom: none;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: bottom;
        background-image: linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%);
      }
    }
    .tabbar--top__content {
      top: 49px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
    /*~
      name: Bordered Top Tabbar
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <div class="tabbar tabbar--top tabbar--top-border">
          <label class="tabbar__item tabbar--top-border__item">
            <input type="radio" name="top-tabbar-b" checked="checked">
            <button class="tabbar__button tabbar--top-border__button">
              Home
            </button>
          </label>
    
          <label class="tabbar__item tabbar--top-border__item">
            <input type="radio" name="top-tabbar-b">
            <button class="tabbar__button tabbar--top-border__button">
              Comments
            </button>
          </label>
    
          <label class="tabbar__item tabbar--top-border__item">
            <input type="radio" name="top-tabbar-b">
            <button class="tabbar__button tabbar--top-border__button">
              Activity
            </button>
          </label>
        </div>
    */
    /*~
      name: Material Tabbar
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <div class="tabbar tabbar--top tabbar--material">
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-a" checked="checked">
            <button class="tabbar__button tabbar--material__button">
              Music
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-a">
            <button class="tabbar__button tabbar--material__button">
              Movies
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-a">
            <button class="tabbar__button tabbar--material__button">
              Books
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-a">
            <button class="tabbar__button tabbar--material__button">
              Games
            </button>
          </label>
    
        </div>
    */
    .tabbar--top-border__button {
      background-color: transparent;
      border-bottom: 4px solid transparent;
    }
    :checked + .tabbar--top-border__button {
      background-color: transparent;
      border-bottom: 4px solid ${primaryThemeColor};
    }
    .tabbar__border {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 4px;
      background-color: ${primaryThemeColor};
    }
    .tabbar--material {
      background: none;
      background-color: #ffffff;
      border-bottom-width: 0;
      box-shadow:
        0 4px 2px -2px rgba(0, 0, 0, .14),
        0 3px 5px -2px rgba(0, 0, 0, .12),
        0 5px 1px -4px rgba(0, 0, 0, .2);
    }
    .tabbar--material__button {
      background-color: transparent;
      color: #31313a;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 500;
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
    }
    .tabbar--material__button:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      bottom: 0;
      position: absolute;
      margin-top: -2px;
      background-color: #31313a;
    }
    :checked + .tabbar--material__button:after {
      width: 100%;
      transition: width 0.2s ease-in-out;
    }
    :checked + .tabbar--material__button {
      background-color: transparent;
      color: #31313a;
    }
    .tabbar--material__item:not([ripple]):active {
      background-color: #31313a;
      background-color: rgba(49, 49, 58, .1);
    }
    .tabbar--material__border {
      height: 2px;
      background-color: #31313a;
    }
    /*~
      name: Material Tabbar (Icon only)
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <div class="tabbar tabbar--top tabbar--material">
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-b" checked="checked">
            <button class="tabbar__button tabbar--material__button">
              <i class="tabbar__icon tabbar--material__icon zmdi zmdi-phone"></i>
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-b">
            <button class="tabbar__button tabbar--material__button">
              <i class="tabbar__icon tabbar--material__icon zmdi zmdi-favorite"></i>
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-b">
            <button class="tabbar__button tabbar--material__button">
              <i class="tabbar__icon tabbar--material__icon zmdi zmdi-pin-account"></i>
            </button>
          </label>
        </div>
    */
    .tabbar--material__icon {
      font-size: 22px !important; /* stylelint-disable-line declaration-no-important */
      line-height: 36px;
    }
    /*~
      name: Material Tabbar (Icon and Label)
      category: Tabbar
      elements: ons-tabbar ons-tab
      markup: |
        <div class="tabbar tabbar--top tabbar--material">
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-c" checked="checked">
            <button class="tabbar__button tabbar--material__button">
              <i class="tabbar__icon tabbar--material__icon zmdi zmdi-phone"></i>
              <div class="tabbar__label tabbar--material__label">Call</div>
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-c">
            <button class="tabbar__button tabbar--material__button">
              <i class="tabbar__icon tabbar--material__icon zmdi zmdi-favorite"></i>
              <div class="tabbar__label tabbar--material__label">Favorites</div>
            </button>
          </label>
    
          <label class="tabbar__item tabbar--material__item">
            <input type="radio" name="tabbar-material-c">
            <button class="tabbar__button tabbar--material__button">
              <i class="tabbar__icon tabbar--material__icon zmdi zmdi-delete"></i>
              <div class="tabbar__label tabbar--material__label">Delete</div>
            </button>
          </label>
        </div>
    */
    .tabbar--material__label {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
    }
    .tabbar--material__label:first-child {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      letter-spacing: 0.015em;
      font-weight: 500;
      font-size: 14px;
    }
    .tabbar--material__icon + .tabbar--material__label {
      font-size: 10px;
    }
    /*~
      name: Toolbar Button
      category: Toolbar Button
      elements: ons-toolbar-button
      markup: |
        <!-- Prerequisite=This example use font-awesome(http://fortawesome.github.io/Font-Awesome/) to display icons. -->
        <button class="toolbar-button">
          <i class="fa fa-bell" style="font-size:17px"></i>
        </button>
    
        <button class="toolbar-button">
          Label
        </button>
    
        <button class="toolbar-button toolbar-button--outline">
          <i class="fa fa-bell" style="font-size:17px"></i> Label
        </button>
    */
    .toolbar-button {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      padding: 4px 10px;
      letter-spacing: 0;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      background-color: #000000;
      background-color: rgba(0, 0, 0, 0);
      border-radius: 2px;
      border: 1px solid transparent;
      font-weight: 400;
      font-size: 17px;
      transition: none;
    }
    .toolbar-button:active {
      background-color: #000000;
      background-color: rgba(0, 0, 0, 0);
      transition: none;
      opacity: 0.2;
    }
    .toolbar-button:disabled,
    .toolbar-button[disabled] {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .toolbar-button:focus {
      outline: 0;
      transition: none;
    }
    .toolbar-button:hover {
      transition: none;
    }
    .toolbar-button--outline {
      border: 1px solid #ffffff;
      border: 1px solid rgba(255, 255, 255, 1);
      margin: auto 8px;
      padding-left: 6px;
      padding-right: 6px;
    }
    /*~
      name: Material Toolbar Button
      category: Toolbar Button
      elements: ons-toolbar-button
      markup: |
        <!-- Prerequisite=This example use Material Design Iconic Font(http://zavoloklom.github.io/material-design-iconic-font/) to display icons. -->
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-menu"></i>
        </span>
        <span class="toolbar-button toolbar-button--material">
          Label
        </span>
        <span class="toolbar-button toolbar-button--material">
          <i class="zmdi zmdi-favorite"></i>
        </span>
    */
    .toolbar-button--material {
      font-size: 22px;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      display: inline-block;
      padding: 0 12px;
      height: 100%;
      margin: 0;
      border: none;
      border-radius: 0;
      vertical-align: baseline;
      vertical-align: initial;
      transition: background-color 0.25s linear;
    }
    .toolbar-button--material:first-of-type {
      margin-left: 4px;
    }
    .toolbar-button--material:last-of-type {
      margin-right: 4px;
    }
    .toolbar-button--material:active {
      opacity: 1;
      transition: background-color 0.25s linear;
    }
    .back-button {
      height: 44px;
      line-height: 44px;
      padding-left: 8px;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      background-color: #000000;
      background-color: rgba(0, 0, 0, 0);
      display: inline-block;
    }
    .back-button:active {
      opacity: 0.2;
    }
    .back-button__label {
      display: inline-block;
      height: 100%;
      vertical-align: top;
      line-height: 44px;
      font-size: 17px;
      font-weight: 500;
    }
    .back-button__icon {
      margin-right: 6px;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: inline-flex;
      fill: rgba(255, 255, 255, 1);
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      height: 100%;
    }
    .back-button--material {
      font-size: 22px;
      color: #ffffff;
      color: rgba(255, 255, 255, 1);
      display: inline-block;
      padding: 0 12px;
      height: 100%;
      margin: 0 0 0 4px;
      border: none;
      border-radius: 0;
      vertical-align: baseline;
      vertical-align: initial;
      line-height: 56px;
    }
    .back-button--material__label {
      display: none;
      font-size: 20px;
    }
    .back-button--material__icon {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: inline-flex;
      fill: rgba(255, 255, 255, 1);
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      height: 100%;
    }
    .back-button--material:active {
      opacity: 1;
    }
    :root { /* background color active */
    }
    /*~
      name: Checkbox
      category: Checkbox
      elements: ons-input
      markup: |
        <label class="checkbox">
          <input type="checkbox" class="checkbox__input">
          <div class="checkbox__checkmark"></div>
          OFF
        </label>
    
        <label class="checkbox">
          <input type="checkbox" class="checkbox__input" checked="checked">
          <div class="checkbox__checkmark"></div>
          ON
        </label>
    
        <label class="checkbox">
          <input type="checkbox" class="checkbox__input" disabled>
          <div class="checkbox__checkmark"></div>
          Disabled
        </label>
    */
    .checkbox {
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      line-height: 22px;
    }
    .checkbox__checkmark {
      box-sizing: border-box;
      background-clip: padding-box;
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      position: relative;
      height: 22px;
      width: 22px;
      pointer-events: none;
    }
    .checkbox__input,
    .checkbox__input:checked {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    .checkbox__checkmark:before {
      content: '';
      position: absolute;
      box-sizing: border-box;
      background-clip: padding-box;
      width: 22px;
      height: 22px;
      background: transparent;
      border: 1px solid #c7c7cd;
      border-radius: 22px;
      left: 0;
    }
    /* checkmark's line */
    .checkbox__checkmark:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 5px;
      width: 11px;
      height: 5px;
      background: transparent;
      border: 2px solid #fff;
      border-width: 1px;
      border-top: none;
      border-right: none;
      border-radius: 0;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
      opacity: 0;
    }
    :checked + .checkbox__checkmark:before {
      background: ${primaryThemeColor};
      border: none;
    }
    :checked + .checkbox__checkmark:after {
      opacity: 1;
    }
    :disabled + .checkbox__checkmark {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    :disabled:active + .checkbox__checkmark:before { /* FIXME */
      background: transparent;
    }
    /*~
      name: No border Checkbox
      category: Checkbox
      elements: ons-input
      markup: |
        <label class="checkbox--noborder">
          <input type="checkbox" class="checkbox__input checkbox--noborder__input">
          <div class="checkbox__checkmark checkbox--noborder__checkmark"></div>
          OFF
        </label>
    
        <label class="checkbox--noborder">
          <input type="checkbox" class="checkbox__input checkbox--noborder__input" checked="checked">
          <div class="checkbox__checkmark checkbox--noborder__checkmark"></div>
          ON
        </label>
    
        <label class="checkbox--noborder">
          <input type="checkbox" class="checkbox__input checkbox--noborder__input" disabled checked="checked">
          <div class="checkbox__checkmark checkbox--noborder__checkmark"></div>
          Disabled
        </label>
     */
    .checkbox--noborder {
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      line-height: 22px;
      position: relative;
    }
    .checkbox--noborder__input {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    .checkbox--noborder__checkmark {
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      box-sizing: border-box;
      background-clip: padding-box;
      width: 22px;
      height: 22px;
      background: transparent;
      border: none;
    }
    .checkbox--noborder__checkmark:before {
      content: '';
      position: absolute;
      width: 22px;
      height: 22px;
      background: transparent;
      border: none;
      border-radius: 22px;
      left: 0;
    }
    /* checkmark's line */
    .checkbox--noborder__checkmark:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 4px;
      opacity: 0;
      width: 11px;
      height: 4px;
      background: transparent;
      border: 2px solid ${primaryThemeColor};
      border-top: none;
      border-right: none;
      border-radius: 0;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
    }
    :checked + .checkbox--noborder__checkmark:before {
      background: transparent;
      border: none;
    }
    :checked + .checkbox--noborder__checkmark:after {
      opacity: 1;
    }
    :focus + .checkbox--noborder__checkmark:before {
      border: none;
    }
    :disabled + .checkbox--noborder__checkmark {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    :disabled:active + .checkbox--noborder__checkmark:before {
      background: transparent;
      border: none;
    }
    /*~
      name: Material Checkbox
      category: Checkbox
      elements: ons-input
      markup: |
        <label class="checkbox checkbox--material">
          <input type="checkbox" class="checkbox__input checkbox--material__input">
          <div class="checkbox__checkmark checkbox--material__checkmark"></div>
          OFF
        </label>
        <label class="checkbox checkbox--material">
          <input type="checkbox" class="checkbox__input checkbox--material__input" checked="checked">
          <div class="checkbox__checkmark checkbox--material__checkmark"></div>
          ON
        </label>
        <label class="checkbox checkbox--material">
          <input type="checkbox" class="checkbox__input checkbox--material__input" checked="checked" disabled>
          <div class="checkbox__checkmark checkbox--material__checkmark"></div>
          ON
        </label>
        <label class="checkbox checkbox--material">
          <input type="checkbox" class="checkbox__input checkbox--material__input" disabled>
          <div class="checkbox__checkmark checkbox--material__checkmark"></div>
          Disabled
        </label>
    */
    .checkbox--material {
      line-height: 18px;
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      overflow: visible;
    }
    .checkbox--material__checkmark {
      width: 18px;
      height: 18px;
    }
    .checkbox--material__checkmark:before {
      border-radius: 2px;
      height: 18px;
      width: 18px;
      border: 2px solid ${primaryThemeColor};
      transition: background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s;
      background-color: transparent;
    }
    :checked + .checkbox--material__checkmark:before {
      border: 2px solid ${primaryThemeColor};
      background-color: ${primaryThemeColor};
      transition: background-color 0.1s linear, border-color 0.1s linear;
    }
    .checkbox--material__checkmark:after {
      border-color: #ffffff;
      transition: -webkit-transform 0.2s ease 0;
      transition: transform 0.2s ease 0;
      transition: transform 0.2s ease 0, -webkit-transform 0.2s ease 0;
      width: 10px;
      height: 5px;
      top: 4px;
      left: 3px;
      -webkit-transform: scale(0) rotate(-45deg);
              transform: scale(0) rotate(-45deg);
      border-width: 2px;
    }
    :checked + .checkbox--material__checkmark:after {
      transition: -webkit-transform 0.2s ease 0.2s;
      transition: transform 0.2s ease 0.2s;
      transition: transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s;
      width: 10px;
      height: 5px;
      top: 4px;
      left: 3px;
      -webkit-transform: scale(1) rotate(-45deg);
              transform: scale(1) rotate(-45deg);
      border-width: 2px;
    }
    /* active ring effect */
    .checkbox--material__input:before {
      content: '';
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      box-shadow: 0 0 0 11px ${primaryThemeColor};
      box-sizing: border-box;
      border-radius: 50%;
      background-color: ${primaryThemeColor};
      pointer-events: none;
      display: block;
      -webkit-transform: scale3d(0.2, 0.2, 0.2);
              transform: scale3d(0.2, 0.2, 0.2);
      transition: opacity 0.25s ease-out, -webkit-transform 0.1s ease-out;
      transition: opacity 0.25s ease-out, transform 0.1s ease-out;
      transition: opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
    }
    .checkbox--material__input:checked:before {
      box-shadow: 0 0 0 11px ${primaryThemeColor};
      background-color: ${primaryThemeColor};
    }
    .checkbox--material__input:active:before {
      opacity: .15;
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
    :disabled + .checkbox--material__checkmark {
      opacity: 1;
    }
    :disabled + .checkbox--material__checkmark:before {
      border-color: #afafaf;
    }
    :disabled:checked + .checkbox--material__checkmark:before {
      background-color: #afafaf;
    }
    :disabled:checked + .checkbox--material__checkmark:after {
      border-color: #ffffff;
    }
    /*~
      name: Radio Button
      category: Radio Button
      elements: ons-input
      markup: |
        <label class="radio-button">
          <input type="radio" class="radio-button__input" name="r" checked="checked">
          <div class="radio-button__checkmark"></div>
          Label
        </label>
    
        <label class="radio-button">
          <input type="radio" class="radio-button__input" name="r">
          <div class="radio-button__checkmark"></div>
          Label
        </label>
    
        <label class="radio-button">
          <input type="radio" class="radio-button__input" name="r">
          <div class="radio-button__checkmark"></div>
          Label
        </label>
    */
    .radio-button__input {
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      bottom: 0;
      padding: 0;
      border: 0;
      background-color: transparent;
      z-index: 1;
      vertical-align: top;
      outline: none;
      width: 100%;
      height: 100%;
      margin: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
    }
    .radio-button__input:active,
    .radio-button__input:focus {
      outline: 0;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .radio-button {
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      position: relative;
      line-height: 24px;
      text-align: left;
    }
    .radio-button__checkmark:before {
      content: '';
      position: absolute;
      border-radius: 100%;
      box-sizing: border-box;
      background-clip: padding-box;
      width: 22px;
      height: 22px;
      background: transparent;
      border: none;
      border-radius: 22px;
      left: 0;
    }
    .radio-button__checkmark {
      box-sizing: border-box;
      background-clip: padding-box;
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      position: relative;
      position: relative;
      width: 24px;
      height: 24px;
      background: transparent;
      pointer-events: none;
    }
    .radio-button__checkmark:after {
      content: '';
      position: absolute;
      top: 7px;
      left: 4px;
      opacity: 0;
      width: 11px;
      height: 4px;
      background: transparent;
      border: 2px solid ${primaryThemeColor};
      border-top: none;
      border-right: none;
      border-radius: 0;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
    }
    :checked + .radio-button__checkmark {
      background: #000000;
      background: rgba(0, 0, 0, 0);
    }
    :checked + .radio-button__checkmark:after {
      opacity: 1;
    }
    :checked + .radio-button__checkmark:before {
      background: transparent;
      border: none;
    }
    :disabled + .radio-button__checkmark {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    /*~
      name: Material Radio Button
      category: Radio Button
      elements: ons-input
      markup: |
        <label class="radio-button radio-button--material">
          <input type="radio" class="radio-button__input radio-button--material__input" name="r" checked="checked">
          <div class="radio-button__checkmark radio-button--material__checkmark"></div>
          Label
        </label>
        <label class="radio-button radio-button--material">
          <input type="radio" class="radio-button__input radio-button--material__input" name="r">
          <div class="radio-button__checkmark radio-button--material__checkmark"></div>
          Label
        </label>
        <label class="radio-button radio-button--material">
          <input type="radio" class="radio-button__input radio-button--material__input" name="s" disabled checked>
          <div class="radio-button__checkmark radio-button--material__checkmark"></div>
          Label
        </label>
        <label class="radio-button radio-button--material">
          <input type="radio" class="radio-button__input radio-button--material__input" name="s" disabled>
          <div class="radio-button__checkmark radio-button--material__checkmark"></div>
          Label
        </label>
    */
    .radio-button--material {
      line-height: 22px;
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
    }
    .radio-button--material__input:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 20px;
      height: 20px;
      box-shadow: 0 0 0 14px #717171;
      border: none;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #717171;
      pointer-events: none;
      display: block;
      -webkit-transform: scale3d(0.2, 0.2, 0.2);
              transform: scale3d(0.2, 0.2, 0.2);
      transition: opacity 0.25s ease-out, -webkit-transform 0.1s ease-out;
      transition: opacity 0.25s ease-out, transform 0.1s ease-out;
      transition: opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out;
    }
    .radio-button--material__input:checked:before {
      box-shadow: 0 0 0 14px #37474f;
      background-color: #37474f;
    }
    .radio-button--material__input:active:before {
      opacity: .15;
      -webkit-transform: scale3d(1, 1, 1);
              transform: scale3d(1, 1, 1);
    }
    .radio-button--material__checkmark {
      width: 20px;
      height: 20px;
      overflow: visible;
    }
    .radio-button--material__checkmark:before {
      background: transparent;
      border: 2px solid #717171;
      box-sizing: border-box;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      transition: border 0.2s ease;
    }
    .radio-button--material__checkmark:after {
      transition: background 0.2s ease, -webkit-transform 0.2s ease;
      transition: background 0.2s ease, transform 0.2s ease;
      transition: background 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      border: none;
      border-radius: 50%;
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    :checked + .radio-button--material__checkmark:before {
      background: transparent;
      border: 2px solid #37474f;
    }
    .radio-button--material__input + .radio-button__checkmark:after {
      background: #717171;
      opacity: 1;
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    :checked + .radio-button--material__checkmark:after {
      opacity: 1;
      background: #37474f;
      -webkit-transform: scale(1);
              transform: scale(1);
    }
    :disabled + .radio-button--material__checkmark {
      opacity: 1;
    }
    :disabled + .radio-button--material__checkmark:after {
      background-color: #afafaf;
      border-color: #afafaf;
    }
    :disabled + .radio-button--material__checkmark:before {
      border-color: #afafaf;
    }
    /*~
      name: List
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">Dog</div>
          </li>
          <li class="list-item">
            <div class="list-item__center">Cat</div>
          </li>
          <li class="list-item">
            <div class="list-item__center">Hamster</div>
          </li>
        </ul>
    */
    .list {
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      list-style-type: none;
      text-align: left;
      display: block;
      -webkit-overflow-scrolling: touch;
      overflow: hidden;
      background-image:
        linear-gradient(rgba(51, 51, 51, .2), rgba(51, 51, 51, .2)),
        linear-gradient(rgba(51, 51, 51, .2), rgba(51, 51, 51, .2));
      background-size: 100% 1px, 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom, top;
      border: none;
      background-color: #fff;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list {
        background-image:
          linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%),
          linear-gradient(180deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%);
      }
    }
    .list-item {
      position: relative;
      width: 100%;
      list-style: none;
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
              flex-direction: row;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
              justify-content: flex-start;
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      padding: 0 0 0 14px;
      margin: 0 0 -1px 0;
      color: #1f1f21;
      transition: background-color 0.2s linear;
    }
    /*~
      name: Expandable List
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item list-item--expandable expanded">
            <div class="list-item__top">
              <div class="list-item__center">Item</div>
              <div class="list-item__right">
                <span class="list-item__expand-chevron"></span>
              </div>
            </div>
            <div class="list-item__expandable-content">Expanded content</div>
          </li>
        </ul>
    */
    .list-item__top {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
              flex-direction: row;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
              justify-content: flex-start;
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
              order: 0;
      width: 100%;
    }
    .list-item--expandable {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
              flex-direction: column;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item--expandable {
        background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%);
      }
    }
    .list-item--expandable {
      background-position-x: 14px;
    }
    .list-item__expandable-content {
      display: none;
      width: 100%;
      padding: 12px 14px 12px 0;
      box-sizing: border-box;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
              order: 1;
      overflow: hidden;
    }
    .list-item.expanded > .list-item__expandable-content {
      display: block;
      height: auto;
    }
    .list-item__left {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      padding: 12px 14px 12px 0;
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
              order: 0;
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      -webkit-align-self: stretch;
              align-self: stretch;
      line-height: 1.2em;
      min-height: 44px;
    }
    .list-item__left:empty {
      width: 0;
      min-width: 0;
      padding: 0;
      margin: 0;
    }
    .list-item__center {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
              flex-grow: 1;
      -webkit-flex-wrap: wrap;
              flex-wrap: wrap;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
              flex-direction: row;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
              order: 1;
      margin-right: auto;
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      -webkit-align-self: stretch;
              align-self: stretch;
      margin-left: 0;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item__center {
        background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%);
      }
    }
    .list-item__center {
      padding: 12px 6px 12px 0;
      line-height: 1.2em;
      min-height: 44px;
    }
    .list-item__right {
      box-sizing: border-box;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      margin-left: auto;
      padding: 12px 12px 12px 0;
      -webkit-box-ordinal-group: 3;
      -webkit-order: 2;
              order: 2;
      -webkit-box-align: center;
      -webkit-align-items: center;
              align-items: center;
      -webkit-align-self: stretch;
              align-self: stretch;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item__right {
        background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%);
      }
    }
    .list-item__right {
      line-height: 1.2em;
      min-height: 44px;
    }
    .list-header {
      margin: 0;
      list-style: none;
      text-align: left;
      display: block;
      box-sizing: border-box;
      padding: 0 0 0 15px;
      font-size: 12px;
      font-weight: 500;
      color: #1f1f21;
      min-height: 24px;
      line-height: 25px;
      text-transform: uppercase;
      position: relative;
      background-color: #EEEEEE;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: top;
      background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-header {
        background-image: linear-gradient(180deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%);
      }
    }
    /*~
      name: Noborder List
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list list--noborder">
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
        </ul>
     */
    .list--noborder {
      border-top: none;
      border-bottom: none;
      background-image: none;
    }
    /*~
      name: Category List Header
      category: List
      elements: ons-list ons-list-header ons-list-item
      markup: |
        <ul class="list">
          <li class="list-header">
            Header
          </li>
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
        </ul>
     */
    /*~
      name: Tappable List
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item list-item--tappable">
            <div class="list-item__center">Tappable Item</div>
          </li>
          <li class="list-item list-item--tappable">
            <div class="list-item__center">Tappable Item</div>
          </li>
          <li class="list-item list-item--tappable">
            <div class="list-item__center">Tappable Item</div>
          </li>
        </ul>
     */
    .list-item--tappable:active {
      transition: none;
      background-color: #d9d9d9;
    }
    /*~
      name: Switch in List Item
      category: List
      elements: ons-list ons-list-item ons-switch
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">
              Label
            </div>
            <div class="list-item__right">
              <label class="switch">
                <input type="checkbox" class="switch__input" checked>
                <div class="switch__toggle">
                  <div class="switch__handle"></div>
                </div>
              </label>
            </div>
          </li>
          <li class="list-item">
            <div class="list-item__center">
              Label
            </div>
            <div class="list-item__right">
              <label class="switch">
                <input type="checkbox" class="switch__input">
                <div class="switch__toggle">
                  <div class="switch__handle"></div>
                </div>
              </label>
            </div>
          </li>
        </ul>
    */
    /*~
      name: Inset List
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list list--inset">
          <li class="list-item list--inset__item list-item--chevron list-item--tappable">
            <div class="list-item__center">List Item with Chevron</div>
          </li>
          <li class="list-item list--inset__item list-item--chevron list-item--tappable">
            <div class="list-item__center">List Item with Chevron</div>
          </li>
        </ul>
     */
    .list--inset {
      margin: 0 8px;
      border: 1px solid #333333;
      border: 1px solid rgba(51, 51, 51, .2);
      border-radius: 4px;
      background-image: none;
    }
    /*~
      name: Radio Button in List Item
      category: List
      elements: ons-list ons-list-item ons-input
      markup: |
        <ul class="list">
          <li class="list-item list-item--tappable">
            <div class="list-item__left">
              <label class="radio-button">
                <input type="radio" id="r1" class="radio-button__input" name="r" checked="checked">
                <div class="radio-button__checkmark"></div>
              </label>
            </div>
            <label for="r1" class="list-item__center">
              Radio Button
            </label>
          </li>
          <li class="list-item list-item--tappable">
            <div class="list-item__left">
              <label class="radio-button">
                <input type="radio" id="r2" class="radio-button__input" name="r">
                <div class="radio-button__checkmark"></div>
              </label>
            </div>
            <label for="r2" class="list-item__center">
              Radio Button
            </label>
          </li>
        </ul>
    */
    /*~
      name: Checkbox in List Item
      category: List
      elements: ons-list ons-list-item ons-input
      markup: |
        <ul class="list">
          <li class="list-item list-item--tappable">
            <div class="list-item__left">
              <label class="checkbox">
                <input type="checkbox" id="checkbox1" class="checkbox__input" name="c" checked="checked">
                <div class="checkbox__checkmark"></div>
              </label>
            </div>
            <label for="checkbox1" class="list-item__center">
              Checkbox
            </label>
          </li>
          <li class="list-item list-item--tappable">
            <div class="list-item__left">
              <label class="checkbox">
                <input type="checkbox" id="checkbox2" class="checkbox__input" name="c">
                <div class="checkbox__checkmark"></div>
              </label>
            </div>
            <label for="checkbox2" class="list-item__center">
              Checkbox
            </label>
          </li>
        </ul>
    */
    /*~
      name: No border Checkbox in List Item
      category: List
      elements: ons-list ons-list-item ons-input
      markup: |
        <ul class="list">
          <li class="list-item list-item--tappable">
            <div class="list-item__left">
              <label class="checkbox checkbox--noborder">
                <input id="s1" type="checkbox" class="checkbox__input checkbox--noborder__input">
                <div class="checkbox__checkmark checkbox--noborder checkbox--noborder__checkmark"></div>
              </label>
            </div>
            <label for="s1" class="list-item__center">
              Checkbox
            </label>
          </li>
          <li class="list-item list-item--tappable">
            <div class="list-item__left">
              <label class="checkbox checkbox--noborder">
                <input id="s2" type="checkbox" class="checkbox__input checkbox--noborder__input" checked>
                <div class="checkbox__checkmark checkbox--noborder checkbox--noborder__checkmark"></div>
              </label>
            </div>
            <label for="s2" class="list-item__center">
              Checkbox
            </label>
          </li>
        </ul>
    */
    /*~
      name: Text Input in List Item
      category: List
      elements: ons-list ons-list-item ons-input
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">
              <input type="text" class="text-input" placeholder="Name">
            </div>
          </li>
          <li class="list-item">
            <div class="list-item__center">
              <input type="text" class="text-input" placeholder="Email">
            </div>
          </li>
        </ul>
    */
    /*~
      name: Textarea in List Item
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">
              <textarea class="textarea textarea--transparent" placeholder="Text message"></textarea>
            </div>
          </li>
        </ul>
    */
    /*~
      name: Right Label in List Item
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">
              Title
            </div>
            <div class="list-item__right">
              <div class="list-item__label">Label</div>
            </div>
          </li>
        </ul>
    */
    .list-item__label {
      font-size: 14px;
      padding: 0 4px;
      opacity: 0.6;
    }
    /*~
      name: List Item with Subtitle
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">
              <div class="list-item__title">
                Title
              </div>
              <div class="list-item__subtitle">
                Subtitle
              </div>
            </div>
          </li>
        </ul>
    */
    .list-item__title {
      -webkit-flex-basis: 100%;
              flex-basis: 100%;
      -webkit-align-self: flex-end;
              align-self: flex-end;
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
              order: 0;
    }
    .list-item__subtitle {
      opacity: 0.75;
      font-size: 14px;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
              order: 1;
      -webkit-flex-basis: 100%;
              flex-basis: 100%;
      -webkit-align-self: flex-start;
              align-self: flex-start;
    }
    /*~
      name: List Item with Thumbnail
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__left">
              <img class="list-item__thumbnail" src="https://placekitten.com/g/40/40" alt="Cute kitten">
            </div>
    
            <div class="list-item__center">
              <div class="list-item__title">Lily</div>
              <div class="list-item__subtitle">Very friendly cat</div>
            </div>
          </li>
    
          <li class="list-item">
            <div class="list-item__left">
              <img class="list-item__thumbnail" src="https://placekitten.com/g/40/40" alt="Cute kitten">
            </div>
    
            <div class="list-item__center">
              <div class="list-item__title">Molly</div>
              <div class="list-item__subtitle">Loves tuna!</div>
            </div>
          </li>
        </ul>
    */
    .list-item__thumbnail {
      width: 40px;
      height: 40px;
      border-radius: 6px;
      display: block;
      margin: 0;
    }
    /*~
      name: List Item with Icon
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item">
            <div class="list-item__left">
              <img class="list-item__thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwJCB8v/9zErgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAvSURBVFjD7c0BDQAACAMgtX+KJzWGm4MCdJK6MHVELBaLxWKxWCwWi8VisVj8MV7qBgI2A8rYpgAAAABJRU5ErkJggg==">
            </div>
    
            <div class="list-item__center">
              <div class="list-item__title">Alice</div>
              <div class="list-item__subtitle">Description</div>
            </div>
    
            <div class="list-item__right">
              <i class="ion-ios-information list-item__icon"></i>
            </div>
          </li>
    
          <li class="list-item">
            <div class="list-item__left">
              <img class="list-item__thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwJCB8v/9zErgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAvSURBVFjD7c0BDQAACAMgtX+KJzWGm4MCdJK6MHVELBaLxWKxWCwWi8VisVj8MV7qBgI2A8rYpgAAAABJRU5ErkJggg==">
            </div>
    
            <div class="list-item__center">
              <div class="list-item__title">Bob</div>
              <div class="list-item__subtitle">Description</div>
            </div>
    
            <div class="list-item__right">
              <i class="ion-ios-information list-item__icon"></i>
            </div>
          </li>
        </ul>
    */
    .list-item__icon {
      font-size: 22px;
      padding: 0 6px;
    }
    /*~
      name: Material List
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list list--material">
          <li class="list-item list-item--material">
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Orange</div>
              <div class="list-item__subtitle list-item--material__subtitle">Sweet fruit that grows on trees.</div>
            </div>
          </li>
          <li class="list-item list-item--material">
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Pear</div>
              <div class="list-item__subtitle list-item--material__subtitle">Funny-shaped fruit.</div>
            </div>
          </li>
        </ul>
    */
    .list--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      background-image: none;
      background-color: #fff;
    }
    .list-item--material {
      border: 0;
      padding: 0 0 0 16px;
      line-height: normal;
    }
    .list-item--material__subtitle {
      margin-top: 4px;
    }
    .list-item--material:first-child {
      box-shadow: none;
    }
    .list-item--material__left {
      padding: 14px 0;
      min-width: 56px;
      line-height: 1;
      min-height: 48px;
    }
    .list-item--material__left:empty,
    .list-item--material__center {
      padding: 14px 6px 14px 0;
      border-color: #eee;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, #eee, #eee 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item--material__left:empty,
    .list-item--material__center {
        background-image: linear-gradient(0deg, #eee, #eee 50%, transparent 50%);
      }
    }
    .list-item--material__left:empty,
    .list-item--material__center {
      min-height: 48px;
    }
    .list-item--material__right {
      padding: 14px 16px 14px 0;
      line-height: 1;
      border-color: #eee;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, #eee, #eee 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item--material__right {
        background-image: linear-gradient(0deg, #eee, #eee 50%, transparent 50%);
      }
    }
    .list-item--material__right {
      min-height: 48px;
    }
    .list-item--material.list-item--expandable {
      border-bottom: 1px solid #eee;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, #eee, #eee 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item--material.list-item--expandable {
        background-image: linear-gradient(0deg, #eee, #eee 50%, transparent 50%);
      }
    }
    .list-item--material.list-item--expandable {
      background-position-x: 16px;
    }
    .list-item--material.list-item--longdivider,
    .list-item--material.list-item--expandable.list-item--longdivider
     {
      border-bottom: 1px solid #eee;
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, #eee, #eee 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item--material.list-item--longdivider,
    .list-item--material.list-item--expandable.list-item--longdivider
     {
        background-image: linear-gradient(0deg, #eee, #eee 50%, transparent 50%);
      }
    }
    /*~
      name: Material List with Header
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list list--material">
          <li class="list-header list-header--material">
            Fruits
          </li>
          <li class="list-item list-item--material">
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Orange</div>
              <div class="list-item__subtitle list-item--material__subtitle">Sweet fruit that grows on trees.</div>
            </div>
          </li>
        </ul>
    */
    .list-header--material {
      background: #fff;
      border: none;
      font-size: 14px;
      text-transform: none;
      margin: -1px 0 0 0;
      color: #757575;
      font-weight: 500;
      padding: 8px 16px;
    }
    .list-header--material:not(:first-of-type) {
      border-top: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: top;
      background-image: linear-gradient(180deg, #eee, #eee 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-header--material:not(:first-of-type) {
        background-image: linear-gradient(180deg, #eee, #eee 50%, transparent 50%);
      }
    }
    .list-header--material:not(:first-of-type) {
      padding-top: 16px;
    }
    /*~
      name: Material List with Checkboxes
      category: List
      elements: ons-list ons-list-item ons-input
      markup: |
        <ul class="list list--material">
          <li class="list-item list-item--material">
            <div class="list-item__left list-item--material__left">
              <label class="checkbox checkbox--material">
                <input type="checkbox" id="checkbox3" class="checkbox__input checkbox--material__input">
                <div class="checkbox__checkmark checkbox--material__checkmark"></div>
              </label>
            </div>
    
            <label for="checkbox3" class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Notifications</div>
              <div class="list-item__subtitle list-item--material__subtitle">Allow notifications</div>
            </label>
          </li>
    
          <li class="list-item list-item--material">
            <div class="list-item__left list-item--material__left">
              <label class="checkbox checkbox--material">
                <input type="checkbox" id="checkbox4" class="checkbox__input checkbox--material__input" checked="checked">
                <div class="checkbox__checkmark checkbox--material__checkmark"></div>
              </label>
            </div>
    
            <label for="checkbox4" class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Sound</div>
              <div class="list-item__subtitle list-item--material__subtitle">Hangouts message</div>
            </label>
          </li>
    
        </ul>
    */
    /*~
      name: Material List with Thumbnails
      category: List
      markup: |
        <ul class="list list--material">
          <li class="list-item list-item--material">
            <div class="list-item__left list-item--material__left">
              <img class="list-item__thumbnail list-item--material__thumbnail" src="https://placekitten.com/g/42/41" alt="Cute kitten">
            </div>
    
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Lily</div>
              <div class="list-item__subtitle list-item--material__subtitle">Very friendly cat</div>
            </div>
          </li>
    
          <li class="list-item list-item--material">
            <div class="list-item__left list-item--material__left">
              <img class="list-item__thumbnail list-item--material__thumbnail" src="https://placekitten.com/g/40/40" alt="Cute kitten">
            </div>
    
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Molly</div>
              <div class="list-item__subtitle list-item--material__subtitle">Loves tuna!</div>
            </div>
          </li>
    
        </ul>
    */
    .list-item--material__thumbnail {
      width: 40px;
      height: 40px;
      border-radius: 100%;
    }
    /*~
      name: Material List with Icons
      category: List
      markup: |
        <ul class="list list--material">
          <li class="list-item list-item--material">
            <div class="list-item__left list-item--material__left">
              <img class="list-item__thumbnail list-item--material__thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwJCB8v/9zErgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAvSURBVFjD7c0BDQAACAMgtX+KJzWGm4MCdJK6MHVELBaLxWKxWCwWi8VisVj8MV7qBgI2A8rYpgAAAABJRU5ErkJggg==">
            </div>
    
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Alice</div>
              <div class="list-item__subtitle list-item--material__subtitle">Description</div>
            </div>
    
            <div class="list-item__right list-item--material__right">
              <i style="color:#ccc" class="list-item__icon list-item--material__icon zmdi zmdi-comment"></i>
            </div>
          </li>
    
          <li class="list-item list-item--material">
            <div class="list-item__left list-item--material__left">
              <img class="list-item__thumbnail list-item--material__thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwJCB8v/9zErgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAvSURBVFjD7c0BDQAACAMgtX+KJzWGm4MCdJK6MHVELBaLxWKxWCwWi8VisVj8MV7qBgI2A8rYpgAAAABJRU5ErkJggg==">
            </div>
    
            <div class="list-item__center list-item--material__center">
              <div class="list-item__title list-item--material__title">Bob</div>
              <div class="list-item__subtitle list-item--material__subtitle">Description</div>
            </div>
    
            <div class="list-item__right list-item--material__right">
              <i style="color:#ccc" class="list-item__icon list-item--material__icon zmdi zmdi-comment"></i>
            </div>
          </li>
        </ul>
    */
    .list-item--material__icon {
      font-size: 20px;
      padding: 0 4px;
    }
    /*~
      name: List Item with Chevron
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item list-item--chevron">
            <div class="list-item__center">Item A</div>
          </li>
          <li class="list-item list-item--chevron">
            <div class="list-item__center">Item B</div>
            <div class="list-item__right list-item--chevron__right">
              <div class="list-item__label">Label</div>
            </div>
          </li>
        </ul>
     */
    .list-item--chevron:before,
    .list-item__expand-chevron {
      border-right: 2px solid #c7c7cc;
      border-bottom: 2px solid #c7c7cc;
      width: 7px;
      height: 7px;
      background-color: transparent;
      z-index: 5;
    }
    .list-item--chevron:before {
      position: absolute;
      content: '';
      right: 16px;
      top: 50%;
      -webkit-transform: translateY(-50%) rotate(-45deg);
              transform: translateY(-50%) rotate(-45deg);
    }
    .list-item__expand-chevron {
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
      margin: 1px; /* this improves alignment with normal chevrons */
    }
    .list-item--expandable.expanded .list-item__expand-chevron {
      -webkit-transform: rotate(225deg);
              transform: rotate(225deg);
    }
    .list-item--chevron__right {
      padding-right: 30px;
    }
    /*~
      name: Nodivider List Item with Chevron
      category: List
      elements: ons-list ons-list-item
      markup: |
        <ul class="list">
          <li class="list-item list-item--nodivider list-item--chevron">
            <div class="list-item__center list-item--nodivider__center">Item A</div>
          </li>
          <li class="list-item list-item--nodivider list-item--chevron">
            <div class="list-item__center list-item--nodivider__center">Item B</div>
            <div class="list-item__right list-item--nodivider__right list-item--chevron__right">
              <div class="list-item__label">Label</div>
            </div>
          </li>
        </ul>
     */
    /*~
      name: List item without divider
      category: List
      markup: |
        <ul class="list">
          <li class="list-item list-item--nodivider">
            <div class="list-item__center list-item--nodivider__center">Item</div>
          </li>
          <li class="list-item list-item--nodivider">
            <div class="list-item__center list-item--nodivider__center">Item</div>
          </li>
        </ul>
     */
    .list-item--nodivider__center,
    .list-item--nodivider__right,
    .list-item--nodivider.list-item--expandable,
    .list-item--expandable .list-item__center,
    .list-item--expandable .list-item__right {
      border: none;
      background-image: none;
    }
    /*~
      name: List item with long divider
      category: List
      markup: |
        <ul class="list">
          <li class="list-item list-item--longdivider">
            <div class="list-item__center list-item--longdivider__center">Item</div>
          </li>
          <li class="list-item list-item--longdivider">
            <div class="list-item__center list-item--longdivider__center">Item</div>
          </li>
        </ul>
     */
    .list-item--longdivider {
      border-bottom: 1px solid rgba(51, 51, 51, .2);
      border-bottom: none;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .list-item--longdivider {
        background-image: linear-gradient(0deg, rgba(51, 51, 51, .2), rgba(51, 51, 51, .2) 50%, transparent 50%);
      }
    }
    .list-item--longdivider:last-of-type {
      border: none;
      background-image: none;
    }
    .list-item--longdivider__center {
      border: none;
      background-image: none;
    }
    .list-item--longdivider__right {
      border: none;
      background-image: none;
    }
    /*~
      name: List title
      category: List
      markup: |
        <div class="list-title">List Title</div>
        <ul class="list">
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
          <li class="list-item">
            <div class="list-item__center">Item</div>
          </li>
        </ul>
     */
    .list-title {
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: block;
      color: #6d6d72;
      text-align: left;
      box-sizing: border-box;
      padding: 0 0 0 16px;
      margin: 0;
      font-size: 13px;
      font-weight: 500;
      line-height: 24px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }
    /*~
      name: Material List Title
      category: List
      markup: |
        <h3 class="list-title list-title--material">LIST TITLE</h3>
        <ul class="list list--material">
          <li class="list-item list-item--material">
            <div class="list-item__center list-item--material__center">Item</div>
          </li>
          <li class="list-item list-item--material">
            <div class="list-item__center list-item--material__center">Item</div>
          </li>
        </ul>
     */
    .list-title--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      color: #757575;
      font-size: 14px;
      margin: 0;
      padding: 12px 0 12px 16px;
      font-weight: 500;
      line-height: 24px;
    }
    /*~
      name: Search Input
      category: Search Input
      markup: |
        <input type="search" value="" placeholder="Search" class="search-input" style="width: 280px;">
    */
    .search-input {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      -webkit-appearance: textfield;
         -moz-appearance: textfield;
              appearance: textfield;
      box-sizing: border-box;
      height: 28px;
      font-size: 14px;
      background-color: #030303;
      background-color: rgba(3, 3, 3, .09);
      box-shadow: none;
      color: #1f1f21;
      line-height: 1.3;
      padding: 0 8px 0 28px;
      margin: 0;
      border-radius: 5.5px;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW9zLXNlYXJjaC1pbnB1dC1pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpb3Mtc2VhcmNoLWlucHV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNDMuMDAwMDAwKSIgZmlsbD0iIzdBNzk3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45OTcyNDgyLDE1LjUwNDE0NjYgQzE3LjA3NzM2NTcsMTUuNTQwNTkzOCAxNy4xNTIyNzMxLDE1LjU5MTYxMjkgMTcuMjE3NzUxNiwxNS42NTcwOTE0IEwyMC42NDk5OTEsMTkuMDg5MzMwOCBDMjAuOTQ0ODQ0OSwxOS4zODQxODQ3IDIwLjk0ODQ3NjQsMTkuODU4NjA2IDIwLjY1MzU0MTIsMjAuMTUzNTQxMiBDMjAuMzYwNjQ4LDIwLjQ0NjQzNDQgMTkuODgxMjcxNiwyMC40NDE5MzE3IDE5LjU4OTMzMDgsMjAuMTQ5OTkxIEwxNi4xNTcwOTE0LDE2LjcxNzc1MTYgQzE2LjA5MTM3LDE2LjY1MjAzMDEgMTYuMDQwMTE3MSwxNi41NzczODc0IDE2LjAwMzQxNDEsMTYuNDk3Nzk5NSBDMTUuMTY3MTY5NCwxNy4xMjcwNDExIDE0LjEyNzEzOTMsMTcuNSAxMywxNy41IEMxMC4yMzg1NzYzLDE3LjUgOCwxNS4yNjE0MjM3IDgsMTIuNSBDOCw5LjczODU3NjI1IDEwLjIzODU3NjMsNy41IDEzLDcuNSBDMTUuNzYxNDIzNyw3LjUgMTgsOS43Mzg1NzYyNSAxOCwxMi41IEMxOCwxMy42Mjc0Njg1IDE3LjYyNjgyMzIsMTQuNjY3Nzc2OCAxNi45OTcyNDgyLDE1LjUwNDE0NjYgWiBNMTMsMTYuNSBDMTUuMjA5MTM5LDE2LjUgMTcsMTQuNzA5MTM5IDE3LDEyLjUgQzE3LDEwLjI5MDg2MSAxNS4yMDkxMzksOC41IDEzLDguNSBDMTAuNzkwODYxLDguNSA5LDEwLjI5MDg2MSA5LDEyLjUgQzksMTQuNzA5MTM5IDEwLjc5MDg2MSwxNi41IDEzLDE2LjUgWiIgaWQ9Imlvcy1zZWFyY2gtaW5wdXQtaWNvbiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
      background-position: 8px center;
      background-repeat: no-repeat;
      background-size: 13px;
      font-weight: 400;
      display: inline-block;
      text-indent: 0;
    }
    .search-input::-webkit-search-cancel-button {
      -webkit-appearance: textfield;
              appearance: textfield;
      display: none;
    }
    .search-input::-webkit-search-decoration {
      display: none;
    }
    .search-input:focus {
      outline: none;
    }
    .search-input::-webkit-input-placeholder {
      color: #7a797b;
      font-size: 14px;
      text-indent: 0;
    }
    .search-input:-ms-input-placeholder {
      color: #7a797b;
      font-size: 14px;
      text-indent: 0;
    }
    .search-input::-ms-input-placeholder {
      color: #7a797b;
      font-size: 14px;
      text-indent: 0;
    }
    .search-input::placeholder {
      color: #7a797b;
      font-size: 14px;
      text-indent: 0;
    }
    .search-input:placeholder-shown {
    }
    .search-input:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    /*~
      name: Material Search Input
      category: Search Input
      markup: |
        <input type="search" value="" placeholder="Search" class="search-input search-input--material" style="width: 280px;">
    */
    .search-input--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      border-radius: 2px;
      height: 48px;
      background-color: #fafafa;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbmRyb2lkLXNlYXJjaC1pbnB1dC1pY29uIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM4OTg5ODkiPgogICAgICAgICAgICA8ZyBpZD0iY29tcG9uZW50cyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibWF0ZXJpYWwtc2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hdGVyaWFsL0ljb25zLWJsYWNrL3NlYXJjaCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTAyLDYuNDkxIEwxMS43MDgsNi40OTEgTDExLjQzMiw2Ljc2NSBDMTIuNDA3LDcuOTAyIDEzLDkuMzc2IDEzLDEwLjk5MSBDMTMsMTQuNTgxIDEwLjA5LDE3LjQ5MSA2LjUsMTcuNDkxIEMyLjkxLDE3LjQ5MSAwLDE0LjU4MSAwLDEwLjk5MSBDMCw3LjQwMSAyLjkxLDQuNDkxIDYuNSw0LjQ5MSBDOC4xMTUsNC40OTEgOS41ODgsNS4wODMgMTAuNzI1LDYuMDU3IEwxMS4wMDEsNS43ODMgTDExLjAwMSw0Ljk5MSBMMTUuOTk5LDAgTDE3LjQ5LDEuNDkxIEwxMi41MDIsNi40OTEgTDEyLjUwMiw2LjQ5MSBaIE02LjUsNi40OTEgQzQuMDE0LDYuNDkxIDIsOC41MDUgMiwxMC45OTEgQzIsMTMuNDc2IDQuMDE0LDE1LjQ5MSA2LjUsMTUuNDkxIEM4Ljk4NSwxNS40OTEgMTEsMTMuNDc2IDExLDEwLjk5MSBDMTEsOC41MDUgOC45ODUsNi40OTEgNi41LDYuNDkxIEw2LjUsNi40OTEgWiIgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc0NTAwMCwgOC43NDU1MDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC43NDUwMDAsIC04Ljc0NTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');
      background-size: 18px;
      background-position: 18px center;
      font-size: 14px;
      padding: 0 24px 0 64px;
      box-shadow: 0 0 2px 0 rgba(0, 0, 0, .12), 0 2px 2px 0 rgba(0, 0, 0, .24), 0 1px 0 0 rgba(255, 255, 255, .06) inset;
    }
    /*~
      name: Text Input
      category: Text Input
      elements: ons-input
      markup: |
        <div><input type="text" class="text-input" placeholder="text" value=""></div>
        <div><input type="text" class="text-input" placeholder="text" value="" disabled></div>
    */
    .text-input {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border: none;
      background-color: transparent;
      letter-spacing: 0;
      box-shadow: none;
      color: #1f1f21;
      padding: 0;
      margin: 0;
      width: auto;
      font-size: 16px;
      height: 31px;
      font-weight: 400;
      box-sizing: border-box;
    }
    .text-input::-ms-clear {
      display: none;
    }
    .text-input:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .text-input::-webkit-input-placeholder {
      color: #999;
    }
    .text-input:-ms-input-placeholder {
      color: #999;
    }
    .text-input::-ms-input-placeholder {
      color: #999;
    }
    .text-input::placeholder {
      color: #999;
    }
    .text-input:disabled::-webkit-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .text-input:disabled:-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .text-input:disabled::-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .text-input:disabled::placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .text-input:invalid {
      border: none;
      background-color: transparent;
      color: #1f1f21;
    }
    /*~
      name: Underbar Text Input
      category: Text Input
      elements: ons-input
      markup: |
        <div><input type="text" class="text-input text-input--underbar" placeholder="text" value=""></div>
        <div><input type="text" class="text-input text-input--underbar" placeholder="text" value="" disabled></div>
    */
    .text-input--underbar {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border: none;
      background-color: transparent;
      letter-spacing: 0;
      box-shadow: none;
      color: #1f1f21;
      padding: 0;
      margin: 0;
      width: auto;
      font-size: 16px;
      height: 31px;
      font-weight: 400;
      box-sizing: border-box;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(51, 51, 51, .2);
      border-radius: 0;
    }
    .text-input--underbar:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(51, 51, 51, .2);
    }
    .text-input--underbar:disabled::-webkit-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .text-input--underbar:disabled:-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .text-input--underbar:disabled::-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .text-input--underbar:disabled::placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .text-input--underbar:invalid {
      border: none;
      background-color: transparent;
      color: #1f1f21;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(51, 51, 51, .2);
    }
    /*~
      name: Material Input
      category: Text Input
      elements: ons-input
      markup: |
        <span>
          <div><input class="text-input text-input--material" placeholder="Username" type="text" required></div>
          <br />
          <div><input class="text-input text-input--material" placeholder="Password" type="password" required></div>
        </span>
    */
    .text-input--material {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      color: #212121;
      background-image: linear-gradient(to top, transparent 1px, #afafaf 1px);
      background-size: 100% 2px;
      background-repeat: no-repeat;
      background-position: center bottom;
      background-color: transparent;
      font-size: 16px;
      font-weight: 400;
      border: none;
      padding-bottom: 2px;
      border-radius: 0;
      height: 24px;
      vertical-align: middle;
      -webkit-transform: translate3d(0, 0, 0); /* FIXME: prevent ios flicker */
    }
    .text-input--material__label {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      color: #afafaf;
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 16px;
      font-weight: 400;
      pointer-events: none;
    }
    .text-input--material__label--active {
      color: #3d5afe;
      -webkit-transform: translate(0, -75%) scale(0.75);
              transform: translate(0, -75%) scale(0.75);
      -webkit-transform-origin: left top;
              transform-origin: left top;
      transition: color 0.1s ease-in, -webkit-transform 0.1s ease-in;
      transition: transform 0.1s ease-in, color 0.1s ease-in;
      transition: transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in;
    }
    .text-input--material:focus {
      background-image:
        linear-gradient(#3d5afe, #3d5afe),
        linear-gradient(to top, transparent 1px, #afafaf 1px);
      -webkit-animation: material-text-input-animate 0.3s forwards;
              animation: material-text-input-animate 0.3s forwards;
    }
    .text-input--material::-webkit-input-placeholder {
      color: #afafaf;
      line-height: 20px;
    }
    .text-input--material:-ms-input-placeholder {
      color: #afafaf;
      line-height: 20px;
    }
    .text-input--material::-ms-input-placeholder {
      color: #afafaf;
      line-height: 20px;
    }
    .text-input--material::placeholder {
      color: #afafaf;
      line-height: 20px;
    }
    @-webkit-keyframes material-text-input-animate {
      0% {
        background-size: 0% 2px, 100% 2px;
      }
    
      100% {
        background-size: 100% 2px, 100% 2px;
      }
    }
    @keyframes material-text-input-animate {
      0% {
        background-size: 0% 2px, 100% 2px;
      }
    
      100% {
        background-size: 100% 2px, 100% 2px;
      }
    }
    /*~
      name: Textarea
      category: Textarea
      markup: |
        <textarea class="textarea" rows="3" placeholder="Textarea"></textarea>
    */
    .textarea {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      vertical-align: top;
      resize: none;
      outline: none;
      padding: 5px 5px 5px 5px;
      font-size: 16px;
      font-weight: 400;
      border-radius: 4px;
      border: 1px solid #333333;
      border: 1px solid rgba(51, 51, 51, .2);
      background-color: #efeff4;
      color: #1f1f21;
      letter-spacing: 0;
      box-shadow: none;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      width: auto;
    }
    .textarea:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .textarea::-webkit-input-placeholder {
      color: #999;
    }
    .textarea:-ms-input-placeholder {
      color: #999;
    }
    .textarea::-ms-input-placeholder {
      color: #999;
    }
    .textarea::placeholder {
      color: #999;
    }
    /*~
      name: Textarea Transparent
      category: Textarea
      markup: |
        <textarea class="textarea textarea--transparent" rows="3" placeholder="Textarea"></textarea>
    */
    .textarea--transparent {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      vertical-align: top;
      resize: none;
      outline: none;
      padding: 5px 5px 5px 5px;
      padding-left: 0;
      padding-right: 0;
      font-size: 16px;
      font-weight: 400;
      border-radius: 4px;
      border: none;
      background-color: transparent;
      color: #1f1f21;
      letter-spacing: 0;
      box-shadow: none;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      width: auto;
    }
    .textarea--transparent:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    .textarea--transparent::-webkit-input-placeholder {
      color: #999;
    }
    .textarea--transparent:-ms-input-placeholder {
      color: #999;
    }
    .textarea--transparent::-ms-input-placeholder {
      color: #999;
    }
    .textarea--transparent::placeholder {
      color: #999;
    }
    /*~
      name: Dialog
      category: Dialog
      elements: ons-dialog
      markup: |
        <div class="dialog-mask"></div>
        <div class="dialog">
          <div class="dialog-container">
            <p style="text-align:center;margin-top:40px;opacity:0.4;">Content</p>
          </div>
        </div>
    */
    .dialog {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
      margin: auto auto;
      overflow: hidden;
      min-width: 270px;
      min-height: 100px;
      text-align: left;
    }
    .dialog-container {
      height: inherit;
      min-height: inherit;
      overflow: hidden;
      border-radius: 4px;
      background-color: #f4f4f4;
      -webkit-mask-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC');
      color: ${primaryThemeColor};
    }
    .dialog-mask {
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .2);
    }
    /*~
      name: Material Dialog
      category: Dialog
      elements: ons-dialog
      markup: |
        <div class="dialog-mask dialog-mask--material"></div>
        <div class="dialog dialog--material">
          <div class="dialog dialog-container--material">
            <p style="margin-left:24px;margin-right:24px">The quick brown fox jumps over the lazy dog.</p>
          </div>
        </div>
    */
    .dialog--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      text-align: left;
      box-shadow:
          0 16px 24px 2px rgba(0, 0, 0, .14),
          0 6px 30px 5px rgba(0, 0, 0, .12),
          0 8px 10px -5px rgba(0, 0, 0, .4);
    }
    .dialog-container--material {
      border-radius: 2px;
      background-color: #ffffff;
      color: ${primaryThemeColor};
    }
    .dialog-mask--material {
      background-color: #000000;
      background-color: rgba(0, 0, 0, .3);
    }
    /*~
      name: Alert Dialog
      category: Alert Dialog
      elements: ons-alert-dialog
      markup: |
        <div class="alert-dialog-mask"></div>
        <div class="alert-dialog">
          <div class="alert-dialog-container">
            <div class="alert-dialog-title">Alert</div>
    
            <div class="alert-dialog-content">
              Hello World!
            </div>
    
            <div class="alert-dialog-footer">
              <button class="alert-dialog-button alert-dialog-button--primal">OK</button>
            </div>
          </div>
        </div>
    */
    .alert-dialog {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
      width: 270px;
      margin: auto;
      background-color: #f4f4f4;
      border-radius: 8px;
      overflow: visible;
      max-width: 95%;
      color: #1f1f21;
    }
    .alert-dialog-container {
      height: inherit;
      padding-top: 16px;
      overflow: hidden;
    }
    .alert-dialog-title {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-size: 17px;
      font-weight: 500;
      padding: 0 8px;
      text-align: center;
      color: #1f1f21;
    }
    .alert-dialog-content {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 4px 12px 8px;
      font-size: 14px;
      min-height: 36px;
      text-align: center;
      color: #1f1f21;
    }
    .alert-dialog-footer {
      width: 100%;
    }
    .alert-dialog-button {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      text-decoration: none;
      letter-spacing: 0;
      vertical-align: middle;
      border: none;
      border-top: 1px solid #ddd;
      font-size: 16px;
      padding: 0 8px;
      margin: 0;
      display: block;
      width: 100%;
      background-color: transparent;
      text-align: center;
      height: 44px;
      line-height: 44px;
      outline: none;
      color: ${primaryThemeColor};
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .alert-dialog-button {
        border-top: none;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top;
        background-image: linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%);
      }
    }
    .alert-dialog-button:active {
      background-color: #000000;
      background-color: rgba(0, 0, 0, .05);
    }
    .alert-dialog-button--primal {
      font-weight: 500;
    }
    .alert-dialog-footer--rowfooter {
      white-space: nowrap;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
              flex-wrap: wrap;
    }
    .alert-dialog-button--rowfooter {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
              flex: 1;
      display: block;
      width: 100%;
      border-left: 1px solid #ddd;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .alert-dialog-button--rowfooter {
        border-top: none;
        border-left: none;
        background-size: 100% 1px, 1px 100%;
        background-repeat: no-repeat;
        background-position: top, left;
        background-image:
          linear-gradient(0deg, transparent, transparent 50%, #ddd 50%),
          linear-gradient(90deg, transparent, transparent 50%, #ddd 50%);
      }
    }
    .alert-dialog-button--rowfooter:first-child {
      border-left: none;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .alert-dialog-button--rowfooter:first-child {
        border-top: none;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top, left;
        background-image: linear-gradient(0deg, transparent, transparent 50%, #ddd 50%);
      }
    }
    .alert-dialog-mask {
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .2);
    }
    /*~
      name: Alert Dialog without Title
      category: Alert Dialog
      elements: ons-alert-dialog
      markup: |
        <div class="alert-dialog-mask"></div>
        <div class="alert-dialog">
          <div class="alert-dialog-container">
            <div class="alert-dialog-content">
              Hello World!
            </div>
    
            <div class="alert-dialog-footer">
              <button class="alert-dialog-button alert-dialog-button--primal">OK</button>
            </div>
          </div>
        </div>
    */
    /*~
      name: Alert Dialog with Multiple Buttons
      category: Alert Dialog
      elements: ons-alert-dialog
      markup: |
        <div class="alert-dialog-mask"></div>
        <div class="alert-dialog">
          <div class="alert-dialog-container">
            <div class="alert-dialog-content">
              Hello World!
            </div>
    
            <div class="alert-dialog-footer">
              <button class="alert-dialog-button">Cancel</button>
              <button class="alert-dialog-button alert-dialog-button--primal">OK</button>
            </div>
          </div>
        </div>
    */
    /*~
      name: Alert Dialog with Multiple Buttons 2
      category: Alert Dialog
      elements: ons-alert-dialog
      markup: |
        <div class="alert-dialog-mask"></div>
        <div class="alert-dialog">
          <div class="alert-dialog-container">
            <div class="alert-dialog-title">Alert</div>
    
            <div class="alert-dialog-content">
              Hello World!
            </div>
    
            <div class="alert-dialog-footer alert-dialog-footer--rowfooter">
              <button class="alert-dialog-button alert-dialog-button--rowfooter">Left</button>
              <button class="alert-dialog-button alert-dialog-button--primal alert-dialog-button--rowfooter">Center</button>
              <button class="alert-dialog-button alert-dialog-button--rowfooter">Right</button>
            </div>
          </div>
        </div>
    */
    /*~
      name: Material Alert Dialog
      category: Alert Dialog
      elements: ons-alert-dialog
      markup: |
        <div class="alert-dialog-mask alert-dialog-mask--material"></div>
        <div class="alert-dialog alert-dialog--material">
          <div class="alert-dialog-container alert-dialog-container--material">
            <div class="alert-dialog-title alert-dialog-title--material">
              Dialog title
            </div>
            <div class="alert-dialog-content alert-dialog-content--material">
              Some dialog content.
            </div>
            <div class="alert-dialog-footer alert-dialog-footer--material">
              <button class="alert-dialog-button alert-dialog-button--material">OK</button>
              <button class="alert-dialog-button alert-dialog-button--material">CANCEL</button>
            </div>
          </div>
        </div>
    */
    .alert-dialog--material {
      border-radius: 2px;
      background-color: #ffffff;
    }
    .alert-dialog-container--material {
      padding: 22px 0 0 0;
      box-shadow:
          0 16px 24px 2px rgba(0, 0, 0, .14),
          0 6px 30px 5px rgba(0, 0, 0, .12),
          0 8px 10px -5px rgba(0, 0, 0, .4);
    }
    .alert-dialog-title--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      text-align: left;
      font-size: 20px;
      font-weight: 500;
      padding: 0 24px;
      color: #31313a;
    }
    .alert-dialog-content--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      text-align: left;
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      padding: 0 24px;
      margin: 24px 0 10px 0;
      min-height: 0;
      color: #31313a;
      color: rgba(49, 49, 58, .85);
    }
    .alert-dialog-footer--material {
      display: block;
      padding: 0;
      height: 52px;
      box-sizing: border-box;
      margin: 0;
      line-height: 1;
    }
    .alert-dialog-button--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      text-transform: uppercase;
      display: inline-block;
      width: auto;
      float: right;
      background: none;
      border: none;
      border-radius: 2px;
      font-size: 14px;
      font-weight: 500;
      outline: none;
      height: 36px;
      line-height: 36px;
      padding: 0 8px;
      margin: 8px 8px 8px 0;
      box-sizing: border-box;
      min-width: 50px;
      color: #37474f;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .alert-dialog-button--material {
        background: none;
      }
    }
    .alert-dialog-button--material:active {
      background-color: transparent;
      background-color: initial;
    }
    /* stylelint-disable */
    .alert-dialog-button--rowfooter--material,
    .alert-dialog-button--rowfooter--material:first-child { /* stylelint-enable */
      border: 0;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .alert-dialog-button--rowfooter--material,
    .alert-dialog-button--rowfooter--material:first-child {
        background: none;
      }
    }
    /* stylelint-disable */
    .alert-dialog-button--primal--material { /* stylelint-enable */
      font-weight: 500;
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .alert-dialog-button--primal--material {
        background: none;
      }
    }
    .alert-dialog-mask--material {
      background-color: #000000;
      background-color: rgba(0, 0, 0, .3);
    }
    /*~
      name: Popover
      category: Popover
      elements: ons-popover
      markup: |
        <div class="popover-mask"></div>
        <div class="popover popover--bottom" style="bottom: 20px; left: 65px;">
          <div class="popover__arrow popover--bottom__arrow" style="left: 110px;"></div>
          <div class="popover__content popover--bottom__content">
            <div style="text-align:center;opacity:0.8;margin-top:40px">Content</div>
          </div>
        </div>
    */
    /*~
      name: Popover(top)
      category: Popover
      elements: ons-popover
      markup: |
        <div class="popover-mask"></div>
        <div class="popover popover--top" style="top: 20px; left: 50px;">
          <div class="popover__arrow popover--top__arrow" style="margin-left: 110px;"></div>
          <div class="popover__content popover--top__content">
            <div style="text-align: center; opacity: 0.8; margin-top: 40px">Content</div>
          </div>
        </div>
    */
    /*~
      name: Popover(left)
      category: Popover
      elements: ons-popover
      markup: |
        <div class="popover-mask"></div>
        <div class="popover popover--right" style="top: 20px; right: 20px;">
          <div class="popover__arrow popover--right__arrow" style="bottom: 50px;"></div>
          <div class="popover__content popover--right__content">
            <div style="text-align: center; opacity: 0.8; margin-top: 40px">Content</div>
          </div>
        </div>
    */
    /*~
      name: Popover(right)
      category: Popover
      elements: ons-popover
      markup: |
        <div class="popover-mask"></div>
        <div class="popover popover--left" style="top: 20px;left: 20px;">
          <div class="popover__arrow popover--left__arrow" style="top: 50px;"></div>
          <div class="popover__content popover--left__content">
            <div style="text-align: center; opacity: 0.8; margin-top: 40px">Content</div>
          </div>
        </div>
    */
    .popover {
      position: absolute;
      z-index: 20001;
    }
    .popover--bottom {
      bottom: 0;
    }
    .popover--top {
      top: 0;
    }
    .popover--left {
      left: 0;
    }
    .popover--right {
      right: 0;
    }
    .popover-mask {
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .2);
      position: absolute;
      z-index: 19999;
    }
    .popover__content {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: block;
      width: 220px;
      overflow: auto;
      min-height: 100px;
      max-height: 100%;
      background-color: white;
      border-radius: 8px;
      color: #1f1f21;
      pointer-events: auto;
    }
    .popover--top__content {
    
    }
    .popover--bottom__content {
    
    }
    .popover--left__content {
    
    }
    .popover--right__content {
    
    }
    .popover__arrow {
      position: absolute;
      width: 18px;
      height: 18px;
      -webkit-transform-origin: 50% 50% 0;
              transform-origin: 50% 50% 0;
      background-color: transparent;
      background-image: linear-gradient(45deg, white, white 50%, transparent 50%);
      border-radius: 0 0 0 4px;
      margin: 0;
      z-index: 20001;
    }
    /* NOTE: If you changed this properties, you should check if ons-popover is broken. */
    .popover--bottom__arrow {
      -webkit-transform: translateY(6px) translateX(-9px) rotate(-45deg);
              transform: translateY(6px) translateX(-9px) rotate(-45deg);
      bottom: 0;
      margin-right: -18px;
    }
    .popover--top__arrow {
      -webkit-transform: translateY(-6px) translateX(-9px) rotate(135deg);
              transform: translateY(-6px) translateX(-9px) rotate(135deg);
      top: 0;
      margin-right: -18px;
    }
    .popover--left__arrow {
      -webkit-transform: translateX(-6px) translateY(-9px) rotate(45deg);
              transform: translateX(-6px) translateY(-9px) rotate(45deg);
      left: 0;
      margin-bottom: -18px;
    }
    .popover--right__arrow {
      -webkit-transform: translateX(6px) translateY(-9px) rotate(225deg);
              transform: translateX(6px) translateY(-9px) rotate(225deg);
      right: 0;
      margin-bottom: -18px;
    }
    /*~
      name: Material Popover
      category: Popover
      elements: ons-popover
      markup: |
        <div class="popover-mask popover-mask--material"></div>
        <div class="popover popover--material popover--left" style="top: 50px; left: 65px;">
          <div class="popover__arrow popover--material__arrow popover--left__arrow"></div>
          <div class="popover__content popover--material__content popover--left__content">
            <div style="text-align: center; opacity: 0.8; margin-top: 40px">Content</div>
          </div>
        </div>
    */
    .popover--material {
    }
    .popover-mask--material {
      background-color: transparent;
    }
    .popover--material__content {
      background-color: #fafafa;
      border-radius: 2px;
      color: #1f1f21;
      box-shadow:
          0 2px 2px 0 rgba(0, 0, 0, .14),
          0 1px 5px 0 rgba(0, 0, 0, .12),
          0 3px 1px -2px rgba(0, 0, 0, .2);
    }
    .popover--material__arrow {
      display: none;
    }
    /*~
      name: Progress Bar
      category: Progress Bar
      elements: ons-progress-bar
      markup: |
        <div class="progress-bar">
          <div class="progress-bar__primary" style="width: 30%"></div>
        </div>
        <br />
        <div class="progress-bar">
          <div class="progress-bar__primary" style="width:20%"></div>
          <div class="progress-bar__secondary" style="width:76%"></div>
        </div>
        <br />
        <div class="progress-bar progress-bar--indeterminate">
        </div>
    */
    .progress-bar {
      position: relative;
      height: 2px;
      display: block;
      width: 100%;
      background-color: transparent;
      background-clip: padding-box;
      margin: 0;
      overflow: hidden;
      border-radius: 4px;
    }
    .progress-bar__primary,
    .progress-bar__secondary {
      position: absolute;
      background-color: ${primaryThemeColor};
      top: 0;
      bottom: 0;
      transition: width .3s linear;
      z-index: 100;
      border-radius: 4px;
    }
    .progress-bar__secondary {
      background-color: ${primaryThemeColor};
      background-color: rgba(0, 98, 130, .56);
      z-index: 0;
    }
    .progress-bar--indeterminate:before {
      content: '';
      position: absolute;
      background-color: ${primaryThemeColor};
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
              animation: progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      border-radius: 4px;
    }
    .progress-bar--indeterminate:after {
      content: '';
      position: absolute;
      background-color: ${primaryThemeColor};
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
              animation: progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
      -webkit-animation-delay: 1.15s;
              animation-delay: 1.15s;
      border-radius: 4px;
    }
    @-webkit-keyframes progress-bar__indeterminate {
      0% {
        left: -35%;
        right: 100%;
      }
    
      60% {
        left: 100%;
        right: -90%;
      }
    
      100% {
        left: 100%;
        right: -90%;
      }
    }
    @keyframes progress-bar__indeterminate {
      0% {
        left: -35%;
        right: 100%;
      }
    
      60% {
        left: 100%;
        right: -90%;
      }
    
      100% {
        left: 100%;
        right: -90%;
      }
    }
    @-webkit-keyframes progress-bar__indeterminate-short {
      0% {
        left: -200%;
        right: 100%;
      }
    
      60% {
        left: 107%;
        right: -8%;
      }
    
      100% {
        left: 107%;
        right: -8%;
      }
    }
    @keyframes progress-bar__indeterminate-short {
      0% {
        left: -200%;
        right: 100%;
      }
    
      60% {
        left: 107%;
        right: -8%;
      }
    
      100% {
        left: 107%;
        right: -8%;
      }
    }
    /*~
      name: Material Progress Bar
      category: Progress Bar
      elements: ons-progress-bar
      markup: |
        <div class="progress-bar progress-bar--material">
          <div class="progress-bar__primary progress-bar--material__primary" style="width: 30%"></div>
        </div>
        <br />
        <div class="progress-bar progress-bar--material">
          <div class="progress-bar__primary progress-bar--material__primary" style="width:20%"></div>
          <div class="progress-bar__secondary progress-bar--material__secondary" style="width:76%"></div>
        </div>
        <br />
        <div class="progress-bar progress-bar--material progress-bar--indeterminate">
        </div>
    */
    .progress-bar--material {
      height: 4px;
      background-color: transparent;
      border-radius: 0;
    }
    .progress-bar--material__primary,
    .progress-bar--material__secondary {
      background-color: ${primaryThemeColor};
      border-radius: 0;
    }
    .progress-bar--material__secondary {
      background-color: ${primaryThemeColor};
      background-color: rgba(0, 98, 130, .5);
      z-index: 0;
    }
    .progress-bar--material.progress-bar--indeterminate:before { /* FIXME */
      background-color: ${primaryThemeColor};
      border-radius: 0;
    }
    .progress-bar--material.progress-bar--indeterminate:after { /* FIXME */
      background-color: ${primaryThemeColor};
      border-radius: 0;
    }
    /*~
      name: Progress Circle
      category: Progress Circle
      elements: ons-progress-circular
      markup: |
        <svg class="progress-circular progress-circular--indeterminate">
          <circle class="progress-circular__background"/>
          <circle class="progress-circular__primary progress-circular--indeterminate__primary"/>
          <circle class="progress-circular__secondary progress-circular--indeterminate__secondary"/>
        </svg>
    
        <svg class="progress-circular">
          <circle class="progress-circular__background"/>
          <circle class="progress-circular__secondary" style="stroke-dasharray: 140%, 251.32%"/>
          <circle class="progress-circular__primary" style="stroke-dasharray: 100%, 251.32%"/>
        </svg>
    
        <svg class="progress-circular">
          <circle class="progress-circular__background"/>
          <circle class="progress-circular__primary" style="stroke-dasharray: 80%, 251.32%"/>
        </svg>
    */
    .progress-circular {
      height: 32px;
      position: relative;
      width: 32px;
      -webkit-transform: rotate(270deg);
              transform: rotate(270deg);
      -webkit-animation: none;
              animation: none;
    }
    .progress-circular__background,
    .progress-circular__primary,
    .progress-circular__secondary {
      cx: 50%;
      cy: 50%;
      r: 40%;
      -webkit-animation: none;
              animation: none;
      fill: none;
      stroke-width: 5%;
      stroke-miterlimit: 10;
    }
    .progress-circular__background {
      stroke: transparent;
    }
    .progress-circular__primary {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke: ${primaryThemeColor};
      transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .progress-circular__secondary {
      stroke: #65adff;
    }
    .progress-circular--indeterminate {
      -webkit-animation: progress__rotate 2s linear infinite;
              animation: progress__rotate 2s linear infinite;
      -webkit-transform: none;
              transform: none;
    }
    .progress-circular--indeterminate__primary {
      -webkit-animation: progress__dash 1.5s ease-in-out infinite;
              animation: progress__dash 1.5s ease-in-out infinite;
    }
    .progress-circular--indeterminate__secondary {
      display: none;
    }
    @-webkit-keyframes progress__rotate {
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
    @keyframes progress__rotate {
      100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
      }
    }
    @-webkit-keyframes progress__dash {
      0% {
        stroke-dasharray: 10%, 241.32%;
        stroke-dashoffset: 0;
      }
    
      50% {
        stroke-dasharray: 201%, 50.322%;
        stroke-dashoffset: -100%;
      }
    
      100% {
        stroke-dasharray: 10%, 241.32%;
        stroke-dashoffset: -251.32%;
      }
    }
    @keyframes progress__dash {
      0% {
        stroke-dasharray: 10%, 241.32%;
        stroke-dashoffset: 0;
      }
    
      50% {
        stroke-dasharray: 201%, 50.322%;
        stroke-dashoffset: -100%;
      }
    
      100% {
        stroke-dasharray: 10%, 241.32%;
        stroke-dashoffset: -251.32%;
      }
    }
    /*~
      name: Material Progress Circle
      category: Progress Circle
      elements: ons-progress-circular
      markup: |
        <svg class="progress-circular progress-circular--material progress-circular--indeterminate">
          <circle class="progress-circular__background progress-circular--material__background"/>
          <circle class="progress-circular__primary progress-circular--material__primary progress-circular--indeterminate__primary"/>
          <circle class="progress-circular__secondary progress-circular--material__secondary progress-circular--indeterminate__secondary"/>
        </svg>
    
        <svg class="progress-circular progress-circular--material">
          <circle class="progress-circular__background progress-circular--material__background"/>
          <circle class="progress-circular__secondary progress-circular--material__secondary" style="stroke-dasharray: 140%, 251.32%"/>
          <circle class="progress-circular__primary progress-circular--material__primary" style="stroke-dasharray: 100%, 251.32%"/>
        </svg>
    
        <svg class="progress-circular progress-circular--material">
          <circle class="progress-circular__background progress-circular--material__background"/>
          <circle class="progress-circular__primary progress-circular--material__primary" style="stroke-dasharray: 80%, 251.32%"/>
        </svg>
    */
    .progress-circular--material__background,
    .progress-circular--material__primary,
    .progress-circular--material__secondary {
      stroke-width: 9%;
    }
    .progress-circular--material__background {
      stroke: transparent;
    }
    .progress-circular--material__primary {
      stroke: ${primaryThemeColor};
    }
    .progress-circular--material__secondary {
      stroke: rgba(0, 98, 130, .5);
    }
    /*~
      name: Fab
      category: Fab
      elements: ons-fab
      markup: |
        <button class="fab"><i class="zmdi zmdi-car"></i></button>
        <button class="fab" disabled><i class="zmdi zmdi-car"></i></button>
    */
    /* stylelint-disable */
    ons-fab.fab, ons-speed-dial-item.fab, button.fab {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      width: 56px;
      height: 56px;
      text-decoration: none;
      font-size: 25px;
      line-height: 56px;
      letter-spacing: 0;
      color: #ffffff;
      vertical-align: middle;
      text-align: center;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 3px 6px rgba(0, 0, 0, .12);
      transition: all 0.1s linear;
    }
    ons-fab.fab:active, ons-speed-dial-item.fab:active, button.fab:active {
      box-shadow: 0 3px 6 rgba(0, 0, 0, .12);
      background-color: ${primaryThemeColor};
      background-color: rgba(0, 98, 130, 0.7);
      transition: all 0.2s ease;
      box-shadow: 0 0 6 rgba(0, 0, 0, .12);
    }
    ons-fab.fab:focus, ons-speed-dial-item.fab:focus, button.fab:focus {
      outline: 0;
    }
    ons-fab.fab:disabled,
        ons-fab.fab[disabled],
        ons-speed-dial-item.fab:disabled,
        ons-speed-dial-item.fab[disabled],
        button.fab:disabled,
        button.fab[disabled] {
      background-color: #000000;
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: none;
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    ons-fab.fab__icon, ons-speed-dial-item.fab__icon, button.fab__icon {
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: block;
      border-radius: 100%;
      padding: 0;
      z-index: 100;
      line-height: 56px;
    }
    /* stylelint-enable */
    /*~
      name: Material Fab
      category: Fab
      elements: ons-fab
      markup: |
        <button class="fab fab--material"><i class="zmdi zmdi-car"></i></button>
        <button class="fab fab--material" disabled><i class="zmdi zmdi-car"></i></button>
    */
    /* stylelint-disable */
    ons-fab.fab--material, ons-speed-dial-item.fab--material, button.fab--material {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      width: 56px;
      height: 56px;
      text-decoration: none;
      font-size: 25px;
      line-height: 56px;
      letter-spacing: 0;
      color: #ffffff;
      vertical-align: middle;
      text-align: center;
      background-color: ${primaryThemeColor};
      border: 0 solid currentColor;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 3px 6px rgba(0, 0, 0, .12);
      transition: all 0.1s linear;
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      width: 56px;
      height: 56px;
      text-decoration: none;
      font-size: 25px;
      line-height: 56px;
      color: ${primaryThemeColor};
      background-color: #ffffff;
      box-shadow:
          0 4px 5px 0 rgba(0, 0, 0, .14),
          0 1px 10px 0 rgba(0, 0, 0, .12),
          0 2px 4px -1px rgba(0, 0, 0, .4);
      transition: all 0.2s ease-in-out;
    }
    ons-fab.fab--material:active, ons-speed-dial-item.fab--material:active, button.fab--material:active {
      box-shadow:
          0 8px 10px 1px rgba(0, 0, 0, .14),
          0 3px 14px 2px rgba(0, 0, 0, .12),
          0 5px 5px -3px rgba(0, 0, 0, .4);
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, .75);
      transition: all 0.2s ease;
    }
    ons-fab.fab--material:focus, ons-speed-dial-item.fab--material:focus, button.fab--material:focus {
      outline: 0;
    }
    ons-fab.fab--material__icon, ons-speed-dial-item.fab--material__icon, button.fab--material__icon {
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: block;
      border-radius: 100%;
      padding: 0;
      z-index: 100;
      line-height: 56px;
    }
    ons-fab.fab--material:disabled,
      ons-fab.fab--material[disabled],
      ons-speed-dial-item.fab--material:disabled,
      ons-speed-dial-item.fab--material[disabled],
      button.fab--material:disabled,
      button.fab--material[disabled] {
      background-color: #000000;
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: none;
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
    }
    /* stylelint-enable */
    /*~
      name: Fab Mini
      category: Fab
      elements: ons-fab
      markup: |
        <button class="fab fab--mini"><i class="zmdi zmdi-plus"></i></button>
        <button class="fab fab--mini" disabled><i class="zmdi zmdi-plus"></i></button>
    */
    /*~
      name: Material Fab Mini
      category: Fab
      elements: ons-fab
      markup: |
        <button class="fab fab--material fab--mini"><i class="zmdi zmdi-plus"></i></button>
        <button class="fab fab--material fab--mini" disabled><i class="zmdi zmdi-plus"></i></button>
    */
    /* stylelint-disable */
    ons-fab.fab--mini, ons-speed-dial-item.fab--mini, button.fab--mini {
      width: 40px;
      height: 40px;
      line-height: 40px;
    }
    ons-fab.fab--mini__icon, ons-speed-dial-item.fab--mini__icon, button.fab--mini__icon {
      line-height: 40px;
    }
    ons-fab.speed-dial__item,  ons-speed-dial-item.speed-dial__item,  button.speed-dial__item  {
      position: absolute;
      -webkit-transform: scale(0);
              transform: scale(0);
    }
    /* stylelint-enable */
    /* stylelint-disable */
    ons-fab.fab--top__right, button.fab--top__right, .speed-dial.fab--top__right {
      top: 20px;
      bottom: auto;
      right: 20px;
      left: auto;
      position: absolute;
    }
    ons-fab.fab--bottom__right, button.fab--bottom__right, .speed-dial.fab--bottom__right {
      top: auto;
      bottom: 20px;
      right: 20px;
      left: auto;
      position: absolute;
    }
    ons-fab.fab--top__left, button.fab--top__left, .speed-dial.fab--top__left {
      top: 20px;
      bottom: auto;
      right: auto;
      left: 20px;
      position: absolute;
    }
    ons-fab.fab--bottom__left, button.fab--bottom__left, .speed-dial.fab--bottom__left {
      top: auto;
      bottom: 20px;
      right: auto;
      left: 20px;
      position: absolute;
    }
    ons-fab.fab--top__center, button.fab--top__center, .speed-dial.fab--top__center {
      top: 20px;
      bottom: auto;
      margin-left: -28px;
      left: 50%;
      right: auto;
      position: absolute;
    }
    ons-fab.fab--bottom__center, button.fab--bottom__center, .speed-dial.fab--bottom__center {
      top: auto;
      bottom: 20px;
      margin-left: -28px;
      left: 50%;
      right: auto;
      position: absolute;
    }
    /* stylelint-enable */
    /*~
      name: Modal
      category: Modal
      elements: ons-modal
      markup: |
        <div class="modal">
          <div class="modal__content">
            Message Text
          </div>
        </div>
    */
    .modal {
      box-sizing: border-box;
      background-clip: padding-box;
      white-space: nowrap;
      overflow: hidden;
      word-spacing: 0;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      box-sizing: border-box;
      background-clip: padding-box;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      overflow: hidden;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .7);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: table;
      z-index: 2147483647;
    }
    .modal__content {
      box-sizing: border-box;
      background-clip: padding-box;
      white-space: nowrap;
      overflow: hidden;
      word-spacing: 0;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      line-height: normal;
      box-sizing: border-box;
      background-clip: padding-box;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      color: #fff;
      white-space: normal;
    }
    /*~
      name: Select Input
      category: Select Input
      markup: |
        <select class="select-input">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
    
        &nbsp;
    
        <select class="select-input" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
    */
    .select-input {
      box-sizing: border-box;
      background-clip: padding-box;
      padding: 0;
      margin: 0;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      vertical-align: top;
      outline: none;
      line-height: 1;
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      border: none;
      background-color: transparent;
      position: relative;
      font-size: 17px;
      height: 32px;
      line-height: 32px;
      border-color: #333333;
      border-color: rgba(51, 51, 51, .2);
      color: #1f1f21;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      display: inline-block;
      border-radius: 0;
      border: none;
      padding: 0 20px 0 0;
      background-color: transparent;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=');
      background-repeat: no-repeat;
      background-position: right center;
      border-bottom: none;
    }
    .select-input::-ms-clear {
      display: none;
    }
    .select-input::-webkit-input-placeholder {
      color: #999;
    }
    .select-input:-ms-input-placeholder {
      color: #999;
    }
    .select-input::-ms-input-placeholder {
      color: #999;
    }
    .select-input::placeholder {
      color: #999;
    }
    .select-input:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
      border: none;
      background-color: transparent;
    }
    .select-input:disabled::-webkit-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .select-input:disabled:-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .select-input:disabled::-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .select-input:disabled::placeholder {
      border: none;
      background-color: transparent;
      color: #999;
    }
    .select-input:invalid {
      border: none;
      background-color: transparent;
      color: #1f1f21;
    }
    .select-input[multiple] {
      height: 64px;
    }
    /*~
      name: Material Select Input
      category: Select Input
      markup: |
        <select class="select-input select-input--material">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
    
        &nbsp;
    
        <select class="select-input select-input--material" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
    */
    .select-input--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      color: #1f1f21;
      font-size: 15px;
      background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='), linear-gradient(to top, rgba(0, 0, 0, 0.12) 50%, rgba(0, 0, 0, 0.12) 50%);
      background-size: auto, 100% 1px;
      background-repeat: no-repeat;
      background-position: right center, left bottom;
      border: none;
      font-weight: 400;
      -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0); /* prevent ios flicker */
    }
    .select-input--material__label {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      color: #000000;
      color: rgba(0, 0, 0, .81);
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 16px;
      pointer-events: none;
    }
    .select-input--material__label--active {
      color: #000000;
      color: rgba(0, 0, 0, .15);
      -webkit-transform: translate(0, -75%) scale(0.75);
              transform: translate(0, -75%) scale(0.75);
      -webkit-transform-origin: left top;
              transform-origin: left top;
      transition: color 0.1s ease-in, -webkit-transform 0.1s ease-in;
      transition: transform 0.1s ease-in, color 0.1s ease-in;
      transition: transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in;
    }
    .select-input--material::-webkit-input-placeholder {
      color: #000000;
      color: rgba(0, 0, 0, .81);
      line-height: 20px;
    }
    .select-input--material:-ms-input-placeholder {
      color: #000000;
      color: rgba(0, 0, 0, .81);
      line-height: 20px;
    }
    .select-input--material::-ms-input-placeholder {
      color: #000000;
      color: rgba(0, 0, 0, .81);
      line-height: 20px;
    }
    .select-input--material::placeholder {
      color: #000000;
      color: rgba(0, 0, 0, .81);
      line-height: 20px;
    }
    @-webkit-keyframes material-select-input-animate {
      0% {
        background-size: 0% 2px, 100% 2px;
      }
    
      100% {
        background-size: 100% 2px, 100% 2px;
      }
    }
    @keyframes material-select-input-animate {
      0% {
        background-size: 0% 2px, 100% 2px;
      }
    
      100% {
        background-size: 100% 2px, 100% 2px;
      }
    }
    /*~
      name: Underbar Select Input
      category: Select Input
      markup: |
        <select class="select-input select-input--underbar">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
    
        &nbsp;
    
        <select class="select-input select-input--underbar" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
    */
    .select-input--underbar {
      border: none;
      border-bottom: 1px solid rgba(51, 51, 51, .2);
    }
    .select-input--underbar:disabled {
      opacity: 0.3;
      cursor: default;
      pointer-events: none;
      border: none;
      background-color: transparent;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(51, 51, 51, .2);
    }
    .select-input--underbar:disabled::-webkit-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .select-input--underbar:disabled:-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .select-input--underbar:disabled::-ms-input-placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .select-input--underbar:disabled::placeholder {
      border: none;
      background-color: transparent;
      color: #999;
      border: none;
      background-color: transparent;
    }
    .select-input--underbar:invalid {
      border: none;
      background-color: transparent;
      color: #1f1f21;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(51, 51, 51, .2);
    }
    /*~
      name: Action Sheet
      category: Action Sheet
      markup: |
        <div class="action-sheet-mask"></div>
        <div class="action-sheet">
          <div class="action-sheet-title">Title</div>
          <button class="action-sheet-button">Label</button>
          <button class="action-sheet-button">Cancel</button>
        </div>
    */
    /*~
      name: Action Sheet with Delete Label
      category: Action Sheet
      markup: |
        <div class="action-sheet-mask"></div>
        <div class="action-sheet">
          <button class="action-sheet-button">Label</button>
          <button class="action-sheet-button action-sheet-button--destructive">Delete Label</button>
          <button class="action-sheet-button">Cancel</button>
        </div>
    */
    .action-sheet {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      cursor: default;
      position: absolute;
      left: 10px; /* iOS 9, 10, 11 */
      right: 10px; /* iOS 9, 10, 11 */
      bottom: 10px; /* iOS 9, 10, 11 */
      z-index: 2;
    }
    .action-sheet-button {
      box-sizing: border-box;
      height: 56px;
      font-size: 20px;
      text-align: center;
      color: ${primaryThemeColor};
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, .9);
      border-radius: 0;
      line-height: 56px;
      border: none;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      display: block;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .action-sheet-button {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1) 50%, transparent 50%);
      }
    }
    .action-sheet-button:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    .action-sheet-button:active {
      background-color: #e9e9e9;
      background-image: none;
    }
    .action-sheet-button:focus {
      outline: none;
    }
    .action-sheet-button:nth-last-of-type(2) {
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      background-image: none;
    }
    .action-sheet-button:last-of-type {
      border-radius: 12px;
      margin: 8px 0 0 0; /* iOS 9, 10, 11 */
      background-color: #fff;
      background-image: none;
      font-weight: 600;
    }
    .action-sheet-button:last-of-type:active {
      background-color: #e9e9e9;
    }
    .action-sheet-button--destructive {
      color: #b5cbd1;
      color: rgba(181, 203, 209, 1);
    }
    .action-sheet-title {
      box-sizing: border-box;
      height: 56px;
      font-size: 13px;
      color: #8f8e94;
      text-align: center;
      background-color: #ffffff;
      background-color: rgba(255, 255, 255, .9);
      line-height: 56px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      background-image: linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1) 100%);
    }
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    
      .action-sheet-title {
        background-image: linear-gradient(0deg, rgba(0, 0, 0, .1), rgba(0, 0, 0, .1) 50%, transparent 50%);
      }
    }
    .action-sheet-title:first-child {
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    .action-sheet-icon {
      display: none;
    }
    .action-sheet-mask {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .1);
      z-index: 1;
    }
    /*~
      name: Material Action Sheet
      category: Action Sheet
      markup: |
        <div class="action-sheet-mask action-sheet-mask--material"></div>
        <div class="action-sheet action-sheet--material">
          <button class="action-sheet-button action-sheet-button--material"><i class="ion-android-checkbox-blank action-sheet-icon--material"></i>Label</button>
          <button class="action-sheet-button action-sheet-button--material"><i class="ion-android-checkbox-blank action-sheet-icon--material"></i>Label</button>
          <button class="action-sheet-button action-sheet-button--material"><i class="ion-android-close action-sheet-icon--material"></i>Cancel</button>
        </div>
    */
    /*~
      name: Material Action Sheet with Title
      category: Action Sheet
      markup: |
        <div class="action-sheet-mask action-sheet-mask--material"></div>
        <div class="action-sheet action-sheet--material">
          <div class="action-sheet-title action-sheet-title--material">Title</div>
          <button class="action-sheet-button action-sheet-button--material"><i class="ion-android-checkbox-blank action-sheet-icon--material"></i>Label</button>
          <button class="action-sheet-button action-sheet-button--material"><i class="ion-android-close action-sheet-icon--material"></i>Cancel</button>
        </div>
    */
    .action-sheet--material {
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow:
          0 16px 24px 2px rgba(0, 0, 0, .14),
          0 6px 30px 5px rgba(0, 0, 0, .12),
          0 8px 10px -5px rgba(0, 0, 0, .4);
    }
    .action-sheet-title--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      border-radius: 0;
      background-image: none;
      text-align: left;
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      padding: 0 0 0 16px;
      color: #686868;
      background-color: white;
      font-weight: 400;
    }
    .action-sheet-title--material:first-child {
      border-radius: 0;
    }
    .action-sheet-button--material {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      border-radius: 0;
      background-image: none;
      height: 52px;
      line-height: 52px;
      text-align: left;
      font-size: 16px;
      padding: 0 0 0 16px;
      color: #686868;
      font-weight: 400;
      background-color: white;
    }
    .action-sheet-button--material:first-child {
      border-radius: 0;
    }
    .action-sheet-button--material:nth-last-of-type(2) {
      border-radius: 0;
    }
    .action-sheet-button--material:last-of-type {
      margin: 0;
      border-radius: 0;
      font-weight: 400;
      background-color: white;
    }
    .action-sheet-icon--material {
      display: inline-block;
      float: left;
      height: 52px;
      line-height: 52px;
      margin-right: 32px;
      font-size: 26px;
      width: 0.8em;
      text-align: center;
    }
    .action-sheet-mask--material {
      background-color: #000000;
      background-color: rgba(0, 0, 0, .2);
    }
    /*~
      name: Card
      category: Card
      markup: |
        <div style="height: 200px; padding: 1px 0 0 0;">
          <div class="card">
            <div class="card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
    */
    .card {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      box-shadow: 0 1px 2px rgba(0, 0, 0, .12);
      border-radius: 8px;
      background-color: white;
      box-sizing: border-box;
      display: block;
      margin: 8px;
      padding: 16px;
      text-align: left;
      word-wrap: break-word;
    }
    .card__content {
      margin: 0;
      font-size: 14px;
      line-height: 1.4;
      color: #1F1F21;
    }
    /*~
      name: Card with Title
      category: Card
      markup: |
        <div style="height: 200px; padding: 1px 0 0 0;">
          <div class="card">
            <h2 class="card__title">Card Title</h2>
            <div class="card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
    */
    .card__title {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      font-weight: 400;
      font-size: 20px;
      margin: 4px 0 8px 0;
      padding: 0;
      display: block;
      box-sizing: border-box;
    }
    /*~
      name: Material Card
      category: Card
      markup: |
        <div style="height: 200px; padding: 1px 0 0 0;">
          <div class="card card--material">
            <div class="card__content card--material__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
    */
    .card--material {
      background-color: white;
      border-radius: 2px;
      box-shadow:
          0 2px 2px 0 rgba(0, 0, 0, .14),
          0 1px 5px 0 rgba(0, 0, 0, .12),
          0 3px 1px -2px rgba(0, 0, 0, .2);
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
    }
    .card--material__content {
      font-size: 14px;
      line-height: 1.4;
      color: #000000;
      color: rgba(0, 0, 0, .54);
    }
    /*~
      name: Material Card with Title
      category: Card
      markup: |
        <div style="height: 200px; padding: 1px 0 0 0;">
          <div class="card card--material">
            <div class="card__title card--material__title">Card Title</div>
            <div class="card__content card--material__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
        </div>
    */
    .card--material__title {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      font-size: 24px;
      margin: 8px 0 12px 0;
    }
    /*~
      name: Toast
      category: Toast
      markup: |
        <div class="toast">
          <div class="toast__message">Message Message Message Message Message Message</div>
          <button class="toast__button">ACTION</button>
        </div>
    */
    .toast {
      font-family: -apple-system, 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-weight: 400;
      position: absolute;
      z-index: 2;
      left: 8px;
      right: 8px;
      bottom: 0;
      margin: 8px 0;
      border-radius: 8px;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .8);
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      min-height: 48px;
      line-height: 1.5;
      box-sizing: border-box;
      padding: 16px 16px;
    }
    .toast__message {
      font-size: 14px;
      color: white;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
              flex-grow: 1;
      text-align: left;
      margin: 0 16px 0 0;
      white-space: normal;
    }
    .toast__button {
      font-size: 14px;
      color: white;
      -webkit-box-flex: 0;
      -webkit-flex-grow: 0;
              flex-grow: 0;
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      border: none;
      background-color: transparent;
      cursor: default;
      text-transform: uppercase;
    }
    .toast__button:focus {
      outline: none;
    }
    .toast__button:active {
      opacity: 0.4;
    }
    /*~
      name: Material Toast
      category: Toast
      markup: |
        <div class="toast toast--material">
          <div class="toast__message toast--material__message">Message Message Message Message Message Message</div>
          <button class="toast__button toast--material__button">ACTION</button>
        </div>
    */
    .toast--material {
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      background-color: #000000;
      background-color: rgba(0, 0, 0, .8);
      border-radius: 0;
      padding: 16px 24px;
    }
    .toast--material__message {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      margin: 0 24px 0 0;
    }
    .toast--material__button {
      font-family: 'Roboto', 'Noto', sans-serif;
      -webkit-font-smoothing: antialiased;
      font-weight: 400;
      color: #bbdefb;
    }
    /* ------- */
    /* Default */
    /* ------- */
    /* All toolbar */
    .toolbar {
      top: 0;
      box-sizing: border-box;
      padding-top: 0;
    }
    .bottom-bar {
      bottom: 0;
      box-sizing: border-box;
      padding-bottom: 0;
    }
    /* All page__background with a ordinal toolbar */
    .toolbar+.page__background {
      top: 44px;
    }
    /* All page__content without toolbars */
    .page__content {
      top: 0;
      padding-top: 0;
    
      bottom: 0;
    }
    /* All page__content with a toolbar */
    .toolbar+.page__background+.page__content {
      top: 44px;
      padding-top: 0;
    }
    /* All page__content with a bottom-bar */
    .page-with-bottom-toolbar > .page__content {
      bottom: 44px;
    }
    /* -------- */
    /* Material */
    /* -------- */
    /* All page__background with a material toolbar */
    .toolbar.toolbar--material+.page__background {
      top: 56px;
    }
    /* All page__content with a material toolbar */
    .toolbar.toolbar--material+.page__background+.page__content {
      top: 56px;
      padding-top: 0;
    }
    /* -------- */
    /*  Others  */
    /* -------- */
    /* All page__background with a transparent toolbar */
    .toolbar.toolbar--transparent+.page__background {
      top: 0;
    }
    /* All page__content with a transparent cover-content toolbar and its direct descendant page_content */
    .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content,
    .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content {
      top: 0;
      padding-top: 44px;
    }
    /* All page__content with a material transparent cover-content toolbar and its direct descendant page_content */
    .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content+.page__background+.page__content,
    .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content {
      top: 0;
      padding-top: 56px;
    }
    /* -------- */
    /*  Tabbar  */
    /* -------- */
    /* All top tabbar */
    .tabbar--top {
      padding-top: 0;
    }
    /* All bottom tabbar */
    .tabbar:not(.tabbar--top) {
      padding-bottom: 0;
    } /* non BEM */
    /* @import './util.css'; */
    @media (orientation: landscape) {
      html[onsflag-iphonex-landscape] .page__content {
        padding-left: 44px;
        padding-right: 44px;
      }
      /* Ignore if the page is in dialogs or modals */
      html[onsflag-iphonex-landscape] .dialog .page__content,
      html[onsflag-iphonex-landscape] .modal .page__content {
        padding-left: 0;
        padding-right: 0;
      }
    }
    /* @import './switch.css'; */
    /* @import './range.css'; */
    /* @import './notification.css'; */
    @media (orientation: landscape) {
      html[onsflag-iphonex-landscape] .toolbar__left {
        padding-left: 44px;
      }
    
      html[onsflag-iphonex-landscape] .toolbar__right {
        padding-right: 44px;
      }
    
      html[onsflag-iphonex-landscape] .bottom-bar {
        padding-right: 44px;
        padding-left: 44px;
      }
    }
    /* @import './button.css'; */
    /* @import './button-bar.css'; */
    /* @import './segment.css'; */
    @media (orientation: landscape) {
      html[onsflag-iphonex-landscape] .tabbar {
        padding-left: 44px;
        padding-right: 44px;
        width: calc(100% - 88px);
      }
    }
    /* @import './toolbar-button.css'; */
    /* @import './checkbox.css'; */
    /* @import './radio-button.css'; */
    /* @import './list.css'; */
    /* @import './search-input.css'; */
    /* @import './text-input.css'; */
    /* @import './textarea.css'; */
    /* @import './dialog.css'; */
    /* @import './alert-dialog.css'; */
    /* @import './popover.css'; */
    /* @import './progress-bar.css'; */
    /* @import './progress-circular.css'; */
    @media (orientation: portrait) {
      /* For top safe area */
      html[onsflag-iphonex-portrait] .fab--top__left,
      html[onsflag-iphonex-portrait] .fab--top__center,
      html[onsflag-iphonex-portrait] .fab--top__right {
        top: 64px;
      }
    
      /* For bottom safe area */
      html[onsflag-iphonex-portrait] .fab--bottom__left,
      html[onsflag-iphonex-portrait] .fab--bottom__center,
      html[onsflag-iphonex-portrait] .fab--bottom__right {
        bottom: 34px; /* Omit 20px space */
      }
    }
    @media (orientation: landscape) {
      /* For bottom safe area */
      html[onsflag-iphonex-landscape] .fab--bottom__left,
      html[onsflag-iphonex-landscape] .fab--bottom__center,
      html[onsflag-iphonex-landscape] .fab--bottom__right {
        bottom: 21px; /* Omit 20px space */
      }
      
      /* For left safe area */
      html[onsflag-iphonex-landscape] .fab--top__left,
      html[onsflag-iphonex-landscape] .fab--bottom__left {
        left: 44px; /* Omit 20px space */
      }
    
      /* For right safe area */
      html[onsflag-iphonex-landscape] .fab--top__right,
      html[onsflag-iphonex-landscape] .fab--bottom__right {
        right: 44px; /* Omit 20px space */
      }
    }
    /* @import './modal.css'; */
    /* @import './select.css'; */
    @media (orientation: portrait) {
      html[onsflag-iphonex-portrait] .action-sheet {
        bottom: 48px; /* bottom safe area + 14 pt (extra bottom margin) */
      }
    }
    @media (orientation: landscape) {
      html[onsflag-iphonex-landscape] .action-sheet {
        /* The width in landscape mode is the same as the width in portrait mode */
        left: calc((100vw - 100vh + 20px) / 2);
        right: calc((100vw - 100vh + 20px) / 2);
        bottom: 33px; /* bottom safe area + 12 pt (extra bottom margin) */
      }
    }
    /* @import './card.css'; */
    @media (orientation: portrait) {
      html[onsflag-iphonex-portrait] .toast {
        bottom: 34px;
      }
    }
    @media (orientation: landscape) {
      html[onsflag-iphonex-landscape] .toast {
        left: 52px;
        right: 52px;
        bottom: 21px;
      }
    }
    /*
      Note:
    
      :not(X) does not work if X is a complex selector like \`.foo .bar\` due to the spec of :not(X).
      Instead we have to use the following form for representing A:not(X A):not(Y A):not(Z A),
      which means \`A which does not have any X, Y and Z as its ancestors\`.
    
      // Equivalent to A:not(X A):not(Y A):not(Z A) { foo: bar; }
      A {
        // Apply styles for A
        foo: bar;
      }
      X A,
      Y A,
      Z A {
        // Subtract \`X A\`, \`Y A\` and \`Z A\`
        // (Restore original styles of A)
      }
    */
    /*
      Note:
    
      @apply has been deprecated as of Oct, 2017.
      Please do not use @apply to restore original styles.
    */
    /* Bars and page contents */
    @media (orientation: portrait) {
      /* Outermost toolbar */
      html[onsflag-iphonex-portrait] .toolbar {
        top: 0;
        box-sizing: content-box;
        padding-top: 44px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .toolbar, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar, /* if wrapped with a page with a toolbar */
      html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar { /* if wrapped with a top tabbar */
        /* Restore original styles */
        top: 0;
        box-sizing: border-box;
        padding-top: 0;
      }
    
      /* Outermost bottom-bar */
      html[onsflag-iphonex-portrait] .bottom-bar {
        bottom: 0;
        box-sizing: content-box;
        padding-bottom: 34px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .bottom-bar, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .bottom-bar, /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .bottom-bar { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        bottom: 0;
        box-sizing: border-box;
        padding-bottom: 0;
      }
    
      /* Outermost page__content without toolbars or bottom-bars */
      html[onsflag-iphonex-portrait] .page__content {
        top: 0;
        padding-top: 44px;
        bottom: 0;
        padding-bottom: 34px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .page__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .page__content, /* if wrapped with a page with a toolbar */
      html[onsflag-iphonex-portrait] .tabbar--top__content .page__content, /* if wrapped with a top tabbar */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content { /* if the page has a toolbar */
        /* Restore original styles */
        top: 0;
        padding-top: 0;
      }
      html[onsflag-iphonex-portrait] .dialog .page__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page__content, /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page__content, /* if wrapped with a bottom tabbar */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content { /* if the page has a bottom-bar */
        /* Restore original styles */
        bottom: 0;
        padding-bottom: 0;
      }
    
      /* Outermost page__content with a toolbar */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background,
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content {
        top: 88px;
        padding-top: 0;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background,
      html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, /* if wrapped with dialogs */
    
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background,
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, /* if wrapped with a page with a toolbar */
    
      html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background,
      html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content { /* if wrapped with a top tabbar */
        /* Restore original styles */
        top: 44px;
        padding-top: 0;
      }
    
      /* Outermost page__content with a bottom-bar */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content {
        bottom: 78px;
        padding-bottom: 0;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .page-with-bottom-toolbar > .page__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        bottom: 44px;
        padding-bottom: 0;
      }
    
      /* Outermost page__content with a transparent cover-content toolbar and its direct descendant page_content */
      html[onsflag-iphonex-portrait] .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content,
      html[onsflag-iphonex-portrait] .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content {
        top: 0;
        padding-top: 88px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content,
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, /* if wrapped with a page with a toolbar */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page__content,
      html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content,
      html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content {  /* if wrapped with a top tabbar */
        /* Restore original styles */
        top: 0;
        padding-top: 44px;
      }
    
      /* Outermost top tabbar */
      html[onsflag-iphonex-portrait] .tabbar--top {
        padding-top: 44px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .tabbar--top, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top, /* if wrapped with a page with a toolbar */
      html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top { /* if wrapped with a top tabbar */
        /* Restore original styles */
        padding-top: 0;
      }
    
      /* Outermost tabbar--top__content */
      html[onsflag-iphonex-portrait] .tabbar--top__content {
        top: 93px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .tabbar--top__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top__content, /* if wrapped with a page with a toolbar */
      html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top__content { /* if wrapped with a top tabbar */
        /* Restore original styles */
        top: 49px;
      }
    
      /* Outermost bottom tabbar */
      html[onsflag-iphonex-portrait] .tabbar:not(.tabbar--top):not(.tabbar--top) {
        padding-bottom: 34px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .tabbar:not(.tabbar--top):not(.tabbar--top), /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top) { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        padding-bottom: 0;
      }
    
      /* Outermost.tabbar__content:not(.tabbar--top__content) */
      html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) {
        bottom: 83px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-portrait] .dialog .tabbar__content:not(.tabbar--top__content), /* if wrapped with dialogs */
      html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content) { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        bottom: 49px;
      }
    }
    @media (orientation: landscape) {
      /* Outermost bottom-bar */
      html[onsflag-iphonex-landscape] .bottom-bar {
        bottom: 0;
        box-sizing: content-box;
        padding-bottom: 21px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-landscape] .dialog .bottom-bar, /* if wrapped with dialogs */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .bottom-bar, /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .bottom-bar { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        bottom: 0;
        box-sizing: border-box;
        padding-bottom: 0;
      }
    
      /* Outermost page__content without bottom-bars */
      html[onsflag-iphonex-landscape] .page__content {
        bottom: 0;
        padding-bottom: 21px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-landscape] .dialog .page__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page__content, /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page__content, /* if wrapped with a bottom tabbar */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content { /* if the page has a bottom-bar */
        /* Restore original styles */
        bottom: 0;
        padding-bottom: 0;
      }
    
      /* Outermost page__content with a bottom-bar */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content {
        bottom: 65px;
        padding-bottom: 0;
      }
      /* Non-outermost */
      html[onsflag-iphonex-landscape] .dialog .page-with-bottom-toolbar > .page__content, /* if wrapped with dialogs */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        bottom: 44px;
        padding-bottom: 0;
      }
    
      /* Outermost bottom tabbar */
      html[onsflag-iphonex-landscape] .tabbar:not(.tabbar--top) {
        padding-bottom: 21px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-landscape] .dialog .tabbar:not(.tabbar--top), /* if wrapped with dialogs */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top) { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        padding-bottom: 0;
      }
    
      /* Outermost.tabbar__content:not(.tabbar--top__content) */
      html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) {
        bottom: 70px;
      }
      /* Non-outermost */
      html[onsflag-iphonex-landscape] .dialog .tabbar__content:not(.tabbar--top__content), /* if wrapped with dialogs */
      html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), /* if wrapped with a page with a bottom-bar */
      html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content) { /* if wrapped with a bottom tabbar */
        /* Restore original styles */
        bottom: 49px;
      }
    }
    /* Lists in .page__content */
    @media (orientation: landscape) {
      /* Only patching lists just under .page__content */
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) {
        margin-left: -44px;
        margin-right: -44px;
      }
    
      /* For left safe area */
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-header {
        padding-left: 59px;
      }
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item {
        /* margin-left is not suitable for iPhone X patch. Using padding-left here. */
        padding-left: 58px;
      }
    
      /* For right safe area */
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item--chevron:before {
        right: 60px;
      }
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item > .list-item__center:last-child {
        padding-right: 50px;
      }
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item > .list-item__right {
        padding-right: 56px;
      }
      html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item > .list-item--chevron__right {
        padding-right: 74px;
      }
    }
    /* Lists in .page__content in dialogs and modals */
    @media (orientation: landscape) {
      /* Only patching lists just under .page__content */
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) {
        margin-left: 0;
        margin-right: 0;
      }
    
      /* For left safe area */
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-header {
        padding-left: 15px;
      }
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item {
        padding-left: 14px;
      }
    
      /* For right safe area */
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item--chevron:before {
        right: 16px;
      }
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item > .list-item__center:last-child {
        padding-right: 6px;
      }
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item > .list-item__right {
        padding-right: 12px;
      }
      html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item > .list-item--chevron__right {
        padding-right: 30px;
      }
    }
    /* non BEM */`;
}
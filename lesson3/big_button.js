"use strict";

(function () {
  window.addEventListener('load', init);

  function init() {
    let button = id("but1");
    button.addEventListener("click", click);
    let button2 = id("but2");
    button2.addEventListener("click", click2);

    // button.addEventListener("click", function (e) { });
    // button.addEventListener("click", (e) => { });

  }

  /**
   * @param {object} e Event -- Event details
   */
  function click(e) {
    console.log("click 1")
    this.textContent = "Big button 1";
    id("sec0").appendChild(this.parentNode.nextElementSibling.firstElementChild)
  }
  function click2(e) {
    id("sec2").appendChild(this)
    console.log("click 2")
  }

  /** ---- Helper Functions  ---- */

  function gen(tagName) {
    return document.createElement(tagName);
  }

  function id(idName) {
    return document.getElementById(idName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();
// ==UserScript==
// @name         Remove Economist Paywall and Overlays
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Removes the <teg-page-wall> element, gradient overlay, expandable banner, and specific style tags on The Economist website
// @author       Bizo
// @match        *://*.economist.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to remove specific elements by selector
    function removeElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.remove();
            console.log(`${selector} removed`);
        }
    }

    // Function to remove all specified elements
    function removeElements() {
        // Remove the <teg-page-wall> element
        removeElement('teg-page-wall');


        // Remove the expandable banner
        removeElement('.expandable-banner');

        // Remove the <style> tag with data-emotion="css" and data-s=""
        removeElement('style[data-emotion="css"][data-s=""]');
    }

    // Try to remove the elements immediately, and also observe for future changes
    removeElements();

    // Observe changes to the DOM in case the elements are added dynamically
    const observer = new MutationObserver(() => {
        removeElements();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

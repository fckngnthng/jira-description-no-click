// ==UserScript==
// @name         Disable Jira Click Edit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable click edit in Jira issue descriptions
// @author       fckngnthng
// @match        https://jira.isimplelab.com/browse/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atlassian.net
// @grant        GM_log
// ==/UserScript==

(function() {
    'use strict';

    GM_log('Jira click script load...');

    /**
     * Handles the click event on the Jira issue description element.
     * Stops the event propagation to prevent the default double-click-to-edit behavior.
     * @param {Event} e - The click event object.
     */
    function handleClick(e) {
        e.stopPropagation();
        GM_log("Blocked click-edit of Jira issue description. You're welcome.");
    }

    // Wait for the Jira issue description UI to load before creating the toggle button
    setTimeout(function() {
        const descriptionElement = document.getElementById('descriptionmodule');
        GM_log('.ak-renderer-document', descriptionElement);
        if (descriptionElement) {
            descriptionElement.addEventListener('click', handleClick, true);
        }
    }, 200);
})();

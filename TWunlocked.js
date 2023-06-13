// ==UserScript==
// @name TW-Unlocked
// @namespace https://github.com/SurvExe1Pc/userscripts
// @description Adds some useful functions to turbowarp that are disabled due to security issues.
// @version v1.1
// @icon https://turbowarp.org/favicon.ico
// @include *
// @grant *
// @run-at document-end
// ==/UserScript==
// Made By SurvExE1Pc.
const TWunlocked_ = unsafeWindow.document.createElement('script');
TWunlocked_.src = 'https://api.allorigins.win/raw?url=https%3A%2F%2Fraw.githubusercontent.com%2FSurvExe1Pc%2FSurvExe1Pc.github.io%2Fmain%2FtwU_Console.js';
TWunlocked_.id = 'TWunlocked-Script-'+GM.info.scriptHandler;
unsafeWindow.document.body.appendChild(TWunlocked_);

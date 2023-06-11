// ==UserScript==
// @name TW-Unlocked
// @namespace https://github.com/SurvExe1Pc/userscripts
// @description Adds some useful functions to turbowarp that are disabled due to security issues.
// @version v1.0
// @icon https://turbowarp.org/favicon.ico
// @match *://turbowarp.org/*
// @match *://www.turbowarp.org/*
// @grant *
// @run-at document-end
// ==/UserScript==
// Made By SurvExE1Pc.
const TWunlocked = unsafeWindow.document.createElement('script');
TWunlocked.src = 'https://api.allorigins.win/raw?url=https://raw.githubusercontent.com/SurvExe1Pc/userscripts/main/TWunlocked_console.js';
TWunlocked.id = 'TWunlocked-Script-'+GM.info.scriptHandler;
unsafeWindow.document.body.appendChild(TWunlocked);

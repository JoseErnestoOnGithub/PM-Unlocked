// ==UserScript==
// @name TW-Unlocked (TamperMonkey)
// @namespace https://github.com/SurvExe1Pc/userscripts
// @description Adds some useful functions to turbowarp that are disabled due to security issues.
// @version v1.5
// @icon https://turbowarp.org/favicon.ico
// @match *://*/*
// @grant unsafeWindow
// @sandbox raw
// @run-at document-end
// ==/UserScript==
// Made By SurvExE1Pc.
(function(){
    //Support for other loaders and the console
    let unsafeWindow = /*UnsafeWindow object*/(function(){ try { unsafeWindow; return unsafeWindow} catch { return window }; })();
    let GM = /*GM Object*/(function(){ try { GM; return(GM) } catch { return {info:{scriptHandler:"None"}} }; })();

    //Tampermonkey functions, since these dont exist in GreaseMonkey I am manually implementing these.
    let GM_log = /*Log function*/(function(){ try { GM_log; return(GM_log) } catch { return function(...args){
        console.log(...args);
    } }; })();
    let GM_addElement = /*Add elm function*/(function(){ try { GM_addElement; return(GM_addElement) } catch { return function(element_type, attributes){
        const element = unsafeWindow.document.createElement(element_type);
        let attr_names = Object.keys(attributes);
        let attr_values = Object.values(attributes);
        for (let attr_idx in attr_names) {
            element[attr_names[attr_idx]] = attr_values[attr_idx];
        };
        unsafeWindow.document.body.appendChild(element);
    } }; })();

    //Main code
    let scriptURL = 'https://corsproxy.io/?https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSurvExe1Pc%2FSurvExe1Pc.github.io%40main%2FtwU_Console.js';
    let scriptID = 'TWunlocked-Script-'+GM.info.scriptHandler;

    GM_addElement('script', {
        src: scriptURL,
        id: scriptID,
        type: 'text/javascript'
    });
})();

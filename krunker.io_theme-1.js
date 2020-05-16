// ==UserScript==
// @name         kruker.io theme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  theme
// @author       github.com/akuankka128
// @match        *://*/*
// @grant        none
// ==/UserScript==

let now = Date.now();
let injection =
`
[class="chatItem"] {
    background: rgba(0,100,100,.55) !important;
    border-radius: 5.75px !important;
    border: 0.8px double rgba(0,44,44,.9) !important;
}
[id^="chatMsg"] {
    font-family: Consolas !important;
    font-size: 2rem !important;
}
#instructions > * {
    color: red !important;
    font-family: Consolas !important;
}
#chatInput {
    background-color:rgba(0,111,111,.5)!important;
    border-radius:10px!important;
}
#endTable { background-color:rgba(0,100,100,.77) }
#matchVoteHolder { background-color:rgba(0,100,100,.77) !important; }
div.menuItem, [class="headerBarRight headerBar"] { background: rgba(0,100,100,.7) !important; }
div.menuItem:hover, [class="headerBarRight headerBar"]:hover { background: rgba(0,76,76,.76) !important; }
#signedInHeaderBar { background: rgba(0,100,100,.7) !important; }
#claimHolder { display: none !important; }
#merchHolder { display: none !important; }
#errorNotification { background: rgba(12,12,12,.825) !important; }
#errorNotification > div { color: red !important; }
span[style="color:#353535"]::before { content: '*' !important; }
#instructions>span,#instructions>div { color: red !important; }
[id*=chatMsg]>div>span>span[color="#fff"] { rgba(255,255,255,.7) !important; }
[id*=chatMsg]>div>span>span { color: rgba(255,0,0,.6) !important; }
[id*=chatMsg]>div>span { color: rgba(255,255,255,.7) !important; }
.button.small { border-radius: 10px !important; }
span[color="#fff"] { color:rgba(255,255,255,.78); }
#modVoteD { color:rgb(255,0,0)!important; }
#modVoteU { color:rgb(0,255,0)!important; }
`

console.info("Starting injection script");

(function() {
    console.info("In main function at " + Date.now());
    'use strict';

    if(!/^.*krunker\.io.*/.test(document.location.href)) return console.info(`Did not match a krunker.io URL. Stopping execution at: ${Date.now()}, execution time: ${Date.now() - now}`);
    console.info("Proceeding to injection.");

    let injector = document.createElement('style');
    injector.innerHTML = injection;

    console.info("Applied injection to host element");

    document.body.appendChild(injector);
    console.info("Injection complete.");
    console.info("Leaving main function at " + Date.now());
    console.info("Total execution time: " + Date.now() - now);
})();

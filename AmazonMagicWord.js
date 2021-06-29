// ==UserScript==
// @name         Just amazon (beta)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.amazon.co.jp/s?k*
// @match        https://www.amazon.co.jp/s?k*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    var magicWord = "&rh=p_6%3AAN1VRQENFRJN5";

    console.log(location.href);
    console.log(location.href.indexOf(magicWord));

    if( location.href.indexOf(magicWord) == -1){
    // magicWordが見つからない場合
        location.href=location.href + magicWord;
    } ;


})();
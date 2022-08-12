// ==UserScript==
// @name         I Still Hate The New Rehab Button
// @namespace    torn.com
// @version      0.5
// @description  Who seriously thought moving the rehab button was a good idea?
// @author       cts [2621827]
// @match        *.torn.com/index.php*
// ==/UserScript==

$(window).load(function() {
    if ($('h4#skip-to-content:contains(Switzerland)').length) {
        let rehabilitation = $('a:contains(Rehabilitation)');
        $(rehabilitation).appendTo($('#top-page-links-list'));
        $(rehabilitation).addClass('right line-h24');
        $(rehabilitation).css('textDecoration', 'none');
    }
});

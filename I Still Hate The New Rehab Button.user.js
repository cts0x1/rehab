// ==UserScript==
// @name         I Still Hate The New Rehab Button
// @namespace    torn.com
// @version      0.7
// @description  Who seriously thought moving the rehab button was a good idea?
// @author       cts [2621827]
// @match        *.torn.com/index.php*
// @match        *.torn.com/hospitalview.php*
// ==/UserScript==

$(window).load(function() {
    if ($('h4#skip-to-content:contains(Switzerland)').length) {
        let rehabilitation = $('a:contains(Rehabilitation)');
        $(rehabilitation).appendTo($('#top-page-links-list'));
        $(rehabilitation).addClass('t-clear h c-pointer  line-h24 right last'); //added more to class in hopes that works
        $(rehabilitation).css('textDecoration', 'none');
    }
    // mostly for debug because I got hosp'd in the process of fixing, leaving it here though because I can
    if ($('h4#skip-to-content:contains(Swiss Hospital)').length) {
        let rehabilitation = $('a:contains(Rehabilitation)');
        $(rehabilitation).appendTo($('#top-page-links-list'));
        $(rehabilitation).addClass('t-clear h c-pointer  line-h24 right last');
        $(rehabilitation).css('textDecoration', 'none');
    }
});

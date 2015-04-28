# jquery.visibilityChanged
Executes a callback when an element's visibility changes

Example: http://jsfiddle.net/shaunbowe/kb24kqfx/4/

$("#tester").visibilityChanged({
    callback: function(element, visible) {
       // do something here
    },
    runOnLoad: false,
    frequency: 100
});

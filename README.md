# jquery.visibilityChanged
Executes a callback when an element's visibility changes

Example: http://jsfiddle.net/shaunbowe/kb24kqfx/4/

``` JavaScript
$("#tester").visibilityChanged({
    callback: function(element, visible, initialLoad) {
       // do something here
       // element: the element in question
       // visible: (bool) if the element is currently visible
       // initialLoad: (bool) if the callback is being trigger for the
       //   first time on an element (i.e. on page load)
    },
    runOnLoad: false,
    frequency: 100
});
```

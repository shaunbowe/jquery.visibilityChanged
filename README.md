# jquery.visibilityChanged
Executes a callback when an element's visibility changes

##Example
``` JavaScript
$("#tester").visibilityChanged({
    changed: function(element, currentVisibility, previousVisibility, event) {
       // Do something here
    },
    same: function(element, visibility, event) {
        // Do something here
    },
    eventList: [ 'click', 'mouseMove', 'keyUp', 'scroll', 'resize' ]
});
```

##Default options

    changed: function (element, currentVisibility, previousVisibility, event) {},
	same: function(element, visibility, event) {},
	eventList: [
		'click',
		'mouseMove',
		'keyUp',
		'scroll',
		'resize'
	]

##Run on page load

To run onpage load simply add the 'watchVisibility' class to the element you want to watch.
``` HTML
<div class="watchVisibility"></div>
```

To set the options for that element use attribute
``` HTML
<div data-visibility-changed-options='{"optionName": "optionValue"...}'></div>
```
Note the ' and " are important for jQuery to be able to read the attribute value as an object.

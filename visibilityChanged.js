(function ($) {
    var defaults = {
        callback : function () { },
        runOnLoad: true,
        frequency: 100
    };

    var methods = {};
    methods.checkVisibility = function (element, options) {
        var previousVisibility = element.data('previousVisibility');
        var isVisible = element.is(':visible');
        element.data('previousVisibility', isVisible);
        if (previousVisibility == null) {
            if (options.runOnLoad) {
                options.callback(element, isVisible);
            }
        } else if(previousVisibility !== isVisible) {
            options.callback(element, isVisible);
        }
        
        setTimeout(function() {
            methods.checkVisibility(element, options);
        }, options.frequency);
    };

    $.fn.visibilityChanged = function (options) {
        options = $.extend(defaults, options);
        return this.each(function () {
            methods.checkVisibility($(this), options);
        });
    };
})(jQuery);

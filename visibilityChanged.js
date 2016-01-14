(function ($) {
    var
		checkVisibility = function(element, options) {
			var
				obj = {
					defaultOptions: {
						changed: function (element, currentVisibility, previousVisibility, event) {},
						same: function(element, visibility, event) {},
						eventList: [
							'click',
							'mouseMove',
							'keyUp',
							'scroll',
							'resize'
						]
					},
					options: {},
					element: null,
					check: function(e) {
						var t = this;
						
						t.element.data('previousVisibility', t.element.data('currentVisibility'));
						
						t.element.data('currentVisibility', t.element.is(':visible'));
						
						if (t.element.data('previousVisibility') == t.element.data('currentVisibility')) {
							t.options.same(t.element, t.element.data('currentVisibility'), e);
						} else {
							t.options.changed(t.element, t.element.data('currentVisibility'), t.element.data('previousVisibility'), e);
						}
						
						return t;
					},
					init: function(element, options) {
						var t = this;
						t.options = $.extend({}, t.defaultOptions, options);
						t.element = $(element);
						
						if (t.element.data('currentVisibility')) {
							// Do nothing.
						} else {
							t.element.data('currentVisibility',  t.element.is(':visible'));
							t.element.data('previousVisibility', null);
						}
						
						if (t.options.eventList) {
							$.each(t.options.eventList, function(i, ev) {
								$(document).on(
									ev,
									function(e) {
										t.check(e);
									}
								);
							});
						}
						
						return t;
					}
				}
			;
			obj.init(element, options);
			
			return obj;
		}
	;
	
	$.fn.extend({
		'visibilityChanged': function(options) {
			var options = options || {};
			return new checkVisibility(this, options);
		}
	});
	
	$(document).ready(function() {
		$('*.watchVisibility').each(function(i, el) {
			el = $(el);
			el.data('currentVisibility',  el.is(':visible'));
			el.data('previousVisibility', null);
			if (el.data('visibilityChangedOptions')) {
				el.visibilityChanged(el.data('visibilityChangedOptions'));
			}
		});
	});
})(jQuery);

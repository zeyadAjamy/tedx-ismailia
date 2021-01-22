/* --------------------------------
jquery.anisview
-------------------------------- */

(function($) {

	'use strict';

	$.fn.extend({

		anisview: function(options) {

			/* DEFAULTS */
			var defaults = {
				animation: 'fadeInLeft',
				direction: 'down',
				repeat: true,
				delay: '',
				speed: '',
			};
			options = $.extend(defaults, options);

			return this.each(function() {

				/* VARIABLES */
				var $window = $(window),
					$document = $(document),
					$body = $('body'),
					$this = $(this);
				var elemTop = $this.offset().top,
					elemBtm = elemTop + $this.outerHeight(),
					viewTop = $window.scrollTop(),
					viewBtm = viewTop + $window.innerHeight(),
					docuBtm = $document.innerHeight();

				/* ADD ANIMATED */
				$this.addClass('animated');

				/* TOUCH BOTTOM */
				if (viewBtm >= docuBtm) {
					$body.addClass('aniTouchBottom');
				}

				/* ANIMATION */
				if (options.repeat == true) {
					if (options.direction == 'down') {
						if (viewBtm > elemTop) {
							$this.addClass(options.animation).addClass(options.delay).addClass(options.speed);
						} else {
							$this.removeClass(options.animation).removeClass(options.delay).removeClass(options.speed);
						}
					} else if (options.direction == 'up') {
						if ($body.hasClass('aniTouchBottom')) {
							if (elemBtm > viewTop) {
								$this.addClass(options.animation).addClass(options.delay).addClass(options.speed);
							} else {
								$this.removeClass(options.animation).removeClass(options.delay).removeClass(options.speed);
							}
						}
					} else if (options.direction == 'both') {
						if ((viewBtm > elemTop) && (elemBtm > viewTop)) {
							$this.addClass(options.animation).addClass(options.delay).addClass(options.speed);
						} else {
							$this.removeClass(options.animation).removeClass(options.delay).removeClass(options.speed);
						}
					}
				} else if (options.repeat == false) {
					if (options.direction == 'down') {
						if (viewBtm > elemTop) {
							$this.addClass(options.animation).addClass(options.delay).addClass(options.speed);
						}
					} else if (options.direction == 'up') {
						if ($body.hasClass('aniTouchBottom')) {
							if (elemBtm > viewTop) {
								$this.addClass(options.animation).addClass(options.delay).addClass(options.speed);
							}
						}
					} else if (options.direction == 'both') {
						if ((viewBtm > elemTop) && (elemBtm > viewTop)) {
							$this.addClass(options.animation).addClass(options.delay).addClass(options.speed);
						} else {
							if (!$body.hasClass('aniTouchBottom')) {
								$this.removeClass(options.animation).removeClass(options.delay).removeClass(options.speed);
							}
						}
					}
				}

			});

		}

	});

})(jQuery);
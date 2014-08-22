/**
 *
 */;
(function($, window, document) {
$.fn.paginate = function(parameters) {
  // method being called (after plugin has initialized)
  if (typeof parameters === 'string') {
    if (parameters.toLowerCase() == 'destroy') {
      destroy();
    } else {
      throw 'Method "' + parameters + '" does not exist in jQuery Paginate';
    }
    return this.each(function() {});
  }

  // initializing the plugin

  return this.each(function() {
    // ...
  });
};
})(jQuery);

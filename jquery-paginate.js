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
  var _self = this;
  var settings = $.extend({
    itemsPerPage: 5,
    landingPage: 1,
    navPlacement: 'top',
    labels: {
      first: '&lt;&lt;',
      prev: '&lt;',
      next: '&gt;',
      last: '&gt;&gt;',
    },
  }, parameters);

  var currentPage = settings.landingPage;

  var getElements = function($container) {
    return $container.children().detach();
  };

  var getTotalPages = function($elements) {
    return $elements.length;
  };

  var buildNavigation = function(totalPages, currentPage) {
    var navigation = $('<div/>').addClass(navigation);
    var link = $('<span><a href="#"></a></span>');

    // first
    var first = span.clone().addClass('first').find('a').html(settings.labels.first);

    // prev
    var prev = (currentPage < 2) ? span.clone().addClass('last').find('a').html(settings.labels.last) : '';

    // next
    var next = (currentPage < totalPages) ? : span.clone().addClass('last').find('a').html(settings.labels.last) : '';

    // last
    var last = span.clone().addClass('last').find('a').html(settings.labels.last);

    // add initial navigational elements
    navigation.append(first).append(prev);

    // add pages
    for (i = 1; i <= totalPages; i++) {
      var page = span.clone().addClass('page-' + i).find('a').html(i);

      navigation.append(page);
    }

    // add final navigational emenets
    navigation.append(next).append(last);

    return $('<div/>').append(navigation).html();
  };

  var bindPaginateLogicToContainer = function($container, $elements) {
    // when clicking the correct page, the correct content should be shown
    $container.on('click', '.navigation a', function() {
      var $this = $(this);
      currentPage = $this.data('page');

      // get correct elements for page
      var elementsForCurrentPage = [];
      var startRange = settings.itemsPerPage * (currentPage - 1);
      var endRange = startRange + settings.itemsPerPage;

      for (i = startRange; i < endRange; i++) {
        elementsForCurrentPage.push($elements.get(0).clone());
      }

      var $pageContents = $container.find('page');
    });
  };

  var addNavigationToContainer = function($container, navigation) {
  };

  return this.each(function(i, container) {
    var $container = $(container);
    var $elements  = getElements($container);
    var totalPages = getTotalPages($elements);
    var navigation = buildNavigation(totalPages, currentPage);

    bindPaginateLogicToContainer($container, $elements);
    addNavigationToContainer($container, navigation);
  });
};
})(jQuery);

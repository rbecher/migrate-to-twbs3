// Generated by CoffeeScript 1.6.3
(function() {
  jQuery(function() {
    "use strict";
    var $, addClassToElement, changeElementClass, check, error, info, libFuncName, log, removeElementClass, version, warn, wrapElementInElement;
    $ = jQuery;
    log = function(message) {
      return console.log(message);
    };
    info = function(message) {
      return console.info(message);
    };
    error = function(message) {
      return console.error(message);
    };
    warn = function(message) {
      return console.warn(message);
    };
    version = '0.0.1';
    changeElementClass = function(oldClass, newClass, name, transform, tagName) {
      var el;
      if (tagName == null) {
        tagName = '';
      }
      el = $("" + tagName + "." + oldClass);
      if (el.length > 0) {
        warn("'." + oldClass + "' has been renamed to '." + newClass + "', found " + el.length + " times");
        if (transform) {
          el.removeClass(oldClass).addClass(newClass);
          return info("Transformed " + name);
        }
      }
    };
    removeElementClass = function(oldClass, name, transform, tagName) {
      var el;
      if (tagName == null) {
        tagName = '';
      }
      el = $("" + tagName + "." + oldClass);
      if (el.length > 0) {
        warn("'." + oldClass + "' has been removed, found " + el.length + " times");
        if (transform) {
          el.removeClass(oldClass);
          return info("Transformed " + name);
        }
      }
    };
    addClassToElement = function(element, newClass, name, transform) {
      var el;
      el = $(element);
      if (el.length > 0) {
        warn("'." + newClass + "' has been added for '" + element + "', found " + el.length + " times");
        if (transform) {
          el.addClass(newClass);
          return info("Transformed " + name);
        }
      }
    };
    wrapElementInElement = function(inner, outer, name, transform) {
      var el, element, transformable;
      el = $(inner);
      if (el.length > 0) {
        transformable = ((function() {
          var _i, _len, _results;
          if (el.parent().tagName !== 'DIV') {
            _results = [];
            for (_i = 0, _len = el.length; _i < _len; _i++) {
              element = el[_i];
              _results.push(element);
            }
            return _results;
          }
        })());
        if (transformable.length > 0) {
          warn("" + inner + " should be wrapped now in '" + outer + "' tags, found " + transformable.length + " times");
          if (transform) {
            transformable.wrapAll(document.createElement(outer));
            return info("Transformed " + name);
          }
        }
      }
    };
    check = function(transform) {
      var oldClass, oldIconClasses, _i, _len;
      if (transform == null) {
        transform = false;
      }
      info("Starting migration helper for twitter bootstrap (" + version + ")");
      changeElementClass('container-fluid', 'container', 'container', transform);
      changeElementClass('row-fluid', 'row', 'row', transform);
      $.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], function(i, num) {
        return changeElementClass("span" + num, "col-lg-" + num, "span of length " + num, transform);
      });
      $.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], function(i, num) {
        return changeElementClass("offset" + num, "col-md-offset-" + num, "offset of length " + num, transform);
      });
      changeElementClass('brand', 'navbar-brand', 'brand in navbar', transform);
      changeElementClass('nav-collapse', 'navbar-collapse', 'collapsing navbar', transform);
      changeElementClass('nav-toggle', 'navbar-toggle', 'toggling navbar', transform);
      changeElementClass('btn-navbar', 'navbar-btn', 'toggling navbar', transform);
      changeElementClass('navbar-search', 'navbar-form', 'navbar search', transform);
      changeElementClass('navbar-inner', 'container', 'inner navbar', transform);
      changeElementClass('btn-inverse', 'btn-default', 'inverse buttons', transform);
      removeElementClass('divider', 'dividers in breadcrumbs', transform, 'span');
      changeElementClass('muted', 'text-muted', 'muted text', transform);
      changeElementClass('unstyled', 'list-unstyled', 'unstyled ordered lists', 'ol');
      changeElementClass('unstyled', 'list-unstyled', 'unstyled unordered lists', 'ul');
      changeElementClass('bar', 'progress-bar', 'progress bars', transform);
      changeElementClass('visible-phone', 'visible-sm', 'visible for phones', transform);
      changeElementClass('hidden-phone', 'hidden-sm', 'hidden for phones', transform);
      changeElementClass('visible-tablet', 'visible-md', 'visible for tablets', transform);
      changeElementClass('hidden-tablet', 'hidden-md', 'hidden for tablets', transform);
      changeElementClass('visible-desktop', 'visible-lg', 'visible for desktop', transform);
      changeElementClass('hidden-desktop', 'hidden-lg', 'hidden for desktop', transform);
      changeElementClass('hero-unit', 'jumbotron', 'toggling navbar', transform);
      oldIconClasses = 'icon-glass icon-music icon-search icon-envelope icon-heart icon-star icon-star-empty icon-user icon-film icon-th-large icon-th icon-th-list icon-ok icon-remove icon-zoom-in icon-zoom-out icon-off icon-signal icon-cog icon-trash icon-home icon-file icon-time icon-road icon-download-alt icon-download icon-upload icon-inbox icon-play-circle icon-repeat icon-refresh icon-list-alt icon-lock icon-flag icon-headphones icon-volume-off icon-volume-down icon-volume-up icon-qrcode icon-barcode icon-tag icon-tags icon-book icon-bookmark icon-print icon-camera icon-font icon-bold icon-italic icon-text-height icon-text-width icon-align-left icon-align-center icon-align-right icon-align-justify icon-list icon-indent-left icon-indent-right icon-facetime-video icon-picture icon-pencil icon-map-marker icon-adjust icon-tint icon-edit icon-share icon-check icon-move icon-step-backward icon-fast-backward icon-backward icon-play icon-pause icon-stop icon-forward icon-fast-forward icon-step-forward icon-eject icon-chevron-left icon-chevron-right icon-plus-sign icon-minus-sign icon-remove-sign icon-ok-sign icon-question-sign icon-info-sign icon-screenshot icon-remove-circle icon-ok-circle icon-ban-circle icon-arrow-left icon-arrow-right icon-arrow-up icon-arrow-down icon-share-alt icon-resize-full icon-resize-small icon-plus icon-minus icon-asterisk icon-exclamation-sign icon-gift icon-leaf icon-fire icon-eye-open icon-eye-close icon-warning-sign icon-plane icon-calendar icon-random icon-comment icon-magnet icon-chevron-up icon-chevron-down icon-retweet icon-shopping-cart icon-folder-close icon-folder-open icon-resize-vertical icon-resize-horizontal icon-hdd icon-bullhorn icon-bell icon-certificate icon-thumbs-up icon-thumbs-down icon-hand-right icon-hand-left icon-hand-up icon-hand-down icon-circle-arrow-right icon-circle-arrow-left icon-circle-arrow-up icon-circle-arrow-down icon-globe icon-wrench icon-tasks icon-filter icon-briefcase icon-fullscreen'.split(' ');
      for (_i = 0, _len = oldIconClasses.length; _i < _len; _i++) {
        oldClass = oldIconClasses[_i];
        changeElementClass(oldClass, oldClass.replace(/^icon/, 'glyphicon'), oldClass.replace(/^icon-/, '') + ' icon', transform);
      }
      changeElementClass('button-mini', 'button-xs', 'mini buttons', transform);
      changeElementClass('pagination-mini', 'pagination-xs', 'mini paginations', transform);
      changeElementClass('well-mini', 'well-xs', 'mini well', transform);
      changeElementClass('button-small', 'button-sm', 'small buttons', transform);
      changeElementClass('pagination-small', 'pagination-sm', 'small paginations', transform);
      changeElementClass('well-small', 'well-sm', 'small well', transform);
      changeElementClass('button-large', 'button-lg', 'large buttons', transform);
      changeElementClass('pagination-large', 'pagination-lg', 'large paginations', transform);
      changeElementClass('well-large', 'well-lg', 'large well', transform);
      changeElementClass('alert-block', 'alert', 'alert blocks', transform);
      changeElementClass('hero-unit', 'jumbotron', 'toggling navbar', transform);
      changeElementClass('form-search', 'form-inline', 'inline forms', transform);
      changeElementClass('input-block-level', '', 'block level inputs', transform);
      removeElementClass('input-block-level', 'block level inputs', transform);
      changeElementClass('help-inline', 'help-block', 'inline help in forms', transform);
      changeElementClass('control-group', 'form-group', 'groups in forms', transform);
      removeElementClass('controls', 'obsolete controls', transform);
      addClassToElement('input', 'form-control', 'form-control for inputs', transform);
      addClassToElement('select', 'form-control', 'form-control for select', transform);
      wrapElementInElement('input[type="radio"]', 'div', 'radios with div', transform);
      return wrapElementInElement('input[type="checkbox"]', 'div', 'checkbox with div', transform);
    };
    libFuncName = null;
    if (typeof jQuery === "undefined" && typeof Zepto === "undefined" && typeof $ === "function") {
      libFuncName = $;
    } else if (typeof jQuery === "function") {
      libFuncName = jQuery;
    } else if (typeof Zepto === "function") {
      libFuncName = Zepto;
    } else {
      throw new TypeError();
    }
    return window.MigrateTwBs = check;
  });

}).call(this);

/*
//@ sourceMappingURL=migrate-twbs-2-to-3.map
*/

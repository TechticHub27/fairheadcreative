// Add 'visible()' jQuery functionality
;(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery);

// Freebie modal
$(function() {
  $('.strap-submit, .get-freebie, #key-modal .modal-close').on('click', function(e) {
    $('#key-modal').toggle();
    return false;
  });
});

// If scroll…
$(window).scroll(function() {
  // Fix Share section to the bottom when scrolling down
  if ($('#closing').visible(true) || $('.share').visible(true)) {
    $('.share-inner').removeClass('fixed');
  } else {
    $('.share-inner').addClass('fixed');
  }
});

// If user is about to leave
function addEvent(obj, evt, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
    }
    else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
    }
}

addEvent(document, "mouseout", function(e) {
    e = e ? e : window.event;
    var from = e.relatedTarget || e.toElement;
    if (!from || from.nodeName == "HTML") {
        // the cursor has left the building
        console.log('leaving');
    }
});

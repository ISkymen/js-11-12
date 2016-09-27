(function($) {
  
  $.fn.my_jcarousel = function() {

    var leftUIEl = $('.jcarousel-prev');
    var rightUIEl = $('.jcarousel-next');
    var elementsList = $('.jcarousel_list');
    var pixelsOffset = 229;
    var currentLeftValue = 0;

    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;

    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 229;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });

    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 229;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
    return this;
  }
})(jQuery)
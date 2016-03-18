// Displays country Name on hover
var svg = Snap("#svg"),
    northAfrica = Snap("#north-africa"),
    txt = svg.text(20, 20, '');

hoverMe = function(country, name) {
  country.hover(
    function() {
      txt.attr({text:country});
    },
    function() {
      txt.attr({text:''});
    }
  );
}

hoverMe(northAfrica,'North Africa');

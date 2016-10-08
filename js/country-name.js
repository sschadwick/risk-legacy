// Displays country Name on hover

var text = Snap("#svg").text(420.95, 70, '');

var countries = [
  [ Snap("#north-africa"), 'North Africa' ],
  [ Snap("#central-africa"), 'Central Africa' ],
  [ Snap("#egypt"), 'Egypt' ],
  [ Snap("#east-africa"), 'East Africa' ],
  [ Snap("#south-africa"), 'South Africa' ],
  [ Snap("#madagascar"), 'Madagascar' ],
  [ Snap("#southeast-asia"), 'Southeast Asia' ],
  [ Snap("#china"), 'China' ],
  [ Snap("#middle-east"), 'The Middle East' ],
  [ Snap("#afghanistan"), 'Afghanistan' ],
  [ Snap("#ural"), "Ural" ],
  [ Snap("#india"), "India" ],
  [ Snap("#irkustk"), "Irkutsk" ],
  [ Snap("#yakutsk"), "Yakutsk" ],
  [ Snap("#siberia"), "Siberia" ],
  [ Snap("#kamchatka"), "Kamchatka" ],
  [ Snap("#mongolia"), "Mongolia" ],
  [ Snap("#japan"), "Japan" ],
  [ Snap("#scandinavia"), "Scandinavia" ],
  [ Snap("#western-europe"), "Western Europe" ],
  [ Snap("#southern-europe"), "Southern Europe" ],
  [ Snap("#northern-europe"), "Northern Europe" ],
  [ Snap("#russia"), "Russia" ],
  [ Snap("#iceland"), "Iceland" ],
  [ Snap("#great-britain"), "Great Britain" ],
  [ Snap("#greenland"), "Greenland" ],
  [ Snap("#alberta"), "Alberta" ],
  [ Snap("#alaska"), "Alaska" ],
  [ Snap("#northwest-territory"), "Northwest Territory" ],
  [ Snap("#central-america"), "Central America" ],
  [ Snap("#eastern-canada"), "Eastern Canada" ],
  [ Snap("#eastern-us"), "Eastern United States" ],
  [ Snap("#ontario"), "Ontario" ],
  [ Snap("#western-us"), "Western United States" ],
  [ Snap("#venezuela"), "Venezuella" ],
  [ Snap("#peru"), "Peru" ],
  [ Snap("#argentina"), "Argentina" ],
  [ Snap("#brazil"), "Brazil" ],
  [ Snap("#eastern-australia"), "Eastern Australia" ],
  [ Snap("#new-guinea"), "New Guinea" ],
  [ Snap("#western-australia"), "Western Australia" ],
  [ Snap("#indonesia"), "Indonesia" ]
];

hoverMe = function(country, name) {
  country.hover(
    function() {
      text.attr({text:name});
    },
    function() {
      text.attr({text:''});
    }
  );
};

// Apply hoverMe function to every country in the list
countries.forEach(function(pair) {
  hoverMe(pair[0], pair[1])
});
(function() {
  var greet, one, rand, test, two,
    __slice = [].slice;

  one = 1;

  /*
  Comment multiline
  */


  two = 2;

  greet = function(name) {
    return console.log("hello " + name + "!");
  };

  greet("Sébastien");

  greet = function(name, country) {
    if (name == null) {
      name = "friend";
    }
    if (country == null) {
      country = "fr";
    }
    return console.log("hello " + name + "!");
  };

  greet();

  test = function() {
    var x, y, z;
    x = arguments[0], y = arguments[1], z = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
    console.log(x);
    console.log(y);
    return console.log(z);
  };

  test("un", "deux", "trois");

  console.log("================");

  test("un", "deux", "trois", "quatre", "cinq");

  (function() {
    return console.log("Fonction Anonymous");
  })();

  rand = function(max, min) {
    if (max == null) {
      max = 10;
    }
    if (min == null) {
      min = 1;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  console.log(rand());

  console.log(rand(100));

  console.log(rand(60, 50));

}).call(this);

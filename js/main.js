(function() {
  var greeting, isGoing, job, multi, name, num, number, obj, one, range, three, two, _i, _ref, _results;

  name = "value";

  multi = "Hello world\n" + name + "\n";

  greeting = "Hello " + name;

  number = 123.456;

  isGoing = false;

  isGoing = true;

  isGoing = true;

  isGoing = false;

  isGoing = false;

  isGoing = true;

  range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  range = (function() {
    _results = [];
    for (_i = 50; _i >= 10; _i--){ _results.push(_i); }
    return _results;
  }).apply(this);

  obj = {
    name: "Sébastien1",
    job: "Programmer1"
  };

  obj = {
    name: "Sébastien2",
    job: "Programmer2"
  };

  name = "Sébastien 3";

  job = "Programmer 3";

  obj = {
    name: name,
    job: job
  };

  console.log(obj);

  _ref = ["1", "2", "3"], one = _ref[0], two = _ref[1], three = _ref[2];

  console.log("one equal " + one);

  num = 10;

  console.log(num + 1);

}).call(this);

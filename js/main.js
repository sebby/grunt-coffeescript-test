(function() {
  var bool, job, name, obj, x;

  name = "Seb";

  bool = false;

  if (name === "Seb") {
    console.log("Hi!");
  }

  if (!bool) {
    console.log("Hi friend!");
  }

  name = "Seb";

  job = "Programmer";

  if (name === "Seb" && job === "Programmer") {
    console.log("Hi Seb the Programmer");
  }

  /*
  if (name != null) {
      console.log("Hi");
    }
  */


  if (name != null) {
    console.log("Hi");
  }

  obj = {
    name: "Seb",
    jog: "Programmer"
  };

  console.log(obj != null ? obj.name : void 0);

  name = false;

  if (name == null) {
    name = "Joe";
  }

  console.log(name);

  name || (name = "Joe");

  console.log(name);

  x = 4;

  if ((0 <= x && x <= 10)) {
    console.log("Hi");
  }

}).call(this);

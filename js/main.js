(function() {
  var givework, greet, machine, name, person, person2;

  name = "Jeremy";

  if (name === "Jeremy") {
    console.log(name);
  } else if (name === "jim") {
    console.log(name);
  } else {
    console.log("Hi!");
  }

  /*
  Single line
  */


  if (name === "Jeremy") {
    console.log(name);
  }

  machine = {
    running: false,
    turnOn: function() {
      return this.running = true;
    },
    turnOff: function() {
      return this.running = false;
    }
  };

  console.log("running " + machine.running);

  if (!machine.running) {
    machine.turnOn();
  }

  if (!machine.running) {
    machine.turnOn();
  }

  console.log("running " + machine.running);

  if (!machine.running) {
    machine.turnOn();
  }

  console.log("unless running " + machine.running);

  person = {
    name: "Seb",
    job: "Programmer",
    relationship: "Friend"
  };

  person2 = {
    name: "Seb#2",
    job: "Designer",
    relationship: "Boss"
  };

  givework = function(person) {
    switch (person.job) {
      case "Programmer":
        return console.log("You're programmer");
      case "Designer":
        return console.log("DDDesigner");
      default:
        return console.log("else");
    }
  };

  givework(person);

  givework(person2);

  greet = function(person) {
    var msg, msg2;
    msg = person.relationship === "Friend" ? "Hi Friend!!" : person.relationship === "Boss" ? "Hi Sir!" : void 0;
    console.log(msg);
    msg2 = (function() {
      switch (person.relationship) {
        case "Friend":
          return "Hi Friend!";
        case "Boss":
          return "Hi Sir";
        default:
          return "Hello!";
      }
    })();
    return console.log(msg2);
  };

  greet(person2);

}).call(this);

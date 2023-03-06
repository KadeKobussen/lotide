const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("💚💚💚Assertion Passed: " + actual + ' === ' + expected);
  } else {
    console.log('💔💔💔Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual("bootcamp", "bootcamp");
assertEqual(1,9);
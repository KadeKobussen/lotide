const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function (allItems, itemsToCount) {
  let counted = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      const itemCount = allItems.filter(itm => itm === item).length
      counted[item] = itemCount > 0 ? itemCount : undefined
    }
  }
  for (let item in counted) {
    if (!counted[item]) delete counted[item];
  }
  return counted;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
});

console.log(result1)
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

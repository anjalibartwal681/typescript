// enum is a special type of class   that represent group of constant (unchengeble variable)
// enum  comes in two type 
// 1numeric  enum = by default enum will initialize value 0 and add 1 value to its next  variable,



enum CardinalDirections {
  North,
  East=6,
  South=6,
  West
};

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North);
console.log(CardinalDirections.East);
console.log(CardinalDirections.South);
console.log(CardinalDirections.West);


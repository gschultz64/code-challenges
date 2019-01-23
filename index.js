/* Code Challenges to prep for interviews */

/* Given an array of characters such as ['a','b','a','c','a']
Write a function that accepts such an array and returns
a map/dictionary that records the number of occurances of
each character
So for that example the map returned should be: [a:3, b:1, c:1] */

function countLetters(arr) {
  var result = {};
  for (i = 0; i < arr.length; i++) {
    var current = arr[i];
    if (current in result) {
      result[current] = result[current] + 1;
    } else {
      result[current] = 1;
    }
  }
  return result;
}

var object = countLetters(["a", "b", "b", "c", "c", "f"]);

function countPairs(obj) {
  var total = 0;
  for (var key in obj) {
    var value = obj[key];
    var pair = Math.floor(value / 2);
    total = total + pair;
  }
  return total;
}

console.log(countPairs(object));

/* Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;) */

function tribonacci(signature, n) {
  //your code here
  var result = [];
  for (i = 0; i < n; i++) {
    if (i <= 2) {
      result.push(signature[i]);
    } else {
      result.push(result[i - 1] + result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// Tests
Test.describe("Basic tests", function() {
  Test.assertSimilar(tribonacci([1, 1, 1], 10), [
    1,
    1,
    1,
    3,
    5,
    9,
    17,
    31,
    57,
    105
  ]);
  Test.assertSimilar(tribonacci([0, 0, 1], 10), [
    0,
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24,
    44
  ]);
  Test.assertSimilar(tribonacci([0, 1, 1], 10), [
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24,
    44,
    81
  ]);
  Test.assertSimilar(tribonacci([1, 0, 0], 10), [
    1,
    0,
    0,
    1,
    1,
    2,
    4,
    7,
    13,
    24
  ]);
  Test.assertSimilar(tribonacci([0, 0, 0], 10), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  Test.assertSimilar(tribonacci([1, 2, 3], 10), [
    1,
    2,
    3,
    6,
    11,
    20,
    37,
    68,
    125,
    230
  ]);
  Test.assertSimilar(tribonacci([3, 2, 1], 10), [
    3,
    2,
    1,
    6,
    9,
    16,
    31,
    56,
    103,
    190
  ]);
  Test.assertSimilar(tribonacci([1, 1, 1], 1), [1]);
  Test.assertSimilar(tribonacci([300, 200, 100], 0), []);
  Test.assertSimilar(tribonacci([0.5, 0.5, 0.5], 30), [
    0.5,
    0.5,
    0.5,
    1.5,
    2.5,
    4.5,
    8.5,
    15.5,
    28.5,
    52.5,
    96.5,
    177.5,
    326.5,
    600.5,
    1104.5,
    2031.5,
    3736.5,
    6872.5,
    12640.5,
    23249.5,
    42762.5,
    78652.5,
    144664.5,
    266079.5,
    489396.5,
    900140.5,
    1655616.5,
    3045153.5,
    5600910.5,
    10301680.5
  ]);
});

/* Remove duplicate words

Your task is to remove all duplicate words from string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta' */

function removeDuplicateWords(s) {
  var arr = s.split(" ");
  var words = [];
  for (i = 0; i < arr.length; i++) {
    //     console.log(words);
    var current = arr[i].replace(/[,]/g, "");
    if (!words.includes(current)) {
      words.push(current);
    }
  }
  var result = words.join(" ");
  return result;
}

// Tests
Test.describe("Example tests", _ => {
  Test.it("should handle example case", _ => {
    Test.assertEquals(
      removeDuplicateWords(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
      ),
      "alpha beta gamma delta"
    );
  });
});

/* The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1] */

function removeSmallest(numbers) {
  var result = numbers.slice(0);
  var lowestNumber = result[0];
  var lowestLoc = 0;
  result.forEach(function(item, i) {
    console.log(`the smallest number is ${lowestNumber} at index ${lowestLoc}`);
    if (item < lowestNumber) {
      lowestNumber = item;
      lowestLoc = i;
    }
  });
  result.splice(lowestLoc, 1);
  return result;
}

// Tests
Test.describe("removeSmallest", function() {
  Test.it("works for the examples", function() {
    Test.assertSimilar(
      removeSmallest([1, 2, 3, 4, 5]),
      [2, 3, 4, 5],
      "Wrong result for [1, 2, 3, 4, 5]"
    );
    Test.assertSimilar(
      removeSmallest([5, 3, 2, 1, 4]),
      [5, 3, 2, 4],
      "Wrong result for [5, 3, 2, 1, 4]"
    );
    Test.assertSimilar(
      removeSmallest([2, 2, 1, 2, 1]),
      [2, 2, 2, 1],
      "Wrong result for [2, 2, 1, 2, 1]"
    );
    Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
  });

  Test.it("returns [] if the list has only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let x = ~~(Math.random() * 400);
      Test.assertSimilar(removeSmallest([x]), [], `Wrong result for ${[x]}`);
    }
  });

  function randomArray(length) {
    return Array.from(
      {
        length: length
      },
      () => ~~(Math.random() * 400)
    );
  }

  Test.it("returns a list that misses only one element", function() {
    for (let i = 0; i < 10; ++i) {
      let arr = randomArray(~~(Math.random() * 10) + 1);
      let l = arr.length;
      Test.assertSimilar(
        removeSmallest(arr).length,
        l - 1,
        `Wrong result for ${arr}`
      );
    }
  });
});

/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

function getMiddle(s) {
  const wordArray = s.split("");

  // if length of array is divisible by 2, word is even
  if (wordArray.length % 2 === 0) {
    // return 2 middle letters
    console.log(`The length of ${s} is even`);
    let evenHalf = wordArray.length / 2;
    return `${wordArray[evenHalf - 1]}${wordArray[evenHalf]}`;
  }
  // if word is only one letter long
  else if (wordArray.length === 1) {
    console.log(`There's only one letter in this word!`);
    return s;
  }
  // else, word is odd
  else {
    // return middle letter
    console.log(`The length of ${s} is odd`);
    let oddHalf = Math.floor(wordArray.length / 2);
    return wordArray[oddHalf];
  }
}

// Tests
Test.describe("GetMiddle", function() {
  Test.it("Tests", function() {
    Test.assertEquals(getMiddle("test"), "es");
    Test.assertEquals(getMiddle("testing"), "t");
    Test.assertEquals(getMiddle("middle"), "dd");
    Test.assertEquals(getMiddle("A"), "A");
  });
});

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  var vowelArray = str.split("");

  for (i = 0; i < vowelArray.length; i++) {
    current = vowelArray[i];
    if (vowels.includes(current)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

// Tests
describe("Case 1", function() {
  it("should be defined", function() {
    Test.assertEquals(getCount("abracadabra"), 5);
  });
});

/* Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times. */

function findOdd(A) {
  const integers = {};
  var result = 0;

  // loop through array of numbers and store all occurrences in object "integers"
  for (i = 0; i < A.length; i++) {
    let current = A[i];
    if (current in integers) {
      integers[current] = integers[current] + 1;
    } else {
      integers[current] = 1;
    }
  }

  // create array of all entries in the object "integers"
  const intArray = Object.entries(integers);

  // loop through the entries to find the odd int occurrence
  for (i = 0; i < intArray.length; i++) {
    let current = intArray[i];

    if (current[1] % 2 === 0) {
      console.log(`${current[1]} is even`);
    } else {
      result = current[0];
      console.log(`${result} is odd`);
    }
  }
  return parseInt(result);
}

// Tests
function doTest(a, n) {
  console.log("A = ", a);
  console.log("n = ", n);
  Test.assertEquals(findOdd(a), n);
}
Test.describe("Example tests", function() {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
  doTest([10], 10);
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
});

/* 
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

For example:

Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.
An empty array should be treated like a 0 in this problem. */

function findEvenIndex(arr) {
  // function to get the sum of elements in array
  const reducer = (acc, cur) => acc + cur;

  //Code goes here!
  for (i = 0; i < arr.length; i++) {
    var leftSum = arr.slice(0, i).reduce(reducer, 0);
    var rightSum = arr.slice(i + 1).reduce(reducer, 0);
    console.log(`iteration ${i}: leftSum ${leftSum}, rightSum ${rightSum}`);

    if (leftSum === rightSum) {
      return (n = i);
    }
  }
  return (n = -1);
}

// Tests
Test.describe("FindEvenIndex", function() {
  Test.it("Tests", function() {
    Test.assertEquals(
      findEvenIndex([1, 2, 3, 4, 3, 2, 1]),
      3,
      "The array was: [1,2,3,4,3,2,1] \n"
    );
    Test.assertEquals(
      findEvenIndex([1, 100, 50, -51, 1, 1]),
      1,
      "The array was: [1,100,50,-51,1,1] \n"
    );
    Test.assertEquals(
      findEvenIndex([1, 2, 3, 4, 5, 6]),
      -1,
      "The array was: [1,2,3,4,5,6] \n"
    );
    Test.assertEquals(
      findEvenIndex([20, 10, 30, 10, 10, 15, 35]),
      3,
      "The array was: [20,10,30,10,10,15,35] \n"
    );
  });
});

/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text) {
  // convert all characters to lowercase and copy string to an array, separated by character
  const char = text.toLowerCase().split("");
  // empty object to store counts of each unique character
  var charCount = {};
  // count of duplicates
  var dupCount = 0;

  // add characters key value pairs to object
  char.forEach((item, i) => {
    if (item in charCount) {
      charCount[item] = charCount[item] + 1;
    } else {
      charCount[item] = 1;
    }
  });

  // if counts of characters are more than 1, increase duplicates count
  for (var key in charCount) {
    let value = charCount[key];
    if (value > 1) {
      dupCount++;
    }
  }
  return dupCount;
}

// Tests
Test.assertEquals(duplicateCount(""), 0);
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
Test.assertEquals(duplicateCount("Indivisibility"), 1);
Test.assertEquals(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);

/* Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases by 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int, guaranteed) startPriceOld (Old car price)
parameter (positive int, guaranteed) startPriceNew (New car price)
parameter (positive int, guaranteed) savingperMonth 
parameter (positive float or int, guaranteed) percentLossByMonth

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158 (rounding 766.158 gives 766).

Note:

Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
We don't take care of a deposit of savings in a bank:-) */

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  var month = 0;
  var balance = startPriceOld - startPriceNew;
  var endPriceOld = startPriceOld;
  var endPriceNew = startPriceNew;
  var decimalLoss = percentLossByMonth / 100;

  // he has enough money at beg of month
  if (balance >= 0) {
    return [month, Math.floor(balance)];
  }

  for (month; month < 100; month++) {
    // percentLossByMonth increases at the end of every 2 months
    if (month > 0 && month % 2 === 0) {
      percentLossByMonth = percentLossByMonth + 0.5;
    }

    console.log(`percentLossByMonth: ${percentLossByMonth}`);

    // old car price
    endPriceOld = endPriceOld - endPriceOld * decimalLoss;
    console.log(`old car price: ${endPriceOld}`);

    // new car price
    endPriceNew = endPriceNew - endPriceNew * decimalLoss;
    console.log(`new car price: ${endPriceNew}`);

    // total savings
    let allSaving = savingperMonth * month;
    console.log(`savings: ${allSaving}`);

    // money left over
    balance = Math.floor(allSaving + endPriceOld - endPriceNew);
    console.log(`month: ${month} balance: ${balance}`);

    // can he afford car?
    // balance >= 0
    if (balance >= 0) {
      return [month, Math.floor(balance)];
    }
  }
}

// Tests
Test.assertSimilar(nbMonths(2000, 8000, 1000, 1.5), [6, 766]);
Test.assertSimilar(nbMonths(12000, 8000, 1000, 1.5), [0, 4000]);
Test.assertSimilar(nbMonths(8000, 8000, 1000, 1.5), [0, 0]);

/* 
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 */

function validParentheses(parens) {
  var counter = 0;
  var arr = parens.split("");

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      counter++;
    } else if (arr[i] === ")") {
      counter--;
    }
    if (counter < 0) {
      return false;
    }
  }
  if (counter === 0) {
    return true;
  } else {
    return false;
  }
}

// Tests
Test.assertEquals(validParentheses("()"), true);
Test.assertEquals(validParentheses("())"), false);

/* An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"] */

function anagramCounter(wordsArray) {
  var anagrams = {};
  var itemCount = 0;

  function countPairs(itemCount) {
    var pairCount = 0;
    for (var i = itemCount - 1; i > 0; i--) {
      pairCount += i;
    }
    return pairCount;
  }

  wordsArray.forEach(function(item) {
    var itemArray = item.split("").sort();
    if (itemArray in anagrams) {
      anagrams[itemArray] += 1;
    } else {
      anagrams[itemArray] = 1;
    }
  });

  for (var key in anagrams) {
    itemCount += countPairs(anagrams[key]);
  }

  return itemCount;
}

describe("Function anagramCounter", function() {
  Test.assertEquals(
    typeof anagramCounter([]),
    "number",
    "Is not returning a number"
  );
  Test.assertEquals(
    anagramCounter(["dell", "ledl", "abc", "cba"]),
    2,
    "This should be 2"
  );
  Test.assertEquals(
    anagramCounter(["dell", "ledl", "lled", "cba"]),
    3,
    "This should be 3"
  );
  Test.assertEquals(
    anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac", "cab"]),
    11,
    "This should be 11"
  );
});

/* Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and 
returns the maximum number of cakes Pete can bake (integer). 
For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
Ingredients that are not present in the objects, can be considered as 0. */

function cakes(recipe, available) {
  var maxCakes = 0;
  var required = 0;
  var cakeItems = [];

  var availableItems = Object.entries(available);
  var recipeItems = Object.entries(recipe);

  function compareNumbers(a, b) {
    return a - b;
  }

  if (recipeItems.length <= availableItems.length) {
    for (key in recipe) {
      required = recipe[key];

      if (required === 0) {
        return (maxCakes = 0);
      }

      for (i = 0; i < availableItems.length; i++) {
        if (availableItems[i][0] === key) {
          if (availableItems[i][1] >= required) {
            let num = Math.floor(availableItems[i][1] / required);
            cakeItems.push(num);
            cakeItems.sort(compareNumbers);
            console.log(cakeItems);
          } else {
            return maxCakes;
          }
        }
      }
    }
    maxCakes = cakeItems[0];
  }

  return maxCakes;
}

// Tests
describe("description example", function() {
  var recipe, available;

  it("pass example tests", function() {
    recipe = { flour: 500, sugar: 200, eggs: 1 };
    available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    Test.assertEquals(
      cakes(recipe, available),
      2,
      "Wrong result for example #1"
    );

    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    available = { sugar: 500, flour: 2000, milk: 2000 };
    Test.assertEquals(
      cakes(recipe, available),
      0,
      "Wrong result for example #2"
    );
  });
});

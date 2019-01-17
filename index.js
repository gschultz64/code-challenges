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

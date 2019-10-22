'use strict'

// https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript

// A string is considered to be in title case if each word in the string is either
// (a) capitalised (that is, only the first letter of the word is in upper case)
// or
// (b) considered to be an exception and put entirely into lower case
// unless
// it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional
// list of exceptions (minor words). The list of minor words will be given as a
// string with each word separated by a space. Your function should ignore the
// case of the minor words string -- it should behave in the same way even if
// the case of the minor word string is changed.
//
// ###Arguments (Haskell)
//
// First argument: space-delimited list of minor words that must always be
// lowercase except for the first word in the string.
// Second argument: the original string to be converted.

// ###Arguments (Other languages)
//
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must
// always be lowercase except for the first word in the string.
// The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase (title, minorWords) {
  // Check for second parameter and return title if empty string
  if (!title.length > 0) {
    return title
  }
  // Empty array to push changed strings into
  const newArr = []
  // Make title uniform by changing to lower case
  const titleLower = title.toLowerCase()
  // Split string by empty spaces to create array of strings
  const titleArr = titleLower.split(' ')
  // Work with minorWords parameter if it exists
  if (minorWords) {
    const minorWordsLower = minorWords.toLowerCase()
    const minorArr = minorWordsLower.split(' ')
    // iterate over titleArr, check for each string in minorArr with .includes()
    titleArr.forEach(word => {
      // if a word from title matches a word from minorWords, push it to the array as is
      if (minorArr.includes(word)) {
        newArr.push(word)
        // Otherwise, capitalize it
      } else {
        // Capitalize the first letter
        const capital = word[0].toUpperCase()
        // Eliminate the lowercase first letter
        const wordEnd = word.slice(1)
        // Join the two resulting variables into one title cased word
        const fullWord = (capital + wordEnd)
        // Push word to array
        newArr.push(fullWord)
      }
    })
    // If no minorWords parameter, work only on the title words
  } else {
    titleArr.forEach(word => {
    // Capitalize the first letter
      const capital = word[0].toUpperCase()
      // Eliminate the lowercase first letter
      const wordEnd = word.slice(1)
      // Join the two resulting variables into one title cased word
      const fullWord = (capital + wordEnd)
      // Push word to array
      newArr.push(fullWord)
    })
  }
  // Make sure the first word gets title cased
  const firstInitial = (newArr[0])[0].toUpperCase()
  const firstWordEnd = newArr[0].slice(1)
  newArr[0] = (firstInitial + firstWordEnd)
  // Join array of words into a string of space-separated words
  const titleCased = newArr.join(' ')
  return titleCased
}

// https://www.codewars.com/kata/format-a-string-of-names-like-bart-lisa-and-maggie/train/javascript
//
// Given: an array containing hashes of names
//
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.
//
// Example:
//
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
//
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
//
// list([ {name: 'Bart'} ])
// // returns 'Bart'
//
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list (names) {
  const nameArr = []
  if (names.length > 1) {
    for (let i = 0; i < (names.length - 2); i++) {
      nameArr.push(`${names[i].name}, `)
    }
    nameArr.push(`${names[(names.length - 2)].name} & `)
    nameArr.push(`${names[(names.length - 1)].name}`)
  } else if (names.length > 0) {
    return (`${names[0].name}`)
  } else {
    return ''
  }
  const str = nameArr.join('')
  return str
}

// https://www.codewars.com/kata/string-incrementer
// Your job is to write a function which increments a string, to create a new string.
//
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:
//
// foo -> foo1
//
// foobar23 -> foobar24
//
// foo0042 -> foo0043
//
// foo9 -> foo10
//
// foo099 -> foo100
//
// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (str) {
  const pattern = /(\D*)(\d*)/
  const stringList = str.split(pattern)
  if (stringList.length === 0) {
    return '1'
  } else {
    const digits = (Number(stringList[2]) + 1)
    const number = digits.toString().padStart(stringList[2].length, 0)
    const incrementedString = (stringList[1] + number)
    return incrementedString
  }
}

// https://www.codewars.com/kata/can-you-get-the-loop
// You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.
//
// Your objective is to determine the length of the loop.
//
// For example in the following picture the tail's size is 3 and the loop size is 11.
//
// http://i42.tinypic.com/27wrmed.png
// // Use the `getNext' method or 'next' property to get the following node.
//
// node.getNext()
// node.next
// Note: do NOT mutate the nodes!
//
// const LinkedList = function () {
//   this.head = new Node()
//   this.one = new Node()
//   head.setNext(one)
//   this.two = new Node()
//   one.setNext(two)
//   this.three = new Node()
//   two.setNext(three)
//   this.four = new Node()
//   three.setNext(four)
//   this.five = new Node()
//   four.setNext(five)
//   this.six = new Node()
//   five.setNext(six)
//   this.seven = new Node()
//   six.setNext(seven)
//   this.eight = new Node()
//   seven.setNext(eight)
//   eight.setNext(three)
// }
//
// const Node = function (value, next) {
//   this.value = value
//   this.next = next
// }
//
// // chai tests
// describe('LinkedList Loop', function () {
//   describe('loop_size', function () {
//     const list = new LinkedList()
//     list.head = Node.new('a',null)
//
//     it('LinkedList has a Node', function () {
//       expect(list.head).to.be.an.instanceOf(Node)
//     })

// https://www.codewars.com/kata/replace-with-alphabet-position/train/javascript
//
// Welcome.
//
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//
// If anything in the text isn't a letter, ignore it and don't return it.
//
// "a" = 1, "b" = 2, etc.
//
// Example
// alphabet_position("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition (text) {
  const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const lower = text.toLowerCase()
  const nums = []
  for (i = 0; i < lower.length; i++) {
    const index = (alpha.indexOf(lower[i]) + 1)
    if (index > 0) {
      nums.push(index)
    }
  }
  const joined = nums.join(' ')
  return joined
}

// https://www.codewars.com/kata/data-reverse/train/javascript
// A stream of data is received and needs to be reversed.
//
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
//
// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// should become:
//
// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// The total number of bits will always be a multiple of 8.
//
// The data is given in an array as such:
//
// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  const chunks = []
  // split into 8 bit segments with slice
  for (let i = 0; i < data.length; i += 8) {
    const temp = data.slice(i, i + 8)
    chunks.push(temp)
  }
  // reverse order of segments
  const reversed = chunks.reverse()
  // join with reduce and concat
  const reducer = (acc, curr) => acc.concat(curr)
  const newArr = reversed.reduce(reducer)
  return newArr
}

// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
//
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

snail = function (array) {
  const arr = []
  const pattern = function (x) {
    // 0th array lists normally (0th-nth element)
    if (x !== 'undefined' && x.length > 0) {
      x.shift().map(e => arr.push(e))
    // 1st - nth-1 xs list last element
    }
    if (x !== 'undefined' && x.length > 0) {
      x.map(e => arr.push(e.pop()))
    // last x list in reverse
    }
    if (x !== 'undefined' && x.length > 0) {
      x.pop().reverse().map(e => arr.push(e))
    // nth-1 - 2nd xs list 1st element
    }
    if (x !== 'undefined' && x.length > 0) {
      x.reverse().map(e => arr.push(e.shift()))
    }
    if (x !== 'undefined' && x.length > 0) {
      pattern(x.reverse())
    } else {
    }
  }
  // pattern begins again with 1st array as 0th array
  pattern(array)
  return arr
}

// https://www.codewars.com/kata/directions-reduction/train/javascript
// Once upon a time, on a way through the old wild west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
//
// How I crossed the desert the smart way.
// The directions given to the man are, for example, the following:
//
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
//
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or (haskell)
//
// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//
// ["WEST"]
// or
//
// { "WEST" }
// or (haskell)
//
// [West]
// or (rust)
//
// [WEST];
// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.
//
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
//
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
//
// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//
// The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
//
// Examples
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
// See more examples in "Example Tests"
// Note
// Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
// let count = 0
// function dirReduc(arr){
//
//   function isOpp(){
//
//   // if opposite,
//   if ((arr[0] === "NORTH" && arr[1] === "SOUTH") ||
//     (arr[0] === "NORTH" && arr[1] === "SOUTH") ||
//     (arr[0] === "EAST" && arr[1] === "WEST") ||
//     (arr[0] === "WEST" && arr[1] === "EAST")) {
//   // remove from arr
//     arr.shift()
//     arr.shift()
//       console.log(arr)
//       console.log(count)
//   }
//   // recursion
//   if (arr !== undefined && arr.isArray && arr.length === 0) {
//   return arr
//   } else
//   if (count > arr.length) {
//   return arr
//   } else
//   if (arr !== undefined && arr.length > 0) {
//   count += 1
//   dirReduc(arr)
//   }
//   return arr
//  }

// https://www.codewars.com/kata/how-green-is-my-valley/train/javascript
 // Input : an array of integers.
 //
 // Output : this array, but sorted in such a way that there are two wings:
 //
 // the left wing with numbers decreasing,
 //
 // the right wing with numbers increasing.
 //
 // the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.
 //
 // each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steeply as the left wing.
 //
 // The function is make_valley or makeValley or make-valley.
 //
 // a = [79, 35, 54, 19, 35, 25]
 // make_valley(a) --> [79, 35, 25, *19*, 35, 54]
 // The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
 // 79..................54
 //     35..........35
 //         25.
 //           ..19
 //
 // a = [67, 93, 100, -16, 65, 97, 92]
 // make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
 // The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
 // 100.........................97
 //     93..........
 //                .........92
 //         67......
 //                .....65
 //             -16
 //
 // a = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
 // make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
 // The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].
 //
 // a = [14,14,14,14,7,14]
 // make_valley(a) => [14, 14, 14, *7*, 14, 14]
 //
 // a = [14,14,14,14,14]
 // make_valley(a) => [14, 14, *14*, 14, 14]
 // A counter-example:
 // a = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
 // A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
 // but the right wing [4, 4, 5, 7, 7] is much flatter than the left one
 // [17, 17, 15, 14, 8].
 //
 // Summing the differences between left and right wing:
 // (17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44
 //
 // Consider the following solution:
 // [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
 // Summing the differences between left and right wing:
 // (17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
 // The right wing is nearly as steeply than the right one.
 function makeValley(arr) {
     const vallArr = []
   while (arr.length > 0) {
     const mid = (Math.ceil(vallArr.length / 2))
     // find the highest number
     const largest = arr.reduce(function(x,y){
        return (x > y) ? x : y
        })
     // remove from arr
     const index = arr.indexOf(largest)
     arr.splice(index, 1)
     // push it to the center of new array
     vallArr.splice(mid, 0, largest)
     // repeat
   }
   return vallArr
   }

// // https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0
// // Given an unsorted array A of size N of non-negative integers, find a continuous sub-array which adds to a given number S.
// //
// // Input:
// // The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. Each test case consists of two lines. The first line of each test case is N and S, where N is the size of array and S is the sum. The second line of each test case contains N space separated integers denoting the array elements.
// //
// // Output:
// // For each testcase, in a new line, print the starting and ending positions(1 indexing) of first such occuring subarray from the left if sum equals to subarray, else print -1.
// //
// // Constraints:
// // 1 <= T <= 100
// // 1 <= N <= 107
// // 1 <= Ai <= 1010
// //
// // Example:
// // Input:
// // 2
// // 5 12
// // 1 2 3 7 5
// // 10 15
// // 1 2 3 4 5 6 7 8 9 10
// // Output:
// // 2 4
// // 1 5
// //
// // Explanation :
// // Testcase1: sum of elements from 2nd position to 4th position is 12
// // Testcase2: sum of elements from 1st position to 5th position is 15
// //
// // ** For More Input/Output Examples Use 'Expected Output' option **
//
// function subArraySum(array, sum) {
//   // iterate over each element
//   // start summing with each element and
//   let add = 0
//   let i = 0
//   let flag = 0
//   let index1 = 1
//
//   if (flag===0) {
//
//   while(add<sum) {
//     add+=array[i]
//     i++
//     console.log(add)
//   }
//
//
//   if (add!=sum) {
//     flag = -1
//     console.log(flag)
//   }
//   if (flag===-1) {
//
//   }
// }
//   }
//
//   // count index of each element
//   // add consecutive elements
//   // until sum === S
//   // print first index and last index
//   // or sum > S
//   // start summing with next element
// }

// https://www.codewars.com/kata/form-the-largest/train/javascript
// Task
// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
//
// Notes
// Only Positve numbers passed to the function , numbers Contain digits [1:9] inclusive  !alt !alt
//
// Digit Duplications could occur , So also consider it when forming the Largest  !alt
//
// Input >> Output Examples:
// maxNumber (213) ==> return (321)
// Explanation:
// As 321 is _The Maximum number _ could be formed from the digits of the number *213*** .
//
// maxNumber (7389) ==> return (9873)
// Explanation:
// As 9873 is _The Maximum number _ could be formed from the digits of the number *7389*** .
//
// maxNumber (63729) ==> return (97632)
// Explanation:
// As 97632 is _The Maximum number _ could be formed from the digits of the number *63729*** .
//
// maxNumber (566797) ==> return (977665)
// Explanation:
// As 977665 is _The Maximum number _ could be formed from the digits of the number *566797*** .
//
// Note : Digit duplications are considered when forming the largest .
//
// maxNumber (17693284) ==> return (98764321)
// Explanation:
// As 98764321 is _The Maximum number _ could be formed from the digits of the number *17693284*** .

function maxNumber(n){
 n = n.toString()
 n = n.split('')
  function compareNum(a,b) {
   return a - b
  }
n.sort(compareNum)
n.reverse()
n = n.join('')
n = Number(n)
 return n
}

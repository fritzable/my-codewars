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

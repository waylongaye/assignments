// Push method
// var arr = [1,2,3,4]

// var returnedArr = arr.push('cat')

// modifies original array
// returns length of new array

// Slice method
// var arr = [1,2,3,4,5,6]

// var returnedArr = arr.slice(2,5)

// Does not modify original array
// returns modified array.

// Pop
// var arr = ['dog', 'cat', 'mouse'] // ==> ['dog', 'cat]

// var returnedArr = arr.pop() // ==> 'mouse'

// Modifies original array
// Returns the last item in array which was removed

// Shift

// var arr = ['dog', 'cat', 'mouse'] // ==> ['cat', 'mouse']

// var returnedArr = arr.shift() // ==> 'dog'

// Modifies original array
// Returns first item in array which was removed

// Unshift

// var arr = ['dog', 'cat', 'mouse'] // ==> [ 'badger', 'porcupine', 'dog', 'cat', 'mouse' ]

// var returnedArr = arr.unshift('badger', 'porcupine') // ==> 5

// Modifies original array
// Returns new length of the array

// Splice - (startingIndex, #ofItemsToRemove, itemsToAdd)

// var arr = ['pineapple', 'strawberry', 'tomato', 'avocado', 'canteloupe']

// var returnedArr = arr.splice(2,0, 'coconut', 'mango')

// modifies original array
// returns an array of all removed elements

// indexOf 

// var arr = ['pineapple', 'grapes', 'strawberry', 'tomato', 'avocado', 'canteloupe', 'grapes']

// var returnedArr = arr.indexOf('grapes', 2)

// does not modify original array
// returns the position or index of the item searched

// Join

// var str = 'Hello world'

// var splitStr = str.split('') // split turns strings into arrays

// var strArr = splitStr.join(',') // join turns arrays into strings
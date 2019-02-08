// var matrix = [[1,2,3],[5,6,7],[9,8,4]]

// for(var i = 0; i < matrix.length;i++){
//     // console.log(multiDimensionalArr[i])
//     for(var j = 0; j < matrix[i].length;j++ ){
//       console.log(matrix[i][j])
//     }
// }

// console.log(matrix[1][1])


// [[0,0,0],
//  [0,0,0],
//  [0,0,0]]
var matrix = []

for(var i = 0; i < 3; i++){
  matrix.push([])
  for(var a = 0; a < 3; a++){
    matrix[i].push(0)
  }
}
console.log(matrix)

// matrix = [[0,0,0],[0,0,0],[0,0,0]]


// function Person (name, isAlive, hairColor){
//   this.name = name;
//   this.isAlive = isAlive;
//   this.hairColor - hairColor;
//   this.speak = function speak(){
//     console.log(name)
//   }
// }
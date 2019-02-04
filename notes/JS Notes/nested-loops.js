// var multiDimensionalArr = [[1,2,3],[4,22,5,6],[7,8,9]]

// for(var i = 0; i < multiDimensionalArr.length;i++){
//     // console.log(multiDimensionalArr[i])
//     for(var j = 0; j < multiDimensionalArr[i].length;j++ ){
//       console.log(multiDimensionalArr[i][j])
//     }
// }

// console.log(multiDimensionalArr[1][1])


// [[0,0,0],
//  [0,0,0],
//  [0,0,0]]
var matrix = []

for(var i = 2; i < 3;i++){
  matrix.push([])
  for(var a = 0; a < 3;a++){
    matrix[i].push(0)
  }
}
console.log(matrix)

// matrix = [[0,0,0],[0,0,0],[0,0,0]]
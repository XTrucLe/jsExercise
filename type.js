// function arrToObj(arr) {
//   return arr.reduce((obj, item) => {
//     obj[item[0]] = item[1];
//     return obj;
//   }, {});
// }

// function arrToObj1(arr) {
//   var newArr={}
//   for (let i in arr) {  
//     newArr[arr[i][0]]= arr[i][1]  
//   }
//   return newArr
// }
// // Expected results:
// var arr = [
//   ['name', 'Thanh Long'],
//   ['age', 18],
// ];
// console.log(arrToObj(arr)); //{name:'Thanh Long', age: 18}

// function totalSalaryForDeep(employeer) {
//   const totalSalaryByDeep = {};
//   employeer.forEach((employee) => {
//     if (!totalSalaryByDeep[employee.deep]) {
//       totalSalaryByDeep[employee.deep] = 0;
//     }
//     totalSalaryByDeep[employee.deep] += employee.salary;
    
//   });
//   return Object.entries(totalSalaryByDeep).map((entry) => ({
//     deep: entry[0],
//     salary: entry[1],
//   }));
// }
// function totalSalaryForDeep(employeer) {
//   const totalSalaryByDeep = new Map();

//   employeer.forEach((employee) => {
//     totalSalaryByDeep.set(employee.deep, (totalSalaryByDeep.get(employee.deep) || 0) + employee.salary);
//   });

//   return Array.from(totalSalaryByDeep.entries()).map((entry) => ({
//     deep: entry[0],
//     salary: entry[1],
//   }));
// }
const employeer = [
  { id: "0", name: "Williams", deep: "it", salary: 2000 },
  { id: "0", name: "Brown", deep: "hr", salary: 1100 },
  { id: "0", name: "Thomas", deep: "hr", salary: 800 },
  { id: "0", name: "Roberts", deep: "it", salary: 2000 },
]
console.log(totalSalaryForDeep(employeer))
//expect result: [{deep:"it",salary:4000},{deep:"hr",salary:1900}]

Array.prototype.myMap = function(cb) {
  var newArr=[], arrLength= this.length
  for(let i=0;i<arrLength;++i){
      cb(this[i], i);
      newArr.push(this[i]*i)
  }
  return newArr
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]



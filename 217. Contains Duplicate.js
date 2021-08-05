// // https://leetcode.com/problems/contains-duplicate/
// // https://www.youtube.com/watch?v=4oZsPXG9B94&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=3
//
// const containsDuplicate = function (nums) {
//   const sorted = nums.sort();
//
//   let isDuplicate = false;
//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       isDuplicate = true;
//       break;
//     }
//   }
//   return isDuplicate;
// };
//
// const input = [1, 2, 3, 1];
//
// console.log(containsDuplicate(input));

const containsDuplicate = function (nums) {
  const countNums = {};
  let isDuplicated = false;
  nums.forEach(num => {
    if (countNums[num] === undefined) {
      countNums[num] = 1;
    } else {
      isDuplicated = true;
    }
  });
  return isDuplicated;
};

const input = [1, 2, 3, 1];
console.log(containsDuplicate(input));

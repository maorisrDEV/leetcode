/**
 * naive solution - not using the fact the array is sorted
 * @param numbers
 * @param target
 * @returns {null|number[]}
 */
const twoSumNaive = function(numbers, target) {
    for (let i = 0; i <= numbers.length; i++) {
        for (let j = 0; i <= j; j++) {
            if (typeof numbers[i] !== "number" || typeof numbers[j] !== "number") {
                return null;
            }
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};

/**
 * good solution
 * https://www.youtube.com/watch?v=sAQT4ZrUfWo&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=8
 * @param numbers
 * @param target
 * @returns {null|number[]}
 */
const twoSum = function(numbers, target) {
    let a_pointer = 0;
    let b_pointer = numbers.length - 1;

    while (a_pointer <= b_pointer) {
        const sum = numbers[a_pointer] + numbers[b_pointer];
        if(sum > target) {
            b_pointer--;
        }
        else if (sum < target) {
            a_pointer++;
        }
        else if (sum === target) {
            return [a_pointer + 1, b_pointer + 1];
        }
    }
    return [];
};

const numbers = [2,11,7,15], target = 9;
const output = twoSum(numbers, target);
console.log(output);

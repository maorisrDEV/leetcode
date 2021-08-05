// https://leetcode.com/problems/pascals-triangle/
// https://www.youtube.com/watch?v=icoql2WKmbA&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-&index=2

const generate = function (numRows) {
  const triangle = [];
  if (numRows === 0) {
    return triangle;
  }

  triangle.push([1]);

  for (let i = 1; i < numRows; i++) {
    const prev_row = triangle[i - 1];
    const row = [1];

    for (let j = 1; j < i; j++) {
      row.push(prev_row[j - 1] + prev_row[j]);
    }

    row.push(1);
    triangle.push(row);
  }
  return triangle;
};

console.log(generate(5));

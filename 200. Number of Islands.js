// https://leetcode.com/problems/number-of-islands
// https://www.youtube.com/watch?v=U6-X_QOwPcs&list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-

const numIslands = function (grid) {
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count += 1;
                callBFS(grid, i, j);
            }
        }
    }
    return count;
};

const callBFS = function (grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0')
        return;

    grid[i][j] = '0';
    callBFS(grid, i + 1, j);
    callBFS(grid, i - 1, j);
    callBFS(grid, i, j - 1);
    callBFS(grid, i, j + 1);
}

const input = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
const output = numIslands(input);

console.log(output);

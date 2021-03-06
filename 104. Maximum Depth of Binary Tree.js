/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    // use a handler function since it's easier to write and think about recursive code this way. You start at a num/depth value of 1 because of the definition of depth.
    return maxDepthHandler(root, 1)

};
const maxDepthHandler = function (root, num) {
// here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
    if (root == null) {
        return 0
    }
// this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
    if (root.right == null && root.left == null) {
        return num
    }
//Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
    if (root.right && root.left) {
        return Math.max(maxDepthHandler(root.right, num + 1), maxDepthHandler(root.left, num + 1))
    } else if (root.right != null) {
        return maxDepthHandler(root.right, num + 1)
    } else {
        return maxDepthHandler(root.left, num + 1)
    }
};

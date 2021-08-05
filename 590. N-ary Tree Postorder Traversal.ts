
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
    const stack = [];
    const output = [];

    if (!root) {
        return output;
    }
    stack.push(root); // push to end of the array
    while (stack.length > 0) {
        const node = stack.pop(); // remove last item
        output.unshift(node.val); // push to start of the array
        node.children.forEach(child => {
            stack.push(child); // push to end of the array
        });
    }
    return output;
}


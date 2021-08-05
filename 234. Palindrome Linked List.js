/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
    // Pass empty or single-item linked lists
    if (!head || !head.next) return true;

    // Traverse the linked list in order to find the mid-point (slow)
    let slow = head,
        fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse the second half of the linked list
    slow = reverseLinkedList(slow);
    fast = head;

    // Compare the original linked list with the reversed second half
    while (slow && fast) {
        if (slow.val !== fast.val) {
            // If a mismatch is detected, break out
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }

    return true;
};

const reverseLinkedList = function (head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};

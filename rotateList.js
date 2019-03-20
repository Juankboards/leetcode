/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL

Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

*/

function rotateList(head, k) {
    let nodes = []
    let current = head
    while(current) {
        nodes.push(current)
        current = current.next
    }
    let len = nodes.length
    let steps = k % len
    if(!steps) return head
    nodes[len - 1].next = nodes[0]
    nodes[len - 1 - steps].next = null
    return nodes[len - steps]
}

function rotateList2(head, k) {
    let len = 0
    let node = head
    let rotated = null
    while(node) {
        len++
        if(!node.next) {
            node.next = head
            break
        }
        node = node.next
    }

    let steps = k % len

    if(!steps) {
        node.next = null
        return head
    }

    while(steps < len) {
        node = node.next
        rotated = node.next
        steps++
    }
    node.next = null
    return rotated
}
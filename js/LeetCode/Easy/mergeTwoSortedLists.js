/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

// input is 2 arr of type:nums, values range from -100 to 100, both lists are sorted in non-decreasing order, whole numbers, can have empty arrs

// return arr1 and arr2 merged and sorted in asc order
// array

// list 1 = [1, 2, 4], list 2 = [1, 3, 4] -> output: [1, 1, 2, 3, 4, 4]
// list 1 = [], list 2 = [] -> output: []
// list 1 = [], list 2 = [1, 2, 3] -> output: [1, 2, 3]
// list 1 = [4, 6, 8, 9], list 2 = [3, 5, 7] -> output: [3, 4, 5, 6, 7, 8, 9]

function mergeTwoLists(list1, list2){
    // merge list
    const mergedList = list1.concat(list2)
    // sort merged list
    return mergedList.sort((a, b) => a - b)  
  }
  
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  // Using original nodes (no copies)
  function mergeTwoLists(l1, l2){
    const dummy = new ListNode(-Infinity)
    let prev = dummy
  
    while(l1 && l2){
      if(l1.val <= l2.val){
        prev.next = l1
        prev = l1
        l1 = l1.next
      }else{
        prev.next = l2
        prev = l2
        l2 = l2.next
      }
    }
  
    if(!l1) prev.next = l2
    if(!l2) prev.next = l1
  
    return dummy.next
  }
  
  console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]), [1, 1, 2, 3, 4, 4])
  console.log(mergeTwoLists([], []), [])
  console.log(mergeTwoLists([], [1, 2, 3]), [1, 2, 3])
  console.log(mergeTwoLists([4, 6, 8, 9], [3, 5, 7]), [3, 4, 5, 6, 7, 8, 9])
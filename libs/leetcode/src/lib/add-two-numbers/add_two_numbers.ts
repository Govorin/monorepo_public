export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next || null;
  }
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (!l1 && !l2) return null;
  const value = (l1?.val || 0) + (l2?.val || 0);
  const next = value > 9 ? new ListNode((l1?.next?.val || 0) + 1, l1?.next?.next) : null;

  return new ListNode(value % 10, addTwoNumbers(next || l1?.next || null, l2?.next || null));
};

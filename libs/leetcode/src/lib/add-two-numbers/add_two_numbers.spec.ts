import { addTwoNumbers, ListNode } from '@monorepo/leetcode';

describe('Add Two Numbers', () => {
  it('Example 1:', () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4))),
      ),
    ).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))));
  });
  it('Example 2:', () => {
    expect(addTwoNumbers(new ListNode(0), new ListNode(0))).toEqual(new ListNode(0));
  });
  it('Example 3:', () => {
    expect(
      addTwoNumbers(
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))),
          ),
        ),
        new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
      ),
    ).toEqual(
      new ListNode(
        8,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))),
          ),
        ),
      ),
    );
  });
});

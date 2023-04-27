import { tribonacci } from '@monorepo/leetcode';

describe('N-th Tribonacci Number', () => {
  it('Example 1:', () => {
    expect(tribonacci(4)).toEqual(4);
  });
  it('Example 2:', () => {
    expect(tribonacci(25)).toEqual(1389537);
  });
  it('Example 3:', () => {
    expect(tribonacci(500)).toEqual(7.101592864730323e131);
  });
});

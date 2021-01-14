/*
 * @description:
 * @author: xiaoxiong
 * @lastEditors: xiaoxiong
 * @Date: 2021-01-07 15:50:11
 */
const sum = function (a: number, b: number) {
  return a + b;
};

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
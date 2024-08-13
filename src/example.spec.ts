function addNumbers(num1, num2) {
  return num1 + num2;
}
describe('addNumbers', () => {
  it('add two numbers', () => {
    expect(2 + 2).toEqual(addNumbers(2, 2));
  });
});

// describe('Example test', () => {
//   it('equals true', () => {
//     expect(true).toEqual(true);
//   });
// });

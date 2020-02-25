const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {

  const testingVal = "U of U";

  const emp = new Intern("Foo", 1, "test@test.com", testingVal);

  expect(emp.school).toBe(testingVal);
});

test('getRole() should return "Intern"', () => {

  const testingVal = "Intern";

  const emp = new Intern("Foo", 1, "test@test.com", "U of U");

  expect(emp.getRole()).toBe(testingVal);
});

test("Can get school via getSchool()", () => {

  const testingVal = "U of U";

  const emp = new Intern("Foo", 1, "test@test.com", testingVal);
  
  expect(emp.getSchool()).toBe(testingVal);
});
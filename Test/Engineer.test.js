const Engineer = require("../lib/Engineer");

test("set github", () => {

  const testingVal = "GHUserName";

  const emp = new Engineer("Foo", 1, "test@test.com", testingVal);

  expect(emp.github).toBe(testingVal);
});

test('getRole() should return "Engineer"', () => {

  const testingVal = "Engineer";

  const emp = new Engineer("Foo", 1, "test@test.com", "GHUserName");

  expect(emp.getRole()).toBe(testingVal);
});

test("GitHub username with getGithub()", () => {

  const testingVal = "GHUserName";

  const emp = new Engineer("Foo", 1, "test@test.com", testingVal);

  expect(emp.getGithub()).toBe(testingVal);
});
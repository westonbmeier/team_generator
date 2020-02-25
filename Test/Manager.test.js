const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Set office number", () => {

  const testingVal = 100;

  const emp = new Manager("Foo", 1, "test@test.com", testingVal);

  expect(emp.officeNumber).toBe(testingVal);
});

test("getRole() returns \"Manager\"", () => {

  const testingVal = "Manager";

  const emp = new Manager("Foo", 1, "test@test.com", 100);

  expect(emp.getRole()).toBe(testingVal);
});

test("Gets office number with getOffice()", () => {

  const testingVal = 100;

  const emp = new Manager("Foo", 1, "test@test.com", testingVal);

  expect(emp.getOfficeNumber()).toBe(testingVal);
});
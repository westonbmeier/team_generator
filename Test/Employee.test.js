const Employee = require("../lib/employee");

test("Employee instance", () => {

  const emp = new Employee();

  expect(typeof(emp)).toBe("object");
});

test("Can set name", () => {

  const name = "Wes";

  const emp = new Employee(name);

  expect(emp.name).toBe(name);
});

test("Sets ID", () => {
  const testingVal = 100;
  const emp = new Employee("Foo", testingVal);
  expect(emp.id).toBe(testingVal);
});

test("Can set email via constructor argument", () => {

  const testingVal = "wes@test.com";

  const emp = new Employee("Foo", 1, testingVal);

  expect(emp.email).toBe(testingVal);
});

test("Can get name with getName()", () => {

  const testingVal = "Wes";

  const emp = new Employee(testingVal);

  expect(emp.getName()).toBe(testingVal);
});

test("Can get id with getId()", () => {

  const testingVal = 100;

  const emp = new Employee("Foo", testingVal);

  expect(emp.getId()).toBe(testingVal);
});

test("Can get email with getEmail()", () => {

  const testingVal = "wes@test.com";

  const emp = new Employee("Foo", 1, testingVal);

  expect(emp.getEmail()).toBe(testingVal);
});

test("getRole() returns \"Employee\"", () => {

  const testingVal = "Employee";

  const emp = new Employee("Wes", 1, "wes@test.com");
  
  expect(emp.getRole()).toBe(testingVal);
});
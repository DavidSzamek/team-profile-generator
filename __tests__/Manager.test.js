const Manager = require("../lib/Manager");

test("Function to set office number", () => {
    const officeNumber = "007";
    const employee = new Manager("James Bond", 7, "james.bond@casino.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("FunctiongetRole() should return Manager", () => {
    const role = "Manager";
    const employee = new Manager("James Bond", 7, "james.bond@casino.com", "jamesbond");
    expect(employee.getRole()).toBe(role);
  });
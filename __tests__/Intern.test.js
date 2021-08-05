const Intern = require("../lib/Intern");

test("Function to set school", () => {
    const school = "Fettes College";
    const employee = new Intern("James Bond", 7, "james.bond@casino.com", school);
    expect(employee.school).toBe(school);
  });

  test("Function getRole() should return Intern", () => {
    const role = "Intern";
    const employee = new Intern("James Bond", 7, "james.bond@casino.com", "jamesbond");
    expect(employee.getRole()).toBe(role);
  });
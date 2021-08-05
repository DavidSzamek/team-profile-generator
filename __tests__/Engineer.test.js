const Engineer = require("../lib/Engineer");

test("Function to set GitHub username", () => {
    const github = "jamesbond";
    const employee = new Engineer("James Bond", 7, "james.bond@casino.com", github);
    expect(employee.github).toBe(github);
  });

  test("Function getRole() should return Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("James Bond", 7, "james.bond@casino.com", "jamesbond");
    expect(employee.getRole()).toBe(role);
  });
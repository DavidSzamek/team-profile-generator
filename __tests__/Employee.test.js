const Employee = require("../lib/Employee");

test("Function to set employee name", () => {
    const name = "James Bond";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("Function to set user ID", () => {
    const id = "001";
    const employee = new Employee("James Bond", id, "john.doe@parks.com");
    expect(employee.id).toBe(id);
  });

test("Function getEmail() should return the users email", () => {
    const email = "john.doe@parks.com";
    const employee = new Employee("James Bond", 7, email);
    expect(employee.getEmail()).toBe(email);
  });

test("Function getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("James Bond", 7, "john.doe@parks.com");
    expect(employee.getRole()).toBe(role);
  });

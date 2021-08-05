const Employee = require("../lib/Employee");

test("Ability to set employee name using the constructor function", () => {
    const name = "John Doe";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});


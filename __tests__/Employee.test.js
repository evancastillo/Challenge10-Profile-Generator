const Employee = require('../lib/Employee');

test('creates the employee', () => {
    const employee = new Employee('Evan C', '123', 'evan@evan.com');

    expect(employee.name).toBe('Evan C');
    expect(employee.id).toBe('123');
    expect(employee.role).toBe('Employee');
});

test("get employee name", () => {
    const employee = new Employee('Evan C', '123', 'evan@evan.com');
    expect(employee.getName()).toBe('Evan C');
});

test("get employee id", () => {
    const employee = new Employee('Evan C', '123', 'evan@evan.com');
  
    expect(employee.getId()).toBe('123');
  });
  
  test("get employee email", () => {
    const employee = new Employee('Evan C', '123', 'evan@evan.com');
  
    expect(employee.getEmail()).toBe('evan@evan.com');
  });
  
  test("get employee role", () => {
    const employee = new Employee('Evan C', '123', 'evan@evan.com');
  
    expect(employee.getRole()).toBe('Employee');
  });
const Manager = require('../lib/Manager');

test("creates a manager", () => {
  const manager = new Manager('Evan C', '11111', 'evan@evan.com', 123);

  expect(manager.name).toBe('Evan C');
  expect(manager.id).toBe('11111');
  expect(manager.email).toBe('evan@evan.com');
  expect(manager.role).toBe('Manager');
  expect(manager.officeNumber).toBe(123);
});

test("get manager name", () => {
  const manager = new Manager('Evan C', '11111', 'evan@evan.com', 123);

  expect(manager.getName()).toBe('Evan C');
});

test("get manager id", () => {
  const manager = new Manager('Evan C', '11111', 'evan@evan.com', 123);

  expect(manager.getId()).toBe('11111');
});

test("get manager email", () => {
  const manager = new Manager('Evan C', '11111', 'evan@evan.com', 123);

  expect(manager.getEmail()).toBe('evan@evan.com');
});

test("get manager role", () => {
  const manager = new Manager('Evan C', '11111', 'evan@evan.com', 123);

  expect(manager.getRole()).toBe('Manager');
});

test("get manager office number", () => {
  const manager = new Manager('Evan C', '11111', 'evan@evan.com', 123);

  expect(manager.getOfficeNumber()).toBe(123);
});
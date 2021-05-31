const Intern = require('../lib/Intern');

test("creates an intern", () => {
  const intern = new Intern('Evan C', '12345', 'evan@evan.com', 'Solano Community College');

  expect(intern.name).toBe('Evan C');
  expect(intern.id).toBe('12345');
  expect(intern.email).toBe('evan@evan.com'); 
  expect(intern.role).toBe('Intern');
  expect(intern.school).toBe('Solano Community College');
});

test("get intern name", () => {
  const intern = new Intern('Evan C', '12345', 'evan@evan.com', 'Solano Community College');

  expect(intern.getName()).toBe('Evan C');
});

test("get intern id", () => {
  const intern = new Intern('Evan C', '12345', 'evan@evan.com', 'Solano Community College');

  expect(intern.getId()).toBe('12345');
});

test("get intern email", () => {
  const intern = new Intern('Evan C', '12345', 'evan@evan.com', 'Solano Community College');

  expect(intern.getEmail()).toBe('evan@evan.com');
});

test("get intern role", () => {
  const intern = new Intern('Evan C', '12345', 'evan@evan.com', 'Solano Community College');

  expect(intern.getRole()).toBe('Intern');
});

test("get intern school", () => {
  const intern = new Intern('Evan C', '12345', 'evan@evan.com', 'Solano Community College');

  expect(intern.getSchool()).toBe('Solano Community College');
});

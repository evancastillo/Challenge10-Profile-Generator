const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const engineer = new Engineer('Evan C', '1234', 'evan@evan.com', 'evangit');

    expect(engineer.name).toBe('Evan C');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('evan@evan.com');
    expect(engineer.role).toBe('Engineer');
    expect(engineer.github).toBe('evangit');
});

test("get engineer name", () => {
    const engineer = new Engineer('Evan C', '1234', 'evan@evan.com', 'evangit');
  
    expect(engineer.getName()).toBe('Evan C');
  });
  
  test("get engineer id", () => {
    const engineer = new Engineer('Evan C', '1234', 'evan@evan.com', 'evangit');
  
    expect(engineer.getId()).toBe('1234');
  });
  
  test("get engineer email", () => {
    const engineer = new Engineer('Evan C', '1234', 'evan@evan.com', 'evangit');
  
    expect(engineer.getEmail()).toBe('evan@evan.com');
  });
  
  test("get engineer role", () => {
    const engineer = new Engineer('Evan C', '1234', 'evan@evan.com', 'evangit');
  
    expect(engineer.getRole()).toBe('Engineer');
  });
  
  test("get engineer github", () => {
    const engineer = new Engineer('Evan C', '1234', 'evan@evan.com', 'evangit');
  
    expect(engineer.getGithub()).toBe('evangit');
  });
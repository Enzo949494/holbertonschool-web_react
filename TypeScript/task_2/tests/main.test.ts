// filepath: /home/ko/holbertonschool-web_react/TypeScript/task_2/tests/main.test.ts

describe('Task 2', () => {
  // Test createEmployee
  test('createEmployee should return the correct type based on salary', () => {
    const { createEmployee, Director, Teacher } = require('../js/main');
    
    const employee1 = createEmployee(200);
    const employee2 = createEmployee(1000);
    const employee3 = createEmployee('$500');
    
    expect(employee1 instanceof Teacher).toBeTruthy();
    expect(employee2 instanceof Director).toBeTruthy();
    expect(employee3 instanceof Director).toBeTruthy();
  });
  
  // Test executeWork
  test('executeWork should call the correct task based on employee type', () => {
    const { createEmployee, executeWork } = require('../js/main');
    
    expect(executeWork(createEmployee(200))).toBe('Getting to work');
    expect(executeWork(createEmployee(1000))).toBe('Getting to director tasks');
  });
  
  // Test teachClass
  test('teachClass should return the correct string based on subject', () => {
    const { teachClass } = require('../js/main');
    
    expect(teachClass('Math')).toBe('Teaching Math');
    expect(teachClass('History')).toBe('Teaching History');
  });
});
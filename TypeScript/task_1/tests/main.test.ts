import { Teacher } from '../js/main';

describe('Task 1', () => {
  // Test Teacher interface
  test('Teacher interface should be correctly defined', () => {
    // Créer un nouvel objet qui correspond à l'interface Teacher
    const teacher: Teacher = {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      location: 'London'
    };
    
    expect(teacher).toHaveProperty('firstName');
    expect(teacher).toHaveProperty('lastName');
    expect(teacher).toHaveProperty('fullTimeEmployee');
    expect(teacher).toHaveProperty('location');
  });
  
  // Test printTeacher function
  test('printTeacher function should format name correctly', () => {
    const printTeacher = require('../js/main').printTeacher;
    expect(printTeacher('John', 'Doe')).toBe('J. Doe');
    expect(printTeacher('Jane', 'Smith')).toBe('J. Smith');
  });
  
  // Test StudentClass
  test('StudentClass should have required methods', () => {
    const StudentClass = require('../js/main').StudentClass;
    const student = new StudentClass('Alice', 'Johnson');
    
    expect(student.workOnHomework()).toBe('Currently working');
    expect(student.displayName()).toBe('Alice');
  });
});
// filepath: /home/ko/holbertonschool-web_react/TypeScript/task_0/tests/main.test.ts

// Importez directement vos types et variables
import { Student, studentsList } from '../js/main';

describe('Task 0 Structure', () => {
  test('Student interface should have firstName, lastName and age properties', () => {
    // Vérifie que la liste d'étudiants existe et contient des éléments
    expect(studentsList).toBeDefined();
    expect(studentsList.length).toBeGreaterThan(0);
    
    // Vérifie que chaque étudiant a les propriétés requises
    const student = studentsList[0];
    expect(student).toHaveProperty('firstName');
    expect(student).toHaveProperty('lastName');
    expect(student).toHaveProperty('age');
    expect(student).toHaveProperty('location');
  });
});
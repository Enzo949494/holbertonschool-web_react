// filepath: /home/ko/holbertonschool-web_react/TypeScript/task_3/tests/main.test.ts

import { RowID, RowElement } from '../js/interface';
import * as CRUD from '../js/crud';

describe('Task 3 - CRUD operations', () => {
  // Mock console.log to capture output
  const originalLog = console.log;
  // Définir le type explicitement pour consoleOutput
  let consoleOutput: string[] = [];
  
  beforeEach(() => {
    consoleOutput = [];
    console.log = jest.fn((...args) => {
      consoleOutput.push(args.join(' '));
    });
  });
  
  afterEach(() => {
    console.log = originalLog;
  });
  
  test('CRUD functions should work with correct types', () => {
    // Nous utilisons les types importés directement
    const row: RowElement = { firstName: 'Guillaume', lastName: 'Salva' };
    
    // Test insert
    const newRowID: RowID = CRUD.insertRow(row);
    expect(typeof newRowID).toBe('number');
    expect(consoleOutput[0]).toContain('Insert row');
    
    // Test update
    const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
    CRUD.updateRow(newRowID, updatedRow);
    expect(consoleOutput[1]).toContain('Update row');
    
    // Test delete
    CRUD.deleteRow(newRowID);
    expect(consoleOutput[2]).toContain('Delete row id');
  });
});
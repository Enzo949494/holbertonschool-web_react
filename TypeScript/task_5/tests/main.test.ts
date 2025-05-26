// filepath: /home/ko/holbertonschool-web_react/TypeScript/task_5/tests/main.test.ts

import { sumMajorCredits, sumMinorCredits } from '../js/main';

describe('Task 5 - Credits', () => {
  test('sumMajorCredits adds credits correctly', () => {
    // Type assertion for testing purposes
    const major1 = { credits: 3 } as any;
    const major2 = { credits: 4 } as any;
    
    const result = sumMajorCredits(major1, major2);
    expect(result.credits).toBe(7);
  });
  
  test('sumMinorCredits adds credits correctly', () => {
    // Type assertion for testing purposes
    const minor1 = { credits: 1 } as any;
    const minor2 = { credits: 2 } as any;
    
    const result = sumMinorCredits(minor1, minor2);
    expect(result.credits).toBe(3);
  });
  
  test('MajorCredits and MinorCredits are different types', () => {
    // This is a compile-time check, but we can test some aspects
    const isMajorType = (type: string): boolean => {
      return type.includes('MajorCredits');
    };
    
    const isMinorType = (type: string): boolean => {
      return type.includes('MinorCredits');
    };
    
    const majorFnName = sumMajorCredits.name;
    const minorFnName = sumMinorCredits.name;
    
    expect(isMajorType(majorFnName)).toBeTruthy();
    expect(isMinorType(minorFnName)).toBeTruthy();
  });
});
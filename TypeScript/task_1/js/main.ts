/**
 * Teacher interface with required and optional fields
 * Uses index signature to allow for additional properties
 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // Index signature to allow additional properties
}

// Example usage of Teacher interface
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Another example with more properties
const teacher4: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
  contract: true,
  rating: 4.7,
  department: 'Computer Science',
};

console.log(teacher4);

/**
 * Directors interface that extends Teacher
 * Adds required numberOfReports field
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage of Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

/**
 * Interface for the printTeacher function
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Prints teacher name in format "F. LastName"
 * @param firstName Teacher's first name
 * @param lastName Teacher's last name
 * @returns Formatted string with first initial and full last name
 */
export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Should print: J. Doe
console.log(printTeacher("Jane", "Smith")); // Should print: J. Smith

/**
 * Interface for StudentClass constructor
 */
export interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Interface for StudentClass methods
 */
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Implementation of StudentClass
 */
export class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage of StudentClass
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // Should print: Alice
console.log(student.workOnHomework()); // Should print: Currently working

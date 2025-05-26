console.log('JS loaded!');

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function printEmployeeType(employee: Teacher | Director): void {
  if (employee instanceof Teacher) {
    console.log('Teacher');
  } else if (employee instanceof Director) {
    console.log('Director');
  }
}

// Additional logs for debugging
console.log("Creating employee with salary 200:");
printEmployeeType(createEmployee(200));      // Teacher

console.log("Creating employee with salary 1000:");
printEmployeeType(createEmployee(1000));     // Director

console.log("Creating employee with salary '$500':");
printEmployeeType(createEmployee('$500'));   // Director

// Also display created objects
console.log("Created objects:");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

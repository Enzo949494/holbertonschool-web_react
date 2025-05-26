// Au lieu d'utiliser des références, nous allons créer et exporter le namespace
export namespace Subjects {
  // Définir l'interface Teacher
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }
  
  // Définir la classe Subject
  export class Subject {
    protected teacher: Teacher | undefined;
    
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
  
  // Définir la classe Cpp
  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }
    
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
  
  // Définir la classe React
  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }
    
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
  
  // Définir la classe Java
  export class Java extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }
    
    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingJava === undefined || this.teacher.experienceTeachingJava <= 0) {
        return "No available teacher";
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
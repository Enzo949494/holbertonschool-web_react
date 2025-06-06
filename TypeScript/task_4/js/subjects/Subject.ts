/// <reference path="Teacher.ts" />

namespace Subjects {
  export class Subject {
    protected teacher: Teacher | undefined;
    
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}

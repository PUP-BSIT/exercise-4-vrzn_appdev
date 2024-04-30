import { Component } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  students: Student[] = [
    { studentId: 0, givenName: 'Jhean', lastName: 'Galope', finalGrade: 1.25 },
    { studentId: 1, givenName: 'Khen', lastName: 'Casane', finalGrade: 1.25 },
  ];

  newStudent: Student = {
    studentId: null,
    givenName: '',
    lastName: '',
    finalGrade: null,
  };

  addStudent() {
    let studentId = this.students.length + 1;

    this.newStudent = {
      studentId: studentId,
      givenName: this.newStudent.givenName,
      lastName: this.newStudent.lastName,
      finalGrade: this.newStudent.finalGrade,
    };

    this.students.push(this.newStudent);

    this.newStudent = {
      studentId: null,
      givenName: '',
      lastName: '',
      finalGrade: null,
    };
  }

  onUpdate(studentId: number) {
    const studentToUpdate = this.students.findIndex(
      (student) => student.studentId === studentId
    );
    this.newStudent = { ...this.students[studentToUpdate] };
  }

  updateStudent() {
    this.students[this.newStudent.studentId] = { ...this.newStudent };

    this.newStudent = {
      studentId: null,
      givenName: '',
      lastName: '',
      finalGrade: null,
    };
  }

  removeStudent(id: number): void {
    const index = this.students.findIndex(
      (student) => student.studentId === id
    );

    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }
}

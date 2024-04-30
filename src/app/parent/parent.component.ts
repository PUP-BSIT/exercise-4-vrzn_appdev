import { Component } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
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

  isUpdating: boolean = false;

  validateInput(event: any) {
    const pattern = /[a-zA-Z]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  addOrUpdateStudent() {
    if (this.newStudent.studentId === null) {
      let studentId = this.students.length;
      this.newStudent.studentId = studentId;
      this.students.push(this.newStudent);
      this.isUpdating = false;
    } else {
      const index = this.students.findIndex(
        (student) => student.studentId === this.newStudent.studentId
      );
      if (index !== -1) {
        this.students[index] = { ...this.newStudent };
      }
    }

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
    this.isUpdating = true;
  }

  removeStudent(id: number): void {
    const index = this.students.findIndex(
      (student) => student.studentId === id
    );

    if (index !== -1) {
      this.students.splice(index, 1);
      this.newStudent = {
        studentId: null,
        givenName: '',
        lastName: '',
        finalGrade: null,
      };
      this.isUpdating = false;
    }
  }
}

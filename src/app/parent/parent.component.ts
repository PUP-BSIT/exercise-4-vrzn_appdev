import { Component } from '@angular/core';
import { Student } from '../../model/student';
declare var $: any;

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  students: Student[] = [
    { studentId: 0, givenName: 'Jhean', lastName: 'Galope', finalGrade: 1.0 },
    { studentId: 1, givenName: 'Dro', lastName: 'Reyes', finalGrade: 1.25 },
    { studentId: 2, givenName: 'Adrian', lastName: 'Naoe', finalGrade: 1.5 },
    { studentId: 3, givenName: 'Mark', lastName: 'Odrunia', finalGrade: 2.5 },
    { studentId: 4, givenName: 'Harrel', lastName: 'Go', finalGrade: 3.0 },
  ];

  newStudent: Student = {
    studentId: null,
    givenName: '',
    lastName: '',
    finalGrade: null,
  };

  isUpdating: boolean = false;
  alertMessage: string | null = null;
  message: string | null = null;
  studentToDeleteId: number | null = null;

  validateInput(event: any) {
    const pattern = /[a-zA-Z]/;
    if (!pattern.test(event.key)) {
      event.preventDefault();
    }
  }

  addOrUpdateStudent() {
    if (
      this.newStudent.givenName.length < 2 &&
      this.newStudent.lastName.length < 2 &&
      this.newStudent.finalGrade !== null
    ) {
      this.alertMessage =
        'Given name and last name must have at least 2 letters.';
    } else if (this.newStudent.givenName.length < 2) {
      this.alertMessage = 'Given name must have at least 2 letters.';
    } else if (this.newStudent.lastName.length < 2) {
      this.alertMessage = 'Last name must have at least 2 letters.';
    } else if (this.newStudent.finalGrade === null) {
      this.alertMessage = 'Please Select Final Grade.';
    }

    if (this.alertMessage) {
      this.alertMessage = this.alertMessage;
      setTimeout(() => {
        this.alertMessage = null;
      }, 3000);
      return;
    }

    if (this.newStudent.studentId === null) {
      let studentId = this.students.length;
      this.newStudent.studentId = studentId;
      this.students.push(this.newStudent);
      this.isUpdating = false;
      this.message = 'Student added successfully.';
    } else {
      const index = this.students.findIndex(
        (student) => student.studentId === this.newStudent.studentId
      );
      if (index !== -1) {
        this.students[index] = { ...this.newStudent };
        this.message = 'Student updated successfully.';
      }
      this.isUpdating = false;
    }

    setTimeout(() => {
      this.message = null;
    }, 3000);

    this.newStudent = {
      studentId: null,
      givenName: '',
      lastName: '',
      finalGrade: null,
    };
  }

  onDelete(alert) {
    if (alert) {
      this.message = alert;
      setTimeout(() => {
        this.message = null;
      }, 3000);
      return;
    }
  }
}

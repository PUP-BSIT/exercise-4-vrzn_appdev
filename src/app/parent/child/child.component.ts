import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../model/student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() students;
  @Output() message = new EventEmitter<String>();
  @Output() studentToUpdate = new EventEmitter<Student>();
  @Output() newStudentsArray = new EventEmitter<Student[]>();

  onUpdate(studentId: number) {
    const studentToUpdate = this.students.find(
      (student) => student.studentId === studentId
    );

    this.studentToUpdate.emit(studentToUpdate);
  }

  removeStudent(id: number): void {
    const index = this.students.findIndex(
      (student) => student.studentId === id
    );

    this.students.splice(index, 1);
    this.message.emit("Student Deleted Successfully.")
    this.newStudentsArray.emit(this.students);
  }
}

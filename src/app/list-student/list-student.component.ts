import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  listStudent : any;
  constructor(private httpClient : HttpClient ,
              private studentService : StudentService) { }

  ngOnInit(): void {
    this.getAll();
  }


  deleteStudent(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.studentService.delete(id).subscribe(() => {
        this.getAll()
      }, e => {
        console.log(e);
      });
    }
  }

   getAll() {
    this.studentService.findAll().subscribe((students) => {
      console.log(students)
      this.listStudent = students;
    }, error => {
      console.log(error)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  students:  any;
  form = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    action: new FormControl(""),

  })
  obj: any;
  constructor(private router: Router,
              private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.findAll().subscribe((data) => {
      console.log(data)
      this.students = data;
    })
  }

  add() {
    console.log(this.form.value);
    this.obj = {
      name: this.form.value.name,
      description: this.form.value.description,
      action: this.form.value.action,
    }
    this.studentService.save(this.obj).subscribe(() => {
      this.router.navigate(["list"])
    }, error => {
      alert("loi")
    })
  }
}

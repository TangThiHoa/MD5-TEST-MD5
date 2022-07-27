import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from "../student.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: any
  updateForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    description: new FormControl(""),
    action: new FormControl(""),
  })

  constructor(  private router: Router,
                private studentService: StudentService,
                private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })
  }

  findById(id: any) {
    this.studentService.findById(id).subscribe((data) => {
      console.log(data);
      this.updateForm = new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        description: new FormControl(data.description),
        action: new FormControl(data.action),
      })
    })

  }

  save() {
    this.student = {
      name: this.updateForm.value.name,
      description: this.updateForm.value.description,
      action: this.updateForm.value.action,
    }
    console.log(this.student)
    this.studentService.update(this.updateForm.value.id, this.student).subscribe((data) => {
      console.log(data)
      alert("Done!")
      this.updateForm.reset()
      this.router.navigate([""])
    }, error => {
      alert("Loi")
      console.log(error)
    })
  }

}

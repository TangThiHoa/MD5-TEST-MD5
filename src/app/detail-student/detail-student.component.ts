import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  obj : any = [];
  constructor(private  activatedRoute : ActivatedRoute,
              private  httpClient : HttpClient) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param : ParamMap)=>{
      this.httpClient.get('http://localhost:3000/students/'+ param.get('id')).subscribe((data)=>{
        this.obj= data
      })

    })
  }

}

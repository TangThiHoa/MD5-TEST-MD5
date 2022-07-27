import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API = 'http://localhost:3000/students'
  constructor(private httpClient: HttpClient) { }
  findAll() : Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.API);
  }
  save(student : Student): Observable<any>{
    return this.httpClient.post( this.API ,student);
  }
  findById(id : any) : Observable<any>{
    return this.httpClient.get(this.API+'/'+id);
  }
  update(id:any,student:any){
    return this.httpClient.put(this.API+'/'+id,student)
  }
  delete(id:any){
    return this.httpClient.delete(this.API+'/'+id)
  }
}

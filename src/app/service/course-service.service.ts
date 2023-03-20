import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  API_URL="http://localhost:3000/Courses"
  
  constructor(private http:HttpClient) { }

  getCourses(){
    return this.http.get(this.API_URL)
    // this.data.subscribe(this.subject)
  }
  editDetails(data:any) {
    console.log('-----',data);
    return this.http.put(`${this.API_URL}/${data.id}`,data);
}
}

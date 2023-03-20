import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, of, shareReplay } from 'rxjs';
import { Courses } from '../interface';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit{
   
  courses:any
  value$: any;

 constructor(private service: CourseServiceService,private dialog:MatDialog) { }

  beginners : Observable<Courses[]>=of([]);
  advanced : Observable<Courses[]>=of([])

  // ngOnDestroy(): void {
  //   this.value$.next(true);
  //   this.value$.complete();
  // }
  
  ngOnInit() {

   this. courses = this.service.getCourses().pipe(
    shareReplay()
  )

    this.beginners = this.courses
      .pipe(map((cardSource: any) => {
        return cardSource.filter((filterDetails: any) => filterDetails.category === "beginners")

      }))

    this.advanced = this.courses
      .pipe(map((cardSource: any) => {
        return cardSource.filter((filterDetails: any) => filterDetails.category === "advanced")
      }))



  
   }

}

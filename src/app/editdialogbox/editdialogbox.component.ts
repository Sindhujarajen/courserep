import { Component ,Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CourseServiceService } from '../service/course-service.service';

@Component({
  selector: 'app-editdialogbox',
  templateUrl: './editdialogbox.component.html',
  styleUrls: ['./editdialogbox.component.css']
})
export class EditdialogboxComponent implements OnInit {
  formdata: any;
  onValue$: any;

 constructor(@Inject(MAT_DIALOG_DATA) public data: any, private service: CourseServiceService, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      description: new FormControl(this.data?.description ?? ''),
      name: new FormControl(this.data?.name ?? ''),
      category: new FormControl(this.data?.category ?? '')
      })
  }

  save(Details: any) {
    console.log('---',this.data);
    
    this.service.editDetails(({
      ...this.data,
      ...Details
    })).subscribe()
      window.location.reload()
  
  }

  cancel() {
    this.dialog.closeAll();
  }

}

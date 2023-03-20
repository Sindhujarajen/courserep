import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditdialogboxComponent } from '../editdialogbox/editdialogbox.component';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent {
  @Input() cards:any
 
  // @Output() updateEditDetails = new EventEmitter<any>();

 constructor(private dialog:MatDialog){}

  ngOnInit(): void {}

  edit(add:any) {
   
    const dialogRef = this.dialog.open(EditdialogboxComponent,{
      data:{
          ...add,
         
       }
      })
  dialogRef.afterClosed()
    }

}

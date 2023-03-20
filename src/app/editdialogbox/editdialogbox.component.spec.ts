import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdialogboxComponent } from './editdialogbox.component';

describe('EditdialogboxComponent', () => {
  let component: EditdialogboxComponent;
  let fixture: ComponentFixture<EditdialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditdialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

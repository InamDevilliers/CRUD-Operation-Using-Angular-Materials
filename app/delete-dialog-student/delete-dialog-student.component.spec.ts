import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogStudentComponent } from './delete-dialog-student.component';

describe('DeleteDialogStudentComponent', () => {
  let component: DeleteDialogStudentComponent;
  let fixture: ComponentFixture<DeleteDialogStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDialogStudentComponent]
    });
    fixture = TestBed.createComponent(DeleteDialogStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

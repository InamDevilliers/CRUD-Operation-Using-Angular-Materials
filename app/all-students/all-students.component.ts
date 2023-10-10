import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentsService } from '../students.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogStudentComponent } from '../delete-dialog-student/delete-dialog-student.component';
import { ExcelExportService } from '../excel-export.service';
import { PdfExportService } from '../pdf-export.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  allStudentsSource: Student[] = [];
  displayedColumns: string[] = ['id', 'firstName','lastName',  'gender', 'age', 'actions'];

  constructor(private studentService: StudentsService, public dialog: MatDialog, private excelExportService: ExcelExportService,private pdfExportService: PdfExportService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.studentService.get().subscribe((data) => {
      this.allStudentsSource = data;
    });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogStudentComponent, {
      width: '550px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allStudentsSource = this.allStudentsSource.filter(
          (_) => _.id !== id
        );
      }
    });
  }

  downloadExcel() {
    this.excelExportService.exportToExcel(this.allStudentsSource, 'students');
  }

  downloadPdf() {
    this.pdfExportService.exportToPdf(this.allStudentsSource, 'students');
  }

}

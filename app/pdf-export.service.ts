import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class PdfExportService {

  exportToPdf(data: any[], filename: string): void {

    const dataToExport = data.map((item) => {
      const { actions, ...dataWithoutActions } = item;
      return dataWithoutActions;
    });

    const doc: any = new jsPDF();

    const columns = ['Id', 'First Name', 'Last Name', 'Gender', 'Age'];
    // const rows = dataToExport.map((item) => Object.values(item));

    doc.autoTable({
      head: [columns],
      body: dataToExport.map((item) => Object.values(item)),
    });

    doc.save(`${filename}.pdf`);
  }

}

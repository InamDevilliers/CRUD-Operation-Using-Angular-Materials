import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {

  exportToExcel(data: any[], filename: string): void {

    const dataToExport = data.map((item) => {
      const { actions, ...dataWithoutActions } = item;
      return dataWithoutActions;
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, `${filename}.xlsx`);
  }

  constructor() { }
}

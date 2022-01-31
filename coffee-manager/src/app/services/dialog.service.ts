import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(): Promise<string> {
    return new Promise((res, rej) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '400px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        return res(result);
      });
    });
  }
}

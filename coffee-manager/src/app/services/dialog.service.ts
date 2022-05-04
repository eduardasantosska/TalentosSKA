import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMessageComponent } from '../components/dialog-message/dialog-message.component';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  openDialog(): Promise<string> {
    return new Promise((res, rej) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '600px'
      });

      dialogRef.afterClosed().subscribe(result => {
        return res(result);
      });
    });
  }

  openDialogMessage(message: string): Promise<string> {
    return new Promise((res, rej) => {
      const dialogRef = this.dialog.open(DialogMessageComponent, {
        width: '600px',
        data: { message: message },
      });

      dialogRef.afterClosed().subscribe(result => {
        return res(result);
      });
    });
  }
}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  qty: number;
  
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}  

  dialogResult(valid: boolean) {
    if(valid)
      this.dialogRef.close({ qty: this.qty, valid});
    else
      this.dialogRef.close({ model: 'close', valid });
  }
}

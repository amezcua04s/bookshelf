import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookInterface } from '../../interfaces/book-interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styles: ``
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef : MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : BookInterface,
  ){}

  onNoClick() : void {
    this.dialogRef.close(false);
  }

  onConfirm() : void {
    this.dialogRef.close(true);
  }

}

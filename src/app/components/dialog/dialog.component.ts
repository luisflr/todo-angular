import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { Column } from '@models/todo.model';

interface Data {
  column: Column,
  columns: Column[]
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  column: Column;
  columns: Column[];
  faCircleExclamation = faCircleExclamation;
  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) data: Data
  ) {
    this.column = data.column;
    this.columns = data.columns;
  }

  close() {
    this.dialogRef.close(this.columns.filter(col => col.id !== this.column.id))
  }


}

import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { faSave } from '@fortawesome/free-solid-svg-icons'

import { Dialog } from '@angular/cdk/dialog';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Column, ToDo } from '@models/todo.model';
import { DialogComponent } from '../dialog/dialog.component';
import { columns } from 'src/app/utils/columnsMock';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
  .cdk-drop-list-dragging .cdk-drag {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }

  /* Animate an item that has been dropped. */
  .cdk-drag-animating {
    transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
  }
  `]
})
export class CardComponent {

  columns: Column[] = JSON.parse(localStorage.getItem('columns') || '');

  constructor(public dialog: Dialog) {}

  newcolumn: string = '';

  faTrash = faTrash;
  faXmark = faXmark;
  faSave = faSave;

  ngOnInit() {
    let local = JSON.parse(localStorage.getItem('columns') || '')
    console.log(local)
  }

  drop(e: CdkDragDrop<ToDo[]>) {
    if (e.previousContainer === e.container) {
      moveItemInArray(e.container.data, e.previousIndex, e.currentIndex)
    } else {
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex
      )
    }
  }

  dropColumn(e: CdkDragDrop<Column[]>) {
    transferArrayItem(
      e.previousContainer.data,
      e.container.data,
      e.previousIndex,
      e.currentIndex
    )
  }


  addTask(id: number) {
    this.columns.forEach(column => {
      if (column.id === id) {
        column.todos.push({
          id: (column.todos.length + 1).toString(),
          title: ''
        })
      }
    })
  }


  deleteToDo(index: number, idTask: string) {
    this.columns[index].todos = this.columns[index].todos.filter(todo => todo.id !== idTask)
    localStorage.setItem('columns', JSON.stringify(this.columns))
  }

  openDialog(column: Column) {
    this.dialog.open<Column[]>(DialogComponent, {
      minWidth: '300px',
      data: {
        column: column,
        columns: this.columns
      },

    }).closed.subscribe(result => {
      this.columns = result ? result : this.columns;
    });

  }

  onDeleteColumn(column: Column) {
    this.openDialog(column);
  }

  addColumn() {
    this.columns.push({
      id: this.columns.length + 1,
      title: 'Nueva',
      todos: []
    })
    localStorage.setItem('columns', JSON.stringify(this.columns))
  }

  onSaveToDos() {
    localStorage.setItem('columns', JSON.stringify(this.columns))
  }

}

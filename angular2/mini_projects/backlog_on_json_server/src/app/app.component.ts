import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent, TaskDialogResult } from './task-dialog/task-dialog.component';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  url = 'http://localhost:3000/tasks';

  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog, private tasksService: TasksService) {}

  ngOnInit() {
    this.renderTasks();
  }

  renderTasks() {
    this.tasksService.fillTasks().then(data => {
      this.todo = data;
    });
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult|undefined) => {
        if (!result) {
          return;
        }
        this.tasksService.addTasks(result.task).then(data => {
          this.renderTasks();
        });
      });
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
      if (!result) {
        return;
      }

      const dataList = this[list];
      const taskIndex = dataList.indexOf(task);
      if (result.delete) {
        this.tasksService.deleteTask(task.id).then(data => {
          if (data.ok) {
            dataList.splice(taskIndex, 1);
          }
        });
      } else {
        this.tasksService.updateTasks(task);
      }
    });
  }
}

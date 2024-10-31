import { Injectable } from '@angular/core';
import { Task } from '../task/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  url = 'http://localhost:3000/tasks';

  constructor() { }

  async fillTasks() {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async addTasks(task: Task) {
    return await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
  }

  async updateTasks(task: Task) {
    return await fetch(this.url + '/' + task.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });
  }

  async deleteTask(id: string) {
    return await fetch(this.url + '/' + id, {
      method: 'DELETE'
    });
  }
}

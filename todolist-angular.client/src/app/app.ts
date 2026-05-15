import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { retry, delay } from 'rxjs/operators';


export interface ToDoList_Modal {
  text?: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  public toDoList_Modals: ToDoList_Modal[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getToDoList();
  }

  getToDoList() {

    this.http.get<ToDoList_Modal[]>('/api/todolist')
      .pipe(
        retry({ count: 3, delay: 2000 })
      )
      .subscribe({
        next: (result) => {
          this.toDoList_Modals = result;
        },
        error: (error) => {
          console.error("Data failed to load after retries:", error);
        }
      });
  }

  addItem(newText: string) {
    if (newText && newText.trim()) {
      const newItem = {
        text: newText,
        isComplete: false
      };

      this.toDoList_Modals.push(newItem);
      console.log('Added new item:', newItem);
    }
  }

  deleteItem(itemToRemove: any) {
    this.toDoList_Modals = this.toDoList_Modals.filter(item => item !== itemToRemove);
    console.log('Item removed. Remaining count:', this.toDoList_Modals.length);
  }

  protected readonly title = signal('todolist-angular.client');
}

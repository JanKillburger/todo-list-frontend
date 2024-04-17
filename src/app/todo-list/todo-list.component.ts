import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
todos: Todo[] = [];

constructor(private http: HttpClient) {}

ngOnInit() {
  this.getTodos()
    .subscribe((ts) => {
      this.todos = ts
    })
}

getTodos() {
  const url = environment.apiUrl + 'todos/';
  const options = {
    headers: new HttpHeaders({
      'Authorization': `Token  ${localStorage.getItem("token")}`
    })}
  return this.http.get<Todo[]>(url, options)
}
}

interface Todo {
  title: string;
  author: string;
  created_at: string;
  completed: boolean;
}

import { Component, OnInit } from '@angular/core';
import { TodoModel } from 'src/app/Model/TodoModel';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: TodoModel[];
  localitem!: string;
  constructor() {
    this.localitem = localStorage.getItem('todo')!;
    if (this.localitem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo: TodoModel) {
    var pos = this.todos.indexOf(todo);
    this.todos.splice(pos, 1);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
  addTodo(todo: TodoModel) {
    this.todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
  changeActiveTodoStatus(todo: TodoModel) {
    console.log("tre");
    var pos = this.todos.indexOf(todo);
    this.todos[pos].active = !todo.active;
    console.log(pos+" setting -> "+this.todos[pos].active);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
}

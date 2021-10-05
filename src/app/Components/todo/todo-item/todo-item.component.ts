import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/Model/TodoModel';
import { Input } from '@angular/core'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:TodoModel[];
  @Output() todoDeleteEmit: EventEmitter<TodoModel> = new EventEmitter();
  @Output() todoChangeActiveEmit: EventEmitter<TodoModel> = new EventEmitter();
  constructor() {
    this.todo=[];
  }
  
  ngOnInit(): void {
  }
  onDelete(todo: TodoModel): void {
    console.log("creating emit");
    
    this.todoDeleteEmit.emit(todo);
  }
  changeActive(todo:TodoModel):void{
    console.log("calling");
    this.todoChangeActiveEmit.emit(todo);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoModel } from 'src/app/Model/TodoModel';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  constructor() {
    this.title = "";
    this.desc = "";
  }
  @Output() todoAddEmit: EventEmitter<TodoModel> = new EventEmitter();
  ngOnInit(): void {
  }

  Submit():void{
    console.log("submit");
    var todo=new TodoModel();
    todo.id=0;
    todo.active=true;
    todo.title=this.title;
    todo.desc=this.desc;
    this.todoAddEmit.emit(todo);
  }
}

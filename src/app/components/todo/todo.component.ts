import { Component, OnInit, OnDestroy, Input, Directive } from '@angular/core';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Itodo
 
   constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onComplete(){
    debugger
    this.todo.isCompleted=!this.todo.isCompleted;
    this.todoService.updateTodo(this.todo.id, 'isCompleted')
  }

  onArchive(){
    this.todo.isArchived=!this.todo.isArchived;
    this.todoService.deleteTodo(this.todo.id)
  }
}

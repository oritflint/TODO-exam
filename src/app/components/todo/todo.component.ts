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

  onAction(action: string){
    this.todo[action]=!this.todo[action];
    this.todoService.updateTodo(this.todo.id)
  }

  onDelete(){
    this.todoService.deleteTodo(this.todo.id)
  }

}

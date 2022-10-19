import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { NewTodoComponent } from '../new-todo/new-todo.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit, OnDestroy {
  
  // @ViewChild('template') templateRef: TemplateRef<any>;
  private closeResult = '';
  private subscription: Subscription = new Subscription()

  public todos: Array<Itodo>;
  public todo: Itodo;

  constructor(private todoService :TodoService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.subscription.add(
      this.todoService.getTodos().subscribe((data)=>
      this.todos = data
        )
      )  

    this.subscription.add(

      this.todoService.getSingleTodo().subscribe((data)=>
        this.todo = data
        )
      )
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  
  public openDialog(): void {

    this.modalService.open(NewTodoComponent, { ariaLabelledBy: 'modal-basic-title' })
    .result.then(
			(result) => {
        debugger
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);


    // const dialogRef = this.dialog.open(NewTodoComponent, {
    //   width: '250px',
    //   // data: {name: this.name, animal: this.animal},
    //   data: {},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`); // Pizza!
    // });
  }

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  
}


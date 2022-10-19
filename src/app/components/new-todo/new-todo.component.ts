import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Itodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.sass']
})
export class NewTodoComponent {

  constructor(public activeModal: NgbActiveModal, public todoService: TodoService) { }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'title',
      name: 'title',
      type: 'input',
      props: {
        label: 'What`s your task?',
        required: true,   
      }
    },

    {
      key: 'description',
      type: 'textarea',
      props: {
        label: 'Describe your task',
        required: false,
      }
    },
    {
      key: 'endDate',
      type: 'input',
      props: {
        type: 'date',
        label: 'Day of the trip',
        required: true,
      },
    },
    {
      key: 'PRIORITY',
      type: 'radio',
      props: {
        label: 'Set priority',
        defaultValue: 1,
        required: true,
        options: [
          { value: 1, label: '1' },
          { value: 2, label: '2' },
          { value: 3, label: '3' },
        ],
      }
    },
  ];

  public onNewTodoSubmit(): void {

    //debugger
    if (this.form.valid){

        const srcForm = this.form.value
        const newTodo: Itodo = {
          id: "",//uuidv4(),
          title:  srcForm['title'],
          description:  srcForm['description'],
          isCompleted:false,
          isArchived:false,
          endDate: srcForm['endDate'],//srcForm.date,
          isSelected: true
        };
        this.activeModal.close()
        this.todoService.addNewTodo(newTodo)
        // this.dialog.closeAll();
        console.log("onsubmit:")
        console.log(this.form)
      }
    }

}


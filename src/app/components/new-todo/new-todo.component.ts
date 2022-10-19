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
export class NewTodoComponent implements OnInit {

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
      key: 'Datepicker',
      type: 'datepicker',
      props: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        dateFormat: 'dd/mm/yy',
        hourFormat: '24',
        numberOfMonths: 1,
        selectionMode: 'single',
        required: true,
        readonlyInput: false,
        showTime: false,
        showButtonBar: true,
        showIcon: true,
        showOtherMonths: true,
        selectOtherMonths: false,
        monthNavigator: false,
        yearNavigator: false,
        yearRange: '2020:2030',
        inline: false,
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

    // debugger
    if (this.form.valid){

        const srcForm = this.form.value
        const newTodo: Itodo = {
          id: "",//uuidv4(),
          title:  srcForm['title'],
          description:  srcForm['description'],
          isCompleted:false,
          isArchived:false,
          endDate: srcForm['date'],//srcForm.date,
          isSelected: true
        };

        //this.todoService.addNewTodo(newTodo)
        // this.dialog.closeAll();
        console.log("onsubmit:")
        console.log(this.form)
      }
    }

  ngOnInit(): void {
  }
}


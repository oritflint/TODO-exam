import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Itodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {  }

  public getData(): Observable<string>{
    let url:string = 'https://localhost:44343/api/todos'
    return this.http.get(url) as Observable<string>
  }

  
   
  public AddItem(newTodo:Itodo): Observable<string>{
    
    let url:string = 'https://localhost:44343/api/todos'
     return this.http.post(url, newTodo) as Observable<string>
    
  }

  public UpdateItem(todoId:string, todo:Itodo): Observable<string>{
    let url:string = 'https://localhost:44343/api/todos/'+todoId
     return this.http.put(url, todo) as Observable<string>
     
  }
  
  public DeleteItem(todoId:string): Observable<any> {
    let status:string =''
    let url:string = 'https://localhost:44343/api/todos/'+todoId;

    return this.http.delete(url,{})
     
  }

}



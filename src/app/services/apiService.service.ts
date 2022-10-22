import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Itodo } from '../models/todo.interface';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {  }

  private baseURL: string = environment.apiURL

  public getData(): Observable<string>{
    return this.http.get(this.baseURL) as Observable<string>
  }


  public AddItem(newTodo:Itodo): Observable<string>{
    
    return this.http.post(this.baseURL, newTodo) as Observable<string>
    
  }

  public UpdateItem(todoId:string, todo:Itodo): Observable<string>{
    let url:string = this.baseURL+todoId
     return this.http.put(url, todo) as Observable<string>
     
  }
  
  public DeleteItem(todoId:string): Observable<any> {
    let url:string = this.baseURL+todoId;

    return this.http.delete(url,{})
     
  }

}



import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl='/assets/questions.json';
  constructor(private http:HttpClient) { }

  getQuestion():Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}

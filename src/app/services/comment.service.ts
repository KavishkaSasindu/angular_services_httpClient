import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl = environment.url;

  constructor(private httpClient:HttpClient) { }

  loadData():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
}

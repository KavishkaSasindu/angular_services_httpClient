import { Component } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CommentService} from "./services/comment.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

  baseUrl = environment.url;

  myData:any = [];

  constructor(private httpClient:HttpClient,public commentService:CommentService) {

  }

  loadData(){
   this.commentService.loadData().subscribe(response=>{
     this.myData  = response;
     console.log(response)
   })
  }
}

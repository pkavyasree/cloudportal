import { Component, OnInit } from '@angular/core';
//import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {HttpParams, HttpHeaders} from '@angular/common/http';
//import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
//import { Observable, SchedulerLike } from 'rxjs';
//import { shareReplay } from 'rxjs/operators';

declare var createBucket: any;
@Component({
  selector: 'app-imicron',
  templateUrl: './imicron.component.html',
  styleUrls: ['./imicron.component.css']
})

export class ImicronComponent {
  title = 'HttpClient Methods Demo';
  getUrl = 'https://wdaxkx8kbc.execute-api.us-east-1.amazonaws.com/dev/'
  postUrl = 'https://kk7wki7ew7.execute-api.us-east-1.amazonaws.com/test/'
  amiUrl = 'https://80rjih2ob2.execute-api.us-east-1.amazonaws.com/amistage/'
  oneUrl = 'https://lzolbdmmog.execute-api.us-east-1.amazonaws.com/ec2one/'



  getResult: any = { };
  postResult: any = { };
  amiResult: any = { };
  oneResult: any = { };

     //headers = new HttpHeaders().set("content-type","application/json");
     //headers = new HttpHeaders().set("Accept","application/json");
    headers=new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': `application/json, text/plain, */*`,

    });
     constructor(private http: HttpClient){
       
     }
     
 doGet() {
    let params = new HttpParams().set("email","testocloudprovider@gmail.com");
    this.http.get(this.getUrl,{params}).subscribe(
      res => { this.getResult = res},
      err => {console.log("Error occured: " + err.message);}

    );

  //alert('hi');
 }
 
 doPost() {
   console.log("hi")
  this.http.get(this.postUrl).subscribe(
    res => { 
      console.log("hi:::",res)
      this.postResult = res
    },
    err => {console.log("Error occured: " + err.message);}

  );
//alert('hi');
}

doAmi() {
  this.http.get(this.amiUrl).subscribe(
    res => { this.amiResult = res},
    err => {console.log("Error occured: " + err.message);}

  );
//alert('hi');
}
doOne() {
  this.http.get(this.oneUrl).subscribe(
    res => { this.oneResult = res},
    err => {console.log("Error occured: " + err.message);}

  );
//alert('hi');
}
}


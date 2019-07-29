import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name:any;
  phone:any;
  email:any;
  notes:any;
  contactform:any = {}
  baseUrl:any;
  resp:any = false;
  

  constructor(private http: HttpClient) { }
  
ngOnInit() {
  }
  submitToAPI (){
    console.log('contactform::',this.contactform);
    this.baseUrl = "https://mjylue5qy0.execute-api.us-east-1.amazonaws.com/test/contact-us"
    this.http.post(this.baseUrl, JSON.stringify(this.contactform)).subscribe(res => { 
      debugger;
      this.resp = true;
      setTimeout(() =>{
        debugger;
         this.resp = false;
         this.contactform = {}
      },5000);
      console.log('result::::',res);
    })
  }
}

  
import { Component, OnInit } from '@angular/core';
//import { AppRoutingModule } from '../app-routing.module';
import {Router} from '@angular/router';
@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {

  constructor( private route:Router) { }

  ngOnInit() {
  }
  onhome(){
this.route.navigate(['/'])
  }
  onAbout(){
this.route.navigate(['about'])
  }
  oncloudsolutions() {
this.route.navigate(['cloudsolutions'])    
  }
  onimicron() {
    this.route.navigate(['imicron'])
      }
  onims() {
this.route.navigate(['ims'])    
  }
  oncontactus() {
    this.route.navigate(['contactus'])    
      }
}




import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Index1Component } from './index1/index1.component';
import { AboutComponent } from './about/about.component';
import { ImicronComponent } from './imicron/imicron.component';
import { CloudsolutionsComponent } from './cloudsolutions/cloudsolutions.component';
import {HttpClientModule} from '@angular/common/http';
import { ImsComponent } from './ims/ims.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';


//import { Component } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SecureComponent,
    Index1Component,
    AboutComponent,
    ImicronComponent,
    CloudsolutionsComponent,
    ImsComponent,
    ContactusComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmplifyAngularModule,
    //NgbModule,
    HttpClientModule,
    FormsModule

  //  Component

    
  
  ],
  entryComponents: [
    AppComponent,
    ],	
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
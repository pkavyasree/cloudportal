import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { Index1Component } from './index1/index1.component';
import { AboutComponent } from './about/about.component';
import { ImicronComponent } from './imicron/imicron.component';
import { CloudsolutionsComponent } from './cloudsolutions/cloudsolutions.component';
import { ImsComponent } from './ims/ims.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: 'contactus', component: ContactusComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'secure', component: SecureComponent, pathMatch: 'full' },
  { path: 'ims', component: ImsComponent,pathMatch: 'full' },
  { path: 'cloudsolutions', component: CloudsolutionsComponent, pathMatch: 'full' },
  { path: 'imicron', component: ImicronComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: Index1Component, pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

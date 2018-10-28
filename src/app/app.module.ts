import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Routes,RouterModule } from '@angular/router';
import { ContactUsComponent } from './aboutus/contact-us/contact-us.component'
import { HttpModule } from '@angular/http';
import { ServerService } from './server.service';

const appRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'about',component:AboutusComponent}

 ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

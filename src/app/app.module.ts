import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AnotherChildComponent } from './another-child/another-child.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoPageComponent } from './no-page/no-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    ChildComponent,
    AnotherChildComponent,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// !AdAmlucks123
// Doning Mern Stack development from SMIT/
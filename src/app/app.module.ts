import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { MaterialModule } from './shared/material/material.module';
import { FooterComponent } from './core/footer/footer.component';
import { ButtonPrimaryComponent } from './shared/components/button-primary/button-primary.component';
import { ButtonSecondaryComponent } from './shared/components/button-secondary/button-secondary.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { ManagerComponent } from './managers/manager/manager.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    ButtonSecondaryComponent,
    CustomerComponent,
    ManagerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule // Import from material module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

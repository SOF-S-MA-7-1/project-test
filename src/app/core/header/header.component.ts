import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /**
   * One toolbar/header have all, just shows what needed depending on user roles
   */

  listNavItem: String[] = [
    "Inicio",
    "Catálogo",
    "Noticias",
    "Nosotros"
  ]

  constructor(private dialog: MatDialog) { } // to a dialog window, create-> Variable: dialog. Type: MatDialog

  ngOnInit(): void {
  }

  openSignUp() {
    this.dialog.open(SignupComponent);
  }

  openLogIn() {
    this.dialog.open(LoginComponent); //opens a dialog windows, inside it the login component
  }

}

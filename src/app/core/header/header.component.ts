import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { SignupComponent } from 'src/app/modules/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  /**
   * One toolbar/header have all, just shows what needed depending on user roles
   */
  // #region Variables Declaration
  listNavItem: String[] = ['Inicio', 'Catálogo', 'Noticias', 'Nosotros'];
  listOptions: string[] = ['Perfil', 'Configuración'];
  userName: String = '';
  isUserRole: boolean = false;
  // #endregion

  constructor(private router: Router, private dialog: MatDialog) {} // to a dialog window, create-> Variable: dialog. Type: MatDialog

  ngOnInit(): void {}

  // #region Functions
  openSignUp(titleForm: string): void {
    this.dialog.open(SignupComponent, { data: { signupName: titleForm } }); //[signupName]="Random name"
  }

  openLogIn() {
    let dialogRef = this.dialog.open(LoginComponent); //opens a dialog windows, inside it the login component
    dialogRef.afterClosed().subscribe((result) => {
      // Receive data at close dialog
      if (result != null) {
        this.userName = result;
        this.isUserRole = true;
      }
    });
  }

  openEditUser() {
    this.router.navigate(['/manager']);
  }
  // #endregion
}

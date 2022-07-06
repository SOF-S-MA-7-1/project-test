import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  // #region Variables Declaration

  // variable: startSession, type: FormGroup
  userLogin = new FormGroup({
    // Create a group of input information
    username: new FormControl('', Validators.required), // required: it must filled to continue
    password: new FormControl('', Validators.required), // '': its empty by default
  });
  alert: boolean = false;
  inputUsername: string = '';
  // #endregion

  /**
   * @variable router Type: router
   * @variable dialogRef Type: MatDialogRef| to inside the variable the LoginComponent | dialog reference to component
   */
  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void { }





  // #region Functions
  onCancel() {
    this.dialogRef.close(null); // close the dialog window
  }

  onSubmit() {
    /**
     * Function called on (click) button to login at header
     * Validates if the values inside the FormGroup are valid username and password
     */

    if (this.userLogin.value.username == 'admin' && this.userLogin.value.password == 'admin') {
      /**
       * Administrator
       * @parameter username: admin
       * @parameter password: 1234
       * */
      // console.log(this.userLogin.value); // show values at console of userLogin
      this.router.navigate(['/manager']); // navigates to module/component/page manager
      this.dialogRef.close(this.userLogin.value.username); // close the dialog window, (send data)
    } else if (this.userLogin.value.username == 'pete' && this.userLogin.value.password == '1111') {
      /**
       * Customer
       * @parameter username: pete
       * @parameter password: 1111
       */
      // console.log(this.userLogin.value); // show values at console of userLogin
      this.router.navigate(['/customer']); // navigates to module/component/page customer
      this.dialogRef.close(this.userLogin.value.username); // close the dialog window
    } else {
      /**
       * Default: error alert message
       */
      this.alert = true; // shows alert
      setTimeout(() => (this.alert = false), 5000); // hides alert after 5 seconds (5000)
    }
  }
  // #endregion
}

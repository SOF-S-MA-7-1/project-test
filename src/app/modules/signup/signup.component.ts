import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // #region Variables Declaration
  userSignup = new FormGroup({
    id: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });
  editUser: boolean = false;
  // #endregion

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.editUser == 'true') {
      this.editUser = true;
    }
  }

  ngOnInit(): void {}

  // #region Functions
  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    console.log('...Entra al botón...');
    /**
     * create new object of type @NavigationExtras
     * @objectToSend - object that is going to be send
     */
    let objectToSend: NavigationExtras = {
      // parameters: data that are going to be passed to the object
      queryParams: {
        // parameter name: where the data come from (FromGroup)
        id: this.userSignup.value.id,
        username: this.userSignup.value.username,
        password: this.userSignup.value.password,
        firstName: this.userSignup.value.firstName,
        lastName: this.userSignup.value.lastName,
        age: this.userSignup.value.age,
        address: this.userSignup.value.address,
        email: this.userSignup.value.email,
      },
      //
      skipLocationChange: false,
      fragment: 'top',
    };
    this.dialogRef.close(); // close modal window
    this.redirectTo('/manager', objectToSend); // Calls function redirectTo()
  }

  redirectTo(uri: string, objectToSend: NavigationExtras) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true }) // 1°. go to original direction
      .then(
        () =>
          this.router.navigate([uri], {
            state: { dataClientSend: objectToSend },
          }) // 2°. go to component/direction received by parameter (ClientComponent, information)
      );
  }
  // #endregion
}

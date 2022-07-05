import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit(): void {
  }

  // #region Variables Declaration
  userSignup = new FormGroup({
    // id: new FormControl('', Validators.required),
    identityCard: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  })

  alert: boolean = false;
  // #endregion

  // #region Functions

  onCancel() {
    this.dialogRef.close()
  }

  onSubmit() {

    if (false) {

    } else {
      this.alert = true;
      setTimeout(() => (this.alert = false), 5000);
    }
  }
  // #endregion

}

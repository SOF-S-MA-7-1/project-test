import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupComponent } from 'src/app/modules/signup/signup.component';
import { CustomerInterface } from 'src/app/shared/interfaces.ts/customer-interface';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  //#region Variables Declaration
  dataSource: any = []; // variable of type: any. Can allocate any type of data

  // Variable name must be same as the one used at .html table (line 11)
  displayedColumns: string[] = [
    // variables have to be the same as the interface variables
    'id',
    'identityCard',
    'username',
    'firstName',
    'lastName',
    'birthDate',
    'address',
    'email'
  ];

  dataClients: CustomerInterface[] = [
    {
      id: 'TEST',
      identityCard: 'TEST',
      username: 'TEST',
      firstName: 'TEST',
      lastName: 'TEST',
      birthDate: 'TEST',
      address: 'TEST',
      email: 'TEST'
    },
  ];

  newClient: any;
  nav: any;
  // #endregion

  //* Executed first *
  constructor(private router: Router, private dialog: MatDialog) {
    this.nav = this.router.getCurrentNavigation();
    this.newClient = this.nav.extras.state;

    if (this.newClient != null) {
      console.log(this.newClient.datosClient.queryParams);
      this.dataClients.push(this.newClient.datosClient.queryParams);
    }
  }

  ngOnInit(): void {
    /**
     *
     */
    this.dataSource = new MatTableDataSource<CustomerInterface>(this.dataClients as CustomerInterface[]);
    console.log(this.dataClients);
  }

  // #region Functions
  openAddUser() {
    /**
     * Calls Signup component in dialog window
     */
    this.dialog.open(SignupComponent);
  }
  // #endregion

}

import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupComponent } from 'src/app/modules/signup/signup.component';
import { CustomerInterface } from 'src/app/shared/interfaces.ts/customer-interface';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
})
export class ManagerComponent implements OnInit {
  // #region Variables Declaration
  @Input() listData: any = []; // Input array of any type of data
  dataSource: any = []; // variable of type: any. Can allocate any type of data
  displayedColumns: string[] = [
    // Variable name must be same as the one used at .html table (line 11)
    // variables have to be the same as the interface variables
    'id',
    'username',
    'password',
    'firstName',
    'lastName',
    'age',
    'address',
    'email',
  ];
  dataCustomers: CustomerInterface[] = [
    {
      id: 'TEST 1',
      username: 'TEST 1',
      password: 'TEST 1',
      firstName: 'TEST 1',
      lastName: 'TEST 1',
      age: 'TEST 1',
      address: 'TEST 1',
      email: 'TEST 1',
    },
    {
      id: '0123456789',
      username: 'TEST 2',
      password: 'TEST 2',
      firstName: 'TEST 2',
      lastName: 'TEST 2',
      age: 'TEST 2',
      address: 'TEST 2',
      email: 'TEST 2',
    },
  ];
  newClient: any;
  nav: any;
  // #endregion

  constructor(private router: Router, private dialog: MatDialog) {
    /**
     * intercept data
     */
    this.nav = this.router.getCurrentNavigation(); // obtain data from de modal, at changing component
    this.newClient = this.nav.extras.state; // decipher data form ¿?

    if (this.newClient != null) {
      /**
       * new collected data added at end of array
       * @dataClientSend - same name as in signup.component.ts Line: 81
       */
      this.dataCustomers.push(this.newClient.dataClientSend.queryParams);
    }
  }

  ngOnInit(): void {
    /**
     * New data from AddUser is going to be added to dataSource
     * this.dataClients as CustomerInterface[]  - data from @dataCustomers treated structure as @CustomerInterface data structure
     * MatTableDataSource<CustomerInterface>()  - data from @dataCustomers transform to type of data for tables
     * this.dataSource                          - data from @dataCustomers add
     */
    this.dataSource = new MatTableDataSource<CustomerInterface>(
      this.dataCustomers as CustomerInterface[]
    );
  }

  // #region Functions
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openAddUser(titleForm: string) {
    /**
     * Calls Signup component in dialog window as formAddUser
     * send data to dialog
     */
    this.dialog.open(SignupComponent, {
      data: { signupName: titleForm, editUser: 'false' },
    });
  }

  openEditUser(titleForm: string) {
    /**
     * Calls Signup component in dialog window as formAddUser
     * send data to dialog
     */
    this.dialog.open(SignupComponent, {
      data: { signupName: titleForm, editUser: 'true' },
    });
  }
  // #endregion
}

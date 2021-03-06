import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

const MaterialComponents = [
  MatToolbarModule, ReactiveFormsModule, MatInputModule,
  MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule,
  MatButtonModule, MatTableModule, MatFormFieldModule, FormsModule,
  MatSidenavModule, MatListModule, MatMenuModule
]

@NgModule({
  declarations: [
  ],
  imports: [ // import material
    CommonModule,
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]

})
export class MaterialModule { } // add to imports in app.module

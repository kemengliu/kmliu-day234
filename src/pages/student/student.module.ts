import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentItemComponent } from './student-item/student-item.component';


import { ActButtonComponent } from './act-button/act-button.component';

import { Say666Pipe } from './sharing/say-666.pipe';

import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatOptionModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StudentService } from "./student-data";
import {StudentDialogComponent} from './student-dialog/student-dialog';

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,SharedModule,
    MatFormFieldModule,MatInputModule,
    FormsModule,MatIconModule,MatMenuModule,
    MatSelectModule,MatOptionModule,MatCardModule,
    MatButtonModule,MatDialogModule,
    RouterModule.forChild([
      { path: '', component: StudentListComponent, pathMatch: 'full' },
      { path: ':id', component: StudentDetailComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    StudentListComponent,
    StudentDetailComponent,
    StudentItemComponent,
    Say666Pipe,
    ActButtonComponent,
    StudentDialogComponent
  ],
  providers:[StudentService],
  entryComponents:[StudentDialogComponent]
})
export class StudentModule { }

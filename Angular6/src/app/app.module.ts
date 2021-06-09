// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
// routes
import { appRoutes } from './routes';
 import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { MemberService } from './member.service';

//Auth routes
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserTableComponent } from './user-table/user-table.component';

//Others
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { DragableColumnDirective } from './Dragable-Column-Directive/dragable-column.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { BenefiaciaryComponent } from './benefiaciary/benefiaciary.component';
import { ManageMembersComponent } from './manage-members/manage-members.component';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';




@NgModule({
  
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
   UserProfileComponent,
   UserTableComponent,

   DragableColumnDirective,
   BenefiaciaryComponent,
   ManageMembersComponent,
   BeneficiaryListComponent,
  

  ],
  imports: [
 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatProgressBarModule,
    MatDialogModule,
    NgxMatFileInputModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },UserService,MemberService, AuthGuard,],
  bootstrap: [AppComponent]
})
export class AppModule { }

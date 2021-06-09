import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BenefiaciaryComponent } from './benefiaciary/benefiaciary.component';
import { ManageMembersComponent } from './manage-members/manage-members.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTableComponent } from './user-table/user-table.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

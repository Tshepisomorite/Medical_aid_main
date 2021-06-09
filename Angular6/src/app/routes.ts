import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
 import { UserProfileComponent } from './user-profile/user-profile.component';
 import { AuthGuard } from './auth/auth.guard';
import { UserTableComponent } from './user-table/user-table.component';
import { BenefiaciaryComponent } from './benefiaciary/benefiaciary.component';
import { ManageMembersComponent } from './manage-members/manage-members.component';
import { BeneficiaryListComponent} from './beneficiary-list/beneficiary-list.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard],


    },
    {path: 'beneficiary', component: BenefiaciaryComponent},
    {
        path:'usertable', component: UserTableComponent,
    },
    {path: 'manage', component: ManageMembersComponent},
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    },
    {
        path: 'benprofile', component: BeneficiaryListComponent,canActivate:[AuthGuard],


    },
];

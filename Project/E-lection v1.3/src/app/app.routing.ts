import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { UsersComponent } from './users/index';
import { TableComponent } from './table/table.component';

import { Testt } from './testt/testt.component';
import { AdminLoginComponent } from './adminlogin/adminlogin.component';
import { AdminPanelComponent } from './adminpanel/adminpanel.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]  },
    { path: 'table', component: TableComponent , canActivate: [AuthGuard] },

    { path: 'testt', component: Testt  , canActivate: [AuthGuard]},
    { path: 'adminlogin', component: AdminLoginComponent },
    { path: 'absnuvubhc362374c7623432623bc372nunhcewcnhuıewn73nc7bv2ıucrn283ryn723x73br327c823nc8rn3v9834n8v34238nc23c23bv83v89b3y9823nv78c23n723bx8787238c73483b6v32bv734b59834v798547nv8934n7c934nctyucegfejvfrehbgnrnbguncn84tvy87vb32u923vnuıwjkhfsjfhsdjfhsdkjfhsdjkfhskj', component: AdminPanelComponent },
 

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
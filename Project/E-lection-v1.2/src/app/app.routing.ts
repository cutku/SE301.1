import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';


import { UsersComponent } from './users/index';
import { TableComponent } from './table/table.component';



import { Charts } from './charts/charts.component';
import { ChartistJs } from './charts/components/chartistJs/index';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]  },
    { path: 'table', component: TableComponent  },
    { path: 'charts', component: Charts  },
 

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
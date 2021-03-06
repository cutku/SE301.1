﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AlertService, AuthenticationService, UserService , CandidateService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { UsersComponent } from './users/index';
import { RegisterComponent } from './register/index';
import { TableComponent } from './table/table.component';
import { Charts } from './charts/charts.component';
import { ChartistJs } from './charts/components/chartistJs/index';
import { Testt} from './testt/testt.component';
import{ AdminLoginComponent} from './adminlogin/adminlogin.component';
import { AdminPanelComponent } from './adminpanel/adminpanel.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        
        routing
    ],
    declarations: [
        TableComponent,
        Charts,
        Testt,
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        UsersComponent,
        RegisterComponent,
        AdminLoginComponent,
        AdminPanelComponent,
        
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        CandidateService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
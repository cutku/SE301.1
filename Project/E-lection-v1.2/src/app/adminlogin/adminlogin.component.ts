import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'adminlogin.component.html'
})

export class AdminLoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl1: string;
   
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    
    
    ngOnInit() {
        this.returnUrl1 = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.auname, this.model.psw)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl1]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}

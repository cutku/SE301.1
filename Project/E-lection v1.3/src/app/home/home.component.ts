import { Component, OnInit } from '@angular/core';

import { User, CandidateElections} from '../_models/index';
import { UserService, CandidateService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    model: any = {};
    currentUser: User;
    users: User[] = [];
    candidateelections: CandidateElections[] = [];
  

    constructor(private userService: UserService, private candidateService: CandidateService ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllCandidateElections();
    }

 
     deleteUser(id: number) {
         this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
     }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadAllCandidateElections() {
        this.candidateService.getAll().subscribe(candidateelections => { this.candidateelections = candidateelections; });
    }
}
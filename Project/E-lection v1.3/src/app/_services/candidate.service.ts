import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CandidateElections } from '../_models/index';

@Injectable()
export class CandidateService {
    constructor(private http: HttpClient) { }

    getAll() {
        console.log("http");
        return this.http.get<CandidateElections[]>('http://localhost:9001/candidatebyelections');
    }

}
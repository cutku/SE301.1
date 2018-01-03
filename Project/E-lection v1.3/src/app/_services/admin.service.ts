import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Admin } from '../_models/admin';

@Injectable()
export class AdminService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Admin[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(admin: Admin) {
        return this.http.post('/api/users', admin);
    }

    update(admin: Admin) {
        return this.http.put('/api/users/' + admin.id, admin);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
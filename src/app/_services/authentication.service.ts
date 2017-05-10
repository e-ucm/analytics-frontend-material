import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService {
	defaultOptions: any = {};

    constructor(private http: Http) { 
    	this.defaultOptions.headers = new Headers();
        this.defaultOptions.headers.append('Content-Type', 'application/json');
    }
 
    login(username: string, password: string) {
        return this.http.post('https://rage.e-ucm.es/api/login', JSON.stringify({ username: username, password: password }), this.defaultOptions)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json().user;
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }
 
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
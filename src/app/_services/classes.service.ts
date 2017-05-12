import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share';
 
@Injectable()
export class ClassesService {
	defaultOptions: any = {};

    public authToken = "";

    constructor(private http: Http) { 
    	this.defaultOptions.headers = new Headers();
        this.defaultOptions.headers.append('Content-Type', 'application/json');
    }

    setToken(token: string){
        this.authToken = token;
        if(!this.defaultOptions.headers.has('Authorization'))
            this.defaultOptions.headers.append('Authorization', 'Bearer ' + this.authToken);
    }

    getClasses(game, version){
        return this.http.get('https://rage.e-ucm.es/api/proxy/gleaner/games/' + game + '/versions/' + version + '/classes/my', this.defaultOptions)
            .map((response: Response) => {
                 return response.json();
            }).share();
    }

    addClass(game: string, version: string, name: string){
        return this.http.post('https://rage.e-ucm.es/api/proxy/gleaner/games/' + game + '/versions/' + version + '/classes', JSON.stringify({ name: name }), this.defaultOptions)
            .map((response: Response) => {
                 return response.json();
            }).share();
    }

    deleteClass(classe: string){
        return this.http.delete('https://rage.e-ucm.es/api/proxy/gleaner/classes/' + classe, this.defaultOptions)
            .map((response: Response) => {
                 return response.json();
            }).share();
    }
}
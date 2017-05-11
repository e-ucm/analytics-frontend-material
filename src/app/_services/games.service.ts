import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/share';
 
@Injectable()
export class GamesService {
	defaultOptions: any = {};

    public static games = [];
    public versions = [];
    public classes = [];
    public sessions = [];

    public authToken = "";

    constructor(private http: Http) { 
    	this.defaultOptions.headers = new Headers();
        this.defaultOptions.headers.append('Content-Type', 'application/json');
    }

    Games(){
        return GamesService.games;
    }

    setToken(token: string){
        this.authToken = token;
        if(!this.defaultOptions.headers.has('Authorization'))
            this.defaultOptions.headers.append('Authorization', 'Bearer ' + this.authToken);
    }

    initGames(){
        this.getGames().subscribe(
            data => {
                GamesService.games = data;

                for(let game of data){
                    this.getVersions(game._id).subscribe(
                        data => {
                            for(let version of data){
                                game.trackingCode = version.trackingCode;
                                this.getClasses(game._id, version._id).subscribe(
                                    data => {
                                        game.classes = data;
                                        for(let classe of game.classes){
                                            this.getSessions(game._id, version._id, classe._id).subscribe(
                                                data => {
                                                    for(let session of data){
                                                        classe.sessions = data;
                                                    }
                                                });
                                        }
                                    });
                            }
                        });
                }
            });
    }

    getGames(){
        return this.http.get('https://rage.e-ucm.es/api/proxy/gleaner/games/public', this.defaultOptions)
            .map((response: Response) => {
                return response.json();
            }).share();
    }

    getVersions(game){
        return this.http.get('https://rage.e-ucm.es/api/proxy/gleaner/games/' + game + '/versions', this.defaultOptions)
            .map((response: Response) => {
                 return response.json();
            }).share();
    }
    getClasses(game, version){
        return this.http.get('https://rage.e-ucm.es/api/proxy/gleaner/games/' + game + '/versions/' + version + '/classes/my', this.defaultOptions)
            .map((response: Response) => {
                 return response.json();
            }).share();
    }

    getSessions(game, version, classe){
        return this.http.get('https://rage.e-ucm.es/api/proxy/gleaner/games/' + game + '/versions/' + version + '/classes/' + classe + '/sessions/my', this.defaultOptions)
            .map((response: Response) => {
                 return response.json();
            }).share();
    }
}
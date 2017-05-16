import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../_services/games.service';
import { AlertService } from '../../_services/alert.service';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

	games: any = [];

    constructor(private gamesService: GamesService, private alertService: AlertService)
    { 
    	let token =  JSON.parse(localStorage.getItem("currentUser")).token;
        this.gamesService.setToken(token);
    }

    ngOnInit() {
    	this.gamesService.initGames();

    	this.games = this.gamesService.Games();
    }
}
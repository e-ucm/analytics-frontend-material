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
    	this.gamesService.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGUzNmY5NjBmMWU1MDAwNDVmMTAwZDciLCJyYW5kTnVtIjoiMDhmNjM4ZmU4ZTU5MzE2MTUyZjgiLCJpYXQiOjE0OTQ0MjQ0MjMsImV4cCI6MTQ5NTAyOTIyM30.RsyrVVrsrfNfGPu2To4lcWP-YY6kxwebujrJ0PYtPgs");
    }

    ngOnInit() {
    	this.gamesService.initGames();

    	this.games = this.gamesService.Games();
    }
}
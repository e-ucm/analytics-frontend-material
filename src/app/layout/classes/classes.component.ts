import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../_services/games.service';
import { AlertService } from '../../_services/alert.service';

@Component({
    selector: 'app-classes',
    templateUrl: './classes.component.html',
    styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

	classes: any = [];

    constructor(private gamesService: GamesService, private alertService: AlertService)
    { 
    	let token =  JSON.parse(localStorage.getItem("currentUser")).token;
        this.gamesService.setToken(token);
    }

    ngOnInit() {
    }
}
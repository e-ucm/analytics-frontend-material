import { Component, OnInit, Input  } from '@angular/core';

import { GamesService } from '../../../_services/games.service';

@Component({
    selector: 'app-new-class',
    templateUrl: './new-class.component.html',
    styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent implements OnInit {
	@Input() game: string;
	@Input() version: string;
    isActive = false;
    showMenu = '';
    model: any = {};
    
    classe = {};
    name = '';

    constructor(private gamesService: GamesService) {
        let token =  JSON.parse(localStorage.getItem("currentUser")).token;
    	this.gamesService.setToken(token);
    }

    ngOnInit() {
    }

    submit() {
        console.log("asdasd");
    	this.gamesService.addClass(this.game, this.version, this.model.name);
    }
}

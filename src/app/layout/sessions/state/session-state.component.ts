import { Component, OnInit, Input  } from '@angular/core';

import { GamesService } from '../../../_services/games.service';

@Component({
    selector: 'app-session-state',
    templateUrl: './session-state.component.html',
    styleUrls: ['./session-state.component.scss']
})
export class SessionStateComponent implements OnInit {
	@Input() sessionid: string;

    session = {};

    constructor(private gamesService: GamesService) {
        let token =  JSON.parse(localStorage.getItem("currentUser")).token;
    	this.gamesService.setToken(token);
    }

    ngOnInit() {
        this.gamesService.getSession(this.sessionid).subscribe(
                data => {
                    this.session = data;
                });
    }

    start(){
        this.gamesService.startSession(this.session);
    }

    stop(){
        this.gamesService.endSession(this.session);
    }
}

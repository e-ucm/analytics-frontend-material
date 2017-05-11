import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../_services/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	game: any = {};
    id: string;

    constructor(private route: ActivatedRoute, private gamesService: GamesService)
    { 
        let token =  JSON.parse(localStorage.getItem("currentUser")).token;
    	this.gamesService.setToken(token);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['gameid'];
            console.log(params); 

            for(let game of this.gamesService.Games()){
                if(game._id == this.id){
                    this.game = game;
                    break;
                }
            }
        });
    }
}
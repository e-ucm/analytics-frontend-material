import { Component, OnInit, Input  } from '@angular/core';

import { GamesService } from '../../../_services/games.service';

@Component({
    selector: 'app-card-class',
    templateUrl: './card-class.component.html',
    styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent implements OnInit {
	@Input() game: string;
	@Input() version: string;
    @Input() classe: string;

    classobject = {};

    constructor(private gamesService: GamesService) {
        let token =  JSON.parse(localStorage.getItem("currentUser")).token;
    	this.gamesService.setToken(token);
    }

    ngOnInit() {
        console.log(this.game + this.version + this.classe);

        for(let game of GamesService.games){
            if(game._id == this.game){
                for(let classe of game.classes){
                    if(classe._id == this.classe){
                        this.classobject = classe;
                        break;
                    }
                }
                break;
            }
        }
    }

    delete(){
        this.gamesService.deleteClass(this.game,this.classe);
    }
}

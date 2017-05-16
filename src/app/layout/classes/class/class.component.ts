import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../_services/games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-class',
    templateUrl: './class.component.html',
    styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

	classe: any = {};
    id: string;

    constructor(private route: ActivatedRoute, private gamesService: GamesService)
    { 
        let token =  JSON.parse(localStorage.getItem("currentUser")).token;
    	this.gamesService.setToken(token);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['class'];

            for(let game of this.gamesService.Games()){
                for(let classe of game.classes){
                    if(classe._id == this.id){
                        this.classe = classe;
                        console.log(this.classe);
                        break;
                    }
                }
            }
        });
    }
}
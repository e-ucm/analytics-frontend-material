import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../../_services/games.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive = false;
    showMenu = '';
    menus = [];
    games = [];

    constructor(private gamesService: GamesService) {
        this.gamesService.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGUzNmY5NjBmMWU1MDAwNDVmMTAwZDciLCJyYW5kTnVtIjoiMDhmNjM4ZmU4ZTU5MzE2MTUyZjgiLCJpYXQiOjE0OTQ0MjQ0MjMsImV4cCI6MTQ5NTAyOTIyM30.RsyrVVrsrfNfGPu2To4lcWP-YY6kxwebujrJ0PYtPgs");
        
        this.gamesService.initGames();
    }

    ngOnInit() {
        this.games = GamesService.games;
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    Switch(element: any){
        var index = this.menus.indexOf(element);
        if(index === -1)
            this.menus.push(element);
        else
            this.menus.splice(index,1);
    }
}

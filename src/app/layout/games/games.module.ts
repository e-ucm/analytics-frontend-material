import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GamesRoutingModule } from './games-routing.module';
import { GameModule } from './game/game.module';
import { GamesComponent } from './games.component';
import { PageHeaderModule } from './../../shared';

import { GamesService } from '../../_services/games.service';
import { AlertService } from '../../_services/alert.service';

@NgModule({
    imports: [
        CommonModule,
        GamesRoutingModule,
        PageHeaderModule,
        GameModule
    ],
    declarations: [GamesComponent],
    providers: [
        AlertService,
        GamesService]
})
export class GamesModule { }

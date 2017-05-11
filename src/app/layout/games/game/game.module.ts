import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { PageHeaderModule } from './../../../shared';

import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule
    ],
    declarations: [GameComponent],
    providers: [GamesService],
  	exports: [GameComponent]
})
export class GameModule { }

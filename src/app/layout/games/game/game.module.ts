import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { NewClassModule } from '../../classes/new/new-class.module';
import { CardClassModule } from '../../classes/card/card-class.module';

import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        NewClassModule,
        CardClassModule
    ],
    declarations: [GameComponent],
    providers: [GamesService],
  	exports: [GameComponent]
})
export class GameModule { }

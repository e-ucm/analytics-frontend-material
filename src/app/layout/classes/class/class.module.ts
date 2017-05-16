import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class.component';
import { SessionStateModule } from '../../sessions/state/session-state.module';

import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        SessionStateModule
    ],
    declarations: [ClassComponent],
    providers: [GamesService],
  	exports: [ClassComponent]
})
export class ClassModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SessionStateComponent } from './session-state.component';
import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [SessionStateComponent],
    exports: [SessionStateComponent],
    providers: [GamesService]
})
export class SessionStateModule { }

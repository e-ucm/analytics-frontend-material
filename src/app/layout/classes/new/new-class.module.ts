import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NewClassComponent } from './new-class.component';

import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [NewClassComponent],
    exports: [NewClassComponent],
    providers: [GamesService]
})
export class NewClassModule { }

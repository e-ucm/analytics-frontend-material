import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClassesRoutingModule } from './classes-routing.module';
import { ClassModule } from './class/class.module';
import { ClassesComponent } from './classes.component';
import { PageHeaderModule } from './../../shared';

import { GamesService } from '../../_services/games.service';
import { AlertService } from '../../_services/alert.service';

@NgModule({
    imports: [
        CommonModule,
        ClassesRoutingModule,
        PageHeaderModule,
        ClassModule
    ],
    declarations: [ClassesComponent],
    providers: [
        AlertService,
        GamesService]
})
export class ClassesModule { }

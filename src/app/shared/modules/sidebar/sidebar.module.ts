import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component'
;import { LayoutRoutingModule } from '../../../layout/layout-routing.module';

import { GamesService } from '../../../_services/games.service';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    declarations: [SidebarComponent],
    exports: [SidebarComponent],
    providers: [GamesService]
})
export class SidebarModule { }

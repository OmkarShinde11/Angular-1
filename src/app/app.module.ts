import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeCockpitComponent } from './recipe/recipe-cockpit/recipe-cockpit.component';
import { RecipeInfoComponent } from './recipe/recipe-info/recipe-info.component';
import { RandomComponent } from './random/random.component';
import { MusicComponent } from './music/music.component';
import { ChoclateComponent } from './choclate/choclate.component';
import { GamecontrolComponent } from './gamecontrol/gamecontrol.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ListComponent } from './list/list.component';
import { BasicDirective } from './Dir/basic.directive';
import { AdvanceDirective } from './Dir/advance.directive';
import { HostDirective } from './Dir/host.directive';
import { BindDirective } from './Dir/bind.directive';
import { StructuralDirective } from './Dir/structural.directive';
import { DirectivesComponent } from './directives/directives.component';
import { AddDirective } from './Dir/add.directive';
import { HoverDirective } from './Dir/hover.directive';
import { FadeinFadeoutDirective } from './Dir/fadein-fadeout.directive';
import { Structure2Directive } from './Dir/structure2.directive';
import { ClassDirective } from './Dir/class.directive';
import { TooltipDirective } from './Dir/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerComponent,
    RecipeComponent,
    RecipeCockpitComponent,
    RecipeInfoComponent,
    RandomComponent,
    MusicComponent,
    ChoclateComponent,
    GamecontrolComponent,
    OddComponent,
    EvenComponent,
    ListComponent,
    BasicDirective,
    AdvanceDirective,
    HostDirective,
    BindDirective,
    StructuralDirective,
    DirectivesComponent,
    AddDirective,
    HoverDirective,
    FadeinFadeoutDirective,
    Structure2Directive,
    ClassDirective,
    TooltipDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    EvenComponent
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WarriorComponent } from './warrior/warrior.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ImageComponent } from './warrior/image/image.component';
import { WarriorDetailsComponent } from './warrior/warrior-details/warrior-details.component';
import { WarriorDetailsXPComponent } from './warrior/warrior-details/warrior-details-xp/warrior-details-xp.component';
import { WarriorDetailsCoinsComponent } from './warrior/warrior-details/warrior-details-coins/warrior-details-coins.component';
import { WarriorDetailsButtonsComponent } from './warrior/warrior-details/warrior-details-buttons/warrior-details-buttons.component';
import { WarriorDefinitionsComponent } from './warrior/warrior-definitions/warrior-definitions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WarriorComponent,
    DropdownDirective,
    ImageComponent,
    WarriorDetailsComponent,
    WarriorDetailsXPComponent,
    WarriorDetailsCoinsComponent,
    WarriorDetailsButtonsComponent,
    WarriorDefinitionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

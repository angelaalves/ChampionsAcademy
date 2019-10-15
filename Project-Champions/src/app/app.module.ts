import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

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
import { ClosetComponent } from './closet/closet.component';
import { AppRoutingModule } from './app-routing.module';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ClosetImageComponent } from './closet/closet-image/closet-image.component';
import { ClosetSkinsComponent } from './closet/closet-skins/closet-skins.component';
import { LoginComponent } from './login/login.component';
import { GuildComponent } from './guild/guild.component';


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
    WarriorDefinitionsComponent,
    ClosetComponent,
    SetPasswordComponent,
    ChangePasswordComponent,
    ClosetImageComponent,
    ClosetSkinsComponent,
    LoginComponent,
    GuildComponent
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

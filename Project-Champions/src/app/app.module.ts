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
import { GuildMemberComponent } from './guild/guild-member/guild-member.component';
import { GuildMasterComponent } from './guild-master/guild-master.component';
import { GuildMasterImageComponent } from './guild-master/guild-master-image/guild-master-image.component';
import { GuildMasterDefinitionsComponent } from './guild-master/guild-master-definitions/guild-master-definitions.component';
import { GuildMasterDetailsComponent } from './guild-master/guild-master-details/guild-master-details.component';
import { GuildMasterDetailsButtonsComponent } from './guild-master/guild-master-details/guild-master-details-buttons/guild-master-details-buttons.component';
import { GuildMasterDetailsCoinsComponent } from './guild-master/guild-master-details/guild-master-details-coins/guild-master-details-coins.component';
import { GuildMasterDetailsXpComponent } from './guild-master/guild-master-details/guild-master-details-xp/guild-master-details-xp.component';
import { AncientComponent } from './ancient/ancient.component';
import { AncientImageComponent } from './Ancient/ancient-image/ancient-image.component';
import { AncientDetailsComponent } from './Ancient/ancient-details/ancient-details.component';
import { AncientDefinitionsComponent } from './Ancient/ancient-definitions/ancient-definitions.component';
import { AddUserComponent } from './ancient/add-user/add-user.component';
import { GuildListComponent } from './guild-list/guild-list.component';


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
    GuildComponent,
    GuildMemberComponent,
    GuildMasterComponent,
    GuildMasterImageComponent,
    GuildMasterDefinitionsComponent,
    GuildMasterDetailsComponent,
    GuildMasterDetailsButtonsComponent,
    GuildMasterDetailsCoinsComponent,
    GuildMasterDetailsXpComponent,
    AncientComponent,
    AncientImageComponent,
    AncientDetailsComponent,
    AncientDefinitionsComponent,
    AddUserComponent,
    GuildListComponent
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

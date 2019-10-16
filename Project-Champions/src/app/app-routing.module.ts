import { WarriorComponent } from './warrior/warrior.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosetComponent } from './closet/closet.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { GuildComponent } from './guild/guild.component';
import { GuildMasterComponent } from './guild-master/guild-master.component';
import { AncientComponent } from './ancient/ancient.component';
import { AddUserComponent } from './ancient/add-user/add-user.component';

const appRoutes: Routes=[
    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'set_password', component: SetPasswordComponent},
    {path: 'change_password', component: ChangePasswordComponent},
    {path: 'warrior_profile', component: WarriorComponent},
    {path: 'closet', component: ClosetComponent},
    {path: 'guild', component: GuildComponent},
    {path: 'guild-master_profile', component: GuildMasterComponent},
    {path: 'Ancient_profile', component: AncientComponent},
    {path: 'AddPlayer', component: AddUserComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
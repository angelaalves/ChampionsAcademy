import { WarriorComponent } from './warrior/warrior.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosetComponent } from './closet/closet.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { GuildComponent } from './guild-list/guild/guild.component';
import { GuildMasterComponent } from './guild-master/guild-master.component';
import { AncientComponent } from './ancient/ancient.component';
import { AddUserComponent } from './ancient/add-user/add-user.component';
import { GuildListComponent } from './guild-list/guild-list.component';

import { RewardsComponent } from './rewards/rewards.component';
import { RewardsToApproveComponent } from './rewards/rewards-to-approve/rewards-to-approve.component';
import { EventsComponent } from './events/events.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { VideosComponent } from './videos/videos.component';
import { AddGuildListComponent } from './guild-list/add-guild-list/add-guild-list.component';
import { AddEventsComponent } from './events/add-events/add-events.component';
import { AddSkinComponent } from './closet/add-skin/add-skin.component';
import { AncientProfileComponent } from './ancient-profile/ancient-profile.component';
import { ListUsersComponent } from './list-users/list-users.component';


const appRoutes: Routes=[
    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'set_password', component: SetPasswordComponent},
    {path: 'change_password', component: ChangePasswordComponent},
    {path: 'warrior_profile', component: WarriorComponent},
    {path: 'guild', component: GuildComponent},
    {path: 'guildmaster_profile', component: GuildMasterComponent},
    {path: 'ancient_profile', component: AncientProfileComponent, children:[
    {path: 'add_guild', component: AddGuildListComponent},
    {path: 'add_events', component: AddEventsComponent}, 
    {path: 'add_skin', component: AddSkinComponent},
    {path: 'add_user', component: AddUserComponent},
    {path: 'ancient_profile', component: AncientComponent},
    {path: 'guilds_list', component: GuildListComponent},
    {path: 'list_users', component: ListUsersComponent},
    {path: 'rewards', component: RewardsComponent},
    {path: 'rewards_to_aprove', component: RewardsToApproveComponent},
    {path: 'events', component: EventsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'closet', component: ClosetComponent},
    {path: 'videos', component: VideosComponent}
 ],

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
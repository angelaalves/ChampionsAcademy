import { WarriorComponent } from './warrior/warrior.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes=[
    {path: '', redirectTo: '/login', pathMatch:'full'},
    {path: 'warrior_profile', component: WarriorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
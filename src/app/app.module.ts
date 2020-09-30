import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { TeamListComponent } from './components/team-list/team-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import {TeamsService} from './services/teams.service';

const rutas: Routes = [
  {
    path: '',
    redirectTo: '/teams',
    pathMatch: 'full'
  },
  {
    path: 'teams',
    component: TeamListComponent
  },
  {
    path: 'teams/add',
    component: TeamFormComponent
  },
  {
    path: 'teams/edit/:id',
    component: TeamFormComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TeamFormComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

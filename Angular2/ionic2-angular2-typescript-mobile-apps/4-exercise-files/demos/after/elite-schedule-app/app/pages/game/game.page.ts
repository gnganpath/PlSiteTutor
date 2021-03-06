import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'build/pages/game/game.page.html',
})
export class GamePage {
  game: any;

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private eliteApi: EliteApi) { }

  ionViewLoaded(){
    this.game = this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.nav.push(TeamHomePage, team);
  }
}

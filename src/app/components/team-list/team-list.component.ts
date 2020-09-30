import { Component, OnInit, HostBinding } from '@angular/core';
import { TeamsService} from '../../services/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  teams: any =[];

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
   this.getTeams();
  }

  getTeams(): void {
    this.teamsService.getTeams().subscribe(
      res => {
        this.teams = res;
        console.log(this.teams);
      },
      err => console.log(err),
    );
  }

  deleteTeam (id: string){
    this.teamsService.deleteTeam(id).subscribe(
      res => {
        console.log(res);
        this.getTeams();
      },
      err => console.log(err),
    );
  }

}

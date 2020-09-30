import { Team } from './../../models/Team';
import { Component, OnInit, HostBinding } from '@angular/core';
import { TeamsService } from './../../services/teams.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})
export class TeamFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  team: Team = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private teamService:TeamsService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.teamService.getTeam(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.team = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveTeam(): void {
    delete this.team.created_at;
    delete this.team.id;
    this.teamService.saveTeam(this.team)
    .subscribe(
      res => {
        this.router.navigate(['/teams'])
        console.log(res);
      },
      err => console.log(err)
    );
  }

  editTeam(): void  {
    delete this.team.created_at;
    this.teamService.updateTeam(this.team.id, this.team)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/teams']);
        },
        err => console.error(err)
      );
 }
}

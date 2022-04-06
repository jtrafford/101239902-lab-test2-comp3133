import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { mission } from '../models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions?: any;
  selected?: mission;


  constructor(private api: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllMissions().subscribe((mission) => {
      this.missions = mission;

      console.log(this.missions);
    });
  }

  select(mission: mission) {
    this.selected = mission;

    this.router.navigate(['details', this.selected.flight_number]);
  }
}
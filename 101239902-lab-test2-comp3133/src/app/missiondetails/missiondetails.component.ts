import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})

export class MissiondetailsComponent implements OnInit {
  mission?: mission;

  constructor(private api: SpacexapiService, private router: Router) { }

  ngOnInit(): void { this.getMission(); }

  getMission() {
    const id = window.location.href.split('?')[0].split('/').pop();

    console.log(id);

    if (id) {
      this.api.getMissionById(id).subscribe(mission => this.mission = mission);
    }
  }

  home() {
    this.router.navigate(['/']);
  }
}
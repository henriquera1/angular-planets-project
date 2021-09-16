import { Component, OnInit } from '@angular/core';
import { Planet } from '../models/planet';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {

planets1 = {} as Planet;
planets?: Planet[];

  constructor(private planetService: PlanetService) { }

  ngOnInit() {
    this.getPlanets();
  }

  getPlanets(){
    this.planetService.getPlanets().subscribe((planets1: Planet[]) => {
      this.planets = planets1;
      console.log(planets1);
    });
  }

}

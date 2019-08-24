import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  items: Array<any> = ["Pas d'enseigants, de classes ou de cahiers",
    "Apprentissage entre pairs par projet",
    "Aucun frais de scolarité!",
    "Aucune expérience ni diplome requis",
    "Programme ludique",
    "Travaille sur des projets réels",
    "Ambiance de collaboration et de partage",
    "Contact direct avec le marché de travail",
    "Etre partie d'une grande famille"

  ]

  constructor() { }

  ngOnInit() {
  }

}

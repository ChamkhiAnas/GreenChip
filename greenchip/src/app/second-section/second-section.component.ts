import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.css']
})
export class SecondSectionComponent implements OnInit {

  items: Array<any> = ["Pas de cours magistraux ... mais  plutôt un parcours professionnalisant",
    "Réapprendre à apprendre avec la pédagogie active",
    "Aucun frais de scolarité!",
    "Aucune expérience ni diplome pré-requis",
    "Chacun contribue a la progression de tous",
    "Se mettre en projets professionnels ",
    "Une bonne dose de courage et de détermination",
    "Un accès facile au marché du travail",
    "Faire partie d'une nouvelle famille ☺"

  ]

  constructor() { }

  ngOnInit() {
  }

}

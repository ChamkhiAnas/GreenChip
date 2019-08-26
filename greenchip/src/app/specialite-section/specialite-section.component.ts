import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialite-section',
  templateUrl: './specialite-section.component.html',
  styleUrls: ['./specialite-section.component.css']
})
export class SpecialiteSectionComponent implements OnInit {

  devdata: Array<any> = [
    {
      id: "M1",
      content: "Importer et nettoyer les données </156h>"
    },
    {
      id: "M2",
      content: "Comprendre et utiliser les bases de données </228h>"
    },
    {
      id: "M3",
      content: "Manipuler et exploiter les données </249h>"
    },
    {
      id: "M4",
      content: "Visualiser et partager les données </249h>"
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}

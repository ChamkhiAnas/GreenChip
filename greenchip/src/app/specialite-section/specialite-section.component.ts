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

  refdeg: Array<any> = [
    {
      id: "M1",
      content: "Produire des sites et des applications </270h>"
    },
    {
      id: "M2",
      content: "Outils numériques, méthodologie de projet, Organisation de la productivité </170h>"
    },
    {
      id: "M3",
      content: "Communiquer et prospecter via des outils en ligne </340h>"
    },
    {
      id: "M4",
      content: "Diffusion de la digitalisation par la médiation numérique et de l'événementiel </150>"
    },

  ]

  devweb: Array<any> = [
    {
      id: "M1",
      content: "Concevoir et maquetter son application dans le cadre d'une équipe projet et en relation avec son client</62h>"
    },
    {
      id: "M2",
      content: "Développer la partie front-end d'une application web ou mobile en intégrant les recommandations de sécurité </400h>"
    },
    {
      id: "M3",
      content: "sécurité informatique et RGPD </68h>"
    },

  ]

  datajob: Array<any> = ["Data Préparateur", "Data Designer", "Data Analyst", "Assistant Data Scientist", "Data Miner", "Data Storyteller"];
  digijob: Array<any> = ["Webmaster", "intégrateur Web", "Growth Hacker", "Communication Web", "Médiateur digital", "Consultant en digitalisation d'entreprise"];
  webjob: Array<any> = ["Développeur web", "Développeur Logiciel", "Développeur Mobile", "Chef de projet web"];

  constructor() { }

  ngOnInit() {
  }

}

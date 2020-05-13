import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scientifiques.component.html',
  styleUrls: ['./scientifiques.component.css']
})
export class ScientifiquesComponent implements OnInit {

  title = 'Détail sur';
  personne = {
    prenom: 'Albert',
    nom: 'Einstein',
    decouverte: 'E = MC2',
    description: 'Albert Einstein né le 14 mars 1879 à Ulm, dans le Wurtemberg, et mort le 18 avril 1955 à Princeton, dans le New Jersey, est un physicien théoricien. Il fut successivement allemand, apatride, suisse et de double nationalité helvético-américaine. Il épousa Mileva Marić, puis sa cousine Elsa Einstein.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}

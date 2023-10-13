import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments"
  ajoutActive=false;
  nomDevoir:string ='';
  dateRendu:Date=new Date();


  assignments = [
    {
      nom:"TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date ('2020-11-17'),
      rendu: true
    },
    {
      nom:"TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)",
      dateDeRendu: new Date ('2020-12-15'),
      rendu: false
    },
    {
      nom:"TP3 Angular, utilisation du router et de Web Services",
      dateDeRendu: new Date ('2020-01-04'),
      rendu: false
    }
  ]

  constructor() { }

  ngOnInit() : void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    console.log(this.nomDevoir);
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;

    this.assignments.push(newAssignment);
  }


}



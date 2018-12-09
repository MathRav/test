import { EtudiantsProvider } from './../../providers/etudiants/etudiants';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  etudiants:any;
  constructor(public navCtrl: NavController,public ep:EtudiantsProvider) {
    this.getListeClients();
  }
  public getListeClients(){
    this.ep.getListeEtudiants().then(data=>{
       console.log(data);
        this.etudiants=data;
    });

  }
}

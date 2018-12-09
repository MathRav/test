import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EtudiantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EtudiantsProvider {
  apiURL="https://mighty-peak-31930.herokuapp.com/ListerAPI";
  constructor(public http: HttpClient) {
    console.log('Hello EtudiantsProvider Provider');
  }
  public getListeEtudiants(){
    return new Promise(resolve=>{
      this.http.get(this.apiURL).subscribe(data=>{
        console.log(data);
        resolve(data);
      },err=>{
        console.log(err);
       });
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberA;
  typeOfAction;
  result;
  constructor(public navCtrl: NavController) {

  }

  performFunction(type){
    var a = parseInt(this.numberA);
    console.log(type);

    if( type == 'a'){
      this.typeOfAction = "Peso  no Sol"
      this.result = (a/9.81)*274.13;
    }else if(type == 'b'){
      this.typeOfAction = "Peso na Lua"
      this.result = (a/9.81)*1.622;
    }else if(type == 'c'){
      this.typeOfAction = "Peso em Mercúrio"
      this.result = (a/9.81)*3.7;
    }else if(type == 'd'){
      this.typeOfAction = "Peso em Vênus"
      this.result = (a/9.81)*8.87;
    }else if(type == 'e'){
      this.typeOfAction = "Peso em Marte"
      this.result = (a/9.81)*3.711;
    }else if(type == 'f'){
      this.typeOfAction = "Peso em Júpiter"
      this.result = (a/9.81)*24.79;
    }else if(type == 'g'){
      this.typeOfAction = "Peso em Saturno"
      this.result = (a/9.81)*10.44;
    }else if(type == 'h'){
      this.typeOfAction = "Peso em Urano"
      this.result = (a/9.81)*8.69;
    }else if(type == 'i'){
      this.typeOfAction = "Peso em Netuno"
      this.result = (a/9.81)*11.15;
    }else if(type == 'j'){
      this.typeOfAction = "Peso em Plutão"
      this.result = (a/9.81)*0.066;
    }else if(type == 'k'){
      this.typeOfAction = "Peso em Titã"
      this.result = (a/9.81)*1.352;
    }else if(type == 'l'){
      this.typeOfAction = "Peso em Europa"
      this.result = (a/9.81)*1,315;
    }
  }
}
